# Shopify

Shopify is an e-commerce platform. This toolkit is GraphQL-first for new Admin API automations while retaining legacy REST compatibility actions for older workflows and numeric-ID interoperability

- **Category:** ecommerce
- **Auth:** API_KEY, OAUTH2, S2S_OAUTH2
- **Composio-managed OAuth available?** No
- **Tools:** 407
- **Triggers:** 45
- **Slug:** `SHOPIFY`
- **Version:** 20260916_00

## Frequently Asked Questions

### How do I set up custom OAuth credentials for Shopify?

For a step-by-step guide on creating and configuring your own Shopify OAuth credentials with Composio, see [How to create OAuth credentials for Shopify](https://composio.dev/auth/shopify).

### Why am I seeing "App not found" when connecting Shopify?

The default Shopify OAuth app may be under review or expired. Use your own OAuth app or API authentication method until the default is restored.

### Shopify order update 403s can be caused by missing `read_all_orders` scope

Check the scopes on the Shopify connection. If order reads or updates require access beyond the default order scope set, reconnect with the needed order scopes such as `read_all_orders` before retrying.

## Tools

### Activate One-Time Charge

**Slug:** `SHOPIFY_ACTIVATE_ONE_TIME_CHARGE`

Activate a one-time application charge in Shopify. Use when you need to finalize billing for an accepted charge. DEPRECATED: This endpoint is deprecated as of API version 2021-01. One-time charges are now immediately activated when approved by a merchant, making this activation step no longer required for newer API versions.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `application_charge_id` | integer | Yes | The unique identifier of the application charge to activate. The charge must be in 'accepted' status before activation. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Add product to custom collection (Deprecated)

**Slug:** `SHOPIFY_ADD_PRODUCT_TO_COLLECTION`

DEPRECATED: Use SHOPIFY_ADDS_A_PRODUCT_TO_A_CUSTOM_COLLECTION instead. Adds a product to an existing *custom collection*, optionally specifying its `position` if the collection is manually sorted.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `position` | integer | No | Optional position where the product appears in a manually sorted custom collection. If unspecified, the product is added to the end. Note: Positions are not guaranteed to be consecutive. Only honored when the collection's `sort_order` is set to `manual`; ignored silently otherwise. |
| `product_id` | string | Yes | The unique numeric identifier for the product to add to the collection. |
| `collection_id` | integer | Yes | The ID of the custom collection to add the product to. Note: Products can only be added to custom collections, not smart collections. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Add product to custom collection

**Slug:** `SHOPIFY_ADD_PRODUCT_TO_CUSTOM_COLLECTION`

Add a product to a custom collection by creating a collect resource. Use when you need to link a product to a custom collection. Note: Can only add products to custom collections, not smart collections.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `product_id` | integer | Yes | The unique numeric identifier for the product to add to the collection. |
| `collection_id` | integer | Yes | The ID of the custom collection to add the product to. Can only link products to custom collections, not smart collections. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Adjust inventory levels

**Slug:** `SHOPIFY_ADJUST_INVENTORY_LEVEL`

Adjust the inventory level of an inventory item at a single location. Use when you need to increase or decrease stock quantities at a specific location.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `location_id` | string | Yes | The ID of the location where the inventory level will be adjusted. Use the Location resource to find valid location IDs. |
| `inventory_item_id` | integer | Yes | The ID of the inventory item being adjusted. This identifies the specific product variant whose inventory will be updated. |
| `available_adjustment` | integer | Yes | The amount to adjust the available inventory quantity. Positive values increase stock (e.g., 5 adds 5 units), negative values decrease stock (e.g., -3 removes 3 units). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Apply fulfillment hold

**Slug:** `SHOPIFY_APPLY_FULFILLMENT_HOLD`

Applies a fulfillment hold to an open fulfillment order, halting all fulfillment work. Use when you need to pause fulfillment due to payment issues, fraud concerns, address problems, or inventory shortages. The fulfillment order status will change to on_hold, preventing any fulfillment work from proceeding until the hold is released.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `reason` | string ("awaiting_payment" | "high_risk_of_fraud" | "incorrect_address" | "inventory_out_of_stock" | "other") | Yes | Reason for applying the hold. Must be one of: awaiting_payment, high_risk_of_fraud, incorrect_address, inventory_out_of_stock, or other. |
| `reason_notes` | string | No | Additional context or explanation for the hold reason. Provides more details beyond the standard reason. |
| `notify_merchant` | boolean | No | Whether to send a notification to the merchant about this hold via the Shopify mobile app. Defaults to false if not specified. |
| `fulfillment_order_id` | string | Yes | The unique identifier of the fulfillment order to place on hold. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Approve a comment

**Slug:** `SHOPIFY_APPROVE_COMMENT`

Approves a pending comment and publishes it to a blog article, making it publicly visible to readers. This action changes the comment's status from 'pending' or 'unapproved' to 'published' and sets the published_at timestamp. Use this when moderating blog comments that require approval before appearing on the storefront. Requires the 'write_content' scope.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `comment_id` | string | Yes | The unique numeric ID of the comment to approve and publish. Must be a comment with status 'pending' or 'unapproved'. Get comment IDs from the list comments or create comment actions. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Bulk create products via GraphQL

**Slug:** `SHOPIFY_BULK_CREATE_PRODUCTS`

Creates many products (20-50+) in one asynchronous Shopify bulk mutation job. Uses stagedUploadsCreate for JSONL upload, then bulkOperationRunMutation with productCreate, polling until completion and returning per-row success/errors.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `products` | array | Yes | Array of product inputs to create. Recommended 20-50+ items for optimal bulk operation efficiency. |
| `max_poll_attempts` | integer | No | Maximum polling attempts before timeout. Default 60 (5 minutes with 5s interval). |
| `poll_interval_seconds` | integer | No | Seconds to wait between status polls. Default 5. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Bulk delete customer addresses (Deprecated)

**Slug:** `SHOPIFY_BULK_DELETE_CUSTOMER_ADDRESSES`

Bulk delete multiple customer addresses in a single operation. This action permanently removes several addresses from a customer's address book at once, which is more efficient than deleting addresses one by one. Use this when you need to clean up multiple invalid or outdated addresses for a customer. Requires the 'write_customers' scope and access to protected customer data.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `operation` | string | No | The bulk operation to perform. Currently only 'destroy' is supported, which permanently deletes the specified addresses from the customer's account. |
| `address_ids` | array | Yes | Array of address IDs to delete from the customer's address book. You must provide at least one address ID. Each ID should be a valid address that belongs to the specified customer. |
| `customer_id` | string | Yes | The unique identifier for the customer in Shopify. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete metafields in bulk

**Slug:** `SHOPIFY_BULK_DELETE_METAFIELDS`

Deletes multiple metafields in bulk using their owner ID, namespace, and key. If a metafield doesn't exist, the mutation still succeeds but returns null for that identifier in the response.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `metafields` | array | Yes | List of metafield identifiers to delete. Each identifier specifies the owner ID (GID), namespace, and key. If a metafield doesn't exist, the mutation still succeeds but returns null for that identifier. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Bulk delete metaobjects

**Slug:** `SHOPIFY_BULK_DELETE_METAOBJECTS`

Asynchronously delete metaobjects and their associated metafields in bulk. Use this action to delete multiple metaobjects by their IDs or delete all metaobjects of a specific type. The operation is asynchronous and returns a job ID for tracking completion status.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `where` | object | Yes | Specifies which metaobjects to delete. Must provide either 'ids' (array of metaobject IDs) or 'type' (string representing metaobject type). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Run Shopify bulk query operation

**Slug:** `SHOPIFY_BULK_QUERY_OPERATION`

Run a Shopify GraphQL bulk query operation and return the result file URL and operation metadata. Use when you need to retrieve large datasets (thousands of records) from Shopify without manual pagination, such as bulk fetching products, orders, customers, or inventory. The query must include at least one connection (edges/nodes structure). This action polls the operation status until completion or timeout.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `query` | string | Yes | GraphQL bulk query string. CRITICAL: Every connection field (any field returning a Connection type like LineItemConnection, VariantConnection, OrderConnection, etc.) must use the edges { node { ... } } pattern. This applies to top-level queries AND all nested relationship fields (e.g., lineItems, variants, fulfillments, transactions, refunds, etc.). Scalar fields and object types (not connections) can be accessed directly. This query will be wrapped in a bulkOperationRunQuery mutation. Use actual newlines in the query, not escaped sequences like '\n'. If escaped sequences are provided (e.g., from JSON serialization), they will be automatically converted to actual characters. |
| `timeout_seconds` | number | No | Maximum number of seconds to wait for the bulk operation to complete before timing out. Shopify bulk operations can take several minutes for large datasets. |
| `client_identifier` | string | No | Optional identifier to track this bulk operation for debugging or logging purposes. |
| `poll_interval_seconds` | number | No | Number of seconds to wait between polling attempts when checking bulk operation status. Shopify recommends polling every 1-2 seconds. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Calculate a refund

**Slug:** `SHOPIFY_CALCULATE_REFUND`

Calculate accurate refund amounts, taxes, and transactions for a Shopify order before creating an actual refund. Use this action to: - Preview refund calculations for line items with accurate tax breakdowns - Determine shipping refund amounts and maximum refundable values - Get suggested transactions that can be used to create the actual refund The response includes transactions with kind='suggested_refund' which must be changed to kind='refund' before creating an actual refund using the create refund endpoint.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `currency` | string | No | The ISO 4217 three-letter currency code (e.g., 'USD', 'EUR', 'CAD'). Required when shipping 'amount' is specified. |
| `order_id` | string | Yes | The unique identifier of the order for which to calculate the refund. |
| `shipping` | object | No | Shipping refund specification. Specify either full_refund or amount, not both. |
| `refund_line_items` | array | No | Array of line items to refund. Each item requires line_item_id, quantity, and optionally restock_type with location_id for inventory management. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Cancel App Subscription

**Slug:** `SHOPIFY_CANCEL_APP_SUBSCRIPTION`

Cancel an app subscription in Shopify using the appSubscriptionCancel GraphQL mutation. Use when you need to cancel an existing app subscription, optionally with prorated credits.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The ID of the app subscription to be cancelled. Must be in the format: gid://shopify/AppSubscription/{id} (e.g., gid://shopify/AppSubscription/12345678). |
| `prorate` | boolean | No | Whether to issue prorated credits for the unused portion of the app subscription. If true, there will be a corresponding deduction (based on revenue share) to your Partner account. Defaults to false. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Cancel Shopify bulk operation

**Slug:** `SHOPIFY_CANCEL_BULK_OPERATION`

Cancel a running Shopify bulk operation. Use when you need to stop a long-running bulk query or mutation operation that is no longer needed. Note that there may be a short delay between when cancelation starts and when the operation is actually canceled.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The ID of the bulk operation to cancel. Must be in GID format: gid://shopify/BulkOperation/{operation_id}. You can obtain this ID from the response of bulkOperationRunQuery or bulkOperationRunMutation actions. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Cancel a fulfillment

**Slug:** `SHOPIFY_CANCEL_FULFILLMENT`

Cancels an existing fulfillment by its ID, reverting all line items to an unfulfilled state. Use this when a fulfillment was created in error or needs to be redone. The cancellation is permanent and cannot be undone - the line items will return to the unfulfilled state and a new fulfillment must be created if needed. Only fulfillments that haven't been shipped or are in certain states can be cancelled.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fulfillment_id` | string | Yes | The unique identifier of the fulfillment to cancel. Obtain this ID from a fulfillment that was previously created or by retrieving fulfillments for an order. The fulfillment must be in a state that allows cancellation (not already cancelled or completed with shipped status). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Cancel a Fulfillment Order

**Slug:** `SHOPIFY_CANCEL_FULFILLMENT_ORDER`

Cancels a fulfillment order in Shopify and marks it as closed. This creates a replacement fulfillment order with the same line items, allowing reassignment to a different location. Use this for merchant-managed fulfillments. For third-party fulfillment services, use the cancellation request endpoints instead. This endpoint immediately cancels the order without requiring acceptance from a fulfillment service.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fulfillment_order_id` | string | Yes | The ID of the fulfillment order to cancel. Can be provided as an integer or string. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Cancel an order

**Slug:** `SHOPIFY_CANCEL_ORDER`

Cancels a Shopify order and optionally restocks items and sends email notifications. Use when canceling an order that has not yet been paid or fulfilled. Orders cannot be cancelled if payment status is already paid or if the order has existing fulfillments.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `email` | boolean | No | Whether to send a cancellation email notification to the customer. |
| `amount` | string | No | The refund amount when canceling the order. Required for multi-currency orders along with currency. |
| `reason` | string | No | The reason for canceling the order. Common values include 'customer', 'fraud', 'inventory', 'declined', 'other'. |
| `refund` | object | No | An object containing detailed refund information. Should be generated using the Refund API's 'calculate' endpoint, specifying each line item with line_item_id, quantity, and restock_type. |
| `restock` | boolean | No | Whether to restock the items from the canceled order back into inventory. Note: This parameter is deprecated but still functional. |
| `currency` | string | No | The currency code for the refund amount (e.g., 'USD', 'CAD'). Required when amount is specified in multi-currency scenarios. |
| `order_id` | string | Yes | The unique identifier of the order to cancel. Must use the order's API id, not order_number. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Close an order

**Slug:** `SHOPIFY_CLOSE_ORDER`

Closes an open Shopify order. Use when all line items have been fulfilled or canceled and all financial transactions are complete.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `order_id` | integer | Yes | The unique identifier of the Shopify order to close. The order must be open with all line items fulfilled or canceled and all financial transactions completed. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Complete a draft order

**Slug:** `SHOPIFY_COMPLETE_DRAFT_ORDER`

Complete a draft order in Shopify and transition it to an actual order. Use when you need to finalize a draft order, reserve inventory, and create a corresponding order. When completing with payment_pending=true, the payment gateway is set to Manual.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `draft_order_id` | integer | Yes | The unique identifier of the draft order to complete. |
| `payment_pending` | boolean | No | When set to true, marks the order as payment pending instead of paid. If omitted, the order is marked as paid. Setting this to true will always make the payment gateway as Manual. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Connect inventory item to location

**Slug:** `SHOPIFY_CONNECT_INVENTORY_LEVEL`

Connects an inventory item to a location, establishing where the item can be stocked and fulfilled. This creates an inventory level with an initial available quantity of 0. Use this when you need to enable a product variant to be stocked at a new location. After connecting, use the 'set' or 'adjust' inventory level actions to update quantities.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `location_id` | string | Yes | The ID of the location where you want to stock this inventory item. Use the 'List locations' action to retrieve available location IDs from your store. |
| `inventory_item_id` | string | Yes | The ID of the inventory item to connect to the location. Each product variant has an associated inventory item ID, which can be retrieved from the product variant's 'inventory_item_id' field. |
| `relocate_if_necessary` | boolean | No | Whether to relocate inventory from previously connected locations. Must be set to true when connecting to fulfillment service locations, since an inventory item can only be active at one fulfillment service location at a time. Defaults to false for regular locations. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Count articles in blog

**Slug:** `SHOPIFY_COUNT_ARTICLES`

Retrieves a count of all articles from a blog. Use when you need to know how many articles exist in a specific blog, optionally filtered by creation, publication, or update dates and publication status.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `blog_id` | string | Yes | The unique identifier for the blog whose articles should be counted. |
| `created_at_max` | string | No | Count only articles created at or before this ISO 8601 timestamp. |
| `created_at_min` | string | No | Count only articles created at or after this ISO 8601 timestamp. |
| `updated_at_max` | string | No | Count only articles last updated at or before this ISO 8601 timestamp. |
| `updated_at_min` | string | No | Count only articles last updated at or after this ISO 8601 timestamp. |
| `published_at_max` | string | No | Count only articles published at or before this ISO 8601 timestamp. |
| `published_at_min` | string | No | Count only articles published at or after this ISO 8601 timestamp. |
| `published_status` | string ("published" | "unpublished" | "any") | No | Filter by publication status. 'published' returns only published articles, 'unpublished' returns only unpublished articles, 'any' returns all articles regardless of status. Defaults to 'any' if not specified. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get blogs count

**Slug:** `SHOPIFY_COUNT_BLOGS`

Retrieves the total count of all blogs in a Shopify store. Use this action when you need to know how many blogs exist in the store without fetching the full list of blog details. This is useful for pagination calculations, analytics, or checking if any blogs exist before performing other operations. Requires 'read_content' or 'write_content' OAuth scope.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve count of custom collections (Deprecated)

**Slug:** `SHOPIFY_COUNT_CUSTOM_COLLECTIONS`

Retrieves a count of custom collections with optional filters. Use when you need to know how many custom collections exist in the store, optionally filtered by product, publication status, or date ranges.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `title` | string | No | Filters count by custom collection title. |
| `product_id` | integer | No | Filters count to custom collections containing a specific product ID. |
| `updated_at_max` | string | No | Counts custom collections updated before this date (ISO 8601 format). |
| `updated_at_min` | string | No | Counts custom collections updated after this date (ISO 8601 format). |
| `published_at_max` | string | No | Counts custom collections published before this date (ISO 8601 format). |
| `published_at_min` | string | No | Counts custom collections published after this date (ISO 8601 format). |
| `published_status` | string ("published" | "unpublished" | "any") | No | Filters count by publication status. Valid values: 'published', 'unpublished', or 'any'. Default: 'any'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get draft orders count

**Slug:** `SHOPIFY_COUNT_DRAFT_ORDERS`

Retrieves a count of draft orders from a Shopify store. Use when you need to know how many draft orders exist without fetching full draft order details. Supports filtering by status and date range to count specific subsets of draft orders.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `status` | string ("open" | "invoice_sent" | "completed") | No | Filter draft orders by their current state. 'open': Draft orders that haven't been completed (default). 'invoice_sent': Draft orders where an invoice has been sent to the customer. 'completed': Draft orders that have been converted to actual orders. |
| `updated_at_max` | string | No | Show draft orders last modified at or before this date. Format: ISO 8601 (e.g., 2014-04-25T16:15:47-04:00). |
| `updated_at_min` | string | No | Show draft orders last modified at or after this date. Format: ISO 8601 (e.g., 2014-04-25T16:15:47-04:00). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Count all the events (Deprecated)

**Slug:** `SHOPIFY_COUNT_EVENTS`

Count all events in a Shopify store with comprehensive filtering. Use when you need to determine how many events match specified criteria including date range, resource type, or action verb.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `verb` | string | No | Show events of a certain type/action (e.g., create, destroy, update, confirmed) |
| `filter` | string | No | Show events of certain resources, specified by a comma-separated list of resource names (e.g., Order, Product, Article, Blog, Collection, Comment, Page, PriceRule) |
| `created_at_max` | string | No | Show events created at or before this date and time. Format: ISO 8601 timestamp (e.g., 2014-04-25T16:15:47-04:00) |
| `created_at_min` | string | No | Show events created at or after this date and time. Format: ISO 8601 timestamp (e.g., 2014-04-25T16:15:47-04:00) |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Count fulfillments for order

**Slug:** `SHOPIFY_COUNT_FULFILLMENTS`

Retrieves a count of fulfillments associated with a specific order. Use when you need to determine how many fulfillments exist for an order, optionally filtered by creation or update dates.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `order_id` | string | Yes | The unique numeric identifier for the order whose fulfillments you want to count. |
| `created_at_max` | string | No | Filter to count fulfillments created before this date. Must be in ISO 8601 format (e.g., 2014-04-25T16:15:47-04:00). |
| `created_at_min` | string | No | Filter to count fulfillments created after this date. Must be in ISO 8601 format (e.g., 2014-04-25T16:15:47-04:00). |
| `updated_at_max` | string | No | Filter to count fulfillments last updated before this date. Must be in ISO 8601 format. |
| `updated_at_min` | string | No | Filter to count fulfillments last updated after this date. Must be in ISO 8601 format. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieves a count of locations (Deprecated)

**Slug:** `SHOPIFY_COUNT_LOCATION`

Retrieves a count of locations. Use when you need to determine how many physical or virtual locations are configured in the Shopify store.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Count shop metafields

**Slug:** `SHOPIFY_COUNT_METAFIELDS`

Retrieves the shop-level count of metafields. Use resource-specific metafield actions for product, customer, order, collection, page, or article metafields.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Count orders (Deprecated)

**Slug:** `SHOPIFY_COUNT_ORDER`

DEPRECATED: Use SHOPIFY_RETRIEVES_AN_ORDER_COUNT instead. Retrieves the count of orders in a Shopify store. Use when you need to know how many orders exist, optionally filtered by status, dates, financial status, fulfillment status, or attribution app. Note: Only the last 60 days' worth of orders are accessible by default unless the app has been granted the read_all_orders scope.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `status` | string | No | Filter orders by their current status. Default is 'any'. |
| `created_at_max` | string | No | Count only orders created at or before this ISO 8601 datetime. |
| `created_at_min` | string | No | Count only orders created at or after this ISO 8601 datetime (e.g., '2023-03-07T00:00:00.000' or '2023-03-07 00:00:00.000'). |
| `updated_at_max` | string | No | Count only orders last updated at or before this ISO 8601 datetime. |
| `updated_at_min` | string | No | Count only orders last updated at or after this ISO 8601 datetime. |
| `financial_status` | string ("pending" | "authorized" | "partially_paid" | "paid" | "partially_refunded" | "refunded" | "voided" | "expired" | "any") | No | Filter orders by payment status. Note: Multiple comma-separated values do NOT work properly with the count endpoint. |
| `attribution_app_id` | string | No | Filter orders attributed to a specific app ID. |
| `fulfillment_status` | string ("shipped" | "partial" | "unshipped" | "any" | "unfulfilled") | No | Filter orders by fulfillment state. Note: Multiple comma-separated values do NOT work properly with the count endpoint. Use 'unfulfilled' or null for unfulfilled orders. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve page count

**Slug:** `SHOPIFY_COUNT_PAGES`

Retrieve the total count of pages in a Shopify store. Use when you need to determine how many pages exist, optionally filtered by creation date, update date, publication date, publication status, or title.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `title` | string | No | Count pages matching a specific title. |
| `created_at_max` | string | No | Filter pages created before a specified date (ISO 8601 format). |
| `created_at_min` | string | No | Filter pages created after a specified date (ISO 8601 format). |
| `updated_at_max` | string | No | Filter pages updated before a specified date (ISO 8601 format). |
| `updated_at_min` | string | No | Filter pages updated after a specified date (ISO 8601 format). |
| `published_at_max` | string | No | Filter pages published before a specified date (ISO 8601 format). |
| `published_at_min` | string | No | Filter pages published after a specified date (ISO 8601 format). |
| `published_status` | string | No | Restrict results by publication state. Valid options: 'published', 'unpublished', or 'any' (default). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Count price rules

**Slug:** `SHOPIFY_COUNT_PRICE_RULES`

Retrieves a count of all price rules. Use when you need to determine how many price rules (discount campaigns) are configured in the store.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Count product images

**Slug:** `SHOPIFY_COUNT_PRODUCT_IMAGES`

Retrieves the total count of images for a specific Shopify product. Use when you need to know how many images are associated with a product.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `product_id` | string | Yes | The unique identifier for the Shopify product whose images are to be counted. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieves a count of products

**Slug:** `SHOPIFY_COUNT_PRODUCTS`

Retrieve a count of products in the Shopify store. Use when you need to get the total number of products, optionally filtered by collection, vendor, product type, status, or date ranges.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `status` | string | No | Filter by product status (e.g., 'active', 'draft', 'archived'). |
| `vendor` | string | No | Filter by vendor name (the supplier or manufacturer of the products). |
| `product_type` | string | No | Filter by product type (e.g., 'Apparel', 'Electronics', 'Footwear'). |
| `collection_id` | string | No | Filter products by collection ID to count only products within a specific collection. |
| `created_at_max` | string | No | Return products created before this date. Format: ISO 8601. |
| `created_at_min` | string | No | Return products created after this date. Format: ISO 8601 (e.g., 2014-04-25T16:15:47-04:00). |
| `updated_at_max` | string | No | Return products last updated before this date. Format: ISO 8601. |
| `updated_at_min` | string | No | Return products last updated after this date. Format: ISO 8601. |
| `published_at_max` | string | No | Return products published before this date. Format: ISO 8601. |
| `published_at_min` | string | No | Return products published after this date. Format: ISO 8601. |
| `published_status` | string | No | Filter by published status (e.g., 'published', 'unpublished', 'any'). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Count product variants

**Slug:** `SHOPIFY_COUNT_PRODUCT_VARIANTS`

Retrieves the total count of variants for a Shopify product. Use when you need to know how many variants exist for a specific product.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `product_id` | string | Yes | The unique identifier for the Shopify product whose variants are to be counted. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Count script tags

**Slug:** `SHOPIFY_COUNT_SCRIPT_TAGS`

Retrieves a count of all script tags in the shop. Script tags are remote JavaScript files that are loaded into the pages of a shop's storefront or checkout. Use this action to determine the total number of script tags, optionally filtered by a specific source URL. Note: This endpoint is part of the legacy REST Admin API (deprecated). The Shopify GraphQL Admin API should be used for new integrations.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `src` | string | No | Filter to count only script tags with this exact source URL. If omitted, returns the total count of all script tags in the shop. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Receive a count of all webhooks (Deprecated)

**Slug:** `SHOPIFY_COUNT_WEBHOOKS`

Retrieves a count of existing webhook subscriptions. Use when you need to know how many webhooks are configured, optionally filtered by address or topic.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `topic` | string | No | Filter webhook subscriptions by event topic. Valid values include 'orders/create', 'products/update', 'customers/create', etc. |
| `address` | string | No | Filter webhook subscriptions by the URI where the POST request is sent. Only counts webhooks that send to this specific address. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create a metafield

**Slug:** `SHOPIFY_CREATE_A_METAFIELD`

Create a metafield for any Shopify resource. Use when you need to attach custom metadata to products, customers, orders, collections, or other supported resources.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `key` | string | Yes | The unique identifier for the metafield within its namespace. Must be 3-64 characters, alphanumeric, hyphen, or underscore. |
| `type` | string | Yes | The type of data stored in the metafield. Supported types include: single_line_text_field, multi_line_text_field, number_integer, number_decimal, boolean, json, rating, url, date, date_time, color, weight, volume, dimension, money, and list types. |
| `value` | string | Yes | The data to store in the metafield. Always stored as string format regardless of type. |
| `resource` | string ("products" | "customers" | "blogs" | "collections" | "orders" | "pages" | "variants" | "articles" | "draft_orders" | "locations" | "product_images" | "smart_collections" | "shop") | Yes | The type of resource to attach the metafield to. Supported resources: products, customers, blogs, collections, orders, pages, variants, articles, draft_orders, locations, product_images, smart_collections, shop. |
| `namespace` | string | Yes | Container for a group of metafields. Must be 3-255 characters, alphanumeric, hyphen, or underscore. |
| `description` | string | No | Optional description of the metafield to provide context about its purpose. |
| `resource_id` | string | No | The unique identifier of the resource to attach the metafield to. Not required for 'shop' resource. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create A New Product Image (Deprecated)

**Slug:** `SHOPIFY_CREATE_A_NEW_PRODUCT_IMAGE`

Create a new product image for a Shopify product. Use when you need to add an image to a product by providing either an image URL or base64-encoded image data. Products can have up to 250 images in PNG, GIF, or JPG formats.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `image` | object | Yes | Object containing the image details. Must include either 'src' or 'attachment'. |
| `product_id` | string | Yes | The unique identifier for the product to associate the image with. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create app subscription

**Slug:** `SHOPIFY_CREATE_APP_SUBSCRIPTION`

Create a recurring or usage-based app subscription for charging Shopify merchants. Use when setting up billing for app features and services. Returns a confirmation URL where the merchant must approve charges before the subscription becomes active.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Descriptive name for the subscription plan displayed to merchant (e.g., 'Basic Plan', 'Premium Tier'). |
| `test` | boolean | No | Whether this is a test subscription that won't actually charge the merchant. Useful for development and testing. Defaults to false. |
| `lineItems` | array | Yes | One or more pricing plans defining the subscription structure. Only one pricing plan can be defined for each available type (recurring or usage-based). |
| `returnUrl` | string | Yes | URL where merchant is redirected after approving or declining the subscription. Should be a page in your app that handles the result. |
| `trialDays` | integer | No | Number of free trial days beginning when merchant approves the subscription. Merchant won't be charged during trial period. |
| `replacementBehavior` | string ("STANDARD" | "APPLY_IMMEDIATELY" | "APPLY_ON_NEXT_BILLING_CYCLE") | No | Controls how the new subscription interacts with existing active subscriptions. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Article

**Slug:** `SHOPIFY_CREATE_ARTICLE`

Create an article for a blog in Shopify. Use when you need to add blog content to a specific blog. The title field is mandatory - requests without titles return a 422 error.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tags` | string | No | A comma-separated list of tags. Tags are additional short descriptors for the article. |
| `image` | object | No | Image object for an article |
| `title` | string | Yes | The headline of the article. This field is required. |
| `author` | string | No | Name credited as the article's creator. |
| `blog_id` | string | Yes | The ID of the blog where the article will be created. |
| `body_html` | string | No | The text of the body of the article, complete with HTML markup. |
| `published` | boolean | No | Whether the article is visible. Defaults to unpublished (false) if not specified. |
| `metafields` | array | No | Custom metadata fields with key, namespace, value, and type. |
| `published_at` | string | No | Date and time (ISO 8601 format) when the article becomes visible. If not provided and published is true, the article is published immediately. |
| `summary_html` | string | No | Brief summary with HTML markup for display on other pages. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Comment for Article

**Slug:** `SHOPIFY_CREATE_ARTICLE_COMMENT`

Create a comment for an article in Shopify. Use when you need to add reader comments to blog articles. Requires 'content' access scope and protected customer data access.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ip` | string | No | The IP address from which the comment was posted. |
| `body` | string | Yes | The basic Textile markup of the comment. This field is required. |
| `email` | string | Yes | The email address of the author of the comment. This field is required and contains protected customer data. |
| `author` | string | Yes | The name of the author of the comment. This field is required and contains protected customer data. |
| `blog_id` | integer | Yes | A unique numeric identifier for the blog to which the article belongs. |
| `article_id` | integer | Yes | A unique numeric identifier for the article to which the comment belongs. |
| `user_agent` | string | No | The browser user agent string from which the comment was posted. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create a new blog

**Slug:** `SHOPIFY_CREATE_BLOG`

Create a new blog in Shopify. Use when you need to add a blog to the store for publishing articles and content. The title field is mandatory.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `title` | string | Yes | The title of the blog. This field is required. Maximum length: 255 characters. |
| `handle` | string | No | A human-friendly unique string for the blog automatically generated from its title. If not provided, it will be auto-generated from the title. |
| `metafields` | array | No | Attaches additional metadata to a shop's resources. Each metafield object should include key, value, type, and namespace. |
| `commentable` | string ("no" | "moderate" | "yes") | No | Whether readers can post comments to the blog and if comments are moderated or not. Defaults to 'no' if not specified. |
| `template_suffix` | string | No | The suffix of the Liquid template being used. For example, if the value is 'custom', then the blog is using the blog.custom.liquid template. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Country

**Slug:** `SHOPIFY_CREATE_COUNTRY`

Create a country with tax configuration for the Shopify store. Use when you need to add a new country to the store's shipping or tax settings. **Important Notes:** - The REST Country API is deprecated as of API version 2024-07 - This action requires merchant approval for the 'write_shipping' scope - The 'tax' field is deprecated as of API version 2020-10 and custom tax values can no longer be created or updated - For new implementations, consider using the GraphQL Admin API's "Countries in shipping zone" endpoint instead

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tax` | number | No | The national sales tax rate applied to orders from that country in decimal format (e.g., 0.2 for 20%). Note: As of API version 2020-10, the tax field is deprecated and custom tax values can no longer be created or updated. |
| `code` | string | Yes | The two-letter country code in ISO 3166-1 alpha-2 format (e.g., 'BR' for Brazil, 'FR' for France, 'US' for United States). This is required. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create a custom collection

**Slug:** `SHOPIFY_CREATE_CUSTOM_COLLECTION`

Create a new custom (manually curated) collection in Shopify. Does not support smart collections. Use when you need to manually curate and group products for easier store browsing. Custom collections require a title and support optional fields like description, image, publication settings, and sort order. After creation, use the returned `collection_id` with SHOPIFY_ADD_PRODUCT_TO_COLLECTION to associate products.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `image` | object | No | Image object for custom collection. |
| `title` | string | Yes | Name of the custom collection (limit: 255 characters). This is the only required field. |
| `handle` | string | No | Human-friendly unique identifier (limit: 255 characters). Auto-generated from title if not provided. Use the returned `collection_id` for subsequent operations instead of relying on the handle. |
| `collects` | array | No | Product associations to add to the collection during creation. |
| `body_html` | string | No | HTML description displayed on collection pages. |
| `published` | boolean | No | Whether visible on Online Store channel. Defaults to true if not specified. |
| `metafields` | array | No | Custom metadata fields with key, value, type, and namespace. |
| `sort_order` | string ("manual" | "alpha-asc" | "alpha-desc" | "best-selling" | "created" | "created-desc" | "price-asc" | "price-desc") | No | Product ordering method within the collection. |
| `published_scope` | string ("web" | "global") | No | Publication scope: 'web' (Online Store only) or 'global' (Online Store and Point of Sale). |
| `template_suffix` | string | No | Liquid template variant suffix for custom collection page templates. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Customer

**Slug:** `SHOPIFY_CREATE_CUSTOMER`

Create a new customer in Shopify. Use to add a customer record to the store with contact details, addresses, and marketing preferences. Requires at least one of: email, phone, or both first_name and last_name. Errors (e.g., duplicate email, invalid fields) are returned in the response body's userErrors array, not as HTTP error codes — always inspect userErrors to detect failures.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `note` | string | No | An optional note about the customer. |
| `tags` | string | No | A comma-separated string of tags to associate with the customer. |
| `email` | string | No | The customer's unique email address. Must be unique across all customers in the store. At least one of email, phone, or (first_name and last_name) must be provided. |
| `phone` | string | No | The customer's phone number in E.164 format (e.g., +16135551212) or other dialable formats (6135551212, (613)555-1212). At least one of email, phone, or (first_name and last_name) must be provided. |
| `password` | string | No | (Deprecated) The customer's password. This field is deprecated for creating customer accounts. If provided, password_confirmation is also required. |
| `addresses` | array | No | A list of addresses for the customer. |
| `last_name` | string | No | The customer's last name. At least one of email, phone, or (first_name and last_name) must be provided. |
| `first_name` | string | No | The customer's first name. At least one of email, phone, or (first_name and last_name) must be provided. |
| `verified_email` | boolean | No | Whether the customer has verified their email address. Note: This is a read-only field and may be ignored by the API. |
| `send_email_invite` | boolean | No | If true, sends the customer an email invite to create an account. |
| `send_email_welcome` | boolean | No | Whether to send the customer a welcome email. When false, suppresses the welcome email. If send_email_invite is true, this can be set to false to avoid sending duplicate emails. |
| `password_confirmation` | string | No | (Deprecated) Confirmation of the customer's password. This field is deprecated for creating customer accounts. Required if password is provided. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Generate Customer Account Activation URL

**Slug:** `SHOPIFY_CREATE_CUSTOMER_ACCOUNT_ACTIVATION_URL`

Generate a one-time account activation URL for a customer whose account is in 'disabled' state (not yet activated). Use this when you've imported customers and need activation URLs to send in welcome emails. The URL allows customers to set their password and activate their account. Each URL expires after 30 days. Generating a new URL invalidates any previously generated URL for that customer.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `customer_id` | string | Yes | The unique identifier for the customer whose account activation URL needs to be generated. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create customer address

**Slug:** `SHOPIFY_CREATE_CUSTOMER_ADDRESS`

Create a new address for a customer. Use when you need to add an address to an existing customer's address list.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `address` | object | Yes | The address information to be created for the customer. |
| `customer_id` | string | Yes | The unique identifier for the customer to whom the address will be added. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create delegate access token

**Slug:** `SHOPIFY_CREATE_DELEGATE_ACCESS_TOKEN`

Create a delegate access token with a subset of the parent token's permissions. Use when you need to securely delegate limited access to subsystems or services. Each delegate token inherits only the specified scopes, ensuring minimal required permissions rather than full app access. Note: Delegate tokens cannot create new delegate tokens.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `expires_in` | integer | No | Token expiration time in seconds from creation. If not specified, the delegate token expires when the parent token expires. Maximum value depends on parent token lifetime. |
| `delegate_access_scope` | array | Yes | Array of access scopes to delegate (must be subset of parent token scopes). Each scope defines specific permissions like 'read_products', 'write_orders'. The app can only delegate scopes it was originally granted. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Discount Code

**Slug:** `SHOPIFY_CREATE_DISCOUNT_CODE`

Creates a discount code for an existing price rule. Price rules define the discount logic (e.g., 10% off, buy X get Y), and discount codes are the actual codes (e.g., 'SUMMER10') customers enter at checkout. Important: The price rule must exist before creating a discount code - use a price rule creation action first if needed. Each price rule can have multiple discount codes associated with it. Use this when you need to generate customer-facing discount codes for an established discount promotion.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `code` | string | Yes | The case-insensitive discount code that customers enter at checkout. Must be unique across your store. Maximum 255 characters. Can contain letters, numbers, hyphens, and underscores. Examples: 'SUMMER10', 'WELCOME2024', 'FREESHIP'. |
| `price_rule_id` | string | Yes | The ID of the price rule that the discount code will belong to. This price rule must already exist in your Shopify store and defines the discount logic (amount, eligibility, duration, etc.). You can get price rule IDs by listing price rules or creating a new one. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Discount Codes Batch

**Slug:** `SHOPIFY_CREATE_DISCOUNT_CODE_BATCH`

Create a discount code creation job for batch processing. Use when you need to asynchronously create up to 100 discount codes for a price rule in a single request.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `price_rule_id` | integer | Yes | The ID of the price rule that the discount codes will belong to. |
| `discount_codes` | array | Yes | Array of discount code objects to create. Maximum 100 codes can be created in a single batch request. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create a new draft order

**Slug:** `SHOPIFY_CREATE_DRAFT_ORDER`

Create a draft order in Shopify. Use when you need to create orders in draft state using product variant line items or custom line items. Draft orders are useful for creating orders on behalf of customers, generating invoices, or reserving inventory.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `note` | string | No | Merchant note about the draft order. |
| `tags` | string | No | Comma-separated tags. |
| `email` | string | No | Customer's email address. |
| `currency` | string | No | Three-letter ISO 4217 currency code. |
| `line_items` | array | Yes | Array of line item objects. At least one line item is required. Each line item must have a quantity, and either a variant_id (for product variants) or title and price (for custom items). |
| `tax_exempt` | boolean | No | Whether the customer is exempt from taxes. |
| `customer_id` | integer | No | ID of an existing customer to associate with the draft order. |
| `shipping_line` | object | No | Shipping line for draft order. |
| `billing_address` | object | No | Billing address for draft order. |
| `note_attributes` | array | No | Custom name/value pairs for additional information. |
| `applied_discount` | object | No | Applied discount with title, description, value, value_type (either 'fixed_amount' or 'percentage'), and amount. |
| `shipping_address` | object | No | Shipping address for draft order. |
| `use_customer_default_address` | boolean | No | Whether to load customer's default shipping address (default: false). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create EventBridge webhook subscription

**Slug:** `SHOPIFY_CREATE_EVENT_BRIDGE_WEBHOOK_SUBSCRIPTION`

Create an AWS EventBridge webhook subscription in Shopify. Use when you need to configure real-time event notifications to AWS EventBridge for events like order creation, product updates, or customer changes. EventBridge webhooks push events to your AWS partner event source immediately when changes occur, eliminating polling. You can filter events and control payload fields to optimize performance.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `topic` | string ("APP_PURCHASES_ONE_TIME_UPDATE" | "APP_SUBSCRIPTIONS_UPDATE" | "APP_UNINSTALLED" | "CARTS_CREATE" | "CARTS_UPDATE" | "CHANNELS_DELETE" | "CHECKOUTS_CREATE" | "CHECKOUTS_DELETE" | "CHECKOUTS_UPDATE" | "COLLECTIONS_CREATE" | "COLLECTIONS_DELETE" | "COLLECTIONS_UPDATE" | "COLLECTION_LISTINGS_ADD" | "COLLECTION_LISTINGS_REMOVE" | "COLLECTION_LISTINGS_UPDATE" | "CUSTOMERS_CREATE" | "CUSTOMERS_DELETE" | "CUSTOMERS_DISABLE" | "CUSTOMERS_ENABLE" | "CUSTOMERS_UPDATE" | "CUSTOMER_GROUPS_CREATE" | "CUSTOMER_GROUPS_DELETE" | "CUSTOMER_GROUPS_UPDATE" | "DISPUTES_CREATE" | "DISPUTES_UPDATE" | "DRAFT_ORDERS_CREATE" | "DRAFT_ORDERS_DELETE" | "DRAFT_ORDERS_UPDATE" | "FULFILLMENTS_CREATE" | "FULFILLMENTS_UPDATE" | "FULFILLMENT_EVENTS_CREATE" | "FULFILLMENT_EVENTS_DELETE" | "INVENTORY_ITEMS_CREATE" | "INVENTORY_ITEMS_DELETE" | "INVENTORY_ITEMS_UPDATE" | "INVENTORY_LEVELS_CONNECT" | "INVENTORY_LEVELS_DISCONNECT" | "INVENTORY_LEVELS_UPDATE" | "LOCATIONS_CREATE" | "LOCATIONS_DELETE" | "LOCATIONS_UPDATE" | "ORDERS_CANCELLED" | "ORDERS_CREATE" | "ORDERS_DELETE" | "ORDERS_EDITED" | "ORDERS_FULFILLED" | "ORDERS_PAID" | "ORDERS_PARTIALLY_FULFILLED" | "ORDERS_UPDATED" | "PRODUCTS_CREATE" | "PRODUCTS_DELETE" | "PRODUCTS_UPDATE" | "PRODUCT_LISTINGS_ADD" | "PRODUCT_LISTINGS_REMOVE" | "PRODUCT_LISTINGS_UPDATE" | "REFUNDS_CREATE" | "SHOP_UPDATE" | "THEMES_CREATE" | "THEMES_DELETE" | "THEMES_PUBLISH" | "THEMES_UPDATE") | Yes | The event type that triggers the webhook. Choose from available Shopify webhook topics like ORDERS_CREATE, PRODUCTS_UPDATE, CUSTOMERS_CREATE, etc. |
| `webhook_subscription` | object | Yes | Configuration details for the EventBridge webhook subscription including ARN, format, and optional filters. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Fulfillment

**Slug:** `SHOPIFY_CREATE_FULFILLMENT`

Creates a fulfillment for one or many fulfillment orders for a specific order. This completes the shipping process by marking items as fulfilled. IMPORTANT: You must first retrieve fulfillment orders using a "Get fulfillment orders for order" action to obtain the fulfillment_order_id and line item IDs needed for this action. Use when: You need to mark order items as shipped/fulfilled for orders assigned to merchant-managed locations or third-party fulfillment services. Note: As of API version 2024-10, fulfillments can only be created for merchant-managed locations or third-party fulfillment services owned by your app.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `message` | string | No | A message associated with the fulfillment. Only available if the fulfillment order is assigned to a third-party fulfillment service. |
| `tracking_info` | object | No | Tracking information for the shipment. |
| `origin_address` | object | No | The address of the fulfillment location, intended for tax purposes. |
| `notify_customer` | boolean | No | Whether to send a notification to the customer about this fulfillment. Defaults to false. |
| `line_items_by_fulfillment_order` | array | Yes | Array of fulfillment orders and their line items to fulfill. At least one fulfillment order is required. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Fulfillment Event

**Slug:** `SHOPIFY_CREATE_FULFILLMENT_EVENT`

Creates a tracking event for a fulfillment to update shipment status. These events appear on the customer's order status page to track delivery progress (e.g., "in_transit", "out_for_delivery", "delivered"). Use this to provide real-time tracking updates from shipping carriers. Requires an existing fulfillment - use after creating a fulfillment for an order.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `zip` | string | No | Postal/zip code of the event location. |
| `city` | string | No | City of the event location. |
| `status` | string ("attempted_delivery" | "carrier_picked_up" | "confirmed" | "delayed" | "delivered" | "failure" | "in_transit" | "label_printed" | "label_purchased" | "out_for_delivery" | "ready_for_pickup") | Yes | The status of the fulfillment event. Valid values: attempted_delivery (delivery was attempted), carrier_picked_up (picked up by carrier), confirmed (fulfillment confirmed), delayed (delayed), delivered (successfully delivered), failure (fulfillment request failed), in_transit (shipment in transit), label_printed (shipping label printed), label_purchased (shipping label purchased), out_for_delivery (out for delivery), ready_for_pickup (ready for customer pickup). |
| `country` | string | No | Country of the event location. |
| `message` | string | No | An arbitrary message describing the status, can be provided by shipping carrier. |
| `address1` | string | No | Street address of the event location. |
| `latitude` | number | No | Geographic latitude coordinate. |
| `order_id` | integer | Yes | The ID of the order associated with the fulfillment. |
| `province` | string | No | Province/state of the event location. |
| `longitude` | number | No | Geographic longitude coordinate. |
| `happened_at` | string | No | The date and time when the fulfillment event occurred (ISO 8601 format). |
| `fulfillment_id` | integer | Yes | The ID of the fulfillment to create an event for. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Gift Card

**Slug:** `SHOPIFY_CREATE_GIFT_CARD`

Create a gift card for a Shopify store. Use when you need to issue a new gift card with a specified value. Requires write_gift_cards access scope. Gift card codes can only be retrieved at creation time.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `gift_card` | object | Yes | The gift card object containing all necessary information to create a gift card. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Marketing Event Engagements

**Slug:** `SHOPIFY_CREATE_MARKETING_ENGAGEMENTS`

Create engagement data for a marketing event in Shopify. Use when tracking customer interactions like views, clicks, and ad spend on marketing events before customers reach the website.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `engagements` | array | Yes | A list of engagement objects containing customer activity data. At least one engagement is required. |
| `marketing_event_id` | string | Yes | The ID of the marketing event to add engagements to. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Marketing Event

**Slug:** `SHOPIFY_CREATE_MARKETING_EVENT`

Create a marketing event in Shopify to track promotional actions. Use when you need to track marketing campaigns targeting customers across various channels.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `paid` | boolean | No | Indicates whether the promotion is paid or organic. Defaults to false if not specified. |
| `budget` | string | No | Campaign budget amount as a decimal string. If specified, currency and budget_type are also required. |
| `currency` | string | No | Three-letter ISO 4217 currency code. Required if budget is specified. |
| `ended_at` | string | No | Actual campaign end time in ISO 8601 format. |
| `remote_id` | string | No | External identifier for this marketing event. Used for validation of engagement data. |
| `event_type` | string ("ad" | "post" | "message" | "retargeting" | "transactional" | "affiliate" | "loyalty" | "newsletter" | "abandoned_cart") | Yes | Type of marketing event. Valid values: ad, post, message, retargeting, transactional, affiliate, loyalty, newsletter, or abandoned_cart. |
| `manage_url` | string | No | URL where the campaign can be managed or edited. |
| `started_at` | string | Yes | The date and time when the marketing action started, in ISO 8601 format. |
| `utm_medium` | string | No | Optional UTM parameter for medium type. |
| `utm_source` | string | No | Optional UTM parameter for traffic source. |
| `budget_type` | string ("daily" | "lifetime") | No | Budget type. Valid values: daily or lifetime. Required if budget is specified. |
| `description` | string | No | Campaign details or description. |
| `preview_url` | string | No | URL where the campaign content can be previewed. |
| `utm_campaign` | string | No | Optional UTM parameter for campaign identification. |
| `referring_domain` | string | No | Destination domain. Required if marketing_channel is 'search' or 'social'. |
| `marketing_channel` | string ("search" | "display" | "social" | "email" | "referral" | "chat" | "receipt") | Yes | Distribution channel for the marketing event. Valid values: search, display, social, email, referral, chat, or receipt. |
| `marketed_resources` | array | No | Array of resources (products, collections, etc.) being marketed in this campaign. |
| `scheduled_to_end_at` | string | No | Planned campaign end time in ISO 8601 format. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create blog metafield

**Slug:** `SHOPIFY_CREATE_METAFIELD`

Creates a new metafield for a Shopify blog. Metafields store additional custom information (metadata) on blog resources such as sponsor names, SEO keywords, publication dates, or custom attributes not included in standard blog fields.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `key` | string | Yes | The unique identifier for the metafield within its namespace. Must be 3-64 characters, alphanumeric, hyphen, or underscore. |
| `type` | string | Yes | The type of data stored in the metafield. Supported types include: single_line_text_field, multi_line_text_field, number_integer, number_decimal, boolean, json, rating, url, date, date_time, color, weight, volume, dimension, money, and list types. |
| `value` | string | Yes | The data to store in the metafield. Always stored as string format regardless of type. |
| `blog_id` | string | Yes | The unique identifier of the blog resource to create a metafield for. |
| `namespace` | string | Yes | Container for a group of metafields. Must be 3-255 characters, alphanumeric, hyphen, or underscore. |
| `description` | string | No | Optional description of the metafield to provide context about its purpose. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create One-Time Application Charge

**Slug:** `SHOPIFY_CREATE_ONE_TIME_APPLICATION_CHARGE`

Create a new one-time application charge in Shopify. Use when you need to bill merchants for one-time features, upgrades, or services. After creation, the merchant must approve the charge via the confirmation_url before it becomes active.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | The name of the application charge shown to merchants during approval. Must be descriptive and clear about what the charge is for. |
| `test` | boolean | No | Whether this is a test charge. Test charges do not result in actual credit card charges and are useful for development. Defaults to false. |
| `price` | number | Yes | The price of the application charge. Must be between 0.50 and 10,000.00 in the shop's currency. |
| `return_url` | string | Yes | The URL where the merchant is redirected after accepting or declining the charge. Shopify appends charge_id and status parameters to this URL. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create an order

**Slug:** `SHOPIFY_CREATE_ORDER`

Create a fully committed (real) order in Shopify without payment processing. Use when programmatically generating orders with line items, customer information, and addresses. Creates a live order immediately — not a draft; use draftOrderCreate for draft workflows.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `note` | string | No | Additional order notes for internal use. |
| `tags` | string | No | Comma-separated list of tags for order organization. |
| `email` | string | No | Customer's email address. Used for order notifications. |
| `phone` | string | No | Customer phone number for SMS notifications. |
| `currency` | string | No | Three-letter ISO 4217 currency code. |
| `customer` | object | No | Customer information. Can reference existing customer by id or create new with first_name, last_name, email fields. |
| `total_tax` | string | No | Sum of all tax line amounts in shop currency. |
| `line_items` | array | Yes | Collection of items being purchased. Each line item should include at minimum: title, price, grams, quantity, and taxable. Can also include variant_id or product_id for existing products. |
| `send_receipt` | boolean | No | Whether to email order confirmation to customer. Defaults to false. |
| `transactions` | array | No | Transaction objects representing payment information. Each includes kind, amount, status, and optionally gateway. |
| `discount_codes` | array | No | Discount codes to apply. Note: Only the first code is applied when creating an order. |
| `shipping_lines` | array | No | Shipping method details. Each should include title and price. |
| `billing_address` | object | No | Mailing address for billing or shipping. |
| `financial_status` | string ("pending" | "authorized" | "partially_paid" | "paid" | "partially_refunded" | "refunded" | "voided") | No | Payment state of the order. Can only be set when the order is created. Valid values: pending, authorized, partially_paid, paid, partially_refunded, refunded, voided. |
| `shipping_address` | object | No | Mailing address for billing or shipping. |
| `fulfillment_status` | string ("fulfilled" | "partial" | "restocked") | No | Order completion state. Valid values: fulfilled, partial, restocked, or null. |
| `inventory_behaviour` | string ("bypass" | "decrement_ignoring_policy" | "decrement_obeying_policy") | No | Controls inventory claiming. Valid values: bypass (default, no inventory claimed), decrement_ignoring_policy (claim inventory regardless of policy), decrement_obeying_policy (claim inventory respecting policy). |
| `send_fulfillment_receipt` | boolean | No | Whether to email shipping confirmation to customer. Defaults to false. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create order risk

**Slug:** `SHOPIFY_CREATE_ORDER_RISK`

Creates a risk assessment record for a Shopify order, documenting fraud detection findings or security concerns. Use this to record risk evaluations from external fraud detection systems or internal risk analysis tools. **Important:** This REST API endpoint is deprecated as of API version 2025-10. For new implementations, use the GraphQL orderRiskAssessmentCreate mutation instead. See: https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderRiskAssessmentCreate **Common use cases:** - Recording fraud detection results from third-party services (e.g., MaxMind, Sift, Signifyd) - Documenting manual fraud reviews - Flagging high-risk orders for merchant review

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `score` | string | No | Numeric risk score as a string, ranging from 0.0 (lowest risk) to 1.0 (highest risk). Higher values indicate greater fraud likelihood. |
| `source` | string | No | Identifier for the source or system that generated this risk assessment (e.g., fraud detection service name, internal system identifier). |
| `display` | boolean | No | If true, this risk assessment will be visible on the order details page and will influence Shopify's overall order risk level calculation. Cannot be changed after creation. Set to false for internal-only assessments. |
| `message` | string | No | Detailed explanation of the fraud check results that will be displayed to the merchant on the order details page (only visible when display is set to true). |
| `order_id` | string | Yes | The unique identifier of the order to create a risk assessment for. |
| `cause_cancel` | boolean | No | If true, indicates this risk assessment is severe enough to warrant automatic order cancellation. Use true for high-risk orders that should not be fulfilled. |
| `recommendation` | string ("cancel" | "investigate" | "accept") | No | Suggested action: 'cancel' (high risk), 'investigate' (medium risk), or 'accept' (low risk). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create transaction for order

**Slug:** `SHOPIFY_CREATE_ORDER_TRANSACTION`

Creates a transaction for an order to process payment operations. Use when you need to authorize, capture, refund, void, or complete a sale for an order. For multi-currency orders, the currency field is required when creating refund and capture transactions.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `kind` | string ("authorization" | "capture" | "sale" | "void" | "refund") | Yes | The transaction type. Valid values: 'authorization' (reserve amount), 'capture' (transfer reserved money, requires parent_id), 'sale' (authorization + capture in one step), 'void' (cancel pending authorization/capture), 'refund' (return captured money to customer). |
| `test` | boolean | No | Whether the transaction is a test transaction. |
| `amount` | string | No | The amount of money included in the transaction. If not provided, defaults to the total cost of the order. For multi-currency orders, this field is required when creating refund and capture transactions. |
| `gateway` | string | No | The name of the payment gateway through which the transaction is issued. |
| `currency` | string | No | The three-letter ISO 4217 currency code for the transaction. Required for multi-currency orders when creating refund and capture transactions. |
| `order_id` | string | Yes | The ID of the order for which the transaction is being created. |
| `parent_id` | integer | No | The ID of an associated transaction. Required for capture, void, and refund operations to link to the original authorization. Not required for authorization or sale. |
| `source_name` | string | No | The origin channel of the transaction (e.g., 'web', 'pos'). |
| `authorization` | string | No | The authorization code associated with the transaction. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create a new page

**Slug:** `SHOPIFY_CREATE_PAGE`

Create a static web page in Shopify. Use when you need to add long-term static content like About Us, Contact, or Privacy Policy pages. The title and body_html fields are required.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `title` | string | Yes | The page heading. This field is required; omitting it returns a 422 error. |
| `author` | string | No | Name of the person who created the page. |
| `handle` | string | No | Human-friendly URL identifier used by Liquid templating. Must be unique across all pages in the store - if a page with this handle already exists, the API will reject the request with a 422 error. To avoid conflicts, omit this field to let Shopify auto-generate a unique handle from the title. |
| `body_html` | string | No | Optional HTML content of the page, including markup tags. |
| `published` | boolean | No | Publication status. Defaults to true (published); set to false for unpublished pages. |
| `metafields` | array | No | Additional metadata fields with key, namespace, value, and type. |
| `published_at` | string | No | When the page was published in ISO 8601 datetime format; null when hidden. |
| `template_suffix` | string | No | Suffix determining which template renders the page; null uses default template. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Price Rule

**Slug:** `SHOPIFY_CREATE_PRICE_RULE`

Creates a price rule that defines discount logic for Shopify orders. Price rules specify how discounts work (percentage/fixed amount off, which products, which customers, etc.) and can be associated with discount codes for use at checkout. Common use cases: - Percentage off all products (e.g., 20% off sitewide) - Fixed amount off orders (e.g., $10 off orders over $50) - Buy X Get Y (BXGY) discounts - Free shipping offers - Customer segment-specific discounts Note: After creating a price rule, use the discount code creation endpoint to generate codes that customers can apply.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `title` | string | Yes | The title of the price rule for internal use in Shopify admin. This is NOT the discount code customers enter - codes are created separately. Use descriptive names like 'Summer Sale 2026' or 'BXGY Shirts'. |
| `value` | string | Yes | The discount amount as a negative string. For percentage discounts: '-20.0' means 20% off. For fixed_amount discounts: '-10.0' means $10 off. For free shipping (shipping_line target_type), must be exactly '-100' (100% off). |
| `ends_at` | string | No | When the discount expires, in ISO 8601 format. Must be after starts_at. If omitted, the discount never expires (remains active indefinitely). Format: 'YYYY-MM-DDTHH:MM:SSZ'. |
| `starts_at` | string | Yes | When the discount becomes active, in ISO 8601 format. Use UTC timezone (Z suffix) or include timezone offset. Format: 'YYYY-MM-DDTHH:MM:SSZ' or 'YYYY-MM-DDTHH:MM:SS±HH:MM'. |
| `value_type` | string ("fixed_amount" | "percentage") | Yes | The type of discount. Use 'fixed_amount' for a dollar amount off or 'percentage' for a percentage off. For shipping_line target_type, only 'percentage' is accepted. |
| `target_type` | string ("line_item" | "shipping_line") | Yes | What the discount applies to. Use 'line_item' for product discounts or 'shipping_line' for shipping discounts. |
| `usage_limit` | integer | No | Maximum total number of times any discount code associated with this price rule can be used across all customers. If omitted, unlimited usage. Example: 100 means the discount can be used 100 times total. |
| `allocation_limit` | integer | No | Number of times the discount can be allocated on a single cart. Only valid for BXGY discounts. |
| `target_selection` | string ("all" | "entitled") | Yes | Which items the discount applies to. Use 'all' for all items or 'entitled' for specific products/collections/variants. |
| `allocation_method` | string ("each" | "across") | Yes | How the discount is allocated. Use 'each' to apply the discount to each eligible item or 'across' to split the discount across all items. IMPORTANT: Must be 'across' when target_selection is 'all'. Must be 'each' when target_type is 'shipping_line'. |
| `once_per_customer` | boolean | No | If true, each customer can only use this discount once (tracked by customer account). If false or omitted, customers can use it multiple times. Useful for new customer offers or preventing abuse. |
| `customer_selection` | string ("all" | "prerequisite") | Yes | Which customers the discount applies to. Use 'all' for all customers or 'prerequisite' for specific customer segments or IDs. |
| `entitled_country_ids` | array | No | Country IDs eligible for shipping discounts. Only valid when target_type is 'shipping_line'. |
| `entitled_product_ids` | array | No | Product IDs eligible for the discount. Only valid when target_type is 'line_item' and target_selection is 'entitled'. |
| `entitled_variant_ids` | array | No | Variant IDs eligible for the discount. Only valid when target_type is 'line_item' and target_selection is 'entitled'. Cannot include variants of products in entitled_product_ids. |
| `entitled_collection_ids` | array | No | Collection IDs eligible for the discount. Only valid when target_type is 'line_item' and target_selection is 'entitled'. |
| `prerequisite_product_ids` | array | No | Product IDs required in the cart for Buy X Get Y discounts. |
| `prerequisite_variant_ids` | array | No | Variant IDs required in the cart for Buy X Get Y discounts. |
| `prerequisite_customer_ids` | array | No | Specific customer IDs required for the discount to apply. Cannot be used with customer_segment_prerequisite_ids. |
| `prerequisite_collection_ids` | array | No | Collection IDs required in the cart for the discount to apply. |
| `prerequisite_quantity_range` | object | No | Minimum item quantity required for the discount to apply. Cannot be combined with prerequisite_to_entitlement_quantity_ratio. |
| `prerequisite_subtotal_range` | object | No | Minimum order subtotal required for the discount to apply. Cannot be combined with prerequisite_to_entitlement_quantity_ratio. |
| `customer_segment_prerequisite_ids` | array | No | Customer segment IDs required for the discount to apply. Cannot be used with prerequisite_customer_ids. |
| `prerequisite_shipping_price_range` | object | No | Maximum shipping price requirement for the discount to apply. Cannot be combined with prerequisite_to_entitlement_quantity_ratio. |
| `prerequisite_to_entitlement_quantity_ratio` | object | No | Buy/Get ratio for BXGY (Buy X Get Y) discounts. Cannot be combined with prerequisite_subtotal_range, prerequisite_quantity_range, or prerequisite_shipping_price_range. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create a product (Deprecated)

**Slug:** `SHOPIFY_CREATE_PRODUCT`

DEPRECATED: Use SHOPIFY_CREATES_A_NEW_PRODUCT instead. Creates a new product in a Shopify store; a product title is generally required. Note: The Product REST API is deprecated as of API version 2025-10. While it continues to function, Shopify recommends migrating to the GraphQL Admin API for product management in new implementations. Inventory Management: inventory_quantity is read-only and cannot be set during product creation. To manage inventory, first create the product, then use the InventoryLevel resource with the variant's inventory_item_id (returned in the response) to adjust quantities at specific locations. Response: product data nested at `data.response_data.product`; extract `id` and `variants[0].id` for subsequent image or collection calls.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `title` | string | Yes | The title of the product. Shopify requires this field when creating a product. |
| `vendor` | string | No | The name of the product's vendor or manufacturer. |
| `variants` | array | No | Array of product variants. If not provided, Shopify creates a default variant Start with only `price` and add attributes incrementally — complex payloads cause 400/422 errors. Deduplicate SKUs and ensure valid handles before calling; duplicate SKUs or missing required variant fields trigger 422 validation errors. |
| `body_html` | string | No | A detailed description of the product, which can include HTML formatting for rich text. |
| `product_type` | string | No | A category for the product, used for filtering and organizing products in Shopify. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Product Image (Deprecated)

**Slug:** `SHOPIFY_CREATE_PRODUCT_IMAGE`

DEPRECATED: Use SHOPIFY_CREATE_A_NEW_PRODUCT_IMAGE instead. Creates a new product image for a Shopify product. Use this tool to add images to products either by providing a publicly accessible image URL (src) or by uploading base64-encoded image data (attachment). You can specify the image position (1 is the main image), add alt text for accessibility, and associate the image with specific product variants. Supports PNG, JPG, and GIF formats. Products can have up to 250 images.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `image` | object | Yes | An object containing the image details including source URL or attachment data, optional position, alt text, and variant associations. `src` must be a direct, publicly accessible HTTPS URL (no redirects, no HTML responses, no internal/temporary links); file size must be under ~20 MB. |
| `product_id` | string | Yes | The unique numeric identifier of the Shopify product to add the image to. Must be a valid product ID from your store. When chaining with other Shopify calls, extract from `data.response_data.product.id` in prior responses. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create product metafield

**Slug:** `SHOPIFY_CREATE_PRODUCT_METAFIELD`

Creates a new metafield for a specific Shopify product. Each namespace+key combination must be unique per product; use the update action if the metafield already exists.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `key` | string | Yes | The key for the metafield. Must be at least 3 characters long. |
| `type` | string | No | The value type of the metafield. Defaults to single_line_text_field. |
| `value` | string | Yes | The value for the metafield. |
| `namespace` | string | Yes | The namespace for the metafield. Must be at least 3 characters long. |
| `product_id` | string | Yes | The unique identifier of the Shopify product to add a metafield to. |
| `description` | string | No | A description of the information that the metafield contains. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create a new product variant

**Slug:** `SHOPIFY_CREATE_PRODUCT_VARIANT`

Create a new product variant for an existing product. Use when adding a new variant with specific option values (like size, color). Each product can have up to 3 options and 100 variants maximum.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `variant` | object | Yes | The variant object containing variant details |
| `product_id` | string | Yes | The ID of the product to create the variant for |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Pub/Sub webhook subscription

**Slug:** `SHOPIFY_CREATE_PUB_SUB_WEBHOOK_SUBSCRIPTION`

Create a Google Cloud Pub/Sub webhook subscription in Shopify. Use when you need to configure real-time event notifications to Google Cloud Pub/Sub for events like order creation, product updates, or customer changes. Pub/Sub webhooks push events to your GCP topic immediately when changes occur, eliminating polling. You can filter events and control payload fields to optimize performance.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `topic` | string ("APP_PURCHASES_ONE_TIME_UPDATE" | "APP_SUBSCRIPTIONS_UPDATE" | "APP_UNINSTALLED" | "CARTS_CREATE" | "CARTS_UPDATE" | "CHANNELS_DELETE" | "CHECKOUTS_CREATE" | "CHECKOUTS_DELETE" | "CHECKOUTS_UPDATE" | "COLLECTIONS_CREATE" | "COLLECTIONS_DELETE" | "COLLECTIONS_UPDATE" | "COLLECTION_LISTINGS_ADD" | "COLLECTION_LISTINGS_REMOVE" | "COLLECTION_LISTINGS_UPDATE" | "CUSTOMERS_CREATE" | "CUSTOMERS_DELETE" | "CUSTOMERS_DISABLE" | "CUSTOMERS_ENABLE" | "CUSTOMERS_UPDATE" | "CUSTOMER_GROUPS_CREATE" | "CUSTOMER_GROUPS_DELETE" | "CUSTOMER_GROUPS_UPDATE" | "DISPUTES_CREATE" | "DISPUTES_UPDATE" | "DRAFT_ORDERS_CREATE" | "DRAFT_ORDERS_DELETE" | "DRAFT_ORDERS_UPDATE" | "FULFILLMENTS_CREATE" | "FULFILLMENTS_UPDATE" | "FULFILLMENT_EVENTS_CREATE" | "FULFILLMENT_EVENTS_DELETE" | "INVENTORY_ITEMS_CREATE" | "INVENTORY_ITEMS_DELETE" | "INVENTORY_ITEMS_UPDATE" | "INVENTORY_LEVELS_CONNECT" | "INVENTORY_LEVELS_DISCONNECT" | "INVENTORY_LEVELS_UPDATE" | "LOCATIONS_CREATE" | "LOCATIONS_DELETE" | "LOCATIONS_UPDATE" | "ORDERS_CANCELLED" | "ORDERS_CREATE" | "ORDERS_DELETE" | "ORDERS_EDITED" | "ORDERS_FULFILLED" | "ORDERS_PAID" | "ORDERS_PARTIALLY_FULFILLED" | "ORDERS_UPDATED" | "PRODUCTS_CREATE" | "PRODUCTS_DELETE" | "PRODUCTS_UPDATE" | "PRODUCT_LISTINGS_ADD" | "PRODUCT_LISTINGS_REMOVE" | "PRODUCT_LISTINGS_UPDATE" | "REFUNDS_CREATE" | "SHOP_UPDATE" | "THEMES_CREATE" | "THEMES_DELETE" | "THEMES_PUBLISH" | "THEMES_UPDATE") | Yes | The event type that triggers the webhook. Choose from available Shopify webhook topics like ORDERS_CREATE, PRODUCTS_UPDATE, CUSTOMERS_CREATE, etc. |
| `webhook_subscription` | object | Yes | Configuration details for the Pub/Sub webhook subscription including GCP project, topic, format, and optional filters. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Redirect

**Slug:** `SHOPIFY_CREATE_REDIRECT`

Create a URL redirect in Shopify. Use when you need to redirect an old path to a new location. When a full URL is provided as the path, it will be saved as an absolute path without the domain.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `path` | string | Yes | The old path to be redirected. When the user visits this path, they will be redirected to the target. Maximum 1024 characters. When a full URL is provided, it will be saved as an absolute path without the domain. |
| `target` | string | Yes | The target location where the user will be redirected. Can be set to any path on the shop's site or to an external URL. Maximum 255 characters. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create order refund

**Slug:** `SHOPIFY_CREATE_REFUND`

Creates a refund for a Shopify order. **IMPORTANT: You must call the calculate refund endpoint (SHOPIFY_CREATE_ORDERS_REFUNDS_CALCULATE) first** to generate accurate transaction data with kind='suggested_refund', then change kind to 'refund' before using this action. Requires order_id and transaction details (parent_id, amount, kind='refund', gateway). For multi-currency orders, currency is required. Rate limit: 5 refunds/minute on dev/trial stores.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `note` | string | No | An optional note attached to the refund explaining the reason. |
| `notify` | boolean | No | Whether to send a refund notification email to the customer. Defaults to false. |
| `currency` | string | No | The three-letter currency code (ISO 4217 format) for the entire refund. Required for multi-currency orders. This is separate from the currency field in individual transactions. |
| `order_id` | string | Yes | The unique identifier of the order to refund. |
| `shipping` | object | No | Shipping refund details. |
| `transactions` | array | No | Optional list of refund transactions obtained from the calculate endpoint (with kind changed from 'suggested_refund' to 'refund'). |
| `refund_line_items` | array | No | List of line items to refund. Each line item must include line_item_id, quantity, and restock_type. |
| `discrepancy_reason` | string ("restock" | "damage" | "customer" | "other") | No | The reason for any discrepancy between calculated and actual refund amounts. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Resource Feedback

**Slug:** `SHOPIFY_CREATE_RESOURCE_FEEDBACK`

Creates shop-level resource feedback to notify Shopify merchants about app setup requirements or successful configuration. Feedback appears on the merchant's admin home screen. Each new submission automatically replaces previous feedback. Use state='requires_action' to alert merchants about mandatory setup steps, or state='success' to confirm proper configuration.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `state` | string ("requires_action" | "success") | Yes | Indicates whether merchant action is needed. Must be 'requires_action' or 'success'. |
| `messages` | array | No | Array with exactly one message string (max 100 chars). Required when state is 'requires_action', disallowed when state is 'success'. Message should follow format: '[Problem explanation]. [Suggested action].' |
| `feedback_generated_at` | string | Yes | ISO 8601 UTC DateTime when feedback was generated (e.g., '2024-04-01T18:56:53.423703Z'). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create a new product (Deprecated)

**Slug:** `SHOPIFY_CREATES_A_NEW_PRODUCT`

Create a new product in Shopify. Use when you need to add a new product to the store with details like title, description, variants, options, and images.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tags` | string | No | Comma-separated tags for filtering and search (max 250 tags, 255 chars each) |
| `title` | string | Yes | The name of the product (required) |
| `images` | array | No | Array of product images |
| `status` | string ("active" | "archived" | "draft") | No | Product status: 'active' (published and visible), 'archived' (hidden), or 'draft' (unpublished) |
| `vendor` | string | No | The name of the product's vendor or manufacturer |
| `options` | array | No | Array of product options (max 3 options, e.g., Color, Size). Required if variants use option1/option2/option3 |
| `variants` | array | No | Array of product variants. If not provided, Shopify creates a default variant |
| `body_html` | string | No | Product description supporting HTML formatting |
| `published` | boolean | No | Whether to publish the product immediately |
| `metafields` | array | No | Custom metadata fields (e.g., for SEO: use namespace='global', key='title_tag' or 'description_tag') |
| `product_type` | string | No | Categorization for filtering and searching (e.g., 'Snowboard', 'Apparel') |
| `template_suffix` | string | No | Liquid template suffix for custom product pages |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Script Tag

**Slug:** `SHOPIFY_CREATE_SCRIPT_TAG`

Create a new script tag in Shopify to load remote JavaScript into your online store. Script tags allow you to add custom functionality to your storefront by loading external JavaScript files. Requires 'write_script_tags' OAuth scope. Note: As of February 1, 2025, creating script tags for order status pages is blocked by Shopify. Use 'online_store' display_scope for storefront functionality.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `src` | string | Yes | URL of the remote script to load. Must be HTTPS. |
| `cache` | boolean | No | Whether the script should be cached by the CDN. Default: false. |
| `event` | string | Yes | DOM event that triggers the script load. Must be 'onload' (the only supported value). |
| `display_scope` | string ("online_store" | "order_status" | "all") | No | Where the script displays. Options: 'online_store' (storefront only), 'order_status' (order status page - restricted since Feb 2025), or 'all' (both). Defaults to 'online_store' (recommended). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Smart Collection

**Slug:** `SHOPIFY_CREATE_SMART_COLLECTIONS`

Create a new smart collection with automated product rules. Use when you need to create dynamic collections that automatically include products matching specific criteria (e.g., by vendor, price range, tags). Requires write_products scope.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `image` | object | No | Image object for smart collection. |
| `rules` | array | Yes | Array of rule objects defining which products are automatically included in this collection. Products must match all rules (or any rule if disjunctive is true). |
| `title` | string | Yes | Collection name, maximum 255 characters. This is the display name shown to customers. |
| `body_html` | string | No | HTML description displayed on collection pages. Can include formatting and markup. |
| `published` | boolean | No | Publishing status of the collection. Defaults to true (published). |
| `sort_order` | string ("manual" | "alpha-asc" | "alpha-desc" | "best-selling" | "created" | "created-desc" | "price-asc" | "price-desc") | No | Product ordering method within the collection. Defaults to 'best-selling' if not specified. |
| `disjunctive` | boolean | No | If true, products match ANY rule; if false (default), products must match ALL rules. |
| `template_suffix` | string | No | Liquid template suffix for custom styling. If 'custom', uses collection.custom.liquid template. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create or Update Theme Asset

**Slug:** `SHOPIFY_CREATES_OR_UPDATES_AN_ASSET_FOR_A_THEME`

Creates or updates a theme asset file (templates, stylesheets, scripts, or images) within a Shopify theme. This action uploads or modifies files in the theme's file structure. For text-based files (HTML, Liquid, CSS, JS), use the 'value' parameter with file content. For binary files (images), use 'attachment' with base64-encoded data or 'src' with an external URL. To duplicate an existing asset, use 'source_key'. **Important**: Exactly one of value, attachment, src, or source_key must be provided per request. **Requirements**: - Requires 'write_themes' scope with merchant approval - Note: REST Admin API is legacy as of October 2024; new apps should use GraphQL Admin API from April 2025

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `key` | string | Yes | The file path within the theme, consisting of directory and filename. Must follow the theme directory structure (e.g., 'assets/' for CSS/JS/images, 'templates/' for page templates, 'layout/' for layout files, 'sections/' for theme sections, 'snippets/' for reusable code, 'config/' for theme settings). |
| `src` | string | No | A publicly accessible URL from which Shopify will download the asset file. Typically used for images or other binary assets hosted externally. Shopify will fetch and store the file from this URL. **Constraint**: Exactly one of value, attachment, src, or source_key must be provided. |
| `value` | string | No | The text content of the file. Use this for text-based assets including HTML, Liquid templates, CSS stylesheets, JavaScript files, JSON config files, and XML. Provide the raw file content as a string. **Constraint**: Exactly one of value, attachment, src, or source_key must be provided. |
| `theme_id` | string | Yes | The unique numeric identifier for the theme where the asset will be created or updated. Obtain theme IDs using the GET_THEMES action. |
| `attachment` | string | No | Base64-encoded binary data for non-text assets such as images (PNG, JPG, GIF, SVG), fonts, or other binary files. The binary file must be encoded in base64 format before sending. **Constraint**: Exactly one of value, attachment, src, or source_key must be provided. |
| `source_key` | string | No | Path to an existing asset in the same theme to duplicate. Creates a copy of the specified asset at the new location defined by 'key'. Useful for creating backups or template variations. **Constraint**: Exactly one of value, attachment, src, or source_key must be provided. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Storefront Access Token

**Slug:** `SHOPIFY_CREATE_STOREFRONT_ACCESS_TOKEN`

Creates a new storefront access token for unauthenticated Storefront API access. The token delegates unauthenticated access scopes to clients that need to access the Storefront API without authentication. Requirements: - The app must be configured as an 'extendable' (Sales Channel) app in the Shopify Partner Dashboard - The app must have at least one unauthenticated access scope granted (e.g., unauthenticated_read_product_listings, unauthenticated_write_checkouts) - The created token inherits all unauthenticated scopes from the app Limitations: Maximum 100 active tokens per shop. Tokens cannot be updated after creation, only deleted.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `title` | string | Yes | An arbitrary identifier for the token with no constraint on uniqueness. Used for reference purposes. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Theme

**Slug:** `SHOPIFY_CREATE_THEME`

Creates a new theme in Shopify from a ZIP file containing theme assets. Requires a publicly accessible URL to the ZIP file. The theme will default to 'unpublished' status unless the role is explicitly set to 'main' (which publishes the theme immediately after file extraction). Note: This action requires the 'write_themes' scope, which needs merchant approval in Shopify. A store can have a maximum of 20 themes.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `src` | string | No | Publicly accessible URL where Shopify can download the theme ZIP file. The ZIP must contain valid theme files. If not provided, an empty theme will be created. |
| `name` | string | Yes | The name to assign to the new theme. This will be displayed in the Shopify admin. Maximum 50 characters. |
| `role` | string ("main" | "unpublished" | "development") | No | The theme's role/status: 'main' (published and active on store), 'unpublished' (not visible to customers), 'development' (for testing). Defaults to 'unpublished'. WARNING: Setting to 'main' will immediately publish this theme on your live store after file extraction completes. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Webhook (Deprecated)

**Slug:** `SHOPIFY_CREATE_WEBHOOK`

Creates a new webhook subscription in Shopify to receive real-time notifications when specific events occur in the store. Webhooks allow your application to be notified automatically when events like order creation, product updates, or customer changes happen. The webhook will POST event data to the specified address. Required parameters: address (destination URL) and topic (event type). Optional parameters: format (defaults to 'json'), fields (to limit payload size), metafield_namespaces (to include metafields). Requires 'write_webhooks' scope. May also require topic-specific scopes (e.g., 'read_orders' for orders/* topics).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `topic` | string | Yes | Event that triggers the webhook. Common topics include: orders/create, orders/updated, products/create, products/update, customers/create, customers/update, app/uninstalled, shop/update, collections/create, inventory_items/update. See Shopify webhook documentation for the complete list of available topics. Note: Some topics may require specific API scopes or permissions. |
| `fields` | array | No | Optional array of top-level resource fields to serialize and send. If omitted, all fields are included. |
| `format` | string | No | Data format for webhook delivery. Accepts 'json' or 'xml'. Defaults to 'json' if not specified. |
| `address` | string | Yes | Destination URI where the webhook should send POST requests when events occur. Supports standard HTTPS URLs, Google Pub/Sub topics (format: pubsub://projectName:topicName), and Amazon EventBridge ARNs. |
| `metafield_namespaces` | array | No | Array of metafield namespaces to include with each webhook. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create webhook subscription

**Slug:** `SHOPIFY_CREATE_WEBHOOK_SUBSCRIPTION`

Create a webhook subscription that notifies your app when specific events occur in a Shopify store. Use when you need real-time event notifications for orders, products, customers, or other resources. Supports HTTPS URLs, Google Pub/Sub topics, and AWS EventBridge event sources.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `topic` | string ("APP_PURCHASES_ONE_TIME_UPDATE" | "APP_SUBSCRIPTIONS_UPDATE" | "APP_UNINSTALLED" | "CARTS_CREATE" | "CARTS_UPDATE" | "CHANNELS_DELETE" | "CHECKOUTS_CREATE" | "CHECKOUTS_DELETE" | "CHECKOUTS_UPDATE" | "COLLECTIONS_CREATE" | "COLLECTIONS_DELETE" | "COLLECTIONS_UPDATE" | "COLLECTION_LISTINGS_ADD" | "COLLECTION_LISTINGS_REMOVE" | "COLLECTION_LISTINGS_UPDATE" | "CUSTOMERS_CREATE" | "CUSTOMERS_DELETE" | "CUSTOMERS_DISABLE" | "CUSTOMERS_ENABLE" | "CUSTOMERS_UPDATE" | "CUSTOMER_GROUPS_CREATE" | "CUSTOMER_GROUPS_DELETE" | "CUSTOMER_GROUPS_UPDATE" | "DISPUTES_CREATE" | "DISPUTES_UPDATE" | "DRAFT_ORDERS_CREATE" | "DRAFT_ORDERS_DELETE" | "DRAFT_ORDERS_UPDATE" | "FULFILLMENTS_CREATE" | "FULFILLMENTS_UPDATE" | "FULFILLMENT_EVENTS_CREATE" | "FULFILLMENT_EVENTS_DELETE" | "INVENTORY_ITEMS_CREATE" | "INVENTORY_ITEMS_DELETE" | "INVENTORY_ITEMS_UPDATE" | "INVENTORY_LEVELS_CONNECT" | "INVENTORY_LEVELS_DISCONNECT" | "INVENTORY_LEVELS_UPDATE" | "LOCATIONS_CREATE" | "LOCATIONS_DELETE" | "LOCATIONS_UPDATE" | "METAOBJECTS_CREATE" | "METAOBJECTS_DELETE" | "METAOBJECTS_UPDATE" | "ORDERS_CANCELLED" | "ORDERS_CREATE" | "ORDERS_DELETE" | "ORDERS_EDITED" | "ORDERS_FULFILLED" | "ORDERS_PAID" | "ORDERS_PARTIALLY_FULFILLED" | "ORDERS_UPDATED" | "PRODUCTS_CREATE" | "PRODUCTS_DELETE" | "PRODUCTS_UPDATE" | "PRODUCT_LISTINGS_ADD" | "PRODUCT_LISTINGS_REMOVE" | "PRODUCT_LISTINGS_UPDATE" | "REFUNDS_CREATE" | "SHOP_UPDATE" | "THEMES_CREATE" | "THEMES_DELETE" | "THEMES_PUBLISH" | "THEMES_UPDATE") | Yes | The type of event that triggers the webhook (e.g., ORDERS_CREATE, PRODUCTS_UPDATE, APP_UNINSTALLED). |
| `webhookSubscription` | object | Yes | Webhook subscription configuration object including callback URL and optional filters. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Article

**Slug:** `SHOPIFY_DELETE_ARTICLE`

Delete an article from a blog in Shopify. Use when you need to permanently remove blog content. This action is irreversible.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `blog_id` | string | Yes | The ID of the blog containing the article to be deleted. |
| `article_id` | string | Yes | The ID of the article to be deleted. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete a blog

**Slug:** `SHOPIFY_DELETE_BLOG`

Permanently deletes a blog from a Shopify store using its `blog_id`; this action is irreversible and requires the 'content' access scope.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `blog_id` | string | Yes | The unique numeric identifier for the blog to be deleted. This ID is assigned by Shopify when the blog is created. Can be provided as an integer or string. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Remove product from collection

**Slug:** `SHOPIFY_DELETE_COLLECT`

Removes a product from a custom collection by deleting the collect. Use when you need to unlink a specific product from a custom collection using the collect ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `collect_id` | string | Yes | The unique numeric identifier of the collect to remove. A collect represents the relationship between a specific product and a custom collection. To find collect IDs, use the 'Get collects' action to list all product-collection relationships. Note: This endpoint only works with custom collections, not smart collections. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Remove a comment

**Slug:** `SHOPIFY_DELETE_COMMENT`

Remove a comment from a Shopify blog. Use when you need to hide a comment from blog readers while preserving the data. The comment status will be changed to 'removed'. Note: This action requires 'write_content' scope and protected customer data access approval from Shopify, as comments contain customer information (author, email, IP address).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `comment_id` | string | Yes | The numeric identifier for the comment to be removed. The comment will be marked as removed and hidden from blog readers. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete country

**Slug:** `SHOPIFY_DELETE_COUNTRY`

Deletes a country from the shop's tax configuration. Removes a country that was previously added to the shop's tax settings. The country must have been added via the API or Shopify admin for this operation to succeed. Requires the 'write_shipping' scope. DEPRECATION WARNING: This REST API endpoint was deprecated in API version 2024-07 (effective July 1, 2024). The recommended alternative is the GraphQL Countries in Shipping Zone API. This endpoint may not be available in newer API versions or may have restricted access in many Shopify stores.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `country_id` | string | Yes | The unique identifier (as a string) for the country to be removed from the shop's tax configuration. This ID can be obtained from the GET countries endpoint. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete custom collection (Deprecated)

**Slug:** `SHOPIFY_DELETE_CUSTOM_COLLECTION`

DEPRECATED: Use SHOPIFY_DELETES_A_CUSTOM_COLLECTION instead. Permanently deletes a custom collection from a Shopify store using its `collection_id`; this action is irreversible and requires a valid, existing `collection_id`.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `collection_id` | string | Yes | The unique identifier for the custom collection that needs to be deleted. This ID is a numerical string assigned by Shopify when the collection is created. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete a customer

**Slug:** `SHOPIFY_DELETE_CUSTOMER`

Deletes a customer from the Shopify store. Use when you need to permanently remove a customer who has no existing orders. Cannot delete customers with existing orders.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `customer_id` | string | Yes | The unique identifier for the customer to be deleted. Note: A customer cannot be deleted if they have existing orders. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete customer address

**Slug:** `SHOPIFY_DELETE_CUSTOMER_ADDRESS`

Removes an address from a customer's address list. Cannot delete the customer's default address - to delete a default address, first assign a different address as the default.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `address_id` | string | Yes | The unique identifier for the address to be removed from the customer's address list. Note: Cannot delete the customer's default address without first assigning a different address as default. |
| `customer_id` | string | Yes | The unique identifier for the customer whose address will be deleted. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete a draft order

**Slug:** `SHOPIFY_DELETE_DRAFT_ORDER`

Delete a draft order from Shopify. Use when you need to remove an existing draft order permanently.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `draft_order_id` | string | Yes | The unique identifier of the draft order to delete. This ID is required to target the correct draft order for removal. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete fulfillment event

**Slug:** `SHOPIFY_DELETE_FULFILLMENT_EVENT`

Deletes a fulfillment event (tracking status update) from an order's fulfillment. Use this action when you need to remove an incorrect or outdated tracking event from a fulfillment. Fulfillment events represent tracking status updates like 'in_transit', 'out_for_delivery', or 'delivered' that are displayed to customers on the order status page. Common use cases: - Removing duplicate tracking events - Correcting erroneous status updates - Cleaning up test events Prerequisites: You must have valid order_id, fulfillment_id, and event_id. These can be obtained from order retrieval actions or fulfillment event list actions. Note: This REST endpoint is deprecated. For new integrations, consider using the GraphQL Admin API. Requires 'write_orders' scope and approval for protected customer data access.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `event_id` | string | Yes | The unique numeric identifier for the fulfillment event to delete. You can obtain this from fulfillment event retrieval actions (e.g., get_fulfillment_events) or from the event.id field when creating fulfillment events. |
| `order_id` | string | Yes | The unique numeric identifier for the order. You can obtain this from order retrieval actions (e.g., list_order, get_order) or from the order.id field in order objects. |
| `fulfillment_id` | string | Yes | The unique numeric identifier for the fulfillment within the order. You can obtain this from the fulfillments array in an order object (e.g., order.fulfillments[0].id) or from fulfillment creation/retrieval actions. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Remove fulfillment service

**Slug:** `SHOPIFY_DELETE_FULFILLMENT_SERVICE`

Remove an existing fulfillment service from a Shopify store. Use when you need to permanently delete a third-party fulfillment service.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fulfillment_service_id` | string | Yes | The unique identifier of the fulfillment service to remove. This is the numeric ID of the fulfillment service you want to delete. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete inventory levels

**Slug:** `SHOPIFY_DELETE_INVENTORY_LEVEL`

Deletes an inventory level of an inventory item at a location. Deleting an inventory level removes that item from the specified location. Every inventory item must have at least one inventory level.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `location_id` | integer | Yes | The ID of the location that the inventory level belongs to. To find the ID of the location, use the Location resource. |
| `inventory_item_id` | integer | Yes | The ID for the inventory item. This identifies the specific inventory item to remove from the location. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete a marketing event

**Slug:** `SHOPIFY_DELETE_MARKETING_EVENT`

Delete a marketing event from Shopify. Use when you need to remove an existing marketing event from the system.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `marketing_event_id` | string | Yes | The unique identifier of the marketing event to delete. This ID is required to target the specific marketing event for removal. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete a metafield by its ID

**Slug:** `SHOPIFY_DELETE_METAFIELD`

Deletes a metafield by its ID from any Shopify resource. Use this action to permanently remove metafields from: - Shop-level metafields (use resource='shop' or 'metafields') - Product metafields (resource='products') - Collection metafields (resource='collections') - Customer metafields (resource='customers') - Order metafields (resource='orders') - Other resource-specific metafields The deletion is permanent and cannot be undone. Returns an empty response on success.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `resource` | string | Yes | The resource type that owns the metafield. Use 'shop' or 'metafields' for shop-level metafields. Use specific resource types like 'products', 'customers', 'orders', 'collections', 'blogs', etc. for resource-specific metafields. |
| `resource_id` | string | Yes | The unique identifier of the parent resource that owns the metafield. This parameter is required but ignored for shop-level metafields (when resource is 'shop' or 'metafields'). For other resource types, provide the actual resource ID. |
| `metafield_id` | string | Yes | The unique identifier of the metafield to delete. This is the metafield's ID, not the owner resource ID. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete metaobject

**Slug:** `SHOPIFY_DELETE_METAOBJECT`

Deletes a metaobject and its associated metafields using GraphQL mutation. Use when you need to permanently remove a metaobject from the Shopify store. The deletion is permanent and cannot be undone.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The ID of the metaobject to delete. Must be a Shopify GID in the format 'gid://shopify/Metaobject/{id}' or just the numeric ID. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete metaobject definition

**Slug:** `SHOPIFY_DELETE_METAOBJECT_DEFINITION`

Delete a metaobject definition and all its associated data. Use when you need to completely remove a metaobject definition schema. This mutation also asynchronously deletes all related metafield definitions, metaobjects, and metafields.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The ID of the metaobject definition to delete. Must be in the format: gid://shopify/MetaobjectDefinition/{id} where {id} is the numeric ID. This mutation also deletes all related metafield definitions, metaobjects, and metafields asynchronously. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete an order

**Slug:** `SHOPIFY_DELETE_ORDER`

Permanently delete an order from Shopify. Use when you need to remove test orders, orders paid with manual payment methods, or draft orders marked as paid. Orders must be archived or canceled before deletion. Orders that interact with an online gateway, are paid via Shopify POS, online checkout, or with gift cards cannot be deleted.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `order_id` | string | Yes | The unique identifier of the Shopify order to delete. Orders that interact with an online gateway cannot be deleted. The order must be archived or canceled before deletion. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete order risk

**Slug:** `SHOPIFY_DELETE_ORDER_RISK`

Deletes an order risk from an order. Only the application that created the risk can delete it - you cannot delete risks created by other applications. **IMPORTANT DEPRECATION NOTICE**: The Order Risk REST API has been deprecated as of Shopify API version 2025-10 and is no longer accessible. This endpoint will return 403 Forbidden errors when used with API version 2025-10 or later. For new implementations, use the GraphQL orderRiskAssessmentCreate and related mutations instead. See: https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderRiskAssessmentCreate To use this action, you must use Shopify API version 2024-01 or earlier, though migrating to the GraphQL Risk Assessments API is strongly recommended.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `risk_id` | string | Yes | The unique identifier of the order risk to be removed. Note: You can only delete an order risk that was created by your application - risks created by other applications cannot be deleted. |
| `order_id` | string | Yes | The unique identifier of the order containing the risk to be deleted. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete a page

**Slug:** `SHOPIFY_DELETE_PAGE`

Delete a page from a Shopify store permanently. Use when you need to remove an existing page; this operation is irreversible and requires content access scope.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page_id` | string | Yes | The unique numeric identifier for the page to be deleted. This can be obtained from page listing endpoints or page creation responses. The deletion is permanent and irreversible. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete price rule

**Slug:** `SHOPIFY_DELETE_PRICE_RULE`

Deletes an existing price rule from the Shopify store permanently. Use this action to remove price rules that are no longer needed. Note that deleting a price rule will also delete any discount codes associated with it. This operation is idempotent - deleting an already-deleted price rule will return an error. Common use cases: - Removing expired or outdated promotional campaigns - Cleaning up test price rules from development - Deactivating seasonal sales or limited-time offers To get a price rule ID: use the list price rules action or reference the ID from when you created the price rule.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `price_rule_id` | integer | Yes | The unique identifier of the price rule to delete. You can obtain price rule IDs by listing price rules or from the response when creating a price rule. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete a product

**Slug:** `SHOPIFY_DELETE_PRODUCT`

Permanently deletes a product from a Shopify store by its product ID. This action is irreversible - deleted products cannot be recovered. Deleting a product also removes all associated variants, images, inventory, and removes the product from all collections and sales channels store-wide. If the goal is collection-only cleanup, adjust collection membership instead.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `product_id` | string | Yes | The unique numeric identifier of the product to delete. You can obtain this ID from product creation responses or by listing products. Example: '8313381814466' Must be a numeric REST ID (e.g., '8313381814466'); GraphQL GID formats (e.g., 'gid://shopify/Product/123') are not accepted. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete product image

**Slug:** `SHOPIFY_DELETE_PRODUCT_IMAGE`

Deletes a specific image from a product in Shopify, requiring the `product_id` of an existing product and the `image_id` of an image currently associated with that product.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `image_id` | string | Yes | The unique identifier of the specific product image to be deleted. |
| `product_id` | string | Yes | The unique identifier of the product from which the image is to be deleted. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete product metafield

**Slug:** `SHOPIFY_DELETE_PRODUCT_METAFIELD`

Deletes a specific metafield from a Shopify product using the product ID and metafield ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `product_id` | string | Yes | The unique identifier of the Shopify product. |
| `metafield_id` | string | Yes | The unique identifier of the metafield to delete. Deletion is permanent and irreversible. Verify the correct metafield by checking its namespace, key, and value before deletion, as multiple metafields can share similar keys across different namespaces. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Remove product variant

**Slug:** `SHOPIFY_DELETE_PRODUCT_VARIANT`

Deletes a specific product variant from a Shopify store using its unique product ID and variant ID; this action is irreversible. Use when you need to permanently remove a variant from a product.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `product_id` | string | Yes | The unique identifier of the Shopify product that contains the variant to be deleted. |
| `variant_id` | string | Yes | The unique identifier of the specific product variant to be deleted. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete redirect

**Slug:** `SHOPIFY_DELETE_REDIRECT`

Permanently deletes a URL redirect from a Shopify store. Use this tool to remove redirect rules that are no longer needed. A redirect automatically forwards visitors from an old URL path to a new target location. When you delete a redirect, visitors to the old path will no longer be automatically forwarded. Note: This operation is destructive and cannot be undone. If the redirect ID doesn't exist, the API will return a 404 error.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `redirect_id` | string | Yes | The unique numeric identifier of the redirect to delete. You can obtain redirect IDs by listing redirects or from redirect creation responses. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete a custom collection

**Slug:** `SHOPIFY_DELETES_A_CUSTOM_COLLECTION`

Permanently delete a custom collection from a Shopify store. Use when you need to remove a custom collection that is no longer needed. This operation is irreversible and requires the 'write_products' access scope.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `custom_collection_id` | string | Yes | The unique identifier for the custom collection to be deleted. This ID is included in the URL path. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete a discount code

**Slug:** `SHOPIFY_DELETES_A_DISCOUNT_CODE`

Delete a discount code from a price rule. Use when you need to remove a specific discount code associated with a price rule.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `price_rule_id` | integer | Yes | The unique identifier of the price rule associated with the discount code. You can obtain price rule IDs by listing price rules using the 'Get Price Rules List' action or by creating a price rule. |
| `discount_code_id` | integer | Yes | The unique identifier of the discount code to delete. You can obtain discount code IDs by listing discount codes for a price rule using the 'Get Discount Codes' action. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete a saved search

**Slug:** `SHOPIFY_DELETE_SAVED_SEARCH`

Delete a saved search in Shopify. Use when you need to remove a saved search by its ID. The ID must be provided in GID format (gid://shopify/SavedSearch/[ID]).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The ID of the saved search to delete. Must be in GID format: gid://shopify/SavedSearch/[ID]. Example: gid://shopify/SavedSearch/123456789 |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Script Tag

**Slug:** `SHOPIFY_DELETE_SCRIPT_TAG`

Delete a script tag from your Shopify store. Permanently removes a script tag using its unique identifier. Script tags are JavaScript files that load on your storefront. Use this action to clean up deprecated scripts or remove third-party integrations. Requires 'write_script_tags' OAuth scope. Common use cases: - Remove outdated analytics or tracking scripts - Clean up after uninstalling third-party apps - Delete test scripts from development Note: Script tags are automatically deleted when the app that created them is uninstalled.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `script_tag_id` | string | Yes | Unique identifier of the script tag to delete. Obtain this ID from list/get script tag endpoints. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete smart collection

**Slug:** `SHOPIFY_DELETE_SMART_COLLECTION`

Permanently removes a smart collection from a Shopify store using its `smart_collection_id`; this action is irreversible and requires a valid, existing smart collection ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `smart_collection_id` | string | Yes | The unique identifier for the smart collection to be deleted. This ID is a numerical string assigned by Shopify when the smart collection is created. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Storefront Access Token

**Slug:** `SHOPIFY_DELETE_STOREFRONT_ACCESS_TOKEN`

Delete an existing storefront access token from a Shopify store. Use when you need to permanently revoke access for a storefront access token. This operation is irreversible.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `storefront_access_token_id` | string | Yes | The unique identifier of the storefront access token to delete. This is the numeric ID of the token. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete theme

**Slug:** `SHOPIFY_DELETE_THEME`

Deletes a theme from the Shopify store by its ID. Use this tool when you need to permanently remove an unwanted theme. The deleted theme's details are returned in the response for confirmation. **Important limitations:** - Cannot delete a theme that is currently uploading or being updated (processing=true) - Cannot delete the last published theme (role=main) - you must publish another theme first - Cannot delete a theme that doesn't exist (returns 404) - Requires 'write_themes' scope permission **Best practices:** - Only delete unpublished, demo, or development themes - Check theme.role and theme.processing before deletion - Keep at least one published theme at all times

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `theme_id` | string | Yes | The unique numeric identifier for the theme to delete. Can be obtained from GET /themes.json endpoint or from the theme's admin_graphql_api_id (extract the numeric portion). Must be a valid, existing theme ID. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete theme asset

**Slug:** `SHOPIFY_DELETE_THEME_ASSET`

Delete an asset from a Shopify theme. Use when you need to remove a specific asset file (such as CSS, JavaScript, images, or template files) from a theme by providing the theme ID and asset key. Note that required theme assets like layout/theme.liquid cannot be deleted and will result in an error.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `theme_id` | string | Yes | The ID of the theme containing the asset to delete. |
| `asset_key` | string | Yes | The key representing the asset's path within the theme to delete (e.g., 'assets/bg-body.gif', 'templates/index.liquid'). Maximum 100 characters. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete webhook subscription (Deprecated)

**Slug:** `SHOPIFY_DELETE_WEBHOOK`

Delete a webhook subscription from Shopify. Use when you need to remove an existing webhook. Only the app that registered the webhook can delete it; attempting to delete another app's webhook will return a 404 error.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `webhook_id` | string | Yes | The unique numeric identifier of the webhook subscription to delete. Only the app that registered the webhook can delete it. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete webhook subscription

**Slug:** `SHOPIFY_DELETE_WEBHOOK_SUBSCRIPTION`

Delete a webhook subscription and stop all future webhooks to its endpoint. Use when you need to remove a webhook subscription that is no longer needed. Returns the deleted subscription's ID for confirmation. Note: If you only use app-specific webhooks, this may not be needed. App-specific webhook subscriptions in shopify.app.toml are automatically managed by Shopify.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The ID of the webhook subscription to delete. Must be in the format gid://shopify/WebhookSubscription/{id}. This is the globally unique identifier (GID) for the webhook subscription, not the numeric ID. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete web presence

**Slug:** `SHOPIFY_DELETE_WEB_PRESENCE`

Delete a web presence from Shopify. Use when you need to remove a web presence by its ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The ID of the web presence to delete. Must be in the format gid://shopify/WebPresence/{numeric_id} or just the numeric ID. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Disable a Gift Card

**Slug:** `SHOPIFY_DISABLE_GIFT_CARD`

Disable a gift card in Shopify. Use when you need to permanently deactivate a gift card. WARNING: This operation is irreversible and the gift card cannot be re-enabled once disabled.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `gift_card_id` | integer | Yes | The unique identifier of the gift card to disable. This operation is irreversible and cannot be undone. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Enable standard metaobject definition

**Slug:** `SHOPIFY_ENABLE_STANDARD_METAOBJECT_DEFINITION`

Enable a standard metaobject definition from its template. Use when you need to activate a predefined Shopify metaobject template for use in your store.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `type` | string | Yes | The type of the standard metaobject definition to enable. This is a predefined template type provided by Shopify (e.g., 'product_review'). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get abandonment

**Slug:** `SHOPIFY_GET_ABANDONMENT`

Retrieves an abandonment record from Shopify using its unique ID. Use when you need to query customer abandonment data including type, customer info, email state, and timing details.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The ID of the abandonment in GID format (e.g., 'gid://shopify/Abandonment/1'). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get abandonment by abandoned checkout ID

**Slug:** `SHOPIFY_GET_ABANDONMENT_BY_ABANDONED_CHECKOUT_ID`

Query abandonment information by abandoned checkout ID using Shopify's GraphQL Admin API. Use when you need to retrieve customer journey data, abandonment type, and email state for a specific abandoned checkout. Returns null if the checkout doesn't exist or has no abandonment tracking.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `abandoned_checkout_id` | string | Yes | The ID of the abandoned checkout to query. Must be in Shopify GID format (e.g., 'gid://shopify/AbandonedCheckout/12345') or a numeric ID that will be converted to GID format. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get a list of access scopes

**Slug:** `SHOPIFY_GET_ACCESS_SCOPES`

Retrieves a list of access scopes associated with the access token. Use when you need to view the permissions that merchants have granted during app installation.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get App

**Slug:** `SHOPIFY_GET_APP`

Query information about a Shopify app using the GraphQL API. Use when you need to retrieve details about the currently authenticated app or a specific app by its ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | No | The ID of the app to retrieve. Must be in the format gid://shopify/App/{ID}. If omitted, returns the currently authenticated app. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get app by handle

**Slug:** `SHOPIFY_GET_APP_BY_HANDLE`

Query app information by handle using the Shopify Admin GraphQL API. Use when you need to retrieve details about a specific Shopify app using its handle.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `handle` | string | Yes | Handle of the App - a URL-friendly identifier (e.g., 'shopify-flow', 'product-reviews'). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get app installation details

**Slug:** `SHOPIFY_GET_APP_INSTALLATION`

Query a specific app installation on a Shopify store. Use when you need to retrieve details about an app installation including access scopes, launch URL, and uninstall URL.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | No | The ID of the AppInstallation to retrieve. If omitted, returns the AppInstallation for the currently authenticated app. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Application Charge By ID

**Slug:** `SHOPIFY_GET_APPLICATION_CHARGE_BY_ID`

Retrieve a single application charge by its unique identifier. Use when you need detailed information about a specific one-time charge.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique identifier of the application charge to retrieve. |
| `fields` | string | No | A comma-separated list of fields to include in the response (e.g., 'id,name,price,status'). By default, all fields are returned. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Application Charges

**Slug:** `SHOPIFY_GET_APPLICATION_CHARGES`

Retrieves a list of one-time application charges for the current app installation. Application charges are one-time fees charged to merchants for app usage. This endpoint returns all charges with their status (pending, accepted, active, declined, expired). Use this to monitor billing history, verify charge status, or implement pagination with since_id. Returns an empty list if no charges exist, which is normal for new app installations.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fields` | string | No | A comma-separated list of fields to include in the response (e.g., 'id,name,price,status'). By default, all fields are returned. |
| `since_id` | string | No | Retrieve only application charges with an ID greater than this specified ID. This is used for paginating through results. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get application credits

**Slug:** `SHOPIFY_GET_APPLICATION_CREDITS`

Retrieve all application credits for a shop. Use when you need to view credits issued to merchants that can be used towards future app purchases.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fields` | string | No | A comma-separated list of fields to include in the response (e.g., 'id,amount,description,test,currency'). By default, all fields are returned. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Article

**Slug:** `SHOPIFY_GET_ARTICLE`

Retrieves a single article from a Shopify blog by its ID. Use this action when you need to: - Get detailed information about a specific blog article - Retrieve article content, metadata, or publication status - Access article properties like title, author, tags, or images The optional 'fields' parameter allows you to retrieve only specific article properties, reducing response size and improving performance when you don't need the full article data. Requires the 'read_content' OAuth scope.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fields` | string | No | Comma-separated list of article fields to include in the response. Use this to retrieve only specific fields and reduce payload size. Example: 'id,title,author' returns only those three fields. |
| `blog_id` | string | Yes | The unique identifier (ID) of the blog containing the article. |
| `article_id` | string | Yes | The unique identifier (ID) of the article to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Batch Discount Codes

**Slug:** `SHOPIFY_GET_BATCH_DISCOUNT_CODES`

Retrieves discount codes from a batch creation job, showing which succeeded and which failed. **Workflow:** After batch job completes (status='completed'), use this to get the actual codes. 1. Create price rule (get price_rule_id) 2. Create batch job (get batch_id) 3. Poll until completed 4. Use this action to retrieve codes **Response:** Successful codes have id populated and errors={}. Failed codes have id=null and errors with validation details. **Use Cases:** Verify created codes, identify validation errors, get IDs for further operations. **Note:** Requires 'read_price_rules' scope. Max 100 codes per batch.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `batch_id` | integer | Yes | The ID of the batch discount code creation job. Get this from the 'id' field in the response when creating a batch via POST /price_rules/{price_rule_id}/batch.json or from polling GET /price_rules/{price_rule_id}/batch/{batch_id}.json. |
| `price_rule_id` | integer | Yes | The ID of the price rule associated with the batch discount code creation job. Get this from creating or listing price rules. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Single Blog

**Slug:** `SHOPIFY_GET_BLOG`

Retrieve a single blog by its unique identifier. Use when you need to access detailed information about a specific blog in the Shopify store.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fields` | string | No | Comma-separated list of specific blog properties to include in the response (e.g., 'id,title,handle'). If not specified, all properties are returned. |
| `blog_id` | string | Yes | The unique numeric identifier for the blog to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get blog article tags

**Slug:** `SHOPIFY_GET_BLOG_ARTICLE_TAGS`

Retrieve a list of all article tags from a specific blog. Use when you need to get all unique tags that have been applied to articles in a particular blog, optionally sorted by popularity.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | The maximum number of tags to retrieve. If not specified, all tags are returned. |
| `blog_id` | string | Yes | The unique identifier for the blog to retrieve article tags from. |
| `popular` | integer | No | A flag for ordering retrieved tags by popularity. If present (set to any value like 1), results are ordered by popularity, starting with the most popular tag. If not present, tags are returned in default order. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get bulk operation status

**Slug:** `SHOPIFY_GET_BULK_OPERATION`

Query the status and details of a Shopify bulk operation by its ID. Use when you need to check the progress, status, or results of a previously initiated bulk operation. Returns metadata including status, completion time, result URLs, and error information if applicable. Note: The bulkOperation query requires API version 2025-10 or later.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The ID of the BulkOperation to return in GID format (e.g., 'gid://shopify/BulkOperation/6117019975874'). This is the unique identifier for the bulk operation created by bulkOperationRunQuery mutation. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get carrier services

**Slug:** `SHOPIFY_GET_CARRIER_SERVICES`

Retrieves all active carrier services configured in a Shopify store. Carrier services allow apps to provide real-time shipping rates at checkout. This endpoint returns only carrier services where active=true. Requirements: - Store must be on Advanced Shopify plan or higher, OR - Store must be on Shopify plan with yearly billing (with carrier service feature), OR - Store must be a development store Use this to view active carrier services for shipping rate calculations.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get catalogs count

**Slug:** `SHOPIFY_GET_CATALOGS_COUNT`

Query the count of catalogs in the Shopify store. Use when you need to know how many catalogs exist, optionally filtered by type or search query.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `type` | string ("APP" | "COMPANY_LOCATION" | "MARKET") | No | Enum for catalog type values. |
| `query` | string | No | A filter made up of terms for searching catalogs. Filterable fields: app_id, company_id, company_location_id, id, managed_country_id, market_id, status, title. Example: 'status:ACTIVE' |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get checkout profile

**Slug:** `SHOPIFY_GET_CHECKOUT_PROFILE`

Retrieves a checkout profile from Shopify using its unique ID. Use when you need to query checkout profile details including name, publication status, and timestamps.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The ID of the checkout profile in GID format (e.g., 'gid://shopify/CheckoutProfile/691503298'). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get checkouts count

**Slug:** `SHOPIFY_GET_CHECKOUTS_COUNT`

Retrieves a count of abandoned checkouts from the past 90 days. Use when you need to know how many checkouts are abandoned, optionally filtered by date ranges or status.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `status` | string ("open" | "closed") | No | Count checkouts with a given status. Default is 'open' if not specified |
| `since_id` | integer | No | Restrict results to after the specified ID |
| `created_at_max` | string | No | Count checkouts created before the specified date in ISO 8601 format |
| `created_at_min` | string | No | Count checkouts created after the specified date in ISO 8601 format |
| `updated_at_max` | string | No | Count checkouts last updated before the specified date in ISO 8601 format |
| `updated_at_min` | string | No | Count checkouts last updated after the specified date in ISO 8601 format |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get collect by ID

**Slug:** `SHOPIFY_GET_COLLECT_BY_ID`

Retrieves a specific collect by its ID. Use when you need to get details about a specific product-collection relationship.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fields` | string | No | Comma-separated list of fields to retrieve (e.g., 'id,collection_id,product_id'). If omitted, all fields are returned. |
| `collect_id` | string | Yes | The unique identifier for the collect resource. A collect represents the relationship between a product and a custom collection. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get collection by ID

**Slug:** `SHOPIFY_GET_COLLECTION_BY_ID`

Retrieves a specific Shopify collection by its `collection_id`, optionally filtering returned data to specified `fields`.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fields` | string | No | Comma-separated list of fields to retrieve. Note: The Shopify collections endpoint may not fully support field filtering and might return all fields regardless of this parameter. E.g., 'id,title,handle'. |
| `collection_id` | string | Yes | The unique numeric identifier of the Shopify collection to retrieve. Must be a numeric ID, not a GraphQL GID. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get collection by identifier

**Slug:** `SHOPIFY_GET_COLLECTION_BY_IDENTIFIER`

Query a collection by identifier (ID or handle) using the Shopify GraphQL Admin API. Use when you need to fetch collection details by either its global ID or unique handle.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `identifier` | object | Yes | The identifier used to fetch the collection. Must provide either id or handle field. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get collects

**Slug:** `SHOPIFY_GET_COLLECTS`

Retrieves a list of collects from a Shopify store, where a collect links a product to a custom collection. Returns only collect mapping records (collect_id, collection_id, product_id, position, etc.), not full product details — use SHOPIFY_GET_PRODUCTS_IN_COLLECTION if product details are needed.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of collects to retrieve (1-250). |
| `fields` | string | No | Comma-separated list of fields to retrieve (e.g., `id,collection_id,product_id`); if unspecified, all fields are returned. |
| `since_id` | integer | No | Retrieve only collects created after this ID, for pagination. |
| `product_id` | integer | No | Filter collects by product ID to retrieve only collections that contain a specific product. |
| `collection_id` | integer | No | Filter collects by custom collection ID to retrieve only products linked to a specific collection. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get collects count

**Slug:** `SHOPIFY_GET_COLLECTS_COUNT`

Retrieves a count of collects (product-collection relationships). Use when you need to know the total number of collects, optionally filtered by collection_id or product_id.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `product_id` | string | No | Filter counts to a specific product. Returns only collects for this product. |
| `collection_id` | string | No | Filter counts to a specific custom collection. Returns only collects belonging to this collection. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get count of comments

**Slug:** `SHOPIFY_GET_COMMENTS_COUNT`

Retrieves a count of comments. Use when you need to know how many comments exist, optionally filtered by article, blog, status, or date ranges.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `status` | string ("pending" | "published" | "unapproved") | No | Filter results by their status. Options: pending, published, unapproved. |
| `blog_id` | integer | No | Identifier for the blog containing articles to count comments from. |
| `article_id` | integer | No | Identifier for the specific article whose comments to count. |
| `created_at_max` | string | No | Count comments created before this date in ISO 8601 format. |
| `created_at_min` | string | No | Count comments created after this date in ISO 8601 format. |
| `updated_at_max` | string | No | Count comments last updated before this date in ISO 8601 format. |
| `updated_at_min` | string | No | Count comments last updated after this date in ISO 8601 format. |
| `published_at_max` | string | No | Count comments published before this date in ISO 8601 format. |
| `published_at_min` | string | No | Count comments published after this date in ISO 8601 format. |
| `published_status` | string ("published" | "unpublished" | "any") | No | Filter by published status. Default: any. Options: published, unpublished, any. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get consent policy

**Slug:** `SHOPIFY_GET_CONSENT_POLICY`

Query consent policies for privacy compliance requirements. Use when you need to retrieve customer consent requirements for specific regions or countries (GDPR, CCPA, etc.).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | No | Retrieve a specific consent policy by its Shopify GraphQL ID. Use this to fetch details for a single policy. |
| `region_code` | string | No | Filter by ISO 3166 subdivision code without separators. Returns policies applicable to the specified region. |
| `country_code` | string | No | Filter by specific country using ISO 3166 two-letter country code (e.g., 'US', 'CA', 'GB'). Returns policies applicable to the specified country. |
| `consent_required` | boolean | No | Filter policies by whether consent is required or not required. If true, only returns policies requiring consent; if false, returns policies not requiring consent. |
| `data_sale_opt_out_required` | boolean | No | Filter policies by whether data sale opt-out is required. If true, only returns policies with data sale opt-out requirements; if false, returns policies without this requirement. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Countries

**Slug:** `SHOPIFY_GET_COUNTRIES`

Retrieve a list of countries configured in the Shopify store with tax rates and provinces. Use when you need to get countries and their tax configuration for the store.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fields` | string | No | Show only certain fields, specified by a comma-separated list of field names (e.g., 'id,name,code'). |
| `since_id` | string | No | Restrict results to countries after the specified ID. Used for pagination. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get countries count

**Slug:** `SHOPIFY_GET_COUNTRIES_COUNT`

Retrieves the count of countries configured in a Shopify store. Use when you need to determine how many countries are available in the store's tax and shipping settings. **DEPRECATION WARNING**: This endpoint is deprecated as of API version 2024-07. Consider using the GraphQL Admin API's 'CountriesInShippingZones' object as an alternative. This REST endpoint will continue to work but may be removed in future API versions.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get provinces count for country

**Slug:** `SHOPIFY_GET_COUNTRIES_PARAM_COUNTRY_ID_PROVINCES_COUNT`

Retrieves a count of provinces for a country. Use when you need to determine how many provinces or states are configured for a specific country in Shopify.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `country_id` | string | Yes | The unique identifier for the country in Shopify. Used to retrieve the province count for this specific country. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Province for Country

**Slug:** `SHOPIFY_GET_COUNTRIES_PARAM_COUNTRY_ID_PROVINCES_PARAM_PROVI`

Get Province for Country

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fields` | string | No | Restrict response to specified fields (comma-separated list of field names). |
| `country_id` | string | Yes | The unique identifier for the country containing the province. |
| `province_id` | string | Yes | The unique identifier for the specific province to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get country

**Slug:** `SHOPIFY_GET_COUNTRY`

Retrieve a specific country by its ID from Shopify. Use when you need to get tax information, country details, and province-level tax rates for a particular country.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fields` | string | No | Show only certain fields, specified by a comma-separated list of field names (e.g., 'id,name,code'). |
| `country_id` | string | Yes | The unique identifier for the country to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get provinces for country

**Slug:** `SHOPIFY_GET_COUNTRY_PROVINCES`

Retrieve a list of provinces for a specified country. Use when you need to get province information, tax rates, and shipping zones for a specific country.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fields` | string | No | Comma-separated list of fields to include in the response (e.g., 'id,code,name'). |
| `since_id` | integer | No | Restrict results to provinces after the specified ID. |
| `country_id` | string | Yes | The unique identifier for the country whose provinces are being retrieved. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Currencies

**Slug:** `SHOPIFY_GET_CURRENCIES`

Retrieve a list of currencies enabled on a Shopify store. This action fetches all currencies that the merchant has enabled for multi-currency transactions through Shopify Payments. Each currency includes its ISO 4217 code, the timestamp when its conversion rate was last updated, and its enabled status. Use this when you need to: - Check which currencies are available for customer transactions - Verify currency configurations for the shop - Get conversion rate update timestamps - Determine multi-currency support capabilities Note: This is a read-only endpoint that requires no parameters and returns all enabled currencies for the authenticated shop.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get custom collection by ID

**Slug:** `SHOPIFY_GET_CUSTOM_COLLECTION_BY_ID`

Retrieve a single custom collection by its unique ID from Shopify. Use when you need to fetch detailed information about a specific custom collection.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fields` | string | No | Comma-separated list of specific fields to return in the response (e.g., 'id,title,handle'). If omitted, all fields are returned. |
| `custom_collection_id` | string | Yes | The unique identifier of the custom collection to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get custom collections

**Slug:** `SHOPIFY_GET_CUSTOM_COLLECTIONS`

Retrieves a list of custom collections from a Shopify store. Supports filtering by IDs, handle, title, product ID, publication status, and date ranges (published/updated). Use the fields parameter to retrieve only specific properties, and limit/since_id for pagination. Combining multiple filters (handle, ids, product_id) simultaneously may return empty sets; use broad filters first. Newly created collections may not appear immediately; use GetCollectionById to verify a specific collection shortly after creation.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ids` | string | No | Show only collections specified by a comma-separated list of IDs. |
| `limit` | integer | No | The maximum number of custom collections to return (between 1 and 250, default: 50). |
| `title` | string | No | Show custom collections with a given title. |
| `fields` | string | No | Show only certain fields, specified by a comma-separated list of field names. |
| `handle` | string | No | Filter results by the custom collection's unique, human-readable string identifier (e.g., 'summer-specials'). |
| `since_id` | integer | No | Restrict results to after the specified ID (for pagination). |
| `product_id` | integer | No | Show custom collections that include a given product ID. |
| `updated_at_max` | string | No | Show custom collections last updated before this date (format: 2014-04-25T16:15:47-04:00). |
| `updated_at_min` | string | No | Show custom collections last updated after this date (format: 2014-04-25T16:15:47-04:00). |
| `published_at_max` | string | No | Show custom collections published before this date (format: 2014-04-25T16:15:47-04:00). |
| `published_at_min` | string | No | Show custom collections published after this date (format: 2014-04-25T16:15:47-04:00). |
| `published_status` | string | No | Show custom collections with a given published status. Valid values: published, unpublished, any (default: any). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get custom collections count

**Slug:** `SHOPIFY_GET_CUSTOM_COLLECTIONS_COUNT`

Retrieves the total count of custom collections in a Shopify store with optional filters. Use this action to get the number of custom collections, optionally filtered by: - Product ID (collections containing a specific product) - Publication date range (when collections were published) - Publication status (published, unpublished, or any) - Title (exact title match) - Update date range (when collections were last modified) Returns a simple count integer without collection details. For full collection data, use get collection list actions.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `title` | string | No | Count only custom collections with this exact title. |
| `product_id` | string | No | Count only custom collections that include this specific product ID. |
| `updated_at_max` | string | No | Count only custom collections last updated before this date (ISO 8601 format, e.g., 2024-04-25T16:15:47-04:00). |
| `updated_at_min` | string | No | Count only custom collections last updated after this date (ISO 8601 format, e.g., 2024-04-25T16:15:47-04:00). |
| `published_at_max` | string | No | Count only custom collections published before this date (ISO 8601 format, e.g., 2024-04-25T16:15:47-04:00). |
| `published_at_min` | string | No | Count only custom collections published after this date (ISO 8601 format, e.g., 2024-04-25T16:15:47-04:00). |
| `published_status` | string ("published" | "unpublished" | "any") | No | Filter collections by publication status: 'published' (published only), 'unpublished' (unpublished only), or 'any' (both). Defaults to 'any' if not specified. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve a single customer

**Slug:** `SHOPIFY_GET_CUSTOMER`

Retrieve a single customer by their unique identifier. Use when you need to fetch detailed information about a specific customer.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fields` | string | No | Comma-separated list of fields to include in the response. Allows optimization by limiting the response payload to only necessary fields. |
| `customer_id` | string | Yes | The unique identifier for the customer. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Customer Address

**Slug:** `SHOPIFY_GET_CUSTOMER_ADDRESS`

Retrieve details of a single customer address from Shopify. Use when you need to get complete information about a specific address for a customer, including address lines, city, province, country, postal code, and phone number.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `address_id` | string | Yes | The unique identifier for the customer address in Shopify. |
| `customer_id` | string | Yes | The unique identifier for the customer in Shopify. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Customer Addresses

**Slug:** `SHOPIFY_GET_CUSTOMER_ADDRESSES`

Retrieves all addresses associated with a specific customer. Returns complete address details including street address, city, province/state, country, postal code, and contact information. Each address includes a unique ID and indicates if it's the customer's default address. Important: This endpoint requires 'Protected Customer Data Access' approval from Shopify. Without this approval, requests will fail with a 403 error. See https://shopify.dev/docs/apps/launch/protected-customer-data for details. Use this action when you need to: (1) View all addresses for a customer, (2) Check a customer's default address, (3) Retrieve address details before updating or deleting.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of addresses to return in the response. If not specified, all addresses are returned. Pagination is handled via Link headers in the response when using this parameter. |
| `customer_id` | string | Yes | The unique numeric identifier for the customer in Shopify. Must be provided as a string. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get customer orders

**Slug:** `SHOPIFY_GET_CUSTOMER_ORDERS`

Retrieves all orders for a specific, existing customer in Shopify using their unique customer ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of orders to return. Accepted values are 1 to 250. Default is 50. |
| `status` | string | No | Filter orders by status. Valid values: open, closed, cancelled, any. Default is open. |
| `since_id` | integer | No | Return only orders after the specified ID. Use for cursor-based pagination through large result sets. |
| `page_info` | string | No | A cursor value for cursor-based pagination. Use the page_info value from the Link header of a previous response to fetch the next page of results. |
| `customer_id` | string | Yes | Unique identifier for the customer whose orders are to be retrieved. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get customers count

**Slug:** `SHOPIFY_GET_CUSTOMERS_COUNT`

Retrieves a count of all customers. Use when you need to know the total number of customers, optionally filtered by creation or update dates.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `created_at_max` | string | No | Show customers created before a specified date. Format: ISO 8601 datetime string (e.g., '2024-12-31T23:59:59-00:00'). |
| `created_at_min` | string | No | Show customers created after a specified date. Format: ISO 8601 datetime string (e.g., '2024-01-01T00:00:00-00:00'). |
| `updated_at_max` | string | No | Show customers last updated before a specified date. Format: ISO 8601 datetime string. |
| `updated_at_min` | string | No | Show customers last updated after a specified date. Format: ISO 8601 datetime string. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Search Customers

**Slug:** `SHOPIFY_GET_CUSTOMERS_SEARCH`

Search for customers matching a supplied query. Use when you need to find customers based on specific criteria like email, name, location, order count, or spending.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of results to return per page. Must be between 1 and 250. Defaults to 50. |
| `order` | string | No | Sort order for results. Supported fields: 'last_order_date', 'orders_count', 'updated_at', 'name', 'location', 'id'. Format: 'field_name ASC' or 'field_name DESC'. Note: Many other fields including 'created_at' are not supported for sorting. If not specified or if an unsupported field is used, results are returned in default order. |
| `query` | string | Yes | Search query using Shopify search syntax to filter customers. Supports fields like email, first_name, last_name, orders_count, total_spent, city, country, customer_tag, and more. Use wildcards (*) for broad matches, logical operators (AND, OR), and comparisons (>, <, >=, <=). Example: 'email:customer@example.com', 'first_name:John AND country:US', 'orders_count:>5'. |
| `fields` | string | No | Comma-separated list of fields to include in response. If not specified, all fields are returned. Example: 'id,email,first_name,last_name,orders_count'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Discount Code

**Slug:** `SHOPIFY_GET_DISCOUNT_CODE`

Retrieves a single discount code for a price rule. Use when you need to get details about a specific discount code including its usage count and timestamps.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `price_rule_id` | string | Yes | The ID of the price rule that the discount code belongs to. |
| `discount_code_id` | string | Yes | The ID of the discount code to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve Discount Code Creation Job

**Slug:** `SHOPIFY_GET_DISCOUNT_CODE_BATCH_JOB`

Retrieves the status and progress of an asynchronous batch discount code creation job for a specific price rule. Use this to monitor a job that creates up to 100 discount codes at once. Check the 'status' field ('queued', 'running', or 'completed') and 'imported_count'/'failed_count' to track progress. The job is created via POST /price_rules/{price_rule_id}/batch and this endpoint lets you poll for its completion.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `batch_id` | integer | Yes | The ID of the discount code creation job to retrieve. Obtain this from the response when creating a batch discount code creation job via POST /price_rules/{price_rule_id}/batch. |
| `price_rule_id` | integer | Yes | The ID of the price rule associated with the discount code creation job. Obtain this from creating or listing price rules. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get discount codes count

**Slug:** `SHOPIFY_GET_DISCOUNT_CODES_COUNT`

Retrieves a count of discount codes for a shop. Use when you need to know how many discount codes exist, optionally filtered by usage statistics.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `times_used` | integer | No | Count discount codes by exact number of times used. Returns only codes used this many times. |
| `times_used_max` | integer | No | Count discount codes with usage less than or equal to this value. Use to find infrequently used codes. |
| `times_used_min` | integer | No | Count discount codes with usage greater than or equal to this value. Use to find frequently used codes. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Discount Code Location

**Slug:** `SHOPIFY_GET_DISCOUNT_CODES_LOOKUP`

Look up a discount code by its code name and retrieve its resource location and IDs. Use this when you have a discount code (e.g., "SUMMER2024") and need to find its price_rule_id and discount_code_id for use with other API endpoints. This is faster than listing all discount codes when you know the specific code name. The API returns a 303 redirect with the location in the header.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `code` | string | Yes | The discount code name to look up. This parameter is case-insensitive and retrieves the location of the discount code resource. Maximum 100 characters. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Receive a single draft order

**Slug:** `SHOPIFY_GET_DRAFT_ORDER`

Retrieve detailed information for a specific draft order from a Shopify store. Use when you need to access a draft order's status, customer details, line items, pricing, or shipping information.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fields` | string | No | Comma-separated list of fields to include in the response (e.g., 'id,name,status'). |
| `draft_order_id` | string | Yes | The unique identifier for the draft order to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get event by ID

**Slug:** `SHOPIFY_GET_EVENT`

Retrieve a specific Shopify event by its ID. Events track actions performed on store resources like products, orders, collections, and articles. Use this to get detailed information about a specific event, including what action occurred, when it happened, and which resource was affected. Common use cases: auditing changes, tracking resource history, debugging workflows. Note: This endpoint contains protected customer data and may require explicit approval from Shopify for access. For development/testing, request protected customer data access in the Shopify Partner Dashboard.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fields` | string | No | Comma-separated list of fields to include in the response (e.g., 'id,subject_id,verb'). |
| `event_id` | string | Yes | The unique identifier of the event to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get events list (Deprecated)

**Slug:** `SHOPIFY_GET_EVENTS`

Retrieves a list of audit trail events from a Shopify store. Events represent actions performed on store resources (products, orders, collections, pages, articles, etc.). Each event captures what happened (verb: create/update/destroy), when it occurred, who performed it, and which resource was affected. This is useful for tracking store activity history, auditing changes, and building activity logs. Use cases: - Track when products were created, updated, or deleted - Monitor order fulfillment activities - Audit changes to collections and content - Build activity timelines for specific resources - Detect recent modifications to store resources Important: Events may not appear immediately (can take a few seconds after the action). Pagination is implemented via Link headers (rel="next", rel="previous") in the response, not via page parameters. Note: The REST Admin API is legacy as of October 2024. Consider GraphQL alternatives for new integrations.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `verb` | string | No | Filter events by action type (verb). Common values: 'create' (resource creation), 'update' (resource modification), 'destroy' (resource deletion). Other possible verbs include 'published', 'unpublished', 'placement', 'removal', 'confirmed', 'cancelled', 'pending', 'fulfilled', 'paid'. |
| `limit` | integer | No | The number of results to show. Maximum: 250, Default: 50. |
| `fields` | string | No | Show only certain fields, specified by a comma-separated list of field names. |
| `filter` | string | No | Filter events by resource type(s). Comma-separated list of resource names that generated the events. Valid values: Article, Blog, Collection, Comment, Order, Page, PriceRule, Product, ApiPermission. For example, 'Order,Product' shows only events from orders and products. |
| `since_id` | string | No | Show only results after the specified ID. |
| `created_at_max` | string | No | Show events created at or before this date and time. Format: ISO 8601 (e.g., 2014-04-25T16:15:47-04:00). |
| `created_at_min` | string | No | Show events created at or after this date and time. Format: ISO 8601 (e.g., 2014-04-25T16:15:47-04:00). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get fulfillments by fulfillment order

**Slug:** `SHOPIFY_GET_FULFILLMENT`

Retrieves all fulfillments (shipments) associated with a specific fulfillment order. A fulfillment order represents a group of line items that are to be fulfilled from a specific location. This action returns tracking information, shipment status, line item details, and delivery information for each fulfillment. Use this when you need to: - Check tracking numbers and carrier information for shipped items - Monitor shipment status (in_transit, delivered, etc.) - View which line items were included in specific shipments - Get fulfillment location and origin address details Prerequisites: You must first obtain a fulfillment_order_id by using the 'Get fulfillment orders for order' action with an order_id.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fulfillment_order_id` | string | Yes | The unique identifier of the fulfillment order. To obtain this ID, first use the 'Get fulfillment orders for order' action with an order_id. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Fulfillment Event

**Slug:** `SHOPIFY_GET_FULFILLMENT_EVENT`

Retrieves a specific fulfillment event by its ID, providing detailed shipment tracking information. Use this when you need to check the status and location of a specific tracking event for a fulfilled order. The event contains information such as status (in_transit, out_for_delivery, delivered), timestamps, geographic location data (city, province, country, coordinates), and carrier messages. Fulfillment events track the shipment progress from the carrier and are displayed on the customer's order status page. Each event represents a status update (e.g., package picked up, in transit, out for delivery, delivered). Note: This REST API endpoint is deprecated as of Shopify API 2024-10. Consider using the GET fulfillment events list endpoint or GraphQL API for new integrations. Requires valid order_id, fulfillment_id, and event_id - all three IDs must correspond to existing resources in the store.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `event_id` | string | Yes | The unique numeric identifier for the specific fulfillment event to retrieve. You can obtain this from the GET fulfillment events list action or from the event.id field when creating fulfillment events. |
| `order_id` | string | Yes | The unique numeric identifier for the order. You can obtain this from order creation/retrieval actions, or from the order.id field in order objects. |
| `fulfillment_id` | string | Yes | The unique numeric identifier for the fulfillment within the order. You can obtain this from the fulfillments array in an order object (e.g., order.fulfillments[0].id) or from fulfillment creation actions. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get fulfillment events

**Slug:** `SHOPIFY_GET_FULFILLMENT_EVENTS`

Retrieves tracking events for a specific fulfillment, showing shipment status updates (e.g., in_transit, out_for_delivery, delivered) with timestamps and location information. Use this when you need to check the tracking history or current delivery status of a fulfilled order. Note: Returns events only for fulfillments that have tracking information from carriers.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `order_id` | string | Yes | The unique numeric identifier for the order. You can obtain this from order creation/retrieval actions, or from the order.id field in order objects. |
| `fulfillment_id` | string | Yes | The unique numeric identifier for the fulfillment within the order. You can obtain this from the fulfillments array in an order object (e.g., order.fulfillments[0].id) or from fulfillment creation actions. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get fulfillment orders for order (Deprecated)

**Slug:** `SHOPIFY_GET_FULFILLMENT_ORDER`

Retrieve all fulfillment orders for a specific order. Use when you need to check fulfillment status, assigned locations, or line items for an order.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `order_id` | string | Yes | The unique identifier of the order whose fulfillment orders you want to retrieve. |
| `include_financial_summaries` | boolean | No | Include the financial summary data for each line item, if available. Defaults to false. |
| `include_order_reference_fields` | boolean | No | Indicates whether the order reference fields should be returned in the result. Defaults to false. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieves fulfillments by fulfillment order (Deprecated)

**Slug:** `SHOPIFY_GET_FULFILLMENT_ORDER_FULFILLMENTS`

Retrieves all fulfillments associated with a specific fulfillment order. Returns detailed shipment tracking information, delivery status, line items, and fulfillment metadata. Use this action when you need to check the status of completed or in-progress fulfillments for a fulfillment order.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fulfillment_order_id` | string | Yes | The unique identifier of the fulfillment order whose associated fulfillments should be retrieved. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get fulfillment order locations for move

**Slug:** `SHOPIFY_GET_FULFILLMENT_ORDER_LOCATIONS_FOR_MOVE`

Retrieve locations that a fulfillment order can potentially move to. Use when you need to identify which locations are available for transferring a specific fulfillment order. The resulting list is sorted alphabetically in ascending order by location name.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fulfillment_order_id` | string | Yes | The ID of the fulfillment order to query for potential move locations. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get fulfillment order locations for move (Deprecated)

**Slug:** `SHOPIFY_GET_FULFILLMENT_ORDER_MOVE_LOCATIONS`

Retrieve a list of locations that a fulfillment order can potentially move to. Use when you need to identify available destination locations for relocating a fulfillment order.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fulfillment_order_id` | string | Yes | The unique identifier of the fulfillment order to retrieve potential move locations for. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get fulfillment orders for order

**Slug:** `SHOPIFY_GET_FULFILLMENT_ORDERS_FOR_ORDER`

Retrieves a list of fulfillment orders for a specific order. Use when you need to get fulfillment order details including line items, delivery method, assigned location, and fulfillment status for a given order.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `order_id` | string | Yes | The ID of the order for which to retrieve fulfillment orders. |
| `include_financial_summaries` | boolean | No | Include financial summary data for each line item if available. Defaults to false if not specified. |
| `include_order_reference_fields` | boolean | No | Return order reference fields in the result. Defaults to false if not specified. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Fulfillment Services

**Slug:** `SHOPIFY_GET_FULFILLMENT_SERVICES`

Retrieve a list of fulfillment services available on the Shopify store. Use when you need to get information about third-party warehouses that prepare and ship orders on behalf of the store owner.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `scope` | string ("current_client" | "all") | No | Specifies which fulfillment services to retrieve. 'current_client' returns services created by the requesting app (default). 'all' returns all store services. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Gift Card By ID

**Slug:** `SHOPIFY_GET_GIFT_CARD_BY_ID`

Retrieves detailed information about a specific gift card by its ID. Returns the gift card's balance, status, creation date, and other metadata. Note: The full gift card code is never returned by this endpoint - only the last 4 characters are available for security reasons. The full code is only visible at creation time. Requires: read_gift_cards scope (Shopify Plus only, requires Shopify Support approval).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `gift_card_id` | string | Yes | The unique identifier of the gift card to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieves a list of gift cards

**Slug:** `SHOPIFY_GET_GIFT_CARDS`

Retrieve a list of gift cards from Shopify. Use when you need to fetch gift cards with optional filtering by status and pagination support.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of results to return. Must be ≤250, default is 50. |
| `fields` | string | No | Show only certain fields, specified by a comma-separated list of field names (e.g., 'id,balance,currency'). |
| `status` | string ("enabled" | "disabled") | No | Filter gift cards by status. Accepted values: "enabled" or "disabled". |
| `since_id` | string | No | Restrict results to after the specified ID (for pagination). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieves a count of gift cards

**Slug:** `SHOPIFY_GET_GIFT_CARDS_COUNT`

Retrieves the total count of gift cards in the store. Use when you need to know how many gift cards exist, optionally filtered by enabled or disabled status.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `status` | string ("enabled" | "disabled") | No | Filter by gift card status. Use 'enabled' to count only enabled gift cards, 'disabled' to count only disabled gift cards. If omitted, returns count of all gift cards regardless of status. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Inventory Item

**Slug:** `SHOPIFY_GET_INVENTORY_ITEM`

Retrieves a single inventory item by ID. Use when you need to get detailed information about an inventory item including SKU, cost, tracking status, and shipping requirements.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `inventory_item_id` | string | Yes | The unique identifier of the inventory item to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Inventory Items

**Slug:** `SHOPIFY_GET_INVENTORY_ITEMS`

Retrieves a list of inventory items by specified IDs. Use when you need to get inventory item details like SKU, cost, shipping requirements, and tracking status. Note: As of version 2019-10, pagination is implemented using links provided in response headers.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ids` | string | Yes | Comma-separated list of inventory item IDs to retrieve. Maximum 100 IDs per request. Required parameter. |
| `limit` | integer | No | Maximum number of results to return per page. Range: 1-250, Default: 50. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Inventory Levels

**Slug:** `SHOPIFY_GET_INVENTORY_LEVELS`

Retrieves a list of inventory levels for specified items and locations. Use when you need to check inventory quantities at specific locations. At least one of inventory_item_ids or location_ids must be provided as a filter parameter.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of results to return per page. Range: 1-250, Default: 50. |
| `location_ids` | string | No | Comma-separated list of location IDs to filter by. Maximum 50 IDs per request. At least one of inventory_item_ids or location_ids must be provided. |
| `updated_at_min` | string | No | Show inventory levels updated at or after this date. ISO 8601 datetime format. |
| `inventory_item_ids` | string | No | Comma-separated list of inventory item IDs to filter by. Maximum 50 IDs per request. At least one of inventory_item_ids or location_ids must be provided. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Inventory Levels For Location

**Slug:** `SHOPIFY_GET_INVENTORY_LEVELS_FOR_LOCATION`

Retrieves a list of inventory levels for a specific location. Use when you need to check inventory quantities at a particular location. This endpoint implements cursor-based pagination via Link headers in the response.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of results to return per page. Range: 1-250, Default: 50. |
| `page_info` | string | No | Used for cursor-based pagination. When using page_info, only limit parameter can be combined with it. |
| `location_id` | string | Yes | The ID of the location to retrieve inventory levels for. |
| `updated_at_min` | string | No | Show inventory levels updated at or after this date. ISO 8601 datetime format. |
| `inventory_item_ids` | string | No | Comma-separated list of inventory item IDs to filter results. Maximum 50 items. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get location

**Slug:** `SHOPIFY_GET_LOCATION`

Retrieve a single location by its ID. Use when you need to get details about a specific physical or virtual place where inventory is stocked and orders are fulfilled.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `location_id` | string | Yes | The unique identifier for the location to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get locations count

**Slug:** `SHOPIFY_GET_LOCATIONS_COUNT`

Query the count of locations in a Shopify store using the GraphQL API. Use when you need to get the total number of locations, optionally filtered by search criteria.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve a single marketing event

**Slug:** `SHOPIFY_GET_MARKETING_EVENT`

Retrieves detailed information about a specific marketing event by its ID. Use this action to: - Get full details of a marketing campaign including UTM parameters, budget, and timeline - Check the status and configuration of a specific marketing event - Access information about resources (products, collections) being marketed - Retrieve tracking URLs (manage_url, preview_url) for the event Returns comprehensive event data including event type, marketing channel, budget details, UTM parameters, and associated resources.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `marketing_event_id` | string | Yes | The unique numeric identifier for the marketing event. You can obtain this ID from the list of marketing events or from the response when creating a marketing event. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get marketing events count

**Slug:** `SHOPIFY_GET_MARKETING_EVENTS_COUNT`

Retrieves a count of all marketing events in the store. Use when you need to know the total number of marketing events.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get blog metafields

**Slug:** `SHOPIFY_GET_METAFIELD`

Retrieve a list of metafields from a blog resource. Use when you need to fetch metafields attached to a specific Shopify blog.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `key` | string | No | Filter metafields by key. The key is a unique identifier within the namespace (3-64 characters). |
| `limit` | integer | No | Maximum number of results per page. Must be ≤ 250, defaults to 50. |
| `fields` | string | No | Comma-separated list of specific fields to return in the response (e.g., 'id,namespace,key,value'). |
| `blog_id` | string | Yes | The unique identifier of the blog resource to retrieve metafields for. |
| `since_id` | string | No | Show metafields created after the specified ID. Used for pagination. |
| `namespace` | string | No | Filter metafields by namespace. The namespace is a container for grouping metafields (3-255 characters). |
| `created_at_max` | string | No | Show metafields created before this date. Format: ISO 8601 (e.g., 2022-02-25T16:15:47-04:00). |
| `created_at_min` | string | No | Show metafields created after this date. Format: ISO 8601 (e.g., 2022-02-25T16:15:47-04:00). |
| `metafield_type` | string | No | Filter metafields by data type (e.g., 'single_line_text_field', 'number_integer', 'json'). |
| `updated_at_max` | string | No | Show metafields last updated before this date. Format: ISO 8601 (e.g., 2022-02-25T16:15:47-04:00). |
| `updated_at_min` | string | No | Show metafields last updated after this date. Format: ISO 8601 (e.g., 2022-02-25T16:15:47-04:00). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get metafield by ID

**Slug:** `SHOPIFY_GET_METAFIELD_BY_ID`

Retrieve a single metafield from a resource by its ID. Use when you need to fetch metafield details without knowing the parent resource.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fields` | string | No | Comma-separated list of field names to retrieve only specific fields instead of the complete metafield object. Example: 'id,key,value,namespace' |
| `metafield_id` | string | Yes | The unique identifier of the metafield to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get metafields

**Slug:** `SHOPIFY_GET_METAFIELDS`

Retrieve a list of metafields. Use when you need to fetch metafields across resources or for specific resources by providing owner_id and owner_resource filters.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `key` | string | No | Filter metafields by key. The key is a unique identifier within the namespace (3-64 characters). Only used if namespace is also provided. |
| `limit` | integer | No | Maximum number of results per page. Must be ≤ 250, defaults to 50. |
| `fields` | string | No | Comma-separated list of specific fields to return in the response (e.g., 'id,namespace,key,value'). |
| `since_id` | integer | No | Show metafields created after the specified ID. Used for pagination. |
| `namespace` | string | No | Filter metafields by namespace. The namespace is a container for grouping metafields (3-255 characters). |
| `created_at_max` | string | No | Show metafields created before this date. Format: ISO 8601 (e.g., 2022-02-25T16:15:47-04:00). |
| `created_at_min` | string | No | Show metafields created after this date. Format: ISO 8601 (e.g., 2022-02-25T16:15:47-04:00). |
| `updated_at_max` | string | No | Show metafields last updated before this date. Format: ISO 8601 (e.g., 2022-02-25T16:15:47-04:00). |
| `updated_at_min` | string | No | Show metafields last updated after this date. Format: ISO 8601 (e.g., 2022-02-25T16:15:47-04:00). |
| `metafield_owner_id` | integer | No | Filter metafields by the unique ID of the resource that owns them. |
| `metafield_owner_resource` | string | No | Filter metafields by the type of resource that owns them (e.g., 'product', 'collection', 'customer', 'product_image'). Only used if metafield_owner_id is also provided. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get shop metafields count (Deprecated)

**Slug:** `SHOPIFY_GET_METAFIELDS_COUNT`

Retrieves the count of shop-level metafields only. This action returns how many metafields are directly attached to the shop itself, not metafields on other resources like products, customers, or orders. Use this when you need a quick count without fetching the full list of shop metafields. Note: To count metafields on specific resources (products, customers, etc.), use the SHOPIFY_GET_RESOURCE_METAFIELDS_COUNT action instead.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get order

**Slug:** `SHOPIFY_GET_ORDER`

Retrieve a specific order using its unique identifier. Returns detailed order information including line items, customer data, addresses, financial status, fulfillment status, and more.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fields` | string | No | Comma-separated list of specific fields to return (e.g., 'id,line_items,name,total_price'). When omitted, all order fields are returned. |
| `order_id` | string | Yes | The unique identifier of the order to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve order fulfillments

**Slug:** `SHOPIFY_GET_ORDER_FULFILLMENTS`

Retrieve fulfillments associated with a Shopify order. Use when you need to get delivery tracking information, shipment status, or fulfillment details for a specific order.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Limit the amount of results (default: 50, max: 250). |
| `fields` | string | No | Comma-separated list of fields to include in the response. |
| `order_id` | string | Yes | The unique numeric identifier for the order. |
| `since_id` | integer | No | Restrict results to after the specified fulfillment ID. |
| `created_at_max` | string | No | Show fulfillments created before this date (ISO 8601 format). |
| `created_at_min` | string | No | Show fulfillments created after this date (ISO 8601 format: 2014-04-25T16:15:47-04:00). |
| `updated_at_max` | string | No | Show fulfillments last updated before this date (ISO 8601 format). |
| `updated_at_min` | string | No | Show fulfillments last updated after this date (ISO 8601 format: 2014-04-25T16:15:47-04:00). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get order list (Deprecated)

**Slug:** `SHOPIFY_GET_ORDER_LIST`

Retrieves a list of orders from Shopify with optional filters and pagination.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ids` | string | No | Comma-separated list of order IDs to return. You may provide a list of integers; it will be converted to a comma-separated string. |
| `name` | string | No | Filter orders by name (for example, #1001). The '#' prefix is required (e.g., '#1001'); omitting it returns no results. |
| `limit` | integer | No | Maximum number of results per page (default 50, maximum 250). |
| `fields` | string | No | Comma-separated list of fields to include in the response. You may provide a list; it will be converted to a comma-separated string. |
| `status` | string | No | Filter by order status. Valid values: open, closed, cancelled, any. |
| `since_id` | string | No | Return orders with IDs greater than this ID. |
| `page_info` | string | No | Cursor for pagination. When using page_info for cursor pagination, only limit may accompany it. |
| `created_at_max` | string | No | Show orders created at or before this ISO 8601 timestamp (for example, 2024-12-31T23:59:59Z). |
| `created_at_min` | string | No | Show orders created at or after this ISO 8601 timestamp (for example, 2024-01-01T00:00:00Z). |
| `updated_at_max` | string | No | Show orders last updated at or before this ISO 8601 timestamp. |
| `updated_at_min` | string | No | Show orders last updated at or after this ISO 8601 timestamp. |
| `financial_status` | string | No | Filter by financial status. Valid values: authorized, pending, paid, partially_paid, refunded, voided, partially_refunded, any, unpaid. |
| `processed_at_max` | string | No | Show orders imported at or before this ISO 8601 timestamp. |
| `processed_at_min` | string | No | Show orders imported at or after this ISO 8601 timestamp. |
| `attribution_app_id` | string | No | Show orders attributed to a specific app ID. Use 'current' to show orders for the calling app. |
| `fulfillment_status` | string | No | Filter by fulfillment status. Valid values: shipped, partial, unshipped, any, unfulfilled. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get specific refund for order

**Slug:** `SHOPIFY_GET_ORDER_REFUND_BY_ID`

Retrieves a specific refund by refund ID for an order. Use this action when you need to: - Get detailed information about a particular refund - Review specific refund transactions and payment details - Check refunded line items, shipping costs, and adjustments - Verify duty and additional fee refunds Key Features: - Returns comprehensive refund data including line items and transactions - Supports field filtering to retrieve only specific data - Optional in_shop_currency parameter for currency conversion - Includes refund_shipping_lines for refunded shipping costs (added in API version 2024-10) Important Notes: - REST Admin API is legacy as of Oct 2024; consider GraphQL API for new integrations - Requires 'read_orders' access scope for authentication - Access to protected customer data may require additional Shopify app approval

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fields` | string | No | Comma-separated list of specific field names to return in the refund object. |
| `order_id` | string | Yes | The unique identifier of the order to retrieve the refund from. |
| `refund_id` | string | Yes | The unique identifier of the refund to retrieve. |
| `in_shop_currency` | boolean | No | When set to true, displays amounts in the shop currency for the underlying transactions. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get refunds for order

**Slug:** `SHOPIFY_GET_ORDER_REFUNDS`

Retrieves a list of all refunds for a specific order. Use this action when you need to: - Review refund history and details for an order - Check refunded amounts, line items, and shipping costs - Verify payment transactions associated with refunds - Track order adjustments, duties, and additional fees refunded Key Features: - Returns all refunds with detailed line items, transactions, and adjustments - Supports field filtering to retrieve only specific data - Optional in_shop_currency parameter for currency conversion - Configurable result limit (1-250, default 50) Important Notes: - This endpoint implements pagination via Link headers (not page parameters) - As of API version 2024-10, refunded shipping costs are accessed via refund_shipping_lines - REST Admin API is legacy as of Oct 2024; consider GraphQL API for new integrations - Requires 'read_orders' access scope for authentication - Access to protected customer data may require additional Shopify app approval

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of results to retrieve per page (default 50, maximum 250). |
| `fields` | string | No | Comma-separated list of specific field names to return in the refund objects. |
| `order_id` | string | Yes | The unique identifier of the order to retrieve refunds for. |
| `in_shop_currency` | boolean | No | When set to true, displays amounts in the shop currency for the underlying transactions. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Order Risks (Deprecated)

**Slug:** `SHOPIFY_GET_ORDER_RISK`

Retrieves all fraud risk assessments for a specific order. Returns a list of risk assessments indicating potential fraud. Each risk includes a recommendation (cancel/investigate/accept) and a fraud likelihood score. Only risks with display=true are factored into Shopify's overall order risk calculation. Note: Returns an empty array if the app lacks permission to access order risks (requires read_orders or write_orders scope with merchant approval for protected customer data).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `order_id` | string | Yes | The unique numeric identifier of the order. Retrieve this from order creation or list operations. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get order risks

**Slug:** `SHOPIFY_GET_ORDER_RISKS`

Retrieves all fraud risk assessments for a specific order. Returns a list of risk assessments with recommendations (cancel/investigate/accept) and fraud likelihood scores. Use this when reviewing fraud detection findings for an order. Returns an empty risks array if: - The order has no risk assessments - Authentication fails (401) - App lacks permission to access order risks (403) Raises an error only if the order doesn't exist (404) or other server errors occur. Note: This REST API endpoint is deprecated as of version 2025-10; GraphQL Admin API's OrderRiskAssessment is recommended for new applications.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `order_id` | string | Yes | The unique numeric identifier of the order to retrieve risk assessments for. Accepts string representation of the order ID. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get order by id (Deprecated)

**Slug:** `SHOPIFY_GET_ORDERSBY_ID`

Retrieves a specific Shopify order by its unique ID, which must correspond to an existing order.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fields` | string | No | Comma-separated list of fields to include in the response (e.g., 'id,line_items'). |
| `order_id` | string | Yes | The unique identifier of the Shopify order to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get orders with filters

**Slug:** `SHOPIFY_GET_ORDERS_WITH_FILTERS`

Retrieves Shopify orders filtered by dates and other filters. Uses server-side filtering. Results are paginated; follow `page_info` cursors until exhausted to retrieve all matching orders — a single request returns at most `limit` orders (max 250) and omits the rest.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ids` | string | No | Comma-separated list of numeric order IDs to retrieve. |
| `name` | string | No | Filter by order name (e.g., #1001). The '#' prefix is required; omitting it may return no results. Multiple orders can share the same name value. |
| `limit` | integer | No | Maximum number of orders to return per page (1-250). Defaults to 50. |
| `fields` | string | No | Comma-separated list of order fields to include in the response. Reduces response payload size; recommended at scale to avoid rate limit exhaustion. |
| `status` | string | No | Filter by order status (open,closed,cancelled,any). Defaults to 'open'; set to 'any' for historical or cross-status lookups to avoid silently missing closed or cancelled orders. |
| `since_id` | integer | No | Restrict results to after the specified ID. |
| `page_info` | string | No | A cursor for use in pagination. When present, only limit (and fields where supported) should accompany this parameter. |
| `created_at_max` | string | No | Show orders created at or before this ISO 8601 timestamp. |
| `created_at_min` | string | No | Show orders created at or after this ISO 8601 timestamp. Timezone must match the shop's local timezone (use SHOPIFY_GET_SHOP_DETAILS) — do not assume UTC, to avoid missing edge-of-day orders. |
| `updated_at_max` | string | No | Show orders last updated at or before this ISO 8601 timestamp. |
| `updated_at_min` | string | No | Show orders last updated at or after this ISO 8601 timestamp. |
| `financial_status` | string | No | Filter by financial status (authorized,pending,paid,partially_paid,refunded,voided,partially_refunded,any,unpaid). |
| `processed_at_max` | string | No | Show orders imported/processed at or before this ISO 8601 timestamp. |
| `processed_at_min` | string | No | Show orders imported/processed at or after this ISO 8601 timestamp. |
| `attribution_app_id` | string | No | Filter to orders attributed to a given app ID; use 'current' to show orders for the calling app. |
| `fulfillment_status` | string | No | Filter by fulfillment status (shipped/fulfilled,partial,unshipped/null,any,unfulfilled). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get order transactions count

**Slug:** `SHOPIFY_GET_ORDER_TRANSACTIONS_COUNT`

Retrieve a count of an order's transactions in Shopify. Use when you need to know how many transactions (authorization, sale, capture, void, refund) are associated with a specific order without fetching the full transaction details.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `order_id` | string | Yes | The unique identifier for the order whose transaction count is needed. This must be a valid Shopify order ID. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get page by ID

**Slug:** `SHOPIFY_GET_PAGE_BY_ID`

Retrieve a single Shopify page by its unique ID. Use when you need to fetch detailed information about a specific page.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fields` | string | No | Comma-separated list of specific field names to return. Use this to limit the response to only the fields you need. |
| `page_id` | string | Yes | The unique numeric identifier for the page to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Policies

**Slug:** `SHOPIFY_GET_POLICIES`

Retrieve a list of the shop's policies. Use when you need to view configured shop policies such as refund policy, privacy policy, or terms of service.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Price Rule

**Slug:** `SHOPIFY_GET_PRICE_RULE`

Retrieves a single price rule by ID from Shopify. Returns discount configuration including type (percentage/fixed), value, target items, customer eligibility, and prerequisites. Note: The PriceRule REST API is deprecated as of October 2024; consider using GraphQL Admin API for new implementations.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `price_rule_id` | string | Yes | The unique identifier for the price rule to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Check Batch Listing Support for Price Rule

**Slug:** `SHOPIFY_GET_PRICE_RULE_BATCH_INFO`

Checks if batch listing is supported for a price rule and provides guidance on alternatives. **IMPORTANT: Shopify's API does not provide an endpoint to list all batches for a price rule.** This action returns structured information explaining the limitation and suggesting alternatives. The available batch endpoints in Shopify's API are: - POST /price_rules/{price_rule_id}/batch.json - Creates a batch discount code creation job - GET /price_rules/{price_rule_id}/batch/{batch_id}.json - Retrieves a specific batch job by ID - GET /price_rules/{price_rule_id}/batch/{batch_id}/discount_codes.json - Lists discount codes created by a batch To retrieve batch details, you must know the batch_id (returned when creating a batch). Shopify only allows one active batch creation job per shop at a time. Use action SHOPIFY_GET_PRICE_RULES_PARAM_PRICE_RULE_ID_BATCH_PARAM_BATCH_ID if you have the batch_id. Reference: https://shopify.dev/docs/api/admin-rest/latest/resources/discountcode

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `price_rule_id` | integer | Yes | The ID of the price rule to check batch support for. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Discount Codes for Price Rule

**Slug:** `SHOPIFY_GET_PRICE_RULE_DISCOUNT_CODES`

Retrieve a list of discount codes for a price rule. Use when you need to get all discount codes associated with a specific price rule. Note: As of version 2019-10, pagination is implemented via Link headers in the response.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `price_rule_id` | string | Yes | The ID of the price rule to retrieve discount codes for. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get product

**Slug:** `SHOPIFY_GET_PRODUCT`

Retrieves details for an existing Shopify product using its unique product ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `product_id` | string | Yes | The unique numeric identifier of the Shopify product to be retrieved (e.g., '8301757563074'). Note: Use the numeric ID, not the GraphQL GID format. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get product image

**Slug:** `SHOPIFY_GET_PRODUCT_IMAGE`

Retrieve a single product image by ID for a specific product. Use when you need to get details about a specific image associated with a product.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `image_id` | string | Yes | The unique numerical identifier of the image associated with the product. |
| `product_id` | string | Yes | The unique numerical identifier of the Shopify product. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Product Images (Deprecated)

**Slug:** `SHOPIFY_GET_PRODUCT_IMAGES`

Retrieves all images for a Shopify product, specified by its `product_id` which must correspond to an existing product.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fields` | string | No | A comma-separated list of fields to include in the response. Available fields include: id, product_id, position, created_at, updated_at, alt, width, height, src. |
| `since_id` | string | No | Restricts the results to product images created after the specified image ID. Useful for pagination. |
| `product_id` | string | Yes | The unique identifier of the Shopify product for which to retrieve images. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get product metafield

**Slug:** `SHOPIFY_GET_PRODUCT_METAFIELD`

Retrieves a specific metafield for a Shopify product using the product ID and metafield ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `product_id` | string | Yes | The unique identifier of the Shopify product. |
| `metafield_id` | string | Yes | The unique identifier of the metafield to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get product metafields

**Slug:** `SHOPIFY_GET_PRODUCT_METAFIELDS`

Retrieves all metafields for a specific Shopify product. Metafields are returned under `data.response_data.metafields`. Can be filtered by namespace and/or key; empty results are valid when no metafields match. Always fetch current metafield IDs via this tool rather than using cached values, as IDs can change after schema updates.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `key` | string | No | Filter metafields by key. If omitted, returns all metafields (or all within namespace if specified). Use both `namespace` and `key` together when targeting a specific metafield, since the same key can exist across multiple namespaces. |
| `namespace` | string | No | Filter metafields by namespace. If omitted, returns all metafields. |
| `product_id` | string | Yes | The unique identifier of the Shopify product to retrieve metafields for. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get products (Deprecated)

**Slug:** `SHOPIFY_GET_PRODUCTS`

Retrieves a list of products from a Shopify store. Results are paginated; for large catalogs, use SHOPIFY_GET_PRODUCTS_PAGINATED to iterate all pages, as this tool may return only a partial set. Product handles and SKUs must be unique — use this tool to check for existing products before creating new ones.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ids` | string | No | A comma-separated string of product IDs to retrieve. If this field is not provided (i.e., defaults to `None`), all products will be fetched. |
| `limit` | integer | No | Maximum number of products to return. Accepted values are 1 to 250. Default is 50. |
| `since_id` | integer | No | Return only products after the specified ID. Use for cursor-based pagination through large result sets. |
| `page_info` | string | No | A cursor value for cursor-based pagination. Use the page_info value from the Link header of a previous response to fetch the next page of results. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get products in collection (Deprecated)

**Slug:** `SHOPIFY_GET_PRODUCTS_IN_COLLECTION`

Retrieves products that belong to a specific Shopify collection. Returns detailed product information including variants, images, and options. Products are sorted according to the collection's configured sort order. Use this action when you need to: - List all products in a specific collection - Get product details for items within a collection - Display collection contents to users. For collection-product membership mappings without full product details, use SHOPIFY_GET_COLLECTS instead.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of products to retrieve per request. Must be between 1 and 250. Default is 50. |
| `collection_id` | string | Yes | The unique identifier for the Shopify collection. Can be obtained from the collection list endpoint or from the Shopify admin collection URL. Must be a numeric REST ID (e.g., 408267178229); GraphQL gid formats will fail validation. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get products (paginated)

**Slug:** `SHOPIFY_GET_PRODUCTS_PAGINATED`

List products with Shopify cursor-based pagination. Iterate until `next_page_info` is null; stopping early silently truncates the product list. Products are at `data.response_data.products`; the next cursor is at `data.next_page_info`.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Number of products per page. Defaults to 50; maximum 250. |
| `fields` | string | No | Comma-separated list of product fields to include in the response. |
| `page_info` | string | No | Cursor token for next or previous page. Use the token value from the Link header. The cursor is exposed at `data.next_page_info` in the response. Pass the value exactly as returned — any truncation or modification triggers a 400 error. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Receive a single product variant

**Slug:** `SHOPIFY_GET_PRODUCT_VARIANT`

Retrieves detailed information about a single product variant by its ID from Shopify. A product variant represents a specific version of a product (e.g., different sizes, colors, or materials). This action returns comprehensive details including pricing, inventory, weight, SKU, barcode, and shipping requirements. Use this when you need to: - Get current pricing and inventory levels for a specific variant - Check variant details like SKU, barcode, weight, or options (size, color, etc.) - Retrieve variant configuration (taxable, requires_shipping, fulfillment_service) - Fetch only specific fields using the optional 'fields' parameter to reduce response size Note: You must know the variant_id beforehand. Use list products or list variants actions to discover variant IDs.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fields` | string | No | A comma-separated list of fields to include in the response. Use this to retrieve only specific fields and reduce response size. |
| `variant_id` | string | Yes | The unique numeric identifier for the product variant to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get recurring application charges

**Slug:** `SHOPIFY_GET_RECURRING_APPLICATION_CHARGES`

Retrieve a list of recurring application charges for the app. Use when you need to view subscription charges, check billing status, or audit recurring payments.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fields` | string | No | A comma-separated list of fields to include in the response (e.g., 'id,name,price,status'). |
| `since_id` | integer | No | Restrict results to after the specified ID. Used for pagination. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve a single redirect (Deprecated)

**Slug:** `SHOPIFY_GET_REDIRECT`

Retrieve details of a specific URL redirect by its ID. Returns the redirect's path (source) and target (destination) configuration. Use this when you have a specific redirect ID and need its details; for finding redirects or getting multiple redirects, use the list redirects action instead.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fields` | string | No | Comma-separated list of fields to include in the response (e.g., 'id,path,target'). |
| `redirect_id` | string | Yes | The unique identifier of the redirect to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get redirect by ID

**Slug:** `SHOPIFY_GET_REDIRECT_BY_ID`

Retrieve a single redirect by its ID. Use when you need to get details about a specific URL redirect configuration in a Shopify store.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fields` | string | No | Comma-separated list of fields to include in the response (e.g., 'id,path,target'). |
| `redirect_id` | string | Yes | The unique identifier of the redirect to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get redirects

**Slug:** `SHOPIFY_GET_REDIRECTS`

Retrieve a list of URL redirects from a Shopify store. Use when you need to fetch URL redirect configurations, optionally filtered by path or target. Supports pagination via Link headers.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `path` | string | No | Filters results to show redirects with a specific path value (the old/original URL path). |
| `limit` | integer | No | Maximum number of results to return per page. Must be ≤ 250. Defaults to 50 if not specified. |
| `fields` | string | No | Comma-separated list of field names to include in the response. Only specified fields will be returned. |
| `target` | string | No | Filters results to show redirects with a specific target value (the new URL destination). |
| `since_id` | string | No | Restricts results to redirects created after the specified ID. Used for cursor-based pagination. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get redirects count

**Slug:** `SHOPIFY_GET_REDIRECTS_COUNT`

Retrieves a count of URL redirects in the store. Use when you need to know how many URL redirects are configured, optionally filtered by path or target.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `path` | string | No | Filter redirects by the original path. Only counts redirects with this specific path. |
| `target` | string | No | Filter redirects by the target URL. Only counts redirects pointing to this specific target. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve a specific refund (Deprecated)

**Slug:** `SHOPIFY_GET_REFUND`

Retrieves detailed information about a specific refund for an order. Use this action when you need complete refund details including refunded line items, transactions, order adjustments, duties, and shipping costs. Both order_id and refund_id are required. To list all refunds for an order, use the 'Retrieve refunds for order' action instead.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fields` | string | No | Comma-separated list of specific fields to include in the refund response. When omitted, all fields are returned. Useful for optimizing response size. |
| `order_id` | string | Yes | The unique identifier of the order containing the refund. You can obtain this from order retrieval or creation actions. |
| `refund_id` | string | Yes | The unique identifier of the specific refund to retrieve. You can obtain this from the list refunds for order action. |
| `in_shop_currency` | boolean | No | When true, transaction amounts are displayed in the shop's base currency instead of presentment currency. Default is false. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Script Tag

**Slug:** `SHOPIFY_GET_SCRIPTTAG`

Retrieves a single script tag by its ID. Use when you need to get details of a specific script tag configuration.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fields` | string | No | Comma-separated list of specific fields to include in the response. Use this to restrict the returned script tag to only the specified properties. |
| `script_tag_id` | string | Yes | The unique identifier for the script tag to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get segments count

**Slug:** `SHOPIFY_GET_SEGMENTS_COUNT`

Query the number of segments for a shop. Use when you need to know how many customer segments exist.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Shipping Zones

**Slug:** `SHOPIFY_GET_SHIPPING_ZONES`

Retrieve all configured shipping zones with countries, provinces, tax rates, and shipping rates. Use when you need to view or analyze shipping configuration.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fields` | string | No | A comma-separated list of field names to show only specific fields in the response. Example: 'id,name,countries' |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get shop billing address

**Slug:** `SHOPIFY_GET_SHOP_BILLING_ADDRESS`

Retrieves the billing address for the shop via GraphQL query. Returns the shop's billing information including address details, city, province, country, and phone number.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Shop Configuration

**Slug:** `SHOPIFY_GET_SHOP_CONFIGURATION`

DEPRECATED: Use SHOPIFY_GET_SHOP_DETAILS instead. Retrieve the complete configuration and settings for the authenticated Shopify shop account. Use when you need to access shop information such as business details, address, timezone, currency, plan information, or feature availability.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Shop Details (Deprecated)

**Slug:** `SHOPIFY_GET_SHOP_DETAILS`

Retrieves comprehensive administrative information about the authenticated Shopify store. The returned `iana_timezone` field is critical for date-based filtering in other tools (e.g., `created_at_min`/`created_at_max` in order queries), since Shopify stores timestamps in UTC and boundary-day orders can be dropped or double-counted without timezone adjustment. Also useful as a first-step connection validity check; an empty or malformed shop object indicates an invalid connection.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve metafield by ID (Deprecated)

**Slug:** `SHOPIFY_GET_SHOP_METAFIELD`

Retrieve a metafield by its ID directly. Use when you know the metafield ID and need to fetch its details without specifying the resource type or owner.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fields` | string | No | Comma-separated list of specific fields to return in the response. If not specified, all fields are returned. |
| `metafield_id` | string | Yes | The unique identifier of the metafield to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve metafields from resource endpoint (Deprecated)

**Slug:** `SHOPIFY_GET_SHOP_METAFIELDS`

DEPRECATED: Use SHOPIFY_GET_METAFIELDS instead (apps/shopify/actions/get_metafields.py). Retrieve a list of metafields attached to resources. Use when you need to fetch metafields that can be filtered by namespace, key, type, and date ranges.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `key` | string | No | Filter metafields by key. The key is a unique identifier within the namespace (3-64 characters). |
| `type` | string | No | Filter metafields by the data type stored in the metafield value (e.g., 'single_line_text_field', 'number_integer', 'json'). |
| `limit` | integer | No | Maximum number of results per page. Default: 50, Maximum: 250. |
| `fields` | string | No | Comma-separated list of specific fields to retrieve from the metafield object. |
| `owner_id` | string | No | Optional owner resource ID filter for legacy resource-scoped metafield queries. |
| `since_id` | string | No | Show metafields created after the specified ID. Used for pagination. |
| `namespace` | string | No | Filter metafields by namespace. The namespace is a container for grouping metafields (3-255 characters). |
| `created_at_max` | string | No | Show metafields created before this date. Format: ISO 8601 (e.g., 2024-12-31T23:59:59Z). |
| `created_at_min` | string | No | Show metafields created after this date. Format: ISO 8601 (e.g., 2024-01-01T00:00:00Z). |
| `owner_resource` | string | No | Optional owner resource filter for legacy resource-scoped metafield queries, for example product, collection, customer, order, blog, page, or article. |
| `updated_at_max` | string | No | Show metafields updated before this date. Format: ISO 8601 (e.g., 2024-12-31T23:59:59Z). |
| `updated_at_min` | string | No | Show metafields updated after this date. Format: ISO 8601 (e.g., 2024-01-01T00:00:00Z). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve a single smart collection (Deprecated)

**Slug:** `SHOPIFY_GET_SMART_COLLECTION`

Retrieve a single smart collection by its ID from Shopify. Use when you need to get detailed information about a specific smart collection including its rules, products ordering, and metadata. Requires read_products access scope.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fields` | string | No | Comma-separated list of specific field names to include in the response. Allows you to limit which fields are returned to optimize the response. E.g., 'id,title,handle'. |
| `smart_collection_id` | string | Yes | The unique identifier for the smart collection to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get smart collection by ID

**Slug:** `SHOPIFY_GET_SMART_COLLECTION_BY_ID`

Retrieve a single smart collection by its ID. Use when you need to get details about a specific smart collection including its rules, settings, and associated image.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fields` | string | No | Comma-separated list of fields to retrieve; if omitted, all fields are returned. E.g., 'id,title,handle'. |
| `smart_collection_id` | string | Yes | The unique identifier for the smart collection to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get smart collections

**Slug:** `SHOPIFY_GET_SMART_COLLECTIONS`

Retrieve a list of smart collections from a Shopify store. Use when you need to fetch smart collections with optional filtering by IDs, handle, title, product ID, publication status, or date ranges. Supports pagination via since_id parameter.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ids` | string | No | Comma-separated list of collection IDs to retrieve. |
| `limit` | integer | No | Number of results to return. Maximum 250, default 50. |
| `title` | string | No | Filter by smart collection title. |
| `fields` | string | No | Comma-separated list of fields to include in the response. |
| `handle` | string | No | Filter by smart collection handle (URL-friendly identifier). |
| `since_id` | string | No | Restrict results to collections after the specified ID (for pagination). |
| `product_id` | string | No | Show collections containing the specified product ID. |
| `updated_at_max` | string | No | Filter collections updated before this date (ISO 8601 format). |
| `updated_at_min` | string | No | Filter collections updated after this date (ISO 8601 format). |
| `published_at_max` | string | No | Filter collections published before this date (ISO 8601 format). |
| `published_at_min` | string | No | Filter collections published after this date (ISO 8601 format). |
| `published_status` | string | No | Filter by publication status: 'published', 'unpublished', or 'any' (default). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get smart collections count

**Slug:** `SHOPIFY_GET_SMART_COLLECTIONS_COUNT`

Retrieve a count of smart collections in a Shopify store. Use when you need to know the total number of smart collections, optionally filtered by publication status, title, product association, or date ranges.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `title` | string | No | Filter results by collection name. |
| `product_id` | string | No | Return count for collections containing a specific product. Provide the product ID. |
| `updated_at_max` | string | No | Collections modified at or before this date. Format: ISO 8601 datetime. |
| `updated_at_min` | string | No | Collections modified at or after this date. Format: ISO 8601 datetime. |
| `published_at_max` | string | No | Collections published at or before this date. Format: ISO 8601 datetime. |
| `published_at_min` | string | No | Collections published at or after this date. Format: ISO 8601 datetime. |
| `published_status` | string ("published" | "unpublished" | "any") | No | Filter by publication state. Valid values: 'published', 'unpublished', or 'any' (default). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get storefront access tokens

**Slug:** `SHOPIFY_GET_STOREFRONT_ACCESS_TOKENS`

Retrieves a list of storefront access tokens that have been issued for the shop. Use when you need to view all active storefront access tokens and their permissions.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get tender transactions

**Slug:** `SHOPIFY_GET_TENDER_TRANSACTIONS`

Retrieve a list of tender transactions from Shopify. Tender transactions represent actual money movement between customers and the merchant (positive = payment to merchant, negative = refund from merchant). Use this action to: - Fetch payment transaction data for financial reconciliation - Track payment methods used (credit_card, cash, apple_pay, google_pay, etc.) - Filter transactions by date range or order - Monitor POS and online payment processing Note: This endpoint implements cursor-based pagination using links in the response header. Requires 'read_orders' scope.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | The maximum number of results to retrieve. Maximum value is 250, default is 50. |
| `order` | string | No | Sort by processed_at in ascending or descending order. Valid values: 'processed_at ASC' or 'processed_at DESC'. |
| `since_id` | string | No | Retrieve only transactions after the specified ID. Used for pagination. |
| `processed_at` | string | No | Filter transactions processed on the specified date. Format: ISO 8601 datetime string (e.g., '2024-01-15T00:00:00Z'). |
| `processed_at_max` | string | No | Show tender transactions processed at or before the specified date. Format: ISO 8601 datetime string. |
| `processed_at_min` | string | No | Show tender transactions processed at or after the specified date. Format: ISO 8601 datetime string. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve a single theme

**Slug:** `SHOPIFY_GET_THEME`

Retrieves a single Shopify theme by its unique ID. Use this action when you need to: - Get details about a specific theme (name, role, timestamps, store ID) - Check if a theme is the currently published theme (role='main') - Verify theme processing status before modifying assets - Inspect theme metadata like theme_store_id for identifying Shopify Theme Store themes Note: Requires the 'read_themes' OAuth scope which may need merchant approval.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fields` | string | No | Comma-separated list of specific fields to include in the response. If not specified, all theme fields are returned. Common fields: id, name, role, created_at, updated_at, theme_store_id, previewable, processing. |
| `theme_id` | string | Yes | The unique identifier for the theme to retrieve. This is a numeric ID returned from theme listing endpoints or visible in the Shopify admin. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get themes

**Slug:** `SHOPIFY_GET_THEMES`

Retrieves a list of themes from a Shopify store. Use when you need to access theme information including name, role, and metadata.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fields` | string | No | Show only certain fields, specified by a comma-separated list of field names (e.g., 'id,name,role'). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Theme Asset

**Slug:** `SHOPIFY_GET_THEMES_PARAM_THEME_ID_ASSETS`

Retrieve a single asset for a theme by its key. Use when you need to fetch the content or metadata of a specific theme file such as templates, stylesheets, or scripts.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fields` | string | No | Comma-separated list of specific fields to return from the asset object (e.g., 'key,value,public_url'). |
| `theme_id` | string | Yes | The unique identifier for the theme. |
| `asset_key` | string | Yes | The path within a theme to an existing asset (e.g., templates/index.liquid, assets/base.css). Max 100 characters. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve a specific transaction

**Slug:** `SHOPIFY_GET_TRANSACTION`

Retrieve a specific transaction for an order. Use when you need to get detailed information about a payment transaction. Transactions in multi-currency orders are in presentment currency by default; use in_shop_currency parameter to get shop currency.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fields` | string | No | Comma-separated list of fields to include in the response (e.g., 'id,kind,status'). |
| `order_id` | string | Yes | The unique identifier of the order that the transaction belongs to. |
| `transaction_id` | string | Yes | The unique identifier of the specific transaction to retrieve. |
| `in_shop_currency` | boolean | No | Display amounts in shop currency instead of presentment currency. Defaults to false. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Webhook

**Slug:** `SHOPIFY_GET_WEBHOOK`

Retrieves a single webhook subscription by its ID. Use when you need to get details of a specific webhook configuration.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fields` | string | No | Comma-separated list of properties to return for the webhook. Use this to restrict the returned webhook to only the specified properties. |
| `webhook_id` | string | Yes | The unique numeric identifier for the webhook subscription to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get webhook subscriptions count

**Slug:** `SHOPIFY_GET_WEBHOOK_SUBSCRIPTIONS_COUNT`

Query the number of webhook subscriptions for a shop. Use when you need to know how many webhook subscriptions exist, optionally filtered by query criteria.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `query` | string | No | Filter webhook subscriptions by query string. Use this to filter by specific topics or other attributes. Example: topic:"orders/create" |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Shopify GraphQL Admin execute

**Slug:** `SHOPIFY_GRAPH_QL_ADMIN_EXECUTE`

Execute any Shopify Admin GraphQL query or mutation with variables. Use this when a workflow needs a GraphQL Admin operation that does not have a dedicated Mercury action yet. It unlocks the GraphQL-only resources called out by Shopify, while still returning a consistent envelope with errors, userErrors, pageInfo, extensions, and raw data.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `document` | string | Yes | A complete Shopify Admin GraphQL query or mutation document. Use this for GraphQL-only Admin API capabilities such as productCreate, productOptionsCreate, inventoryActivate, collectionReorderProducts, discountCodeBxgyCreate, customerEmailMarketingConsentUpdate, themeFilesUpsert, marketWebPresenceCreate, or appUsageRecordCreate. |
| `variables` | object | No | Variables object passed with the GraphQL document. |
| `api_version` | string | No | Optional Shopify Admin API version override, for example 2026-04. Defaults to the API version in the connected account base_url when present; otherwise defaults to 2026-04. |
| `operation_name` | string | No | Optional GraphQL operationName when the document contains multiple operations. |
| `raise_on_user_errors` | boolean | No | Raise ExecutionFailed when mutation payloads contain userErrors. Defaults to false so agents can inspect and repair validation errors. |
| `raise_on_graphql_errors` | boolean | No | Raise ExecutionFailed when Shopify returns top-level GraphQL errors. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Shopify GraphQL collections and publication-ready collection reads

**Slug:** `SHOPIFY_GRAPH_QL_COLLECTIONS`

Shopify GraphQL collections and publication-ready collection reads. The response always includes raw GraphQL data, extracted userErrors, pageInfo, and cost extensions.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `last` | integer | No | Backward page size for list/search presets. |
| `after` | string | No | Cursor after which to read. |
| `first` | integer | No | Forward page size for list/search presets. |
| `query` | string | No | Shopify search query string, when supported by the preset. |
| `before` | string | No | Cursor before which to read. |
| `fields` | string | No | Optional GraphQL field selection for nodes returned by read presets. |
| `reverse` | boolean | No | Reverse sort order, when supported. |
| `sort_key` | string | No | Shopify GraphQL sort key enum value, when supported. |
| `operation` | string ("list_collections" | "get_collection" | "count_collections") | Yes | Canonical operation preset to execute. |
| `variables` | object | No | GraphQL variables for the selected operation or custom_document. |
| `api_version` | string | No | Optional Shopify Admin API version override, for example 2026-04. Defaults to the API version in the connected account base_url when present; otherwise defaults to 2026-04. |
| `operation_name` | string | No | Operation name for custom_document, if it contains multiple operations. |
| `custom_document` | string | No | Complete GraphQL document to execute instead of a preset. Use variables for user input. |
| `raise_on_user_errors` | boolean | No | Raise on mutation userErrors. |
| `raise_on_graphql_errors` | boolean | No | Raise on top-level GraphQL errors. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Shopify GraphQL customers and customer search

**Slug:** `SHOPIFY_GRAPH_QL_CUSTOMERS`

Shopify GraphQL customers and customer search. The response always includes raw GraphQL data, extracted userErrors, pageInfo, and cost extensions.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `last` | integer | No | Backward page size for list/search presets. |
| `after` | string | No | Cursor after which to read. |
| `first` | integer | No | Forward page size for list/search presets. |
| `query` | string | No | Shopify search query string, when supported by the preset. |
| `before` | string | No | Cursor before which to read. |
| `fields` | string | No | Optional GraphQL field selection for nodes returned by read presets. |
| `reverse` | boolean | No | Reverse sort order, when supported. |
| `sort_key` | string | No | Shopify GraphQL sort key enum value, when supported. |
| `operation` | string ("list_customers" | "search_customers" | "get_customer" | "count_customers") | Yes | Canonical operation preset to execute. |
| `variables` | object | No | GraphQL variables for the selected operation or custom_document. |
| `api_version` | string | No | Optional Shopify Admin API version override, for example 2026-04. Defaults to the API version in the connected account base_url when present; otherwise defaults to 2026-04. |
| `operation_name` | string | No | Operation name for custom_document, if it contains multiple operations. |
| `custom_document` | string | No | Complete GraphQL document to execute instead of a preset. Use variables for user input. |
| `raise_on_user_errors` | boolean | No | Raise on mutation userErrors. |
| `raise_on_graphql_errors` | boolean | No | Raise on top-level GraphQL errors. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Shopify GraphQL discounts and discount search

**Slug:** `SHOPIFY_GRAPH_QL_DISCOUNTS`

Shopify GraphQL discounts and discount search. The response always includes raw GraphQL data, extracted userErrors, pageInfo, and cost extensions.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `last` | integer | No | Backward page size for list/search presets. |
| `after` | string | No | Cursor after which to read. |
| `first` | integer | No | Forward page size for list/search presets. |
| `query` | string | No | Shopify search query string, when supported by the preset. |
| `before` | string | No | Cursor before which to read. |
| `fields` | string | No | Optional GraphQL field selection for nodes returned by read presets. |
| `reverse` | boolean | No | Reverse sort order, when supported. |
| `sort_key` | string | No | Shopify GraphQL sort key enum value, when supported. |
| `operation` | string ("list_discountNodes" | "get_discountNode") | Yes | Canonical operation preset to execute. |
| `variables` | object | No | GraphQL variables for the selected operation or custom_document. |
| `api_version` | string | No | Optional Shopify Admin API version override, for example 2026-04. Defaults to the API version in the connected account base_url when present; otherwise defaults to 2026-04. |
| `operation_name` | string | No | Operation name for custom_document, if it contains multiple operations. |
| `custom_document` | string | No | Complete GraphQL document to execute instead of a preset. Use variables for user input. |
| `raise_on_user_errors` | boolean | No | Raise on mutation userErrors. |
| `raise_on_graphql_errors` | boolean | No | Raise on top-level GraphQL errors. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Shopify GraphQL draft orders

**Slug:** `SHOPIFY_GRAPH_QL_DRAFT_ORDERS`

Shopify GraphQL draft orders. The response always includes raw GraphQL data, extracted userErrors, pageInfo, and cost extensions.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `last` | integer | No | Backward page size for list/search presets. |
| `after` | string | No | Cursor after which to read. |
| `first` | integer | No | Forward page size for list/search presets. |
| `query` | string | No | Shopify search query string, when supported by the preset. |
| `before` | string | No | Cursor before which to read. |
| `fields` | string | No | Optional GraphQL field selection for nodes returned by read presets. |
| `reverse` | boolean | No | Reverse sort order, when supported. |
| `sort_key` | string | No | Shopify GraphQL sort key enum value, when supported. |
| `operation` | string ("list_draftOrders" | "get_draftOrder" | "count_draftOrders") | Yes | Canonical operation preset to execute. |
| `variables` | object | No | GraphQL variables for the selected operation or custom_document. |
| `api_version` | string | No | Optional Shopify Admin API version override, for example 2026-04. Defaults to the API version in the connected account base_url when present; otherwise defaults to 2026-04. |
| `operation_name` | string | No | Operation name for custom_document, if it contains multiple operations. |
| `custom_document` | string | No | Complete GraphQL document to execute instead of a preset. Use variables for user input. |
| `raise_on_user_errors` | boolean | No | Raise on mutation userErrors. |
| `raise_on_graphql_errors` | boolean | No | Raise on top-level GraphQL errors. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Shopify GraphQL inventory items and levels

**Slug:** `SHOPIFY_GRAPH_QL_INVENTORY`

Shopify GraphQL inventory items and levels. The response always includes raw GraphQL data, extracted userErrors, pageInfo, and cost extensions.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `last` | integer | No | Backward page size for list/search presets. |
| `after` | string | No | Cursor after which to read. |
| `first` | integer | No | Forward page size for list/search presets. |
| `query` | string | No | Shopify search query string, when supported by the preset. |
| `before` | string | No | Cursor before which to read. |
| `fields` | string | No | Optional GraphQL field selection for nodes returned by read presets. |
| `reverse` | boolean | No | Reverse sort order, when supported. |
| `sort_key` | string | No | Shopify GraphQL sort key enum value, when supported. |
| `operation` | string ("list_inventoryItems" | "get_inventoryItem") | Yes | Canonical operation preset to execute. |
| `variables` | object | No | GraphQL variables for the selected operation or custom_document. |
| `api_version` | string | No | Optional Shopify Admin API version override, for example 2026-04. Defaults to the API version in the connected account base_url when present; otherwise defaults to 2026-04. |
| `operation_name` | string | No | Operation name for custom_document, if it contains multiple operations. |
| `custom_document` | string | No | Complete GraphQL document to execute instead of a preset. Use variables for user input. |
| `raise_on_user_errors` | boolean | No | Raise on mutation userErrors. |
| `raise_on_graphql_errors` | boolean | No | Raise on top-level GraphQL errors. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Shopify GraphQL metafields and metaobjects

**Slug:** `SHOPIFY_GRAPH_QL_METAFIELDS_METAOBJECTS`

Canonical GraphQL read surface for metafields, metafield definitions, and metaobjects.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `after` | string | No | Cursor after which to read. |
| `first` | integer | No | Forward page size. |
| `fields` | string | No | Optional field selection for metafield/metaobject nodes. |
| `operation` | string ("get_owner_metafields" | "get_metafield_definitions" | "get_metaobject" | "list_metaobjects_by_type" | "custom_query") | Yes | Metafield/metaobject operation. |
| `variables` | object | No | Variables for the selected operation. |
| `api_version` | string | No | Optional Shopify Admin API version override, for example 2026-04. Defaults to the API version in the connected account base_url when present; otherwise defaults to 2026-04. |
| `operation_name` | string | No | Operation name for custom_document. |
| `custom_document` | string | No | Complete GraphQL query for custom_query or schema-new fields. |
| `raise_on_graphql_errors` | boolean | No | Raise on top-level GraphQL errors. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Shopify GraphQL orders and order search

**Slug:** `SHOPIFY_GRAPH_QL_ORDERS`

Shopify GraphQL orders and order search. The response always includes raw GraphQL data, extracted userErrors, pageInfo, and cost extensions.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `last` | integer | No | Backward page size for list/search presets. |
| `after` | string | No | Cursor after which to read. |
| `first` | integer | No | Forward page size for list/search presets. |
| `query` | string | No | Shopify search query string, when supported by the preset. |
| `before` | string | No | Cursor before which to read. |
| `fields` | string | No | Optional GraphQL field selection for nodes returned by read presets. |
| `reverse` | boolean | No | Reverse sort order, when supported. |
| `sort_key` | string | No | Shopify GraphQL sort key enum value, when supported. |
| `operation` | string ("list_orders" | "get_order" | "count_orders") | Yes | Canonical operation preset to execute. |
| `variables` | object | No | GraphQL variables for the selected operation or custom_document. |
| `api_version` | string | No | Optional Shopify Admin API version override, for example 2026-04. Defaults to the API version in the connected account base_url when present; otherwise defaults to 2026-04. |
| `operation_name` | string | No | Operation name for custom_document, if it contains multiple operations. |
| `custom_document` | string | No | Complete GraphQL document to execute instead of a preset. Use variables for user input. |
| `raise_on_user_errors` | boolean | No | Raise on mutation userErrors. |
| `raise_on_graphql_errors` | boolean | No | Raise on top-level GraphQL errors. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Shopify GraphQL products, variants, media, and publishing

**Slug:** `SHOPIFY_GRAPH_QL_PRODUCTS`

GraphQL-first product toolkit: products, variants, options, media, and publications. This is the canonical agent-facing replacement for legacy REST product, product variant, and product image actions. It exposes Shopify's new product model in one consistent action, preserves cursor pagination metadata, extracts userErrors, and keeps the generic variables escape hatch for newly-added Shopify input fields without requiring a Mercury release.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `last` | integer | No | Backward page size for list_products. |
| `after` | string | No | Cursor after which to read products. |
| `first` | integer | No | Forward page size for list_products. |
| `query` | string | No | Shopify product search query for list_products/count_products. |
| `before` | string | No | Cursor before which to read products. |
| `fields` | string | No | Optional node field selection for product read operations. Keep it valid GraphQL, for example: `id title handle status updatedAt variants(first: 10) { nodes { id title sku } }`. |
| `reverse` | boolean | No | Reverse sort order. |
| `sort_key` | string | No | Shopify ProductSortKeys value. |
| `operation` | string ("list_products" | "get_product" | "count_products" | "create_product" | "update_product" | "set_product" | "delete_product" | "duplicate_product" | "create_options" | "update_option" | "delete_options" | "reorder_options" | "bulk_create_variants" | "bulk_update_variants" | "bulk_delete_variants" | "bulk_reorder_variants" | "create_media" | "update_media" | "delete_media" | "reorder_media" | "attach_variant_media" | "detach_variant_media" | "publish_product" | "unpublish_product") | Yes | Product operation to run. |
| `variables` | object | No | GraphQL variables for the selected operation. Examples: list_products accepts first/after/query/sortKey/reverse; create_product accepts input; update_product accepts input; set_product accepts input; variant/media/option operations accept the exact Shopify GraphQL mutation variables. |
| `api_version` | string | No | Optional Shopify Admin API version override, for example 2026-04. Defaults to the API version in the connected account base_url when present; otherwise defaults to 2026-04. |
| `raise_on_user_errors` | boolean | No | Raise on mutation userErrors. |
| `raise_on_graphql_errors` | boolean | No | Raise on top-level GraphQL errors. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Execute Shopify GraphQL query

**Slug:** `SHOPIFY_GRAPH_QL_QUERY`

Executes a GraphQL query against the Shopify Admin API for flexible data retrieval and mutations including metafields. Response data is nested under result['data']['data'], not result['data']. Always inspect both response_data.errors (top-level) and mutation-level userErrors—HTTP 200 can accompany GraphQL validation failures. Query costs draw from a ~1000-point bucket (~50 points/second refill); monitor extensions.cost.throttleStatus to avoid THROTTLED errors. Paginate list queries using pageInfo.hasNextPage and endCursor to avoid silently missing records. productUpdate replaces the entire tags array—send the complete final tag list. refundCreate requires orderId at both the top level and inside each transactions element. transaction parentId must reference a CAPTURE-kind transaction. Numeric fields like numberOfOrders may be returned as strings—cast before aggregating.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `query` | string | Yes | The GraphQL query string to execute against the Shopify Admin API. Include pageInfo { hasNextPage endCursor } on all list fields; the first argument caps results and silently omits remaining records without pagination. |
| `variables` | object | No | Variables to be used in the GraphQL query as a dictionary. IDs use gid://shopify/Type/ID format; query legacyResourceId when a numeric ID is needed for interoperability with REST-based tools. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Shopify GraphQL shop and app metadata

**Slug:** `SHOPIFY_GRAPH_QL_SHOP`

GraphQL-first shop, app installation, and configuration read action.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fields` | string | No | Shop field selection. Defaults to core shop identity, plan, currency, and scopes-friendly fields. |
| `variables` | object | No | Variables for custom_document. |
| `api_version` | string | No | Optional Shopify Admin API version override, for example 2026-04. Defaults to the API version in the connected account base_url when present; otherwise defaults to 2026-04. |
| `custom_document` | string | No | Complete GraphQL query to execute instead of the default shop query. |
| `raise_on_graphql_errors` | boolean | No | Raise on top-level GraphQL errors. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Shopify GraphQL webhook subscriptions

**Slug:** `SHOPIFY_GRAPH_QL_WEBHOOKS`

Shopify GraphQL webhook subscriptions. The response always includes raw GraphQL data, extracted userErrors, pageInfo, and cost extensions.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `last` | integer | No | Backward page size for list/search presets. |
| `after` | string | No | Cursor after which to read. |
| `first` | integer | No | Forward page size for list/search presets. |
| `query` | string | No | Shopify search query string, when supported by the preset. |
| `before` | string | No | Cursor before which to read. |
| `fields` | string | No | Optional GraphQL field selection for nodes returned by read presets. |
| `reverse` | boolean | No | Reverse sort order, when supported. |
| `sort_key` | string | No | Shopify GraphQL sort key enum value, when supported. |
| `operation` | string ("list_webhookSubscriptions" | "get_webhookSubscription" | "count_webhookSubscriptions") | Yes | Canonical operation preset to execute. |
| `variables` | object | No | GraphQL variables for the selected operation or custom_document. |
| `api_version` | string | No | Optional Shopify Admin API version override, for example 2026-04. Defaults to the API version in the connected account base_url when present; otherwise defaults to 2026-04. |
| `operation_name` | string | No | Operation name for custom_document, if it contains multiple operations. |
| `custom_document` | string | No | Complete GraphQL document to execute instead of a preset. Use variables for user input. |
| `raise_on_user_errors` | boolean | No | Raise on mutation userErrors. |
| `raise_on_graphql_errors` | boolean | No | Raise on top-level GraphQL errors. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Shopify GraphQL write operations

**Slug:** `SHOPIFY_GRAPH_QL_WRITE_OPERATIONS`

Canonical GraphQL write surface for Shopify orders, customers, inventory, discounts, collections, webhooks, fulfillments, metafields, and bulk operations.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `operation` | string ("orderCreate" | "orderUpdate" | "refundCreate" | "orderEditBegin" | "orderEditCommit" | "draftOrderCreate" | "draftOrderUpdate" | "draftOrderComplete" | "customerCreate" | "customerUpdate" | "customerDelete" | "metafieldsSet" | "metafieldsDelete" | "metaobjectUpsert" | "collectionCreate" | "collectionUpdate" | "collectionDelete" | "collectionAddProducts" | "collectionRemoveProducts" | "inventoryAdjustQuantities" | "inventorySetQuantities" | "discountCodeBasicCreate" | "discountCodeBasicUpdate" | "discountCodeDelete" | "webhookSubscriptionCreate" | "webhookSubscriptionUpdate" | "webhookSubscriptionDelete" | "fulfillmentCreate" | "fulfillmentTrackingInfoUpdate" | "bulkOperationRunQuery" | "bulkOperationRunMutation") | Yes | Mutation preset to execute. |
| `variables` | object | No | Variables for the mutation preset. |
| `api_version` | string | No | Optional Shopify Admin API version override, for example 2026-04. Defaults to the API version in the connected account base_url when present; otherwise defaults to 2026-04. |
| `operation_name` | string | No | Operation name for custom_document. |
| `custom_document` | string | No | Override preset with an exact GraphQL mutation document. |
| `raise_on_user_errors` | boolean | No | Raise on mutation userErrors. |
| `raise_on_graphql_errors` | boolean | No | Raise on top-level GraphQL errors. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List abandoned checkouts

**Slug:** `SHOPIFY_LIST_ABANDONED_CHECKOUTS`

Retrieves a list of abandoned checkouts with customer contact information. An abandoned checkout occurs when a customer adds contact information but doesn't complete the purchase. Use this to recover abandoned carts, send recovery emails, or analyze checkout abandonment patterns. Note: This endpoint requires 'Protected Customer Data' access in your Shopify app settings. Without this permission, the endpoint returns a 403 error (gracefully handled by returning an empty list). The REST Checkout API is deprecated as of 2024-07; consider GraphQL Admin API for new implementations.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of abandoned checkouts to retrieve per request. Defaults to 50 if not specified, maximum is 250. |
| `status` | string | No | Filter checkouts by status. Valid values: 'open' (default) for active abandoned checkouts, or 'closed' for completed/cancelled ones. |
| `since_id` | string | No | Restrict results to checkouts created after this checkout ID. Use for pagination to fetch the next set of results. |
| `created_at_max` | string | No | Show checkouts created before specified date (ISO 8601 format). |
| `created_at_min` | string | No | Show checkouts created after specified date (ISO 8601 format, e.g., '2024-01-01T00:00:00Z'). |
| `updated_at_max` | string | No | Show checkouts last updated before specified date (ISO 8601 format). |
| `updated_at_min` | string | No | Show checkouts last updated after specified date (ISO 8601 format). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieves all application credits (Deprecated)

**Slug:** `SHOPIFY_LIST_APPLICATION_CREDITS`

Retrieve all application credits issued to a shop by your app. Use when you need to view credits that can be applied towards future app purchases.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fields` | string | No | A comma-separated list of fields to include in the response (e.g., 'id,amount,description,test,currency'). By default, all fields are returned. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List article authors

**Slug:** `SHOPIFY_LIST_ARTICLE_AUTHORS`

Retrieve a list of all article authors from the store. Use when you need to get all unique author names who have created articles across all blogs.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List article tags

**Slug:** `SHOPIFY_LIST_ARTICLE_TAGS`

Retrieve a list of all article tags from the store. Use when you need to get all unique tags that have been applied to articles, optionally sorted by popularity.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | The maximum number of tags to retrieve. If not specified, all tags are returned. |
| `popular` | integer | No | A flag for ordering retrieved tags by popularity. If present (set to any value like 1), results are ordered by popularity, starting with the most popular tag. If not present, tags are returned in default order. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List available locales

**Slug:** `SHOPIFY_LIST_AVAILABLE_LOCALES`

Query available locales for the Shopify store using the Admin GraphQL API. Use when you need to retrieve the list of supported language/region combinations.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve list of articles from blog

**Slug:** `SHOPIFY_LIST_BLOG_ARTICLES`

Retrieves a list of all articles from a blog. Use when you need to access articles from a specific blog, with optional filtering by author, dates, or publication status. Pagination is implemented via response header links as of version 2019-10.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | The maximum number of results to retrieve. Default is 50, maximum is 250. |
| `author` | string | No | Filter articles by the author name. |
| `fields` | string | No | Comma-separated list of fields to include in the response (e.g., 'id,title,author'). |
| `handle` | string | No | Retrieve an article with a specific handle (URL-friendly unique string). |
| `blog_id` | string | Yes | The unique identifier for the blog whose articles should be retrieved. |
| `since_id` | integer | No | Restrict results to articles after the specified ID. Useful for pagination. |
| `created_at_max` | string | No | Show only articles created at or before this ISO 8601 timestamp. |
| `created_at_min` | string | No | Show only articles created at or after this ISO 8601 timestamp. |
| `published_at_max` | string | No | Show only articles published at or before this ISO 8601 timestamp. |
| `published_at_min` | string | No | Show only articles published at or after this ISO 8601 timestamp. |
| `published_status` | string ("published" | "unpublished" | "any") | No | Filter by publication status. 'published' returns only published articles, 'unpublished' returns only unpublished articles, 'any' returns all articles. Defaults to 'any' if not specified. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve a list of all blogs

**Slug:** `SHOPIFY_LIST_BLOGS`

Retrieve a list of all blogs from a Shopify store. Use when you need to get blog information, list available blogs, or paginate through blogs using since_id.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of results to return. Maximum value is 250, default is 50. |
| `fields` | string | No | Comma-separated list of fields to include in the response (e.g., 'id,title,handle'). If not specified, all fields are returned. |
| `handle` | string | No | Filter results by blog handle. Returns only the blog with the specified handle. |
| `since_id` | integer | No | Restrict results to blogs with IDs greater than the specified ID. Used for pagination. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List bulk operations

**Slug:** `SHOPIFY_LIST_BULK_OPERATIONS`

Retrieve a paginated list of bulk operations from Shopify. Use when you need to view the history of bulk operations, check their statuses, or retrieve result URLs for completed operations. Supports filtering by status, creation date, and operation type.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `last` | integer | No | Number of elements to return before the `before` cursor. Maximum value is typically 250. Cannot be used with 'first'. |
| `after` | string | No | Cursor for forward pagination. Returns elements after this cursor. |
| `first` | integer | No | Number of elements to return from the start. Maximum value is typically 250. Cannot be used with 'last'. |
| `query` | string | No | Filter query string. Supports filtering by created_at, id, operation_type, and status. Example: 'status:COMPLETED' or 'created_at:>2024-01-01'. |
| `before` | string | No | Cursor for backward pagination. Returns elements before this cursor. |
| `reverse` | boolean | No | Reverse the result order. When true, results are returned in reverse chronological order. |
| `sort_key` | string ("CREATED_AT") | No | Sort key options for bulk operations list. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List channels

**Slug:** `SHOPIFY_LIST_CHANNELS`

Retrieves a list of sales channels available in the Shopify store using GraphQL. Use when you need to fetch channel information including Online Store, Point of Sale, and other active sales channels. Supports cursor-based pagination for large result sets.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `last` | integer | No | Number of channels to retrieve from the end of the list. Use for backward pagination. Cannot be used with 'first'. |
| `after` | string | No | Cursor to retrieve channels after. Used for forward pagination with 'first'. Obtain from the 'endCursor' in pageInfo from a previous query. |
| `first` | integer | No | Number of channels to retrieve from the start of the list. Use for forward pagination. Cannot be used with 'last'. |
| `before` | string | No | Cursor to retrieve channels before. Used for backward pagination with 'last'. Obtain from the 'startCursor' in pageInfo from a previous query. |
| `reverse` | boolean | No | Whether to reverse the order of the returned list. Default is false (channels returned in ascending order). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List checkout profiles

**Slug:** `SHOPIFY_LIST_CHECKOUT_PROFILES`

Query checkout profiles from Shopify. Use when you need to retrieve checkout profile configurations including branding settings and UI extensions. Supports pagination and filtering by publication status.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `last` | integer | No | The last n elements before the `before` cursor. Use for backward pagination. Mutually exclusive with 'first'. |
| `after` | string | No | Cursor pointing to the position after which to fetch elements. Use for forward pagination with 'first'. |
| `first` | integer | No | The first n elements from the paginated list. Use for forward pagination. Mutually exclusive with 'last'. |
| `query` | string | No | Search filter using Shopify API syntax. Supports 'id' and 'is_published' fields. Examples: 'is_published:true', 'id:12345'. |
| `before` | string | No | Cursor pointing to the position before which to fetch elements. Use for backward pagination with 'last'. |
| `reverse` | boolean | No | Reverses the order of the list. Default is false. |
| `sortKey` | string ("CREATED_AT" | "EDITED_AT" | "ID" | "IS_PUBLISHED" | "UPDATED_AT") | No | Sort keys for checkout profiles. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve products in collection

**Slug:** `SHOPIFY_LIST_COLLECTION_PRODUCTS`

Retrieve a list of products belonging to a collection. Use when you need to fetch products from a specific Shopify collection. Implements cursor-based pagination via Link headers (as of version 2019-10).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Number of products to retrieve. Default: 50, Maximum: 250. |
| `fields` | string | No | Comma-separated list of fields to include in response. |
| `since_id` | string | No | Retrieve products after a specified product ID. |
| `page_info` | string | No | Unique ID used to access a certain page of results (provided in Link header of previous response). When using page_info, only limit and fields parameters can be added. |
| `collection_id` | string | Yes | The ID of the collection to retrieve products from. This is the unique identifier for the Shopify collection. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve list of collects (Deprecated)

**Slug:** `SHOPIFY_LIST_COLLECTS`

Retrieve a list of collects (product-collection associations). Use when you need to find which products belong to which custom collections.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of results per request. Default is 50, maximum is 250. |
| `fields` | string | No | Show only certain fields, specified by a comma-separated list of field names. |
| `since_id` | integer | No | Restrict results to after the specified ID for pagination. |
| `product_id` | integer | No | Filter results to a specific product ID. |
| `collection_id` | integer | No | Filter results to a specific custom collection ID. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve a list of comments

**Slug:** `SHOPIFY_LIST_COMMENTS`

Retrieve a list of comments from Shopify. Use when you need to get comments with optional filtering by dates, status, or pagination.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum results to retrieve (≤250, default: 50). |
| `fields` | string | No | Comma-separated field names to display (e.g., 'id,body,author'). |
| `status` | string | No | Filter by status: pending, published, or unapproved. |
| `since_id` | string | No | Restrict results to after specified ID. Used for pagination. |
| `created_at_max` | string | No | Show comments created before specified date (ISO 8601 format, e.g., '2024-12-31T23:59:59Z'). |
| `created_at_min` | string | No | Show comments created after specified date (ISO 8601 format, e.g., '2024-01-01T00:00:00Z'). |
| `updated_at_max` | string | No | Show comments last updated before specified date (ISO 8601 format). |
| `updated_at_min` | string | No | Show comments last updated after specified date (ISO 8601 format). |
| `published_at_max` | string | No | Show comments published before specified date (ISO 8601 format). |
| `published_at_min` | string | No | Show comments published after specified date (ISO 8601 format). |
| `published_status` | string | No | Filter by published status: published, unpublished, or any (default). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Receive a list of all countries (Deprecated)

**Slug:** `SHOPIFY_LIST_COUNTRIES`

Retrieve a list of all countries where the merchant sells products with tax rates. Use when you need to access country-level tax configuration and regional settings. Note: This endpoint is deprecated as of API version 2024-07.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fields` | string | No | Comma-separated list of specific fields to return (e.g., 'id,name,code'). If not specified, all fields are returned. |
| `since_id` | integer | No | Filter to retrieve results after specified country ID. Use for pagination. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieves a list of currencies enabled on a shop (Deprecated)

**Slug:** `SHOPIFY_LIST_CURRENCIES`

Retrieves a list of currencies enabled on a Shopify store. This action fetches all currencies that the merchant has enabled for multi-currency transactions through Shopify Payments. Each currency includes its ISO 4217 code, the timestamp when its conversion rate was last updated, and its enabled status. Use this when you need to: - Check which currencies are available for customer transactions - Verify currency configurations for the shop - Get conversion rate update timestamps - Determine multi-currency support capabilities Note: This is a read-only endpoint that requires no parameters and returns all enabled currencies for the authenticated shop.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve custom collections (Deprecated)

**Slug:** `SHOPIFY_LIST_CUSTOM_COLLECTIONS`

Retrieve a list of custom collections from Shopify. Use when you need to query collections with filtering options like handle, title, publication status, or date ranges.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ids` | string | No | Show only collections specified by a comma-separated list of IDs. |
| `limit` | integer | No | The maximum number of results to retrieve (max: 250, default: 50). |
| `title` | string | No | Show custom collections with a given title. |
| `fields` | string | No | Show only certain fields, specified by a comma-separated list of field names. |
| `handle` | string | No | Filter by custom collection handle. |
| `since_id` | string | No | Restrict results to after the specified ID. |
| `product_id` | string | No | Show custom collections that include a given product. |
| `updated_at_max` | string | No | Show custom collections last updated before date (format: 2014-04-25T16:15:47-04:00). |
| `updated_at_min` | string | No | Show custom collections last updated after date (format: 2014-04-25T16:15:47-04:00). |
| `published_at_max` | string | No | Show custom collections published before date (format: 2014-04-25T16:15:47-04:00). |
| `published_at_min` | string | No | Show custom collections published after date (format: 2014-04-25T16:15:47-04:00). |
| `published_status` | string | No | Filter by status - published, unpublished, or any (default: any). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get customer orders (Deprecated)

**Slug:** `SHOPIFY_LIST_CUSTOMER_ORDERS`

Retrieves all orders for a specific customer from Shopify. Returns order details including line items, fulfillment status, payment information, shipping address, and more. Use this when you need to view a customer's order history or analyze their purchase patterns. Requires the customer's unique ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of results to return (default: 50, max: 250). |
| `fields` | string | No | Comma-separated list of specific fields to include in the response (returns all fields if omitted). Common fields: id, name, email, total_price, created_at, updated_at, financial_status, fulfillment_status, line_items, customer, billing_address, shipping_address. |
| `status` | string | No | Filter orders by their status. Valid values: open, closed, cancelled, any. |
| `since_id` | integer | No | Restrict results to orders after the specified ID (for cursor-based pagination). |
| `customer_id` | string | Yes | The unique identifier for the customer whose orders you want to retrieve. |
| `created_at_max` | string | No | Show orders created at or before this date (ISO 8601 datetime). |
| `created_at_min` | string | No | Show orders created at or after this date (ISO 8601 datetime). |
| `updated_at_max` | string | No | Show orders last updated at or before this date (ISO 8601 datetime). |
| `updated_at_min` | string | No | Show orders last updated at or after this date (ISO 8601 datetime). |
| `financial_status` | string | No | Filter by financial status. Valid values: authorized, pending, paid, partially_paid, refunded, voided, partially_refunded, any, unpaid. |
| `processed_at_max` | string | No | Show orders processed at or before this date (ISO 8601 datetime). |
| `processed_at_min` | string | No | Show orders processed at or after this date (ISO 8601 datetime). |
| `fulfillment_status` | string | No | Filter by fulfillment status. Valid values: shipped, partial, unshipped, any, unfulfilled. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieves a list of customers

**Slug:** `SHOPIFY_LIST_CUSTOMERS`

Retrieve a list of customers from a Shopify store. Use when you need to fetch customer data with optional filtering by IDs, creation dates, update dates, or account status. Supports pagination using cursor-based navigation via page_info parameter.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ids` | string | No | Comma-separated list of customer IDs to retrieve specific customers. Example: '207119551,562393516' |
| `limit` | integer | No | Number of results to return per page. Default: 50, Maximum: 250 |
| `fields` | string | No | Comma-separated list of fields to include in the response. Example: 'id,email,first_name,last_name' |
| `status` | string | No | Filter customers by account status. Valid values: enabled, disabled, invited, declined |
| `since_id` | string | No | Restrict results to customers after the specified ID. Used for pagination. |
| `page_info` | string | No | Pagination cursor for navigating through results. Use the value from the Link header in previous response. |
| `created_at_max` | string | No | Show customers created before this date (ISO 8601 format). Example: '2024-12-31T23:59:59Z' |
| `created_at_min` | string | No | Show customers created after this date (ISO 8601 format). Example: '2024-04-25T16:15:47-04:00' |
| `updated_at_max` | string | No | Show customers last updated before this date (ISO 8601 format). |
| `updated_at_min` | string | No | Show customers last updated after this date (ISO 8601 format). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve list of draft orders

**Slug:** `SHOPIFY_LIST_DRAFT_ORDERS`

Retrieve a list of draft orders from Shopify. Use when you need to fetch draft orders with optional filtering by status, IDs, or update dates. Supports pagination via since_id and limit parameters. Note: As of version 2019-10, this endpoint implements pagination by using links provided in the response header.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ids` | string | No | Filter results by comma-separated list of draft order IDs (e.g., '1,2,3'). |
| `limit` | integer | No | Maximum number of results to return (default: 50, maximum: 250). |
| `fields` | string | No | Comma-separated list of specific properties to include in the response (e.g., 'id,name,status,total_price'). |
| `status` | string | No | Filter by order status. Valid values: 'open', 'invoice_sent', 'completed'. |
| `since_id` | string | No | Restrict results to draft orders after the specified ID. Used for pagination. |
| `updated_at_max` | string | No | Show draft orders updated before this date in ISO 8601 format (e.g., '2024-12-31T23:59:59Z'). |
| `updated_at_min` | string | No | Show draft orders updated after this date in ISO 8601 format (e.g., '2024-01-01T00:00:00Z'). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieves a List of Inventory Levels (Deprecated)

**Slug:** `SHOPIFY_LIST_INVENTORY_LEVELS`

Retrieves a list of inventory levels for specified items and locations. Use when you need to check inventory quantities at specific locations. At least one of inventory_item_ids or location_ids must be provided as a filter parameter.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of results to return per page. Range: 1-250, Default: 50. |
| `location_ids` | string | No | Comma-separated list of location IDs to filter by. Maximum 50 IDs per request. At least one of inventory_item_ids or location_ids must be provided. |
| `updated_at_min` | string | No | Show inventory levels updated at or after this date. ISO 8601 datetime format. |
| `inventory_item_ids` | string | No | Comma-separated list of inventory item IDs to filter by. Maximum 50 IDs per request. At least one of inventory_item_ids or location_ids must be provided. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List locations

**Slug:** `SHOPIFY_LIST_LOCATIONS`

Retrieve a list of locations for a Shopify store. Use when you need to get physical or virtual places where inventory is stocked and orders are fulfilled.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | The maximum number of locations to retrieve. Defaults to 50, with a maximum value of 250. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve all marketing events

**Slug:** `SHOPIFY_LIST_MARKETING_EVENTS`

Retrieves a paginated list of marketing events from a Shopify store. Marketing events represent marketing activities such as ads, posts, newsletters, retargeting campaigns, abandoned cart emails, loyalty programs, and affiliate campaigns. Returns up to 250 events per request (default 50). The endpoint uses cursor-based pagination via Link headers in the API response - check the 'Link' header for URLs to navigate to next/previous pages. The deprecated 'offset' parameter is not supported. Each event includes metadata like event type, marketing channel, UTM parameters, budget information, timestamps, and associated resources. Useful for tracking marketing campaign performance and attribution.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of results to return per page. Maximum value is 250, defaults to 50. For pagination beyond the first page, use the 'Link' header from the response which contains cursor-based pagination URLs. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List orders (Deprecated)

**Slug:** `SHOPIFY_LIST_ORDER`

Retrieves a list of orders from Shopify with optional filtering by status, dates, and other criteria. Use when you need to fetch multiple orders with pagination and filtering support.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ids` | string | No | Retrieve only orders with specific IDs. Provide as comma-separated values. |
| `limit` | integer | No | Maximum number of orders to return per page. Default is 50, maximum is 250. |
| `fields` | string | No | Comma-separated list of fields to include in the response to reduce payload size. |
| `status` | string | No | Filter orders by their status. Valid values: open, closed, cancelled, any. Defaults to 'open' if not specified. |
| `since_id` | integer | No | Retrieve orders after the specified order ID for pagination purposes. |
| `page_info` | string | No | Cursor value for pagination. When using page_info, only 'limit' and 'fields' may be used alongside it. Other filters are not supported with cursor-based pagination. |
| `created_at_max` | string | No | Show orders created at or before this date (ISO 8601 timestamp format: YYYY-MM-DDTHH:MM:SSZ). |
| `created_at_min` | string | No | Show orders created at or after this date (ISO 8601 timestamp format: YYYY-MM-DDTHH:MM:SSZ). |
| `updated_at_max` | string | No | Show orders last updated at or before this date (ISO 8601 timestamp). |
| `updated_at_min` | string | No | Show orders last updated at or after this date (ISO 8601 timestamp). |
| `financial_status` | string | No | Filter orders by financial/payment status. Valid values: authorized, pending, paid, partially_paid, refunded, voided, partially_refunded, any, unpaid. |
| `processed_at_max` | string | No | Show orders processed at or before this date (ISO 8601 timestamp). |
| `processed_at_min` | string | No | Show orders processed at or after this date (ISO 8601 timestamp). |
| `attribution_app_id` | string | No | Show orders attributed to a specific app ID. Use 'current' to filter by the calling app. |
| `fulfillment_status` | string | No | Filter orders by fulfillment status. Valid values: shipped, partial, unshipped, any, unfulfilled. Use 'unfulfilled' or leave empty to get unfulfilled orders. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve refunds for order (Deprecated)

**Slug:** `SHOPIFY_LIST_ORDER_REFUNDS`

Retrieve a list of refunds for a Shopify order. Use when you need to check refund history for a specific order.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | The maximum number of results to retrieve. Default is 50, maximum is 250. |
| `fields` | string | No | Show only certain fields, specified by a comma-separated list of field names. |
| `order_id` | string | Yes | The unique identifier for the order whose refunds you want to retrieve. |
| `in_shop_currency` | boolean | No | Display amounts in the shop's base currency for underlying transactions. Default is false. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieves a list of orders (Deprecated)

**Slug:** `SHOPIFY_LIST_ORDERS`

Retrieves a list of orders from Shopify. Use when you need to fetch multiple orders with optional filtering by status, financial status, fulfillment status, or date ranges.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ids` | string | No | Comma-separated list of order IDs to retrieve specific orders. Can be a string or list of integers. |
| `limit` | integer | No | Maximum number of results per page. Range: 1-250. Default: 50. |
| `fields` | string | No | Comma-separated list of fields to include in the response (e.g., id,email,total_price). Can be a string or list of strings. |
| `status` | string ("open" | "closed" | "cancelled" | "any") | No | Filter orders by status. Valid values: open, closed, cancelled, any. Default: open. |
| `since_id` | string | No | Restrict results to orders after the specified ID (for pagination). |
| `created_at_max` | string | No | Show orders created at or before this date (ISO 8601 format). |
| `created_at_min` | string | No | Show orders created at or after this date (ISO 8601 format: YYYY-MM-DDTHH:MM:SS-HH:MM). |
| `updated_at_max` | string | No | Show orders last updated at or before this date (ISO 8601 format). |
| `updated_at_min` | string | No | Show orders last updated at or after this date (ISO 8601 format). |
| `financial_status` | string ("authorized" | "pending" | "paid" | "partially_paid" | "refunded" | "voided" | "partially_refunded" | "any") | No | Filter by payment status. Valid values: authorized, pending, paid, partially_paid, refunded, voided, partially_refunded, any. |
| `processed_at_max` | string | No | Show orders imported/processed at or before this date (ISO 8601 format). |
| `processed_at_min` | string | No | Show orders imported/processed at or after this date (ISO 8601 format). |
| `attribution_app_id` | string | No | Filter orders attributed to a specific app ID. Use 'current' for the calling app. |
| `fulfillment_status` | string ("shipped" | "partial" | "unshipped" | "any" | "unfulfilled") | No | Filter by fulfillment status. Valid values: shipped, partial, unshipped, any, unfulfilled. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve list of pages

**Slug:** `SHOPIFY_LIST_PAGES`

Retrieve a list of all pages from a Shopify store. Use when you need to fetch page content or metadata. As of version 2019-10, this endpoint implements pagination via response header links.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of results to show. Max: 250, default: 50 |
| `title` | string | No | Retrieve pages with a given title |
| `fields` | string | No | Comma-separated list of specific field names to display in response |
| `handle` | string | No | Retrieve a page with a given handle |
| `since_id` | string | No | Restrict results to pages after the specified ID |
| `created_at_max` | string | No | Show pages created before specified date. Format: ISO 8601 |
| `created_at_min` | string | No | Show pages created after specified date. Format: ISO 8601 (e.g., '2014-04-25T16:15:47-04:00') |
| `updated_at_max` | string | No | Show pages last updated before specified date. Format: ISO 8601 |
| `updated_at_min` | string | No | Show pages last updated after specified date. Format: ISO 8601 |
| `published_at_max` | string | No | Show pages published before specified date. Format: ISO 8601 |
| `published_at_min` | string | No | Show pages published after specified date. Format: ISO 8601 |
| `published_status` | string | No | Filter by publication status. Valid values: 'published', 'unpublished', or 'any'. Default: any |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Payment Terms Templates

**Slug:** `SHOPIFY_LIST_PAYMENT_TERMS_TEMPLATES`

Query payment terms templates from Shopify using the GraphQL API. Use when you need to retrieve available payment terms templates, optionally filtered by payment terms type.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `payment_terms_type` | string ("RECEIPT" | "FULFILLMENT" | "NET" | "FIXED") | No | Payment terms type classification. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Receive A List Of All Product Images

**Slug:** `SHOPIFY_LIST_PRODUCT_IMAGES`

Retrieve all images for a Shopify product. Use when you need to get the complete list of images associated with a specific product.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of product images to return. Accepted values are 1 to 250. Default is 50. |
| `fields` | string | No | A comma-separated list of fields to include in the response. Use to limit the returned data to only the fields you need. |
| `since_id` | integer | No | Return only product images after the specified ID. Use for cursor-based pagination through large result sets. |
| `product_id` | string | Yes | The unique identifier of the Shopify product for which to retrieve all images. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get product variants

**Slug:** `SHOPIFY_LIST_PRODUCT_VARIANTS`

Retrieve all variants for a specified product. Use when you need to list product variants with optional filtering by fields or pagination. Note: As of API version 2019-10, pagination is implemented via Link headers in the response.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of results per page. Default: 50, Maximum: 250. |
| `fields` | string | No | A comma-separated list of fields to include in the response. Use this to retrieve only specific fields you need. |
| `since_id` | integer | No | Restrict results to after the specified variant ID. Used for pagination to retrieve variants created after a specific ID. |
| `product_id` | string | Yes | The unique numeric identifier for the product whose variants you want to retrieve. |
| `presentment_currencies` | string | No | Return presentment prices in only certain currencies, specified by a comma-separated list of ISO 4217 currency codes. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get resource feedback

**Slug:** `SHOPIFY_LIST_RESOURCE_FEEDBACKS`

Retrieves the current resource feedback for the shop. Resource feedback is how your app communicates its setup/configuration status to merchants via the Shopify admin. Use this to check what feedback your app has previously submitted (e.g., whether you told merchants that action is required or that setup is successful). Returns empty array if no feedback exists, or a single feedback object representing the most recent status your app reported to Shopify.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve all script tags

**Slug:** `SHOPIFY_LIST_SCRIPT_TAGS`

Retrieves a list of all script tags. Use when you need to fetch all script tags or filter by URL, date range, or other criteria. Supports pagination via response headers (link-based pagination as of API version 2019-10).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `src` | string | No | Filters results by script URL. Only script tags with this exact URL will be returned. |
| `limit` | integer | No | Controls the quantity of results returned. Default: 50, Max: 250. |
| `fields` | string | No | Comma-separated list of specific fields to include in the response. Use this to restrict the returned script tags to only the specified properties. |
| `since_id` | string | No | Constrains output to records following a designated ID. Use for pagination to retrieve records after a specific script tag ID. |
| `created_at_max` | string | No | Shows tags created before this timestamp. Must be in ISO 8601 format. |
| `created_at_min` | string | No | Shows tags created after this timestamp. Must be in ISO 8601 format. |
| `updated_at_max` | string | No | Shows tags modified before this timestamp. Must be in ISO 8601 format. |
| `updated_at_min` | string | No | Shows tags modified after this timestamp. Must be in ISO 8601 format. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Theme Assets (Deprecated)

**Slug:** `SHOPIFY_LIST_THEME_ASSETS`

Retrieves metadata for theme assets (files that make up a theme: templates, images, stylesheets, snippets). Returns metadata only—not file content. To get actual file content, you must retrieve assets individually using a separate action. Use the asset_key parameter to retrieve a single asset, or omit it to list all assets in the theme.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fields` | string | No | Comma-separated list of asset fields to include in the response. Available fields: key, public_url, created_at, updated_at, content_type, size, checksum, theme_id. If omitted, all fields are returned. |
| `theme_id` | string | Yes | The ID of the theme whose assets you want to retrieve. |
| `asset_key` | string | No | The path of a specific asset within the theme to retrieve (e.g., 'assets/bg-body.gif', 'layout/theme.liquid'). If provided, only that single asset's metadata is returned instead of all assets. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve order transactions

**Slug:** `SHOPIFY_LIST_TRANSACTIONS`

Retrieves all transactions for a specific order. Use when you need to view payment exchanges for an order. Transactions include authorization, sale, capture, void, and refund types.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fields` | string | No | Comma-separated list of field names to show only certain fields in the response (e.g., 'id,kind,status'). |
| `order_id` | string | Yes | The unique identifier of the order whose transactions you want to retrieve. |
| `since_id` | integer | No | Retrieve only transactions after the specified transaction ID. |
| `in_shop_currency` | boolean | No | Set to true to retrieve transactions in the shop currency. Default is false, which returns presentment currency for multi-currency orders. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Mark Comment as Not Spam

**Slug:** `SHOPIFY_MARK_COMMENT_AS_NOT_SPAM`

Marks a comment as not spam in Shopify, restoring it to published or unapproved state. Use this to remove the spam designation from a comment that was incorrectly flagged. The comment status will change from 'spam' to either 'published' (if it was previously approved) or 'unapproved' (if it needs review).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `comment_id` | string | Yes | Unique numeric identifier for the comment to mark as not spam. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Mark Comment as Spam

**Slug:** `SHOPIFY_MARK_COMMENT_AS_SPAM`

Mark a comment as spam in Shopify. Use when you need to flag a comment as spam and remove it from visibility. When marked as spam, the comment status changes to 'spam', published_at is set to null, and it becomes invisible to blog readers.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `comment_id` | string | Yes | Unique numeric identifier for the comment to mark as spam. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Modify an existing product variant

**Slug:** `SHOPIFY_MODIFY_AN_EXISTING_PRODUCT_VARIANT`

Update an existing product variant in Shopify. Use when you need to modify variant properties like price, SKU, weight, or inventory settings.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `sku` | string | No | A unique identifier for the product variant in the shop (Stock Keeping Unit). |
| `price` | string | No | The selling price of the variant. |
| `weight` | number | No | The weight of the product variant in the unit system specified with weight_unit. |
| `barcode` | string | No | The barcode, UPC, or ISBN number for the product variant. |
| `option1` | string | No | The value of the first custom product option (e.g., Size, Color). |
| `option2` | string | No | The value of the second custom product option. |
| `option3` | string | No | The value of the third custom product option. |
| `taxable` | boolean | No | Whether a tax is charged when the product variant is sold. |
| `image_id` | integer | No | The unique numeric identifier for a product's image to associate with this variant. |
| `tax_code` | string | No | The tax code for the product variant. |
| `variant_id` | integer | Yes | The unique numeric identifier for the product variant to update. |
| `weight_unit` | string | No | The unit of measurement for the product variant's weight. Valid values: 'g', 'kg', 'oz', 'lb'. |
| `compare_at_price` | string | No | The original price of the item before an adjustment or a sale. Set to null to remove compare at price. |
| `inventory_policy` | string | No | Whether customers are allowed to place an order for the product variant when it's out of stock. Valid values: 'deny' (customers cannot order when out of stock), 'continue' (customers can order when out of stock). |
| `requires_shipping` | boolean | No | Whether the product variant requires shipping. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Modify existing webhook (Deprecated)

**Slug:** `SHOPIFY_MODIFY_EXISTING_WEBHOOK`

Modify an existing webhook subscription's address or other properties. Use when you need to update webhook delivery URIs, data formats, or field filters. Note: the webhook topic cannot be changed after creation.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fields` | array | No | Array of top-level resource fields to include in webhook POST requests. If omitted, all fields are included in the payload. |
| `format` | string ("json" | "xml") | No | Data format for transmission - either 'json' or 'xml'. Defaults to 'json' if not specified. |
| `address` | string | No | The destination URI where webhook POST requests are sent. Supports HTTPS endpoints, Google Pub/Sub (pubsub://projectName:topicName), and Amazon EventBridge ARN formats. This is the primary field for updating webhook delivery location. |
| `webhook_id` | string | Yes | The unique numeric identifier for the webhook subscription to modify. |
| `metafield_namespaces` | array | No | Array of metafield namespaces to include in webhook payloads. Allows filtering which metafields are sent with webhook events. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Move Fulfillment Order to New Location

**Slug:** `SHOPIFY_MOVE_FULFILLMENT_ORDER`

Move a fulfillment order from one merchant managed location to another. Use when you need to relocate unfulfilled items to a different location. The operation will fail if the fulfillment order is closed or if the destination location has never stocked the requested inventory item.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `new_location_id` | integer | Yes | The ID of the destination location where the fulfillment order will be moved. The destination location must have previously stocked the requested inventory item. |
| `fulfillment_order_id` | string | Yes | The unique identifier of the fulfillment order to move. |
| `fulfillment_order_line_items` | array | No | Array of fulfillment order line items to move. Each item must contain an ID and quantity. If omitted, all unfulfilled line items will be transferred to the new location. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Pin metafield definition

**Slug:** `SHOPIFY_PIN_METAFIELD_DEFINITION`

Pin a metafield definition in Shopify admin. Use when you need to organize metafields by pinning them to control their display order and visibility. Pinned metafields are automatically displayed in the admin interface.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `identifier` | object | No | Alternative method to identify metafield definition by owner type, namespace and key. |
| `definitionId` | string | No | The ID of the metafield definition to pin. Must be a Shopify GID in the format 'gid://shopify/MetafieldDefinition/{id}' or just the numeric ID. Either definitionId or identifier must be provided. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Query app by API key

**Slug:** `SHOPIFY_QUERY_APP_BY_KEY`

Query app information by API key using Shopify's GraphQL Admin API. Use when you need to retrieve metadata about a Shopify app using its client ID. Returns null if no app is found with the provided API key.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `api_key` | string | Yes | The client ID of the app to retrieve. This is the unique API key assigned to the application. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Query business entities

**Slug:** `SHOPIFY_QUERY_BUSINESS_ENTITIES`

Retrieve all business entities associated with the shop. Use when you need to view business entities for assigning to markets, managing payment providers per entity, or checking order attribution.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Query business entity

**Slug:** `SHOPIFY_QUERY_BUSINESS_ENTITY`

Query business entity information from Shopify. Use when you need to retrieve business entity details such as company name, address, and payment account information. If no ID is provided, returns the primary business entity.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | No | The ID of the business entity to retrieve. If omitted, returns the primary business entity. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Query catalogs

**Slug:** `SHOPIFY_QUERY_CATALOGS`

Queries catalogs from Shopify using the GraphQL Admin API. Catalogs control which products are published and how they're priced in different contexts such as international markets, B2B company locations, or specific sales channels.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `last` | integer | No | Number of final elements to retrieve. Use for backward pagination. |
| `type` | string ("APP" | "COMPANY_LOCATION" | "MARKET" | "NONE") | No | Type of catalog to filter by. |
| `after` | string | No | Cursor for elements following a specified position. Use with 'first' for forward pagination. |
| `first` | integer | No | Number of initial elements to retrieve. Use for forward pagination. |
| `query` | string | No | Custom filter using Shopify API search syntax. Example: 'status:ACTIVE' to filter by status. |
| `before` | string | No | Cursor for elements preceding a specified position. Use with 'last' for backward pagination. |
| `reverse` | boolean | No | Reverse the order of the results. Defaults to false (ascending order). |
| `sort_key` | string ("ID" | "TITLE") | No | Sort keys for catalogs. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Query channel by ID

**Slug:** `SHOPIFY_QUERY_CHANNEL`

Query a single Shopify channel by ID. Use when you need to retrieve detailed information about a specific sales channel including its associated app, name, handle, and publishing capabilities.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The ID of the Channel to return. Must be in the format: gid://shopify/Channel/{numeric_id} |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Query consent policy regions

**Slug:** `SHOPIFY_QUERY_CONSENT_POLICY_REGIONS`

Query the list of countries and regions for which consent policies can be created in Shopify. Use when you need to retrieve all available consent policy regions for compliance purposes.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Query current app installation

**Slug:** `SHOPIFY_QUERY_CURRENT_APP_INSTALLATION`

Query the currently authenticated app installation on a Shopify store. Use when you need to retrieve details about the current app's installation including access scopes, active subscriptions, launch URL, and uninstall URL.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Query current Shopify bulk operation

**Slug:** `SHOPIFY_QUERY_CURRENT_BULK_OPERATION`

Query the current Shopify bulk operation status. Use when you need to check if a bulk operation is running or to retrieve the status and results of the most recent bulk query or mutation operation.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `type` | string ("QUERY" | "MUTATION") | No | Determines whether to retrieve the most recent query or mutation bulk operation. Default: QUERY |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Query customer account pages

**Slug:** `SHOPIFY_QUERY_CUSTOMER_ACCOUNT_PAGES`

Queries customer account pages from Shopify using the GraphQL Admin API. Use when you need to retrieve customizable pages for customer accounts.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `last` | integer | No | Number of final elements to retrieve from the paginated list. Use for backward pagination. |
| `after` | string | No | Cursor for elements following a specified position. Use with 'first' for forward pagination. |
| `first` | integer | No | Number of initial elements to retrieve from the paginated list. Use for forward pagination. |
| `before` | string | No | Cursor for elements preceding a specified position. Use with 'last' for backward pagination. |
| `reverse` | boolean | No | Reverse the order of the underlying list. Defaults to false (ascending order). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Query deletion events

**Slug:** `SHOPIFY_QUERY_DELETION_EVENTS`

Query deletion events from Shopify. Use when you need to retrieve records of deleted resources such as products or collections. Deletion events are the only trace of a resource after it has been permanently removed.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `last` | integer | No | The last n elements before the `before` cursor. Use for backward pagination. Maximum value: 250. |
| `after` | string | No | Returns elements that come after the specified cursor. Use for forward pagination with the endCursor from pageInfo. |
| `first` | integer | No | The first n elements from the paginated list. Use for forward pagination. Maximum value: 250. |
| `query` | string | No | Query filter using search syntax. Supports filtering by 'id' and 'occurred_at' fields. Example: 'occurred_at:>2024-01-01' or 'id:12345'. |
| `before` | string | No | Returns elements that come before the specified cursor. Use for backward pagination with the startCursor from pageInfo. |
| `reverse` | boolean | No | Reverse the order of results. Default is false (ascending order). |
| `sort_key` | string ("CREATED_AT" | "ID") | No | Sort keys for deletion events. |
| `subject_types` | array | No | Filter deletion events by subject type. Defaults to all supported subject types. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Query disputes

**Slug:** `SHOPIFY_QUERY_DISPUTES`

Query Shopify Payments disputes using the GraphQL Admin API. Use when you need to retrieve information about payment disputes, including their status and initiation date. Supports pagination and filtering by status or ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `last` | integer | No | Return up to the last n elements from the paginated list. Use for backward pagination. |
| `after` | string | No | Returns the elements that come after the specified cursor. Use with 'first' for forward pagination. |
| `first` | integer | No | Return up to the first n elements from the paginated list. Use for forward pagination. |
| `query` | string | No | Search query for filtering results. Supports id and status filters. Example: 'status:WON' or 'id:12345'. |
| `before` | string | No | Returns the elements that come before the specified cursor. Use with 'last' for backward pagination. |
| `reverse` | boolean | No | Reverse the order of the underlying list. Defaults to false (ascending order). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Query domain

**Slug:** `SHOPIFY_QUERY_DOMAIN`

Query a specific domain by its ID from Shopify. Use when you need to retrieve domain details including host, URL, SSL status, and localization settings.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Globally unique identifier for the domain in the format gid://shopify/Domain/{numeric_id}. Example: gid://shopify/Domain/105313763522 |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Query events

**Slug:** `SHOPIFY_QUERY_EVENTS`

Query events from Shopify using the GraphQL Admin API. Events track actions performed on store resources like products, orders, collections, customers, and more. Use this to retrieve activity history, audit changes, monitor recent actions, or build activity feeds. Returns detailed information about each event including the action type, affected resource, timestamp, and description.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `last` | integer | No | Number of final elements to retrieve. Use for backward pagination. Maximum: 250. |
| `after` | string | No | Cursor for elements following a specified position. Use with 'first' for forward pagination. |
| `first` | integer | No | Number of initial elements to retrieve. Use for forward pagination. Maximum: 250. |
| `query` | string | No | Custom filter using Shopify API search syntax. Supported fields: action, comments, created_at, id, subject_type. Example: 'subject_type:PRODUCT' or 'action:create AND created_at:>2023-01-01'. |
| `before` | string | No | Cursor for elements preceding a specified position. Use with 'last' for backward pagination. |
| `reverse` | boolean | No | Reverse the order of the results. Defaults to false (ascending order). |
| `sort_key` | string ("ID" | "CREATED_AT") | No | Sort keys for events. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Query events count

**Slug:** `SHOPIFY_QUERY_EVENTS_COUNT`

Query the count of events in Shopify using the GraphQL Admin API. Use when you need to get the total number of events with optional filtering by date, subject type, or other criteria. Returns both the count and precision indicator.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `query` | string | No | Optional filter query for events. Use Shopify search syntax to filter events (e.g., 'created_at:>=2024-01-01' to filter by creation date, or 'subject_type:PRODUCT' to filter by resource type). If not provided, returns count of all events. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Query job

**Slug:** `SHOPIFY_QUERY_JOB`

Query a single job by its ID using Shopify's GraphQL API. Use when you need to check the status of an asynchronous job. Jobs track long-running operations like bulk operations, mutations, or imports.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The ID of the job to query. Must be a Shopify global ID format like gid://shopify/Job/00000000-0000-0000-0000-000000000000 |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Query metafield definition by ID

**Slug:** `SHOPIFY_QUERY_METAFIELD_DEFINITION`

Query metafield definition details by ID using Shopify's GraphQL Admin API. Use when you need to retrieve metadata about a metafield definition including its type, namespace, key, and usage count. Returns null if no metafield definition is found with the provided ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Global identifier for the metafield definition. Must be in the format: gid://shopify/MetafieldDefinition/XXX where XXX is the numeric ID. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Query metafield definitions

**Slug:** `SHOPIFY_QUERY_METAFIELD_DEFINITIONS`

Query metafield definitions from Shopify using the GraphQL Admin API. Use this to retrieve the schema and configuration of metafields for a specific resource type (PRODUCT, COLLECTION, CUSTOMER, etc.). Returns detailed information about each metafield definition including name, namespace, key, type, and validation rules.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `after` | string | No | Cursor for elements following a specified position. Use with 'first' for forward pagination. |
| `first` | integer | No | Number of metafield definitions to retrieve. Use for pagination. Maximum: 250. Defaults to 250. |
| `namespace` | string | No | Filter metafield definitions by namespace. Only returns definitions within the specified namespace. |
| `ownerType` | string ("PRODUCT" | "COLLECTION" | "CUSTOMER" | "ORDER" | "SHOP" | "COMPANY" | "LOCATION" | "COMPANY_LOCATION" | "VARIANT") | Yes | The resource type to filter metafield definitions by (e.g., PRODUCT, COLLECTION, CUSTOMER, ORDER). This determines which type of resource's metafield definitions will be returned. |
| `pinnedStatus` | string ("PINNED" | "UNPINNED" | "ANY") | No | Filter by pinned status of metafield definitions. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Query metafield definition types

**Slug:** `SHOPIFY_QUERY_METAFIELD_DEFINITION_TYPES`

Queries all available metafield definition types from Shopify using the GraphQL Admin API. Returns comprehensive information about each type including its category, supported validations, and migration capabilities. Use this to discover what metafield types can be created and what validation rules are available for each type.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Query node by ID

**Slug:** `SHOPIFY_QUERY_NODE`

Query any Shopify resource by its global ID using the node query. Use when you have a GID and need to retrieve the basic resource information.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The globally unique identifier (GID) in Relay format for the node to retrieve. Must be in the format gid://shopify/{ResourceType}/{numeric_id}. Examples: gid://shopify/Product/108828309, gid://shopify/Shop/64462848194, gid://shopify/Customer/123456789 |
| `fields` | string | No | Optional GraphQL inline fragment to query specific fields based on the node type. Example: '... on Shop { name email }' or '... on Product { title handle status }'. If not provided, only the id field will be returned. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Query nodes by IDs

**Slug:** `SHOPIFY_QUERY_NODES`

Query nodes by their IDs from the Shopify GraphQL Admin API. Use when you need to retrieve multiple Shopify objects by their global IDs (GIDs). Returns node objects with at least an id field, or null for non-existent nodes.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ids` | array | Yes | An array of ID values representing the IDs of the Nodes to return. IDs must be in Shopify GID format (e.g., gid://shopify/Product/123, gid://shopify/Shop/1, gid://shopify/Customer/456). Maximum of 250 IDs per request. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Query online store

**Slug:** `SHOPIFY_QUERY_ONLINE_STORE`

Query online store settings from Shopify using the GraphQL Admin API. Returns configuration information including password protection status. Use this to check if the online store is password protected or to retrieve other store-level settings.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Query product duplicate job

**Slug:** `SHOPIFY_QUERY_PRODUCT_DUPLICATE_JOB`

Query a product duplicate job by its ID using Shopify's GraphQL API. Use when you need to check the status of a product duplication operation.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The ID of the product duplicate job to query. Must be a Shopify global ID format like gid://shopify/ProductDuplicateJob/1234567890 |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Query public API versions

**Slug:** `SHOPIFY_QUERY_PUBLIC_API_VERSIONS`

Query available public API versions from Shopify using the GraphQL Admin API. Returns a list of all API versions with their support status. Use this to check which API versions are currently supported before making version-specific API calls.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Query publication by ID

**Slug:** `SHOPIFY_QUERY_PUBLICATION`

Query a single publication by ID using Shopify's GraphQL Admin API. Use when you need to retrieve detailed information about a specific publication including its name, auto-publish settings, future publishing support, and associated catalog.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Globally unique identifier for the publication in the format gid://shopify/Publication/{numeric_id}. Example: gid://shopify/Publication/1 |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Query server pixel configuration

**Slug:** `SHOPIFY_QUERY_SERVER_PIXEL`

Query the server pixel configuration in Shopify. Use when you need to retrieve the current server pixel settings including its ID, status, and webhook endpoint address.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Query Shop (GraphQL)

**Slug:** `SHOPIFY_QUERY_SHOP`

Retrieve shop information using the Shopify GraphQL Admin API. Use when you need shop-level configuration such as name, email, domain, currency settings, enabled features, and policies.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fields` | string | No | Optional GraphQL field selection string to customize which shop fields to retrieve. If not provided, a default set of commonly used fields will be returned. Example: 'name email myshopifyDomain currencyCode' |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Query shop billing preferences

**Slug:** `SHOPIFY_QUERY_SHOP_BILLING_PREFERENCES`

Query the shop's billing preferences from Shopify using the GraphQL Admin API. Use when you need to retrieve the currency used for billing apps and services.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Query Shopify Functions

**Slug:** `SHOPIFY_QUERY_SHOPIFY_FUNCTIONS`

Query Shopify Functions owned by the API client installed on the shop. Use when you need to retrieve functions that customize Shopify's backend logic such as discounts, checkout validation, and fulfillment.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `last` | integer | No | Number of final elements to retrieve. Use for backward pagination. |
| `after` | string | No | Cursor for elements following a specified position. Use with 'first' for forward pagination. |
| `first` | integer | No | Number of initial elements to retrieve. Use for forward pagination. |
| `before` | string | No | Cursor for elements preceding a specified position. Use with 'last' for backward pagination. |
| `apiType` | string | No | Filter the functions by the API type (e.g., 'product_discount', 'order_discount', 'shipping_discount'). |
| `reverse` | boolean | No | Reverse the order of the underlying list. Defaults to false (ascending order). |
| `useCreationUi` | boolean | No | Filter the functions by whether or not the function uses the creation UI in the Admin. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Query Shop Pay payment request receipts

**Slug:** `SHOPIFY_QUERY_SHOP_PAY_PAYMENT_REQUEST_RECEIPTS`

Query Shop Pay payment request receipts from Shopify using the GraphQL Admin API. Use when you need to retrieve and list Shop Pay payment request receipts. Note: This query requires API version 2026-01 or later.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `last` | integer | No | Number of final elements to return. Use for backward pagination. Cannot be used with 'first'. |
| `after` | string | No | Cursor for pagination - returns elements after this cursor. Use with 'first' for forward pagination. |
| `first` | integer | No | Number of initial elements to return. Use for forward pagination. Cannot be used with 'last'. |
| `query` | string | No | Filter query supporting created_at, id, source_identifier, and state fields. Use Shopify search syntax (e.g., 'state:completed' or 'created_at:>2024-01-01'). |
| `before` | string | No | Cursor for pagination - returns elements before this cursor. Use with 'last' for backward pagination. |
| `reverse` | boolean | No | Reverse the list order. When false (default), results are in ascending order by sort key. When true, results are in descending order. |
| `sort_key` | string ("ID") | No | Sort keys for Shop Pay payment request receipts. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Query standard metafield templates

**Slug:** `SHOPIFY_QUERY_STANDARD_METAFIELD_DEFINITION_TEMPLATES`

Query standard metafield definition templates from Shopify using the GraphQL Admin API. Returns preset metafield configurations with reserved namespace-key combinations for common use cases like product subtitles, care guides, or ISBN numbers.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `last` | integer | No | Number of final elements to retrieve. Use for backward pagination. Maximum: 250. |
| `after` | string | No | Cursor for elements following a specified position. Use with 'first' for forward pagination. |
| `first` | integer | No | Number of initial elements to retrieve. Use for forward pagination. Maximum: 250. |
| `before` | string | No | Cursor for elements preceding a specified position. Use with 'last' for backward pagination. |
| `reverse` | boolean | No | Reverse the order of the underlying list. Defaults to false. |
| `constraintStatus` | string | No | Filter templates by constraint status (MetafieldDefinitionConstraintStatus enum). Use this to filter templates based on their constraint validation requirements. |
| `excludeActivated` | boolean | No | Exclude templates that have already been activated in the store. Defaults to false. |
| `constraintSubtype` | string | No | Filter by resource subtype applicability (MetafieldDefinitionConstraintSubtypeIdentifier). Use this to find templates applicable to specific resource subtypes. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Query taxonomy

**Slug:** `SHOPIFY_QUERY_TAXONOMY`

Query Shopify's product taxonomy using the GraphQL Admin API. Use when you need to explore product categories, discover the taxonomy hierarchy, or find appropriate categories for products. Returns taxonomy categories that can be filtered by search terms or hierarchy relationships.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `last` | integer | No | Number of items to return from end (backward pagination). Maximum: 250. |
| `after` | string | No | Cursor for forward pagination. Use the endCursor from previous response. |
| `first` | integer | No | Number of items to return (forward pagination). Maximum: 250. |
| `before` | string | No | Cursor for backward pagination. Use the startCursor from previous response. |
| `search` | string | No | Search term to locate matching categories across the taxonomy. |
| `childrenOf` | string | No | ID of category to retrieve direct children from. Use this to explore the next level of the taxonomy hierarchy. |
| `siblingsOf` | string | No | ID of category to get categories at the same hierarchy level. Returns categories that share the same parent. |
| `descendantsOf` | string | No | ID of category to fetch all nested categories below. Returns the complete subtree of categories. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Query webhook subscription by ID

**Slug:** `SHOPIFY_QUERY_WEBHOOK_SUBSCRIPTION`

Retrieve webhook subscription details by ID using the Shopify GraphQL Admin API. Use when you need to inspect webhook configuration, endpoint details, or subscription metadata.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The globally unique identifier (GID) for the webhook subscription to retrieve. Must be in the format gid://shopify/WebhookSubscription/{numeric_id}. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Query webhook subscriptions

**Slug:** `SHOPIFY_QUERY_WEBHOOK_SUBSCRIPTIONS`

Query webhook subscriptions from Shopify using the GraphQL Admin API. Returns a paginated list of webhook subscriptions with their topics, endpoints (HTTP or PubSub), and formats. Use this to view all configured webhook subscriptions for your Shopify store.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `after` | string | No | Cursor for elements following a specified position. Use with 'first' for forward pagination. |
| `first` | integer | No | Number of webhook subscriptions to retrieve. Maximum: 250. |
| `query` | string | No | Custom GraphQL query string to override the default query. If not provided, a default query retrieving id, topic, endpoint, and format will be used. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get product images count (Deprecated)

**Slug:** `SHOPIFY_RECEIVE_A_COUNT_OF_ALL_PRODUCT_IMAGES`

Retrieves the total count of images for a Shopify product. Use when you need to know how many images are associated with a specific product.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `product_id` | string | Yes | The unique identifier for the Shopify product whose images are to be counted. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Receive a single fulfillment

**Slug:** `SHOPIFY_RECEIVE_A_SINGLE_FULFILLMENT`

Retrieve detailed information about a specific fulfillment for an order. Use when you need to check the status, tracking details, or line items of a fulfillment.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `order_id` | string | Yes | The unique numeric identifier for the order containing the fulfillment. |
| `fulfillment_id` | string | Yes | The unique identifier for the specific fulfillment to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Receive a single webhook (Deprecated)

**Slug:** `SHOPIFY_RECEIVE_A_SINGLE_WEBHOOK`

Retrieves detailed information about a specific webhook subscription by its ID. Use this tool when you need to: - View configuration details of an existing webhook (address, topic, format) - Check webhook metadata (API version, metafield namespaces, creation/update timestamps) - Verify a webhook exists before performing operations on it - Inspect which fields are being sent in webhook payloads Returns complete webhook subscription details including delivery destination, event topic, data format (JSON/XML), and any field or metafield filtering configurations.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fields` | string | No | Comma-separated list of specific properties to return. Restricts the response to only those properties specified. |
| `webhook_id` | string | Yes | The unique numeric identifier for the webhook subscription to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Release fulfillment hold

**Slug:** `SHOPIFY_RELEASE_FULFILLMENT_HOLD`

Releases the fulfillment hold on a fulfillment order, allowing fulfillment work to proceed. Use when you need to resume fulfillment on an order that was previously placed on hold. The fulfillment order status will change from on_hold to open, and the fulfillment_holds array will be emptied.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fulfillment_order_id` | string | Yes | The unique identifier of the fulfillment order to release from hold. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Release fulfillment order hold (Deprecated)

**Slug:** `SHOPIFY_RELEASE_FULFILLMENT_ORDER_HOLD`

Release all fulfillment holds on a fulfillment order. Use when you need to resume fulfillment work after holds have been resolved.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fulfillment_order_id` | string | Yes | The unique identifier of the fulfillment order to release holds from. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Reopen a closed order

**Slug:** `SHOPIFY_REOPEN_CLOSED_ORDER`

Reopens a previously closed Shopify order. Use when an order needs to be modified after being closed.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `order_id` | string | Yes | The unique identifier of the closed Shopify order to reopen. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Restore Comment

**Slug:** `SHOPIFY_RESTORE_COMMENT`

Restores a previously removed comment, changing its status back to 'published'. Use when you need to reactivate a comment that was removed. Note: This action requires protected customer data access approval because comments contain customer information (author, email, IP). The app must be approved to access REST endpoints with protected customer data.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `comment_id` | integer | Yes | The unique numeric identifier for the comment to restore. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve a specific metafield (Deprecated)

**Slug:** `SHOPIFY_RETRIEVE_A_SPECIFIC_METAFIELD`

Retrieve a metafield by specifying the ID. Use when you need to fetch a specific metafield from any Shopify resource (products, customers, orders, etc.).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fields` | string | No | Comma-separated list of field names to retrieve. Limits response to only specified fields. If not provided, all fields are returned. |
| `resource_id` | string | No | Unique ID of the owner resource. Required for all resource types except 'shop'. When resource_type is 'shop', this parameter should be omitted or set to None. |
| `metafield_id` | string | Yes | Unique ID of the metafield to retrieve. |
| `resource_type` | string ("articles" | "blogs" | "collections" | "customers" | "draft_orders" | "locations" | "orders" | "pages" | "products" | "product_images" | "product_variants" | "shop" | "smart_collections") | Yes | Type of resource owning the metafield. Must be in plural form (e.g., 'products', 'customers', 'orders'). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get resource metafields

**Slug:** `SHOPIFY_RETRIEVE_LIST_METAFIELDS_RESOURCE_S_ENDPOINT`

Retrieve metafields attached to any Shopify resource by using the resource's endpoint. Use when you need to fetch metafields for a specific resource instance (products, customers, orders, collections, etc.).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `key` | string | No | Filters metafields by key (3-64 characters). Used with namespace to get a specific metafield. |
| `limit` | integer | No | Number of results per page. Default: 50, Maximum: 250. |
| `fields` | string | No | Comma-separated list of specific fields to retrieve in the response. |
| `resource` | string ("articles" | "blogs" | "collections" | "smart_collections" | "customers" | "draft_orders" | "locations" | "orders" | "pages" | "products" | "product_images" | "product_variants") | Yes | The resource type to retrieve metafields from. Supported types: articles, blogs, collections, smart_collections, customers, draft_orders, locations, orders, pages, products, product_images, product_variants. For shop metafields, use the 'Get metafields' action instead. |
| `since_id` | string | No | Retrieves metafields created after the specified ID. Used for pagination. |
| `namespace` | string | No | Filters metafields by namespace (3-255 characters). If omitted, returns metafields from all namespaces. |
| `resource_id` | string | Yes | The unique identifier of the specific resource to retrieve metafields for. |
| `created_at_max` | string | No | ISO 8601 format; shows metafields created before this date. |
| `created_at_min` | string | No | ISO 8601 format; shows metafields created after this date. |
| `metafield_type` | string | No | Filters by metafield data type (e.g., 'single_line_text_field', 'number_integer', 'json', 'date'). |
| `updated_at_max` | string | No | ISO 8601 format; shows metafields modified before this date. |
| `updated_at_min` | string | No | ISO 8601 format; shows metafields modified after this date. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve abandoned checkouts (Deprecated)

**Slug:** `SHOPIFY_RETRIEVES_A_LIST_OF_ABANDONED_CHECKOUTS`

Retrieves a list of abandoned checkouts from Shopify. Use this when you need to access abandoned checkout data for recovery campaigns, remarketing, or analytics. An abandoned checkout occurs when a customer adds contact information but doesn't complete their purchase. IMPORTANT: This endpoint requires 'Protected Customer Data' access approval from Shopify, which must be requested through the Partner Dashboard. Without this approval, requests will return a 403 Forbidden error. Note: The REST Checkout API is deprecated as of API version 2024-07. Consider migrating to the GraphQL Admin API for new implementations. Pagination is implemented via links in the response header.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of abandoned checkouts to retrieve. Must be less than or equal to 250. Defaults to 50 if not specified. |
| `status` | string | No | Filter checkouts by status. Valid values: 'open' or 'closed'. Defaults to 'open' if not specified. |
| `since_id` | string | No | Restrict results to checkouts after the specified ID. Used for pagination. |
| `created_at_max` | string | No | Show checkouts created before this date. Format: ISO 8601 datetime (e.g., '2024-12-31T23:59:59Z'). |
| `created_at_min` | string | No | Show checkouts created after this date. Format: ISO 8601 datetime (e.g., '2024-01-01T00:00:00Z'). |
| `updated_at_max` | string | No | Show checkouts updated before this date. Format: ISO 8601 datetime. |
| `updated_at_min` | string | No | Show checkouts updated after this date. Format: ISO 8601 datetime. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieves a list of all article tags (Deprecated)

**Slug:** `SHOPIFY_RETRIEVES_A_LIST_OF_ALL_ARTICLE_TAGS`

Retrieves all article tags used across all blogs in the Shopify shop. Use this to: - Discover available tags for filtering or categorizing blog content - Identify popular tags to understand trending topics - Build tag clouds or navigation elements for blog sections - Analyze content organization across your blogs Optional: Use 'limit' to retrieve a subset, or 'popular=1' to get the most frequently used tags first.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of tags to retrieve. If not specified, all tags are returned. Use this to limit the response size when you only need a subset of available tags. |
| `popular` | integer | No | When present (set to any value, typically 1), results are ordered by popularity, starting with the most frequently used tags first. Omit this parameter for default alphabetical ordering. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Price Rules List

**Slug:** `SHOPIFY_RETRIEVES_A_LIST_OF_PRICE_RULES`

Retrieve a list of price rules from a Shopify store. Use when you need to view all discount pricing rules with optional filtering by date ranges and usage. Note: As of version 2019-10, pagination is implemented via Link headers in the response.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of price rules to retrieve. Must be between 1 and 250. Default is 50. |
| `since_id` | string | No | Restricts results to price rules after the specified ID. Used for pagination. |
| `times_used` | integer | No | Show price rules with the specified number of times used. |
| `ends_at_max` | string | No | Show price rules ending before this date. Format: ISO 8601 (e.g., 2017-03-25T16:15:47-04:00). |
| `ends_at_min` | string | No | Show price rules ending after this date. Format: ISO 8601 (e.g., 2017-03-25T16:15:47-04:00). |
| `starts_at_max` | string | No | Show price rules starting before this date. Format: ISO 8601 (e.g., 2017-03-25T16:15:47-04:00). |
| `starts_at_min` | string | No | Show price rules starting after this date. Format: ISO 8601 (e.g., 2017-03-25T16:15:47-04:00). |
| `created_at_max` | string | No | Show price rules created before this date. Format: ISO 8601 (e.g., 2017-03-25T16:15:47-04:00). |
| `created_at_min` | string | No | Show price rules created after this date. Format: ISO 8601 (e.g., 2017-03-25T16:15:47-04:00). |
| `updated_at_max` | string | No | Show price rules last updated before this date. Format: ISO 8601 (e.g., 2017-03-25T16:15:47-04:00). |
| `updated_at_min` | string | No | Show price rules last updated after this date. Format: ISO 8601 (e.g., 2017-03-25T16:15:47-04:00). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve a list of products (Deprecated)

**Slug:** `SHOPIFY_RETRIEVES_A_LIST_OF_PRODUCTS`

Retrieve a list of products from Shopify. Use when you need to fetch products with filtering options like status, vendor, product type, or date ranges. Supports pagination with limit and since_id parameters.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ids` | string | No | Return only products specified by a comma-separated list of product IDs. Example: '632910392,921728736' |
| `limit` | integer | No | Return up to this many results per page. Maximum: 250, Default: 50 |
| `fields` | string | No | Return specific fields by comma-separated list. Available fields: admin_graphql_api_id, body_html, created_at, handle, id, image, images, options, product_type, published_at, published_scope, status, tags, template_suffix, title, updated_at, variants, vendor |
| `handle` | string | No | Return only products specified by a comma-separated list of product handles |
| `status` | string | No | Filter products by status. Valid values: 'active', 'archived', 'draft' |
| `vendor` | string | No | Filter products by vendor name |
| `since_id` | string | No | Return only products after the specified ID (used for pagination) |
| `product_type` | string | No | Return products by product type |
| `collection_id` | string | No | Return products by product collection ID |
| `created_at_max` | string | No | Return products created before specified date (ISO 8601 format) |
| `created_at_min` | string | No | Return products created after specified date (ISO 8601 format: 2014-04-25T16:15:47-04:00) |
| `updated_at_max` | string | No | Return products updated before specified date (ISO 8601 format) |
| `updated_at_min` | string | No | Return products updated after specified date (ISO 8601 format) |
| `published_at_max` | string | No | Return products published before specified date (ISO 8601 format) |
| `published_at_min` | string | No | Return products published after specified date (ISO 8601 format) |
| `presentment_currencies` | string | No | Return presentment prices in specific currencies (comma-separated ISO 4217 currency codes) |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieves a list of webhooks (Deprecated)

**Slug:** `SHOPIFY_RETRIEVES_A_LIST_OF_WEBHOOKS`

Retrieve a list of webhook subscriptions for a Shopify shop. Use when you need to view all configured webhook subscriptions or filter webhooks by specific criteria such as topic, address, or creation date.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of results to return (must be ≤250, defaults to 50 if not specified). |
| `topic` | string | No | Filter by event type that triggers the webhook. Valid topics include orders/create, products/update, customers/create, etc. |
| `fields` | string | No | Comma-separated list of specific webhook properties to return in the response. If not specified, all properties are returned. |
| `address` | string | No | Filter webhooks by destination URI where webhook POST requests are sent. |
| `since_id` | string | No | Return only webhooks with IDs greater than the specified value. Used for pagination. |
| `created_at_max` | string | No | Filter webhooks created at or before this date and time in ISO 8601 format. |
| `created_at_min` | string | No | Filter webhooks created at or after this date and time in ISO 8601 format. |
| `updated_at_max` | string | No | Filter webhooks updated at or before this date and time in ISO 8601 format. |
| `updated_at_min` | string | No | Filter webhooks updated at or after this date and time in ISO 8601 format. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieves an order count (Deprecated)

**Slug:** `SHOPIFY_RETRIEVES_AN_ORDER_COUNT`

Retrieves the count of orders matching specified filters. Use when you need to know how many orders exist with specific criteria (status, dates, financial status, etc.).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ids` | string | No | Filter by specific order IDs. Format: Comma-separated list of order IDs. |
| `status` | string ("open" | "closed" | "cancelled" | "any") | No | Filter by order status. Valid values: 'open', 'closed', 'cancelled', 'any'. |
| `created_at_max` | string | No | Count orders created at or before this date. Format: ISO 8601. |
| `created_at_min` | string | No | Count orders created at or after this date. Format: ISO 8601 (e.g., '2024-01-01T00:00:00Z'). |
| `updated_at_max` | string | No | Count orders updated at or before this date. Format: ISO 8601. |
| `updated_at_min` | string | No | Count orders updated at or after this date. Format: ISO 8601. When using updated_at parameters, add status=any to include all orders regardless of status. |
| `financial_status` | string ("authorized" | "pending" | "paid" | "partially_paid" | "refunded" | "voided" | "partially_refunded" | "any" | "unpaid") | No | Filter by financial/payment status. Valid values: 'authorized', 'pending', 'paid', 'partially_paid', 'refunded', 'voided', 'partially_refunded', 'any', 'unpaid'. |
| `processed_at_max` | string | No | Count orders processed at or before this date. Format: ISO 8601. |
| `processed_at_min` | string | No | Count orders processed at or after this date. Format: ISO 8601. |
| `attribution_app_id` | string | No | Filter by attribution app. Use 'current' to retrieve orders created by your app. |
| `fulfillment_status` | string ("fulfilled" | "partial" | "not_eligible" | "any") | No | Filter by fulfillment status. Valid values: null (unfulfilled), 'fulfilled', 'partial', 'not_eligible', 'any'. Note: Use empty string or omit for unfulfilled orders. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve a single location by its ID (Deprecated)

**Slug:** `SHOPIFY_RETRIEVES_A_SINGLE_LOCATION_BY_ITS_ID`

Retrieves detailed information about a specific Shopify location by its ID. A location represents a physical or virtual place where a shop's products are stocked, and from which orders can be fulfilled. This includes retail stores, warehouses, pop-up shops, and dropshipping locations. Use this action when you need to: - Get complete details about a specific location (address, contact info, status) - Verify if a location is active and can fulfill orders - Check location attributes before inventory or fulfillment operations - Display location information to users Requires the 'read_locations' OAuth scope.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `location_id` | string | Yes | The unique numeric identifier of the location to retrieve. You can find location IDs by listing all locations or in the Shopify admin under Settings > Locations. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get order risk by ID

**Slug:** `SHOPIFY_RETRIEVES_A_SINGLE_ORDER_RISK_BY_ITS_ID`

Retrieves a single order risk assessment by its unique ID. Use this action when you need details about a specific risk assessment (e.g., to check its recommendation, score, or message). If you need all risk assessments for an order, use the "Get order risks" action instead. **Important:** This REST API endpoint is deprecated as of API version 2025-10. For new implementations, use the GraphQL OrderRiskAssessment API. See: https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderRiskAssessment **Access requirements:** Requires read_orders scope with merchant approval for protected customer data.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `risk_id` | string | Yes | The unique identifier of the specific risk record to retrieve. |
| `order_id` | string | Yes | The unique identifier of the order containing the risk assessment. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve Single Price Rule (Deprecated)

**Slug:** `SHOPIFY_RETRIEVES_A_SINGLE_PRICE_RULE`

Retrieves a single price rule by its unique identifier. Use when you need to get detailed information about a specific discount rule including its value, target type, customer selection, prerequisites, and entitlements.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `price_rule_id` | string | Yes | The unique identifier for the price rule to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve a single product (Deprecated)

**Slug:** `SHOPIFY_RETRIEVES_A_SINGLE_PRODUCT`

Retrieves a single product by its unique product ID. Use when you need to get detailed information about a specific product including its variants, images, and options.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fields` | string | No | A comma-separated list of fields to include in the response. This allows you to retrieve only specific fields instead of the entire product object. |
| `product_id` | string | Yes | The unique identifier for the product to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve Specific Fulfillment Event (Deprecated)

**Slug:** `SHOPIFY_RETRIEVES_A_SPECIFIC_FULFILLMENT_EVENT`

Retrieves a specific fulfillment event by its ID. **DEPRECATED**: This endpoint is deprecated as of Shopify REST Admin API 2024-10. Consider using the list fulfillment events endpoint instead to retrieve all events and filter by ID. Use this tool when you need detailed tracking information for a specific fulfillment event, including delivery status, location data (address, city, country, coordinates), timestamps, and carrier messages. Fulfillment events track the shipment progress and are displayed on customer order status pages. Note: Requires valid order_id, fulfillment_id, and event_id. All three IDs must correspond to existing resources in the store.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `event_id` | string | Yes | The ID of the fulfillment event to retrieve. |
| `order_id` | string | Yes | The ID of the order that's associated with the fulfillment event. |
| `fulfillment_id` | string | Yes | The ID of the fulfillment that's associated with the fulfillment event. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List article tags from blog (Deprecated)

**Slug:** `SHOPIFY_RETRIEVES_LIST_ALL_ARTICLE_TAGS_SPECIFIC_BLOG`

Retrieve a list of all article tags from a specific blog. Use when you need to get all unique tags that have been applied to articles within a particular blog, optionally sorted by popularity.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | The maximum number of tags to retrieve. If not specified, all tags are returned. |
| `blog_id` | string | Yes | The unique identifier for the blog from which to retrieve article tags. |
| `popular` | integer | No | A flag for ordering retrieved tags by popularity. When set to 1, orders the retrieved tags by popularity, starting with the most popular tag. If not present, tags are returned in default order. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve Discount Codes for Batch Job (Deprecated)

**Slug:** `SHOPIFY_RETRIEVES_LIST_DISCOUNT_CODES_DISCOUNT_CODE`

Retrieve a list of discount codes for a discount code creation job. Use when you need to check the status of a batch discount code creation job and see which codes were successfully created and which encountered errors.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `batch_id` | integer | Yes | The ID of the discount code creation job. |
| `price_rule_id` | integer | Yes | The ID of the price rule associated with the batch discount code creation job. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve storefront access tokens (Deprecated)

**Slug:** `SHOPIFY_RETRIEVES_LIST_STOREFRONT_ACCESS_TOKENS_THAT_HAVE`

Retrieves a list of storefront access tokens that have been issued for the shop. Use when you need to view all active storefront access tokens and their associated permissions. The app must have at least one unauthenticated access scope to use this endpoint.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve specific fulfillment order

**Slug:** `SHOPIFY_RETRIEVE_SPECIFIC_FULFILLMENT_ORDER`

Retrieve a specific fulfillment order by its ID. Use when you need detailed information about a particular fulfillment order including line items, destination, and status.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fulfillment_order_id` | string | Yes | The unique identifier for the fulfillment order to retrieve. |
| `include_financial_summaries` | boolean | No | Include the financial summary data for each line item, if available. Defaults to false. |
| `include_order_reference_fields` | boolean | No | Indicates whether the order reference fields should be returned in the result. Defaults to false. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve Shop Configuration (Deprecated)

**Slug:** `SHOPIFY_RETRIEVES_THE_SHOP_S_CONFIGURATION`

Retrieve the shop's configuration and general business settings. Use when you need to access shop information such as name, domain, timezone, currency, contact details, or plan information.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fields` | string | No | A comma-separated list of fields to include in the response. This allows you to retrieve only specific fields from the shop object instead of the entire object. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Revoke app access scopes

**Slug:** `SHOPIFY_REVOKE_APP_ACCESS_SCOPES`

Revoke previously granted access scopes from an app installation. Use when you need to reduce an app's permissions without completely uninstalling it, providing granular control over what data and functionality the app can access.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `scopes` | array | Yes | List of scope handles to revoke from the app installation. Each handle follows the format '{action}_{resource}' (e.g., 'read_products', 'write_customers'). Only scopes currently granted to the app can be revoked. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Run bulk mutation operation

**Slug:** `SHOPIFY_RUN_BULK_MUTATION_OPERATION`

Create and run a bulk operation to import data asynchronously by executing a GraphQL mutation multiple times. Use when you need to perform bulk mutations like creating/updating many products, variants, or other resources from a JSONL file. Each line in your JSONL file is processed as a separate mutation execution. Results are delivered in a JSONL file when complete. Note: Only one bulk mutation operation can run at a time per shop (though bulkOperationRunQuery can run simultaneously).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `mutation` | string | Yes | The GraphQL mutation to be executed in bulk for each line in the JSONL file. Must be a valid Shopify GraphQL mutation that accepts input variables. The mutation will be executed once for each line in the staged JSONL file, with the line data passed as variables. |
| `client_identifier` | string | No | An optional identifier which may be used for querying the bulk operation. Helpful for tracking and debugging specific bulk mutation operations. |
| `staged_upload_path` | string | Yes | The staged upload path of the JSONL file containing mutation variables for each bulk operation execution. Each line in the JSONL file represents one mutation execution with its input data. Must be a valid path returned from a prior staged upload operation (e.g., 'tmp/64462848194/bulk/2a868b95-25df-4a26-b6e6-e82a6a7e4b5b/bulk-mutation-input.jsonl'). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Run Shopify bulk operation query

**Slug:** `SHOPIFY_RUN_BULK_OPERATION_QUERY`

Create and start a Shopify GraphQL bulk operation for asynchronous data fetching. Use when you need to retrieve large datasets from Shopify without pagination. The operation runs in the background and results are available in a JSONL file for up to seven days after completion. Only one bulk query operation can run at a time per shop. Query must include at least one connection field.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `query` | string | Yes | The GraphQL query that will be executed asynchronously. Must include at least one connection field (edges/nodes structure). Supports up to five connections with maximum nesting depth of two levels. The query should NOT include the mutation wrapper - only provide the inner query part. |
| `groupObjects` | boolean | No | Enables grouping objects directly under their corresponding parent objects in JSONL output. When true, groups related objects together which is useful for nested data but slows down bulk operations and increases likelihood of timeouts. Only enable if you specifically need the grouped format. Default is false. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Search Gift Cards

**Slug:** `SHOPIFY_SEARCHES_FOR_GIFT_CARDS`

Search for gift cards that match a supplied query. Use when searching for gift cards by various indexed fields including created_at, updated_at, disabled_at, balance, initial_value, amount_spent, email, and last_characters. Supports cursor-based pagination via Link headers.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of gift cards to return per page. Must be between 1 and 250. Default: 50. |
| `order` | string | No | The field and direction to order results by. Default: disabled_at DESC. |
| `query` | string | No | Text to search for gift cards. Supports field-specific syntax (field:value) for indexed fields: created_at, updated_at, disabled_at, balance, initial_value, amount_spent, email, last_characters. Examples: 'last_characters:mnop', 'balance:100.00', 'email:customer@example.com', 'amount_spent:50.00'. Use '*' to return all gift cards. |
| `fields` | string | No | Comma-separated list of field names to return only specific fields in the response. |
| `page_info` | string | No | Cursor token for pagination. Obtained from Link header in previous responses. When using page_info, only limit and fields parameters can be included. |
| `created_at_max` | string | No | Show gift cards created at or before this date. Format: ISO 8601 date/datetime string. |
| `created_at_min` | string | No | Show gift cards created at or after this date. Format: ISO 8601 date/datetime string. |
| `updated_at_max` | string | No | Show gift cards last updated at or before this date. Format: ISO 8601 date/datetime string. |
| `updated_at_min` | string | No | Show gift cards last updated at or after this date. Format: ISO 8601 date/datetime string. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Send Account Invite to Customer (Deprecated)

**Slug:** `SHOPIFY_SEND_CUSTOMER_ACCOUNT_INVITE`

Sends an account activation invite email to an existing customer, allowing them to set up their online store account. Use this action to: - Send account activation emails to newly created customers who haven't activated their accounts yet - Resend activation invites to customers who didn't receive or lost the original email - Send custom invitation emails with personalized subject lines and messages The customer must not already have an active account. If the customer has already activated their account, this action will fail with a 422 error.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `to` | string | No | The recipient's email address for the account invitation. If not provided, uses the customer's existing email address. |
| `bcc` | array | No | Email addresses to receive blind carbon copies of the invitation. |
| `from` | string | No | The sender's email address (typically the shop owner's email). If not provided, uses the default shop email. |
| `subject` | string | No | Custom subject line for the invitation email. If not provided, uses the default subject line 'Customer account activation'. |
| `customer_id` | string | Yes | The unique identifier for the customer to send the account invite to. |
| `custom_message` | string | No | Additional personalized text to include in the invitation body. If not provided or empty, uses the default message. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Send Customer Account Invite

**Slug:** `SHOPIFY_SEND_CUSTOMER_INVITE`

Sends an account invitation email to a customer, allowing them to create or activate their Shopify account. The invitation includes a link for the customer to set up their account credentials. This action is useful when you want customers to have direct access to their order history and account details. You can customize the invitation with a personalized message and subject line, or use the store's default invitation template. Note: Requires the 'write_customers' scope. The customer must not already have an active account to receive an invitation.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `to` | string | No | The recipient's email address for the account invitation. If not provided, the invitation will be sent to the customer's existing email address on file. Use this when you want to send the invite to a different email than the one associated with the customer record. |
| `bcc` | array | No | Email addresses to receive blind carbon copies of the invitation. |
| `from` | string | No | The sender's email address shown in the 'From' field of the invitation email. If not provided, uses the store's default notification email address. This is typically the shop owner's email. |
| `subject` | string | No | Custom subject line for the invitation email. If not provided, Shopify uses the default subject line 'You've been invited to activate your account'. Customize this to make the invitation more personal or relevant to your brand. |
| `customer_id` | string | Yes | The unique identifier for the customer to send the account invite to. |
| `custom_message` | string | No | Additional personalized text to include in the body of the invitation email. This message appears in the email along with the standard invitation text and activation link. Use this to add a personal touch or provide additional context about your store. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Send an invoice

**Slug:** `SHOPIFY_SEND_INVOICE`

Send an invoice email for a draft order to a customer. Use when you need to email an invoice to a customer for a specific draft order.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `draft_order_id` | string | Yes | The numeric identifier of the draft order to send the invoice for. |
| `draft_order_invoice` | object | No | Draft order invoice details for sending an invoice email. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Set Default Customer Address

**Slug:** `SHOPIFY_SET_DEFAULT_CUSTOMER_ADDRESS`

Set a specific address as the default address for a customer. Use when you need to mark an address as default for tax and shipping calculations. The default address cannot be deleted.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `address_id` | string | Yes | The unique identifier for the address to set as the default address for the customer. The default address is used for tax and shipping calculations. |
| `customer_id` | string | Yes | The unique identifier for the customer whose address will be set as default. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Set Fulfillment Orders Deadline

**Slug:** `SHOPIFY_SET_FULFILLMENT_ORDERS_DEADLINE`

Set the latest fulfillment deadline for multiple fulfillment orders. Use when you need to update deadline for one or more fulfillment orders.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fulfillment_deadline` | string | Yes | The new fulfillment deadline in ISO 8601 format with timezone (e.g., '2025-12-30T10:00:00-05:00') |
| `fulfillment_order_ids` | array | Yes | Array of fulfillment order IDs for which the deadline applies |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Set inventory level

**Slug:** `SHOPIFY_SET_INVENTORY_LEVEL`

Set inventory level for an item at a location. Use when you need to establish or update inventory quantity for a specific item at a designated location. If the location isn't already connected, the connection occurs automatically. The inventory item must have inventory tracking enabled before setting inventory levels.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `available` | integer | Yes | The quantity to be set in inventory. This is the available quantity of the inventory item at the location. |
| `location_id` | string | Yes | The ID of the location where the inventory level will be set. To find the ID of the location, use the Location resource. |
| `inventory_item_id` | string | Yes | The ID of the inventory item to set the level for. The inventory item must have inventory tracking enabled. To find the ID of the inventory item, use the Inventory Item resource. |
| `disconnect_if_necessary` | boolean | No | Whether inventory for any previously connected locations will be set to 0 and the locations disconnected. Omit unless Shopify requires this for fulfillment service locations. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Set metafields

**Slug:** `SHOPIFY_SET_METAFIELDS`

Create or update multiple metafields in a single operation using the metafieldsSet GraphQL mutation. Use when you need to set custom metadata on Shopify resources like shops, products, customers, or orders. Supports up to 25 metafields per request.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `metafields` | array | Yes | Array of metafield inputs to set. Maximum of 25 metafields per request. Minimum of 1 metafield required. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Trigger Shopify Flow

**Slug:** `SHOPIFY_TRIGGER_SHOPIFY_FLOW`

Trigger Shopify Flow workflows that begin with the specified trigger handle. Use when you need to manually activate Flow automation workflows from your app. The payload must be under 50 KB and match the trigger's expected schema. To learn more, refer to Create Shopify Flow triggers documentation.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `handle` | string | No | The unique handle of the Flow trigger to activate. This identifies which Shopify Flow workflows should be triggered. If not provided, all workflows that use this trigger will be activated. |
| `payload` | object | No | The JSON payload data needed to run the trigger (must be under 50 KB). This data is passed to the Flow workflows that begin with the specified trigger. The structure should match the trigger's expected input schema. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update app subscription line item capped amount

**Slug:** `SHOPIFY_UPDATE_APP_SUBSCRIPTION_LINE_ITEM`

Update the capped amount on usage-based billing for an app subscription line item. Use when adjusting usage limits based on merchant needs or changing pricing models. The mutation returns a confirmation URL where the merchant must approve the new pricing limit before it takes effect. Learn more at https://shopify.dev/docs/apps/launch/billing/subscription-billing/update-max-charge.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The global ID of the app subscription line item to update. Must be in the format: gid://shopify/AppSubscriptionLineItem/{id} |
| `cappedAmount` | object | Yes | The new maximum amount of usage charges that can be incurred within a subscription billing interval. This cap prevents merchants from exceeding the specified threshold. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Article

**Slug:** `SHOPIFY_UPDATE_ARTICLE`

Update an existing article in a Shopify blog. Use when you need to modify article properties such as title, content, tags, or publication status.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tags` | string | No | A comma-separated list of tags. Tags are additional short descriptors for the article. |
| `image` | object | No | Image object for an article |
| `title` | string | No | The headline of the article. |
| `author` | string | No | Name credited as the article's creator. |
| `blog_id` | string | Yes | The ID of the blog containing the article to update. |
| `body_html` | string | No | The text of the body of the article, complete with HTML markup. |
| `published` | boolean | No | Whether the article is visible. |
| `article_id` | string | Yes | The ID of the article to update. |
| `metafields` | array | No | Custom metadata fields with key, namespace, value, and type. |
| `published_at` | string | No | Date and time (ISO 8601 format) when the article becomes visible. |
| `summary_html` | string | No | Brief summary with HTML markup for display on other pages. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Modify an existing blog

**Slug:** `SHOPIFY_UPDATE_BLOG`

Updates an existing blog's configuration in your Shopify store. Use this to change the blog title, URL handle, comment moderation settings, custom templates, or attach metadata. Common use cases: rebranding blogs, enabling/disabling comments, switching to custom themes, or fixing SEO-friendly handles. Requires the blog_id and at least one field to update. WARNING: Changing the handle affects URLs and SEO - consider redirects when modifying established blogs.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `title` | string | No | New title for the blog (max 255 characters). Updates the blog's display name. |
| `handle` | string | No | URL-friendly unique identifier for the blog (auto-generated from title if not provided). Used in blog URLs like /blogs/{handle}. WARNING: Changing the handle affects SEO and may break existing links - consider implementing redirects. |
| `blog_id` | string | Yes | The unique numeric identifier for the blog to modify. Can be obtained from the blog list or creation response. |
| `feedburner` | string | No | FeedBurner identifier for RSS feed integration. NOTE: FeedBurner has been discontinued by Google and is not recommended for new implementations. |
| `metafields` | array | No | Array of metafield objects to attach custom metadata to the blog. Each requires: key (max 30 chars), namespace (max 20 chars), value, and type. Useful for storing custom data like sponsorship info, internal tracking codes, or integration data. |
| `commentable` | string ("no" | "moderate" | "yes") | No | Comment policy for blog articles: 'no' (disables all comments), 'moderate' (requires approval before publishing), or 'yes' (allows immediate public comments). |
| `template_suffix` | string | No | Name of alternate Liquid template file to use instead of default blog.liquid. For example, 'custom' uses blog.custom.liquid. Set to null to revert to default template. |
| `feedburner_location` | string | No | Full URL to the FeedBurner RSS feed location. NOTE: FeedBurner has been discontinued by Google. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Comment

**Slug:** `SHOPIFY_UPDATE_COMMENT`

Update an existing comment on a blog article in Shopify. Use when you need to modify comment properties such as body text, author, or publication date. Note: This endpoint requires 'protected customer data' access because comments contain customer information (author name, email, IP address). Ensure the app has proper permissions before using this action.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `body` | string | No | The basic Textile markup of the comment. |
| `email` | string | No | The email address of the author of the comment. This is protected customer data. |
| `author` | string | No | The name of the author of the comment. This is protected customer data. |
| `comment_id` | string | Yes | The unique identifier for the comment to update. |
| `published_at` | string | No | The date and time when the comment was published in ISO 8601 format. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Country (Deprecated)

**Slug:** `SHOPIFY_UPDATE_COUNTRIES_PARAM_COUNTRY_ID`

DEPRECATED: Updates an existing country's tax configuration in Shopify. This endpoint is deprecated as of API version 2024-07 and may return 403 Forbidden errors. The tax field has been read-only since API version 2020-10. Shopify recommends migrating to the GraphQL Admin API's Countries in shipping zone API instead. This action should not be used for new implementations.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tax` | number | No | The national sales tax rate applied to orders from this country, expressed as decimal (e.g., 0.05 for 5%). READ-ONLY since API version 2020-10 - this field cannot be modified via the API. The entire Country PUT endpoint is deprecated as of 2024-07 and may return 403 Forbidden. |
| `country_id` | string | Yes | The unique identifier for the country to update. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Province Tax Information

**Slug:** `SHOPIFY_UPDATE_COUNTRIES_PARAM_COUNTRY_ID_PROVINCES_PARAM_PR`

Update Province Tax Information

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tax` | number | No | Sales tax rate as a decimal (e.g., 0.05 = 5%). DEPRECATED as of API version 2020-10. Avoid using this field. |
| `tax_name` | string | No | The display name for the tax applied to the province. Common values: 'GST', 'HST', 'PST', 'VAT', 'QST'. |
| `tax_type` | string ("normal" | "harmonized" | "compounded") | No | The type of provincial tax calculation. 'normal': standard tax, 'harmonized': combines federal and provincial taxes, 'compounded': tax on tax. |
| `country_id` | string | Yes | The unique identifier of the country containing the province. Get this from the countries list endpoint. |
| `province_id` | string | Yes | The unique identifier of the province to update. Get this from the provinces list for a country. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Country

**Slug:** `SHOPIFY_UPDATE_COUNTRY`

Update an existing country's tax configuration in Shopify. Use when you need to modify tax settings for a country. Note: This action is DEPRECATED as of 2024-07, and custom tax values cannot be created or updated as of 2020-10.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tax` | number | No | The national sales tax rate applied to orders as a decimal value (e.g., 0.1 for 10%). DEPRECATED: As of 2020-10, custom tax values can no longer be created or updated. |
| `country_id` | integer | Yes | The unique identifier for the country to update. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update custom collection

**Slug:** `SHOPIFY_UPDATE_CUSTOM_COLLECTION`

Update an existing custom collection in Shopify. Use when you need to modify properties of a custom collection such as title, description, publication status, or sorting order.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `image` | object | No | Image to attach to the custom collection. |
| `title` | string | No | The title of the custom collection. Maximum length: 255 characters. |
| `handle` | string | No | A human-friendly unique string for the custom collection automatically generated from its title. Maximum length: 255 characters. |
| `body_html` | string | No | The description of the custom collection, including HTML markup. |
| `published` | boolean | No | Whether the custom collection is published to the Online Store channel. |
| `sort_order` | string | No | The order in which products in the custom collection appear. Valid values: 'alpha-asc', 'alpha-desc', 'best-selling', 'created', 'created-desc', 'manual', 'price-asc', 'price-desc'. |
| `published_at` | string | No | The date and time (ISO 8601 format) when the collection was published. |
| `published_scope` | string | No | Whether the collection is published to the Point of Sale channel. Valid values: 'web' (Online Store only) or 'global' (both Online Store and Point of Sale). |
| `template_suffix` | string | No | The suffix of the Liquid template being used (e.g., 'custom' for collection.custom.liquid). |
| `custom_collection_id` | string | Yes | The ID of the custom collection to update. This is a required path parameter. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Customer

**Slug:** `SHOPIFY_UPDATE_CUSTOMER`

Update an existing customer in Shopify. Use when you need to modify customer details such as name, email, phone, tags, addresses, or marketing consent preferences.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `note` | string | No | Store owner's notes about the customer. |
| `tags` | string | No | A comma-separated string of tags to associate with the customer. |
| `email` | string | No | The customer's unique email address. Must be unique across all customers. |
| `phone` | string | No | The customer's phone number in E.164 format. Must be unique across all customers. |
| `addresses` | array | No | A list of addresses for the customer (up to 10). |
| `last_name` | string | No | The customer's last name. |
| `first_name` | string | No | The customer's first name. |
| `tax_exempt` | boolean | No | Whether the customer is exempt from taxes. |
| `customer_id` | string | Yes | The unique identifier of the customer to update. |
| `tax_exemptions` | array | No | Array of applicable tax exemptions. |
| `verified_email` | boolean | No | Whether the customer has verified their email address. |
| `send_email_invite` | boolean | No | Whether to send an account invitation email to the customer. |
| `send_email_welcome` | boolean | No | Whether to send a welcome email to the customer. |
| `multipass_identifier` | string | No | Multipass identifier for the customer. |
| `sms_marketing_consent` | object | No | SMS marketing consent information. |
| `email_marketing_consent` | object | No | Email marketing consent information. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Customer Address

**Slug:** `SHOPIFY_UPDATE_CUSTOMER_ADDRESS`

Updates an existing address for a Shopify customer. This action allows you to modify address details such as street address, city, province, country, postal code, and contact information. At least one address field must be provided to update. Requires Protected Customer Data access approval and write_customers scope. Common use cases: - Correct shipping address errors for customers - Update customer contact information - Change billing addresses for customer accounts

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `zip` | string | No | Postal code or ZIP code. |
| `city` | string | No | City, town, or village name. |
| `phone` | string | No | Contact phone number. |
| `company` | string | No | Business or company name. |
| `country` | string | No | Country name. |
| `address1` | string | No | Primary street address line. |
| `address2` | string | No | Secondary address field (apartment, suite, etc.). |
| `province` | string | No | Province or state name. |
| `last_name` | string | No | Customer's last name. |
| `address_id` | string | Yes | The unique identifier of the address to update. |
| `first_name` | string | No | Customer's first name. |
| `customer_id` | string | Yes | The unique identifier of the customer whose address is to be updated. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Bulk delete customer addresses

**Slug:** `SHOPIFY_UPDATE_CUSTOMERS_PARAM_CUSTOMER_ID_ADDRESSES_SET`

Performs bulk operations on multiple customer addresses. Currently supports the 'destroy' operation to delete multiple addresses at once. Use this when you need to remove several addresses for a customer in a single API call instead of deleting them one by one.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `operation` | string | Yes | The bulk operation to execute on the specified addresses. Currently only 'destroy' is supported, which removes multiple addresses at once. |
| `address_ids` | array | Yes | Array of address IDs to operate on. Multiple address IDs can be provided to perform bulk operations. At least one address ID must be provided. |
| `customer_id` | string | Yes | The unique identifier for the customer in Shopify. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Modify an existing draft order

**Slug:** `SHOPIFY_UPDATE_DRAFT_ORDER`

Update an existing draft order in Shopify. Use when you need to modify draft order details like customer information, line items, addresses, discounts, notes, or status before completion.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `b2b` | boolean | No | B2B order designation. |
| `note` | string | No | Optional merchant note attached to the draft order. |
| `tags` | string | No | Comma-separated order tags. |
| `email` | string | No | Customer email address. |
| `status` | string ("open" | "invoice_sent" | "completed") | No | Status - 'open', 'invoice_sent', or 'completed'. |
| `customer` | object | No | Customer resource object. |
| `line_items` | array | No | Array of line item objects. Each item can contain product variant or custom line items with details. |
| `tax_exempt` | boolean | No | Customer tax exemption status. |
| `customer_id` | integer | No | Customer identifier to associate with the draft order. |
| `shipping_line` | object | No | Shipping line for draft order. |
| `draft_order_id` | string | Yes | The unique identifier of the draft order to modify. |
| `taxes_included` | boolean | No | Whether taxes are included in prices. |
| `billing_address` | object | No | Billing address for draft order. |
| `note_attributes` | array | No | Custom metadata objects containing name and value pairs. |
| `applied_discount` | object | No | Discount applied to draft order or line item. |
| `shipping_address` | object | No | Shipping address for draft order. |
| `use_customer_default_address` | boolean | No | Load customer's default shipping information (default: false). |
| `allow_discount_codes_in_checkout` | boolean | No | Enable discount codes at checkout. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update EventBridge webhook subscription

**Slug:** `SHOPIFY_UPDATE_EVENT_BRIDGE_WEBHOOK_SUBSCRIPTION`

Update an Amazon EventBridge webhook subscription in Shopify. Use when you need to modify the ARN or data format of an existing EventBridge webhook. Note: This mutation is deprecated; consider using webhookSubscriptionUpdate for new implementations. For app-specific webhooks, using shopify.app.toml configurations may be easier as they are automatically maintained by Shopify.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The ID of the webhook subscription to update in GID format (e.g., gid://shopify/WebhookSubscription/1601501331650) |
| `webhookSubscription` | object | Yes | Input object containing the EventBridge webhook subscription configuration to update (ARN and/or format) |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Fulfillment Tracking

**Slug:** `SHOPIFY_UPDATE_FULFILLMENT_TRACKING`

Updates tracking information (carrier company, tracking number, or custom URL) for an existing fulfillment. Use this action when: - You need to add or update tracking details for a shipment after the fulfillment was created - The carrier information was not provided during fulfillment creation - Tracking numbers become available after shipment - You want to notify customers about updated tracking information Prerequisites: Requires a valid fulfillment_id from a previously created fulfillment.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fulfillment` | object | Yes | The fulfillment object containing tracking information and notification preferences. |
| `fulfillment_id` | string | Yes | The unique identifier of the fulfillment to update. This ID is returned when creating a fulfillment or can be retrieved from order fulfillment lists. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update an Existing Gift Card

**Slug:** `SHOPIFY_UPDATE_GIFT_CARD`

Updates an existing gift card in Shopify. Use when you need to modify a gift card's expiration date, merchant note, template suffix, or assign it to a customer. Only four properties can be updated after creation: expires_on (expiration date), note (merchant-only note), template_suffix (Liquid template suffix), and customer_id (can only be set if currently null). Note: Gift card balance and initial value cannot be modified through this endpoint.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `note` | string | No | Internal merchant note about the gift card (not visible to customers). Leave empty to keep the current note unchanged. |
| `expires_on` | string | No | Expiration date for the gift card in YYYY-MM-DD format. Leave empty to keep the current expiration date unchanged. Set to null to remove expiration. |
| `customer_id` | integer | No | ID of the customer to associate with this gift card. IMPORTANT: Can only be set if the gift card is not currently assigned to a customer (i.e., customer_id is currently null). Leave empty to keep the current customer assignment unchanged. |
| `gift_card_id` | integer | Yes | The unique identifier of the gift card to update. This is a required parameter. |
| `template_suffix` | string | No | Suffix for the Liquid template used to render the gift card online (e.g., 'birthday' renders gift_card.birthday.liquid). Leave empty to keep the current template suffix unchanged. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update inventory item

**Slug:** `SHOPIFY_UPDATE_INVENTORY_ITEM`

Updates properties of an inventory item in Shopify. An inventory item represents the physical good behind a product variant, containing metadata like SKU, cost, origin, and shipping requirements. Use this action to modify these properties - NOT to adjust inventory quantities (use inventory level actions for quantity changes). Common use cases: updating product costs, changing SKUs, setting country of origin for customs, or toggling inventory tracking.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `inventory_item` | object | Yes | The inventory item object containing properties to update. Only include fields you want to change - all fields are optional. |
| `inventory_item_id` | string | Yes | The unique identifier of the inventory item to update. You can get this from a product variant's inventory_item_id field. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Marketing Event

**Slug:** `SHOPIFY_UPDATE_MARKETING_EVENT`

Updates an existing marketing event in Shopify. UPDATABLE FIELDS: remote_id, budget, currency, budget_type, started_at, ended_at, scheduled_to_end_at. READ-ONLY FIELDS (cannot be changed after creation): event_type, marketing_channel, referring_domain, utm_campaign, utm_source, utm_medium, description, manage_url, preview_url, paid. This action validates and rejects requests that attempt to update read-only fields to prevent confusion.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `paid` | boolean | No | Whether the event is paid or organic (deprecated). READ-ONLY after creation - cannot be updated. |
| `budget` | string | No | Campaign budget amount. If specified, currency and budget_type are required. UPDATABLE. |
| `currency` | string | No | Budget currency code (ISO 4217). Required if budget is specified. UPDATABLE. |
| `ended_at` | string | No | Actual campaign completion timestamp in ISO 8601 format. UPDATABLE. |
| `remote_id` | string | No | Remote identifier for validation of engagement data. UPDATABLE. |
| `event_type` | string | No | Marketing event classification. Valid values: ad, post, message, retargeting, transactional, affiliate, loyalty, newsletter, abandoned_cart. READ-ONLY after creation - cannot be updated. |
| `manage_url` | string | No | Link to campaign management interface. READ-ONLY after creation - cannot be updated. |
| `started_at` | string | No | Campaign commencement timestamp in ISO 8601 format. UPDATABLE. |
| `utm_medium` | string | No | Traffic channel specification. READ-ONLY after creation - cannot be updated. |
| `utm_source` | string | No | Traffic origin identifier. READ-ONLY after creation - cannot be updated. |
| `budget_type` | string | No | Budget model: daily or lifetime. Required if budget is specified. UPDATABLE. |
| `description` | string | No | Campaign narrative details. READ-ONLY after creation - cannot be updated. |
| `preview_url` | string | No | Campaign preview destination. READ-ONLY after creation - cannot be updated. |
| `utm_campaign` | string | No | Campaign identifier for traffic attribution. READ-ONLY after creation - cannot be updated. |
| `referring_domain` | string | No | Destination domain (deprecated). Required if marketing_channel is search or social at creation. READ-ONLY after creation - cannot be updated. |
| `marketing_channel` | string | No | Distribution channel. Valid values: search, display, social, email, referral. READ-ONLY after creation - cannot be updated. |
| `marketing_event_id` | string | Yes | The unique identifier of the marketing event to update. |
| `scheduled_to_end_at` | string | No | Planned campaign conclusion timestamp in ISO 8601 format. UPDATABLE. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update blog metafield (Deprecated)

**Slug:** `SHOPIFY_UPDATE_METAFIELD`

Update an existing metafield for a blog. Use when you need to modify metafield properties like value, type, or description for a blog resource.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `type` | string | No | The new value type of the metafield. If not provided, the existing type will be kept. |
| `value` | string | No | The new value for the metafield. If not provided, the existing value will be kept. |
| `blog_id` | string | Yes | The unique identifier of the blog that owns the metafield. |
| `description` | string | No | A new description of the information that the metafield contains. If not provided, the existing description will be kept. |
| `metafield_id` | string | Yes | The unique identifier of the metafield to update. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update metafield by ID

**Slug:** `SHOPIFY_UPDATE_METAFIELD_BY_ID`

Update an existing Shopify metafield by its ID. Use when you need to modify metafield properties like value, type, or description.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `type` | string | No | The new value type of the metafield. If not provided, the existing type will be kept. |
| `value` | string | No | The new value for the metafield. If not provided, the existing value will be kept. |
| `description` | string | No | A new description of the information that the metafield contains. If not provided, the existing description will be kept. |
| `metafield_id` | string | Yes | The unique identifier of the metafield to update. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update metafield definition

**Slug:** `SHOPIFY_UPDATE_METAFIELD_DEFINITION`

Update a Shopify metafield definition's configuration including name, description, validation rules, access settings, and capabilities. Use when you need to modify an existing metafield definition to change display text, add/remove validations, adjust API access permissions, or enable/disable capabilities like admin filtering or unique value constraints. Note: The type, namespace, key, and owner type identify the definition and cannot be changed - only the configuration settings can be updated.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `key` | string | Yes | The unique key identifier within the namespace. Along with namespace and ownerType, this identifies the definition to update. Cannot be changed after creation. |
| `pin` | boolean | No | Whether to pin this metafield definition at the top of the list in the Shopify admin interface for easy access. |
| `name` | string | No | The human-readable display name for the metafield definition. This is shown in the Shopify admin interface. |
| `access` | object | No | Access control settings for metafield visibility across different APIs. |
| `namespace` | string | Yes | The namespace identifier for the metafield definition. Along with key and ownerType, this identifies the definition to update. Cannot be changed after creation. |
| `ownerType` | string ("API_PERMISSION" | "ARTICLE" | "BLOG" | "CARTTRANSFORM" | "COLLECTION" | "COMPANY" | "COMPANY_LOCATION" | "CUSTOMER" | "DELIVERY_CUSTOMIZATION" | "DISCOUNT" | "DRAFTORDER" | "FULFILLMENT_CONSTRAINT_RULE" | "GIFT_CARD_TRANSACTION" | "LOCATION" | "MARKET" | "ORDER" | "ORDER_ROUTING_LOCATION_RULE" | "PAGE" | "PAYMENT_CUSTOMIZATION" | "PRODUCT" | "PRODUCTVARIANT" | "SELLING_PLAN" | "SHOP" | "VALIDATION") | Yes | The resource type this metafield definition is attached to. Along with namespace and key, this identifies the definition to update. Cannot be changed after creation. |
| `description` | string | No | A description explaining the purpose and usage of this metafield definition. Helps other users understand what data should be stored. |
| `validations` | array | No | List of validation rules to enforce on metafield values. Common validations include min/max for numbers, regex patterns for strings, and allowed choices for enums. |
| `capabilities` | object | No | Capabilities that can be enabled for metafield definitions. |
| `useAsCollectionCondition` | boolean | No | Deprecated field that determines if the metafield can be used as a collection condition. Use capabilities.smartCollectionCondition instead. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update a metafield (Deprecated)

**Slug:** `SHOPIFY_UPDATE_METAFIELD_GENERIC`

Update an existing metafield for any Shopify resource type. Use when you need to modify metafield properties like value, type, or description for products, customers, orders, collections, or other resources.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `type` | string | No | The new value type of the metafield. If not provided, the existing type will be kept. |
| `value` | string | No | The new value for the metafield. If not provided, the existing value will be kept. |
| `description` | string | No | A new description of the information that the metafield contains. If not provided, the existing description will be kept. |
| `resource_id` | string | Yes | The unique identifier of the resource (product, customer, order, etc.) that owns the metafield. |
| `metafield_id` | string | Yes | The unique identifier of the metafield to update. |
| `resource_type` | string ("products" | "customers" | "orders" | "collections" | "blogs" | "pages" | "variants" | "draft_orders" | "articles" | "product_images" | "shop") | Yes | The type of resource that owns the metafield. Must be one of: products, customers, orders, collections, blogs, pages, variants, draft_orders, articles, product_images, or shop. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update a metafield (Deprecated)

**Slug:** `SHOPIFY_UPDATE_METAFIELD_RESOURCE`

Update an existing metafield for any Shopify resource. Use when modifying metafield properties like value, type, or description for products, customers, orders, collections, shops, or other resources. Note: The namespace and key of an existing metafield cannot be changed.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `type` | string | No | The data type of the metafield value. Common types include: single_line_text_field, multi_line_text_field, number_integer, number_decimal, url, json, boolean, color, date, date_time. If not provided, the existing type will be kept. |
| `value` | string | No | The new value to store in the metafield. Can be a string, number, or boolean depending on the metafield type. If not provided, the existing value will be kept. |
| `owner_id` | string | Yes | The ID of the resource that owns the metafield. This is the unique identifier of the parent resource (shop ID, product ID, customer ID, etc.). |
| `description` | string | No | A human-readable description of what information the metafield contains. If not provided, the existing description will be kept. |
| `metafield_id` | string | Yes | The ID of the metafield to update. This is the unique identifier of the metafield itself, not the owner resource. |
| `owner_resource` | string | Yes | The type of resource that owns the metafield (e.g., shop, product, customer, blog, collection, page, draft_order, variant, order, article, product_image). Determines the resource type in the API endpoint path. Both singular (product) and plural (products) forms are accepted. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Order

**Slug:** `SHOPIFY_UPDATE_ORDER`

Updates mutable fields on an existing Shopify order.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique identifier of the Shopify order to update. |
| `note` | string | No | Merchant note attached to the order. |
| `tags` | string | No | Comma-separated tags for the order. |
| `email` | string | No | Customer email address for the order. |
| `phone` | string | No | Order phone number. E.164 format (e.g., '+15551234567') is recommended. |
| `po_number` | string | No | Purchase order reference. |
| `metafields` | array | No | Metafields to attach or update on the order. |
| `tax_exempt` | boolean | No | Whether the order is tax exempt. |
| `send_receipt` | boolean | No | Whether Shopify should send an order receipt. |
| `billing_address` | object | No | Billing address fields to update. |
| `note_attributes` | array | No | Custom note attributes for the order. |
| `shipping_address` | object | No | Shipping address fields to update. |
| `buyer_accepts_marketing` | boolean | No | Whether the buyer accepts marketing. |
| `send_fulfillment_receipt` | boolean | No | Whether Shopify should send a fulfillment receipt. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update order risk

**Slug:** `SHOPIFY_UPDATE_ORDER_RISK`

Updates an order risk assessment for fraud detection in Shopify. Use when modifying existing risk evaluations. **IMPORTANT - API DEPRECATION:** This REST API endpoint is deprecated as of version 2025-10. If using API version 2025-10 or later, you must use the GraphQL Admin API's orderRiskAssessmentCreate mutation instead. See: https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderRiskAssessmentCreate **Note:** You cannot modify a risk created by another application.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `score` | string | No | Numeric risk score as a string representing a decimal value between 0.0 and 1.0. Higher values (closer to 1.0) indicate higher fraud risk. Example: '0.85' for 85% risk probability. |
| `source` | string | No | Identifier for the source system or service that generated this risk assessment. Use this to track which fraud detection service provided the assessment (e.g., your app name, third-party service name). |
| `message` | string | No | Detailed message explaining the risk assessment findings that will be visible to the merchant. Use this to provide context about why the risk level was assigned and any relevant details from fraud detection analysis. |
| `risk_id` | string | Yes | The unique identifier of the risk assessment to update. Note: You cannot modify a risk created by another application. |
| `order_id` | string | Yes | The unique identifier of the order containing the risk assessment to update. |
| `cause_cancel` | boolean | No | Boolean flag indicating whether this risk assessment is severe enough to warrant automatic order cancellation. Set to true for high-risk orders that should not be fulfilled, false otherwise. |
| `recommendation` | string ("cancel" | "investigate" | "accept") | No | Recommended action for the merchant to take. Must be one of: 'cancel' (high risk, recommend canceling order), 'investigate' (medium risk, recommend manual review), or 'accept' (low risk, safe to fulfill). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Page

**Slug:** `SHOPIFY_UPDATE_PAGE`

Updates an existing page in a Shopify store. Use this to modify page properties such as title, HTML content (body_html), author, URL handle, publication status, or template. Requires a valid page_id and at least one field to update. All update fields are optional - provide only the fields you want to change.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `title` | string | No | The title/heading of the page. |
| `author` | string | No | The name of the person who created the page. |
| `handle` | string | No | A unique, human-friendly string for the page URL, generated automatically from title if not provided. |
| `page_id` | string | Yes | The unique identifier of the page to update. |
| `body_html` | string | No | The text content of the page, complete with HTML markup. |
| `published` | boolean | No | Controls page visibility - true for published, false/null for unpublished/hidden. |
| `template_suffix` | string | No | The suffix of the template used to render the page. If empty or null, the default template is used. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Price Rule

**Slug:** `SHOPIFY_UPDATE_PRICE_RULE`

Update an existing price rule (discount) in Shopify. Use when you need to modify price rule properties like title, value, dates, or prerequisites. Only fields provided in the request will be updated; omitted fields remain unchanged.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `title` | string | No | The title of the price rule, used in admin search and displayed on Discounts page. |
| `value` | string | No | The value of the price rule, must be negative (e.g., '-10.0' for $10 off or 10% off). |
| `ends_at` | string | No | The date and time when the price rule ends (ISO 8601 format). Can be null for open-ended rules. |
| `starts_at` | string | No | The date and time when the price rule starts (ISO 8601 format). |
| `value_type` | string | No | The value type of the price rule. Valid values: 'fixed_amount', 'percentage', 'shipping'. |
| `target_type` | string | No | The target type the price rule applies to. Valid values: 'line_item' (applies to cart's line items), 'shipping_line' (applies to cart's shipping lines). |
| `usage_limit` | integer | No | The maximum number of times the price rule can be used in total. Null for unlimited. |
| `price_rule_id` | string | Yes | The ID of the price rule to update. |
| `allocation_limit` | integer | No | The maximum number of times the price rule can be allocated onto an order (for Buy X Get Y discounts). |
| `target_selection` | string | No | Target selection method. Valid values: 'all' (applies to all line items), 'entitled' (applies to selected entitlements only). |
| `allocation_method` | string | No | How the discount is applied. Valid values: 'each' (applied to each entitled item), 'across' (applied across entitled items). Must be 'each' when target_type is 'shipping_line'. |
| `once_per_customer` | boolean | No | Whether the price rule can be applied only once per customer. |
| `customer_selection` | string | No | Customer selection for the price rule. Valid values: 'all' (available to all customers), 'prerequisite' (customer must match prerequisite conditions). |
| `entitled_country_ids` | array | No | List of country IDs where shipping discounts apply. |
| `entitled_product_ids` | array | No | List of product IDs that the discount can be applied to. |
| `entitled_variant_ids` | array | No | List of variant IDs that the discount can be applied to. |
| `entitled_collection_ids` | array | No | List of collection IDs that the discount can be applied to. |
| `prerequisite_product_ids` | array | No | List of product IDs that must be in the cart for the discount to apply. |
| `prerequisite_variant_ids` | array | No | List of variant IDs that must be in the cart. |
| `prerequisite_customer_ids` | array | No | List of customer IDs that can use this price rule. |
| `prerequisite_collection_ids` | array | No | List of collection IDs that must be in the cart. |
| `prerequisite_quantity_range` | object | No | Minimum quantity requirement. |
| `prerequisite_subtotal_range` | object | No | Minimum purchase amount requirement. |
| `customer_segment_prerequisite_ids` | array | No | List of customer segment IDs eligible for the discount. |
| `prerequisite_shipping_price_range` | object | No | Shipping price requirements. |
| `prerequisite_to_entitlement_purchase` | object | No | Spend X Get Y configuration. |
| `prerequisite_to_entitlement_quantity_ratio` | object | No | Buy X Get Y quantity ratio configuration. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Product Image

**Slug:** `SHOPIFY_UPDATE_PRODUCT_IMAGE`

Modify an existing product image. Use when you need to update image properties such as position, alt text, or variant associations.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `image` | object | Yes | An object containing the image details to update. At least one field must be provided. |
| `image_id` | string | Yes | The unique identifier for the specific image to be updated. |
| `product_id` | string | Yes | The unique identifier for the product containing the image. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update product metafield

**Slug:** `SHOPIFY_UPDATE_PRODUCT_METAFIELD`

Updates an existing metafield for a specific Shopify product.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `type` | string | No | The new value type of the metafield. If not provided, the existing type will be kept. Changing type must be compatible with the existing metafield type; incompatible changes return a 422 validation error. |
| `value` | string | No | The new value for the metafield. If not provided, the existing value will be kept. |
| `product_id` | string | Yes | The unique identifier of the Shopify product. |
| `description` | string | No | A new description of the information that the metafield contains. If not provided, the existing description will be kept. |
| `metafield_id` | string | Yes | The unique identifier of the metafield to update. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Product

**Slug:** `SHOPIFY_UPDATE_PRODUCTS_PARAM_PRODUCT_ID`

DEPRECATED: Use SHOPIFY_UPDATES_A_PRODUCT instead. Update an existing Shopify product including its variants and images. Use when you need to modify product details, variants, options, images, or SEO metadata.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tags` | string | No | Comma-separated tags (max 250 tags). |
| `title` | string | No | Product name. |
| `images` | array | No | Product images to update or add. |
| `status` | string | No | Product status. Valid values: 'active' (published), 'archived' (hidden), 'draft' (unpublished). |
| `vendor` | string | No | Manufacturer or supplier name. |
| `options` | array | No | Product customization options (max 3 options). |
| `variants` | array | No | Product variant objects to update or create. |
| `body_html` | string | No | HTML-formatted product description. |
| `metafields` | array | No | Custom metadata fields for extended attributes. |
| `product_id` | string | Yes | Unique identifier of the product to update. |
| `product_type` | string | No | Product category. |
| `published_at` | string | No | Publication timestamp in ISO 8601 format. Set to null to unpublish. |
| `published_scope` | string | No | Visibility scope. Valid values: 'web' (online store only) or 'global' (includes Point of Sale). |
| `template_suffix` | string | No | Custom Liquid template reference. |
| `metafields_global_title_tag` | string | No | SEO title for <meta name='title'> tag. |
| `metafields_global_description_tag` | string | No | SEO description for <meta name='description'> tag. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Bulk update product variants via GraphQL

**Slug:** `SHOPIFY_UPDATE_PRODUCT_VARIANTS_BULK`

Updates many product variants (20-50+) in one asynchronous Shopify bulk mutation job. Uses stagedUploadsCreate for JSONL upload, then bulkOperationRunMutation with productVariantsBulkUpdate, polling until completion and returning per-row success/errors. Use when you need to update pricing, SKUs, inventory settings, or other properties for multiple variants efficiently.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `variants` | array | Yes | Array of variant update inputs. Recommended 20-50+ items for optimal bulk operation efficiency. |
| `max_poll_attempts` | integer | No | Maximum polling attempts before timeout. Default 60 (5 minutes with 5s interval). |
| `poll_interval_seconds` | integer | No | Seconds to wait between status polls. Default 5. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Province for Country (Deprecated)

**Slug:** `SHOPIFY_UPDATE_PROVINCE`

Updates an existing province for a country in Shopify. IMPORTANT: This endpoint is deprecated as of API version 2024-07. Additionally, custom tax values for provinces cannot be updated as of version 2020-10. While the endpoint accepts update requests and returns 200 OK, province values (especially tax-related fields) may not actually be modified. Consider using the GraphQL Admin API for country/province management.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tax` | number | No | The sales tax rate as a decimal. Note: Custom tax values cannot be updated as of API version 2020-10. |
| `code` | string | No | Standard abbreviation for the province. |
| `name` | string | No | Full name of the province. |
| `tax_name` | string | No | Label for the tax type. |
| `tax_type` | string | No | Valid values: null, 'normal', 'harmonized', or 'compounded'. |
| `country_id` | string | Yes | The unique identifier of the country. |
| `province_id` | string | Yes | The unique identifier of the province to update. |
| `tax_percentage` | number | No | The province's tax expressed as a percentage. Note: Custom tax values cannot be updated as of API version 2020-10. |
| `shipping_zone_id` | integer | No | The shipping zone identifier this province belongs to. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Pub/Sub webhook subscription

**Slug:** `SHOPIFY_UPDATE_PUB_SUB_WEBHOOK_SUBSCRIPTION`

Updates a Google Cloud Pub/Sub webhook subscription configuration. Use when modifying the GCP project, topic, or message format for an existing Pub/Sub webhook.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The ID of the webhook subscription to update (format: gid://shopify/WebhookSubscription/{id}). |
| `format` | string | No | Message format for webhook payloads. Omit to keep the current format. |
| `pub_sub_topic` | string | No | Google Cloud Pub/Sub topic name to receive webhook events. |
| `pub_sub_project` | string | No | Google Cloud Platform project identifier for the Pub/Sub topic. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update redirect

**Slug:** `SHOPIFY_UPDATE_REDIRECT`

Update an existing Shopify redirect. Use when you need to modify the path or target of a redirect. At least one of path or target must be provided.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `path` | string | No | The old path to be redirected from. When users visit this path, they will be redirected to the target. Maximum 1,024 characters. At least one of 'path' or 'target' must be provided. |
| `target` | string | No | The target location where users will be redirected. Can be any path on the shop's site or an external URL. Maximum 255 characters. At least one of 'path' or 'target' must be provided. |
| `redirect_id` | string | Yes | The unique identifier of the redirect to update. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update redirect (Deprecated)

**Slug:** `SHOPIFY_UPDATE_REDIRECT_ALT`

Update an existing Shopify redirect. Use when you need to modify the path or target of a redirect.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `path` | string | No | The old path to be redirected from. When users visit this path, they will be redirected to the target. Maximum 1,024 characters. At least one of 'path' or 'target' must be provided. |
| `target` | string | No | The target location where users will be redirected. Can be any path on the shop's site or an external URL. Maximum 255 characters. At least one of 'path' or 'target' must be provided. |
| `redirect_id` | string | Yes | The unique identifier of the redirect to update. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Updates An Article (Deprecated)

**Slug:** `SHOPIFY_UPDATES_AN_ARTICLE`

DEPRECATED: Use SHOPIFY_UPDATE_ARTICLE instead. Update an existing article in a Shopify blog. Use when you need to modify article properties such as title, body content, tags, author, or publication status.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tags` | string | No | A comma-separated list of tags. Tags are additional short descriptors for the article. |
| `image` | object | No | Image object for an article |
| `title` | string | No | The headline of the article. |
| `author` | string | No | Name credited as the article's creator. |
| `blog_id` | string | Yes | The ID of the blog containing the article to update. |
| `body_html` | string | No | The text of the body of the article, complete with HTML markup. |
| `published` | boolean | No | Whether the article is visible. |
| `article_id` | string | Yes | The ID of the article to update. |
| `metafields` | array | No | Custom metadata fields with key, namespace, value, and type. |
| `published_at` | string | No | Date and time (ISO 8601 format) when the article becomes visible. |
| `summary_html` | string | No | Brief summary with HTML markup for display on other pages. |
| `template_suffix` | string | No | Custom template identifier for the article. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Updates An Existing Discount Code

**Slug:** `SHOPIFY_UPDATES_AN_EXISTING_DISCOUNT_CODE`

Updates the code value of an existing discount code associated with a price rule. This action allows you to change the discount code string that customers use at checkout. The code is case-insensitive and can be up to 255 characters. Only the code value can be updated; to modify discount logic (percentage, amount, conditions), update the price rule itself. Required: Both the price_rule_id and discount_code_id must exist in your Shopify store. The new code must be unique and not already in use by another discount.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `code` | string | Yes | The case-insensitive discount code that customers use at checkout. Maximum 255 characters. |
| `price_rule_id` | string | Yes | The ID of the price rule that the discount code belongs to. |
| `discount_code_id` | string | Yes | The ID of the discount code to update. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update a product (Deprecated)

**Slug:** `SHOPIFY_UPDATES_A_PRODUCT`

Updates a product and its variants and images. Use when modifying existing product details, pricing, variants, images, or SEO information.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tags` | string | No | Comma-separated tags (max 250 tags, each max 255 characters) |
| `title` | string | No | The name of the product |
| `handle` | string | No | Unique human-friendly identifier (auto-generated from title if not provided) |
| `images` | array | No | Array of product image objects to update. Include image id to update existing images. |
| `status` | string | No | Product status - must be one of: active, archived, or draft |
| `vendor` | string | No | The name of the product's vendor |
| `options` | array | No | Custom product properties (max 3 options). Include option id to update existing options. |
| `variants` | array | No | Array of product variant objects to update. Include variant id to update existing variants. |
| `body_html` | string | No | Product description with HTML formatting support |
| `product_id` | string | Yes | The unique identifier of the product to update. This is required to specify which product to modify. |
| `product_type` | string | No | Categorization for filtering and searching products |
| `published_at` | string | No | Publication timestamp in ISO 8601 format; set to null to unpublish from Online Store |
| `published_scope` | string | No | Publication scope - 'web' for Online Store only or 'global' for Point of Sale channel |
| `template_suffix` | string | No | Suffix for custom Liquid template (e.g., 'special' uses product.special.liquid) |
| `metafields_global_title_tag` | string | No | SEO title metadata for search engines |
| `metafields_global_description_tag` | string | No | SEO description metadata for search engines |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Script Tag

**Slug:** `SHOPIFY_UPDATE_SCRIPT_TAG`

Modify an existing script tag in Shopify. Use when you need to update script properties like the source URL, display scope, or caching behavior.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `src` | string | No | URL of the remote script to load. Must be HTTPS. |
| `cache` | boolean | No | Whether the script should be cached by the CDN. |
| `event` | string | No | DOM event that triggers the script load. Valid value: 'onload' (deprecated but still supported). |
| `display_scope` | string ("online_store" | "order_status" | "all") | No | Where the script displays. Options: 'online_store' (storefront only), 'order_status' (order status page only), or 'all' (both). |
| `script_tag_id` | string | Yes | The unique identifier for the script tag being updated. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update a metafield (Deprecated)

**Slug:** `SHOPIFY_UPDATE_SHOP_METAFIELD`

Update an existing shop-level metafield's value and type. Use when you need to modify metafield data attached to the shop itself (not product, customer, or other resource metafields).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `type` | string | Yes | The metafield type. Common types include 'single_line_text_field', 'multi_line_text_field', 'number_integer', 'number_decimal', 'url', 'json', 'boolean', 'color', 'date', 'date_time'. |
| `value` | string | Yes | The new value for the metafield. Values are always stored as strings regardless of the declared type. |
| `metafield_id` | string | Yes | The unique identifier of the metafield to update. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Smart Collection

**Slug:** `SHOPIFY_UPDATE_SMART_COLLECTION`

Update an existing smart collection. Use when you need to modify a smart collection's properties, rules, or settings.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `image` | object | No | Image object for the smart collection. |
| `rules` | array | No | Collection of rule objects defining product inclusion criteria. |
| `title` | string | No | The name of the smart collection. Maximum length: 255 characters. |
| `handle` | string | No | A human-friendly unique string for the smart collection. Automatically generated from the title if not provided. Maximum length: 255 characters. |
| `body_html` | string | No | The description of the smart collection. Includes HTML markup. Can be null. |
| `published` | boolean | No | Controls visibility; true publishes, false hides the collection. |
| `sort_order` | string ("alpha-asc" | "alpha-desc" | "best-selling" | "created" | "created-desc" | "manual" | "price-asc" | "price-desc") | No | The order of products in the smart collection. |
| `disjunctive` | boolean | No | Whether products matching ANY rule are included (true) or ALL rules (false). |
| `published_at` | string | No | Publication timestamp in ISO 8601 format; null when collection is hidden. |
| `published_scope` | string ("web" | "global") | No | Publishing channel. |
| `template_suffix` | string | No | The suffix of the Liquid template that the shop uses. |
| `smart_collection_id` | string | Yes | The unique identifier of the smart collection to update. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update smart collection (Deprecated)

**Slug:** `SHOPIFY_UPDATE_SMART_COLLECTION_ALT`

Update an existing smart collection. Use when you need to modify smart collection properties like title, rules, or settings.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `image` | object | No | Image input for updating smart collection image |
| `rules` | array | No | Array of rule objects defining collection membership criteria |
| `title` | string | No | The name of the smart collection. Maximum length: 255 characters |
| `handle` | string | No | A human-friendly unique string for the smart collection |
| `body_html` | string | No | The description of the smart collection. Includes HTML markup |
| `sort_order` | string ("alpha-asc" | "alpha-desc" | "best-selling" | "created" | "created-desc" | "manual" | "price-asc" | "price-desc") | No | Ordering of products. Valid values: 'alpha-asc', 'alpha-desc', 'best-selling', 'created', 'created-desc', 'manual', 'price-asc', 'price-desc' |
| `disjunctive` | boolean | No | Whether products need to match one rule (true) or all rules (false) |
| `published_at` | string | No | ISO 8601 formatted publication timestamp |
| `template_suffix` | string | No | Liquid template suffix for custom collection pages |
| `smart_collection_id` | string | Yes | The ID of the smart collection to update |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update smart collection product order

**Slug:** `SHOPIFY_UPDATE_SMART_COLLECTION_ORDER`

Updates the display order of products in a smart collection with manual sorting enabled. Use this action to customize the sequence products appear in a collection. This only works when the collection's sort_order field is set to 'manual'. If the collection uses automatic sorting (e.g., 'best-selling', 'price-asc'), this operation will have no effect. Requirements: - Collection must have sort_order='manual' - Product IDs must belong to products already in the collection - Requires 'write_products' scope Returns an empty response on success (HTTP 200 indicates successful reordering).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `products` | array | Yes | Ordered array of product IDs defining the new product sequence. List product IDs in the exact order you want them displayed. Only products already in the collection (matching its rules) can be reordered. The collection must have sort_order='manual' for this to work. |
| `smart_collection_id` | string | Yes | The unique numeric identifier of the smart collection whose product order will be updated. The collection must have sort_order='manual' for this operation to take effect. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Modify existing theme

**Slug:** `SHOPIFY_UPDATE_THEME`

Update an existing theme's properties such as name or role. Use when you need to modify a theme. Note that a theme cannot be modified while uploading, updating, or if it's the last published theme.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | The display name of the theme. Use this to rename the theme. |
| `role` | string ("main" | "unpublished" | "development") | No | How the theme functions within the shop. Valid values: 'main' (published theme visible to customers), 'unpublished' (hidden from customers), or 'development' (temporary development theme that cannot be published). When changing role to 'main', the previously published theme becomes unpublished. |
| `theme_id` | string | Yes | The unique numeric identifier for the theme to update. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update webhook subscription

**Slug:** `SHOPIFY_UPDATE_WEBHOOK_SUBSCRIPTION`

Update a webhook subscription's configuration in Shopify. Use when you need to modify the endpoint URL, event filters, included fields, or metafield namespaces without recreating the subscription. You can switch between endpoint types (HTTP, Pub/Sub, EventBridge) by providing a different URI format in callback_url. Updates apply atomically without interrupting webhook delivery.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The ID of the webhook subscription to update (format: gid://shopify/WebhookSubscription/{id}). |
| `webhook_subscription` | object | Yes | The new configuration for the webhook subscription. Specify only the fields you want to update. You can switch between endpoint types (HTTP, Pub/Sub, EventBridge) by providing a different callback_url format. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Validate Access

**Slug:** `SHOPIFY_VALIDATE_ACCESS`

DEPRECATED: Use SHOPIFY_GET_SHOP_DETAILS instead. Diagnoses authorization issues by retrieving granted OAuth scopes and validating token authenticity. Use when troubleshooting 401/403 errors to determine if the issue is an invalid token or missing permissions.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |


## Triggers

### Bulk Operation Finished

**Slug:** `SHOPIFY_BULK_OPERATION_FINISHED`

**Type:** webhook

Triggers when a bulk operation started by this app finishes, whether it completed,
failed, was canceled or expired. Shopify sends no result URL on this event; read
`currentBulkOperation` to get one.

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `admin_graphql_api_id` | string | No | GraphQL global id of the bulk operation, e.g. `gid://shopify/BulkOperation/8318582423710`. |
| `completed_at` | string | No | When the operation finished, ISO 8601. |
| `created_at` | string | No | When the operation was started, ISO 8601. |
| `error_code` | string | No | Why the operation failed, e.g. `ACCESS_DENIED`, `INTERNAL_SERVER_ERROR`, `TIMEOUT`. Null when it succeeded. |
| `status` | string | No | How the operation ended: `completed`, `failed`, `canceled` or `expired`. |
| `type` | string | No | What the operation did: `query` for a bulk read, `mutation` for a bulk write. |

### Collection Created

**Slug:** `SHOPIFY_COLLECTION_CREATED`

**Type:** webhook

Triggers when a collection is created. Automated collections carry `rules` and
`disjunctive`; manual ones omit both.

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `admin_graphql_api_id` | string | No | The collection's GraphQL global id, e.g. `gid://shopify/Collection/349572300958`. |
| `body_html` | string | No | The collection description, as HTML. |
| `disjunctive` | boolean | No | For an automated collection, whether a product needs to match any rule (`true`) or every rule (`false`). Absent on manual collections. |
| `handle` | string | No | URL slug for the collection, unique within the store. |
| `id` | integer | Yes | Shopify's numeric id for the collection. |
| `published_at` | string | No | When the collection was published to its sales channels, ISO 8601. |
| `published_scope` | string | No | Where the collection is published: `web` for the online store only, `global` for every channel. |
| `rules` | array | No | Conditions selecting the collection's products. Present only on automated collections; absent when the merchant curates by hand. |
| `sort_order` | string | No | How products are ordered inside the collection, e.g. `most-relevant`, `best-selling`, `manual`. |
| `template_suffix` | string | No | Suffix of the theme template rendering this collection. Null when the default template is used. |
| `title` | string | No | The collection's name. |
| `updated_at` | string | No | When the collection was last modified, ISO 8601. |

### Collection Deleted

**Slug:** `SHOPIFY_COLLECTION_DELETED`

**Type:** webhook

Triggers when a collection is deleted. Shopify sends only the collection's ids and
publication scope, not its title, rules or products.

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `admin_graphql_api_id` | string | No | The deleted collection's GraphQL global id. |
| `id` | integer | Yes | Numeric id of the deleted collection. |
| `published_scope` | string | No | Where the collection had been published: `web` for the online store only, `global` for every channel. |

### Collection Updated

**Slug:** `SHOPIFY_COLLECTION_UPDATED`

**Type:** webhook

Triggers when a collection's own fields change, and also when a product is added to
or removed from a manual collection. The body never lists the collection's products
— read them with `SHOPIFY_LIST_COLLECTION_PRODUCTS`.

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `admin_graphql_api_id` | string | No | The collection's GraphQL global id, e.g. `gid://shopify/Collection/349572300958`. |
| `body_html` | string | No | The collection description, as HTML. |
| `disjunctive` | boolean | No | For an automated collection, whether a product needs to match any rule (`true`) or every rule (`false`). Absent on manual collections. |
| `handle` | string | No | URL slug for the collection, unique within the store. |
| `id` | integer | Yes | Shopify's numeric id for the collection. |
| `published_at` | string | No | When the collection was published to its sales channels, ISO 8601. |
| `published_scope` | string | No | Where the collection is published: `web` for the online store only, `global` for every channel. |
| `rules` | array | No | Conditions selecting the collection's products. Present only on automated collections; absent when the merchant curates by hand. |
| `sort_order` | string | No | How products are ordered inside the collection, e.g. `most-relevant`, `best-selling`, `manual`. |
| `template_suffix` | string | No | Suffix of the theme template rendering this collection. Null when the default template is used. |
| `title` | string | No | The collection's name. |
| `updated_at` | string | No | When the collection was last modified, ISO 8601. |

### Customer Segment Created

**Slug:** `SHOPIFY_CUSTOMER_SEGMENT_CREATED`

**Type:** webhook

Triggers when a customer segment is created. The body carries the segment's query,
not the customers it selects.

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `creationDate` | string | No | When the segment was created, ISO 8601. |
| `id` | integer | Yes | Shopify's numeric id for the segment. |
| `lastEditDate` | string | No | When the segment was last edited, ISO 8601. |
| `name` | string | No | Name the merchant gave the segment. |
| `query` | string | No | The segment's membership rule in Shopify's segment query language, e.g. `customer_account_status = 'DISABLED'`. |

### Customer Segment Deleted

**Slug:** `SHOPIFY_CUSTOMER_SEGMENT_DELETED`

**Type:** webhook

Triggers when a customer segment is deleted. Shopify sends only the segment id.

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | Numeric id of the deleted customer segment. |

### Customer Segment Updated

**Slug:** `SHOPIFY_CUSTOMER_SEGMENT_UPDATED`

**Type:** webhook

Triggers when a customer segment is renamed or its query is edited. Customers
entering or leaving a segment as they meet the query are not reported.

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `creationDate` | string | No | When the segment was created, ISO 8601. |
| `id` | integer | Yes | Shopify's numeric id for the segment. |
| `lastEditDate` | string | No | When the segment was last edited, ISO 8601. |
| `name` | string | No | Name the merchant gave the segment. |
| `query` | string | No | The segment's membership rule in Shopify's segment query language, e.g. `customer_account_status = 'DISABLED'`. |

### Discount Code Added

**Slug:** `SHOPIFY_DISCOUNT_CODE_ADDED`

**Type:** webhook

Triggers when a redeemable code is added to a discount, once per code. Discount
Updated fires alongside it, because the discount's own record changes too.

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `admin_graphql_api_id` | string | No | GraphQL global id of the discount the code belongs to. |
| `redeem_code` | object | No | One redeemable code belonging to a discount. |
| `updated_at` | string | No | When the discount's code list changed, ISO 8601. |

### Discount Code Removed

**Slug:** `SHOPIFY_DISCOUNT_CODE_REMOVED`

**Type:** webhook

Triggers when a redeemable code is removed from a discount, once per code. The code
stops working immediately; the discount itself survives.

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `admin_graphql_api_id` | string | No | GraphQL global id of the discount the code belongs to. |
| `redeem_code` | object | No | One redeemable code belonging to a discount. |
| `updated_at` | string | No | When the discount's code list changed, ISO 8601. |

### Discount Created

**Slug:** `SHOPIFY_DISCOUNT_CREATED`

**Type:** webhook

Triggers when a discount is created, whether it applies automatically or through a
code. The body is a summary — read the discount's value and conditions with
`SHOPIFY_GRAPH_QL_DISCOUNTS`.

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `admin_graphql_api_id` | string | No | The discount's GraphQL global id, e.g. `gid://shopify/DiscountCodeNode/1577218769054`. Discounts have no numeric id on this topic, so this is the identifier to use with the Admin GraphQL API. |
| `created_at` | string | No | When the discount was created, ISO 8601. |
| `status` | string | No | Where the discount is in its schedule: `ACTIVE`, `SCHEDULED` or `EXPIRED`. Arrives upper-cased. |
| `title` | string | No | Name of the discount as the merchant sees it. |
| `updated_at` | string | No | When the discount was last modified, ISO 8601. |

### Discount Deleted

**Slug:** `SHOPIFY_DISCOUNT_DELETED`

**Type:** webhook

Triggers when a discount is deleted. Its codes stop working at the same moment and
are not reported separately.

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `admin_graphql_api_id` | string | No | GraphQL global id of the deleted discount. Discounts have no numeric id on this topic, so this is the only handle on it. |
| `deleted_at` | string | No | When the discount was deleted, ISO 8601. Shopify leaves this null in practice; use the delivery's own arrival time instead. |

### Discount Updated

**Slug:** `SHOPIFY_DISCOUNT_UPDATED`

**Type:** webhook

Triggers when a discount is edited, and when it reaches its scheduled start or end
and `status` changes. Adding or removing a code fires this as well as the dedicated
code triggers.

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `admin_graphql_api_id` | string | No | The discount's GraphQL global id, e.g. `gid://shopify/DiscountCodeNode/1577218769054`. Discounts have no numeric id on this topic, so this is the identifier to use with the Admin GraphQL API. |
| `created_at` | string | No | When the discount was created, ISO 8601. |
| `status` | string | No | Where the discount is in its schedule: `ACTIVE`, `SCHEDULED` or `EXPIRED`. Arrives upper-cased. |
| `title` | string | No | Name of the discount as the merchant sees it. |
| `updated_at` | string | No | When the discount was last modified, ISO 8601. |

### Inventory Item Created

**Slug:** `SHOPIFY_INVENTORY_ITEM_CREATED`

**Type:** webhook

Triggers when an inventory item is created, which Shopify does once per new product
variant. It carries the variant's stock-keeping fields — SKU, cost, weight, customs
— but no quantities.

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `admin_graphql_api_id` | string | No | The inventory item's GraphQL global id, e.g. `gid://shopify/InventoryItem/50334998462622`. |
| `cost` | string | No | Unit cost the merchant records for margin reporting, as a decimal string in the shop's currency. |
| `country_code_of_origin` | string | No | ISO 3166-1 alpha-2 country the item was made in. |
| `country_harmonized_system_codes` | array | No | HS tariff codes that override `harmonized_system_code` for particular destination countries. |
| `created_at` | string | No | When the inventory item was created, ISO 8601. |
| `harmonized_system_code` | string | No | HS tariff code used to calculate customs duty. |
| `id` | integer | Yes | Shopify's numeric id for the inventory item. |
| `province_code_of_origin` | string | No | Province or state the item was made in, where recorded. |
| `requires_shipping` | boolean | No | Whether the item is physical and has to be shipped. |
| `sku` | string | No | Stock keeping unit shared with the variant. |
| `tracked` | boolean | No | Whether Shopify counts stock for this item. Untracked items never fire the inventory-level topics. |
| `updated_at` | string | No | When the inventory item was last modified, ISO 8601. |
| `weight_unit` | string | No | Unit `weight_value` is expressed in, e.g. `lb`, `kg`. |
| `weight_value` | number | No | Shipping weight of the item, in `weight_unit`. |

### Inventory Item Deleted

**Slug:** `SHOPIFY_INVENTORY_ITEM_DELETED`

**Type:** webhook

Triggers when an inventory item is deleted, which happens for each variant of a
deleted product. Shopify sends the item's ids and customs fields only, not its SKU
or cost.

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `admin_graphql_api_id` | string | No | The deleted inventory item's GraphQL global id. |
| `country_code_of_origin` | string | No | ISO 3166-1 alpha-2 country the item was made in. |
| `country_harmonized_system_codes` | array | No | HS tariff codes that had overridden `harmonized_system_code` for particular destination countries. |
| `harmonized_system_code` | string | No | HS tariff code that had been set for customs. |
| `id` | integer | Yes | Numeric id of the deleted inventory item. |
| `province_code_of_origin` | string | No | Province or state the item was made in, where recorded. |

### Inventory Item Updated

**Slug:** `SHOPIFY_INVENTORY_ITEM_UPDATED`

**Type:** webhook

Triggers when an inventory item's stock-keeping fields change, such as its SKU,
unit cost, weight or customs codes. Quantity changes are not here; those come
through Inventory Level Updated.

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `admin_graphql_api_id` | string | No | The inventory item's GraphQL global id, e.g. `gid://shopify/InventoryItem/50334998462622`. |
| `cost` | string | No | Unit cost the merchant records for margin reporting, as a decimal string in the shop's currency. |
| `country_code_of_origin` | string | No | ISO 3166-1 alpha-2 country the item was made in. |
| `country_harmonized_system_codes` | array | No | HS tariff codes that override `harmonized_system_code` for particular destination countries. |
| `created_at` | string | No | When the inventory item was created, ISO 8601. |
| `harmonized_system_code` | string | No | HS tariff code used to calculate customs duty. |
| `id` | integer | Yes | Shopify's numeric id for the inventory item. |
| `province_code_of_origin` | string | No | Province or state the item was made in, where recorded. |
| `requires_shipping` | boolean | No | Whether the item is physical and has to be shipped. |
| `sku` | string | No | Stock keeping unit shared with the variant. |
| `tracked` | boolean | No | Whether Shopify counts stock for this item. Untracked items never fire the inventory-level topics. |
| `updated_at` | string | No | When the inventory item was last modified, ISO 8601. |
| `weight_unit` | string | No | Unit `weight_value` is expressed in, e.g. `lb`, `kg`. |
| `weight_value` | number | No | Shipping weight of the item, in `weight_unit`. |

### Inventory Level Updated

**Slug:** `SHOPIFY_INVENTORY_LEVEL_UPDATED`

**Type:** webhook

Triggers when the quantity of an inventory item changes at a location, in either
direction, once per location affected. Shopify sends the new `available` count but
no delta.

#### Configuration

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `location_id` | integer | No | Only deliver events for this Shopify location, as its numeric id. Use `SHOPIFY_LIST_LOCATIONS` to find location ids. Leave unset to deliver every location. |

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `admin_graphql_api_id` | string | No | The inventory level's GraphQL global id, which carries the inventory item id as a query parameter. |
| `available` | integer | No | Units available to sell at this location after the change. Null while Shopify is still settling the count. |
| `inventory_item_id` | integer | No | Numeric id of the inventory item. Join it to a variant's `inventory_item_id` to find the product. |
| `location_id` | integer | No | Numeric id of the location holding the stock. |
| `updated_at` | string | No | When the level was last changed, ISO 8601. |

### Inventory Shipment Created

**Slug:** `SHOPIFY_INVENTORY_SHIPMENT_CREATED`

**Type:** webhook

Triggers when a shipment is created against a stock transfer, once per consignment.
It starts as `DRAFT` and moves on through Inventory Shipment In Transit and
Inventory Shipment Items Received.

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `happened_at` | string | No | When the shipment was created, ISO 8601. |
| `id` | string | Yes | GraphQL global id of the shipment, e.g. `gid://shopify/InventoryShipment/3256352926`. Shipments have no numeric id on this topic. |
| `line_items` | array | No | The shipment's lines and the units each one carries. |
| `status` | string | No | Where the shipment stands, `DRAFT` when it is first created. Arrives upper-cased. |
| `tracking` | object | No | Carrier tracking recorded against an inventory shipment. |

### Inventory Shipment In Transit

**Slug:** `SHOPIFY_INVENTORY_SHIPMENT_IN_TRANSIT`

**Type:** webhook

Triggers when a stock shipment is marked in transit. Shopify sends the status
change only, with no lines and no tracking.

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `happened_at` | string | No | When the shipment was marked in transit, ISO 8601. |
| `id` | string | Yes | GraphQL global id of the shipment now in transit. |
| `status` | string | No | Where the shipment stands, `IN_TRANSIT` on this event. Arrives upper-cased. |

### Inventory Shipment Items Received

**Slug:** `SHOPIFY_INVENTORY_SHIPMENT_ITEMS_RECEIVED`

**Type:** webhook

Triggers when items from a stock shipment are received, once per receiving step.
`status` reads `PARTIALLY_RECEIVED` until the last step, and each line carries its
accepted and rejected counts before and after.

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `happened_at` | string | No | When the items were received, ISO 8601. |
| `id` | string | Yes | GraphQL global id of the shipment being received. |
| `items_received` | array | No | The lines touched by this receipt, each with its counts before and after and what is still outstanding. |
| `status` | string | No | Where the shipment stands after this step, e.g. `PARTIALLY_RECEIVED`, `RECEIVED`. Arrives upper-cased. |

### Inventory Shipment Tracking Updated

**Slug:** `SHOPIFY_INVENTORY_SHIPMENT_TRACKING_UPDATED`

**Type:** webhook

Triggers when the carrier tracking on a stock shipment is set or changed. The body
carries the tracking as it now stands, not what it replaced.

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `happened_at` | string | No | When the tracking was changed, ISO 8601. |
| `shipment_id` | string | No | GraphQL global id of the shipment. This topic names the shipment as `shipment_id`, unlike the other shipment topics which use `id`. |
| `updated_tracking` | object | No | Carrier tracking recorded against an inventory shipment. |

### Inventory Stocked At Location

**Slug:** `SHOPIFY_INVENTORY_STOCKED_AT_LOCATION`

**Type:** webhook

Triggers when an inventory item starts being stocked at a location. This is the
item being activated there, not its quantity changing — later quantity changes come
through Inventory Level Updated.

#### Configuration

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `location_id` | integer | No | Only deliver events for this Shopify location, as its numeric id. Use `SHOPIFY_LIST_LOCATIONS` to find location ids. Leave unset to deliver every location. |

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `admin_graphql_api_id` | string | No | The inventory level's GraphQL global id, which carries the inventory item id as a query parameter. |
| `available` | integer | No | Units available to sell at this location after the change. Null while Shopify is still settling the count. |
| `inventory_item_id` | integer | No | Numeric id of the inventory item. Join it to a variant's `inventory_item_id` to find the product. |
| `location_id` | integer | No | Numeric id of the location holding the stock. |
| `updated_at` | string | No | When the level was last changed, ISO 8601. |

### Inventory Transfer Ready To Ship

**Slug:** `SHOPIFY_INVENTORY_TRANSFER_READY_TO_SHIP`

**Type:** webhook

Triggers when a stock transfer between the merchant's locations is marked ready to
ship, before any shipment exists against it. Its lines name transfer-line ids
rather than products.

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `happened_at` | string | No | When the transfer was marked ready to ship, ISO 8601. |
| `id` | string | Yes | GraphQL global id of the transfer, e.g. `gid://shopify/InventoryTransfer/6167298206`. Transfers have no numeric id on this topic. |
| `line_items` | array | No | The transfer's lines and the units each one moves. |
| `status` | string | No | Where the transfer stands, `READY_TO_SHIP` on this event. Arrives upper-cased. |

### Inventory Unstocked At Location

**Slug:** `SHOPIFY_INVENTORY_UNSTOCKED_AT_LOCATION`

**Type:** webhook

Triggers when an inventory item stops being stocked at a location, either because
the merchant deactivated it there or because the product was deleted. The body is
just the item and location ids.

#### Configuration

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `location_id` | integer | No | Only deliver events for this Shopify location, as its numeric id. Use `SHOPIFY_LIST_LOCATIONS` to find location ids. Leave unset to deliver every location. |

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `inventory_item_id` | integer | No | Numeric id of the inventory item that is no longer stocked here. Join it to a variant's `inventory_item_id` to find the product. |
| `location_id` | integer | No | Numeric id of the location that stopped stocking the item. |

### Location Activated

**Slug:** `SHOPIFY_LOCATION_ACTIVATED`

**Type:** webhook

Triggers when a location is activated and can hold stock and fulfil orders again.
Its previous stock is not restored; that arrives as Inventory Stocked At Location.

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `active` | boolean | No | Whether the location can hold stock and fulfil orders. Deactivating one leaves it on the store, unusable. |
| `address1` | string | No | First line of the address. |
| `address2` | string | No | Second line of the address. |
| `admin_graphql_api_id` | string | No | The location's GraphQL global id, e.g. `gid://shopify/Location/89748275358`. |
| `city` | string | No | City of the address. |
| `country` | string | No | ISO 3166-1 alpha-2 country code, e.g. `CA`. |
| `country_code` | string | No | ISO 3166-1 alpha-2 country code, same as `country`. |
| `country_name` | string | No | Country name in full, e.g. `Canada`. |
| `created_at` | string | No | When the location was created, ISO 8601. |
| `id` | integer | Yes | Shopify's numeric id for the location. |
| `legacy` | boolean | No | Whether this is the implicit location Shopify created before multi-location inventory, rather than one the merchant added. |
| `name` | string | No | Name the merchant gave the location. |
| `phone` | string | No | Contact phone number for the location. |
| `province` | string | No | Province or state name, e.g. `Ontario`. |
| `province_code` | string | No | Short province or state code, e.g. `ON`. |
| `updated_at` | string | No | When the location was last modified, ISO 8601. |
| `zip` | string | No | Postal or ZIP code. |

### Location Created

**Slug:** `SHOPIFY_LOCATION_CREATED`

**Type:** webhook

Triggers when a location is added to the store. A new location can hold inventory
straight away, so this is the first sight of a `location_id` that will appear on
the inventory triggers.

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `active` | boolean | No | Whether the location can hold stock and fulfil orders. Deactivating one leaves it on the store, unusable. |
| `address1` | string | No | First line of the address. |
| `address2` | string | No | Second line of the address. |
| `admin_graphql_api_id` | string | No | The location's GraphQL global id, e.g. `gid://shopify/Location/89748275358`. |
| `city` | string | No | City of the address. |
| `country` | string | No | ISO 3166-1 alpha-2 country code, e.g. `CA`. |
| `country_code` | string | No | ISO 3166-1 alpha-2 country code, same as `country`. |
| `country_name` | string | No | Country name in full, e.g. `Canada`. |
| `created_at` | string | No | When the location was created, ISO 8601. |
| `id` | integer | Yes | Shopify's numeric id for the location. |
| `legacy` | boolean | No | Whether this is the implicit location Shopify created before multi-location inventory, rather than one the merchant added. |
| `name` | string | No | Name the merchant gave the location. |
| `phone` | string | No | Contact phone number for the location. |
| `province` | string | No | Province or state name, e.g. `Ontario`. |
| `province_code` | string | No | Short province or state code, e.g. `ON`. |
| `updated_at` | string | No | When the location was last modified, ISO 8601. |
| `zip` | string | No | Postal or ZIP code. |

### Location Deactivated

**Slug:** `SHOPIFY_LOCATION_DEACTIVATED`

**Type:** webhook

Triggers when a location is deactivated. It stays on the store with `active`
reading `false`, but can no longer hold stock or fulfil orders.

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `active` | boolean | No | Whether the location can hold stock and fulfil orders. Deactivating one leaves it on the store, unusable. |
| `address1` | string | No | First line of the address. |
| `address2` | string | No | Second line of the address. |
| `admin_graphql_api_id` | string | No | The location's GraphQL global id, e.g. `gid://shopify/Location/89748275358`. |
| `city` | string | No | City of the address. |
| `country` | string | No | ISO 3166-1 alpha-2 country code, e.g. `CA`. |
| `country_code` | string | No | ISO 3166-1 alpha-2 country code, same as `country`. |
| `country_name` | string | No | Country name in full, e.g. `Canada`. |
| `created_at` | string | No | When the location was created, ISO 8601. |
| `id` | integer | Yes | Shopify's numeric id for the location. |
| `legacy` | boolean | No | Whether this is the implicit location Shopify created before multi-location inventory, rather than one the merchant added. |
| `name` | string | No | Name the merchant gave the location. |
| `phone` | string | No | Contact phone number for the location. |
| `province` | string | No | Province or state name, e.g. `Ontario`. |
| `province_code` | string | No | Short province or state code, e.g. `ON`. |
| `updated_at` | string | No | When the location was last modified, ISO 8601. |
| `zip` | string | No | Postal or ZIP code. |

### Location Deleted

**Slug:** `SHOPIFY_LOCATION_DELETED`

**Type:** webhook

Triggers when a location is deleted. Shopify sends only the location id, and a
location must be deactivated first, so Location Deactivated normally arrives before
it.

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | Numeric id of the deleted location. This is the same id the inventory topics carry as `location_id`. |

### Location Updated

**Slug:** `SHOPIFY_LOCATION_UPDATED`

**Type:** webhook

Triggers when a location's own details change, such as its name, address or
fulfilment settings. Activation and deactivation have their own triggers and are
not reported here.

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `active` | boolean | No | Whether the location can hold stock and fulfil orders. Deactivating one leaves it on the store, unusable. |
| `address1` | string | No | First line of the address. |
| `address2` | string | No | Second line of the address. |
| `admin_graphql_api_id` | string | No | The location's GraphQL global id, e.g. `gid://shopify/Location/89748275358`. |
| `city` | string | No | City of the address. |
| `country` | string | No | ISO 3166-1 alpha-2 country code, e.g. `CA`. |
| `country_code` | string | No | ISO 3166-1 alpha-2 country code, same as `country`. |
| `country_name` | string | No | Country name in full, e.g. `Canada`. |
| `created_at` | string | No | When the location was created, ISO 8601. |
| `id` | integer | Yes | Shopify's numeric id for the location. |
| `legacy` | boolean | No | Whether this is the implicit location Shopify created before multi-location inventory, rather than one the merchant added. |
| `name` | string | No | Name the merchant gave the location. |
| `phone` | string | No | Contact phone number for the location. |
| `province` | string | No | Province or state name, e.g. `Ontario`. |
| `province_code` | string | No | Short province or state code, e.g. `ON`. |
| `updated_at` | string | No | When the location was last modified, ISO 8601. |
| `zip` | string | No | Postal or ZIP code. |

### Market Created

**Slug:** `SHOPIFY_MARKET_CREATED`

**Type:** webhook

Triggers when a market is created. New markets start as `draft` and sell nothing
until they are activated, which arrives as Market Updated.

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | Shopify's numeric id for the market. |
| `name` | string | No | Name the merchant gave the market. |
| `status` | string | No | Whether the market is live: `active` sells to it, `draft` does not. |
| `type` | string | No | What the market is scoped by, e.g. `region`, `none` for a market with no regions assigned yet. |

### Market Updated

**Slug:** `SHOPIFY_MARKET_UPDATED`

**Type:** webhook

Triggers when a market is renamed, activated or otherwise changed. The body is a
summary; the market's regions, currencies, domains and price lists are not
included.

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | Shopify's numeric id for the market. |
| `name` | string | No | Name the merchant gave the market. |
| `status` | string | No | Whether the market is live: `active` sells to it, `draft` does not. |
| `type` | string | No | What the market is scoped by, e.g. `region`, `none` for a market with no regions assigned yet. |

### Metafield Definition Created

**Slug:** `SHOPIFY_METAFIELD_DEFINITION_CREATED`

**Type:** webhook

Triggers when a metafield definition is created, i.e. the schema for one custom
field on a resource. Shopify follows every creation with a Metafield Definition
Updated for the same definition moments later.

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `access_only` | boolean | No | Whether the definition only grants access to metafields another owner defined, rather than defining them itself. |
| `admin_filter_status` | string | No | Filterability as a status string, e.g. `not_filterable`. Shopify sends this alongside `admin_filterable_status`. |
| `admin_filterable` | boolean | No | Whether staff can filter admin lists by this field. |
| `admin_filterable_status` | string | No | Why the field is or is not filterable in the admin. |
| `app_config_managed` | boolean | No | Whether an app owns the definition through its configuration, in which case staff cannot edit it. |
| `created_at` | string | No | When the definition was created, ISO 8601. |
| `customer_access` | string | No | What customer-account surfaces may read the metafield, e.g. `none`, `read`. |
| `deleting` | boolean | No | Whether Shopify is removing the definition and its metafields in the background. |
| `description` | string | No | Help text shown to staff under the field. |
| `id` | integer | Yes | Shopify's numeric id for the definition. |
| `key` | string | No | Key of the metafield within its namespace. |
| `merchant_writeable` | boolean | No | Whether staff can edit the metafield in the admin. |
| `name` | string | No | Label shown to staff in the Shopify admin. |
| `namespace` | string | No | Namespace grouping the definition's metafields, e.g. `custom`. Namespace and key together identify a metafield on a resource. |
| `option_linkable` | boolean | No | Whether product option values can be linked to this field's metaobject entries. |
| `options` | array | No | Validation rules the definition enforces on values written against it, such as a minimum or a regular expression. |
| `owner_type` | string | No | Resource the definition applies to, title-cased on this topic — `Product`, `Collection`, `Shop` — not the GraphQL enum casing. |
| `pinned_position` | integer | No | Position of the field among those pinned to the top of the admin editor. `0` when it is not pinned. |
| `smart_collection_condition` | boolean | No | Whether the field can be used as a rule in an automated collection. |
| `standard_template_id` | string | No | Id of the Shopify standard definition this was created from, if the merchant picked one instead of defining their own. |
| `storefront_readable` | boolean | No | Whether the Storefront API exposes the metafield. |
| `type_name` | string | No | Metafield type the definition enforces, e.g. `single_line_text_field`, `number_integer`. |
| `unique_values` | boolean | No | Whether Shopify rejects a value already used on another resource. |
| `updated_at` | string | No | When the definition was last modified, ISO 8601. |
| `use_as_collection_condition` | boolean | No | Whether the merchant has turned the field on as an automated collection rule. |
| `validation_status` | string | No | Whether existing metafields satisfy the definition's validations: `all_valid`, `in_progress` or `some_invalid`. |

### Metafield Definition Deleted

**Slug:** `SHOPIFY_METAFIELD_DEFINITION_DELETED`

**Type:** webhook

Triggers when a metafield definition is deleted. Shopify sends only its id, type
class and creating app — no namespace, key or owner resource — so this trigger
cannot offer the filters its create and update siblings do.

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | GraphQL global id of the deleted definition, e.g. `gid://shopify/MetafieldDefinition/254184521886`. The create and update topics send a numeric id instead; the digits at the end of this one are that same id. |
| `type` | string | No | Internal class name of the metafield type the definition used, e.g. `ShopifyMetafields::Types::SingleLineTextFieldType`. Not the `type_name` the create and update topics send. |

### Metafield Definition Updated

**Slug:** `SHOPIFY_METAFIELD_DEFINITION_UPDATED`

**Type:** webhook

Triggers when a metafield definition's name, description, validations, pinning or
storefront access change. Values written into the metafields it defines are not
reported.

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `access_only` | boolean | No | Whether the definition only grants access to metafields another owner defined, rather than defining them itself. |
| `admin_filter_status` | string | No | Filterability as a status string, e.g. `not_filterable`. Shopify sends this alongside `admin_filterable_status`. |
| `admin_filterable` | boolean | No | Whether staff can filter admin lists by this field. |
| `admin_filterable_status` | string | No | Why the field is or is not filterable in the admin. |
| `app_config_managed` | boolean | No | Whether an app owns the definition through its configuration, in which case staff cannot edit it. |
| `created_at` | string | No | When the definition was created, ISO 8601. |
| `customer_access` | string | No | What customer-account surfaces may read the metafield, e.g. `none`, `read`. |
| `deleting` | boolean | No | Whether Shopify is removing the definition and its metafields in the background. |
| `description` | string | No | Help text shown to staff under the field. |
| `id` | integer | Yes | Shopify's numeric id for the definition. |
| `key` | string | No | Key of the metafield within its namespace. |
| `merchant_writeable` | boolean | No | Whether staff can edit the metafield in the admin. |
| `name` | string | No | Label shown to staff in the Shopify admin. |
| `namespace` | string | No | Namespace grouping the definition's metafields, e.g. `custom`. Namespace and key together identify a metafield on a resource. |
| `option_linkable` | boolean | No | Whether product option values can be linked to this field's metaobject entries. |
| `options` | array | No | Validation rules the definition enforces on values written against it, such as a minimum or a regular expression. |
| `owner_type` | string | No | Resource the definition applies to, title-cased on this topic — `Product`, `Collection`, `Shop` — not the GraphQL enum casing. |
| `pinned_position` | integer | No | Position of the field among those pinned to the top of the admin editor. `0` when it is not pinned. |
| `smart_collection_condition` | boolean | No | Whether the field can be used as a rule in an automated collection. |
| `standard_template_id` | string | No | Id of the Shopify standard definition this was created from, if the merchant picked one instead of defining their own. |
| `storefront_readable` | boolean | No | Whether the Storefront API exposes the metafield. |
| `type_name` | string | No | Metafield type the definition enforces, e.g. `single_line_text_field`, `number_integer`. |
| `unique_values` | boolean | No | Whether Shopify rejects a value already used on another resource. |
| `updated_at` | string | No | When the definition was last modified, ISO 8601. |
| `use_as_collection_condition` | boolean | No | Whether the merchant has turned the field on as an automated collection rule. |
| `validation_status` | string | No | Whether existing metafields satisfy the definition's validations: `all_valid`, `in_progress` or `some_invalid`. |

### Product Created

**Slug:** `SHOPIFY_PRODUCT_CREATED`

**Type:** webhook

Triggers when a product is created, from the admin, the API, an import or an app. A
product with tracked inventory also fires Inventory Item Created and Inventory
Stocked At Location.

#### Configuration

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `product_type` | string | No | Only deliver products carrying this product type, as set on the product. Leave unset to deliver every type. |
| `status` | string | No | Only deliver products in this state: `active`, `draft` or `archived`. Leave unset to deliver every state. |

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `admin_graphql_api_id` | string | No | The product's GraphQL global id, e.g. `gid://shopify/Product/8860969205918`. |
| `body_html` | string | No | The product description, as HTML. |
| `category` | object | No | A product's node in Shopify's standard product taxonomy. |
| `created_at` | string | No | When the product was created, ISO 8601 with the shop's UTC offset. |
| `handle` | string | No | URL slug for the product, unique within the store, e.g. `merino-crew-neck`. |
| `has_variants_that_requires_components` | boolean | No | Whether any variant is a bundle assembled from other products, which cannot be stocked directly. |
| `id` | integer | Yes | Shopify's numeric id for the product. |
| `image` | object | No | One image on a product. |
| `images` | array | No | Product images, in the order they appear on the product. |
| `media` | array | No | Images, videos and 3D models attached to the product. |
| `options` | array | No | The axes the variants vary along, such as Size or Colour. |
| `product_type` | string | No | The merchant's own product-type label, a free-text field. |
| `published_at` | string | No | When the product was published to its sales channels, ISO 8601. Null while it is unpublished. |
| `published_scope` | string | No | Where the product is published: `web` for the online store only, `global` for every channel. |
| `status` | string | No | Whether the product is `active`, `draft` or `archived`. Only `active` products can be sold. |
| `tags` | string | No | The product's tags as one comma-separated string, e.g. `new, sale`. Shopify sends this as text, not an array. |
| `template_suffix` | string | No | Suffix of the theme template rendering this product, e.g. `bold` for `product.bold.liquid`. Null when the default template is used. |
| `title` | string | No | The product's name. |
| `updated_at` | string | No | When the product was last modified, ISO 8601. |
| `variant_gids` | array | No | The same variants as GraphQL ids with their modification times — Shopify's own index for spotting which variant changed. |
| `variants` | array | No | Every purchasable variant of the product. |
| `vendor` | string | No | Vendor or brand recorded on the product. |

### Product Deleted

**Slug:** `SHOPIFY_PRODUCT_DELETED`

**Type:** webhook

Triggers when a product is deleted. Shopify sends only the product id, and a
product with tracked inventory also fires Inventory Unstocked At Location and
Inventory Item Deleted per variant.

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | Numeric id of the deleted product. The record is already gone, so this is the only handle on it — match it against your own copy. |

### Product Updated

**Slug:** `SHOPIFY_PRODUCT_UPDATED`

**Type:** webhook

Triggers when any field of a product changes, as one delivery per edit rather than
one per field. It also fires when a variant's inventory quantity changes and when a
metafield is written on the product, which makes it the highest-volume product
trigger.

#### Configuration

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `product_type` | string | No | Only deliver products carrying this product type, as set on the product. Leave unset to deliver every type. |
| `status` | string | No | Only deliver products in this state: `active`, `draft` or `archived`. Leave unset to deliver every state. |

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `admin_graphql_api_id` | string | No | The product's GraphQL global id, e.g. `gid://shopify/Product/8860969205918`. |
| `body_html` | string | No | The product description, as HTML. |
| `category` | object | No | A product's node in Shopify's standard product taxonomy. |
| `created_at` | string | No | When the product was created, ISO 8601 with the shop's UTC offset. |
| `handle` | string | No | URL slug for the product, unique within the store, e.g. `merino-crew-neck`. |
| `has_variants_that_requires_components` | boolean | No | Whether any variant is a bundle assembled from other products, which cannot be stocked directly. |
| `id` | integer | Yes | Shopify's numeric id for the product. |
| `image` | object | No | One image on a product. |
| `images` | array | No | Product images, in the order they appear on the product. |
| `media` | array | No | Images, videos and 3D models attached to the product. |
| `options` | array | No | The axes the variants vary along, such as Size or Colour. |
| `product_type` | string | No | The merchant's own product-type label, a free-text field. |
| `published_at` | string | No | When the product was published to its sales channels, ISO 8601. Null while it is unpublished. |
| `published_scope` | string | No | Where the product is published: `web` for the online store only, `global` for every channel. |
| `status` | string | No | Whether the product is `active`, `draft` or `archived`. Only `active` products can be sold. |
| `tags` | string | No | The product's tags as one comma-separated string, e.g. `new, sale`. Shopify sends this as text, not an array. |
| `template_suffix` | string | No | Suffix of the theme template rendering this product, e.g. `bold` for `product.bold.liquid`. Null when the default template is used. |
| `title` | string | No | The product's name. |
| `updated_at` | string | No | When the product was last modified, ISO 8601. |
| `variant_gids` | array | No | The same variants as GraphQL ids with their modification times — Shopify's own index for spotting which variant changed. |
| `variants` | array | No | Every purchasable variant of the product. |
| `vendor` | string | No | Vendor or brand recorded on the product. |

### Product Variant Back In Stock

**Slug:** `SHOPIFY_PRODUCT_VARIANT_BACK_IN_STOCK`

**Type:** webhook

Triggers when a variant's stock crosses back above zero across every location, not
on every restock. It arrives a few seconds after the inventory change that caused
it, so it is not ordered against Inventory Level Updated.

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `admin_graphql_api_id` | string | No | The variant's GraphQL global id, e.g. `gid://shopify/ProductVariant/48209618862238`. This is the id form the Admin GraphQL API takes. |
| `barcode` | string | No | Barcode, UPC, ISBN or GTIN recorded on the variant. |
| `compare_at_price` | string | No | Price the variant is compared against to show a markdown, as a decimal string. Null when the variant is not on sale. |
| `created_at` | string | No | When the variant was created, ISO 8601 with the shop's UTC offset. |
| `id` | integer | Yes | Shopify's numeric id for the variant. |
| `image_id` | integer | No | Numeric id of the product image assigned to this variant. |
| `inventory_item_id` | integer | No | Numeric id of the inventory item that holds this variant's stock. The join key to the inventory topics, which name the item rather than the variant. |
| `inventory_policy` | string | No | What Shopify does once stock reaches zero: `deny` stops the sale, `continue` allows overselling. |
| `inventory_quantity` | integer | No | Units available across every location, after the event. |
| `old_inventory_quantity` | integer | No | Units available across every location before the event. |
| `option1` | string | No | Value for the product's first option, e.g. `Small` when option one is `Size`. |
| `option2` | string | No | Value for the product's second option, if it has one. |
| `option3` | string | No | Value for the product's third option, if it has one. |
| `position` | integer | No | 1-based order of the variant within its product. |
| `price` | string | No | Current price in the shop's currency, as a decimal string, e.g. `9.99`. Shopify sends money as strings to avoid float rounding. |
| `product_id` | integer | No | Numeric id of the product this variant belongs to. |
| `sku` | string | No | The merchant's stock keeping unit for the variant. |
| `taxable` | boolean | No | Whether tax is charged when the variant is sold. |
| `title` | string | No | The variant's name, built from its option values, e.g. `Small / Blue`. Single-variant products get `Default Title`. |
| `updated_at` | string | No | When the variant was last modified, ISO 8601. |

### Product Variant Out Of Stock

**Slug:** `SHOPIFY_PRODUCT_VARIANT_OUT_OF_STOCK`

**Type:** webhook

Triggers when a variant's stock crosses to zero across every location, not on every
sale. It arrives a few seconds after the inventory change that caused it, so it is
not ordered against Inventory Level Updated.

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `admin_graphql_api_id` | string | No | The variant's GraphQL global id, e.g. `gid://shopify/ProductVariant/48209618862238`. This is the id form the Admin GraphQL API takes. |
| `barcode` | string | No | Barcode, UPC, ISBN or GTIN recorded on the variant. |
| `compare_at_price` | string | No | Price the variant is compared against to show a markdown, as a decimal string. Null when the variant is not on sale. |
| `created_at` | string | No | When the variant was created, ISO 8601 with the shop's UTC offset. |
| `id` | integer | Yes | Shopify's numeric id for the variant. |
| `image_id` | integer | No | Numeric id of the product image assigned to this variant. |
| `inventory_item_id` | integer | No | Numeric id of the inventory item that holds this variant's stock. The join key to the inventory topics, which name the item rather than the variant. |
| `inventory_policy` | string | No | What Shopify does once stock reaches zero: `deny` stops the sale, `continue` allows overselling. |
| `inventory_quantity` | integer | No | Units available across every location, after the event. |
| `old_inventory_quantity` | integer | No | Units available across every location before the event. |
| `option1` | string | No | Value for the product's first option, e.g. `Small` when option one is `Size`. |
| `option2` | string | No | Value for the product's second option, if it has one. |
| `option3` | string | No | Value for the product's third option, if it has one. |
| `position` | integer | No | 1-based order of the variant within its product. |
| `price` | string | No | Current price in the shop's currency, as a decimal string, e.g. `9.99`. Shopify sends money as strings to avoid float rounding. |
| `product_id` | integer | No | Numeric id of the product this variant belongs to. |
| `sku` | string | No | The merchant's stock keeping unit for the variant. |
| `taxable` | boolean | No | Whether tax is charged when the variant is sold. |
| `title` | string | No | The variant's name, built from its option values, e.g. `Small / Blue`. Single-variant products get `Default Title`. |
| `updated_at` | string | No | When the variant was last modified, ISO 8601. |

### Shipping Profile Created

**Slug:** `SHOPIFY_SHIPPING_PROFILE_CREATED`

**Type:** webhook

Triggers when a shipping profile is created. The body is a summary; the profile's
zones, rates and products are not included.

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `admin_graphql_api_id` | string | No | The profile's GraphQL global id, e.g. `gid://shopify/DeliveryProfile/109752320158`. |
| `default` | boolean | No | Whether this is the store's General profile, which covers every product no custom profile claims. |
| `id` | integer | Yes | Shopify's numeric id for the shipping profile. |
| `name` | string | No | Name the merchant gave the profile. |
| `profile_type` | string | No | What the profile governs, e.g. `shipping`. |
| `version` | integer | No | Revision counter Shopify increments on every edit to the profile. |

### Shipping Profile Deleted

**Slug:** `SHOPIFY_SHIPPING_PROFILE_DELETED`

**Type:** webhook

Triggers when a shipping profile is deleted. Unusually for a Shopify delete event
the body is the whole profile, and the products it covered fall back to the store's
General profile.

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `admin_graphql_api_id` | string | No | The profile's GraphQL global id, e.g. `gid://shopify/DeliveryProfile/109752320158`. |
| `default` | boolean | No | Whether this is the store's General profile, which covers every product no custom profile claims. |
| `id` | integer | Yes | Shopify's numeric id for the shipping profile. |
| `name` | string | No | Name the merchant gave the profile. |
| `profile_type` | string | No | What the profile governs, e.g. `shipping`. |
| `version` | integer | No | Revision counter Shopify increments on every edit to the profile. |

### Shipping Profile Updated

**Slug:** `SHOPIFY_SHIPPING_PROFILE_UPDATED`

**Type:** webhook

Triggers when a shipping profile is renamed, or its zones, rates or product
assignments change. Which of those changed is not reported, only that `version`
advanced.

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `admin_graphql_api_id` | string | No | The profile's GraphQL global id, e.g. `gid://shopify/DeliveryProfile/109752320158`. |
| `default` | boolean | No | Whether this is the store's General profile, which covers every product no custom profile claims. |
| `id` | integer | Yes | Shopify's numeric id for the shipping profile. |
| `name` | string | No | Name the merchant gave the profile. |
| `profile_type` | string | No | What the profile governs, e.g. `shipping`. |
| `version` | integer | No | Revision counter Shopify increments on every edit to the profile. |

### Shop Settings Updated

**Slug:** `SHOPIFY_SHOP_SETTINGS_UPDATED`

**Type:** webhook

Triggers when the store's own record changes — its address, currency, timezone,
plan, tax or checkout settings. It also fires when a metafield on the store is
written or deleted, with none of these fields moving.

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `address1` | string | No | First line of the store's business address. |
| `address2` | string | No | Second line of the store's business address. |
| `auto_configure_tax_inclusivity` | boolean | No | Whether Shopify decides tax inclusivity per market rather than using one setting for the store. |
| `checkout_api_supported` | boolean | No | Whether the store may use the Checkout API. |
| `city` | string | No | City of the business address. |
| `country` | string | No | ISO 3166-1 alpha-2 country code, e.g. `US`. |
| `country_code` | string | No | ISO 3166-1 alpha-2 country code, same as `country`. |
| `country_name` | string | No | Country name in full, e.g. `United States`. |
| `county_taxes` | boolean | No | Whether county tax rates are applied on top of state rates. |
| `created_at` | string | No | When the store was created, ISO 8601. |
| `currency` | string | No | ISO 4217 code of the currency the store prices in, e.g. `USD`. |
| `customer_email` | string | No | Address shoppers see as the sender and reply-to on store email. |
| `domain` | string | No | The store's primary customer-facing domain, which is the custom one once the merchant has connected it. |
| `eligible_for_payments` | boolean | No | Whether the store may use Shopify Payments. |
| `email` | string | No | The merchant's own contact address for account matters. |
| `enabled_presentment_currencies` | array | No | Every currency shoppers may be shown prices in. |
| `finances` | boolean | No | Whether financial data is available for the store. |
| `google_apps_domain` | string | No | Google Workspace domain linked to the store, where one is. |
| `google_apps_login_enabled` | boolean | No | Whether staff sign in with that Google Workspace domain. |
| `has_discounts` | boolean | No | Whether the store has ever created a discount. |
| `has_gift_cards` | boolean | No | Whether the store has ever issued a gift card. |
| `has_storefront` | boolean | No | Whether the store has an online storefront at all. |
| `iana_timezone` | string | No | The same timezone as an IANA name, e.g. `America/New_York`. Use this one for date arithmetic. |
| `id` | integer | Yes | Shopify's numeric id for the store. |
| `latitude` | number | No | Latitude Shopify geocoded from the business address. |
| `longitude` | number | No | Longitude Shopify geocoded from the business address. |
| `marketing_email_consent_enabled_at_checkout` | boolean | No | Whether checkout offers shoppers email marketing consent. |
| `marketing_sms_consent_enabled_at_checkout` | boolean | No | Whether checkout offers shoppers SMS marketing consent. |
| `money_format` | string | No | Liquid template the storefront renders prices with, e.g. `${{amount}}`. |
| `money_in_emails_format` | string | No | Price template used in the store's email notifications. |
| `money_with_currency_format` | string | No | Price template including the currency code. |
| `money_with_currency_in_emails_format` | string | No | Email price template including the currency code. |
| `multi_location_enabled` | boolean | No | Whether the store can stock inventory at more than one location. |
| `myshopify_domain` | string | No | The store's permanent `*.myshopify.com` domain. This never changes, unlike `domain`. |
| `name` | string | No | The store's name. |
| `password_enabled` | boolean | No | Whether the storefront is behind a password page and closed to the public. |
| `phone` | string | No | The store's contact phone number. |
| `plan_display_name` | string | No | The plan's name as the merchant sees it, e.g. `Shopify`. |
| `plan_name` | string | No | Internal handle of the store's Shopify plan, e.g. `professional`. |
| `pre_launch_enabled` | boolean | No | Whether the store is still in its pre-launch state. |
| `primary_locale` | string | No | ISO code of the store's default language, e.g. `en`. |
| `primary_location_id` | integer | No | Numeric id of the location Shopify fulfils from by default. Joins to the `location_id` on the inventory topics. |
| `province` | string | No | Province or state name of the business address. |
| `province_code` | string | No | Short province or state code, e.g. `ON`. |
| `requires_extra_payments_agreement` | boolean | No | Whether Shopify needs an extra payments agreement before the store can take payments. |
| `setup_required` | boolean | No | Whether Shopify still requires setup steps before selling. |
| `shop_owner` | string | No | Name of the account owner. |
| `source` | string | No | How the store was signed up, where Shopify recorded it. |
| `tax_shipping` | boolean | No | Whether tax is charged on shipping. |
| `taxes_included` | boolean | No | Whether product prices already include tax. |
| `timezone` | string | No | The store's timezone as Shopify displays it, e.g. `(GMT-05:00) Eastern Time (US & Canada)`. |
| `transactional_sms_disabled` | boolean | No | Whether the store has turned off transactional SMS to shoppers. |
| `updated_at` | string | No | When the store's record was last modified, ISO 8601. |
| `weight_unit` | string | No | Default unit for product weights, e.g. `lb`, `kg`. |
| `zip` | string | No | Postal or ZIP code. |

### Store Language Added

**Slug:** `SHOPIFY_STORE_LANGUAGE_ADDED`

**Type:** webhook

Triggers when a language is added to the store. It is normally added unpublished,
so `published` reads `false` until the merchant makes it visible, which arrives as
Store Language Updated.

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `locale` | string | No | ISO language code for the language, e.g. `fr` or `pt-BR`. This is the identifier Shopify uses for the store's locales. |
| `published` | boolean | No | Whether shoppers can browse the storefront in this language. A language can be added unpublished while translations are prepared. |

### Store Language Removed

**Slug:** `SHOPIFY_STORE_LANGUAGE_REMOVED`

**Type:** webhook

Triggers when a language is removed from the store, taking its stored translations
with it. `published` describes the language as it stood at removal.

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `locale` | string | No | ISO language code for the language, e.g. `fr` or `pt-BR`. This is the identifier Shopify uses for the store's locales. |
| `published` | boolean | No | Whether shoppers can browse the storefront in this language. A language can be added unpublished while translations are prepared. |

### Store Language Updated

**Slug:** `SHOPIFY_STORE_LANGUAGE_UPDATED`

**Type:** webhook

Triggers when a store language is published or unpublished. `published` is what
changes; the language stays on the store either way.

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `locale` | string | No | ISO language code for the language, e.g. `fr` or `pt-BR`. This is the identifier Shopify uses for the store's locales. |
| `published` | boolean | No | Whether shoppers can browse the storefront in this language. A language can be added unpublished while translations are prepared. |
