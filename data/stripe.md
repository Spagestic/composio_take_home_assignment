# Stripe

Stripe offers online payment infrastructure, fraud prevention, and APIs enabling businesses to accept and manage payments globally

- **Category:** payment processing
- **Auth:** API_KEY, OAUTH2
- **Composio-managed OAuth available?** Yes
- **Tools:** 433
- **Triggers:** 40
- **Slug:** `STRIPE`
- **Version:** 20260915_00

## Frequently Asked Questions

### How do I set up custom OAuth credentials for Stripe?

For a step-by-step guide on creating and configuring your own Stripe OAuth credentials with Composio, see [How to create OAuth credentials for Stripe](https://composio.dev/auth/stripe).

### Why is my Stripe trigger enabled but not receiving events?

One possible cause is that the Stripe webhook destination was deleted in Stripe while the trigger still appears enabled. In that state, the trigger can look active, but Stripe has no active destination to send matching events to.

Check the Stripe Dashboard for the webhook destination associated with the trigger. If it is missing or disabled, recreate the trigger so the Stripe webhook destination is created again, then verify new Stripe events are delivered.

## Tools

### Accept quote

**Slug:** `STRIPE_ACCEPT_QUOTE`

Tool to accept a quote in Stripe. Use when you need to accept a finalized quote, which will create an invoice, subscription, or subscription schedule based on the quote's configuration.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `quote_id` | string | Yes | The ID of the quote to accept. Must start with 'qt_'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Activate billing alert

**Slug:** `STRIPE_ACTIVATE_BILLING_ALERT`

Reactivates a billing alert, allowing it to trigger again. Use when you need to resume monitoring usage thresholds and receiving notifications for a previously deactivated alert.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `alert_id` | string | Yes | The unique identifier of the billing alert to reactivate (e.g., 'alrt_12345'). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Add lines to invoice

**Slug:** `STRIPE_ADD_INVOICE_LINES`

Tool to add multiple line items to a draft Stripe invoice. Use when you need to add additional charges, services, or credits to an existing invoice that is still in draft status.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The ID of the invoice to add lines to. Invoice must be in draft status. |
| `lines` | array | Yes | Multiple line items to attach to the invoice. At least one line item is required. |
| `invoice_metadata` | object | No | Set of key-value pairs to attach to the invoice itself. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Advance test clock

**Slug:** `STRIPE_ADVANCE_TEST_CLOCK`

Advance a test clock to a future timestamp. Use for testing time-based billing scenarios. Requires test mode API keys (test_helpers endpoints are only available in test mode). The advancement is asynchronous; monitor the status field to track completion (status changes from 'advancing' to 'ready').

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `clock_id` | string | Yes | The ID of the test clock to advance (format: clock_*). Obtain this from creating a test clock or listing existing test clocks. |
| `frozen_time` | integer | Yes | Unix timestamp (seconds since epoch) to advance the clock to. Must be greater than the clock's current frozen_time. Maximum advance: 2 subscription intervals ahead, or 2 years if no subscriptions. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Apply customer balance to payment intent

**Slug:** `STRIPE_APPLY_CUSTOMER_BALANCE`

Manually reconciles remaining amount for a customer_balance PaymentIntent by applying funds from customer's cash balance. IMPORTANT: This action only works with PaymentIntents that have 'customer_balance' in their payment_method_types. The customer_balance payment method type must be enabled in your Stripe account settings. Use this when you need to apply funds from a customer's cash balance account to complete or partially fund a PaymentIntent.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `amount` | integer | No | Amount intended to apply to this PaymentIntent from the customer's cash balance. A positive integer representing how much to charge in the smallest currency unit (e.g., 100 cents to charge $1.00 USD, or 100 to charge ¥100 JPY for zero-decimal currencies). The maximum amount is the amount of the PaymentIntent. When omitted, defaults to the remaining amount requested on the PaymentIntent. |
| `intent` | string | Yes | The PaymentIntent identifier. Must be a PaymentIntent that uses 'customer_balance' as a payment method type. |
| `currency` | string | No | Three-letter ISO currency code, in lowercase. Must be a supported currency. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Archive billing alert

**Slug:** `STRIPE_ARCHIVE_BILLING_ALERT`

Tool to archive a billing alert in Stripe, removing it from list views and APIs. Use when you need to permanently archive a billing alert. This action is non-reversible.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `alert_id` | string | Yes | The unique identifier of the billing alert to archive. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Attach source to customer

**Slug:** `STRIPE_ATTACH_CUSTOMER_SOURCE`

Attach a payment source (card token or source object) to a customer for future charges. IMPORTANT: This is a legacy API. For new integrations, use the PaymentMethods API instead (STRIPE_ATTACH_PAYMENT_METHOD). The source parameter accepts: - Card tokens (tok_xxxx) created client-side via Stripe.js or mobile SDKs - Source objects (src_xxxx) for alternative payment methods NOTE: PaymentMethod objects (pm_xxxx) cannot be used with this endpoint. Use STRIPE_ATTACH_PAYMENT_METHOD for those. In test mode, you can use test tokens like 'tok_visa'. In live mode, tokens must be created client-side for PCI compliance.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `source` | string | Yes | The source to attach. Can be a card token ID (tok_xxx) or source object ID (src_xxx). In test mode, you can use 'tok_visa' or 'tok_mastercard'. In live mode, tokens must be created client-side using Stripe.js, Elements, or mobile SDKs. Note: Cannot use PaymentMethod IDs (pm_xxx) - use STRIPE_ATTACH_PAYMENT_METHOD for those. |
| `metadata` | object | No | Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. |
| `customer_id` | string | Yes | The unique identifier of the Stripe customer to attach the source to. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Attach payment to invoice

**Slug:** `STRIPE_ATTACH_INVOICE_PAYMENT`

Attaches a PaymentIntent or Out of Band Payment to an invoice's payments list. When the PaymentIntent status changes to succeeded, the payment is credited to the invoice. Use when you need to associate an existing payment with a specific invoice.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `invoice` | string | Yes | The ID of the invoice to attach the payment to. |
| `payment_intent` | string | No | The ID of the PaymentIntent to attach to the invoice. Must be a PaymentIntent that can be attached to the invoice. Either payment_intent or payment_record must be provided, but not both. |
| `payment_record` | string | No | The ID of the PaymentRecord to attach to the invoice. This is used for Out of Band payments. Either payment_intent or payment_record must be provided, but not both. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Attach payment method to customer

**Slug:** `STRIPE_ATTACH_PAYMENT_METHOD`

Attaches a PaymentMethod to a Customer. Use when you need to save a payment method for future use with a specific customer. The PaymentMethod must be in a detached state before attaching.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `customer` | string | No | The ID of the customer to which to attach the PaymentMethod. Either customer or customer_account must be provided. |
| `customer_account` | string | No | The ID of the Account representing the customer to which to attach the PaymentMethod. Either customer or customer_account must be provided. |
| `payment_method_id` | string | Yes | The unique identifier of the PaymentMethod to attach to the customer. The PaymentMethod must be in a detached state. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Attach feature to product

**Slug:** `STRIPE_ATTACH_PRODUCT_FEATURE`

Tool to attach a feature to a product. Use when you need to add a feature to a product's capabilities. This creates a product_feature object linking the feature to the product.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `product_id` | string | Yes | The ID of the product to attach the feature to. Product IDs typically start with 'prod_'. |
| `entitlement_feature` | string | Yes | The ID of the Feature object to attach to this product. Feature IDs typically start with 'feat_'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Cancel payment intent

**Slug:** `STRIPE_CANCEL_PAYMENT_INTENT`

Cancels a PaymentIntent when in cancelable state. Use when a PaymentIntent is no longer needed to prevent further charges. For PaymentIntents with status='requires_capture', the remaining amount_capturable will be automatically refunded.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `payment_intent_id` | string | Yes | The unique identifier of the PaymentIntent to cancel. |
| `cancellation_reason` | string ("duplicate" | "fraudulent" | "requested_by_customer" | "abandoned") | No | Reason for canceling this PaymentIntent. Must be one of: 'duplicate', 'fraudulent', 'requested_by_customer', or 'abandoned'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Cancel Quote

**Slug:** `STRIPE_CANCEL_QUOTE`

Tool to cancel a Stripe quote. Use when you need to cancel an existing quote that is in 'draft' or 'open' status. Once canceled, the quote cannot be finalized or accepted by the customer.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `quote_id` | string | Yes | The unique identifier of the quote to cancel. Starts with 'qt_'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Cancel setup intent

**Slug:** `STRIPE_CANCEL_SETUP_INTENT`

Cancels a SetupIntent that is no longer needed. Use when a SetupIntent is in 'requires_payment_method', 'requires_confirmation', or 'requires_action' state. Note: SetupIntents linked to Checkout Sessions cannot be canceled through this method.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `setup_intent_id` | string | Yes | The unique identifier of the SetupIntent to cancel. |
| `cancellation_reason` | string ("abandoned" | "requested_by_customer" | "duplicate") | No | Reason for cancellation. Must be one of: 'abandoned', 'requested_by_customer', or 'duplicate'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Cancel subscription

**Slug:** `STRIPE_CANCEL_SUBSCRIPTION`

Cancels a customer's active Stripe subscription at the end of the current billing period, with options to invoice immediately for metered usage and prorate charges for unused time.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `prorate` | boolean | No | If true, generates a proration invoice item for unused time remaining in the current billing cycle. |
| `invoice_now` | boolean | No | If true, generates a final invoice for any un-invoiced metered usage. |
| `subscription_id` | string | Yes | Identifier of the subscription to cancel. |
| `cancellation_details` | object | No | Specifies reasons for cancellation. Common keys: 'comment' (free-form text) and 'feedback' (e.g., 'customer_service', 'low_usage', 'switched_service'). Example: {'comment': 'Switching services.', 'feedback': 'switched_service'} |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Cancel subscription schedule

**Slug:** `STRIPE_CANCEL_SUBSCRIPTION_SCHEDULE`

Cancels a subscription schedule and its associated subscription immediately (if active). Use when you need to stop scheduling of phases while leaving any existing subscription in place. Only succeeds if the schedule status is 'not_started' or 'active'.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `prorate` | boolean | No | If the subscription schedule is 'active', indicates if the cancellation should be prorated. Defaults to true if not specified. |
| `schedule` | string | Yes | The unique identifier for the subscription schedule to cancel (e.g., sub_sched_1Mr3owLkdIwHu7ix38CXMudt) |
| `invoice_now` | boolean | No | If the subscription schedule is 'active', indicates if a final invoice will be generated that contains any un-invoiced metered usage and new/pending proration invoice items. Defaults to true if not specified. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Cancel Terminal Reader Action

**Slug:** `STRIPE_CANCEL_TERMINAL_READER_ACTION`

Tool to cancel the current reader action. Use when you need to halt any ongoing operation on a Stripe Terminal reader device such as payment collection, setup intent processing, or input collection.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `reader_id` | string | Yes | The unique identifier of the Reader to cancel the action on. Must start with 'tmr_' followed by alphanumeric characters. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Capture Charge

**Slug:** `STRIPE_CAPTURE_CHARGE`

Tool to capture payment on an uncaptured charge. Use when a charge was created with capture=false and you're ready to capture the payment.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `amount` | integer | No | The amount to capture in cents (or smallest currency unit). If not specified, the full amount is captured. Cannot exceed the original, uncaptured amount of the charge. |
| `charge` | string | Yes | The identifier of the charge to be captured. Typically starts with 'ch_'. |
| `receipt_email` | string | No | The email address to send the receipt to. Overrides the charge's receipt_email. Maximum 800 characters. Receipts are not sent in test mode. |
| `transfer_group` | string | No | Transaction group identifier. May only be provided if not previously set. |
| `statement_descriptor` | string | No | Statement descriptor text for non-card charges with 22-character limit. For card charges, ignored if statement_descriptor_suffix is provided. |
| `transfer_data_amount` | integer | No | The amount to transfer to the destination account without creating an Application Fee object. Must be used with Stripe Connect. |
| `application_fee_amount` | integer | No | An application fee amount to add to this charge, not exceeding the original amount. |
| `statement_descriptor_suffix` | string | No | Suffix concatenated to account's statement descriptor prefix for card charges. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Capture payment intent

**Slug:** `STRIPE_CAPTURE_PAYMENT_INTENT`

Captures the funds of an existing uncaptured PaymentIntent. Use when the PaymentIntent status is 'requires_capture'.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `intent` | string | Yes | The unique identifier of the PaymentIntent to capture. |
| `metadata` | object | No | Set of key-value pairs for storing additional structured data. Individual keys can be unset by posting an empty value. |
| `final_capture` | boolean | No | Defaults to true. Set to false to retain uncaptured funds for future captures (requires multicapture support). |
| `amount_to_capture` | integer | No | Amount to capture in smallest currency unit. Must be less than or equal to the original amount. Defaults to full amount_capturable if not provided. |
| `statement_descriptor` | string | No | Custom statement descriptor for non-card charges. Maximum 22 characters. |
| `application_fee_amount` | integer | No | Application fee to be transferred to the app owner's Stripe account. Cannot exceed the captured amount. |
| `statement_descriptor_suffix` | string | No | Suffix appended to the account's statement descriptor prefix for card charges. Maximum 22 characters. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Close Dispute

**Slug:** `STRIPE_CLOSE_DISPUTE`

Tool to close a dispute. Use when you want to dismiss a dispute and acknowledge it as lost, indicating no evidence will be submitted. This action is irreversible.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `dispute` | string | Yes | The unique identifier for the dispute to close. Typically starts with 'du_'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Set Terminal Reader Display

**Slug:** `STRIPE_COLLECT_TERMINAL_READER_INPUTS`

Initiates input collection on a Terminal Reader to display forms and collect customer information. Use when you need to gather email, phone, text, numeric, signature, or selection inputs from customers on a physical reader.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `inputs` | array | Yes | List of inputs to collect from the customer. Maximum 5 inputs per request. |
| `metadata` | object | No | Set of key-value pairs for storing additional structured information about this input collection. |
| `reader_id` | string | Yes | The unique identifier of the terminal reader. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Collect payment method on Terminal Reader

**Slug:** `STRIPE_COLLECT_TERMINAL_READER_PAYMENT_METHOD`

Tool to initiate payment method collection on a Stripe Terminal Reader. Use when you need to hand off a PaymentIntent to a physical card reader device to collect payment details. The Reader action executes asynchronously with action.status showing 'in_progress' initially.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `reader` | string | Yes | The unique identifier of the Reader device. |
| `collect_config` | object | No | Configuration overrides for payment collection behavior. |
| `payment_intent` | string | Yes | The ID of the PaymentIntent to collect a payment method for. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Confirm payment intent

**Slug:** `STRIPE_CONFIRM_PAYMENT_INTENT`

Tool to confirm customer intent to pay with current or provided payment method. Use when ready to finalize a PaymentIntent and initiate the payment attempt. A return_url is required if confirmation needs customer action like 3D Secure authentication.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `mandate` | string | No | ID of the mandate to use for this payment. |
| `shipping` | object | No | Shipping information for this PaymentIntent. |
| `return_url` | string | No | The URL to redirect your customer back to after they authenticate or cancel their payment. Required if confirmation requires customer action (e.g., 3D Secure). |
| `off_session` | string | No | Set to true to indicate customer is not in checkout flow, or use 'one_off' or 'recurring' for specific off-session types. |
| `capture_method` | string ("automatic" | "automatic_async" | "manual") | No | Controls fund capture timing. Can be 'automatic', 'automatic_async' (default), or 'manual'. |
| `payment_method` | string | No | ID of the PaymentMethod to attach to this PaymentIntent. |
| `use_stripe_sdk` | boolean | No | Set to true when confirming client-side with Stripe.js or mobile SDKs. |
| `payment_intent_id` | string | Yes | The ID of the PaymentIntent to confirm. |
| `confirmation_token` | string | No | ID of the ConfirmationToken to use for confirmation. |
| `setup_future_usage` | string ("on_session" | "off_session") | No | Indicates intent to reuse payment method. Use 'on_session' if customer is present, 'off_session' for future charges. |
| `payment_method_data` | object | No | Hash to create new PaymentMethod with type-specific details. Must include 'type' field (e.g., 'card', 'acss_debit', etc.). |
| `payment_method_options` | object | No | Payment method-specific configuration (e.g., card installments, 3D Secure, BNPL options). |
| `error_on_requires_action` | boolean | No | When true, fails payment if PaymentIntent transitions to 'requires_action'. Default is false. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Confirm setup intent

**Slug:** `STRIPE_CONFIRM_SETUP_INTENT`

Confirms a SetupIntent to complete customer payment method setup. Use when you need to finalize credential collection after creating a SetupIntent.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `return_url` | string | No | URL to redirect customer after authentication. Required for redirect-based payment methods. |
| `payment_method` | string | No | ID of the PaymentMethod to attach to this SetupIntent. |
| `use_stripe_sdk` | boolean | No | Set to true when confirming server-side with Stripe.js or mobile SDKs. |
| `setup_intent_id` | string | Yes | The unique identifier of the SetupIntent to confirm. |
| `confirmation_token` | string | No | ID of the ConfirmationToken used to confirm this SetupIntent. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Confirm PaymentIntent on Terminal Reader

**Slug:** `STRIPE_CONFIRM_TERMINAL_READER_PAYMENT_INTENT`

Tool to confirm a PaymentIntent on a Terminal reader device. Use when you need to finalize a payment transaction on a card reader after the PaymentIntent has been collected on the reader hardware.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `reader_id` | string | Yes | The unique identifier of the Terminal reader. Must start with 'tmr_' followed by alphanumeric characters. |
| `confirm_config` | object | No | Optional configuration for confirming the payment intent. |
| `payment_intent` | string | Yes | The unique identifier of the PaymentIntent to be finalized on the reader. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Card Payments Capability

**Slug:** `STRIPE_CREATE_ACCOUNTS_CAPABILITIES_CARD_PAYMENTS`

Tool to create or update card payments capability for a Stripe Connect account. Use when you need to enable or disable card payment processing for a connected account.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The account ID for which to enable card_payments capability. Typically starts with 'acct_'. |
| `requested` | boolean | No | To request the card_payments capability for an account, pass true. Pass false to remove this non-permanent capability that was previously requested. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Account Session

**Slug:** `STRIPE_CREATE_ACCOUNT_SESSION`

Creates an Account Session for a Stripe Connect account, granting access to embedded components. Use when you need to provide temporary, client-side access to a connected account's dashboard features such as account management, onboarding, payments, and payouts. The Account Session expires relatively quickly and cannot be used more than once. We recommend creating a new Account Session each time you need to display an embedded component to your user.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `expand` | array | No | Specifies which fields in the response should be expanded. |
| `account` | string | Yes | The identifier of the account to create an Account Session for. Starts with 'acct_'. |
| `components` | object | Yes | Configuration for embedded components. Each key represents a component, and each value contains the component configuration (e.g., enabled status). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Apple Pay Domain

**Slug:** `STRIPE_CREATE_APPLE_PAY_DOMAIN`

Tool to create an Apple Pay domain registration. Use when registering your domain with Apple Pay to accept Apple Pay payments on your website. Stripe handles the Apple merchant validation process.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `expand` | array | No | Specifies which fields in the response should be expanded. |
| `domain_name` | string | Yes | The domain name to register for Apple Pay (e.g., 'example.com'). Must be a valid domain. Both top-level domains and subdomains need to be registered separately. Note that www is considered a subdomain. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create apps secret

**Slug:** `STRIPE_CREATE_APPS_SECRET`

Tool to create a secret in the Stripe Secret Store. Use when you need to securely persist secrets for use by UI Extensions and app backends.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | A name for the secret that's unique within the scope. This describes the secret's identifier within your application. |
| `payload` | string | Yes | The plaintext secret value to be encrypted and stored. The encrypted secret value that gets stored securely. |
| `expires_at` | integer | No | Unix timestamp indicating when the secret should expire and become inaccessible. Enables automatic secret expiration for enhanced security. |
| `scope_type` | string ("account" | "user") | Yes | The scope type - either 'account' (makes secrets accessible to all dashboard users and app backends) or 'user' (restricts access to one specific dashboard user plus the app backend). |
| `scope_user` | string | No | User ID - required when scope_type is 'user', omitted for 'account' type. The user whose secret to create. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Bank Account Token

**Slug:** `STRIPE_CREATE_BANK_ACCOUNT_TOKEN`

Tool to create a single-use token representing bank account details. Use when you need to securely collect bank account information for ACH payments, direct debits, or adding a bank account to a customer or recipient.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `customer` | string | No | Create a token for the customer, which is owned by the application's account. Can only be used with an OAuth access token or Stripe-Account header. |
| `bank_account` | object | Yes | The bank account this token will represent. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create billing alert

**Slug:** `STRIPE_CREATE_BILLING_ALERT`

Tool to create a billing alert that monitors usage on a billing meter and triggers notifications when a specified threshold is crossed. Use when you need to set up usage-based billing alerts.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `title` | string | Yes | The title/name of the alert. Maximum 256 characters. |
| `alert_type` | string | Yes | The type of alert to create. Currently only 'usage_threshold' is supported. |
| `usage_threshold` | object | Yes | Configuration for usage threshold alerts that monitors a billing meter and triggers when the threshold is crossed. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create billing credit grant

**Slug:** `STRIPE_CREATE_BILLING_CREDIT_GRANT`

Tool to create a credit grant that allocates billing credits to a customer for use against metered pricing. Use when you need to provide promotional or paid credits to customers.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | Descriptive name for the credit grant displayed in the dashboard (max 100 characters). |
| `amount` | object | Yes | Container for the credit grant amount configuration. |
| `category` | string ("paid" | "promotional") | No | Classification of the credit grant. Use 'paid' for customer-purchased credits or 'promotional' for complimentary credits. Defaults to 'paid'. |
| `customer` | string | No | Customer ID receiving the credits. Must provide either customer or customer_account. |
| `metadata` | object | No | Key-value pairs for storing additional structured data about the credit grant. |
| `priority` | integer | No | Application priority (0=highest, 100=lowest). Controls the order in which credits are applied. Defaults to 50. |
| `expires_at` | integer | No | Unix timestamp when credits expire. Credits never expire if omitted. |
| `effective_at` | integer | No | Unix timestamp when credits become usable. Defaults to current time if not specified. |
| `customer_account` | string | No | Account ID representing the customer. Must provide either customer or customer_account. |
| `applicability_config` | object | Yes | Defines what the credit grant applies to (metered pricing, specific prices, or billable items). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create billing meter

**Slug:** `STRIPE_CREATE_BILLING_METER`

Tool to create a billing meter in Stripe for tracking usage events. Use when you need to set up a new meter to track API calls, storage usage, or other measurable customer actions that form the basis of billing calculations.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `event_name` | string | Yes | The name of the meter event to track (max 100 characters). This should match the event name you'll use when reporting usage events to Stripe. |
| `display_name` | string | Yes | The human-readable name for this billing meter (max 250 characters). This name is for internal use and is not visible to customers. |
| `value_settings` | object | No | Configuration for extracting numeric values from meter events. |
| `customer_mapping` | object | No | Maps meter events to specific customer accounts. |
| `event_time_window` | string ("hour" | "day") | No | Pre-aggregation time window for events. Use 'hour' or 'day' if your events are pre-aggregated at those intervals. Leave as None for real-time event tracking. |
| `default_aggregation` | object | Yes | Defines how meter events are aggregated over a billing period. Required to specify the aggregation formula. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Billing Meter Event V2

**Slug:** `STRIPE_CREATE_BILLING_METER_EVENT`

Creates a billing meter event using Stripe API v2 for usage-based billing. Use when recording customer usage that will be metered and billed according to configured billing meters.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `payload` | object | Yes | The payload of the event containing fields corresponding to a meter's customer mapping. Must include stripe_customer_id and value fields that align with the meter's configuration. |
| `timestamp` | string | No | The time of the event in ISO 8601 format. Must be within the past 35 calendar days or up to 5 minutes in the future. Defaults to the current time if not specified. |
| `event_name` | string | Yes | The name of the meter event that corresponds with the meter. Must match the event_name configured on your billing meter. Maximum length is 100 characters. |
| `identifier` | string | No | A unique identifier for the event used for deduplication. If not provided, one is auto-generated. We recommend using UUID-like identifiers. Uniqueness is enforced within a rolling 24-hour period. Maximum length is 100 characters. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Billing Meter Event Adjustment

**Slug:** `STRIPE_CREATE_BILLING_METER_EVENT_ADJUSTMENT`

Creates an adjustment to cancel a billing meter event. Use when you need to correct errors or remove events attached to the wrong customer within 24 hours of Stripe receiving them.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `type` | string | Yes | Specifies whether to cancel a single event or a range of events. Currently only 'cancel' is supported. |
| `cancel` | object | No | Specifies which event to cancel. |
| `event_name` | string | Yes | The name of the meter event. Corresponds with the event_name field on a meter. Maximum 100 characters. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Billing Meter Event Session

**Slug:** `STRIPE_CREATE_BILLING_METER_EVENT_SESSION`

Creates authentication session for high-throughput meter event stream. Use when you need to send meter events to Stripe's billing system; tokens are valid for 15 minutes.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Billing Portal Configuration

**Slug:** `STRIPE_CREATE_BILLING_PORTAL_CONFIGURATION`

Tool to create a Stripe billing portal configuration. Use when you need to define the functionality and behavior of a customer portal session, including which features customers can access.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | A descriptive name for the configuration, displayed in the Stripe Dashboard (max 256 characters). |
| `features` | object | Yes | Information about the features available in the portal. |
| `metadata` | object | No | Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. |
| `login_page` | object | No | The hosted login page for this configuration. If enabled, a shareable URL will be generated. |
| `business_profile` | object | No | The business information shown to customers in the portal. |
| `default_return_url` | string | No | The default URL to redirect customers to when they click on the portal's link to return to your website. This can be overridden when creating a portal session. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Billing Portal Session

**Slug:** `STRIPE_CREATE_BILLING_PORTAL_SESSION`

Tool to create a Stripe billing portal session. Use when you need to provide customers with a secure URL to manage their subscriptions, payment methods, and invoices.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `locale` | string | No | The IETF language tag of the locale to display the customer portal in. If blank or 'auto', the customer's preferred_locales or browser locale is used. |
| `customer` | string | No | The ID of an existing customer. One of 'customer' or 'customer_account' is required. |
| `flow_data` | object | No | Configuration for guided customer flows in the portal. |
| `return_url` | string | No | The default URL to redirect customers to when they click on the portal's link to return to your website. |
| `on_behalf_of` | string | No | The account for which the session is being created. Used for filtering subscriptions and invoices. |
| `configuration` | string | No | The ID of an existing portal configuration. If not specified, the default configuration is used. |
| `customer_account` | string | No | The ID of an existing account. One of 'customer' or 'customer_account' is required. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create charge (deprecated)

**Slug:** `STRIPE_CREATE_CHARGE`

Tool to create a charge to request payment from a credit or debit card. Use when you need to charge a payment source directly. Note: This method is deprecated; Stripe recommends using the Payment Intents API instead for new integrations.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `amount` | integer | Yes | A positive integer representing how much to charge in the smallest currency unit (e.g., 100 cents for $1.00). Minimum $0.50 USD equivalent; supports up to eight digits. |
| `source` | string | No | Payment source to charge (card ID, bank account, source, token, or connected account). Customer ID required for certain source types. |
| `capture` | boolean | No | Whether to immediately capture charge (defaults to true). When false, authorizes charge for later capture; uncaptured charges expire after set period. |
| `currency` | string | Yes | Three-letter ISO currency code, in lowercase. Must be a supported currency. |
| `customer` | string | No | ID of existing customer to charge. Maximum 500 characters. |
| `metadata` | object | No | Key-value pairs for storing additional structured information about the object. Individual or all keys can be unset. |
| `shipping` | object | No | Shipping information for the charge. |
| `description` | string | No | An arbitrary string which you can attach to a Charge object. Displayed in web interface and included in automatic receipt emails. |
| `on_behalf_of` | string | No | Stripe account ID for funds destination; specifies business of record as connected account. |
| `radar_options` | object | No | Options to configure Radar fraud detection. |
| `receipt_email` | string | No | Email address for charge receipt delivery. Maximum 800 characters. Overrides customer email if specified. |
| `transfer_data` | object | No | Dictionary for automatic account transfer as destination charge. |
| `transfer_group` | string | No | String identifying transaction as part of a group for grouping transactions. |
| `statement_descriptor` | string | No | Text on customer statement for non-card charges (22-character limit). Ignored for card charges if suffix specified. |
| `application_fee_amount` | integer | No | Fee in cents applied to charge and transferred to application owner's account. Requires OAuth key or Stripe-Account header. |
| `statement_descriptor_suffix` | string | No | Information concatenated to account prefix for card charges; forms complete statement descriptor. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Charge Refund

**Slug:** `STRIPE_CREATE_CHARGE_REFUND`

Tool to create a refund for a charge in Stripe. Use when you need to refund a previously created charge fully or partially.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `amount` | integer | No | Amount in smallest currency unit (e.g., cents) to refund. If omitted, the entire charge is refunded. |
| `charge` | string | Yes | Identifier of the charge to refund. |
| `reason` | string ("duplicate" | "fraudulent" | "requested_by_customer") | No | Reasons for issuing a refund in Stripe. |
| `metadata` | object | No | Set of key-value pairs to attach to the refund for storing additional information. |
| `payment_intent` | string | No | Identifier of the PaymentIntent to refund. |
| `reverse_transfer` | boolean | No | Whether to reverse the transfer. Reversal is proportional to the refund amount. |
| `instructions_email` | string | No | Email address to send refund instructions for payment methods lacking native refund support. |
| `refund_application_fee` | boolean | No | Whether to refund the application fee. Full refunds refund the entire fee; partial refunds refund proportionally. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Checkout Session

**Slug:** `STRIPE_CREATE_CHECKOUT_SESSION`

Tool to create a Stripe Checkout Session. Use when you need a secure, hosted URL to collect payments or subscriptions via Stripe Checkout.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `mode` | string ("payment" | "setup" | "subscription") | Yes | Session mode. Note: 'setup' mode does not use line_items. |
| `customer` | string | No | ID of existing Customer to attach or prefill. |
| `metadata` | object | No | Key-value pairs to attach to the session. |
| `cancel_url` | string | No | URL to redirect customers if they cancel payment. |
| `line_items` | array | Yes | List of items the customer is purchasing. Each item must have either 'price' (ID of existing Price) or 'price_data' (inline price). Required for 'payment' and 'subscription' modes, not used in 'setup' mode. |
| `success_url` | string | Yes | URL to redirect customers after successful payment or setup. |
| `client_reference_id` | string | No | Your unique reference for the session. |
| `payment_method_types` | array | No | Payment methods to accept (e.g., ['card', 'ideal', 'sepa_debit']). Defaults to ['card'] if not specified. Stripe recommends managing payment methods in the Dashboard and omitting this parameter to use dynamic payment methods, but a default is provided for convenience. |
| `allow_promotion_codes` | boolean | No | Whether to allow promotion codes in the session. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Coupon

**Slug:** `STRIPE_CREATE_COUPON`

Creates a new discount coupon in Stripe with percentage or fixed amount discount. Use when creating promotional discounts for customers.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | No | Unique identifier for the coupon. If not provided, Stripe will generate one automatically. |
| `name` | string | No | Name of the coupon displayed to customers on invoices or receipts. Maximum 40 characters. |
| `currency` | string | No | Three-letter ISO currency code in lowercase (e.g., 'usd', 'eur'). Required if amount_off is passed. |
| `duration` | string ("once" | "forever" | "repeating") | No | Specifies how long the discount applies. 'once' applies to a single invoice, 'forever' applies to all invoices indefinitely, 'repeating' applies to invoices for a specified number of months. |
| `metadata` | object | No | Set of key-value pairs for storing additional structured information about the coupon. |
| `redeem_by` | integer | No | Unix timestamp specifying the last time at which the coupon can be redeemed. |
| `amount_off` | integer | No | A positive integer representing the amount to subtract from an invoice total in the smallest currency unit (e.g., cents for USD). Required if percent_off is not passed. |
| `applies_to` | object | No | Specifies which products this coupon applies to. |
| `percent_off` | number | No | A positive float larger than 0 and smaller or equal to 100 that represents the discount percentage. Required if amount_off is not passed. |
| `max_redemptions` | integer | No | A positive integer specifying the maximum number of times this coupon can be redeemed before it becomes invalid. |
| `currency_options` | object | No | Coupons defined in each available currency option. Each key must be a three-letter ISO currency code. |
| `duration_in_months` | integer | No | Required only if duration is 'repeating'. Must be a positive integer specifying the number of months the discount is valid. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Credit Note

**Slug:** `STRIPE_CREATE_CREDIT_NOTE`

Issues a credit note to adjust a finalized invoice's amount. Use when you need to credit an invoice after finalization, either for refunds, customer balance credits, or out-of-band adjustments.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `memo` | string | No | The credit note's memo appears on the credit note PDF. Use this field to provide additional context or explanation for the credit note. |
| `lines` | array | No | Line items that make up the credit note. One of amount, lines, or shipping_cost is required. |
| `amount` | integer | No | The integer amount in cents representing the total amount of the credit note. This is the amount that will be credited to the customer. One of amount, lines, or shipping_cost is required. |
| `reason` | string ("duplicate" | "fraudulent" | "order_change" | "product_unsatisfactory") | No | Reason for issuing this credit note. Must be one of: duplicate, fraudulent, order_change, or product_unsatisfactory. |
| `invoice` | string | Yes | ID of the invoice to be credited. The invoice must be finalized. |
| `refunds` | array | No | An array of existing refund IDs to link to this credit note. |
| `metadata` | object | No | Set of key-value pairs that you can attach to an object for storing additional information in a structured format. |
| `email_type` | string ("credit_note" | "none") | No | The email type to send to the customer. One of: credit_note or none. Default is credit_note. |
| `effective_at` | integer | No | The date when this credit note is in effect. Same as created unless overwritten. When defined, this value replaces the system-generated 'Date of issue' printed on the credit note PDF. Unix timestamp in seconds. |
| `credit_amount` | integer | No | The integer amount in cents representing the amount to credit the customer's balance, which will be automatically applied to their next invoice. |
| `refund_amount` | integer | No | The integer amount in cents representing the amount to refund. If set, a refund will be created for the charge associated with the invoice. |
| `shipping_cost` | object | No | When shipping_cost contains the shipping_rate from the invoice, the shipping_cost is added to the credit note. One of amount, lines, or shipping_cost is required. |
| `out_of_band_amount` | integer | No | The integer amount in cents representing the amount that was credited outside of Stripe. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Customer

**Slug:** `STRIPE_CREATE_CUSTOMER`

Creates a new customer in Stripe, required for creating charges or subscriptions; an email is highly recommended for customer communications.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | The customer's full name or the name of the business. |
| `email` | string | No | The customer's primary email address, used by Stripe for sending invoices, receipts, and other important communications. |
| `phone` | string | No | The customer's primary phone number. Include the country code for international numbers (e.g., +1 for the USA). |
| `address` | object | No | The customer's billing address, provided as a dictionary where both keys and values are strings. This address can be used for tax calculation, shipping, and fraud prevention. Common keys include: `line1` (street address, P.O. box, or c/o), `line2` (apartment, suite, unit, or building), `city`, `state` (state, province, or region), `postal_code` (ZIP or postal code), and `country` (a two-letter ISO country code, e.g., 'US', 'GB'). All keys are optional. Can be provided as either a dictionary or a JSON string. |
| `description` | string | No | An arbitrary string that you can attach to a customer object for your internal reference (e.g., notes about the customer). This is not visible to the customer. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Customer Balance Transaction

**Slug:** `STRIPE_CREATE_CUSTOMER_BALANCE_TRANSACTION`

Tool to create an immutable transaction that updates the customer's credit balance. Use when you need to manually adjust a customer's balance, such as issuing credits or debits.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `amount` | integer | Yes | The integer amount in cents (or smallest currency unit) to apply to the customer's credit balance. Use a negative value to credit the customer (reduce their owed amount) or a positive value to debit them (increase their owed amount). For example, -500 credits $5.00 USD. |
| `currency` | string | Yes | Three-letter ISO currency code, in lowercase. Must be a supported currency. Determines which balance this transaction applies to. |
| `customer` | string | Yes | The ID of the customer whose balance will be updated. Use the customer ID format like 'cus_xxxxx'. |
| `metadata` | object | No | Set of key-value pairs that you can attach to an object for storing additional structured information. Keys and values must be strings. |
| `description` | string | No | An arbitrary string attached to the object. Often useful for displaying to users. Maximum 350 characters. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create customer bank account

**Slug:** `STRIPE_CREATE_CUSTOMER_BANK_ACCOUNT`

Tool to create a new bank account attached to a customer object. Use when you need to add a bank account as a payment source for an existing Stripe customer.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `source` | object | Yes | Bank account details to attach to the customer. Must include all required fields for creating a bank account. |
| `customer` | string | Yes | The unique identifier of the customer object to which the bank account will be attached. |
| `metadata` | object | No | Set of key-value pairs that you can attach to the bank account object. This can be useful for storing additional information about the bank account in a structured format. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create customer card

**Slug:** `STRIPE_CREATE_CUSTOMER_CARD`

Creates a card or bank account payment source for a Stripe customer. Use when you need to add a new payment method to a customer for future use. Supports both card and bank account creation. Note: To use bank accounts, the customer must be verified and have the `bank_account` capability enabled in their country.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `card` | object | No | Card details for creating a card payment source. |
| `expand` | array | No | Specifies which fields in the response should be expanded. |
| `source` | string | No | A token returned by Stripe.js representing the user's payment source. Either bank_account, card, or source must be provided. |
| `customer` | string | Yes | The unique identifier for the customer. Must start with 'cus_' followed by alphanumeric characters. |
| `metadata` | object | No | Set of key-value pairs for storing additional information about the object in a structured format. |
| `bank_account` | object | No | Bank account details for creating a bank account payment source. |
| `alipay_account` | string | No | A token returned by Stripe.js representing the user's Alipay account details. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Customer Session

**Slug:** `STRIPE_CREATE_CUSTOMER_SESSION`

Tool to create a Stripe Customer Session granting client-side access control over a Customer. Use when you need to provide temporary access to customer portal features.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `customer` | string | No | ID of an existing customer for which to create the session. Required unless customer_account is provided. |
| `components` | object | Yes | Configuration for each component. At least 1 component must be enabled. |
| `customer_account` | string | No | ID of an existing Account for which to create the session. Required unless customer is provided. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create card or payment source

**Slug:** `STRIPE_CREATE_CUSTOMER_SOURCE`

Attaches a payment source to a customer for later reuse. Use when you need to save a card, bank account, or other payment source for future charges.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `source` | string | Yes | A token ID (e.g., from Stripe.js like 'tok_visa') or an existing source ID to attach to the customer. The source must be in a chargeable or pending state. |
| `customer` | string | Yes | The ID of the customer to attach the source to. |
| `metadata` | object | No | Set of key-value pairs for storing additional structured information about the source. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create customer subscription

**Slug:** `STRIPE_CREATE_CUSTOMER_SUBSCRIPTION`

Tool to create a subscription for an existing customer. Use when creating a new subscription with items and prices for a specific customer.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `items` | array | No | List of up to 20 subscription items with attached prices. |
| `expand` | array | No | Fields to expand in response. |
| `currency` | string | No | Three-letter ISO currency code in lowercase. |
| `customer` | string | Yes | ID of the customer for whom to create the subscription. |
| `metadata` | object | No | Key-value pairs for additional information. |
| `cancel_at` | integer | No | Unix timestamp when subscription should cancel. |
| `discounts` | array | No | Coupons to redeem as subscription discounts with coupon, discount, or promotion_code. |
| `trial_end` | string | No | Unix timestamp for trial end or 'now' to end immediately. |
| `off_session` | boolean | No | Whether customer is off-session. |
| `on_behalf_of` | string | No | Account to charge for subscription invoices. |
| `automatic_tax` | object | No | Automatic tax calculation settings. |
| `transfer_data` | object | No | Fund transfer configuration with destination and amount_percent. |
| `days_until_due` | integer | No | Days for customer to pay invoices when using send_invoice collection method. |
| `invoice_settings` | object | No | Settings for generated invoices. |
| `payment_behavior` | string ("allow_incomplete" | "default_incomplete" | "error_if_incomplete" | "pending_if_incomplete") | No | Payment behavior for incomplete payments. |
| `payment_settings` | object | No | Payment settings for invoices. |
| `add_invoice_items` | array | No | Up to 20 items appended to next invoice. |
| `collection_method` | string ("charge_automatically" | "send_invoice") | No | Either charge_automatically or send_invoice. |
| `default_tax_rates` | array | No | Tax rate IDs applying to items without specific rates. |
| `trial_period_days` | integer | No | Number of trial days before first charge. |
| `billing_thresholds` | object | No | Thresholds at which invoice is sent. |
| `proration_behavior` | string ("always_invoice" | "create_prorations" | "none") | No | How to handle prorations. |
| `billing_cycle_anchor` | integer | No | Unix timestamp to anchor subscription billing cycle. |
| `cancel_at_period_end` | boolean | No | Cancel subscription at end of current period. |
| `default_payment_method` | string | No | ID of default payment method for the subscription. |
| `application_fee_percent` | number | No | Percentage transferred to application owner. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Customer Tax ID

**Slug:** `STRIPE_CREATE_CUSTOMER_TAX_ID`

Creates a new tax ID for a customer, used for tax compliance and invoicing across 100+ supported country-specific tax ID formats. Use when you need to add tax identification to a customer account.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `type` | string | Yes | Type of the tax ID. Supported values include over 100 country-specific formats such as: eu_vat (European VAT number), us_ein (US Employer Identification Number), gb_vat (United Kingdom VAT number), ca_bn (Canadian Business Number), br_cpf (Brazilian CPF number), in_gst (Indian GST number), jp_cn (Japanese Corporate Number), ad_nrt, ae_trn, ar_cuit, au_abn, au_arn, bg_uic, bh_vat, bo_tin, br_cnpj, ch_vat, cl_tin, cn_tin, co_nit, cr_tin, de_stn, do_rcn, ec_ruc, eg_tin, es_cif, eu_oss_vat, ge_vat, hk_br, hu_tin, id_npwp, il_vat, is_vat, ke_pin, kr_brn, kz_bin, li_uid, mx_rfc, my_frp, my_itn, my_sst, ng_tin, no_vat, no_voec, nz_gst, om_vat, pe_ruc, ph_tin, ro_tin, rs_pib, ru_inn, ru_kpp, sa_vat, sg_gst, sg_uen, si_tin, sv_nit, th_vat, tr_tin, tw_vat, ua_vat, uy_ruc, ve_rif, vn_tin, za_vat and many more. |
| `value` | string | Yes | The value of the tax ID number. |
| `customer` | string | Yes | The ID of the customer for whom to create the tax ID. Must start with 'cus_' followed by alphanumeric characters. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create CVC Update Token

**Slug:** `STRIPE_CREATE_CVC_UPDATE_TOKEN`

Creates a single-use token representing an updated CVC value for card payments. Use when you need to update the CVC for an existing card without collecting the full card details again.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `cvc` | string | Yes | The card verification code (CVC) as a string. This is typically a 3 or 4 digit number found on the back of credit cards. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Feature Entitlement

**Slug:** `STRIPE_CREATE_ENTITLEMENT_FEATURE`

Creates a new feature entitlement in Stripe representing a monetizable ability or functionality. Use when defining features that can be assigned to products and customers.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | The feature's name, for your own purpose, not meant to be displayable to the customer. Maximum 80 characters. |
| `metadata` | object | No | Set of key-value pairs for storing additional structured information about the feature. |
| `lookup_key` | string | Yes | A unique key you provide as your own system identifier. This may be up to 80 characters. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Ephemeral Key

**Slug:** `STRIPE_CREATE_EPHEMERAL_KEY`

Tool to create a short-lived ephemeral API key for secure mobile SDK access to specific Stripe resources. Use when integrating with Stripe iOS, Android SDKs, or Stripe.js for Issuing Cards.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `nonce` | string | No | A single-use token, created by Stripe.js, used for creating ephemeral keys for Issuing Cards without exchanging sensitive information. |
| `expand` | array | No | Specifies which fields in the response should be expanded. Note: Ephemeral keys have limited expansion support compared to other Stripe objects. |
| `customer` | string | No | The ID of the Customer you'd like to modify using the resulting ephemeral key. At least one resource identifier (customer, issuing_card, nonce, or verification_session) is typically required. |
| `issuing_card` | string | No | The ID of the Issuing Card you'd like to access using the resulting ephemeral key. |
| `stripe_version` | string | Yes | The API version to use for the ephemeral key. This determines the structure of the ephemeral key that will be sent to the mobile SDK. Minimum version: 2020-03-02. Examples: '2025-11-17.clover', '2020-03-02'. |
| `verification_session` | string | No | The ID of the Identity VerificationSession you'd like to access using the resulting ephemeral key. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create File

**Slug:** `STRIPE_CREATE_FILE`

Tool to upload a file to Stripe for business purposes such as dispute evidence, identity verification, or business logos. Use when you need to store files that can be attached to other Stripe objects.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `file` | object | Yes | File to upload to Stripe. The file must follow RFC 2388 specifications for multipart/form-data protocol. |
| `purpose` | string ("account_requirement" | "additional_verification" | "business_icon" | "business_logo" | "customer_signature" | "dispute_evidence" | "finance_report_run" | "financial_account_statement" | "identity_document" | "identity_document_downloadable" | "issuing_regulatory_reporting" | "pci_document" | "platform_terms_of_service" | "selfie" | "sigma_scheduled_query" | "tax_document_user_upload" | "terminal_android_apk" | "terminal_reader_splashscreen") | Yes | The purpose of the uploaded file. Categorizes the file's intended use. Options include dispute_evidence, identity_document, business_logo, customer_signature, and others. |
| `file_link_data` | object | No | Optional parameters to create a shareable link for the newly uploaded file. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create File Link

**Slug:** `STRIPE_CREATE_FILE_LINK`

Tool to create a file link object that generates a shareable URL for accessing uploaded files. Use when you need to provide temporary or permanent access to a Stripe file.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `file` | string | Yes | The ID of the file. The file's purpose must be one of: business_icon, business_logo, customer_signature, dispute_evidence, finance_report_run, financial_account_statement, identity_document_downloadable, issuing_regulatory_reporting, pci_document, selfie, sigma_scheduled_query, tax_document_user_upload, terminal_android_apk, or terminal_reader_splashscreen. |
| `metadata` | object | No | Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. |
| `expires_at` | integer | No | A future timestamp (in Unix seconds) after which the link will no longer be usable. If not provided, the link will not expire. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Financial Connections Session

**Slug:** `STRIPE_CREATE_FINANCIAL_CONNECTIONS_SESSION`

Tool to create a Financial Connections Session to launch the authorization flow for linking financial accounts. Use when you need to collect customer bank account information for payments or data access.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `filters` | object | No | Restrictions on the types of accounts that can be linked. |
| `prefetch` | array | No | List of data features to retrieve upon account creation. Allowed values: 'balances', 'ownership', 'transactions'. |
| `return_url` | string | No | For webview integrations only. Upon completing OAuth login in the native browser, the user will be redirected to this URL to return to your app. |
| `permissions` | array | Yes | List of data features requested to access. Allowed values: 'balances', 'transactions', 'ownership', 'payment_method'. |
| `account_holder` | object | Yes | The account holder to link accounts for. Specifies whether linking for a customer or account. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create FX Quote

**Slug:** `STRIPE_CREATE_FX_QUOTE`

Tool to create an FX quote for currency conversion with optional rate locking. Use when you need to view current exchange rates for currency pairs or extend quoted rates for 5 minutes to 24 hours to reduce FX fluctuation uncertainty.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `usage_type` | string | No | Transaction type. Valid values: 'payment', 'transfer'. |
| `to_currency` | string | Yes | Three-letter ISO currency code in lowercase. The target currency for conversion, typically the currency you want to settle to your Stripe balance. Must be a supported currency. |
| `lock_duration` | string | No | The duration that you wish the quote to be locked for. The quote will be usable for the specified duration. Valid values: 'none' (current live rate, no fee), 'five_minutes' (5-minute locked rate), 'hour' (1-hour locked rate), 'day' (24-hour locked rate). Default: 'none'. Maximum: 1 day. Duration premiums vary by currency group and time period (0.07%-0.30%). |
| `from_currencies` | array | Yes | Array of three-letter ISO currency codes in lowercase. Source currencies to convert from. Must be supported currencies. |
| `usage_payment_destination` | string | No | Connected account ID for destination charges. Only used when usage_type is 'payment'. |
| `usage_payment_on_behalf_of` | string | No | Connected account ID for charges made on behalf of. Only used when usage_type is 'payment'. |
| `usage_transfer_destination` | string | No | Connected account ID for transfers. Only used when usage_type is 'transfer'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create an invoice

**Slug:** `STRIPE_CREATE_INVOICE`

Creates a new draft Stripe invoice for a customer; use to revise an existing invoice, bill for a specific subscription (which must belong to the customer), or apply detailed customizations. Note: Stripe API enforces a maximum value of 99,999,999 (in smallest currency unit) for amount fields including `unit_amount` in invoice items, `application_fee_amount`, and `transfer_data.amount`. Values exceeding this limit will be rejected.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `footer` | string | No | A custom footer text to display on the invoice PDF. |
| `issuer` | object | No | Details about the entity that is issuing the invoice. Applicable for Stripe Connect. |
| `number` | string | No | A custom number to identify this invoice. If not provided, Stripe will generate one. It must be unique. |
| `currency` | string | No | The three-letter ISO currency code (e.g., usd, eur). Must be a supported currency. Defaults to the customer's currency. IMPORTANT: Cannot be used together with 'subscription' - these parameters are mutually exclusive. When billing for a subscription, the currency is automatically derived from the subscription. |
| `customer` | string | Yes | The ID of the customer to be billed. |
| `due_date` | integer | No | Unix timestamp (seconds) for the invoice due date. Must be a future date. Only applicable when collection_method='send_invoice'. Mutually exclusive with days_until_due -- provide only one. Prefer days_until_due for natural-language date inputs to avoid timestamp conversion errors. |
| `metadata` | object | No | A set of key-value pairs to store additional information about the object. This is useful for storing custom data. |
| `discounts` | array | No | The discounts to apply to the invoice. This can include coupon IDs or discount IDs. |
| `rendering` | object | No | Options for customizing the invoice PDF appearance. |
| `description` | string | No | An arbitrary string attached to the invoice, often visible to the customer. |
| `auto_advance` | boolean | No | Controls whether Stripe automatically finalizes and attempts payment on this invoice. When false, the invoice remains a draft. Defaults to true for `collection_method='charge_automatically'`, and false for `collection_method='send_invoice'`. |
| `from_invoice` | object | No | Details for revising an existing invoice. |
| `on_behalf_of` | string | No | The Stripe account ID on behalf of which to charge. Used with Stripe Connect. |
| `subscription` | string | No | The ID of the subscription to which this invoice belongs. If provided, the invoice will bill for the subscription's items. IMPORTANT: Cannot be used together with 'currency' - when billing for a subscription, the currency is automatically derived from the subscription. |
| `automatic_tax` | object | No | Configuration for Stripe's automatic tax calculation on the invoice. |
| `custom_fields` | array | No | A list of custom fields to display on the invoice. Each field consists of a name and a value. |
| `shipping_cost` | object | No | Shipping cost for the invoice. Provide an existing `shipping_rate` ID or define `shipping_rate_data`. |
| `transfer_data` | object | No | For Stripe Connect, details of the destination account for transferring funds from this invoice. |
| `days_until_due` | integer | No | The number of days from when the invoice is finalized until it is due. Only applicable if `collection_method` is 'send_invoice'.  MUTUALLY EXCLUSIVE: Cannot be used together with `due_date`. Provide only ONE of these parameters - if both are provided, a validation error will be raised.  RECOMMENDED APPROACH: When users specify future dates in natural language (like "due in 30 days" or "due next month"), using `days_until_due` is safer than converting to Unix timestamps with `due_date`, as it avoids potential timestamp conversion errors.  EXAMPLES: - "Due in 30 days" → days_until_due: 30 - "Due next month" → days_until_due: 30 - "Due in two weeks" → days_until_due: 14 - "Net 15 terms" → days_until_due: 15 |
| `default_source` | string | No | ID of the default payment source (e.g., card) to be used for this invoice. Deprecated in favor of `default_payment_method`. |
| `account_tax_ids` | array | No | A list of tax IDs that apply to this invoice. These IDs will override the `default_tax_rates` on the Customer. |
| `payment_settings` | object | No | Settings for the invoice payment process. |
| `shipping_details` | object | No | Shipping details for the invoice recipient. |
| `collection_method` | string | No | Specifies how the invoice payment is collected. Can be 'charge_automatically' to attempt payment immediately or 'send_invoice' to email the invoice to the customer for manual payment. Defaults to 'charge_automatically'. |
| `default_tax_rates` | array | No | A list of IDs of tax rates that will apply to any line item on the invoice for which tax rates are not explicitly defined. |
| `statement_descriptor` | string | No | An arbitrary string to be displayed on the customer's credit card statement. This may be truncated to 22 characters. |
| `application_fee_amount` | integer | No | A non-negative integer in cents (or the smallest currency unit) representing the fee amount for the application that will be applied to the invoice. This is used for Stripe Connect. Maximum value: 99,999,999. |
| `default_payment_method` | string | No | ID of the default payment method to be used for this invoice. |
| `automatically_finalizes_at` | integer | No | A Unix timestamp representing the date and time when this draft invoice will be automatically finalized. |
| `pending_invoice_items_behavior` | string | No | Determines how pending invoice items are handled during invoice finalization. Can be 'include' to include all pending items, or 'exclude' to ignore them. Defaults to 'include'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create invoice item

**Slug:** `STRIPE_CREATE_INVOICE_ITEM`

Tool to create an invoice item for draft invoices. Use when adding line items to customer invoices before finalization.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `amount` | integer | No | Amount in cents to charge. Use negative values to reduce amount_due on invoice. |
| `period` | object | No | Period associated with the invoice item. |
| `invoice` | string | No | Existing draft invoice ID. Maximum 250 items per invoice. |
| `pricing` | object | No | Pricing information for the invoice item. |
| `currency` | string | No | Three-letter ISO currency code in lowercase. Must be a supported currency. |
| `customer` | string | No | Customer ID to bill for this item. |
| `metadata` | object | No | Key-value pairs for storing additional information. |
| `quantity` | integer | No | Non-negative quantity of units. |
| `tax_code` | string | No | Tax code ID. Recommended to set for accurate tax calculation. |
| `discounts` | array | No | List of coupons and promotion codes to apply. |
| `tax_rates` | array | No | Tax rate IDs. Overrides invoice default tax rates. |
| `price_data` | object | No | Data to generate a new Price object inline. |
| `description` | string | No | Arbitrary string displayed on the invoice. |
| `discountable` | boolean | No | Controls whether discounts apply. Defaults to false for prorations/negative items. |
| `subscription` | string | No | Subscription ID to add this item to. |
| `tax_behavior` | string | No | Tax behavior: exclusive, inclusive, or unspecified. Recommended to set. |
| `customer_account` | string | No | Account ID representing the customer. |
| `unit_amount_decimal` | string | No | Decimal unit amount (up to 12 decimal places). Alternative to amount. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create payment intent

**Slug:** `STRIPE_CREATE_PAYMENT_INTENT`

Creates a Stripe PaymentIntent to initiate and process a customer's payment; using `application_fee_amount` for a connected account requires the `Stripe-Account` header.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `amount` | integer | Yes | Amount intended to be collected, specified in the smallest currency unit (e.g., 5000 for $50.00 USD). |
| `confirm` | boolean | No | Set to `true` to attempt to confirm this PaymentIntent immediately after creation. If the payment method requires any follow-up actions (e.g., 3D Secure authentication), this PaymentIntent will transition to a status requiring further action. |
| `currency` | string | Yes | Three-letter ISO currency code (e.g., 'usd', 'eur'). |
| `customer` | string | No | ID of the Customer for this PaymentIntent, if one exists. Allows attaching payment method to Customer for future use. |
| `metadata` | object | No | Key-value pairs to attach to the PaymentIntent for storing additional structured information. |
| `shipping` | object | No | Shipping information for this PaymentIntent. Required for certain payment methods or if calculating tax. |
| `return_url` | string | No | URL to redirect customer to after external authentication (e.g., 3D Secure). Required if `confirm` is `true` and payment method requires redirection. |
| `description` | string | No | Arbitrary string for the PaymentIntent, displayed in Stripe dashboard and may be shown to customers. |
| `off_session` | string | No | Indicates if customer is absent (off-session, e.g., for renewals). If `true`, `payment_method` must be provided and `confirm` must be `true`. |
| `receipt_email` | string | No | Email address for receipt; if specified in live mode, receipt sent regardless of account email settings. |
| `payment_method` | string | No | ID of PaymentMethod, Card, or compatible Source to attach. Required if `confirm` is `true` and `automatic_payment_methods` is not enabled, or if `off_session` is `true`. |
| `setup_future_usage` | string | No | Indicates intent to save payment method for future use: 'on_session' (customer present) or 'off_session' (customer absent). |
| `payment_method_types` | array | No | List of payment method types (e.g., 'card', 'alipay') this PaymentIntent can use. Required if `automatic_payment_methods` is disabled. |
| `statement_descriptor` | string | No | String on customer's card statement (max 22 chars; no '<', '>', '"', "'"). Used as prefix if `statement_descriptor_suffix` is set. |
| `application_fee_amount` | integer | No | Application fee (smallest currency unit) for the application owner. Requires platform authentication and `Stripe-Account` header for the connected account. |
| `payment_method_options` | object | No | Payment-method-specific configuration for this PaymentIntent. |
| `automatic_payment_methods` | object | No | Settings to configure compatible payment methods from the Stripe Dashboard. If disabled, `payment_method_types` must be provided. |
| `statement_descriptor_suffix` | string | No | Dynamic suffix for card statement (max 22 chars; no '<', '>', '"', "'"). Appended to main descriptor or account's default. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Payment Link

**Slug:** `STRIPE_CREATE_PAYMENT_LINK`

Tool to create a Stripe Payment Link. Use when you need to generate a hosted checkout page URL that can be shared with customers to collect payments without building custom checkout infrastructure. Supports up to 20 line items per payment link.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `currency` | string | No | Three-letter ISO currency code, in lowercase. Must be a supported currency and supported by each line item's price. |
| `metadata` | object | No | Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. |
| `line_items` | array | Yes | The line items representing what is being sold. Each payment link can have up to 20 line items. |
| `submit_type` | string | No | Describes the type of transaction being performed by Checkout in order to customize relevant text on the page, such as the submit button. Either 'auto', 'book', 'donate', 'pay', or 'subscribe'. |
| `on_behalf_of` | string | No | The account on behalf of which to charge. |
| `automatic_tax` | object | No | Automatic tax configuration. |
| `transfer_data` | object | No | The account (if any) the payments will be attributed to for tax reporting, and where funds from each payment will be transferred to. Contains destination and optionally amount. |
| `after_completion` | object | No | Behavior after the purchase is complete. |
| `inactive_message` | string | No | The custom message to be displayed to a customer when a payment link is no longer active. |
| `invoice_creation` | object | No | Invoice creation configuration. |
| `customer_creation` | string | No | Configures whether checkout sessions created by this payment link create a customer. Either 'if_required' or 'always'. Note: This parameter cannot be used if the payment link contains any recurring prices (subscriptions). |
| `subscription_data` | object | No | When creating a subscription, the specified configuration data will be used. Metadata as key-value pairs. |
| `tax_id_collection` | object | No | Configuration for collecting the customer's tax ID at checkout. Example: {'enabled': true} |
| `payment_method_types` | array | No | The list of payment method types that customers can use. Defaults to ['card'] which is universally supported. You can specify multiple types like ['card', 'us_bank_account'] based on your needs. |
| `allow_promotion_codes` | boolean | No | Enables user redeemable promotion codes. |
| `application_fee_amount` | integer | No | The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner's Stripe account. |
| `application_fee_percent` | number | No | A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice total that will be transferred to the application owner's Stripe account. |
| `phone_number_collection` | object | No | Configuration for collecting the customer's phone number at checkout. Example: {'enabled': true} |
| `payment_method_collection` | string | No | Configuration for collecting a payment method during checkout. Either 'always' or 'if_required'. |
| `billing_address_collection` | string | No | Configuration for collecting the customer's billing address. Either 'auto' or 'required'. |
| `shipping_address_collection` | object | No | Shipping address collection configuration. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create payment method

**Slug:** `STRIPE_CREATE_PAYMENT_METHOD`

Creates a PaymentMethod object representing a customer's payment instrument (card, bank account, etc.). PaymentMethods can be: - Attached to a Customer for future use - Used directly with PaymentIntents to collect payments - Stored for recurring payments or subscriptions The 'type' parameter determines which payment-specific fields are required: - type='card': requires card object with number, exp_month, exp_year - type='sepa_debit': requires sepa_debit object with iban - type='us_bank_account': requires us_bank_account object with account details - And many other payment method types (acss_debit, au_becs_debit, bacs_debit, boleto, etc.) IMPORTANT: For card payments, collecting card numbers directly via API requires PCI compliance and special account permissions. Consider using Stripe.js, Stripe Elements, or mobile SDKs instead for better security and easier PCI compliance. This action is most useful for non-card payment methods or when you have explicit authorization for raw card data access.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `card` | object | No | Card payment method details. |
| `type` | string | Yes | Payment method type. Examples: card, sepa_debit, us_bank_account, paypal, klarna, acss_debit, au_becs_debit, bacs_debit, boleto, fpx, ideal, p24, etc. |
| `boleto` | object | No | Boleto payment method details. |
| `klarna` | object | No | Klarna payment method details. |
| `metadata` | object | No | Key-value pairs for storing custom information. |
| `acss_debit` | object | No | Canadian pre-authorized debit payment method details. |
| `bacs_debit` | object | No | UK Bacs Direct Debit payment method details. |
| `sepa_debit` | object | No | SEPA Direct Debit payment method details. |
| `au_becs_debit` | object | No | Australian BECS Direct Debit payment method details. |
| `radar_options` | object | No | Radar fraud detection options. |
| `allow_redisplay` | string ("always" | "limited" | "unspecified") | No | Controls display in future checkout flows. Default: unspecified. |
| `billing_details` | object | No | Billing information associated with the PaymentMethod. |
| `us_bank_account` | object | No | US Bank Account payment method details. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create payment method configuration

**Slug:** `STRIPE_CREATE_PAYMENT_METHOD_CONFIGURATION`

Creates a payment method configuration to control which payment methods are displayed during checkout. Use when setting up payment options for customers.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `eps` | object | No | Configuration for a specific payment method. |
| `fpx` | object | No | Configuration for a specific payment method. |
| `jcb` | object | No | Configuration for a specific payment method. |
| `p24` | object | No | Configuration for a specific payment method. |
| `pix` | object | No | Configuration for a specific payment method. |
| `zip` | object | No | Configuration for a specific payment method. |
| `alma` | object | No | Configuration for a specific payment method. |
| `blik` | object | No | Configuration for a specific payment method. |
| `card` | object | No | Configuration for a specific payment method. |
| `link` | object | No | Configuration for a specific payment method. |
| `name` | string | No | Configuration name (max 100 characters). Required unless 'parent' is provided. |
| `oxxo` | object | No | Configuration for a specific payment method. |
| `ideal` | object | No | Configuration for a specific payment method. |
| `payco` | object | No | Configuration for a specific payment method. |
| `payto` | object | No | Configuration for a specific payment method. |
| `swish` | object | No | Configuration for a specific payment method. |
| `twint` | object | No | Configuration for a specific payment method. |
| `affirm` | object | No | Configuration for a specific payment method. |
| `alipay` | object | No | Configuration for a specific payment method. |
| `billie` | object | No | Configuration for a specific payment method. |
| `boleto` | object | No | Configuration for a specific payment method. |
| `crypto` | object | No | Configuration for a specific payment method. |
| `klarna` | object | No | Configuration for a specific payment method. |
| `mb_way` | object | No | Configuration for a specific payment method. |
| `parent` | string | No | Parent configuration ID for creating child configurations (max 100 characters). Required unless 'name' is provided. |
| `paynow` | object | No | Configuration for a specific payment method. |
| `paypal` | object | No | Configuration for a specific payment method. |
| `paypay` | object | No | Configuration for a specific payment method. |
| `sofort` | object | No | Configuration for a specific payment method. |
| `cashapp` | object | No | Configuration for a specific payment method. |
| `giropay` | object | No | Configuration for a specific payment method. |
| `grabpay` | object | No | Configuration for a specific payment method. |
| `konbini` | object | No | Configuration for a specific payment method. |
| `kr_card` | object | No | Configuration for a specific payment method. |
| `satispay` | object | No | Configuration for a specific payment method. |
| `apple_pay` | object | No | Configuration for a specific payment method. |
| `kakao_pay` | object | No | Configuration for a specific payment method. |
| `mobilepay` | object | No | Configuration for a specific payment method. |
| `naver_pay` | object | No | Configuration for a specific payment method. |
| `promptpay` | object | No | Configuration for a specific payment method. |
| `acss_debit` | object | No | Configuration for a specific payment method. |
| `amazon_pay` | object | No | Configuration for a specific payment method. |
| `bacs_debit` | object | No | Configuration for a specific payment method. |
| `bancontact` | object | No | Configuration for a specific payment method. |
| `google_pay` | object | No | Configuration for a specific payment method. |
| `multibanco` | object | No | Configuration for a specific payment method. |
| `sepa_debit` | object | No | Configuration for a specific payment method. |
| `wechat_pay` | object | No | Configuration for a specific payment method. |
| `pay_by_bank` | object | No | Configuration for a specific payment method. |
| `revolut_pay` | object | No | Configuration for a specific payment method. |
| `samsung_pay` | object | No | Configuration for a specific payment method. |
| `au_becs_debit` | object | No | Configuration for a specific payment method. |
| `apple_pay_later` | object | No | Configuration for a specific payment method. |
| `nz_bank_account` | object | No | Configuration for a specific payment method. |
| `us_bank_account` | object | No | Configuration for a specific payment method. |
| `cartes_bancaires` | object | No | Configuration for a specific payment method. |
| `customer_balance` | object | No | Configuration for a specific payment method. |
| `afterpay_clearpay` | object | No | Configuration for a specific payment method. |
| `fr_meal_voucher_conecs` | object | No | Configuration for a specific payment method. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create payment method domain

**Slug:** `STRIPE_CREATE_PAYMENT_METHOD_DOMAIN`

Tool to create a payment method domain object to control where payment methods are shown. Use when registering a new web domain with Stripe to enable payment processing capabilities.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `enabled` | boolean | No | Whether this payment method domain is enabled. If the domain is not enabled, payment methods that require a payment method domain will not appear in Elements or Embedded Checkout. Defaults to true when not specified. |
| `domain_name` | string | Yes | The domain name that this payment method domain object represents. This is the web domain you want to register with Stripe. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create PII Token

**Slug:** `STRIPE_CREATE_PII_TOKEN`

Tool to create a single-use token representing PII (personally identifiable information). Use when you need to securely tokenize sensitive personal information like ID numbers for compliance or security purposes.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `pii` | object | Yes | Container object for the PII information to tokenize. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create a plan

**Slug:** `STRIPE_CREATE_PLAN`

Tool to create a recurring billing plan with flexible pricing configuration. Use when setting up subscription plans with defined pricing, currency, and billing intervals.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | No | Custom plan identifier. Must be unique across account. |
| `meter` | string | No | Meter ID tracking metered price usage. |
| `tiers` | array | No | Pricing tiers. Required if billing_scheme is 'tiered'. |
| `active` | boolean | No | Whether the plan is available for new subscriptions. Defaults to true. |
| `amount` | integer | No | A positive integer in cents (or 0 for a free plan) representing how much to charge. Required for standard billing unless using tiered billing. |
| `product` | string | No | Product ID (string) or inline product object containing product details. Required if amount is provided. |
| `currency` | string | Yes | Three-letter ISO currency code in lowercase. Must be a supported currency. |
| `interval` | string ("day" | "week" | "month" | "year") | Yes | Billing frequency. Must be one of: day, week, month, or year. |
| `metadata` | object | No | Custom key-value pairs for storing additional information. |
| `nickname` | string | No | Brief description of the plan, hidden from customers. |
| `tiers_mode` | string ("graduated" | "volume") | No | Tiering mode. Required if billing_scheme is 'tiered'. Either 'graduated' or 'volume'. |
| `usage_type` | string ("licensed" | "metered") | No | Usage billing mode. Either 'licensed' (default) or 'metered'. |
| `amount_decimal` | string | No | Decimal alternative to amount (max 12 decimal places). Mutually exclusive with amount. |
| `billing_scheme` | string ("per_unit" | "tiered") | No | Pricing computation method. Either 'per_unit' (default) or 'tiered'. |
| `interval_count` | integer | No | Billing frequency multiplier. Maximum 3-year interval. |
| `transform_usage` | object | No | Usage transformation rules for the plan. |
| `trial_period_days` | integer | No | Default trial duration in days for new subscriptions. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Preview Invoice

**Slug:** `STRIPE_CREATE_PREVIEW_INVOICE`

Tool to preview an upcoming invoice without creating it. Use when you need to show pending charges, renewal fees, discounts, and prorations before finalizing an invoice.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `issuer` | object | No | Connected account issuing invoice. |
| `currency` | string | No | Three-letter ISO currency code (e.g., usd, eur) |
| `customer` | string | No | Customer ID for the invoice preview. Required when using invoice_items, subscription_details.items, or schedule_details.phases. You must also provide at least one of: subscription, subscription_details.items, schedule, schedule_details.phases, or invoice_items. |
| `schedule` | string | No | Subscription schedule ID to preview |
| `discounts` | array | No | Discounts to apply to the invoice preview |
| `on_behalf_of` | string | No | Connected account ID for invoice presentation |
| `preview_mode` | string | No | Preview mode: next (default) or recurring |
| `subscription` | string | No | Subscription ID to preview |
| `automatic_tax` | object | No | Configuration for automatic tax calculation. |
| `invoice_items` | array | No | Invoice items to include in preview (up to 250) |
| `customer_account` | string | No | Account representing the customer |
| `customer_details` | object | No | Explicit customer details for preview. |
| `subscription_details` | object | No | Subscription configuration for preview. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create a price

**Slug:** `STRIPE_CREATE_PRICE`

Creates a new Stripe Price for a product, defining its charges (one-time or recurring) and billing scheme; requires either an existing `product` ID or `product_data`.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tiers` | array | No | A list of pricing tiers. Required if `billing_scheme` is 'tiered'. |
| `active` | boolean | No | Whether the price can be used for new purchases. Defaults to true. |
| `product` | string | No | The ID of the product this price is for. Required if `product_data` is not provided. |
| `currency` | string | Yes | Three-letter ISO currency code (e.g., 'usd', 'eur'). Must be a supported currency. |
| `metadata` | object | No | A set of key-value pairs to store additional information about the price. |
| `nickname` | string | No | A brief, internal-facing description of the price. Useful for distinguishing prices in listings. |
| `recurring` | object | No | Specifies recurring components of a price, such as billing interval and usage type. |
| `lookup_key` | string | No | A unique, user-defined key to retrieve this price. Case-sensitive. |
| `tiers_mode` | string | No | Defines how the quantity is applied to the tiers. Either 'graduated' (price is sum of costs from applicable tiers) or 'volume' (price is determined by the tier corresponding to the total quantity). Required if `billing_scheme` is 'tiered'. |
| `unit_amount` | integer | No | The base charge amount in the smallest currency unit (e.g., cents for USD). Required if not using `tiers`, `custom_unit_amount`, or `currency_options` with a unit amount for the primary currency. |
| `product_data` | object | No | Fields for creating a new product if a `product` ID is not provided with the price. |
| `tax_behavior` | string | No | Specifies how tax is applied to the price. Options are 'inclusive' (tax is included), 'exclusive' (tax is added), or 'unspecified'. |
| `billing_scheme` | string | No | Describes how to compute the price per period. Either 'per_unit' (default, for fixed price per unit) or 'tiered' (for volume-based or graduated tiers). |
| `currency_options` | object | No | Prices defined in each supported currency. Useful for multi-currency pricing. The primary `currency`'s pricing can also be defined here. |
| `custom_unit_amount` | object | No | Configuration for a price where the unit amount is set by the customer at checkout. |
| `transform_quantity` | object | No | Contains information about how the quantity should be transformed before calculating the price. |
| `transfer_lookup_key` | boolean | No | If `true`, allows this price to overwrite an existing price with the same `lookup_key`. Defaults to `false`. |
| `unit_amount_decimal` | string | No | Same as `unit_amount`, but accepts a decimal string with up to 12 decimal places for higher precision. Required if not using `tiers`, `custom_unit_amount`, or `currency_options` with a unit amount for the primary currency and `unit_amount` is not provided. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create product

**Slug:** `STRIPE_CREATE_PRODUCT`

Creates a new product in Stripe, encoding the request as `application/x-www-form-urlencoded` by flattening nested structures.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | No | Optional unique product identifier. Stripe generates one if omitted. Useful for idempotency or migrating existing IDs. |
| `url` | string | No | Publicly accessible URL for the product's webpage or landing page. |
| `name` | string | Yes | Product's name, displayed to customers. |
| `active` | boolean | No | Indicates if the product is available for purchase. Set to `false` to archive. |
| `images` | array | No | Up to 8 image URLs for display on product pages or checkout. |
| `metadata` | object | No | Key-value pairs for storing additional structured information. |
| `tax_code` | string | No | Stripe tax code ID for determining tax rates on sales. |
| `shippable` | boolean | No | Indicates if the product is a physical good requiring shipping. |
| `unit_label` | string | No | Label for product units to clarify quantity-based pricing. |
| `description` | string | No | Product description, displayed to customers, providing more details. |
| `custom_fields` | array | No | Custom fields displayed on invoices for sales (e.g., PO numbers). |
| `shipping_cost` | object | No | Defines the shipping cost for the product, either by referencing an existing shipping rate or creating a new one. |
| `default_price_data` | object | No | Data used to create a new Price object as the default price for this product. |
| `marketing_features` | array | No | List of marketing features; short, benefit-oriented statements for pricing pages. |
| `package_dimensions` | object | No | The dimensions of the product for shipping purposes. Required if the product is shippable and you use a shipping rate that calculates shipping costs based on dimensions. |
| `statement_descriptor` | string | No | String (max 22 chars) for customer credit card statements for charge recognition. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Promotion Code

**Slug:** `STRIPE_CREATE_PROMOTION_CODE`

Tool to create a promotion code linked to an underlying coupon. Use when you need to generate customer-redeemable codes with optional restrictions.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `code` | string | No | The customer-facing code (alphanumeric only: a-z, A-Z, 0-9). Maximum 500 characters. Auto-generated if omitted. Must be unique across all active promotion codes. |
| `active` | boolean | No | Whether the promotion code is currently active. Defaults to true if not specified. |
| `coupon` | string | Yes | ID of the coupon that this promotion code will apply. This is required. |
| `customer` | string | No | ID of the customer that this promotion code can be used by. If not set, the promotion code can be used by all customers. |
| `metadata` | object | No | Set of key-value pairs that you can attach to an object. Useful for storing additional information in a structured format. |
| `expires_at` | integer | No | Unix timestamp specifying when the promotion code will expire. Cannot exceed the coupon's redeems_by timestamp if specified. |
| `restrictions` | object | No | Settings for restricting the promotion code's redemption. |
| `max_redemptions` | integer | No | A positive integer specifying the number of times the promotion code can be redeemed. Cannot exceed the coupon's max_redemptions if set. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create a quote

**Slug:** `STRIPE_CREATE_QUOTE`

Tool to create a Stripe quote modeling prices and services for a customer. Use when you need to generate a formal quote for a customer before finalizing payment.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `footer` | string | No | Footer text for quote PDF. Maximum 500 characters. |
| `header` | string | No | Header text for quote PDF. Maximum 50 characters. |
| `customer` | string | No | Customer ID the quote belongs to. Customer or customer_account required before finalizing. |
| `metadata` | object | No | Key-value pairs for storing additional structured information. |
| `discounts` | array | No | Discounts to apply to the quote. |
| `expires_at` | integer | No | Future Unix timestamp when open/draft quote will be automatically canceled. |
| `from_quote` | object | No | Clone an existing quote. |
| `line_items` | array | No | Line items being quoted. |
| `test_clock` | string | No | Test clock ID for testing time-dependent functionality. |
| `description` | string | No | Description text for quote PDF. Maximum 500 characters. |
| `on_behalf_of` | string | No | Account ID to charge on behalf of. |
| `automatic_tax` | object | No | Configuration for Stripe's automatic tax calculation on the quote. |
| `transfer_data` | object | No | Transfer data for Stripe Connect. |
| `customer_account` | string | No | Account ID for the quote. Customer or customer_account required before finalizing. |
| `invoice_settings` | object | No | Invoice settings for the quote. |
| `collection_method` | string | No | Payment collection method. One of: charge_automatically, send_invoice. Defaults to charge_automatically. |
| `default_tax_rates` | array | No | Tax rate IDs applying to line items without specific rates. |
| `subscription_data` | object | No | Configuration for subscription when quote is accepted. |
| `application_fee_amount` | integer | No | Application fee amount in cents. Incompatible with recurring prices. |
| `application_fee_percent` | number | No | Fee percentage (0-100, two decimals max). Requires recurring prices. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Refund

**Slug:** `STRIPE_CREATE_REFUND`

Creates a full or partial refund in Stripe, targeting either a specific charge ID or a payment intent ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `amount` | integer | No | Amount in smallest currency unit (e.g., 1000 for $10.00 USD) to refund. If omitted, a full refund is issued. Cannot exceed the charge's remaining refundable amount. |
| `charge` | string | No | Identifier of the charge to refund. Required if `payment_intent` is not provided. |
| `reason` | string ("duplicate" | "fraudulent" | "requested_by_customer") | No | Reasons for issuing a refund in Stripe. |
| `metadata` | object | No | Key-value pairs to attach to the refund, for storing structured information like order numbers or internal IDs. |
| `payment_intent` | string | No | Identifier of the PaymentIntent to refund. Required if `charge` is not provided. |
| `reverse_transfer` | boolean | No | Reverse an associated transfer? Reversal is proportional to refund amount. Applies if the original charge had a reversible transfer. |
| `refund_application_fee` | boolean | No | Refund the application fee? If true, full refunds refund the entire fee; partials refund proportionally. Applies if the original charge had an application fee. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create a Report Run

**Slug:** `STRIPE_CREATE_REPORT_RUN`

Creates a new report run object and begins executing the report asynchronously. Use when you need to generate Stripe reports such as balance summaries or itemized transaction reports.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `parameters` | object | No | Parameters for the report run configuration. |
| `report_type` | string | Yes | The ID of the desired report type to run (e.g., 'balance.summary.1'). This determines what data the report will contain. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Reversal Tax Transaction

**Slug:** `STRIPE_CREATE_REVERSAL_TAX_TRANSACTION`

Creates a reversal of an existing tax transaction. Use when you need to fully or partially reverse tax calculations, either for full refunds or specific line items.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `mode` | string ("full" | "partial") | Yes | Reversal mode: 'full' to fully reverse the original transaction, or 'partial' to reverse specified line items, shipping cost, or a flat amount. |
| `metadata` | object | No | Set of key-value pairs for storing additional information about the reversal. |
| `reference` | string | Yes | Custom unique identifier for this reversal (max 500 characters). Must be unique across all transactions. |
| `line_items` | array | No | Array of line item reversals for partial mode. Required for partial mode if flat_amount and shipping_cost are not provided. |
| `flat_amount` | integer | No | Single amount to reverse across the entire transaction in smallest currency unit (must be negative). Required for partial mode if line_items and shipping_cost are not provided. |
| `shipping_cost` | object | No | Shipping cost reversal details for partial reversals. |
| `original_transaction` | string | Yes | ID of the Tax Transaction to reverse. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Setup Intent

**Slug:** `STRIPE_CREATE_SETUP_INTENT`

Creates a SetupIntent object to collect payment method permissions for future payments. Use when setting up payment methods for subscriptions or saving cards for later use.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `usage` | string ("off_session" | "on_session") | No | Indicates future payment method use. Values: off_session (default), on_session. |
| `confirm` | boolean | No | Set to true to immediately confirm this SetupIntent. Defaults to false. When confirming, you should provide return_url for card authentication. |
| `customer` | string | No | Customer ID this SetupIntent belongs to. Payment method will be attached to Customer on successful setup. |
| `metadata` | object | No | Key-value pairs for storing structured additional information. |
| `return_url` | string | No | URL to redirect customer after authentication/cancellation. Only with confirm=true. |
| `single_use` | object | No | Configuration for single-use mandates. |
| `description` | string | No | Arbitrary string attached to the object, useful for displaying to users. |
| `mandate_data` | object | No | Mandate creation details for the SetupIntent. |
| `on_behalf_of` | string | No | Stripe Account ID created for this SetupIntent. |
| `attach_to_self` | boolean | No | Attaches payment method to in-context Stripe Account for InboundTransfer/OutboundTransfers only. Cannot be true when setting up for a Customer. |
| `payment_method` | string | No | ID of payment method (PaymentMethod, Card, or saved Source) to attach. |
| `use_stripe_sdk` | boolean | No | Set true when confirming server-side with Stripe.js, iOS, or Android SDKs. |
| `flow_directions` | array | No | Indicates money movement direction. Values: inbound (pull funds from), outbound (send funds to). |
| `customer_account` | string | No | Account ID this SetupIntent belongs to. Payment method attaches to Account on successful setup. |
| `confirmation_token` | string | No | ID of ConfirmationToken used to confirm this SetupIntent. |
| `payment_method_data` | object | No | Creates PaymentMethod set as payment_method value. Must include 'type' field (e.g., 'card', 'sepa_debit'). |
| `payment_method_types` | array | No | List of payment method types (e.g., 'card', 'sepa_debit') to accept. Stripe dynamically shows relevant methods if omitted and automatic_payment_methods is enabled. |
| `payment_method_options` | object | No | Payment method-specific configuration with subkeys for: acss_debit, bacs_debit, card, klarna, paypal, payto, sepa_debit, us_bank_account. |
| `automatic_payment_methods` | object | No | Configuration for automatic payment methods. |
| `payment_method_configuration` | string | No | ID of payment method configuration. Maximum length: 100 characters. |
| `excluded_payment_method_types` | array | No | Payment method types to exclude from this SetupIntent. Examples: 'card', 'sepa_debit', 'us_bank_account'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create a shipping rate

**Slug:** `STRIPE_CREATE_SHIPPING_RATE`

Creates a new shipping rate object that appears on Checkout Sessions for customer display. Use when defining shipping costs for products.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `type` | string | No | The type of calculation to use on the shipping rate. Currently only supports fixed_amount. |
| `metadata` | object | No | Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. |
| `tax_code` | string | No | A tax code ID. The Shipping tax code is txcd_92010001. |
| `display_name` | string | Yes | Customer-facing name of the shipping rate, meant to be displayable to the customer. Maximum 100 characters. |
| `fixed_amount` | object | Yes | Describes a fixed amount to charge for shipping. Required when type is fixed_amount. |
| `tax_behavior` | string ("inclusive" | "exclusive" | "unspecified") | No | Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of: inclusive, exclusive, or unspecified. Once specified, it cannot be changed. |
| `delivery_estimate` | object | No | Model for estimated delivery timeframe. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Source

**Slug:** `STRIPE_CREATE_SOURCE`

Tool to create a Stripe source object for accepting payment methods. Use when you need to process payments through various payment methods like cards, bank transfers, or redirect-based payment systems.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `flow` | string | No | Authentication flow type: 'redirect', 'receiver', 'code_verification', or 'none'. |
| `type` | string | No | Source type to create (e.g., 'card', 'ach_credit_transfer'). Required unless customer and original_source are provided for cloning. |
| `owner` | object | No | Payment instrument owner information. |
| `token` | string | No | Token for source creation (e.g., from Stripe.js). |
| `usage` | string | No | Source usage type: 'reusable' or 'single_use'. |
| `amount` | integer | No | Transaction amount in smallest currency unit (e.g., cents). Mandatory for single_use sources; unsupported for receiver type sources. |
| `mandate` | object | No | Bank debit mandate details for recurring payments. |
| `currency` | string | No | Three-letter ISO currency code (e.g., 'usd', 'eur'). |
| `metadata` | object | No | Key-value pairs for storing additional structured information. |
| `receiver` | object | No | Receiver flow parameters (required if flow is 'receiver'). |
| `redirect` | object | No | Redirect flow parameters (required if flow is 'redirect'). |
| `source_order` | object | No | Order items and shipping details. |
| `statement_descriptor` | string | No | Text displayed on customer's bank or card statement. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create subscription

**Slug:** `STRIPE_CREATE_SUBSCRIPTION`

Creates a new, highly configurable subscription for an existing Stripe customer, supporting multiple items, trials, discounts, and various billing/payment options.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `items` | array | Yes | List of items (products/services and pricing) for the subscription. |
| `currency` | string | No | Three-letter ISO currency code (lowercase) for the subscription. |
| `customer` | string | Yes | ID of the existing Stripe customer. |
| `metadata` | object | No | Key-value pairs for additional information about the subscription. |
| `cancel_at` | integer | No | Unix timestamp to schedule subscription cancellation. |
| `discounts` | array | No | List of discounts for the entire subscription. |
| `trial_end` | integer | No | Unix timestamp for trial end. Overrides plan trial period. During the trial, no payment is required - this allows creating subscriptions without a payment method. Can be up to two years from billing cycle anchor. |
| `description` | string | No | Arbitrary string describing the subscription. |
| `off_session` | boolean | No | Allow initial payment attempt off-session (without direct customer interaction). |
| `on_behalf_of` | string | No | Stripe Connect account ID for attributing payments (if charging on behalf of). |
| `automatic_tax` | object | No | Settings for Stripe's automatic tax calculation. |
| `transfer_data` | object | No | Data to specify a funds transfer to a connected Stripe account as part of this subscription. |
| `days_until_due` | integer | No | Days until invoice is due (for `send_invoice` collection method). |
| `default_source` | string | No | ID of default payment source (deprecated; use `default_payment_method`). |
| `promotion_code` | string | No | ID of the promotion code to apply. |
| `trial_settings` | object | No | Settings related to the subscription's trial period, specifically how it should end. |
| `trial_from_plan` | boolean | No | Inherit trial period from the plan of the first item. |
| `invoice_settings` | object | No | Custom settings for invoices generated for this subscription. |
| `payment_behavior` | string ("allow_incomplete" | "default_incomplete" | "error_if_incomplete" | "pending_if_incomplete") | No | Behavior when initial payment fails or requires SCA (e.g., 3D Secure authentication). Options: 'allow_incomplete' (default) - creates subscription with status='incomplete' if the first invoice can't be paid; 'default_incomplete' - creates subscription with status='incomplete' when payment is required, otherwise starts as active; 'error_if_incomplete' - returns HTTP 402 error if payment fails; 'pending_if_incomplete' - only valid for updates. Note: This parameter controls payment failure handling, not whether a payment method is required. To create subscriptions without a payment method, use trial_period_days or collection_method='send_invoice'. |
| `payment_settings` | object | No | Advanced payment settings for the subscription, including payment method options. |
| `add_invoice_items` | array | No | One-time invoice items for the first invoice. |
| `collection_method` | string ("charge_automatically" | "send_invoice") | No | How to collect payment. 'charge_automatically' (default) attempts to charge customer's payment method at billing cycle end. 'send_invoice' emails an invoice with payment instructions - subscriptions using this method activate regardless of first invoice status and don't require a payment method. |
| `default_tax_rates` | array | No | List of default tax rate IDs, overridable at item level. |
| `trial_period_days` | integer | No | Number of days for the trial period. During the trial, no payment is required - this allows creating subscriptions without a payment method attached. Payment will be collected when the trial ends. |
| `billing_thresholds` | object | No | Subscription-level billing thresholds for metered billing. |
| `proration_behavior` | string ("always_invoice" | "create_prorations" | "none") | No | How to handle prorations on subscription changes. |
| `backdate_start_date` | integer | No | Unix timestamp to backdate the subscription's start. |
| `billing_cycle_anchor` | integer | No | Unix timestamp to anchor the subscription's billing cycle. |
| `cancel_at_period_end` | boolean | No | Cancel the subscription at the end of the current billing period. |
| `default_payment_method` | string | No | ID of the default payment method for this subscription (must be attached to customer). Not required if: (1) using trial_period_days or trial_end for trial subscriptions, or (2) using collection_method='send_invoice' for invoice-based billing. |
| `application_fee_percent` | number | No | Percentage (0-100) of subscription amount as an application fee for the platform. |
| `billing_cycle_anchor_config` | object | No | Configure the billing cycle anchor using a specific day, hour, minute, etc. |
| `pending_invoice_item_interval` | object | No | Configuration for generating pending invoice items for usage-based billing. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create subscription item

**Slug:** `STRIPE_CREATE_SUBSCRIPTION_ITEM`

Tool to add a new item to an existing subscription without changing existing items. Use when adding a product or service to a customer's subscription.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `price` | string | No | The ID of the price object. Either price or price_data is required. |
| `metadata` | object | No | Set of key-value pairs for storing structured data. |
| `quantity` | integer | No | The quantity you'd like to apply to the subscription item. |
| `discounts` | array | No | The coupons or promotion codes to redeem. |
| `tax_rates` | array | No | List of Tax Rate IDs to override subscription default. |
| `price_data` | object | No | Data for generating a new Price object inline. |
| `subscription` | string | Yes | The identifier of the subscription to modify. |
| `proration_date` | integer | No | Unix timestamp used to calculate proration amounts. |
| `payment_behavior` | string ("allow_incomplete" | "default_incomplete" | "pending_if_incomplete" | "error_if_incomplete") | No | Payment behavior options for handling incomplete payments. |
| `billing_thresholds` | object | No | Billing threshold configuration. |
| `proration_behavior` | string ("always_invoice" | "create_prorations" | "none") | No | Determines how to handle prorations. Default is create_prorations. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create subscription schedule

**Slug:** `STRIPE_CREATE_SUBSCRIPTION_SCHEDULE`

Tool to create a new subscription schedule for managing subscription changes over time. Use when you need to schedule future subscription modifications, phase transitions, or automate subscription lifecycle management.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `phases` | array | No | Billing phase configurations |
| `customer` | string | No | Customer identifier for the schedule |
| `metadata` | object | No | Custom key-value data |
| `start_date` | string | No | Schedule start time; use 'now' for immediate start or Unix timestamp |
| `billing_mode` | object | No | Controls prorations and invoice calculation. |
| `end_behavior` | string | No | End behavior. Values: 'release' (continue subscription) or 'cancel' (terminate) |
| `customer_account` | string | No | Account identifier for the schedule |
| `default_settings` | object | No | Schedule-wide defaults. |
| `from_subscription` | string | No | Migrate existing subscription to schedule |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Tax Calculation

**Slug:** `STRIPE_CREATE_TAX_CALCULATION`

Creates a Tax Calculation to compute taxes for customer purchases. Use when you need to calculate taxes for a transaction before finalizing it, such as displaying tax amounts in a shopping cart.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `currency` | string | Yes | Three-letter ISO currency code in lowercase. Must be a supported currency. All amounts in the calculation must use this currency. |
| `customer` | string | No | ID of an existing Stripe Customer. If provided, the customer's address and tax IDs will be used. Cannot be used together with 'customer_details'. |
| `tax_date` | integer | No | Unix timestamp specifying the date for which tax rules and rates should apply. Defaults to the current date if not provided. |
| `line_items` | array | Yes | List of line items the customer is purchasing. At least one line item is required. Each line item must have a unique 'reference'. |
| `shipping_cost` | object | No | Shipping cost for tax calculation. |
| `customer_details` | object | No | Extended customer details including tax IDs. |
| `ship_from_details` | object | No | Shipping origin details. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Tax ID

**Slug:** `STRIPE_CREATE_TAX_ID`

Creates a new tax ID for an account or customer. Use when you need to add tax identification for compliance and invoicing purposes.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `type` | string | Yes | Type of the tax ID. Supports 100+ types including: ad_nrt, ae_trn, al_tin, am_tin, ao_tin, ar_cuit, au_abn, au_arn, aw_tin, az_tin, ba_tin, bb_tin, bd_bin, bf_ifu, bg_uic, bh_vat, bj_ifu, bo_tin, br_cnpj, br_cpf, bs_tin, by_tin, ca_bn, ca_gst_hst, ca_pst_bc, ca_pst_mb, ca_pst_sk, ca_qst, cd_nif, ch_uid, ch_vat, cl_tin, cm_niu, cn_tin, co_nit, cr_tin, cv_nif, de_stn, do_rcn, ec_ruc, eg_tin, es_cif, et_tin, eu_oss_vat, eu_vat, gb_vat, ge_vat, gn_nif, hk_br, hr_oib, hu_tin, id_npwp, il_vat, in_gst, is_vat, jp_cn, jp_rn, jp_trn, ke_pin, kg_tin, kh_tin, kr_brn, kz_bin, la_tin, li_uid, li_vat, ma_vat, md_vat, me_pib, mk_vat, mr_nif, mx_rfc, my_frp, my_itn, my_sst, ng_tin, no_vat, no_voec, np_pan, nz_gst, om_vat, pe_ruc, ph_tin, ro_tin, rs_pib, ru_inn, ru_kpp, sa_vat, sg_gst, sg_uen, si_tin, sn_ninea, sr_fin, sv_nit, th_vat, tj_tin, tr_tin, tw_vat, tz_vat, ua_vat, ug_tin, us_ein, uy_ruc, uz_tin, uz_vat, ve_rif, vn_tin, za_vat, zm_tin, zw_tin |
| `owner` | object | No | Owner information for the tax ID. |
| `value` | string | Yes | The value of the tax ID. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create tax rate

**Slug:** `STRIPE_CREATE_TAX_RATE`

Tool to create a new tax rate in Stripe. Use when you need to define a tax rate for invoices, subscriptions, or checkout sessions.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `state` | string | No | ISO 3166-2 subdivision code without country prefix (e.g., 'NY' for New York). |
| `active` | boolean | No | Whether the tax rate is active. Inactive rates cannot be used with new applications but continue to work for existing subscriptions. Defaults to true. |
| `country` | string | No | Two-letter ISO 3166-1 alpha-2 country code (e.g., 'US', 'CA'). |
| `metadata` | object | No | Set of key-value pairs for storing additional structured information. |
| `tax_type` | string | No | The type of tax. One of: amusement_tax, communications_tax, gst, hst, igst, jct, lease_tax, pst, qst, retail_delivery_fee, rst, sales_tax, service_tax, or vat. |
| `inclusive` | boolean | Yes | Whether the tax is included in the price (true) or added on top (false). |
| `percentage` | number | Yes | The tax percentage value (e.g., 8.5 for 8.5%). This value is out of 100. |
| `description` | string | No | An arbitrary string for internal use only. Not displayed to customers. |
| `display_name` | string | Yes | The display name of the tax rate shown to users. Maximum 50 characters. |
| `jurisdiction` | string | No | The jurisdiction for the tax rate. Maximum 50 characters. Displayed on customer invoices for reporting purposes. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Tax Registration

**Slug:** `STRIPE_CREATE_TAX_REGISTRATION`

Creates a new Tax Registration object to enable tax collection in specified jurisdictions. Use when setting up tax collection for a new country, state, or province.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `country` | string | Yes | Two-letter ISO 3166-1 alpha-2 country code where tax collection will be enabled (e.g., 'US', 'CA', 'GB', 'DE'). |
| `expires_at` | integer | No | Optional Unix timestamp in seconds when the registration becomes inactive. Omit for indefinite validity. |
| `active_from` | string | Yes | Activation time for the registration. Use 'now' for immediate activation or provide a future Unix timestamp in seconds for scheduled activation. |
| `country_options` | object | Yes | Country-specific configuration object. The key must match the country code. Value contains type-specific configuration (e.g., for US: includes 'state' and 'type'; for EU: includes 'type' and 'standard' config when type='standard'; for CA: includes 'type' and optional nested configs). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Tax Transaction from Calculation

**Slug:** `STRIPE_CREATE_TAX_TRANSACTION_FROM_CALCULATION`

Tool to create a Tax Transaction from a calculation before 90-day expiration. Use when you need to finalize tax calculations and create a permanent transaction record.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `metadata` | object | No | Key-value pairs for storing additional information. Individual or all keys can be cleared by posting empty values. |
| `posted_at` | integer | No | Unix timestamp when tax liability is assumed/reduced. Must be between tax_date and current time. Defaults to current time if not specified. |
| `reference` | string | Yes | Custom order/sale identifier (e.g., 'myOrder_123'). Must be unique across all transactions and reversals. Maximum length: 500 characters. |
| `calculation` | string | Yes | The ID of the Tax Calculation to use as input. Must be a valid, non-expired calculation (expires after 90 days). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Terminal Configuration

**Slug:** `STRIPE_CREATE_TERMINAL_CONFIGURATION`

Creates a new Configuration object for Stripe payment terminals with customizable settings. Use when setting up terminal readers with specific device configurations, offline settings, tipping options, or WiFi credentials.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | Configuration identifier name (max 100 characters). |
| `wifi` | string | No | WiFi network connection credentials. The structure varies based on the security type (personal_psk, enterprise_eap_peap, or enterprise_eap_tls). |
| `offline` | object | No | Transaction collection settings when reader is offline. |
| `tipping` | object | No | On-reader tipping configuration by currency. Keys are three-letter currency codes (e.g., 'usd', 'eur'). Each value contains tipping options for that currency. |
| `stripe_s700` | object | No | Device-specific settings for terminal readers. |
| `reboot_window` | object | No | Customized reboot time settings. |
| `verifone_p400` | object | No | Device-specific settings for terminal readers. |
| `bbpos_wisepad3` | object | No | Device-specific settings for terminal readers. |
| `bbpos_wisepos_e` | object | No | Device-specific settings for terminal readers. |
| `reader_security` | object | No | Reader security configuration settings. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Terminal Connection Token

**Slug:** `STRIPE_CREATE_TERMINAL_CONNECTION_TOKEN`

Creates a short-lived connection token for Stripe Terminal SDK to connect to readers. Use when initializing a Terminal connection with the Stripe Terminal SDK.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `location` | string | No | The id of the location that this connection token is scoped to. If specified the connection token will only be usable with readers assigned to that location, otherwise the connection token will be usable with all readers. Note that location scoping only applies to internet-connected readers. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Terminal Location

**Slug:** `STRIPE_CREATE_TERMINAL_LOCATION`

Creates a new Terminal Location for managing Stripe Terminal readers. Use when you need to register a physical location where Terminal readers will be deployed.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `phone` | string | No | Phone number for the location. |
| `address` | object | Yes | The full address of the location. Country and line1 are required; city, state, and postal_code are conditionally required based on the country. |
| `metadata` | object | No | Set of key-value pairs that you can attach to an object for storing additional structured information. |
| `display_name` | string | No | A name for the location. Maximum 1000 characters. |
| `configuration_overrides` | string | No | The ID of a configuration that will be used to customize all readers at this location. Maximum 500 characters. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Terminal Onboarding Link

**Slug:** `STRIPE_CREATE_TERMINAL_ONBOARDING_LINK`

Creates an onboarding link for Tap to Pay on iPhone. Use when you need to generate a redirect URL for merchants to complete the Apple Terms and Conditions acceptance flow. The generated link directs merchants through the required onboarding process.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `expand` | array | No | Specifies which fields in the response should be expanded. Each field must be a valid expandable field name. |
| `link_type` | string ("apple_terms_and_conditions") | Yes | The type of link being generated. Currently only 'apple_terms_and_conditions' is supported. |
| `link_options` | object | Yes | Specific fields needed to generate the desired link type. Must include the appropriate nested object based on link_type. |
| `on_behalf_of` | string | No | Stripe account ID to generate the link for. Use this when creating the link on behalf of a connected account. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Terminal Reader

**Slug:** `STRIPE_CREATE_TERMINAL_READER`

Creates and registers a new Terminal Reader to a Stripe account at a specified location. Use this to add physical card reader devices (like Stripe S700, WisePOS E) for accepting in-person payments. The reader must first generate a registration code (enter 0-7-1-3-9 on the device) before registering via this API. For testing purposes, use simulated readers with codes 'simulated-wpe' or 'simulated-s700' in test mode only.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `label` | string | No | Custom label given to the reader for easier identification. If no label is specified, the registration code will be used as the label. |
| `location` | string | Yes | The location ID to assign this reader to. Must be a valid Stripe Location ID. |
| `metadata` | object | No | Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be cleared by setting them to empty values. |
| `registration_code` | string | Yes | A code generated by the reader used for registering to an account. For physical readers, enter the key sequence 0-7-1-3-9 on the reader to display the registration code. For testing in test mode, use 'simulated-wpe' or 'simulated-s700'. Note: Simulated readers can only be registered in test mode, not live mode. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Test Clock

**Slug:** `STRIPE_CREATE_TEST_CLOCK`

Tool to create a test clock for testing time-based scenarios in Stripe. Use when you need to simulate the passage of time for testing subscriptions, trials, or other time-dependent features.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | The name for this test clock. Maximum length is 300 characters. |
| `frozen_time` | integer | Yes | The initial frozen time for this test clock. Unix timestamp representing the starting point in time. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Test Confirmation Token (Test Mode Only)

**Slug:** `STRIPE_CREATE_TEST_CONFIRMATION_TOKEN`

Creates a test mode Confirmation Token for server-side payment integration testing. Confirmation Tokens securely transport payment method details collected client-side to your server for confirming PaymentIntents or SetupIntents. This test helper allows you to create these tokens server-side for testing without using Stripe.js. IMPORTANT: This endpoint requires TEST MODE API keys (sk_test_...). It will fail with live mode keys. Use this only for integration testing in test mode environments. Provide either 'payment_method' (existing PM ID) or 'payment_method_data' (to create new PM).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `shipping` | object | No | Shipping address and recipient information for physical goods. |
| `return_url` | string | No | URL to redirect customer after authenticating the payment (required for some payment methods). |
| `payment_method` | string | No | ID of an existing PaymentMethod to attach (e.g., 'pm_1ABC...'). Provide either this OR payment_method_data, not both. |
| `setup_future_usage` | string | No | Indicates how the payment method should be saved for future use. 'off_session' = save for future automatic charges, 'on_session' = save for future customer-initiated charges. |
| `payment_method_data` | object | No | Data to create a new PaymentMethod inline. Only used if 'payment_method' is not provided. Must include 'type' field at minimum. |
| `payment_method_options` | object | No | Payment-method-specific configuration (e.g., installment plans for cards). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create CVC update token

**Slug:** `STRIPE_CREATE_TOKEN`

Tool to create a single-use CVC update token for card re-collection. Use when you need to collect an updated CVC value for a saved card, typically during payment confirmation with manual confirmation_method on a PaymentIntent.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `cvc_update` | object | Yes | Container object for the updated CVC information. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Transfer

**Slug:** `STRIPE_CREATE_TRANSFER`

Creates a transfer to move funds between Stripe accounts as part of Connect. Use when you need to move money from your platform's balance to a connected Stripe account, such as paying out to sellers or distributing funds to connected accounts.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `amount` | integer | No | A positive integer in cents (or local equivalent) representing how much to transfer. |
| `expand` | array | No | Specifies which fields in the response should be expanded. |
| `currency` | string | Yes | Three-letter ISO code for currency in lowercase. Must be a supported currency. |
| `metadata` | object | No | Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. |
| `description` | string | No | An arbitrary string attached to the object. Often useful for displaying to users. |
| `destination` | string | Yes | The ID of a connected Stripe account. See the Connect documentation for details. |
| `source_type` | string ("bank_account" | "card" | "fpx") | No | The source balance to use for this transfer. |
| `transfer_group` | string | No | A string that identifies this transaction as part of a group. See the Connect documentation for details. |
| `source_transaction` | string | No | You can use this parameter to transfer funds from a charge before they are added to your available balance. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create usage record

**Slug:** `STRIPE_CREATE_USAGE_RECORD`

Creates a usage record for a specified subscription item and timestamp. Use when tracking customer usage for metered billing plans to accurately invoice usage-based subscriptions.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `action` | string ("increment" | "set") | No | How to handle the usage value. 'increment' (default) adds to the sum (assumes aggregate_usage=sum). 'set' overwrites the value for aggregation modes using last_during_period or last_ever. |
| `quantity` | integer | Yes | The usage quantity for the specified timestamp. Must be a positive integer. |
| `timestamp` | integer | Yes | Unix timestamp (in seconds) indicating when the usage occurred. Must fall within the current billing period, or the call will fail. A short grace period exists at billing period boundaries to account for clock drift. |
| `subscription_item` | string | Yes | The ID of the subscription item for which to create the usage record. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Deactivate billing alert

**Slug:** `STRIPE_DEACTIVATE_BILLING_ALERT`

Tool to deactivate a billing alert, preventing it from triggering. Use when you need to stop a billing alert from monitoring usage thresholds.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique identifier of the billing alert to deactivate. Must start with 'alrt_'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Deactivate Billing Meter

**Slug:** `STRIPE_DEACTIVATE_BILLING_METER`

Deactivates a billing meter. Use when you need to stop a meter from accepting new events and prevent it from being attached to prices.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Unique identifier for the billing meter to deactivate. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Apple Pay Domain

**Slug:** `STRIPE_DELETE_APPLE_PAY_DOMAIN`

Tool to delete an Apple Pay domain from a Stripe account. Use when you need to remove a previously registered Apple Pay domain. This operation is permanent and cannot be undone.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `domain` | string | Yes | The identifier of the Apple Pay domain to delete. This ID typically starts with 'apwc_'. Maximum length: 5000 characters. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete apps secret

**Slug:** `STRIPE_DELETE_APPS_SECRET`

Tool to delete a secret from the Stripe Secret Store by name and scope. Use when you need to permanently remove a secret. Requests from UI extensions can only access account-scoped secrets or secrets scoped to their own user.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | A name for the secret that's unique within the scope. The identifier used when the secret was created. |
| `scope_type` | string ("account" | "user") | Yes | The scope type - either 'account' (accessible to all UI contexts within the account) or 'user' (per-user secrets). Required parameter. |
| `scope_user` | string | No | User ID - required when scope_type is 'user', omitted for 'account' type. The user whose secret to delete. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete coupon

**Slug:** `STRIPE_DELETE_COUPON`

Tool to delete a coupon from Stripe. Use when you need to remove a coupon code, preventing new redemptions while preserving existing customer discounts.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `coupon` | string | Yes | The identifier of the coupon to be deleted. Deleting a coupon removes it from the Stripe system, preventing new customers from redeeming it. Customers who have already applied the coupon retain their discount. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete customer (Deprecated)

**Slug:** `STRIPE_DELETE_CUSTOMER`

DEPRECATED: Use STRIPE_DELETE_CUSTOMERS_CUSTOMER instead. Permanently deletes an existing Stripe customer; this irreversible action also cancels their active subscriptions and removes all associated data.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `customer_id` | string | Yes | The ID of the customer to delete. Must start with 'cus_' followed by alphanumeric characters. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete customer bank account

**Slug:** `STRIPE_DELETE_CUSTOMER_BANK_ACCOUNT`

Deletes a bank account payment source from a customer. This action is irreversible — the bank account cannot be recovered once deleted. Use when you need to remove a bank account from a customer's payment methods.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique identifier for the bank account source to delete. Must start with 'ba_' followed by alphanumeric characters. |
| `expand` | array | No | Specifies which fields in the response should be expanded. |
| `customer` | string | Yes | The unique identifier for the customer. Must start with 'cus_' followed by alphanumeric characters. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete customer discount

**Slug:** `STRIPE_DELETE_CUSTOMER_DISCOUNT`

Removes the currently applied discount on a customer. Use when you need to remove a coupon or promotion code discount from a customer's account.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `customer` | string | Yes | The ID of the customer whose discount will be removed. Must start with 'cus_' followed by alphanumeric characters. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete customer

**Slug:** `STRIPE_DELETE_CUSTOMERS_CUSTOMER`

Permanently deletes a customer and cancels active subscriptions. Use when you need to remove a customer record from your Stripe account. This operation is irreversible and automatically terminates any active subscriptions.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `customer` | string | Yes | The identifier of the customer to be deleted. Must be a valid Stripe customer ID starting with 'cus_'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Cancel customer subscription

**Slug:** `STRIPE_DELETE_CUSTOMER_SUBSCRIPTION`

Cancels a customer's subscription immediately. Customer won't be charged again, and subscription status becomes 'canceled'.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `prorate` | boolean | No | If true, creates a proration credit for unused time in the billing period. Default is false. |
| `customer` | string | Yes | The unique identifier for the customer. Must start with 'cus_' followed by alphanumeric characters. |
| `invoice_now` | boolean | No | If true, generates a final invoice for any uninvoiced metered usage and pending proration items. Default is false. |
| `subscription_exposed_id` | string | Yes | The unique identifier of the subscription to cancel. Must start with 'sub_' followed by alphanumeric characters. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete customer subscription discount

**Slug:** `STRIPE_DELETE_CUSTOMER_SUBSCRIPTION_DISCOUNT`

Removes currently applied discount from a customer's subscription. Use when you need to remove a discount code or promotion from a specific subscription belonging to a customer.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `customer` | string | Yes | The ID of the customer. Must start with 'cus_' followed by alphanumeric characters. |
| `subscription_exposed_id` | string | Yes | The unique identifier of the subscription from which to remove the discount. This is the subscription ID starting with 'sub_'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete customer tax ID

**Slug:** `STRIPE_DELETE_CUSTOMER_TAX_ID`

Deletes a customer's tax ID object. Use when you need to remove a specific tax identification from a customer's account.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The ID of the tax ID object to delete. Must start with 'txi_' followed by alphanumeric characters. |
| `customer` | string | Yes | The ID of the customer whose tax ID will be deleted. Must start with 'cus_' followed by alphanumeric characters. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete ephemeral key

**Slug:** `STRIPE_DELETE_EPHEMERAL_KEY`

Immediately invalidate an ephemeral key. Use when you need to manually expire a short-lived API key before its automatic expiration time.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `key` | string | Yes | The ID of the ephemeral key to invalidate. Must start with 'ephkey_' followed by alphanumeric characters. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete draft invoice

**Slug:** `STRIPE_DELETE_INVOICE`

Permanently deletes a draft invoice. This action cannot be undone. Use when you need to remove a draft invoice. Finalized or subscription invoices must be voided instead.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `invoice` | string | Yes | The identifier of the invoice to be deleted. Must start with 'in_' followed by alphanumeric characters. Only draft invoices can be deleted. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete invoice item

**Slug:** `STRIPE_DELETE_INVOICEITEM`

Tool to delete an invoice item from Stripe. Use when removing invoice items that are not attached to invoices or attached to draft invoices.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `invoiceitem` | string | Yes | The identifier of the invoice item to be deleted. Deleting invoice items is only possible when they're not attached to invoices, or if it's attached to a draft invoice. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete plan

**Slug:** `STRIPE_DELETE_PLAN`

Tool to delete a plan from Stripe. Use when you need to permanently remove a pricing plan. Prevents new subscribers from being added to the plan, but existing subscribers remain unaffected.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `plan` | string | Yes | The unique identifier of the plan to be deleted. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete product

**Slug:** `STRIPE_DELETE_PRODUCT`

Delete a product. Deleting a product is only possible if it has no prices associated with it. Products with type=good cannot be deleted if they have SKUs.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `product_id` | string | Yes | The ID of the product to delete. Must start with 'prod_' followed by alphanumeric characters. Only products with no associated prices can be deleted. Products with type=good cannot be deleted if they have SKUs. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete product feature

**Slug:** `STRIPE_DELETE_PRODUCT_FEATURE`

Removes a feature from a product. Use when you need to delete a specific product feature attachment.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique identifier for the feature to be removed (e.g., prodft_BcMBZUWCIOEgEc). |
| `product` | string | Yes | The unique identifier for the product (e.g., prod_NWjs8kKbJWmuuc). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete subscription discount

**Slug:** `STRIPE_DELETE_SUBSCRIPTION_DISCOUNT`

Removes the currently applied discount on a subscription. Use when you need to remove a discount code or promotion from an active subscription. Returns a deleted confirmation flag upon success.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `subscription_id` | string | Yes | The ID of the subscription from which to remove the discount. Must start with 'sub_' followed by alphanumeric characters. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete subscription item

**Slug:** `STRIPE_DELETE_SUBSCRIPTION_ITEM`

Deletes a subscription item without canceling the subscription. Use when you need to remove a specific item from a customer's subscription while keeping the subscription active.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `item` | string | Yes | The identifier of the subscription item to be deleted. |
| `clear_usage` | boolean | No | Delete all usage records for the subscription item. Only applicable when the plan's usage_type is metered. |
| `proration_date` | integer | No | Sets the calculation date for proration as a Unix timestamp. Useful for matching previewed amounts from the upcoming invoice endpoint. |
| `proration_behavior` | string ("always_invoice" | "create_prorations" | "none") | No | Handles proration adjustments during billing changes. Default: create_prorations. Options: always_invoice (invoice immediately), create_prorations (add proration items to next invoice), none (disable proration). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete tax ID

**Slug:** `STRIPE_DELETE_TAX_ID`

Deletes an existing tax ID object. Use when you need to permanently remove a tax identification from Stripe.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The ID of the tax ID to delete. Must start with 'txi_' followed by alphanumeric characters. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Terminal Configuration

**Slug:** `STRIPE_DELETE_TERMINAL_CONFIGURATION`

Permanently deletes a Terminal Configuration object from your Stripe account. Use when you need to remove a configuration that defines how features should be configured for terminal readers.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `configuration` | string | Yes | The identifier of the Configuration object to delete. Must start with 'tmc_' followed by alphanumeric characters or underscores. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Terminal Location

**Slug:** `STRIPE_DELETE_TERMINAL_LOCATION`

Tool to permanently delete a Terminal Location object from your Stripe account. Use when you need to remove a physical location where Terminal readers are no longer deployed. This operation is permanent and irreversible.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `location` | string | Yes | The unique identifier of the Terminal Location to delete. Must start with 'tml_' followed by alphanumeric characters. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Terminal Reader

**Slug:** `STRIPE_DELETE_TERMINAL_READER`

Permanently deletes a Terminal Reader object from your Stripe account. Use when you need to remove a reader device that is no longer in use.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `reader` | string | Yes | The ID of the Terminal Reader to delete. Must start with 'tmr_' followed by alphanumeric characters. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete test clock

**Slug:** `STRIPE_DELETE_TEST_CLOCK`

Permanently deletes a test clock from Stripe's test environment. Use when you need to remove test clocks used for simulating time-based features.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `test_clock` | string | Yes | The identifier of the test clock to delete. Must start with 'clock_' followed by alphanumeric characters. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Void an invoice

**Slug:** `STRIPE_DELETE_V1_INVOICES_VOID_AN_INVOICE`

Tool to void a finalized Stripe invoice. Use when you need to permanently mark an invoice as void to prevent any further collection attempts. This action cannot be undone.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `invoice_id` | string | Yes | The ID of the invoice to void. Must start with 'in_' followed by alphanumeric characters. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Cancel subscription

**Slug:** `STRIPE_DELETEV1_SUBSCRIPTIONS_LIST_SUBSCRIPTIONS`

Tool to cancel a Stripe subscription immediately. Use when you need to permanently cancel a customer's subscription and prevent future charges.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `prorate` | boolean | No | If true, generates a proration credit for remaining unused subscription time. Defaults to false. |
| `invoice_now` | boolean | No | If true, creates a final invoice covering uninvoiced metered usage and pending proration items. Defaults to false. |
| `subscription_id` | string | Yes | The identifier of the subscription to cancel. |
| `cancellation_details` | object | No | Details about the reason for cancellation. Can include 'comment' (string) for additional context and 'feedback' (enum) for customer-provided reason. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Detach payment from invoice

**Slug:** `STRIPE_DETACH_PAYMENT_FROM_INVOICE`

Tool to detach a payment from an invoice. Use when you need to remove a payment from an invoice's list of payments. Only works with paid or canceled PaymentIntents.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The ID of the invoice from which to detach the payment. |
| `payment_intent` | string | No | The ID of the PaymentIntent to detach from the invoice. Either payment_intent or payment_record must be provided. |
| `payment_record` | string | No | The ID of the payment record to detach from the invoice. Either payment_intent or payment_record must be provided. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Detach payment method

**Slug:** `STRIPE_DETACH_PAYMENT_METHOD`

Detaches a PaymentMethod object from a Customer account. Use when you need to remove a payment method from a customer without deleting it entirely.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `payment_method_id` | string | Yes | The unique identifier of the payment method to detach from the customer. Must start with 'pm_' followed by alphanumeric characters. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Disable Event Destination

**Slug:** `STRIPE_DISABLE_EVENT_DESTINATION`

Disables a v2 Event Destination, preventing it from receiving events. Use when you need to stop routing events to a webhook endpoint, Amazon EventBridge, or Azure Event Grid destination. This action is reversible by enabling the destination again.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `event_destination_id` | string | Yes | Unique identifier for the event destination to disable (e.g., 'edstest_123'). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Download Quote PDF

**Slug:** `STRIPE_DOWNLOAD_QUOTE_PDF`

Tool to download the PDF for a finalized quote from Stripe. Use when you need to retrieve the PDF document of a quote that has been finalized.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `quote` | string | Yes | The ID of the finalized quote to download as PDF. Must start with 'qt_'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Expire billing credit grant

**Slug:** `STRIPE_EXPIRE_BILLING_CREDIT_GRANT`

Expires a billing credit grant immediately. Use when you need to terminate a credit grant before its natural expiration date.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Unique identifier for the credit grant object to expire. Typically starts with 'credgr_'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Expire Checkout Session

**Slug:** `STRIPE_EXPIRE_CHECKOUT_SESSION`

Tool to expire an active Stripe Checkout Session. Use when you need to prevent customers from completing an open checkout session.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `session_id` | string | Yes | The ID of the checkout session to expire. Must be an active session with 'open' status. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Finalize an invoice

**Slug:** `STRIPE_FINALIZE_INVOICE`

Finalize a draft invoice so it becomes open/collectable (and immutable where required). Use when you need to transition an invoice from draft to open status for payment collection.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `expand` | array | No | Specifies which fields in the response should be expanded. Supports dot notation for nested expansions up to 4 levels deep. |
| `invoice_id` | string | Yes | The ID of the draft invoice to finalize. Once finalized, the invoice transitions from draft to open status, becomes immutable, and is ready for payment collection. |
| `auto_advance` | boolean | No | Controls whether Stripe performs automatic collection of the invoice. If false, the invoice's state doesn't automatically advance without an explicit action. Defaults to the invoice's current auto_advance value. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Finalize quote

**Slug:** `STRIPE_FINALIZE_QUOTE`

Tool to finalize a quote in Stripe. Use when you need to transition a quote from draft status to open status, making it ready to be sent to the customer for acceptance. The quote must have a customer attached before it can be finalized.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `quote` | string | Yes | The ID of the quote to finalize. Must start with 'qt_'. |
| `expand` | array | No | Specifies which fields in the response should be expanded. For example, ['line_items', 'customer'] to expand those nested objects. |
| `expires_at` | integer | No | A future timestamp (in seconds since Unix epoch) on which the quote will be canceled if in open or draft status. If provided, this sets when the finalized quote will automatically expire. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Find a secret by name and scope

**Slug:** `STRIPE_FIND_APPS_SECRET`

Tool to find a secret by name and scope in the Stripe Apps secret store. Use when you need to retrieve a specific secret's details based on its name and scope.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | A name for the secret that's unique within the scope. |
| `scope` | object | Yes | Specifies the scoping of the secret. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Find tax association

**Slug:** `STRIPE_FIND_TAX_ASSOCIATION`

Tool to find a tax association by PaymentIntent ID. Use when you need to retrieve tax calculation and transaction details linked to a specific payment.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `payment_intent` | string | Yes | A valid PaymentIntent identifier that links to the tax association being retrieved. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Fund Test Mode Cash Balance

**Slug:** `STRIPE_FUND_TEST_CASH_BALANCE`

Tool to fund a test mode cash balance for a customer. Use when you need to simulate incoming bank transfers in test mode. This endpoint creates a test mode bank transfer that funds a customer's cash balance without processing real money.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `amount` | integer | Yes | A positive integer in the smallest currency unit (e.g., 1000 for $10.00 USD). Represents the amount to fund the cash balance. |
| `currency` | string | Yes | Three-letter ISO currency code in lowercase (e.g., 'eur', 'usd'). |
| `reference` | string | No | A description of the test funding. This simulates free-text references supplied by customers when making bank transfers. |
| `customer_id` | string | Yes | The ID of the customer whose cash balance should be funded. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve Account

**Slug:** `STRIPE_GET_ACCOUNT`

Retrieves detailed information for the authenticated Stripe account. Use when you need to access account capabilities, requirements, settings, or business profile.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `expand` | array | No | Specifies which fields in the response should be expanded. Each item can be up to 5000 characters. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Account Capabilities

**Slug:** `STRIPE_GET_ACCOUNT_CAPABILITIES`

Retrieves a list of all capabilities for a connected Stripe account. Use when you need to check all available capabilities, their statuses, and requirements for an account.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `account` | string | Yes | The unique identifier of the Stripe account for which to retrieve capabilities. Typically starts with 'acct_'. Use 'self' to retrieve capabilities for the authenticated account. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve Account Capability

**Slug:** `STRIPE_GET_ACCOUNT_CAPABILITY`

Retrieves information about a specific capability for a Stripe account. Use when you need to check the status, requirements, or configuration of a capability such as card payments, transfers, or ACH payments.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `expand` | array | No | Specifies which fields in the response should be expanded. Supports dot notation for nested expansions up to 4 levels deep. |
| `account_id` | string | Yes | The unique identifier of the Stripe account for which to retrieve the capability. Typically starts with 'acct_'. |
| `capability_id` | string | Yes | The specific capability identifier to retrieve (e.g., card_payments, transfers, us_bank_account_ach_payments). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve Person from Account

**Slug:** `STRIPE_GET_ACCOUNT_PERSON`

Retrieves an existing person associated with a Stripe account. Use when you need to check the details, verification status, or requirements of a specific person on an account.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `person` | string | Yes | The unique identifier of the person to retrieve. Typically starts with 'person_'. |
| `account` | string | Yes | The unique identifier of the Stripe account. Typically starts with 'acct_'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List all persons for an account

**Slug:** `STRIPE_GET_ACCOUNT_PERSONS`

Retrieves a list of people associated with the account's legal entity. Use when you need to list all persons for an account, with optional filtering by relationship type.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. |
| `account` | string | Yes | The ID of the account whose persons will be retrieved. |
| `ending_before` | string | No | A cursor for use in pagination. An object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include ending_before=obj_foo in order to fetch the previous page of the list. |
| `starting_after` | string | No | A cursor for use in pagination. An object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_bar, your subsequent call can include starting_after=obj_bar in order to fetch the next page of the list. |
| `relationship_owner` | boolean | No | A filter on the list of people returned based on whether these people are owners on the account. |
| `relationship_director` | boolean | No | A filter on the list of people returned based on whether these people are directors on the account. |
| `relationship_executive` | boolean | No | A filter on the list of people returned based on whether these people are executives on the account. |
| `relationship_authorizer` | boolean | No | A filter on the list of people returned based on whether these people are authorizers on the account. |
| `relationship_legal_guardian` | boolean | No | A filter on the list of people returned based on whether these people are legal guardians on the account. |
| `relationship_representative` | boolean | No | A filter on the list of people returned based on whether these people are the representative of the account. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve Account

**Slug:** `STRIPE_GET_ACCOUNTS_ACCOUNT`

Retrieves the details of a Stripe account. Use when you need to check account properties like current requirements, live charge capability, payout eligibility, business details, or verification status.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `expand` | array | No | Specifies which fields to expand in the response. Can expand related objects and nested fields up to 4 levels deep using dot notation (e.g., 'capabilities', 'external_accounts', 'business_profile'). Maximum depth of 4 levels. |
| `account` | string | Yes | The unique identifier of the Stripe account to retrieve. Typically starts with 'acct_'. Use 'self' to retrieve the authenticated account. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve Account Token

**Slug:** `STRIPE_GET_ACCOUNT_TOKEN`

Tool to retrieve a v2 Account Token by its ID. Use when you need to fetch details about a specific account token, including its creation time, expiration, and usage status. Account tokens are single-use tokens which tokenize company/individual/business information.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `expand` | array | No | Specifies which fields in the response should be expanded. Supports dot notation for nested expansions. |
| `token_id` | string | Yes | The unique identifier of the Account Token to retrieve. This ID typically starts with 'tok_'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve active entitlement

**Slug:** `STRIPE_GET_ACTIVE_ENTITLEMENT`

Tool to retrieve an active entitlement describing customer access to a feature. Use when you need to check specific entitlement details for a customer.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique identifier of the active entitlement to retrieve. |
| `expand` | array | No | Specifies which fields in the response should be expanded. The 'feature' field can be expanded to retrieve the full Feature object instead of just the ID. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve Apple Pay Domain

**Slug:** `STRIPE_GET_APPLE_PAY_DOMAIN`

Retrieves details about a previously registered Apple Pay domain. Use when you need to fetch information about a specific Apple Pay domain that was registered with Stripe.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `domain` | string | Yes | The unique identifier of the Apple Pay domain object to retrieve. This ID typically starts with 'apwc_'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Balance Transactions (Deprecated)

**Slug:** `STRIPE_GET_BALANCE_HISTORY`

DEPRECATED: Use STRIPE_LIST_BALANCE_TRANSACTIONS instead. Tool to retrieve a list of balance transactions for your Stripe account. Use when you need to view transaction history affecting your balance. Returns all fund movements including charges, refunds, payouts, and fees with filtering options by date, currency, type, or source.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `type` | string | No | Filter by transaction type. Common types include: charge, refund, payout, transfer, application_fee, stripe_fee, adjustment. |
| `limit` | integer | No | Maximum number of balance transactions to return (1-100). Stripe defaults to 10 if not specified. |
| `payout` | string | No | Filter to only include transactions from a specific automatic payout. Provide the payout ID. |
| `source` | string | No | Filter to only include transactions associated with a specific source object ID (e.g., charge, refund, payout). |
| `created` | object | No | Filter by creation date using Unix timestamps. Accepted keys: 'gt', 'gte', 'lt', 'lte'. |
| `currency` | string | No | Three-letter ISO 4217 currency code in lowercase (e.g., 'usd', 'eur'). Filters results to transactions in the specified currency only. |
| `ending_before` | string | No | Cursor for pagination. A balance transaction ID that defines your place in the list; returns transactions listed before this one. Cannot be used with starting_after. |
| `starting_after` | string | No | Cursor for pagination. A balance transaction ID that defines your place in the list; returns transactions listed after this one. Cannot be used with ending_before. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get balance settings overview

**Slug:** `STRIPE_GET_BALANCE_SETTINGS`

Tool to retrieve balance settings for a Stripe account. Use when you need to fetch configuration options for customizing account balances and payout settings for a connected account or the authenticated account.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `stripe_account` | string | No | The connected account ID for which to retrieve balance settings. If not provided, retrieves settings for the authenticated account. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve Balance Transaction

**Slug:** `STRIPE_GET_BALANCE_TRANSACTION`

Retrieves the balance transaction with the given ID. Use when you need detailed information about a specific balance transaction including amounts, fees, availability dates, and transaction sources.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique identifier for the balance transaction to retrieve. Balance transaction IDs typically start with 'txn_'. |
| `expand` | array | No | Specifies which fields in the response should be expanded. For example, use ['source'] to expand the source field to retrieve full details of the Stripe object that triggered the balance transaction. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve Billing Alert

**Slug:** `STRIPE_GET_BILLING_ALERT`

Retrieves a billing alert by its unique identifier. Use when you need to fetch details of a specific billing alert that notifies when a certain usage threshold on a meter is crossed.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique identifier of the billing alert to retrieve (e.g., alrt_12345). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Billing Credit Balance Summary

**Slug:** `STRIPE_GET_BILLING_CREDIT_BALANCE_SUMMARY`

Retrieves the credit balance summary for a customer in Stripe Billing. This action returns the available and ledger balances for billing credits granted to a customer. You can filter by a specific credit grant, price type (metered), specific prices, or billable items. The balance summary includes one entry per currency used in the credit grants. Use Cases: - Check remaining billing credits for a customer - View credit balances for specific metered prices or products - Monitor available vs. ledger balance for billing credits - Track credit usage across different currencies

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `filter` | object | Yes | Filtering criteria for the credit balance summary. Specify either 'credit_grant' to get balance for a specific grant, or 'applicability_scope' to filter by price type, specific prices, or billable items. |
| `customer` | string | No | The Stripe customer ID whose credit balance summary is being retrieved. Either 'customer' or 'customer_account' must be specified. Starts with 'cus_'. |
| `customer_account` | string | No | The Stripe account ID representing the customer. Either 'customer' or 'customer_account' must be specified. Use this for multi-entity accounts. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve credit balance transaction

**Slug:** `STRIPE_GET_BILLING_CREDIT_BALANCE_TRANSACTIONS_ID`

Retrieves a credit balance transaction by its unique identifier. Use when you need to get details about a specific credit or debit transaction against a credit grant.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Unique identifier for the credit balance transaction object. Typically starts with 'cbtxn_'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List billing credit grants

**Slug:** `STRIPE_GET_BILLING_CREDIT_GRANTS`

Tool to retrieve a paginated list of billing credit grants. Use when you need to view credit allocations for customers, track promotional credits, or manage billing credits.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Number of objects to return per page (range: 1-100, default: 10). |
| `customer` | string | No | Filter results to only include credit grants for a specific customer ID. |
| `ending_before` | string | No | Cursor for backward pagination - credit grant ID to end before. Use for fetching the previous page. |
| `starting_after` | string | No | Cursor for forward pagination - credit grant ID to start after. Use for fetching the next page. |
| `customer_account` | string | No | Filter results to only include credit grants for a specific customer account ID. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve billing credit grant

**Slug:** `STRIPE_GET_BILLING_CREDIT_GRANTS_ID`

Retrieves a billing credit grant by its unique identifier. Use when you need to get details about a specific credit grant allocation for a customer.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Unique identifier for the credit grant object. Typically starts with 'credgr_'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List billing meters

**Slug:** `STRIPE_GET_BILLING_METERS`

Tool to retrieve a list of billing meters from Stripe. Use when you need to list meters with optional filtering by status and pagination support.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | A limit on the number of billing meter objects to be returned. The value must be an integer between 1 and 100, inclusive. If not specified, the default is 10. |
| `status` | string ("active" | "inactive") | No | Filter results by meter status. Valid values are 'active' to return only active meters or 'inactive' to return only inactive meters. If not specified, returns meters of all statuses. |
| `ending_before` | string | No | A cursor for use in pagination to fetch the previous page of results. This is an object ID that defines your place in the list. For instance, if a list request returns objects starting with 'meter_XYZ', your subsequent call can include ending_before='meter_XYZ' to fetch the previous page. |
| `starting_after` | string | No | A cursor for use in pagination to fetch the next page of results. This is an object ID that defines your place in the list. For instance, if a list request returns objects and the last object's ID is 'meter_ABC', your subsequent call can include starting_after='meter_ABC' to fetch the next page. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve Billing Meter

**Slug:** `STRIPE_GET_BILLING_METERS_ID`

Retrieves a billing meter by its unique identifier. Use when you need to fetch configuration details and settings for a specific billing meter.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Unique identifier for the billing meter to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List portal configurations

**Slug:** `STRIPE_GET_BILLING_PORTAL_CONFIGURATIONS`

Tool to list billing portal configurations. Use when you need to retrieve portal configurations that describe the functionality and settings of the customer portal.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of configuration objects to return. Value must be between 1 and 100. Defaults to 10 if not specified. |
| `active` | boolean | No | Filter configurations by active status. Set to True to return only active configurations, or False for inactive ones. |
| `is_default` | boolean | No | Filter by default configuration. Set to True to return only the default configuration, or False for non-default configurations. |
| `ending_before` | string | No | Cursor for pagination to fetch the previous page. Provide the ID of the configuration that should end the list. |
| `starting_after` | string | No | Cursor for pagination to fetch the next page. Provide the ID of the configuration that should start the list. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get billing portal configuration

**Slug:** `STRIPE_GET_BILLING_PORTAL_CONFIGURATIONS_CONFIGURATION`

Tool to retrieve a billing portal configuration from Stripe. Use when you need to fetch details about a specific portal configuration including branding, features, and settings.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `configuration` | string | Yes | The unique identifier for the billing portal configuration, typically starting with 'bpc_'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve Charge Dispute

**Slug:** `STRIPE_GET_CHARGES_CHARGE_DISPUTE`

Tool to retrieve a dispute for a specified charge. Use when you need to get dispute details associated with a specific charge ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `charge` | string | Yes | Identifier for the charge, typically starting with 'ch_'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Charge Refund Details

**Slug:** `STRIPE_GET_CHARGES_CHARGE_REFUNDS_REFUND`

Tool to retrieve the details of an existing refund within a specific charge. Use when you need to get refund information using both the charge ID and refund ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `charge` | string | Yes | The identifier of the charge that contains the refund. This ID typically starts with 'ch_'. |
| `expand` | array | No | Specifies which fields in the response should be expanded. Expandable fields include: balance_transaction, charge, destination_details, failure_balance_transaction, next_action, payment_intent, presentment_details, source_transfer_reversal, transfer_reversal. |
| `refund` | string | Yes | The identifier of the refund to retrieve. This ID typically starts with 're_'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Checkout Session Line Items

**Slug:** `STRIPE_GET_CHECKOUT_SESSIONS_SESSION_LINE_ITEMS`

Tool to retrieve line items for a Checkout Session. Use when you need to view the items, pricing, quantities, and totals for a specific checkout session.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. |
| `session` | string | Yes | The ID of the Checkout Session. |
| `ending_before` | string | No | A cursor for use in pagination. ending_before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_bar, your subsequent call can include ending_before=obj_bar in order to fetch the previous page of the list. |
| `starting_after` | string | No | A cursor for use in pagination. starting_after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order to fetch the next page of the list. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve climate product

**Slug:** `STRIPE_GET_CLIMATE_PRODUCTS_PRODUCT`

Tool to retrieve details of a specific Stripe Climate product. Use when you need to get information about a particular carbon removal product including pricing and supplier details.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `product` | string | Yes | The unique identifier of the Climate product to retrieve (e.g., 'climsku_planetary_2027'). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve climate supplier details

**Slug:** `STRIPE_GET_CLIMATE_SUPPLIERS_SUPPLIER`

Retrieves detailed information about a specific Stripe Climate carbon removal supplier. Returns supplier details including name, carbon removal pathway (biomass, direct air capture, or enhanced weathering), operational locations with geographic coordinates, and additional information URL. Use this to get comprehensive details about a specific supplier after obtaining supplier IDs from the list suppliers endpoint. Note: Requires Stripe Climate access. If you receive an error about submitting an account application, the Stripe account needs to apply for Climate feature access.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `supplier` | string | Yes | Unique identifier of the climate supplier to retrieve. Format: 'climsup_' followed by supplier name. Obtain supplier IDs using the list climate suppliers endpoint. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve Confirmation Token

**Slug:** `STRIPE_GET_CONFIRMATION_TOKENS_CONFIRMATION_TOKEN`

Tool to retrieve an existing ConfirmationToken object by its ID. Use when you need to access payment method details and customer information that were securely passed during the payment confirmation flow.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `expand` | array | No | Specifies which fields in the response should be expanded. Supports dot notation for nested expansions (e.g., 'payment_intent.customer'). Maximum of four nesting levels allowed. |
| `confirmation_token` | string | Yes | The unique identifier of the ConfirmationToken to retrieve. This ID typically starts with 'ctoken_'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve Country Spec

**Slug:** `STRIPE_GET_COUNTRY_SPECS_COUNTRY`

Retrieves configuration details for a specific country, including supported payment methods, required verification fields, and supported currencies. Use when you need country-specific payment capabilities.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `country` | string | Yes | An ISO 3166-1 alpha-2 country code. Available country codes can be listed with the List Country Specs endpoint. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve Coupon Details

**Slug:** `STRIPE_GET_COUPON`

Retrieves full details for an existing Stripe coupon using its unique ID. Use when you need to check coupon validity, discount details, or redemption limits.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `coupon_id` | string | Yes | Unique identifier for the coupon to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Credit Note Lines

**Slug:** `STRIPE_GET_CREDIT_NOTES_CREDIT_NOTE_LINES`

Retrieves the paginated list of line items for a specific credit note. Use when you need complete details of all line items associated with a credit note.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of line items to return (1-100). Defaults to 10 if not specified. |
| `credit_note` | string | Yes | The unique identifier of the credit note whose line items to retrieve. |
| `ending_before` | string | No | Cursor for backward pagination; an object ID that defines your place in the list. Returns the page of results before this object ID. |
| `starting_after` | string | No | Cursor for forward pagination; an object ID that defines your place in the list. Returns the page of results after this object ID. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve a credit note

**Slug:** `STRIPE_GET_CREDIT_NOTES_ID`

Retrieves a credit note by its unique identifier. Use when you need to get detailed information about a specific credit note.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The identifier of the credit note to be retrieved. Typically starts with 'cn_'. |
| `expand` | array | No | Specifies which fields in the response should be expanded. Supports nested expansion up to 4 levels deep (e.g., ['customer', 'invoice.subscription']). Expandable fields include: customer, invoice, refunds, lines.data.invoice_line_item, customer_balance_transaction. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Preview Credit Note

**Slug:** `STRIPE_GET_CREDIT_NOTES_PREVIEW`

Tool to preview a credit note without creating it in Stripe. Use when you need to see what a credit note will contain before issuing it.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `memo` | string | No | The credit note's memo appears on the credit note PDF. This can be useful for providing additional information to the customer. |
| `lines` | array | No | Line items that make up the credit note. Each line item object can contain: type (required, one of 'invoice_line_item' or 'custom_line_item'), amount, description, invoice_line_item, quantity, tax_amounts, tax_rates, unit_amount, unit_amount_decimal. At least one of amount, lines, or shipping_cost must be provided. |
| `amount` | integer | No | The integer amount in cents representing the total amount of the credit note. At least one of amount, lines, or shipping_cost must be provided. |
| `reason` | string | No | Reason for issuing this credit note. Possible values: 'duplicate', 'fraudulent', 'order_change', 'product_unsatisfactory'. |
| `invoice` | string | Yes | ID of the invoice for which the credit note is being previewed. This is required to preview a credit note. |
| `refunds` | array | No | IDs of existing refunds to link to this credit note. |
| `metadata` | object | No | Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. |
| `email_type` | string | No | The type of email that should be sent for this credit note. Possible values: 'credit_note', 'none'. Default is 'credit_note'. |
| `effective_at` | integer | No | The date when this credit note is in effect. Specified as a Unix timestamp. |
| `credit_amount` | integer | No | The integer amount in cents representing the amount to credit the customer's balance, which will be automatically applied to their next invoice. |
| `refund_amount` | integer | No | The integer amount in cents representing the amount to refund. If set, a refund will be created for the charge associated with the invoice. |
| `shipping_cost` | object | No | The shipping cost to credit. Contains shipping_rate (required if shipping_cost is provided): the ID of the shipping rate to use for this order. At least one of amount, lines, or shipping_cost must be provided. |
| `out_of_band_amount` | integer | No | The integer amount in cents representing the amount that is credited outside of Stripe. This is used when a credit is issued via a means other than Stripe. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Credit Note Preview Lines

**Slug:** `STRIPE_GET_CREDIT_NOTES_PREVIEW_LINES`

Tool to retrieve a credit note preview's line items from Stripe. Use when you need to see what line items would be included in a credit note before creating it.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `memo` | string | No | The credit note's memo appears on the credit note PDF. |
| `limit` | integer | No | A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. |
| `lines` | array | No | Line items that make up the credit note. One of amount, lines, or shipping_cost is required. |
| `amount` | integer | No | The integer amount in cents representing the total amount of the credit note. |
| `reason` | string ("duplicate" | "fraudulent" | "order_change" | "product_unsatisfactory") | No | Reason for issuing this credit note, one of duplicate, fraudulent, order_change, or product_unsatisfactory. |
| `refund` | string | No | ID of an existing refund to link to this credit note. |
| `invoice` | string | Yes | ID of the invoice for which to preview credit note line items. |
| `metadata` | object | No | Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. |
| `email_type` | string ("credit_note" | "none") | No | The email type to send to the customer. Defaults to 'credit_note'. |
| `effective_at` | integer | No | The date when the credit note is in effect. Same as created unless overwritten. Unix timestamp. |
| `credit_amount` | integer | No | The integer amount in cents representing the amount to credit the customer's balance, which will be automatically applied to their next invoice. |
| `ending_before` | string | No | A cursor for use in pagination. ending_before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_bar, your subsequent call can include ending_before=obj_bar in order to fetch the previous page of the list. |
| `refund_amount` | integer | No | The integer amount in cents representing the amount to refund. If set, a refund will be created for the charge associated with the invoice. |
| `shipping_cost` | object | No | Shipping cost to include in the credit note. One of amount, lines, or shipping_cost is required. |
| `starting_after` | string | No | A cursor for use in pagination. starting_after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order to fetch the next page of the list. |
| `out_of_band_amount` | integer | No | The integer amount in cents representing the amount that is credited outside of Stripe. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve customer cash balance transaction

**Slug:** `STRIPE_GET_CUSTOMERS_CASH_BALANCE_TRANSACTIONS`

Tool to retrieve a specific cash balance transaction that updated a customer's cash balance. Use when you need to get details about a particular cash balance transaction for a customer.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `expand` | array | No | Specifies which fields in the response should be expanded. Can expand related objects. |
| `customer` | string | Yes | The unique identifier for the customer. Typically starts with 'cus_'. |
| `transaction` | string | Yes | The unique identifier for the cash balance transaction. Typically starts with 'ccsbtxn_'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List customer balance transactions

**Slug:** `STRIPE_GET_CUSTOMERS_CUSTOMER_BALANCE_TRANSACTIONS`

Tool to list customer balance transactions that updated a customer's balance. Use when you need to retrieve the history of balance changes for a specific customer.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | A limit on the number of objects to be returned. Limit can range between 1 and 100. |
| `created` | object | No | A filter on the list based on the object created field. The value can be a dictionary with keys like 'gt', 'gte', 'lt', 'lte' and Unix timestamp values. |
| `invoice` | string | No | Only return transactions that are related to the specified invoice. |
| `customer` | string | Yes | The unique identifier for the customer whose balance transactions you wish to retrieve. |
| `ending_before` | string | No | A cursor for use in pagination. ending_before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_bar, your subsequent call can include ending_before=obj_bar in order to fetch the previous page of the list. |
| `starting_after` | string | No | A cursor for use in pagination. starting_after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order to fetch the next page of the list. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve Customer Balance Transaction

**Slug:** `STRIPE_GET_CUSTOMERS_CUSTOMER_BALANCE_TXNS_TXN`

Retrieves a specific customer balance transaction that updated the customer's balances. Use this when you need to fetch details about a particular balance transaction for a customer.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `customer` | string | Yes | The unique identifier of the customer. Customer IDs typically start with 'cus_'. |
| `transaction` | string | Yes | The unique identifier of the customer balance transaction to retrieve. Transaction IDs typically start with 'cbtxn_'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List customer bank accounts

**Slug:** `STRIPE_GET_CUSTOMERS_CUSTOMER_BANK_ACCOUNTS`

Tool to fetch all bank accounts linked to a customer. Use when you need to retrieve payment source information for a specific customer.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. |
| `customer_id` | string | Yes | The ID of the customer whose bank accounts will be retrieved. |
| `ending_before` | string | No | A cursor for use in pagination. An object ID that defines your place in the list. For instance, if you make a list request and receive 10 objects, starting with obj_bar, your subsequent call can include ending_before=obj_bar in order to fetch the previous page of the list. |
| `starting_after` | string | No | A cursor for use in pagination. An object ID that defines your place in the list. For instance, if you make a list request and receive 10 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order to fetch the next page of the list. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve customer bank account

**Slug:** `STRIPE_GET_CUSTOMERS_CUSTOMER_BANK_ACCOUNTS_ID`

Retrieves details about a specific bank account stored on a Stripe customer. Use when you need to view bank account information for a customer.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique identifier for the bank account to retrieve. Must start with 'ba_' followed by alphanumeric characters. |
| `expand` | array | No | Specifies which fields in the response should be expanded. Supports expansion of related objects and nested fields up to 4 levels deep. |
| `customer` | string | Yes | The unique identifier for the customer. Must start with 'cus_' followed by alphanumeric characters. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List all cards

**Slug:** `STRIPE_GET_CUSTOMERS_CUSTOMER_CARDS`

Tool to list all cards for a customer. Use when you need to retrieve payment card information for a specific customer.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. |
| `customer` | string | Yes | The ID of the customer whose cards will be retrieved. |
| `ending_before` | string | No | A cursor for use in pagination. ending_before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_bar, your subsequent call can include ending_before=obj_bar in order to fetch the previous page of the list. |
| `starting_after` | string | No | A cursor for use in pagination. starting_after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order to fetch the next page of the list. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve customer card

**Slug:** `STRIPE_GET_CUSTOMERS_CUSTOMER_CARDS_ID`

Retrieves details about a specific card for a customer. Use when you need to view card information stored on a customer account.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The ID of the card to retrieve. Must start with 'card_' followed by alphanumeric characters. |
| `customer` | string | Yes | The ID of the customer who owns the card. Must start with 'cus_' followed by alphanumeric characters. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get customer cash balance

**Slug:** `STRIPE_GET_CUSTOMERS_CUSTOMER_CASH_BALANCE`

Tool to retrieve a customer's cash balance. Use when you need to check the current cash balance for a specific Stripe customer, including available funds by currency.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `expand` | array | No | Specifies which fields in the response should be expanded. Each string in the array can be a field path to expand. |
| `customer` | string | Yes | The unique identifier of the customer whose cash balance to retrieve (e.g., cus_TepEFWlTGw5ves). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List cash balance transactions

**Slug:** `STRIPE_GET_CUSTOMERS_CUSTOMER_CASH_BALANCE_TRANSACTIONS`

Tool to retrieve a list of cash balance transactions for a customer. Use when you need to view the history of cash balance changes for a specific Stripe customer, including funds added and payments applied.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Limit on the number of objects to return. Range: 1-100. Defaults to 10 if not specified. |
| `customer_id` | string | Yes | The unique identifier of the customer whose cash balance transactions to retrieve. This ID typically starts with 'cus_'. |
| `ending_before` | string | No | Object ID for backward pagination. Retrieves the previous page of transactions before this object ID. |
| `starting_after` | string | No | Object ID for forward pagination. Retrieves the next page of transactions after this object ID. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get customer discount

**Slug:** `STRIPE_GET_CUSTOMERS_CUSTOMER_DISCOUNT`

Tool to retrieve the discount currently active on a customer. Use when you need to check a customer's active discount details.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `customer` | string | Yes | The ID of the customer whose discount should be retrieved. Must start with 'cus_' followed by alphanumeric characters. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List customer payment methods

**Slug:** `STRIPE_GET_CUSTOMERS_CUSTOMER_PAYMENT_METHODS`

Retrieves a list of payment methods for a given customer, supporting type filtering and pagination.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `type` | string | No | Filters the list by payment method type (e.g., 'card', 'sepa_debit'). |
| `limit` | integer | No | Limit on the number of payment methods returned. If not specified, Stripe's default limit (typically 10) applies. |
| `customer_id` | string | Yes | The unique identifier of the customer whose payment methods are to be retrieved. |
| `ending_before` | string | No | Pagination cursor; ID of the first object from a previous request to fetch the preceding page. |
| `starting_after` | string | No | Pagination cursor; ID of the last object from a previous request to fetch the next page. |
| `allow_redisplay` | string ("always" | "limited" | "unspecified") | No | Filter results by the value of allow_redisplay on the payment methods. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve customer's payment method

**Slug:** `STRIPE_GET_CUSTOMERS_CUSTOMER_PAYMENT_METHODS_PAYMENT_METHOD`

Tool to retrieve a specific PaymentMethod object for a given Customer. Use when you need to get detailed information about a particular payment method associated with a customer.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `expand` | array | No | Specifies which fields in the response should be expanded. Can expand related objects like 'customer' or nested references. Maximum expansion depth is four levels. |
| `customer` | string | Yes | The unique identifier of the customer (e.g., 'cus_TepEFWlTGw5ves'). |
| `payment_method` | string | Yes | The unique identifier of the payment method (e.g., 'pm_1ShVbgQvM72TjFrbs0uPksaA'). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List customer sources

**Slug:** `STRIPE_GET_CUSTOMERS_CUSTOMER_SOURCES`

Tool to list sources for a specified customer. Use when you need to retrieve payment sources (cards) stored on a customer account.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. |
| `customer` | string | Yes | The ID of the customer whose sources will be retrieved. |
| `ending_before` | string | No | A cursor for use in pagination. This is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_bar, your subsequent call can include ending_before=obj_bar in order to fetch the previous page of the list. |
| `starting_after` | string | No | A cursor for use in pagination. This is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order to fetch the next page of the list. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve customer source

**Slug:** `STRIPE_GET_CUSTOMERS_CUSTOMER_SOURCES_ID`

Tool to retrieve a specified payment source for a given customer. Use when you need to get details about a specific card, bank account, or payment source attached to a customer. Note: The Sources API is deprecated; consider using PaymentMethods API for new integrations.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The ID of the source to retrieve. Can be a Card ID (starts with 'card_'), Bank Account ID (starts with 'ba_'), or Source ID (starts with 'src_'). |
| `expand` | array | No | Specifies which fields in the response should be expanded. For example, to expand the customer field, use ['customer']. |
| `customer` | string | Yes | The ID of the customer who owns the source. Must start with 'cus_'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List customer subscriptions

**Slug:** `STRIPE_GET_CUSTOMERS_CUSTOMER_SUBSCRIPTIONS`

DEPRECATED: Use STRIPE_LIST_SUBSCRIPTIONS instead. List subscriptions for a specific Stripe customer. By default returns subscriptions that have not been canceled. Use the 'status' parameter to filter by subscription status (e.g., 'active', 'all', 'canceled', 'trialing'). Returns paginated results with subscription details including items, pricing, billing cycles, and payment settings.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Limit on the number of subscription objects to return (1-100). Default is 10. |
| `status` | string | No | Filter subscriptions by status (e.g., 'active', 'all', 'canceled', 'incomplete', 'incomplete_expired', 'trialing', 'past_due', 'unpaid', 'paused', 'ended'). By default, returns active subscriptions and excludes canceled ones. |
| `customer` | string | Yes | ID of the customer whose subscriptions will be retrieved. Required. |
| `ending_before` | string | No | Cursor for paginating backwards; provide the ID of the subscription that should end the list. |
| `starting_after` | string | No | Cursor for paginating forwards; provide the ID of the subscription that should start the list. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve customer subscription

**Slug:** `STRIPE_GET_CUSTOMERS_CUSTOMER_SUBS_SUB_EXPOSED_ID`

Tool to retrieve a specific subscription for a customer. Use when you need to get detailed information about a customer's subscription using both customer ID and subscription ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `customer` | string | Yes | The ID of the customer. Must start with 'cus_' followed by alphanumeric characters. |
| `subscription_exposed_id` | string | Yes | The unique identifier of the subscription to retrieve. This is the subscription ID starting with 'sub_'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get customer subscription discount

**Slug:** `STRIPE_GET_CUSTOMERS_CUSTOMER_SUBS_SUB_EXPOSED_ID_DISCOUNT`

Tool to retrieve the discount currently applied to a customer's subscription. Use when you need to check if a subscription has an active discount and get details about the coupon or promotion code.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `expand` | array | No | Specifies which fields in the response should be expanded. For example, use 'coupon' to expand the coupon details within the discount object. |
| `customer` | string | Yes | The ID of the customer. Must start with 'cus_' followed by alphanumeric characters. |
| `subscription_exposed_id` | string | Yes | The unique identifier of the subscription. This is the subscription ID starting with 'sub_'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List customer tax IDs

**Slug:** `STRIPE_GET_CUSTOMERS_CUSTOMER_TAX_IDS`

Tool to retrieve all tax IDs for a specific Stripe customer. Use when you need to list tax identification numbers (VAT, GST, etc.) associated with a customer account.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Controls result set size, ranging from 1–100 with a default of 10. |
| `customer` | string | Yes | The unique identifier for the customer whose tax IDs should be retrieved. |
| `ending_before` | string | No | Pagination cursor. Pass a tax ID object ID to retrieve records appearing before that position in the list. |
| `starting_after` | string | No | Pagination cursor. Pass a tax ID object ID to retrieve records appearing after that position in the list. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve a customer tax ID

**Slug:** `STRIPE_GET_CUSTOMERS_CUSTOMER_TAX_IDS_ID`

Tool to retrieve a specific tax ID for a customer. Use when you need to fetch details about a customer's tax identification number.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique identifier of the tax ID object to retrieve. This ID typically starts with 'txi_'. |
| `customer` | string | Yes | The unique identifier of the customer. This ID typically starts with 'cus_'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List active entitlements

**Slug:** `STRIPE_GET_ENTITLEMENTS_ACTIVE_ENTITLEMENTS`

Tool to retrieve active entitlements for a customer. Use when you need to check which features a customer currently has access to.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of objects to return. Range: 1-100. Defaults to 10 if not specified. |
| `customer` | string | Yes | The ID of the customer whose entitlements to retrieve. This parameter is required. |
| `ending_before` | string | No | A cursor for use in pagination. Defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_bar, your subsequent call can include ending_before=obj_bar in order to fetch the previous page of the list. |
| `starting_after` | string | No | A cursor for use in pagination. Defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order to fetch the next page of the list. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve entitlements feature

**Slug:** `STRIPE_GET_ENTITLEMENTS_FEATURES_ID`

Tool to retrieve a feature by ID from Stripe. Use when you need to get details about a specific entitlements feature.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique identifier of the feature to retrieve. This ID typically starts with 'feat_'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List events

**Slug:** `STRIPE_GET_EVENTS`

Retrieves a list of Stripe events from the past 30 days with filtering and pagination. Use to track API activity and monitor webhook deliveries.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `type` | string | No | Filter by specific event name or wildcard pattern (e.g., 'charge.*'). Mutually exclusive with 'types' parameter. |
| `limit` | integer | No | Maximum number of events to return (1-100). Defaults to 10 if not specified. |
| `types` | array | No | Array of up to 20 event names for filtering. Mutually exclusive with 'type' parameter. |
| `created` | object | No | Filter by creation date range. Use a dictionary with keys 'gt' (exclusive minimum), 'gte' (inclusive minimum), 'lt' (exclusive maximum), 'lte' (inclusive maximum) and Unix timestamp values. |
| `ending_before` | string | No | Pagination cursor; retrieves events created before the specified event ID to fetch the previous page. |
| `starting_after` | string | No | Pagination cursor; retrieves events created after the specified event ID to fetch the next page. |
| `delivery_success` | boolean | No | Filter by webhook delivery status. True returns successful deliveries, false returns pending or failed. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve event

**Slug:** `STRIPE_GET_EVENTS_ID`

Retrieves event details for events created within the last 30 days. Use when you need to fetch webhook event information or verify event data.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique identifier of the event to retrieve. Event IDs typically start with 'evt_'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve file link

**Slug:** `STRIPE_GET_FILE_LINKS_LINK`

Retrieves the details of an existing file link. Use when you need to access file link information or verify if a link is still valid.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `expand` | array | No | Specifies which fields in the response should be expanded. By default, related objects are returned as IDs only. For example, use ['file'] to expand the file object instead of just getting the file ID. |
| `file_link_id` | string | Yes | The unique identifier of the file link to retrieve. This ID typically starts with 'link_'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve File

**Slug:** `STRIPE_GET_FILES_FILE`

Tool to retrieve details of an existing file object by its unique identifier. Use when you need to get information about a previously uploaded file.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `file` | string | Yes | The unique identifier for the file to retrieve. This ID typically starts with 'file_'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve Financial Connections Session

**Slug:** `STRIPE_GET_FINANCIAL_CONNECTIONS_SESSIONS_SESSION`

Retrieves the details of a Financial Connections Session. Use when you need to check the status or details of a session.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `session` | string | Yes | The ID of the Financial Connections Session to retrieve (e.g., fcsess_1ShVb5QvM72TjFrbiN8vvi03). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve FX Quote

**Slug:** `STRIPE_GET_FX_QUOTE`

Retrieve a specific FX (foreign exchange) Quote by its ID. FX Quotes provide exchange rates between currencies that can be locked for a period (5 minutes to 24 hours) to protect against rate fluctuations. Use this to view exchange rate details, lock status, and rate breakdowns including base rates, FX fees, and duration premiums.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique identifier of the FX Quote to retrieve. Typically starts with 'fxq_'. |
| `expand` | array | No | Specifies which fields in the response should be expanded. Expandable fields are returned as IDs by default, but can be expanded into full objects. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve Invoice Item

**Slug:** `STRIPE_GET_INVOICEITEMS_INVOICEITEM`

Tool to retrieve the details of an invoice item using its unique identifier. Use when you need to fetch information about a specific invoice item.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `expand` | array | No | Specifies which fields in the response should be expanded. Available expandable fields include: discounts. Use dot notation for nested expansions (max depth: 4 levels). |
| `invoiceitem` | string | Yes | The unique identifier for the invoice item (e.g., ii_1MtGUtLkdIwHu7ixBYwjAM00). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve an invoice payment

**Slug:** `STRIPE_GET_INVOICE_PAYMENTS_ID`

Tool to retrieve details of a specific Stripe invoice payment by ID. Use when you need to get information about an existing invoice payment.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique identifier for the invoice payment to retrieve. This ID typically starts with 'inpay_'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve Invoice

**Slug:** `STRIPE_GET_INVOICES_INVOICE`

Tool to retrieve a specific invoice by ID. Use when you need to get detailed information about an existing invoice.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `expand` | array | No | Specifies which fields in the response should be expanded. Supports dot notation for nested expansion up to 4 levels deep (e.g., 'customer', 'subscription.default_payment_method'). |
| `invoice` | string | Yes | The unique identifier of the invoice to retrieve. Typically starts with 'in_'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Invoice Line Items

**Slug:** `STRIPE_GET_INVOICES_INVOICE_LINES`

Tool to retrieve a paginated list of line items for a specific invoice. Use when you need to see the individual charges, products, or services included in an invoice.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of line items to return (1-100). Defaults to 10 if not specified. |
| `invoice` | string | Yes | The unique identifier of the invoice whose line items to retrieve (e.g., in_1NpHok2eZvKYlo2CyeiBref0). |
| `ending_before` | string | No | Cursor for backward pagination; a line item ID from a previous response that defines the end of the current page, used to fetch the preceding page. |
| `starting_after` | string | No | Cursor for forward pagination; a line item ID from a previous response that defines the end of the current page, used to fetch the subsequent page. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve Linked Account

**Slug:** `STRIPE_GET_LINKED_ACCOUNT`

Retrieves the details of a Linked Account object by its unique identifier. A Financial Connections Account represents an account that exists outside of Stripe, to which you have been granted some degree of access. Use this action when you need to view the configuration, balance, ownership, and other details of an existing Financial Connections account linked through Stripe.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `expand` | array | No | Optional list of fields to expand in the response. For example, pass ['balance'] to expand the balance field into a full balance object instead of just an ID. |
| `account` | string | Yes | The ID of the Linked Account to retrieve. Must start with 'fca_' followed by alphanumeric characters. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve mandate

**Slug:** `STRIPE_GET_MANDATE`

Tool to retrieve a Stripe mandate by ID. Use when you need to get authorization details for recurring or single-use payments.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `expand` | array | No | Specifies which fields in the response should be expanded. Options include 'payment_method' and 'on_behalf_of'. |
| `mandate_id` | string | Yes | Unique identifier for the mandate, typically starting with 'mandate_'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve Payment Attempt Record

**Slug:** `STRIPE_GET_PAYMENT_ATTEMPT_RECORDS_ID`

Tool to retrieve a specific Payment Attempt Record by ID. Use when you need to get detailed information about a particular payment attempt.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The ID of the Payment Attempt Record to retrieve. Typically starts with 'par_'. |
| `expand` | array | No | Specifies which fields in the response should be expanded. Multiple fields can be specified. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get payment intent amount details line items

**Slug:** `STRIPE_GET_PAYMENT_INTENT_AMOUNT_DETAILS_LINE_ITEMS`

Tool to retrieve paginated line items for a PaymentIntent. Use when you need to get detailed product and service information including quantities, prices, discounts, and taxes for a specific payment intent.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | A limit on the number of objects to be returned. Limit can range between 1 and 100, defaults to 10. |
| `ending_before` | string | No | Cursor for backward pagination. A line item ID that defines your place in the list; returns results before this line item. |
| `starting_after` | string | No | Cursor for forward pagination. A line item ID that defines your place in the list; returns results after this line item. |
| `payment_intent_id` | string | Yes | The unique identifier of the PaymentIntent to retrieve line items for. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve payment link

**Slug:** `STRIPE_GET_PAYMENT_LINK`

Tool to retrieve details of an existing Stripe payment link by ID. Use when you need to get information about a specific payment link.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `expand` | array | No | Specifies which fields in the response should be expanded. Supports nested expansion using dot notation up to 4 levels deep. |
| `payment_link_id` | string | Yes | The ID of the payment link to retrieve. Typically starts with 'plink_'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get payment link line items

**Slug:** `STRIPE_GET_PAYMENT_LINKS_PAYMENT_LINK_LINE_ITEMS`

Tool to retrieve paginated line items for a payment link. Use when you need to get detailed product and service information including quantities, prices, discounts, and taxes for a specific payment link.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | A limit on the number of line items to return. Must be between 1 and 100. If not specified, the Stripe API defaults to 10. |
| `payment_link` | string | Yes | The unique identifier of the payment link to retrieve line items for. |
| `ending_before` | string | No | Cursor for backward pagination. A line item ID that defines your place in the list; returns results before this line item. |
| `starting_after` | string | No | Cursor for forward pagination. A line item ID that defines your place in the list; returns results after this line item. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve payment method

**Slug:** `STRIPE_GET_PAYMENT_METHOD`

Retrieves the details of a PaymentMethod object by its unique identifier. Returns information including the payment method type (card, us_bank_account, sepa_debit, etc.), billing details, and type-specific payment information. Use this when you need to view the configuration and details of an existing payment method.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `expand` | array | No | Optional list of fields to expand in the response. For example, pass ['customer'] to expand the customer field into a full Customer object instead of just an ID. Supports nested expansion using dot notation (e.g., ['customer.default_source']). |
| `payment_method_id` | string | Yes | The ID of the PaymentMethod to retrieve. Must start with 'pm_' followed by alphanumeric characters. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve payment method configuration

**Slug:** `STRIPE_GET_PAYMENT_METHOD_CONFIGURATION`

Tool to retrieve a specific payment method configuration by its unique identifier. Use when you need to inspect the settings and availability of payment methods for a given configuration.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique identifier of the payment method configuration to retrieve. This ID typically starts with 'pmc_'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve Payment Method Domain

**Slug:** `STRIPE_GET_PAYMENT_METHOD_DOMAIN`

Retrieves details of an existing payment method domain. Use when you need to fetch information about a specific payment method domain registered with Stripe.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `payment_method_domain` | string | Yes | The unique identifier of the payment method domain object to retrieve. This ID typically starts with 'pmd_'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve Payment Record

**Slug:** `STRIPE_GET_PAYMENT_RECORD`

Tool to retrieve a Payment Record from Stripe. Use when you need to access details about payments that occur on- or off-Stripe, including payment attempts and status information.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The ID of the Payment Record to retrieve. |
| `expand` | array | No | Specifies which fields in the response should be expanded. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve a payout

**Slug:** `STRIPE_GET_PAYOUT`

Tool to retrieve details of an existing Stripe payout. Use when you need to get information about a specific payout by its ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `payout_id` | string | Yes | The unique identifier for the payout to retrieve. This ID typically starts with 'po_'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve plan

**Slug:** `STRIPE_GET_PLAN`

Tool to retrieve a specific Stripe plan by its unique identifier. Use when you need to view plan details including pricing, billing frequency, and configuration.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `plan_id` | string | Yes | The unique identifier of the plan to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve a price

**Slug:** `STRIPE_GET_PRICES_PRICE`

Retrieves detailed information for a specific Stripe price using its unique ID. Use when you need to fetch price details.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `price` | string | Yes | The unique identifier of the price to retrieve. This ID typically starts with 'price_'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve a product

**Slug:** `STRIPE_GET_PRODUCTS_ID`

Retrieves detailed information for an existing Stripe product using its unique product ID. Use when you need to fetch details about a specific product.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique identifier of the product to retrieve. This ID typically starts with 'prod_'. |
| `expand` | array | No | Specifies which fields in the response should be expanded. Supports nested expansions using dot notation (e.g., 'default_price'). Maximum depth of four levels. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve product feature

**Slug:** `STRIPE_GET_PRODUCTS_PRODUCT_FEATURES_ID`

Retrieves a specific product feature by its ID. Use when you need to get details about a particular feature attached to a product.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique identifier for the product feature to retrieve (e.g., prodft_1ShVbUQvM72TjFrbPe5SHg0L). |
| `product` | string | Yes | The unique identifier for the product (e.g., prod_NWjs8kKbJWmuuc). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Stripe promotion codes

**Slug:** `STRIPE_GET_PROMOTION_CODES`

Retrieves a list of promotion codes from a Stripe account with optional filters for active status, code value, coupon association, and customer restrictions. Supports cursor-based pagination.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `code` | string | No | Only return promotion codes that have this case-insensitive code. |
| `limit` | integer | No | Maximum number of promotion code objects to return (1-100). Default is 10. |
| `active` | boolean | No | Filter promotion codes by active status. If true, returns only active codes; if false, returns only inactive codes. |
| `coupon` | string | No | Only return promotion codes for this coupon ID. |
| `created` | object | No | Filter based on creation timestamp. Supports sub-parameters: 'gt' (greater than), 'gte' (greater than or equal), 'lt' (less than), 'lte' (less than or equal) with Unix timestamp values. |
| `customer` | string | No | Only return promotion codes that are restricted to this customer ID. |
| `ending_before` | string | No | Cursor for pagination - returns objects before this object ID. |
| `starting_after` | string | No | Cursor for pagination - returns objects after this object ID. |
| `customer_account` | string | No | Only return promotion codes that are restricted to this account representing the customer. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get quote details

**Slug:** `STRIPE_GET_QUOTES_QUOTE`

Tool to retrieve a quote by ID. Use when you need to get detailed information about a specific Stripe quote, including line items, pricing, and status.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `quote` | string | Yes | The unique identifier of the quote to retrieve (e.g., qt_1ShRXLQvM72TjFrb5qBWihJc). |
| `expand` | array | No | Specifies which fields in the response should be expanded as full objects. Supports nested expansion using dot notation (e.g., 'customer', 'line_items.data.price'). Maximum expansion depth is 4 levels. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Quote Computed Upfront Line Items

**Slug:** `STRIPE_GET_QUOTES_QUOTE_COMPUTED_UPFRONT_LINE_ITEMS`

Tool to retrieve computed upfront line items for a quote. Use when you need the full paginated list of upfront line items with detailed pricing information including amounts, taxes, and discounts.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of line items to return (range 1-100). Defaults to 10 if not specified. |
| `quote` | string | Yes | The ID of the quote to retrieve computed upfront line items for. |
| `ending_before` | string | No | Cursor for pagination. A line item ID that defines your place in the list. Returns line items listed before this item. |
| `starting_after` | string | No | Cursor for pagination. A line item ID that defines your place in the list. Returns line items listed after this item. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Quote Line Items

**Slug:** `STRIPE_GET_QUOTES_QUOTE_LINE_ITEMS`

Tool to retrieve a paginated list of line items for a quote. Use when you need to get details about the items included in a specific Stripe quote.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. |
| `quote` | string | Yes | The unique identifier of the quote (e.g., qt_1Mr7wVLkdIwHu7ixJYSiPTGq) |
| `ending_before` | string | No | A cursor for use in pagination. ending_before is an object ID that defines your place in the list. |
| `starting_after` | string | No | A cursor for use in pagination. starting_after is an object ID that defines your place in the list. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Radar Value List

**Slug:** `STRIPE_GET_RADAR_VALUE_LIST`

Retrieves a specific Stripe Radar value list by its identifier. Use when you need to fetch detailed information about a value list used in Radar rules.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique identifier of the value list to retrieve (e.g., rsl_1MrQSwLkdIwHu7ixWOGS5c8M). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Radar value list items

**Slug:** `STRIPE_GET_RADAR_VALUE_LIST_ITEMS`

Tool to list all value list items from a Stripe Radar value list. Use when you need to retrieve items from a specific value list for fraud detection rules. Returns items sorted by creation date in descending order with pagination support.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Number of results to return per request. Range: 1-100. Defaults to 10 if not specified. |
| `value` | string | No | Filter to match items with values 'like' this string. Maximum length: 800 characters. |
| `created` | object | No | Filters value list items by creation date using a dictionary with keys like 'gt' (greater than), 'gte' (greater than or equal to), 'lt' (less than), or 'lte' (less than or equal to) and Unix timestamp values (seconds since epoch). |
| `value_list` | string | Yes | The identifier of the parent value list to retrieve items from. Required. |
| `ending_before` | string | No | Pagination cursor for backward navigation. Object ID to end before, used for fetching the previous page of results. |
| `starting_after` | string | No | Pagination cursor for forward navigation. Object ID to start after, used for fetching the next page of results. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve a refund

**Slug:** `STRIPE_GET_REFUNDS_REFUND`

Tool to retrieve details of a specific Stripe refund by ID. Use when you need to get information about an existing refund.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `refund` | string | Yes | The unique identifier for the refund to retrieve. This ID typically starts with 're_'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve a Report Run

**Slug:** `STRIPE_GET_REPORTING_REPORT_RUNS_REPORT_RUN`

Retrieves details of an existing Report Run object. Use when you need to check the status or retrieve results of a report run.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `report_run` | string | Yes | The unique identifier of the report run to retrieve. This ID typically starts with 'frr_'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve a report type

**Slug:** `STRIPE_GET_REPORTING_REPORT_TYPE`

Tool to retrieve details of a specific Stripe report type by ID. Use when you need to get information about a specific reporting report type.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique identifier for the report type to retrieve (e.g., 'balance.summary.1'). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List setup attempts

**Slug:** `STRIPE_GET_SETUP_ATTEMPTS`

Tool to list SetupAttempts associated with a SetupIntent. Use when you need to retrieve all setup attempts for a specific SetupIntent to understand the payment method setup process and any errors that occurred.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. |
| `created` | object | No | Filter by creation date using Unix timestamps. Supported keys: 'gt' (greater than), 'gte' (greater than or equal), 'lt' (less than), 'lte' (less than or equal). |
| `setup_intent` | string | Yes | Filter results to only SetupAttempts created by the specified SetupIntent ID. This parameter is required. |
| `ending_before` | string | No | A cursor for use in pagination. Object ID that defines your place in the list to fetch the previous page. |
| `starting_after` | string | No | A cursor for use in pagination. Object ID that defines your place in the list to fetch the next page. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve setup intent

**Slug:** `STRIPE_GET_SETUP_INTENT`

Retrieves details of a SetupIntent by its ID; `client_secret` is required if a publishable API key is used.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `client_secret` | string | No | Client secret for the SetupIntent. Required if using a publishable key for authentication. |
| `setup_intent_id` | string | Yes | The unique identifier of the SetupIntent to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve Shipping Rate

**Slug:** `STRIPE_GET_SHIPPING_RATE`

Tool to retrieve details of a specific Stripe shipping rate by its unique ID. Use when you need to fetch information about a particular shipping rate.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `shipping_rate_id` | string | Yes | Unique identifier for the shipping rate object, typically starting with 'shr_'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve source

**Slug:** `STRIPE_GET_SOURCES_SOURCE`

Retrieves an existing source object. DEPRECATED: The Stripe Sources API has been deprecated. This action can only retrieve existing sources created before the API deprecation. For new integrations, use the Payment Methods API instead. Use this action when you need to fetch up-to-date information about a specific source that was previously created (e.g., to check its status, view owner information, or access transaction details).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `source_id` | string | Yes | The unique identifier of the source to retrieve. Typically starts with 'src_'. |
| `client_secret` | string | No | The client secret of the source. Required if a publishable key is used to retrieve the source. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve subscription

**Slug:** `STRIPE_GET_SUBSCRIPTION`

Retrieves detailed information for an existing Stripe subscription using its unique ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `subscription_id` | string | Yes | Unique identifier of the Stripe subscription to retrieve, typically starting with 'sub_'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve subscription item

**Slug:** `STRIPE_GET_SUBSCRIPTION_ITEM`

Retrieves detailed information for a specific subscription item using its unique ID. Use when you need to fetch subscription item details, pricing, or billing information.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `subscription_item_id` | string | Yes | The identifier of the subscription item to retrieve, typically starting with 'si_'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve subscription schedule

**Slug:** `STRIPE_GET_SUBSCRIPTION_SCHEDULES_SCHEDULE`

Retrieve a subscription schedule using its unique identifier. Use when you need to view details of an existing schedule including phases, settings, and status.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `expand` | array | No | Specifies which fields to expand into full objects. Supports up to 4 levels of nesting. Expandable fields include: application, customer, subscription, test_clock. |
| `schedule` | string | Yes | The unique identifier for the subscription schedule (e.g., sub_sched_1ShRYjQvM72TjFrbIeqKLj55) |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve Tax Calculation

**Slug:** `STRIPE_GET_TAX_CALCULATION`

Retrieves a Tax Calculation object by its unique ID. Use when you need to access tax calculation details.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Unique identifier for the Tax Calculation object to retrieve (e.g., taxcalc_1OduxkBUZ691iUZ4iWvpMApI). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Tax Calculation Line Items

**Slug:** `STRIPE_GET_TAX_CALCULATIONS_CALCULATION_LINE_ITEMS`

Retrieves line items of a tax calculation as a paginated collection. Use this to see detailed tax information for each item in the calculation, including amounts, tax breakdowns, and tax rates.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. |
| `calculation` | string | Yes | The ID of the tax calculation whose line items you want to retrieve. Typically starts with 'taxcalc_'. |
| `ending_before` | string | No | A cursor for use in pagination. An object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include ending_before=obj_foo in order to fetch the previous page of the list. Maximum 500 characters. |
| `starting_after` | string | No | A cursor for use in pagination. An object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_bar, your subsequent call can include starting_after=obj_bar in order to fetch the next page of the list. Maximum 500 characters. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve tax code

**Slug:** `STRIPE_GET_TAX_CODE`

Retrieves the details of an existing tax code. Use when you need to get information about a specific tax code by its ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Unique identifier for the tax code object to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve tax ID

**Slug:** `STRIPE_GET_TAX_ID`

Retrieves an account or customer tax ID object. Use when you need to get details about a specific tax identification number stored in Stripe.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Unique identifier for the tax ID object to retrieve. Must start with 'txi_' followed by alphanumeric characters. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve a tax rate

**Slug:** `STRIPE_GET_TAX_RATE`

Tool to retrieve the details of an existing tax rate. Use when you need to fetch information about a specific tax rate by its ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tax_rate` | string | Yes | Unique identifier for the tax rate to retrieve. Typically starts with 'txr_'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve tax registration

**Slug:** `STRIPE_GET_TAX_REGISTRATION`

Tool to retrieve a specific tax registration configured for your Stripe account. Use when you need to get details about where and how taxes are collected across different jurisdictions.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Unique identifier for the tax registration, typically starting with 'taxreg_'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Tax Settings

**Slug:** `STRIPE_GET_TAX_SETTINGS`

Retrieves Tax Settings for a merchant. Use when you need to fetch the tax configuration for a Stripe account.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `expand` | array | No | Specifies which fields in the response should be expanded. Supports dot notation for nested expansion (e.g., 'data.customer'). Maximum depth of four levels for expansions. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve Tax Transaction

**Slug:** `STRIPE_GET_TAX_TRANSACTION`

Retrieves a Tax Transaction object by ID. Use when you need to fetch details about a specific tax transaction.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `transaction` | string | Yes | The unique identifier for the tax transaction. Typically starts with 'tax_'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get tax transaction line items

**Slug:** `STRIPE_GET_TAX_TRANSACTIONS_TRANSACTION_LINE_ITEMS`

Retrieves the line items of a committed standalone tax transaction. Use when you need to view detailed line-by-line breakdown of a tax transaction.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of line items to return (1-100, default is 10 if not specified). |
| `expand` | array | No | Specifies which fields in the response should be expanded to show full objects instead of IDs. Examples: 'data.product' to expand product details, 'data.reversal' to expand reversal information. |
| `transaction` | string | Yes | The tax transaction ID to retrieve line items for. |
| `ending_before` | string | No | Cursor for pagination. A line item ID that defines your place in the list; returns items listed before this item. Use to fetch the previous page. |
| `starting_after` | string | No | Cursor for pagination. A line item ID that defines your place in the list; returns items listed after this item. Use to fetch the next page. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve terminal configuration

**Slug:** `STRIPE_GET_TERMINAL_CONFIGURATION`

Tool to retrieve a specific Terminal Configuration object from Stripe. Use when you need to view the detailed settings for a specific terminal configuration by its ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `configuration` | string | Yes | The unique identifier for the terminal configuration to retrieve (e.g., 'tmc_test_61TqpHTmP4zMHAj9T41QvM72TjFrb6To'). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve Terminal Location

**Slug:** `STRIPE_GET_TERMINAL_LOCATION`

Tool to retrieve a Terminal Location object by ID. Use when you need to get details about a specific terminal location for managing card readers.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `location` | string | Yes | The ID of the Terminal Location to retrieve. Typically starts with 'tml_' followed by alphanumeric characters. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve Terminal Reader

**Slug:** `STRIPE_GET_TERMINAL_READER`

Tool to retrieve a Terminal Reader object by ID. Use when you need to get details about a specific reader device for accepting payment details in Stripe Terminal.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `expand` | array | No | Specifies which fields in the response should be expanded. Supports expandable fields like 'location'. Maximum expansion depth is 4 levels. |
| `reader` | string | Yes | The ID of the Terminal Reader to retrieve. Must start with 'tmr_' followed by alphanumeric characters. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve test clock

**Slug:** `STRIPE_GET_TEST_CLOCK`

Tool to retrieve a test clock by ID. Use when testing billing integrations by simulating time advancement in sandbox environments.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `test_clock` | string | Yes | The test clock identifier to retrieve. Typically starts with 'clock_'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve Token

**Slug:** `STRIPE_GET_TOKEN`

Retrieves the token with the given ID. Use when you need to verify token details or check if a token has been used.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `token` | string | Yes | The ID of the desired token. Card tokens start with 'tok_', bank tokens with 'btok_', and CVC update tokens with 'cvctok_'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve transfer reversal

**Slug:** `STRIPE_GET_TRANSFER_REVERSAL`

Retrieves a transfer reversal by its ID and the associated transfer ID. Use when you need to check the status, amount, or details of a specific reversal for a Stripe transfer.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The ID of the reversal to retrieve. This is the reversal object ID that starts with 'trr_'. |
| `expand` | array | No | Specifies which fields in the response should be expanded. Expandable fields include 'balance_transaction', 'destination_payment_refund', 'source_refund', and 'transfer'. |
| `transfer` | string | Yes | The ID of the transfer that was reversed. This is the transfer object ID that starts with 'tr_'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve Upcoming Invoice Line Items

**Slug:** `STRIPE_GET_UPCOMING_INVOICE_LINE_ITEMS`

Tool to retrieve a paginated list of line items for an upcoming invoice preview. Use when you need to see detailed line items before an invoice is finalized.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of line items to return (range: 1-100, default: 10). |
| `coupon` | string | No | Coupon ID to apply (deprecated - use discounts instead). |
| `currency` | string | No | Three-letter ISO currency code for preview (defaults to customer's currency). |
| `customer` | string | No | Customer ID whose upcoming invoice line items to retrieve. Either customer, subscription, or schedule is required. |
| `schedule` | string | No | Schedule ID for upcoming invoice line items. Cannot be used with subscription. |
| `discounts` | array | No | List of discount objects to apply. Each object must contain one of: coupon, discount, or promotion_code. |
| `preview_mode` | string | No | Preview calculation type: 'next' for next invoice or 'recurring' for recurring totals. |
| `subscription` | string | No | Subscription ID for upcoming invoice line items. Cannot be used with schedule. |
| `automatic_tax` | object | No | Settings for automatic tax lookup. Must include 'enabled' boolean. |
| `ending_before` | string | No | Cursor for backward pagination; returns line items before this ID. Mutually exclusive with starting_after. |
| `invoice_items` | array | No | Invoice items to add or update (max 250 items). |
| `starting_after` | string | No | Cursor for forward pagination; returns line items after this ID. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Search Stripe customers

**Slug:** `STRIPE_GET_V1_CUSTOMERS_SEARCH_CUSTOMERS`

Tool to search for Stripe customers using Stripe's Search Query Language. Use when you need to find customers by email, metadata, creation date, or other customer attributes.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | string | No | Pagination cursor for retrieving a specific page. Omit for the first page. Use the next_page value from a previous response for subsequent pages. |
| `limit` | integer | No | Maximum number of results per page. Range: 1-100. Defaults to 10 if not specified. |
| `query` | string | Yes | Search query using Stripe's Search Query Language. REQUIRED FORMAT: queries MUST use field:value or field~value syntax with a supported field prefix. Bare strings without field prefixes are invalid. Searchable fields: 'name' (customer name), 'email' (email address), 'phone' (phone number), 'metadata["key"]' (metadata values), 'created' (Unix timestamp). Operators: ':' (exact match, case insensitive), '~' (substring match, min 3 chars), '>', '<', '>=', '<=' (numeric comparison for created field). Combine clauses with 'AND' or 'OR' (max 10 clauses, cannot mix AND/OR). Use '-' to negate. Quote string values. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve Dispute Details

**Slug:** `STRIPE_GET_V1_DISPUTES_DISPUTES`

Retrieves detailed information for an existing Stripe dispute by ID. Use when you need to get complete dispute details including evidence, status, and payment information.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Unique identifier for the dispute object, typically starting with 'du_'. |
| `expand` | array | No | Specifies which fields in the response should be expanded. Supports dot notation for nested expansions (e.g., 'charge', 'payment_intent.customer'). Maximum nesting depth is 4 levels. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Invoice Payments

**Slug:** `STRIPE_GET_V1_INVOICE_PAYMENTS_OVERVIEW2`

Tool to list invoice payments in Stripe with pagination and filtering options. Use when you need to retrieve payment records associated with invoices.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of objects to return (1-100). Defaults to 10 if not specified. |
| `status` | string | No | Filter by payment status. Possible values: 'paid', 'open', or 'canceled'. |
| `invoice` | string | No | The identifier of the specific invoice whose payments to retrieve. |
| `ending_before` | string | No | Cursor for backward pagination using an object ID from a previous response. |
| `starting_after` | string | No | Cursor for forward pagination using an object ID from a previous response. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List payment method configurations

**Slug:** `STRIPE_GET_V1_PAYMENT_METHOD_CONFIGS_LIST_PAYMENT_METHOD2`

Tool to list all payment method configurations in a Stripe account. Use when you need to retrieve available payment method settings with optional pagination and filtering.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Number of objects to return (1-100). Default: 10. |
| `application` | string | No | Filter results by Connect application identifier. Maximum 100 characters. |
| `ending_before` | string | No | Cursor for backward pagination. Object ID for ending point. |
| `starting_after` | string | No | Cursor for forward pagination. Object ID for starting point. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List payment method domains

**Slug:** `STRIPE_GET_V1_PAYMENT_METHOD_DOMAINS`

Tool to retrieve list of payment method domains registered with Stripe account. Use when you need to list all payment method domain objects with optional filtering by domain name and enabled status.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Limit on number of objects to return. Range: 1-100. Defaults to 10 if unspecified. |
| `enabled` | boolean | No | Filter by domain activation status. Disabled domains won't display payment methods in Elements or Embedded Checkout. |
| `domain_name` | string | No | The domain name that this payment method domain object represents. Used to filter results by specific domain. |
| `ending_before` | string | No | Cursor for pagination. Object ID that defines your place in the list to fetch previous pages. |
| `starting_after` | string | No | Cursor for pagination. Object ID that defines your place in the list to fetch subsequent pages. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List payment methods

**Slug:** `STRIPE_GET_V1_PAYMENT_METHODS_PAYMENT_METHODS2`

Tool to retrieve a list of PaymentMethods with filtering and pagination support. Use when you need to list payment methods, optionally filtering by customer, type, or redisplay settings.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `type` | string | No | Filters results by payment method type (e.g., card, us_bank_account, sepa_debit). Excludes 'custom' type when unfiltered. |
| `limit` | integer | No | A limit on the number of objects to be returned. Limit can range between 1 and 100. Default is 10. |
| `customer` | string | No | The ID of the customer whose PaymentMethods will be retrieved. |
| `ending_before` | string | No | A cursor for reverse pagination, following similar mechanics to starting_after. |
| `starting_after` | string | No | A cursor for pagination. If you receive 100 objects ending with obj_foo, your subsequent call can include starting_after=obj_foo to fetch the next page. |
| `allow_redisplay` | string ("always" | "limited" | "unspecified") | No | Filters by whether payment method can display in checkout flows. Values: 'always', 'limited', 'unspecified'. |
| `customer_account` | string | No | ID for retrieving Account-specific PaymentMethods. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Radar Early Fraud Warnings

**Slug:** `STRIPE_GET_V1_RADAR_EARLY_FRAUD_WARNINGS_OVERVIEW`

Returns a list of early fraud warnings. An early fraud warning indicates that the card issuer has notified Stripe that a charge may be fraudulent. Use when you need to review potentially fraudulent charges to decide whether to refund them proactively.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | A limit on the number of objects to be returned. Limit can range between 1 and 100. Default is 10. |
| `charge` | string | No | Only return early fraud warnings for the charge specified by this charge ID. |
| `created` | object | No | A filter on the list based on the object created field. The value can be a timestamp, or it can be a dictionary with operators: gt, gte, lt, lte for filtering by timestamp boundaries. |
| `ending_before` | string | No | A cursor for use in pagination. This is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_bar, your subsequent call can include ending_before=obj_bar in order to fetch the previous page of the list. |
| `payment_intent` | string | No | Only return early fraud warnings for charges that were created by the PaymentIntent specified by this PaymentIntent ID. |
| `starting_after` | string | No | A cursor for use in pagination. This is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order to fetch the next page of the list. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Radar value lists overview

**Slug:** `STRIPE_GET_V1_RADAR_VALUE_LISTS_OVERVIEW_RADAR_VALUE_LISTS`

Tool to retrieve an overview of Radar value lists. Use when you need to get a list of value lists used in Stripe Radar for fraud prevention.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `alias` | string | No | The alias used to reference the value list in rules. Maximum 100 characters. |
| `limit` | integer | No | A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. |
| `created` | object | No | Filters by creation date. Use a dictionary with keys like 'gte', 'lte', 'gt', 'lt' and Unix timestamp values (e.g., {'gte': 1609459200, 'lte': 1640995200}). |
| `contains` | string | No | A value contained within a value list - returns all value lists containing this value. Maximum 800 characters. |
| `ending_before` | string | No | A cursor for use in pagination. ending_before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_bar, your subsequent call can include ending_before=obj_bar in order to fetch the previous page of the list. |
| `starting_after` | string | No | A cursor for use in pagination. starting_after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order to fetch the next page of the list. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get reporting report types overview

**Slug:** `STRIPE_GET_V1_REPORTING_REPORT_TYPES_OVERVIEW_REPORTING`

Tool to list all available Stripe report types. Use when you need to discover what reporting types are available for generating reports.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Shipping Rates Overview

**Slug:** `STRIPE_GET_V1_SHIPPING_RATES_OVERVIEW2`

Tool to retrieve an overview of shipping rates from Stripe. Use when you need a quick summary of recent shipping rates with default limit of 3.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 3 for overview. |
| `active` | boolean | No | Only return shipping rates that are active or inactive. |
| `currency` | string | No | Only return shipping rates for the given three-letter ISO currency code (e.g., usd), in lowercase. |
| `ending_before` | string | No | A cursor for use in pagination. Returns objects listed before this object ID. |
| `starting_after` | string | No | A cursor for use in pagination. Returns objects listed after this object ID. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List subscription schedules

**Slug:** `STRIPE_GET_V1_SUBSCRIPTION_SCHEDULES_OVERVIEW2`

Retrieves a list of subscription schedules with optional filtering and pagination capabilities. Use to view scheduled subscription changes for customers.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Number of objects to return (1-100, default: 10). |
| `created` | object | No | Filter by creation date interval using operators: gt, gte, lt, lte. Use a dictionary with keys like 'gt', 'gte', 'lt', 'lte' and Unix timestamp values. |
| `customer` | string | No | Filter results to a specific customer ID. |
| `scheduled` | boolean | No | Returns only schedules that have not yet started. |
| `canceled_at` | object | No | Filter by cancellation date interval using operators: gt, gte, lt, lte. Use a dictionary with keys like 'gt', 'gte', 'lt', 'lte' and Unix timestamp values. |
| `released_at` | object | No | Filter by release date interval using operators: gt, gte, lt, lte. Use a dictionary with keys like 'gt', 'gte', 'lt', 'lte' and Unix timestamp values. |
| `completed_at` | object | No | Filter by completion date interval using operators: gt, gte, lt, lte. Use a dictionary with keys like 'gt', 'gte', 'lt', 'lte' and Unix timestamp values. |
| `ending_before` | string | No | Pagination cursor for fetching previous pages. Provide the ID of the subscription schedule that should end the list. |
| `starting_after` | string | No | Pagination cursor for fetching subsequent pages. Provide the ID of the subscription schedule that should start the list. |
| `customer_account` | string | No | Filter results to a specific account. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get tax codes

**Slug:** `STRIPE_GET_V1_TAX_CODES_TAX_CODE2`

Tool to retrieve all tax codes available to add to Products for specific tax calculations. Use when you need to list available Stripe tax codes for product classification.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. |
| `ending_before` | string | No | A cursor for use in pagination. ending_before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_bar, your subsequent call can include ending_before=obj_bar in order to fetch the previous page of the list. |
| `starting_after` | string | No | A cursor for use in pagination. starting_after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order to fetch the next page of the list. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List tax IDs

**Slug:** `STRIPE_GET_V1_TAX_IDS_OVERVIEW2`

Tool to retrieve a list of tax IDs with pagination support. Use when you need to list tax IDs for accounts or customers in Stripe.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. |
| `owner_type` | string | No | Type of owner. One of: account, application, customer, or self. Required if filtering by owner. |
| `ending_before` | string | No | A cursor for use in pagination. ending_before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_bar, your subsequent call can include ending_before=obj_bar in order to fetch the previous page of the list. |
| `owner_account` | string | No | The ID of the connected account (required if owner_type=account). |
| `owner_customer` | string | No | The ID of the customer (required if owner_type=customer). |
| `starting_after` | string | No | A cursor for use in pagination. starting_after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order to fetch the next page of the list. |
| `owner_customer_account` | string | No | The ID of the account representing the customer (alternative to owner_customer). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get tax rates

**Slug:** `STRIPE_GET_V1_TAX_RATES_TAX_RATE2`

Tool to retrieve all tax rates with pagination support. Use when you need to list Stripe tax rates with optional filters for active status, inclusive/exclusive type, and creation date.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. |
| `active` | boolean | No | Filters results to only active or inactive (archived) tax rates. When true, returns only active tax rates. When false, returns only inactive tax rates. |
| `created` | object | No | A filter on the list based on the object created field. The value can be a dictionary with keys like 'gt', 'gte', 'lt', 'lte' with Unix timestamp values. |
| `inclusive` | boolean | No | Filters results for tax rates that are inclusive (tax included in price) or non-inclusive (tax added to price). When true, returns only inclusive tax rates. When false, returns only non-inclusive tax rates. |
| `ending_before` | string | No | A cursor for use in pagination. ending_before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_bar, your subsequent call can include ending_before=obj_bar in order to fetch the previous page of the list. |
| `starting_after` | string | No | A cursor for use in pagination. starting_after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order to fetch the next page of the list. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve V2 Core Event

**Slug:** `STRIPE_GET_V2_CORE_EVENTS_RETRIEVE_AN_EVENT`

Retrieves detailed information about a specific event from Stripe V2 Core Events API. Use when you need to fetch event details including metadata and related objects.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Unique identifier for the event object to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List subscription item period summaries

**Slug:** `STRIPE_LIST_ALL_SUBSCRIPTION_ITEM_PERIOD_SUMMARIES`

Tool to list all subscription item period summaries. Use when you need to retrieve usage information for a specific subscription item over billing periods. Returns summaries sorted in reverse-chronological order (newest first), with the first item representing the most current usage period.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. |
| `ending_before` | string | No | A cursor for use in pagination. ending_before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_bar, your subsequent call can include ending_before=obj_bar in order to fetch the previous page of the list. |
| `starting_after` | string | No | A cursor for use in pagination. starting_after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order to fetch the next page of the list. |
| `subscription_item` | string | Yes | The ID of the subscription item whose usage record summaries to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Apple Pay domains

**Slug:** `STRIPE_LIST_APPLE_PAY_DOMAINS`

Retrieves a list of Apple Pay domains registered with Stripe. Use when you need to fetch all registered Apple Pay domains with pagination support.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | A limit on the number of objects to be returned. Limit can range between 1 and 100. Defaults to 10 if not specified. |
| `ending_before` | string | No | A cursor for use in pagination. ending_before is an object ID that defines your place in the list. For instance, if you make a list request and receive 10 objects, starting with apd_bar, your subsequent call can include ending_before=apd_bar in order to fetch the previous page of the list. |
| `starting_after` | string | No | A cursor for use in pagination. starting_after is an object ID that defines your place in the list. For instance, if you make a list request and receive 10 objects, ending with apd_foo, your subsequent call can include starting_after=apd_foo in order to fetch the next page of the list. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Application Fees

**Slug:** `STRIPE_LIST_APPLICATION_FEES`

Returns a list of application fees you've previously collected, sorted by creation date descending (newest first). Use when you need to retrieve application fees with optional filtering by charge and pagination support.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. |
| `charge` | string | No | Only return application fees for the charge specified by this charge ID. |
| `created` | object | No | A filter on the list based on the object created field. The value can be a dictionary with keys like 'gt', 'gte', 'lt', 'lte' and Unix timestamp values. |
| `ending_before` | string | No | A cursor for use in pagination. ending_before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_bar, your subsequent call can include ending_before=obj_bar in order to fetch the previous page of the list. |
| `starting_after` | string | No | A cursor for use in pagination. starting_after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order to fetch the next page of the list. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List apps secrets

**Slug:** `STRIPE_LIST_APPS_SECRETS`

Tool to list all secrets stored on the given scope. Use when you need to retrieve secrets from the Secret Store API for Stripe Apps.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Number of objects to return (1-100). Defaults to 10 if not specified. |
| `scope_type` | string ("account" | "user") | Yes | The scope type - either 'account' (accessible to all UI contexts within the account) or 'user' (per-user secrets). Required parameter. |
| `scope_user` | string | No | User ID - required when scope_type is 'user', omitted for 'account' type. The user whose secrets to retrieve. |
| `ending_before` | string | No | A cursor for pagination - an object ID that defines your place in the list for backward navigation. Used to fetch the previous page of results. |
| `starting_after` | string | No | A cursor for pagination - an object ID that defines your place in the list for forward navigation. Used to fetch the next page of results. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Balance Transactions

**Slug:** `STRIPE_LIST_BALANCE_TRANSACTIONS`

Lists all balance transactions for the connected Stripe account. Use this action when you need to retrieve the transaction history of funds moving through your Stripe account. Balance transactions are created for every type of transaction that enters or leaves your Stripe account balance. Supports filtering by date range, currency, type, payout, or source, as well as cursor-based pagination.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `type` | string | No | Only returns transactions of the given type. One of: adjustment, advance, advance_funding, anticipation_repayment, application_fee, application_fee_refund, charge, climate_order_purchase, climate_order_refund, connect_collection_transfer, contribution, inbound_transfer, inbound_transfer_reversal, issuing_authorization_hold, issuing_authorization_release, issuing_dispute, issuing_transaction, obligation_outbound, obligation_reversal_inbound, payment, payment_failure_refund, payment_network_reserve_hold, payment_network_reserve_release, payment_refund, payment_reversal, payment_unreconciled, payout, payout_cancel, payout_failure, payout_minimum_balance_hold, payout_minimum_balance_release, refund, refund_failure, reserve_transaction, reserved_funds, reserve_hold, reserve_release, stripe_fee, stripe_fx_fee, stripe_balance_payment_debit, stripe_balance_payment_debit_reversal, tax_fee, topup, topup_reversal, transfer, transfer_cancel, transfer_failure, transfer_refund, or fee_credit_funding. |
| `limit` | integer | No | A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. |
| `expand` | array | No | Specifies which fields in the response should be expanded. |
| `payout` | string | No | For automatic Stripe payouts only, only returns transactions that were paid out on the specified payout ID. |
| `source` | string | No | Only returns transactions associated with the given object. |
| `created` | object | No | Only return transactions that were created during the given date interval. Use Unix timestamps as keys: 'gt', 'gte', 'lt', 'lte'. |
| `currency` | string | No | Only return transactions in a certain currency. Three-letter ISO 4217 currency code, in lowercase. |
| `ending_before` | string | No | A cursor for pagination. Returns only transactions created before this object ID. |
| `starting_after` | string | No | A cursor for pagination. Returns only transactions created after this object ID. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List billing alerts

**Slug:** `STRIPE_LIST_BILLING_ALERTS`

Tool to retrieve a paginated list of billing alerts. Use when you need to view billing alerts that notify when usage thresholds on meters are crossed.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Controls result count; ranges from 1-100 with a default of 10. |
| `meter` | string | No | Filters alerts associated with a particular meter identifier. |
| `alert_type` | string | No | Restricts results to a specific alert category. Currently supports 'usage_threshold' for alerts that trigger when usage on a meter exceeds a threshold. |
| `ending_before` | string | No | Pagination cursor for retrieving prior pages using an object ID from the current response. |
| `starting_after` | string | No | Pagination cursor for fetching subsequent pages using an object ID from the previous response. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List credit balance transactions

**Slug:** `STRIPE_LIST_BILLING_CREDIT_BALANCE_TRANSACTIONS`

Tool to retrieve a paginated list of credit balance transactions with optional filtering. Use when you need to view credit and debit transactions for customer credit grants or track billing credit activity.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Number of objects to return per page (range: 1-100, default: 10). |
| `customer` | string | No | Filter transactions to only include those belonging to a particular customer ID. |
| `credit_grant` | string | No | Filter transactions to only include those for a specific credit grant ID. |
| `ending_before` | string | No | Cursor for backward pagination - object ID to end before. Use for fetching the previous page. |
| `starting_after` | string | No | Cursor for forward pagination - object ID to start after. Use for fetching the next page. |
| `customer_account` | string | No | Filter transactions to only include those for a specific customer account ID. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Charge Refunds

**Slug:** `STRIPE_LIST_CHARGE_REFUNDS`

Lists all refunds for a specific charge in Stripe. Use this action when you need to retrieve all refunds associated with a particular charge ID. This is useful for tracking refund history for a specific payment, monitoring chargebacks, and auditing financial transactions. The refunds are returned in descending order by creation time.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. |
| `charge` | string | Yes | The ID of the charge to list refunds for. This ID typically starts with 'ch_'. |
| `expand` | array | No | Specifies which fields in the response should be expanded. |
| `ending_before` | string | No | A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list. |
| `starting_after` | string | No | A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Charges

**Slug:** `STRIPE_LIST_CHARGES`

Retrieves a list of Stripe charges with filtering and pagination; use valid cursor IDs from previous responses for pagination, and note that charges are typically returned in reverse chronological order.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of charges to return (default: 10). |
| `created` | object | No | Filters charges by creation date using a dictionary with keys like 'gt', 'gte', 'lt', 'lte' and Unix timestamp values. |
| `customer` | string | No | Filters charges by the specified customer ID. |
| `ending_before` | string | No | Cursor for pagination. A charge ID that defines your place in the list; returns charges listed before this charge. Use a charge ID from a previous response to fetch the previous page. |
| `payment_intent` | string | No | Filters charges by the specified PaymentIntent ID. |
| `starting_after` | string | No | Cursor for pagination. A charge ID that defines your place in the list; returns charges listed after this charge. Use a charge ID from a previous response to fetch the next page. |
| `transfer_group` | string | No | Filters charges by the specified transfer group ID. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Checkout Sessions

**Slug:** `STRIPE_LIST_CHECKOUT_SESSIONS`

Tool to retrieve a list of Stripe Checkout Sessions with pagination support. Use when you need to list checkout sessions, optionally filtering by customer, status, payment intent, or other criteria.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Number of results to return per page (range 1-100). Defaults to 10 if not specified. |
| `status` | string ("open" | "complete" | "expired") | No | Filter by session status. |
| `created` | object | No | Filter by creation date range using gt (greater than), gte (greater than or equal), lt (less than), lte (less than or equal) for timestamp bounds. |
| `customer` | string | No | Restrict results to a specific Customer ID. |
| `payment_link` | string | No | Filter by Payment Link ID that created the session. |
| `subscription` | string | No | Filter by associated subscription ID. |
| `ending_before` | string | No | Pagination cursor for retrieving the previous page of results. |
| `payment_intent` | string | No | Filter by associated PaymentIntent ID. |
| `starting_after` | string | No | Pagination cursor for retrieving the next page of results. |
| `customer_account` | string | No | Restrict results to a specific Account ID. |
| `customer_details_email` | string | No | Filter by customer email address (maximum 800 characters). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Climate Orders

**Slug:** `STRIPE_LIST_CLIMATE_ORDERS`

Tool to list all Climate order objects. Use when you need to retrieve carbon removal orders sorted by creation date with most recent first.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. |
| `ending_before` | string | No | An object ID that defines your place in the list for backward pagination. Use the ID of the first order from a previous request to fetch the previous page. |
| `starting_after` | string | No | An object ID that defines your place in the list for forward pagination. Use the ID of the last order from a previous request to fetch the next page. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List climate products

**Slug:** `STRIPE_LIST_CLIMATE_PRODUCTS`

Tool to retrieve a list of available Stripe Climate products. Use when you need to see carbon removal offerings with pricing and supplier information.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. |
| `ending_before` | string | No | A cursor for use in pagination. This is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects starting with clprd_abc, your subsequent call can include ending_before=clprd_abc in order to fetch the previous page of the list. |
| `starting_after` | string | No | A cursor for use in pagination. This is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects ending with clprd_xyz, your subsequent call can include starting_after=clprd_xyz in order to fetch the next page of the list. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List climate suppliers

**Slug:** `STRIPE_LIST_CLIMATE_SUPPLIERS`

Tool to retrieve a list of available Stripe Climate supplier objects for carbon removal. Use when you need to see carbon removal providers including biomass carbon removal, direct air capture, and enhanced weathering.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. |
| `ending_before` | string | No | A cursor for use in pagination. This is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects starting with clsp_abc, your subsequent call can include ending_before=clsp_abc in order to fetch the previous page of the list. |
| `starting_after` | string | No | A cursor for use in pagination. This is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects ending with clsp_xyz, your subsequent call can include starting_after=clsp_xyz in order to fetch the next page of the list. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List country specs

**Slug:** `STRIPE_LIST_COUNTRY_SPECS`

Retrieves a list of country specifications available in the Stripe API. Use when you need details about supported currencies, payment methods, and verification requirements for specific countries.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of country spec objects to return (1-100, default is 10 if not specified). |
| `ending_before` | string | No | Cursor for pagination. A country spec ID that defines your place in the list; returns country specs listed before this one. Use a country spec ID from a previous response to fetch the previous page. |
| `starting_after` | string | No | Cursor for pagination. A country spec ID that defines your place in the list; returns country specs listed after this one. Use a country spec ID from a previous response to fetch the next page. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Stripe coupons

**Slug:** `STRIPE_LIST_COUPONS`

Retrieves a list of discount coupons from a Stripe account, supporting pagination via `limit`, `starting_after`, and `ending_before`.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of coupon objects to return. Stripe's default (usually 10) applies if omitted. |
| `ending_before` | string | No | A coupon ID for pagination. Returns items created before this object. |
| `starting_after` | string | No | A coupon ID for pagination. Returns items created after this object. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Credit Notes

**Slug:** `STRIPE_LIST_CREDIT_NOTES`

Lists Stripe credit notes with optional filtering by customer, invoice, or customer account, and pagination support.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of credit note objects to return (1-100). Defaults to 10 if not specified. |
| `created` | object | No | Filter credit notes by their creation date. Use keys like 'gt' (greater than), 'gte' (greater than or equal to), 'lt' (less than), 'lte' (less than or equal to) with Unix timestamp values to specify a range. |
| `invoice` | string | No | Filters credit notes to those for the specified invoice ID. |
| `customer` | string | No | Filters credit notes to those for the specified customer ID. |
| `ending_before` | string | No | Cursor for backward pagination; returns only credit notes created before this object ID. |
| `starting_after` | string | No | Cursor for forward pagination; returns only credit notes created after this object ID. |
| `customer_account` | string | No | Filters credit notes to those for the specified customer account ID. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List customers

**Slug:** `STRIPE_LIST_CUSTOMERS`

Retrieves a list of Stripe customers, with options to filter by email, creation date, or test clock, and support for pagination.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `email` | string | No | Filters customers by a case-sensitive email address. |
| `limit` | integer | No | Maximum number of customer objects to return (range 1-100). Defaults to 10 if unspecified. |
| `created` | object | No | Filters by creation date. Use a dictionary with keys like 'gte', 'lte', 'gt', 'lt' and Unix timestamp values (e.g., {'gte': 1609459200, 'lte': 1640995200}). |
| `test_clock` | string | No | Filters customers by the specified test clock ID. If omitted, returns only live mode customers. |
| `ending_before` | string | No | Pagination cursor; retrieves objects created before the specified object ID to fetch the previous page. |
| `starting_after` | string | No | Pagination cursor; retrieves objects created after the specified object ID to fetch the next page. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List customer subscriptions

**Slug:** `STRIPE_LIST_CUSTOMER_SUBSCRIPTIONS`

Tool to list all active subscriptions for a customer in Stripe. Use when you need to retrieve all subscriptions associated with a specific customer ID. Supports pagination via starting_after and ending_before cursors.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. |
| `expand` | array | No | Specifies which fields in the response should be expanded. For example, expand=['latest_invoice'] will include the full invoice object in the response. |
| `customer` | string | Yes | The ID of the customer whose subscriptions will be retrieved. Must start with 'cus_' followed by alphanumeric characters. |
| `ending_before` | string | No | A cursor for use in pagination. ending_before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_bar, your subsequent call can include ending_before=obj_bar in order to fetch the previous page of the list. |
| `starting_after` | string | No | A cursor for use in pagination. starting_after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order to fetch the next page of the list. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Disputes

**Slug:** `STRIPE_LIST_DISPUTES`

Tool to list all disputes from a Stripe account. Use when you need to retrieve disputes with optional filtering by charge or payment intent.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Number of objects to return (range: 1-100, default: 10). |
| `charge` | string | No | Filter results to disputes linked to a specific charge ID. |
| `created` | object | No | Filter disputes by creation date range using timestamps with keys 'gt', 'gte', 'lt', 'lte'. |
| `ending_before` | string | No | A cursor for pagination; returns only disputes created before this object ID. |
| `payment_intent` | string | No | Filter results to disputes associated with a specific PaymentIntent ID. |
| `starting_after` | string | No | A cursor for pagination; returns only disputes created after this object ID. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List entitlements features

**Slug:** `STRIPE_LIST_ENTITLEMENTS_FEATURES`

Retrieves a paginated list of entitlements features from Stripe. Use when you need to list monetizable abilities or functionalities in your system that can be assigned to products.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | A limit on the number of feature objects to be returned. The value must be an integer between 1 and 100. If not specified, the default is 10. |
| `archived` | boolean | No | Narrows results to features matching the specified archive status. Set to True to return only archived features, or False for non-archived ones. |
| `lookup_key` | string | No | Filters results to features with the matching lookup_key value. Maximum 80 characters. |
| `ending_before` | string | No | A cursor for use in pagination. Defines your place in the list. Use the ID of the first feature from the previous page to fetch the previous page. |
| `starting_after` | string | No | A cursor for use in pagination. Defines your place in the list. Use the ID of the last feature from the previous page to fetch the next page. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List file links

**Slug:** `STRIPE_LIST_FILE_LINKS`

Tool to retrieve a list of Stripe file links. Use when you need to list file links with optional filters for creation date, expiration status, and associated file.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `file` | string | No | Restrict results to links for a specific file ID. |
| `limit` | integer | No | Maximum number of file link objects to return (range 1-100). Defaults to 10 if unspecified. |
| `created` | object | No | Filters file links by creation date using a dictionary with keys like 'gt', 'gte', 'lt', 'lte' and Unix timestamp values (e.g., {'gte': 1609459200, 'lte': 1640995200}). |
| `expired` | boolean | No | Filter links by expiration status. If true, returns only expired links; if false, returns only non-expired links. By default, returns all links. |
| `ending_before` | string | No | Cursor for pagination; retrieves objects created before the specified object ID to fetch the previous page. |
| `starting_after` | string | No | Cursor for pagination; retrieves objects created after the specified object ID to fetch the next page. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List files

**Slug:** `STRIPE_LIST_FILES`

Tool to retrieve a list of files that your account has access to. Use when you need to list files uploaded to Stripe, with optional filtering by purpose or creation date.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. |
| `created` | object | No | A filter on the list based on the object created field. The value can be a dictionary with keys like 'gt', 'gte', 'lt', 'lte' and Unix timestamp values. Use 'gte' for greater than or equal, 'lte' for less than or equal, 'gt' for greater than, and 'lt' for less than. |
| `purpose` | string | No | Filter queries to only return files with the given purpose. Possible values include: account_requirement, additional_verification, business_icon, business_logo, customer_signature, dispute_evidence, finance_report_run, financial_account_statement, identity_document, identity_document_downloadable, issuing_regulatory_reporting, pci_document, platform_terms_of_service, selfie, sigma_scheduled_query, tax_document_user_upload, terminal_android_apk, terminal_reader_splashscreen. If no purpose is provided, returns unfiltered files. |
| `ending_before` | string | No | A cursor for use in pagination. This is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_bar, your subsequent call can include ending_before=obj_bar in order to fetch the previous page of the list. |
| `starting_after` | string | No | A cursor for use in pagination. This is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order to fetch the next page of the list. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Financial Connections Accounts

**Slug:** `STRIPE_LIST_FINANCIAL_CONNECTIONS_ACCOUNTS`

Tool to list Financial Connections Account objects representing external financial accounts. Use when you need to retrieve accounts linked through Financial Connections.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Number of results to return. Range: 1-100, default: 10. |
| `session` | string | No | Filter to accounts collected in a specific Financial Connections session. Mutually exclusive with account_holder parameters. |
| `ending_before` | string | No | A cursor for reverse pagination; object ID marking the list position. |
| `account_holder` | object | No | Filter to specify which account holder's accounts to retrieve. |
| `starting_after` | string | No | A cursor for forward pagination; object ID marking the list position. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List forwarding requests

**Slug:** `STRIPE_LIST_FORWARDING_REQUESTS`

Lists ForwardingRequest objects from Stripe's Vault and Forward API. ForwardingRequests are records of requests Stripe made to third-party endpoints on your behalf, with payment card details securely inserted. Use this to retrieve and audit forwarding requests, with optional filtering by creation timestamp and pagination support. Note: This API requires special account authorization. Contact Stripe support if you need access.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | A limit on the number of objects to be returned. Range: 1-100. Default: 10. |
| `created` | object | No | Filters results by creation timestamp using comparison operators. Supported keys: 'gt' (greater than), 'gte' (greater than or equal), 'lt' (less than), 'lte' (less than or equal). Values are Unix timestamps. |
| `ending_before` | string | No | A pagination cursor to fetch the previous page of the list. Value must be a ForwardingRequest ID. |
| `starting_after` | string | No | A pagination cursor to fetch the next page of the list. Value must be a ForwardingRequest ID. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List FX quotes

**Slug:** `STRIPE_LIST_FX_QUOTES`

Retrieves a list of FX quotes that have been issued, with the most recent appearing first. Use for locking exchange rates for payments or transfers.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. |
| `ending_before` | string | No | A cursor for use in pagination that defines your place in the list for fetching prior pages. Use an FX quote ID from a previous response. |
| `starting_after` | string | No | A cursor for use in pagination that defines your place in the list for fetching subsequent pages. Use an FX quote ID from a previous response. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Invoice Items

**Slug:** `STRIPE_LIST_INVOICEITEMS`

Retrieves a paginated list of Stripe invoice items. Use to filter by customer, invoice, creation date, or attachment status with cursor-based pagination.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of invoice items to return (1-100). Defaults to 10 if not specified. |
| `created` | object | No | Filter invoice items by creation date. Use keys like 'gt' (greater than), 'gte' (greater than or equal to), 'lt' (less than), 'lte' (less than or equal to) with Unix timestamp values to specify a range. |
| `invoice` | string | No | Filter by invoice ID. Only return invoice items belonging to the specified invoice. |
| `pending` | boolean | No | Filter by attachment status. Set to true to return only unattached invoice items, false to return only attached items, or omit to return all items. |
| `customer` | string | No | Filter by customer ID. Only return invoice items for the specified customer. |
| `ending_before` | string | No | Cursor for backward pagination. An invoice item ID that defines where to end fetching the previous page. |
| `starting_after` | string | No | Cursor for forward pagination. An invoice item ID that defines where to start fetching the next page. |
| `customer_account` | string | No | Filter by customer account ID. Only return invoice items for the specified customer account. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Invoice Payments

**Slug:** `STRIPE_LIST_INVOICE_PAYMENTS`

Tool to list all payments for invoices in Stripe. Use when you need to retrieve payment information associated with invoices, including pagination and filtering by invoice ID, status, or creation date.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Number of objects to return (1-100). Defaults to 10 if not specified. |
| `status` | string | No | Filter by payment status. Possible values: 'paid', 'open', or 'canceled'. |
| `created` | object | No | Filter by creation timestamp. Use keys 'gt' (greater than), 'gte' (greater than or equal), 'lt' (less than), 'lte' (less than or equal) with Unix timestamp values. |
| `invoice` | string | No | The invoice identifier whose payments should be returned. If omitted, returns all invoice payments. |
| `ending_before` | string | No | Cursor for pagination; fetch results before this invoice payment ID. Use an invoice payment ID from a previous response to fetch the previous page. |
| `starting_after` | string | No | Cursor for pagination; fetch results after this invoice payment ID. Use an invoice payment ID from a previous response to fetch the next page. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Invoice Rendering Templates

**Slug:** `STRIPE_LIST_INVOICE_RENDERING_TEMPLATES`

Tool to list all invoice rendering templates ordered by creation date. Use when you need to retrieve available invoice rendering templates.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. |
| `ending_before` | string | No | A cursor for use in pagination. ending_before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_bar, your subsequent call can include ending_before=obj_bar in order to fetch the previous page of the list. |
| `starting_after` | string | No | A cursor for use in pagination. starting_after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order to fetch the next page of the list. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Invoices

**Slug:** `STRIPE_LIST_INVOICES`

Retrieves a list of Stripe invoices, filterable by various criteria and paginatable using invoice ID cursors obtained from previous responses.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of invoice objects to return (1-100). Defaults to 10 if not specified. |
| `status` | string | No | Filter invoices by status: 'draft', 'open', 'paid', 'uncollectible', or 'void'; if omitted, returns invoices with any status. |
| `created` | object | No | Filter invoices by their creation date. Use keys like 'gt' (greater than), 'gte' (greater than or equal to), 'lt' (less than), 'lte' (less than or equal to) with Unix timestamp values to specify a range. |
| `customer` | string | No | ID of the customer whose invoices to retrieve; if omitted, invoices for all customers may be returned. |
| `subscription` | string | No | ID of the subscription whose invoices to retrieve; if omitted, invoices for all subscriptions may be returned. |
| `ending_before` | string | No | Cursor for backward pagination; an invoice ID from a previous response that defines the end of the current page, used to fetch the preceding page. |
| `starting_after` | string | No | Cursor for forward pagination; an invoice ID from a previous response that defines the end of the current page, used to fetch the subsequent page. |
| `collection_method` | string | No | Filter by collection method: 'charge_automatically' (Stripe attempts auto-charge) or 'send_invoice' (Stripe emails invoice); if omitted, returns invoices with any collection method. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List meter event summaries

**Slug:** `STRIPE_LIST_METER_EVENT_SUMMARIES`

Tool to retrieve billing meter event summaries for a customer within a time range. Use when you need aggregated meter event data for billing analysis.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Unique identifier for the billing meter object. |
| `limit` | integer | No | Number of objects returned (1-100, default: 10). |
| `customer` | string | Yes | The customer for which to fetch event summaries. |
| `end_time` | integer | Yes | The timestamp from when to stop aggregating meter events (exclusive). Must align with minute boundaries. Unix timestamp in seconds. |
| `start_time` | integer | Yes | The timestamp from when to start aggregating meter events (inclusive). Must align with minute boundaries. Unix timestamp in seconds. |
| `ending_before` | string | No | Cursor for backward pagination using object ID. |
| `starting_after` | string | No | Cursor for forward pagination using object ID. |
| `value_grouping_window` | string | No | Specifies aggregation granularity: 'hour' (aligned to hour boundaries) or 'day' (aligned to UTC boundaries). If omitted, returns single summary for entire range. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Payment Attempt Records

**Slug:** `STRIPE_LIST_PAYMENT_ATTEMPT_RECORDS`

Tool to list payment attempt records for a specified payment record. Use when you need to retrieve all attempts made to process a specific payment.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Limit on the number of payment attempt records to be returned. Stripe API defaults to 10 if unspecified. |
| `ending_before` | string | No | A cursor for pagination; returns only payment attempt records created before this object ID. |
| `payment_record` | string | Yes | The ID of the Payment Record to retrieve payment attempt records for. |
| `starting_after` | string | No | A cursor for pagination; returns only payment attempt records created after this object ID. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List payment intents

**Slug:** `STRIPE_LIST_PAYMENT_INTENTS`

Tool to list PaymentIntents from Stripe. Use when you need to retrieve a list of payment intents with optional filtering by customer, creation date, or pagination parameters.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. |
| `created` | object | No | Filter by creation date using Unix timestamps. Supported keys: 'gt' (greater than), 'gte' (greater than or equal), 'lt' (less than), 'lte' (less than or equal). |
| `customer` | string | No | Only return PaymentIntents for the customer specified by this customer ID. |
| `ending_before` | string | No | A cursor for use in pagination. Object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include ending_before=obj_foo in order to fetch the previous page of the list. |
| `starting_after` | string | No | A cursor for use in pagination. Object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_bar, your subsequent call can include starting_after=obj_bar in order to fetch the next page of the list. |
| `customer_account` | string | No | Only return PaymentIntents for the account representing the customer specified by this account ID. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List payment links

**Slug:** `STRIPE_LIST_PAYMENT_LINKS`

Retrieves a list of payment links from Stripe, sorted by creation date in descending order by default.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of items to return (1-100, inclusive). Stripe API defaults to 10 if omitted. |
| `active` | boolean | No | Filter by active status. `true` for active, `false` for inactive. |
| `ending_before` | string | No | Object ID for backward pagination; retrieves items created before this ID. |
| `starting_after` | string | No | Object ID for forward pagination; retrieves items created after this ID. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Payouts

**Slug:** `STRIPE_LIST_PAYOUTS`

Lists Stripe payouts sent to external accounts or received from Stripe, sorted by creation date descending (newest first), with optional filtering by arrival date, creation date, destination, and status.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Limit on the number of payouts to be returned. Stripe API defaults to 10 if unspecified. Range: 1-100. |
| `status` | string | No | Filters payouts by status. Possible values: 'pending', 'paid', 'failed', or 'canceled'. |
| `created` | object | No | Filters payouts by creation date range. Use a dictionary with keys like 'gt', 'gte', 'lt', 'lte' and Unix timestamp values. |
| `destination` | string | No | Filters payouts by the external account ID (bank account or debit card) to which funds are being transferred. |
| `arrival_date` | object | No | Filters payouts by expected arrival date range. Use a dictionary with keys like 'gt', 'gte', 'lt', 'lte' and Unix timestamp values. |
| `ending_before` | string | No | A cursor for pagination; returns only payouts created before this object ID. |
| `starting_after` | string | No | A cursor for pagination; returns only payouts created after this object ID. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List plans

**Slug:** `STRIPE_LIST_PLANS`

Tool to list all billing plans from Stripe account. Use when you need to retrieve plans for subscription management or display available pricing options.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of plan objects to return (range 1-100). Defaults to 10 if not specified. |
| `active` | boolean | No | Filter plans by their active status. Set to True for active plans, False for inactive plans. |
| `created` | object | No | Filter plans by creation timestamp. Accepts sub-parameters: created.gt (exclusive minimum), created.gte (inclusive minimum), created.lt (exclusive maximum), created.lte (inclusive maximum). Provide Unix timestamp values (e.g., {'gte': 1609459200, 'lte': 1640995200}). |
| `product` | string | No | Restrict results to plans associated with a specific product ID. |
| `ending_before` | string | No | Pagination cursor for fetching the previous page. Returns objects listed before this plan ID. |
| `starting_after` | string | No | Pagination cursor for fetching the next page. Returns objects listed after this plan ID. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List prices

**Slug:** `STRIPE_LIST_PRICES`

Tool to list Stripe prices. Use when you need to retrieve and filter price objects before processing write operations.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `type` | string ("one_time" | "recurring") | No | Filter by price type: one_time or recurring. |
| `limit` | integer | No | Limit number of prices returned (1-100). |
| `active` | boolean | No | Filter prices based on their active status. True returns active prices only. |
| `expand` | array | No | Fields to expand in each price object. |
| `created` | object | No | Filter by creation timestamp using gt, gte, lt, or lte. |
| `product` | string | No | Filter prices for a specific product ID (e.g., 'prod_123'). |
| `currency` | string | No | Filter by three-letter ISO currency code (e.g., 'usd'). |
| `recurring` | object | No | Filter by recurring fields: interval, meter, or usage_type. |
| `lookup_keys` | array | No | List of lookup keys to filter prices (max 10). |
| `ending_before` | string | No | Cursor for pagination to fetch previous page by price ID. |
| `starting_after` | string | No | Cursor for pagination to fetch next page by price ID. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List products

**Slug:** `STRIPE_LIST_PRODUCTS`

Retrieves a list of Stripe products, with optional filtering and pagination; `starting_after`/`ending_before` cursors must be valid product IDs from a previous response.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ids` | array | No | A list of product IDs to retrieve. If provided, only products with these specific IDs will be returned. |
| `url` | string | No | Filter products by a specific URL. Only products with this exact URL will be returned. |
| `limit` | integer | No | A limit on the number of product objects to be returned. The value must be an integer between 1 and 100, inclusive. If not specified, the default is 10. |
| `active` | boolean | No | Filter products based on their active status. Set to `True` to return only active products, or `False` for inactive ones. |
| `created` | object | No | Filters products by their creation date range. Provide a dictionary with keys like 'gt' (greater than), 'gte' (greater than or equal to), 'lt' (less than), or 'lte' (less than or equal to) and Unix timestamp values (seconds since epoch). For instance, `{'gte': 1609459200, 'lte': 1640995200}` filters for products created from January 1, 2021, to January 1, 2022. |
| `shippable` | boolean | No | Filter products based on whether they are shippable. Set to `True` to return only shippable products, or `False` for non-shippable ones. |
| `ending_before` | string | No | A cursor for use in pagination to fetch the previous page of results. `ending_before` is an object ID that defines your place in the list. For instance, if a list request returns objects ending with `prod_XYZ`, your subsequent call can include `ending_before='prod_XYZ'` to fetch the previous page. |
| `starting_after` | string | No | A cursor for use in pagination to fetch the next page of results. `starting_after` is an object ID that defines your place in the list. For instance, if a list request returns objects and the last object's ID is `prod_ABC`, your subsequent call can include `starting_after='prod_ABC'` to fetch the next page. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List product features

**Slug:** `STRIPE_LIST_PRODUCTS_PRODUCT_FEATURES`

Retrieves a list of features attached to a product. Returns a paginated list of product_feature objects representing attachments between features and products.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | A limit on the number of objects to be returned. Limit can range between 1 and 100, defaults to 10 if not specified. |
| `product` | string | Yes | The ID of the product whose features you want to retrieve. |
| `ending_before` | string | No | A cursor for use in pagination. An object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_bar, your subsequent call can include ending_before=obj_bar in order to fetch the previous page of the list. |
| `starting_after` | string | No | A cursor for use in pagination. An object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order to fetch the next page of the list. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Stripe promotion codes

**Slug:** `STRIPE_LIST_PROMOTION_CODES`

Tool to retrieve a list of promotion codes from Stripe. Use when you need to view, filter, or paginate through promotion codes with optional filters for active status, code, coupon, customer, or creation date.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `code` | string | No | Only return promotion codes that have this case-insensitive code. |
| `limit` | integer | No | Number of results to return (1-100, default: 10). |
| `active` | boolean | No | Filter by active/inactive status. A promotion code is only active if the coupon is also valid. |
| `coupon` | string | No | Filter by associated coupon ID. |
| `created` | object | No | Filter by creation timestamp. Supports sub-parameters: gt, gte, lt, lte (integer Unix timestamps). |
| `customer` | string | No | Restrict results to specific customer ID. |
| `ending_before` | string | No | Pagination cursor - ID of object to end before for backward navigation. |
| `starting_after` | string | No | Pagination cursor - ID of object to start after for forward navigation. |
| `customer_account` | string | No | Restrict results to customer account. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Quotes

**Slug:** `STRIPE_LIST_QUOTES`

Retrieves a list of Stripe quotes with pagination support. Use to fetch quotes by customer, status, or creation date.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of quote objects to return (1-100). Defaults to 10 if not specified. |
| `status` | string | No | Filter quotes by status: 'draft', 'open', 'accepted', or 'canceled'; if omitted, returns quotes with any status. |
| `customer` | string | No | ID of the customer whose quotes to retrieve; if omitted, quotes for all customers may be returned. |
| `test_clock` | string | No | Provides a list of quotes associated with the specified test clock. |
| `ending_before` | string | No | Cursor for backward pagination; a quote ID from a previous response that defines the end of the current page, used to fetch the preceding page. |
| `starting_after` | string | No | Cursor for forward pagination; a quote ID from a previous response that defines the end of the current page, used to fetch the subsequent page. |
| `customer_account` | string | No | ID of the account representing the customer whose quotes to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Radar Early Fraud Warnings

**Slug:** `STRIPE_LIST_RADAR_EARLY_FRAUD_WARNINGS`

Tool to list all early fraud warnings from Stripe Radar. Use when you need to retrieve fraud warnings for charges, optionally filtered by charge ID or payment intent ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. |
| `charge` | string | No | Only return early fraud warnings for the charge specified by this charge ID. |
| `created` | object | No | A filter on the list based on the object created field. The value can be a dictionary with keys 'gt', 'gte', 'lt', 'lte' and Unix timestamp values. |
| `ending_before` | string | No | A cursor for use in pagination. This is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_bar, your subsequent call can include ending_before=obj_bar in order to fetch the previous page of the list. |
| `payment_intent` | string | No | Only return early fraud warnings for charges that were created by the PaymentIntent specified by this PaymentIntent ID. |
| `starting_after` | string | No | A cursor for use in pagination. This is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order to fetch the next page of the list. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Radar Reviews

**Slug:** `STRIPE_LIST_RADAR_REVIEWS`

Returns a list of Radar Review objects that have open set to true, sorted in descending order by creation date. Use when you need to retrieve reviews that require action with optional filtering and pagination support.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. |
| `created` | object | No | A filter on the list based on the object created field. The value can be a dictionary with keys like 'gt', 'gte', 'lt', 'lte' and Unix timestamp values. |
| `ending_before` | string | No | A cursor for use in pagination. ending_before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_bar, your subsequent call can include ending_before=obj_bar in order to fetch the previous page of the list. |
| `starting_after` | string | No | A cursor for use in pagination. starting_after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order to fetch the next page of the list. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Refunds

**Slug:** `STRIPE_LIST_REFUNDS`

Lists Stripe refunds, sorted by creation date descending (newest first), with optional filtering by charge or payment_intent and pagination support.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Limit on the number of refunds to be returned. Stripe API defaults to 10 if unspecified. |
| `charge` | string | No | Filters refunds to those for the specified Charge ID. |
| `ending_before` | string | No | A cursor for pagination; returns only refunds created before this object ID. |
| `payment_intent` | string | No | Filters refunds to those for the specified PaymentIntent ID. |
| `starting_after` | string | No | A cursor for pagination; returns only refunds created after this object ID. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Report Runs

**Slug:** `STRIPE_LIST_REPORTING_REPORT_RUNS`

Lists Stripe Report Runs, sorted by creation date descending (newest first). Use when you need to retrieve reporting data or check the status of report generation tasks.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Limit on the number of report runs to be returned. Must be between 1 and 100. Defaults to 10 if not specified. |
| `created` | object | No | Filters Report Runs by creation date using a dictionary with keys like 'gt', 'gte', 'lt', 'lte' and Unix timestamp values. |
| `ending_before` | string | No | Cursor for pagination. A report run ID that defines your place in the list; returns report runs listed before this report run. Use a report run ID from a previous response to fetch the previous page. |
| `starting_after` | string | No | Cursor for pagination. A report run ID that defines your place in the list; returns report runs listed after this report run. Use a report run ID from a previous response to fetch the next page. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List open reviews

**Slug:** `STRIPE_LIST_REVIEWS`

Retrieves a list of open Stripe reviews with pagination support. Use when you need to access reviews that require action, sorted by creation date with most recent first.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of review objects to return (range 1-100). Defaults to 10 if unspecified. |
| `created` | object | No | Filters by creation date. Use a dictionary with keys like 'gt', 'gte', 'lt', 'lte' and Unix timestamp values (e.g., {'gte': 1609459200, 'lte': 1640995200}). |
| `ending_before` | string | No | Pagination cursor; retrieves objects created before the specified review ID to fetch the previous page. |
| `starting_after` | string | No | Pagination cursor; retrieves objects created after the specified review ID to fetch the next page. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List SetupAttempts

**Slug:** `STRIPE_LIST_SETUP_ATTEMPTS`

Tool to list SetupAttempts associated with a SetupIntent. Use when you need to retrieve attempts to confirm a SetupIntent and attach a payment method to a customer.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Controls the number of results returned. Range: 1-100. Default: 10. |
| `created` | object | No | Filters results based on creation timestamp. Supports sub-parameters: 'gt' (greater than), 'gte' (greater than or equal), 'lt' (less than), 'lte' (less than or equal) for Unix timestamp comparisons. |
| `setup_intent` | string | Yes | Filters results to only include SetupAttempts created by the specified SetupIntent ID. This parameter is required. |
| `ending_before` | string | No | Pagination cursor for backward pagination. Object ID defining the position for fetching previous pages. |
| `starting_after` | string | No | Pagination cursor for forward pagination. Object ID defining the starting position for fetching subsequent pages. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List setup intents

**Slug:** `STRIPE_LIST_SETUP_INTENTS`

Tool to list SetupIntents from Stripe. Use when you need to retrieve a list of setup intents with optional filtering by customer, payment method, or pagination parameters.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. |
| `created` | object | No | Filter by creation date using Unix timestamps. Supported keys: 'gt' (greater than), 'gte' (greater than or equal), 'lt' (less than), 'lte' (less than or equal). |
| `customer` | string | No | Only return SetupIntents for the customer specified by this customer ID. |
| `ending_before` | string | No | A cursor for use in pagination. This is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_bar, your subsequent call can include ending_before=obj_bar in order to fetch the previous page of the list. |
| `attach_to_self` | boolean | No | If present, the SetupIntent's payment method will be attached to the in-context Stripe Account. |
| `payment_method` | string | No | Only return SetupIntents that associate with the specified payment method. |
| `starting_after` | string | No | A cursor for use in pagination. This is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order to fetch the next page of the list. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Sigma scheduled query runs

**Slug:** `STRIPE_LIST_SIGMA_SCHEDULED_QUERY_RUNS`

Tool to list all Sigma scheduled query runs. Use when you need to retrieve query runs from Stripe Sigma to access query results or check run status.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. |
| `expand` | array | No | Specifies which fields in the response should be expanded. Accepts an array of strings. |
| `ending_before` | string | No | A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list. |
| `starting_after` | string | No | A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List subscription items

**Slug:** `STRIPE_LIST_SUBSCRIPTION_ITEMS`

List all subscription items for a given subscription. Subscription items represent the individual products/prices that make up a subscription. Use this to retrieve items associated with a specific Stripe subscription, including pricing, quantities, and billing details for each item.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. |
| `subscription` | string | Yes | The ID of the subscription whose items will be retrieved. |
| `ending_before` | string | No | A cursor for use in pagination. ending_before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_bar, your subsequent call can include ending_before=obj_bar in order to fetch the previous page of the list. |
| `starting_after` | string | No | A cursor for use in pagination. starting_after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order to fetch the next page of the list. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List subscriptions

**Slug:** `STRIPE_LIST_SUBSCRIPTIONS`

Retrieves a list of Stripe subscriptions, optionally filtered by various criteria such as customer, price, status, collection method, and date ranges, with support for pagination.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Limit on the number of subscription objects to return (1-100). Default is 10. |
| `price` | string | No | ID of the recurring price to filter subscriptions by. |
| `status` | string | No | Filter subscriptions by status (e.g., 'active', 'all', 'canceled'). Defaults to non-canceled statuses if unspecified. |
| `created` | object | No | Filter subscriptions by creation date using comparison keys (e.g., 'gte', 'lt') and Unix timestamp values. |
| `customer` | string | No | ID of the customer whose subscriptions will be retrieved. |
| `test_clock` | string | No | Filter subscriptions by a specific test clock ID (only applicable in test mode). |
| `automatic_tax` | object | No | Filter subscriptions by automatic tax settings, e.g., {'enabled': True}. |
| `ending_before` | string | No | Cursor for paginating backwards; provide the ID of the subscription that should end the list. |
| `starting_after` | string | No | Cursor for paginating forwards; provide the ID of the subscription that should start the list. |
| `collection_method` | string | No | Filter subscriptions by collection method: 'charge_automatically' or 'send_invoice'. |
| `current_period_end` | object | No | Filter subscriptions by the end date of the current billing period, using comparison keys (e.g., 'gt', 'gte') and Unix timestamp values. |
| `current_period_start` | object | No | Filter subscriptions by the start date of the current billing period, using comparison keys (e.g., 'lt', 'lte') and Unix timestamp values. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List tax codes

**Slug:** `STRIPE_LIST_TAX_CODES`

Retrieves a paginated list of globally available, predefined Stripe tax codes used for classifying products and services in Stripe Tax.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of objects to return. API defaults to 10 if this parameter is omitted. |
| `ending_before` | string | No | Object ID cursor to fetch the previous page of results. |
| `starting_after` | string | No | Object ID cursor to fetch the next page of results. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List tax rates

**Slug:** `STRIPE_LIST_TAX_RATES`

Retrieves a list of tax rates, which are returned sorted by creation date in descending order.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | A limit on the number of tax rates to be returned. The value must be between 1 and 100, inclusive. The default is 10. |
| `active` | boolean | No | Filter tax rates by their active status. Set to `true` for active tax rates and `false` for inactive (archived) tax rates. |
| `created` | object | No | Filter tax rates by their creation date. Accepts a dictionary with keys like `gt` (greater than), `gte` (greater than or equal to), `lt` (less than), or `lte` (less than or equal to), and Unix timestamp values. |
| `inclusive` | boolean | No | Filter tax rates by whether they are inclusive. Set to `true` for inclusive tax rates and `false` for exclusive tax rates. |
| `ending_before` | string | No | A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `ending_before=obj_foo` in order to fetch the previous page of objects. |
| `starting_after` | string | No | A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `starting_after=obj_bar` in order to fetch the next page of objects. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List tax registrations

**Slug:** `STRIPE_LIST_TAX_REGISTRATIONS`

Retrieves a paginated list of tax registrations. Use when you need to view where a business is registered to collect tax on payments within various regions.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Number of objects to return per request. Range: 1-100. Defaults to 10 if not specified. |
| `status` | string ("active" | "expired" | "scheduled" | "all") | No | Filter registrations by their current status. Defaults to 'all' if not specified. |
| `ending_before` | string | No | Cursor for backward pagination. Object ID to fetch results before this object, used to retrieve previous pages. |
| `starting_after` | string | No | Cursor for forward pagination. Object ID to fetch results after this object, used to retrieve subsequent pages. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List terminal configurations

**Slug:** `STRIPE_LIST_TERMINAL_CONFIGURATIONS`

Tool to retrieve a list of Terminal Configuration objects from Stripe. Use when you need to view all terminal configurations with optional filtering and pagination.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. |
| `ending_before` | string | No | A cursor for use in pagination. ending_before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_bar, your subsequent call can include ending_before=obj_bar in order to fetch the previous page of the list. |
| `starting_after` | string | No | A cursor for use in pagination. starting_after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order to fetch the next page of the list. |
| `is_account_default` | boolean | No | If present, only return the account default or non-default configurations. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List terminal locations

**Slug:** `STRIPE_LIST_TERMINAL_LOCATIONS`

Retrieves a list of Stripe terminal locations with pagination support. Use when you need to view all terminal locations for managing physical card readers.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. |
| `ending_before` | string | No | A cursor for use in pagination. ending_before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_bar, your subsequent call can include ending_before=obj_bar in order to fetch the previous page of the list. |
| `starting_after` | string | No | A cursor for use in pagination. starting_after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order to fetch the next page of the list. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List terminal readers

**Slug:** `STRIPE_LIST_TERMINAL_READERS`

Tool to list all Stripe Terminal Readers with optional filtering. Use when you need to retrieve readers by device type, location, serial number, or status.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. |
| `status` | string ("offline" | "online") | No | A status filter to filter readers to only offline or online readers. |
| `location` | string | No | A location ID to filter the response list to only readers at the specific location. |
| `device_type` | string ("bbpos_chipper2x" | "bbpos_wisepad3" | "bbpos_wisepos_e" | "mobile_phone_reader" | "simulated_stripe_s700" | "simulated_wisepos_e" | "stripe_m2" | "stripe_s700") | No | Filters readers by device type. Use to retrieve only readers of a specific device model. |
| `ending_before` | string | No | A cursor for use in pagination. Defines your place in the list for backward navigation. Use the ID of the first reader from the previous page. |
| `serial_number` | string | No | Filters readers by serial number. Use to retrieve a specific reader by its serial number. |
| `starting_after` | string | No | A cursor for use in pagination. Defines your place in the list for forward navigation. Use the ID of the last reader from the previous page. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List test clocks

**Slug:** `STRIPE_LIST_TEST_CLOCKS`

Retrieves a paginated list of test clocks. Use when you need to view all test clocks for testing time-dependent functionality.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. |
| `ending_before` | string | No | A cursor for use in pagination. ending_before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_bar, your subsequent call can include ending_before=obj_bar in order to fetch the previous page of the list. |
| `starting_after` | string | No | A cursor for use in pagination. starting_after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order to fetch the next page of the list. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Top-ups

**Slug:** `STRIPE_LIST_TOPUPS`

Tool to retrieve a list of existing top-ups from Stripe. Use when you need to view top-ups with optional filtering by amount, status, or creation date, and pagination support.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of top-ups to return (1-100, default is 10 if not specified). |
| `amount` | object | No | Filters top-ups by transfer amount using a dictionary with comparison operators like 'gt', 'gte', 'lt', 'lte' and integer values in smallest currency unit (e.g., cents). |
| `status` | string | No | Only return top-ups that have the given status. One of: canceled, failed, pending, or succeeded. |
| `created` | object | No | Filters top-ups by creation date using a dictionary with keys like 'gt', 'gte', 'lt', 'lte' and Unix timestamp values. |
| `ending_before` | string | No | Cursor for pagination. A top-up ID that defines your place in the list; returns top-ups listed before this top-up. Use a top-up ID from a previous response to fetch the previous page. |
| `starting_after` | string | No | Cursor for pagination. A top-up ID that defines your place in the list; returns top-ups listed after this top-up. Use a top-up ID from a previous response to fetch the next page. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List transfers

**Slug:** `STRIPE_LIST_TRANSFERS`

List all transfers sent to connected accounts. Transfers are returned in reverse chronological order. Use when you need to retrieve transfer history or monitor funds sent to connected accounts.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. |
| `created` | object | No | Filter transfers by their creation date range. Provide a dictionary with keys like 'gt' (greater than), 'gte' (greater than or equal to), 'lt' (less than), or 'lte' (less than or equal to) and Unix timestamp values (seconds since epoch). For instance, `{'gte': 1609459200, 'lte': 1640995200}` filters for transfers created from January 1, 2021, to January 1, 2022. |
| `destination` | string | No | Only return transfers for the destination specified by this account ID. |
| `ending_before` | string | No | A cursor for use in pagination to fetch the previous page of results. `ending_before` is an object ID that defines your place in the list. For instance, if a list request returns objects starting with `tr_XYZ`, your subsequent call can include `ending_before='tr_XYZ'` to fetch the previous page. |
| `starting_after` | string | No | A cursor for use in pagination to fetch the next page of results. `starting_after` is an object ID that defines your place in the list. For instance, if a list request returns objects and the last object's ID is `tr_ABC`, your subsequent call can include `starting_after='tr_ABC'` to fetch the next page. |
| `transfer_group` | string | No | Only return transfers with the specified transfer group. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List V2 Core Event Destinations

**Slug:** `STRIPE_LIST_V2_CORE_EVENT_DESTINATIONS`

Retrieves a list of event destinations from Stripe V2 Core Events API. Use when you need to list all event destinations including webhooks and EventBridge integrations.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | string | No | The requested page. Use the page token from a previous response to fetch the next page. |
| `limit` | integer | No | The page size. Number of event destinations to return per page. |
| `include` | array | No | Additional fields to include in the response. Currently supports 'webhook_endpoint.url'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List v2 core events

**Slug:** `STRIPE_LIST_V2_CORE_EVENTS`

Tool to list v2 core events from Stripe. Use when you need to retrieve a list of events with thin payloads containing references to changed objects. These events are unversioned and require fetching the related object for full details.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | string | No | The requested page. Use the next_page or previous_page URL from a previous response to paginate through results. |
| `limit` | integer | No | The page size. Maximum number of events to return per page. |
| `types` | array | No | An array of up to 20 strings containing specific event names to filter by. Only events matching these types will be returned. |
| `created` | object | No | Timestamp range filter for event creation time. |
| `object_id` | string | No | Primary object ID used to retrieve related events. Filter events to only those related to this specific object. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Mark invoice as uncollectible

**Slug:** `STRIPE_MARK_INVOICE_UNCOLLECTIBLE`

Tool to mark a Stripe invoice as uncollectible for bad debt accounting purposes. Use when you need to write off an unpaid invoice that is unlikely to be collected.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `invoice` | string | Yes | The ID of the invoice to mark as uncollectible. Must start with 'in_' followed by alphanumeric characters. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Migrate subscription to flexible billing

**Slug:** `STRIPE_MIGRATE_SUBSCRIPTION`

Migrate a subscription from classic to flexible billing mode. Use when upgrading billing mode to enable flexible proration and invoice calculation. Requires Stripe API version 2025-06-30.basil or later.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `billing_mode` | object | Yes | Controls how prorations and invoices are calculated and orchestrated. Type must be 'flexible' to migrate from classic billing mode. |
| `subscription` | string | Yes | The ID of the subscription to migrate from classic to flexible billing mode. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Pay an invoice

**Slug:** `STRIPE_PAY_INVOICE`

Tool to pay an invoice manually outside the normal collection schedule. Use when you need to manually trigger payment on an invoice or mark it as paid externally using paid_out_of_band parameter.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `source` | string | No | Payment source ID belonging to the associated customer. |
| `forgive` | boolean | No | When true, charges available amount up to invoice total and forgives the difference if insufficient funds exist. Defaults to false. |
| `invoice` | string | Yes | The invoice ID to pay. |
| `mandate` | string | No | Mandate ID corresponding to the payment method used. |
| `off_session` | boolean | No | Indicates whether customer is present during payment. Defaults to true. |
| `payment_method` | string | No | PaymentMethod ID belonging to the associated customer. |
| `paid_out_of_band` | boolean | No | Marks invoice as paid externally without charging. Defaults to false. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Void billing credit grant

**Slug:** `STRIPE_POST_BILLING_CREDIT_GRANTS_VOID_CREDIT_GRANT`

Voids a billing credit grant, preventing it from being applied to future invoices. This operation is irreversible and marks the credit grant with a voided_at timestamp.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Unique identifier for the credit grant object to be voided. Typically starts with 'credgr_'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Charge

**Slug:** `STRIPE_POST_CHARGES_CHARGE`

Updates a Stripe charge with the specified parameters; unspecified fields remain unchanged. Use when you need to modify charge details like customer association, description, fraud details, metadata, receipt email, shipping information, or transfer group.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `charge` | string | Yes | The ID of the charge to update. |
| `customer` | string | No | ID of existing customer to associate with charge. Can only be set if no customer is currently associated. |
| `metadata` | object | No | Custom key-value pairs for storing additional structured information. |
| `shipping` | object | No | Shipping information to help prevent fraud on physical goods. |
| `description` | string | No | Arbitrary string attached to the charge, displayed in web interface and included in automatic email receipts. |
| `fraud_details` | object | No | Key-value pairs indicating charge riskiness. |
| `receipt_email` | string | No | Email address where receipt will be sent; updating triggers new email delivery. |
| `transfer_group` | string | No | String identifying transaction as part of a group. Can only be set once. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update customer subscription

**Slug:** `STRIPE_POST_CUSTOMERS_CUSTOMER_SUBS_SUB_EXPOSED_ID`

Tool to update a customer's subscription. Use when modifying subscription items, billing cycle, payment methods, or metadata for an existing subscription.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `items` | array | No | List of subscription item updates (max 20). |
| `customer` | string | Yes | Unique identifier of the customer. |
| `metadata` | object | No | Key-value pairs for custom information. Replaces existing metadata. |
| `cancel_at` | string | No | Unix timestamp or enum value when subscription should cancel. |
| `discounts` | array | No | List of discounts for the subscription. |
| `trial_end` | string | No | Unix timestamp for trial end or 'now' to end immediately. |
| `description` | string | No | Subscription description for display or tracking. |
| `automatic_tax` | object | No | Stripe Tax settings for automatic tax calculation. |
| `payment_behavior` | string | No | Payment handling for invoices: 'allow_incomplete', 'error_if_incomplete', or 'pending_if_incomplete'. |
| `collection_method` | string | No | How invoices are paid: 'charge_automatically' or 'send_invoice'. |
| `default_tax_rates` | array | No | List of default tax rate IDs. |
| `proration_behavior` | string | No | How to handle prorations: 'create_prorations', 'none', or 'always_invoice'. |
| `billing_cycle_anchor` | string | No | Unix timestamp or 'now' to anchor billing cycle and renewal. |
| `cancel_at_period_end` | boolean | No | If true, schedules cancellation at period end; if false, undoes scheduled cancellation. |
| `default_payment_method` | string | No | ID of default payment method for the subscription. |
| `subscription_exposed_id` | string | Yes | Unique identifier of the subscription to update. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Verify customer bank account

**Slug:** `STRIPE_POST_CUSTOMERS_SOURCES_VERIFY_THE_BANK_ACCOUNT`

Verifies a bank account for a customer using microdeposit amounts. Use when you need to confirm ownership of a bank account by providing the amounts of two microdeposits sent to the account.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `amounts` | array | No | Two positive integers, in cents, equal to the values of the microdeposits sent to the bank account. Used to verify ownership of the bank account. Each value should be between 1 and 99 cents. |
| `customer_id` | string | Yes | The unique identifier for the customer. Must start with 'cus_' followed by alphanumeric characters. |
| `bank_account_id` | string | Yes | The unique identifier for the bank account to verify. Must start with 'ba_' followed by alphanumeric characters. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update file link

**Slug:** `STRIPE_POST_FILE_LINKS_LINK`

Tool to update an existing file link in Stripe. Use when you need to modify the expiration time or metadata of a file link. Note: Expired links cannot be updated.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `link` | string | Yes | The ID of the file link to update. |
| `metadata` | object | No | Set of key-value pairs for storing additional information about the file link. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to metadata. |
| `expires_at` | string | No | A future timestamp after which the link will no longer be usable, or the string 'now' to expire the link immediately. If null, the link never expires. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Void an invoice

**Slug:** `STRIPE_POST_INVOICES_INVOICE_VOID`

Voids a finalized invoice and maintains a papertrail. Use when you need to void a finalized invoice while preserving audit history. Only finalized invoices can be voided.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `invoice` | string | Yes | The identifier of the invoice to void. Must be a finalized invoice that hasn't been paid or marked as uncollectible. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Report Payment Record

**Slug:** `STRIPE_POST_PAYMENT_RECORDS_REPORT_PAYMENT`

Tool to report a payment record in terminal state or for initialization. Use when you need to report payments that occurred on- or off-Stripe to create a unified payment history.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `failed` | object | No | Failure information. Include this if the payment failed. |
| `outcome` | string | No | Payment outcome status. Use 'failed' or 'guaranteed'. |
| `metadata` | object | No | Set of key-value pairs for storing additional structured information. |
| `guaranteed` | object | No | Guarantee information. Include this if the payment was guaranteed. |
| `description` | string | No | Arbitrary description of the payment record. |
| `initiated_at` | integer | Yes | Timestamp when the payment was initiated (seconds since Unix epoch). |
| `amount_requested` | object | Yes | The requested payment amount with currency and value. |
| `customer_details` | object | No | Optional customer information associated with the payment. |
| `shipping_details` | object | No | Shipping information for the payment. |
| `customer_presence` | string | No | Indicates customer presence during transaction. Use 'on_session' if customer is present, 'off_session' if not. |
| `processor_details` | object | Yes | Details about the payment processor. |
| `payment_method_details` | object | Yes | Details about the payment method used. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update setup intent

**Slug:** `STRIPE_POST_SETUP_INTENTS_INTENT`

Updates a SetupIntent object to modify configuration parameters and metadata. Use when you need to update an existing SetupIntent before completion.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `intent` | string | Yes | The ID of the SetupIntent to update. |
| `customer` | string | No | Customer ID to associate with this SetupIntent; payment method will attach to Customer on successful setup. |
| `metadata` | object | No | Key-value pairs for structured data storage; individual keys can be unset by posting an empty value, all keys can be unset by posting an empty value to metadata. |
| `description` | string | No | Arbitrary string for display purposes. |
| `attach_to_self` | boolean | No | If set, attaches the payment method to the Stripe Account for money movement flows like transfers; cannot be true when setting up for a Customer. |
| `payment_method` | string | No | ID of existing PaymentMethod, Card, or Source to attach; pass empty string to unset. |
| `flow_directions` | array | No | Indicates money movement direction: 'inbound' or 'outbound'. |
| `customer_account` | string | No | Account ID to associate; payment method attaches to Account on successful setup. |
| `payment_method_types` | array | No | List of allowed payment method types. |
| `payment_method_configuration` | string | No | ID of payment method configuration (max 100 characters). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update subscription item

**Slug:** `STRIPE_POST_SUBSCRIPTION_ITEMS_ITEM`

Tool to update a subscription item's plan, quantity, billing thresholds, discounts, or metadata. Use when you need to modify an existing subscription item. Changes may trigger prorations.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `item` | string | Yes | The unique identifier of the subscription item to update. |
| `price` | string | No | ID of the price object. Either price or price_data is required if changing the price. |
| `metadata` | object | No | Set of key-value pairs for storing additional structured information about the subscription item. |
| `quantity` | integer | No | Quantity of the subscription item. |
| `discounts` | array | No | List of discounts to apply to this subscription item. Replaces existing discounts. |
| `tax_rates` | array | No | List of tax rate IDs to override the subscription's default tax rates for this item. |
| `price_data` | object | No | Inline price object generation for the subscription item. |
| `off_session` | boolean | No | Indicates if the payment is being made off-session. Defaults to false. |
| `proration_date` | integer | No | Unix timestamp to calculate prorations as if the update occurred at this time. |
| `payment_behavior` | string | No | Payment behavior when payment collection fails. One of: allow_incomplete, default_incomplete, error_if_incomplete, pending_if_incomplete. |
| `billing_thresholds` | object | No | Usage-based billing thresholds for the subscription item. |
| `proration_behavior` | string | No | How to handle prorations during billing changes. One of: create_prorations (default), always_invoice, none. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update subscription

**Slug:** `STRIPE_POST_SUBSCRIPTIONS_SUBSCRIPTION_EXPOSED_ID`

Tool to update an existing Stripe subscription with specified parameters. Use when you need to modify subscription items, billing settings, payment methods, or metadata for an active subscription.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `items` | array | No | Subscription items to update (max 20). |
| `metadata` | object | No | Key-value pairs for additional information. Replaces existing metadata. |
| `cancel_at` | string | No | Unix timestamp when subscription cancels, or empty string to clear. |
| `discounts` | array | No | Discounts to apply to subscription. |
| `trial_end` | string | No | Unix timestamp or 'now' to end trial. |
| `description` | string | No | Subscription description (max 500 characters). |
| `off_session` | boolean | No | Indicate off-session payment. |
| `on_behalf_of` | string | No | Connected account ID to charge on behalf of. |
| `automatic_tax` | object | No | Automatic tax configuration. |
| `transfer_data` | object | No | Transfer data configuration. |
| `days_until_due` | integer | No | Days until invoice is due for send_invoice method. |
| `default_source` | string | No | ID of default payment source. |
| `proration_date` | integer | No | Unix timestamp for proration calculation. |
| `trial_settings` | object | No | Trial settings configuration. |
| `trial_from_plan` | boolean | No | Apply plan's trial_period_days. |
| `invoice_settings` | object | No | Invoice settings configuration. |
| `pause_collection` | object | No | Configuration for pausing payment collection. |
| `payment_behavior` | string | No | Payment behavior. One of: allow_incomplete, default_incomplete, pending_if_incomplete, error_if_incomplete. |
| `payment_settings` | object | No | Payment settings configuration. |
| `add_invoice_items` | array | No | Items to add to the next invoice (max 20). |
| `collection_method` | string | No | Payment collection method. One of: charge_automatically, send_invoice. |
| `default_tax_rates` | array | No | Tax rate IDs to apply by default. |
| `billing_thresholds` | object | No | Billing threshold configuration. |
| `proration_behavior` | string | No | Proration behavior. One of: always_invoice, create_prorations, none. |
| `billing_cycle_anchor` | string | No | Unix timestamp or 'now' or 'unchanged' to set billing cycle anchor. |
| `cancel_at_period_end` | boolean | No | Cancel at current period end. |
| `cancellation_details` | object | No | Details about subscription cancellation. |
| `default_payment_method` | string | No | ID of default payment method. |
| `application_fee_percent` | number | No | Application fee percentage (0-100). |
| `subscription_exposed_id` | string | Yes | ID of the subscription to update. |
| `pending_invoice_item_interval` | object | No | Interval for pending invoice items. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Terminal Configuration

**Slug:** `STRIPE_POST_TERMINAL_CONFIGURATIONS_CONFIGURATION`

Tool to update a Stripe Terminal Configuration. Use when you need to modify terminal reader settings including device-specific configurations, offline transaction capabilities, security settings, reboot windows, WiFi credentials, or tipping configurations. Changes can take up to 10 minutes to reflect on target readers.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | Configuration identifier/name. Maximum 100 characters. |
| `wifi` | object | No | WiFi network credentials for terminal readers. |
| `offline` | object | No | Offline transaction settings. |
| `tipping` | object | No | Tipping configuration by currency code (e.g., 'usd', 'eur'). Supports: AED, AUD, BGN, CAD, CHF, CZK, DKK, EUR, GBP, GIP, HKD, HUF, JPY, MXN, MYR, NOK, NZD, PLN, RON, SEK, SGD, USD. |
| `stripe_s700` | object | No | Device-specific splash screen settings. |
| `configuration` | string | Yes | The ID of the terminal configuration to update. |
| `reboot_window` | object | No | Customized reboot time window for terminal readers. |
| `verifone_p400` | object | No | Device-specific splash screen settings. |
| `bbpos_wisepad3` | object | No | Device-specific splash screen settings. |
| `bbpos_wisepos_e` | object | No | Device-specific splash screen settings. |
| `reader_security` | object | No | Security configuration for terminal readers. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Process payment on terminal reader

**Slug:** `STRIPE_POST_TERMINAL_READERS_READER_PROCESS_PAYMENT_INTENT`

Initiates a payment flow on a Stripe Terminal Reader to process a PaymentIntent. Use when you need to hand off a PaymentIntent to a physical card reader for customer payment. The reader must be online and not currently processing another action, and the PaymentIntent must be in requires_capture or requires_payment_method state. The response returns immediately with action status 'in_progress'; poll the Reader object or use webhooks to determine completion.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `reader` | string | Yes | The unique identifier of the Reader device that will process the payment. |
| `payment_intent` | string | Yes | The ID of the PaymentIntent to process on the reader. |
| `process_config` | object | No | Transaction configuration overrides. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Set Reader Display

**Slug:** `STRIPE_POST_TERMINAL_READERS_READER_SET_READER_DISPLAY`

Configures a Stripe terminal reader to display cart information on screen. Use when you need to show customers their purchase details on a physical terminal device during checkout. Supported on Verifone P400, BBPOS WisePOS E, and Stripe Reader S700.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `cart` | object | Yes | Cart object containing the line items, total, currency, and optional tax to display on the reader. |
| `type` | string | Yes | The type of information to display on the reader. Currently only 'cart' is supported. |
| `reader` | string | Yes | The ID of the terminal reader to update. Typically starts with 'tmr_'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Set Terminal Reader Display

**Slug:** `STRIPE_POST_TERMINAL_READERS_SET_READER_DISPLAY`

Tool to configure a terminal reader's display to show cart details. Use when you need to display line items, amounts, and currency information on a Stripe Terminal reader screen.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `cart` | object | Yes | Cart object containing the cart's total, tax, currency, and line items. |
| `type` | string | Yes | Type of information to display. Currently only 'cart' is supported. |
| `reader_id` | string | Yes | The ID of the terminal reader. Must start with 'tmr_' followed by alphanumeric characters. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Account Capability

**Slug:** `STRIPE_POST_V1_ACCOUNTS_CAPABILITIES_CAPABILITIES`

Updates an existing account capability for a Stripe connected account. Use when you need to request a new capability or remove a non-permanent capability. There may be a delay before the requested capability becomes active, and the response includes any activation requirements.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `account` | string | Yes | The unique identifier of the Stripe account for which to update the capability. Typically starts with 'acct_'. |
| `requested` | boolean | No | Set to true to request a new capability for the account; pass false to remove non-permanent capabilities. There can be a delay before the requested capability becomes active. |
| `capability` | string | Yes | The specific capability name to update (e.g., card_payments, transfers, giropay_payments, us_bank_account_ach_payments). |
| `experimental` | boolean | No | When true, assigns the experimental onboarding policy to the capability. Use with caution as this may affect the capability activation process. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update balance settings overview

**Slug:** `STRIPE_POST_V1_BALANCE_SETTINGS_OVERVIEW`

Tool to update balance settings for a Stripe account. Use when customizing payout schedules, settlement timing, or negative balance handling for a connected account.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `payments` | object | No | Payment-related settings. |
| `stripe_account` | string | No | The connected account ID for which to update balance settings. If not provided, updates settings for the authenticated account. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Billing Portal Configuration

**Slug:** `STRIPE_POST_V1_BILLING_PORTAL_CONFIGS_OVERVIEW_BILLING`

Tool to update an existing billing portal configuration in Stripe. Use when you need to modify portal settings like business profile, features, or default return URL.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | A descriptive name for the configuration (maximum 256 characters). |
| `active` | boolean | No | Whether the configuration is active and can be used. |
| `features` | object | No | Configuration for features available in the portal. |
| `metadata` | object | No | Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. |
| `login_page` | object | No | Configuration for the login page. |
| `business_profile` | object | No | Business information shown to customers in the portal. |
| `configuration_id` | string | Yes | The ID of the billing portal configuration to update. |
| `default_return_url` | string | No | The default URL to redirect customers to when they click on the portal's link to return to your website. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update and retrieve Checkout Session

**Slug:** `STRIPE_POST_V1_CHECKOUT_SESSIONS_RETRIEVE_A_CHECKOUT`

Tool to update and retrieve a Checkout Session object from Stripe. Use when you need to update metadata or other fields while retrieving the session details.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The checkout session identifier, typically starting with 'cs_'. |
| `expand` | array | No | Specifies which fields in the response should be expanded. Supports nested expansion using dot notation (e.g., 'payment_intent.customer'). Common expandable fields include: customer, payment_intent, subscription, invoice, line_items, payment_link. |
| `metadata` | object | No | Set of key-value pairs that you can attach to the session object. This can be useful for storing additional information about the session in a structured format. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Credit Note

**Slug:** `STRIPE_POST_V1_CREDIT_NOTES_CREDIT_NOTE2`

Tool to update an existing credit note in Stripe by modifying its memo or metadata. Use when you need to add context or store additional information on an already-issued credit note.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `memo` | string | No | Credit note memo text that appears on the PDF sent to customers. Use this to provide context or explanation for the credit note. |
| `metadata` | object | No | Set of key-value pairs that you can attach to an object. This can be useful for storing additional information in a structured format. Individual keys can be unset by posting empty values to them. All keys can be unset by posting an empty value to metadata. |
| `credit_note_id` | string | Yes | The unique identifier of the credit note to update. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create or Retrieve Customer Funding Instructions

**Slug:** `STRIPE_POST_V1_CUSTOMERS_FUNDING_INSTRUCTIONS_FUND_A_TEST`

Creates or retrieves funding instructions for a customer cash balance via bank transfer. Returns bank account details (ABA, IBAN, etc.) that can be used to fund the customer's account. If funding instructions already exist for the customer, the same instructions will be returned.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `currency` | string | Yes | Three-letter ISO 4217 currency code in lowercase. Determines which bank account details are returned (e.g., 'usd' for US bank accounts, 'eur' for IBAN). |
| `customer_id` | string | Yes | The ID of the customer for whom to create or retrieve funding instructions. Must be a valid Stripe customer ID starting with 'cus_'. |
| `funding_type` | string | Yes | The funding method type. Currently only 'bank_transfer' is supported. |
| `bank_transfer` | object | Yes | Configuration specifying the type of bank transfer and optional parameters like requested address types and EU country. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Search Stripe customers

**Slug:** `STRIPE_POST_V1_CUSTOMERS_SEARCH_CUSTOMERS`

Tool to search for Stripe customers using a search query. Use when you need to find customers by email, name, metadata, or other fields using Stripe's Search Query Language.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | string | No | A cursor for pagination. Use the next_page value returned in a previous response to fetch the next page of results. Omit this parameter for the first page. |
| `limit` | integer | No | Maximum number of results to return per page. Must be between 1 and 100. Defaults to 10 if not specified. |
| `query` | string | Yes | The search query string using Stripe's Search Query Language. Supports exact matches, range queries, boolean operators, and metadata searches. For detailed syntax, refer to https://docs.stripe.com/search#search-query-language. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Void an invoice

**Slug:** `STRIPE_POST_V1_INVOICES_FINALIZE_VOID_AN_INVOICE`

Voids a finalized invoice and maintains a papertrail. Use when you need to void a finalized invoice that has not been paid. Once voided, the invoice cannot be undone and maintains audit history.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `invoice_id` | string | Yes | The unique identifier of the invoice to void. Must be a finalized invoice that hasn't been paid or marked as uncollectible. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Invoice Line Item

**Slug:** `STRIPE_POST_V1_INVOICES_LINES_OVERVIEW`

Updates an invoice's line item before finalization. Use when you need to modify details of a line item such as description, metadata, amount, or tax settings before the invoice is finalized.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `amount` | integer | No | The amount to charge in cents. Use negative values for credits. |
| `period` | object | No | Period associated with the line item. |
| `invoice` | string | Yes | The ID of the invoice containing the line item to update. |
| `pricing` | object | No | Pricing information for the invoice item. |
| `metadata` | object | No | Set of key-value pairs for storing additional structured information about this line item. |
| `quantity` | integer | No | Non-negative integer specifying the quantity of units for the line item. |
| `discounts` | array | No | The coupons, promotion codes, or existing discounts to apply to the line item. Pass an empty list to remove all discounts. |
| `tax_rates` | array | No | The tax rates which apply to the line item. This overrides the invoice's default_tax_rates. Pass an empty list to remove all tax rates. |
| `price_data` | object | No | Data for generating a new Price object inline. |
| `description` | string | No | An arbitrary string which you can attach to the line item for tracking and display purposes. |
| `tax_amounts` | array | No | A list of up to 10 tax amounts for this line item. Cannot be set if the line item has tax_rates set, or if the invoice has default_tax_rates set, or uses automatic tax. |
| `discountable` | boolean | No | Controls whether discounts apply to this line item. Defaults vary by item type. Cannot be set to true for prorations. |
| `line_item_id` | string | Yes | The ID of the invoice line item to update. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Remove lines from invoice

**Slug:** `STRIPE_POST_V1_INVOICES_REMOVE_LINES_OVERVIEW`

Tool to remove multiple line items from a draft Stripe invoice. Use when you need to delete or unassign specific line items from an invoice that hasn't been finalized yet.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `lines` | array | Yes | Array of line items to remove from the invoice. Each line item must specify an ID and a behavior (delete or unassign). |
| `invoice_id` | string | Yes | The ID of the draft invoice from which to remove line items. |
| `invoice_metadata` | object | No | Optional key-value pairs to update on the invoice object itself after removing lines. Useful for storing additional information. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Void invoice

**Slug:** `STRIPE_POST_V1_INVOICES_SEND_VOID_AN_INVOICE`

Tool to void a finalized Stripe invoice. Use when you need to permanently void an invoice while preserving an audit trail. This operation cannot be undone and only works on finalized invoices.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `invoice_id` | string | Yes | The unique identifier of the finalized invoice to void. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Void an invoice

**Slug:** `STRIPE_POST_V1_INVOICES_VOID_AN_INVOICE`

Tool to permanently void a finalized Stripe invoice. Use when an invoice needs to be canceled while maintaining an audit trail. This operation is irreversible and only applies to finalized invoices.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `invoice_id` | string | Yes | The unique identifier of the finalized invoice to void. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update payment method configuration

**Slug:** `STRIPE_POST_V1_PAYMENT_METHOD_CONFIGS_LIST_PAYMENT_METHOD2`

Updates a payment method configuration to control which payment methods are displayed at checkout. Use when modifying payment method availability or display settings.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique identifier of the payment method configuration to update. |
| `eps` | object | No | Configuration for a specific payment method. |
| `fpx` | object | No | Configuration for a specific payment method. |
| `jcb` | object | No | Configuration for a specific payment method. |
| `p24` | object | No | Configuration for a specific payment method. |
| `pix` | object | No | Configuration for a specific payment method. |
| `zip` | object | No | Configuration for a specific payment method. |
| `alma` | object | No | Configuration for a specific payment method. |
| `blik` | object | No | Configuration for a specific payment method. |
| `card` | object | No | Configuration for a specific payment method. |
| `link` | object | No | Configuration for a specific payment method. |
| `name` | string | No | Configuration name (max 100 characters). |
| `oxxo` | object | No | Configuration for a specific payment method. |
| `ideal` | object | No | Configuration for a specific payment method. |
| `payco` | object | No | Configuration for a specific payment method. |
| `payto` | object | No | Configuration for a specific payment method. |
| `swish` | object | No | Configuration for a specific payment method. |
| `twint` | object | No | Configuration for a specific payment method. |
| `active` | boolean | No | Controls whether the configuration can be used for new payments. |
| `affirm` | object | No | Configuration for a specific payment method. |
| `alipay` | object | No | Configuration for a specific payment method. |
| `billie` | object | No | Configuration for a specific payment method. |
| `boleto` | object | No | Configuration for a specific payment method. |
| `klarna` | object | No | Configuration for a specific payment method. |
| `mb_way` | object | No | Configuration for a specific payment method. |
| `paynow` | object | No | Configuration for a specific payment method. |
| `paypal` | object | No | Configuration for a specific payment method. |
| `paypay` | object | No | Configuration for a specific payment method. |
| `sofort` | object | No | Configuration for a specific payment method. |
| `cashapp` | object | No | Configuration for a specific payment method. |
| `giropay` | object | No | Configuration for a specific payment method. |
| `grabpay` | object | No | Configuration for a specific payment method. |
| `konbini` | object | No | Configuration for a specific payment method. |
| `kr_card` | object | No | Configuration for a specific payment method. |
| `satispay` | object | No | Configuration for a specific payment method. |
| `apple_pay` | object | No | Configuration for a specific payment method. |
| `kakao_pay` | object | No | Configuration for a specific payment method. |
| `mobilepay` | object | No | Configuration for a specific payment method. |
| `naver_pay` | object | No | Configuration for a specific payment method. |
| `promptpay` | object | No | Configuration for a specific payment method. |
| `acss_debit` | object | No | Configuration for a specific payment method. |
| `amazon_pay` | object | No | Configuration for a specific payment method. |
| `bacs_debit` | object | No | Configuration for a specific payment method. |
| `bancontact` | object | No | Configuration for a specific payment method. |
| `google_pay` | object | No | Configuration for a specific payment method. |
| `multibanco` | object | No | Configuration for a specific payment method. |
| `sepa_debit` | object | No | Configuration for a specific payment method. |
| `wechat_pay` | object | No | Configuration for a specific payment method. |
| `pay_by_bank` | object | No | Configuration for a specific payment method. |
| `revolut_pay` | object | No | Configuration for a specific payment method. |
| `samsung_pay` | object | No | Configuration for a specific payment method. |
| `au_becs_debit` | object | No | Configuration for a specific payment method. |
| `apple_pay_later` | object | No | Configuration for a specific payment method. |
| `us_bank_account` | object | No | Configuration for a specific payment method. |
| `cartes_bancaires` | object | No | Configuration for a specific payment method. |
| `customer_balance` | object | No | Configuration for a specific payment method. |
| `afterpay_clearpay` | object | No | Configuration for a specific payment method. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Payment Method Domain

**Slug:** `STRIPE_POST_V1_PAYMENT_METHOD_DOMAINS_PAYMENT_METHOD`

Updates an existing payment method domain to enable or disable it. Use when you need to control whether payment methods requiring domain verification will appear in Elements or Embedded Checkout.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique identifier of the payment method domain to update. Typically starts with 'pmd_'. |
| `enabled` | boolean | No | Determines if the payment method domain is active. When disabled (false), associated payment methods won't display in Elements or Embedded Checkout. When enabled (true), payment methods requiring domain verification will appear in Elements or Embedded Checkout. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Report Payment Attempt

**Slug:** `STRIPE_POST_V1_PAYMENT_RECORDS_REPORT_ATTEMPT`

Tool to report a payment attempt on a Stripe Payment Record. Use when updating a Payment Record with payment attempt details such as initiation time and outcome status.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `outcome` | string | Yes | The outcome of the payment attempt (e.g., 'guaranteed', 'failed'). |
| `guaranteed` | object | No | Details for guaranteed payment outcome. |
| `initiated_at` | integer | Yes | Unix timestamp when the payment attempt was initiated. |
| `payment_record_id` | string | Yes | The unique identifier of the Payment Record. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Report Payment Attempt Canceled

**Slug:** `STRIPE_POST_V1_PAYMENT_RECORDS_REPORT_CANCELED`

Tool to report that the most recent payment attempt was canceled. Use when you need to update a Payment Record to reflect a canceled payment attempt.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique identifier of the Payment Record to update. Format: pr_* (e.g., pr_test_65Tqu1EdnfhFTBzFcFB41QvM72TjFrbIBU) |
| `canceled_at` | integer | Yes | When the reported payment was canceled. Measured in seconds since the Unix epoch. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Report payment attempt guaranteed overview

**Slug:** `STRIPE_POST_V1_PAYMENT_RECORDS_REPORT_GUARANTEED`

Reports that a payment attempt was guaranteed for a specific Payment Record. Use when confirming that a payment has been successfully guaranteed by the payment processor at a specific timestamp.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The Payment Record identifier. |
| `guaranteed_at` | integer | Yes | When the reported payment was guaranteed, measured in seconds since the Unix epoch. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Report payment attempt information

**Slug:** `STRIPE_POST_V1_PAYMENT_RECORDS_REPORT_INFO`

Tool to report additional payment attempt information for a payment record. Use when you need to add informational details about a payment attempt.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `description` | string | Yes | Additional payment attempt information to report for this payment record. |
| `payment_record_id` | string | Yes | The unique identifier of the payment record to report on. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Report Payment Record Refund

**Slug:** `STRIPE_POST_V1_PAYMENT_RECORDS_REPORT_REFUND_OVERVIEW`

Reports that the most recent payment attempt on a Payment Record was refunded. Use when you need to record a refund for a successfully processed payment to maintain accurate payment records. Multiple partial refunds can be reported until the full amount is refunded.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The Payment Record identifier. |
| `amount` | object | No | Refund amount details. |
| `outcome` | string | Yes | Must be set to 'refunded' to report a refund. |
| `metadata` | object | No | Set of key-value pairs for storing additional information in a structured format. |
| `refunded` | object | Yes | Information about the payment attempt refund. |
| `initiated_at` | integer | No | Unix epoch timestamp when the refund was initiated. |
| `processor_details` | object | Yes | Processor information for the refund. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update payout metadata

**Slug:** `STRIPE_POST_V1_PAYOUTS_RETRIEVE_A_PAYOUT`

Updates a payout's metadata and returns the updated payout object. This endpoint ONLY allows updating the metadata field - no other payout properties (amount, destination, status, etc.) can be modified. To remove a specific metadata key, pass an empty string as its value. To clear all metadata, pass an empty dictionary. Use this when you need to attach or update custom information on an existing payout.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `metadata` | object | No | Set of key-value pairs to attach or update on the payout object. Useful for storing additional information. Keys and values must be strings. To remove a specific key, pass an empty string as its value. To clear all metadata, pass an empty dictionary. |
| `payout_id` | string | Yes | The unique identifier of the payout to update. This ID typically starts with 'po_'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Plan Overview

**Slug:** `STRIPE_POST_V1_PLANS_OVERVIEW`

Tool to update a Stripe plan by setting passed parameter values. Use when modifying plan details like nickname, metadata, or active status.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The identifier of the plan to be updated. |
| `active` | boolean | No | Whether the plan is currently available for new subscriptions. |
| `product` | string | No | The product the plan belongs to. Cannot be changed once used in a subscription or subscription schedule. |
| `metadata` | object | No | Set of key-value pairs for storing additional structured information. Individual keys can be unset by posting an empty value to them. |
| `nickname` | string | No | A brief description of the plan, hidden from customers. |
| `trial_period_days` | integer | No | Default number of trial days when subscribing a customer to this plan using trial_from_plan=true. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Promotion Code

**Slug:** `STRIPE_POST_V1_PROMOTION_CODES_PROMOTION_CODE`

Updates an existing promotion code. Most fields are not editable by design. Use this to activate/deactivate codes, update metadata, or modify currency-specific restrictions.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `active` | boolean | No | Whether the promotion code is currently active and can be redeemed. A promotion code can only be reactivated when the underlying coupon is still valid. |
| `metadata` | object | No | Set of key-value pairs for storing additional structured information about the promotion code. Individual keys can be unset by posting an empty value. |
| `restrictions` | object | No | Settings restricting redemption of the promotion code. |
| `promotion_code` | string | Yes | The ID of the promotion code to update. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Shipping Rate

**Slug:** `STRIPE_POST_V1_SHIPPING_RATES_OVERVIEW2`

Tool to update an existing Stripe shipping rate. Use when you need to modify shipping rate properties such as active status, fixed amounts, metadata, or tax behavior.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Unique identifier of the shipping rate to update. |
| `active` | boolean | No | Whether the shipping rate can be used for new purchases. Defaults to true. |
| `metadata` | object | No | Set of key-value pairs that you can attach to an object for storing additional information. Keys up to 40 characters, values up to 500 characters. |
| `fixed_amount` | object | No | Fixed amount charge details for shipping. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update subscription schedule

**Slug:** `STRIPE_POST_V1_SUBSCRIPTION_SCHEDULES_OVERVIEW2`

Tool to update an existing subscription schedule with new phases, settings, metadata, and end behavior. Use when modifying subscription schedule configuration.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The subscription schedule ID to update |
| `phases` | array | No | List of subscription phases with customizable durations and pricing |
| `metadata` | object | No | Key-value pairs for storing additional information |
| `end_behavior` | string | No | Subscription fate when schedule ends: release or cancel |
| `default_settings` | object | No | Object representing the subscription schedule's default settings |
| `proration_behavior` | string | No | Billing changes handling: create_prorations, always_invoice, or none |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Release subscription schedule

**Slug:** `STRIPE_POST_V1_SUBSCRIPTION_SCHEDULES_RELEASE_OVERVIEW`

Tool to release a subscription schedule. Releases a subscription schedule immediately, stops scheduling future phases but leaves the existing subscription in place.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `schedule_id` | string | Yes | The ID of the subscription schedule to release. |
| `preserve_cancel_date` | boolean | No | Keep any cancellation date on the underlying subscription that the schedule previously set. If false (default), any previously set cancellation date will be cleared. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update subscription

**Slug:** `STRIPE_POST_V1_SUBSCRIPTIONS_LIST_SUBSCRIPTIONS`

Updates an existing Stripe subscription's properties including metadata, description, payment method, billing settings, trial periods, and cancellation behavior. Use this to modify subscription configuration, change payment methods, update billing cycles, manage trials, or schedule cancellations. This action does not modify subscription items (prices/products) - use separate actions for that.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `metadata` | object | No | Set of key-value pairs for storing additional information about the subscription. Keys can be up to 40 characters and values up to 500 characters. |
| `trial_end` | string | No | Unix timestamp for when the trial period ends, or 'now' to end the trial immediately. Use this to grant or modify trial periods. |
| `description` | string | No | Customer-facing description for the subscription. Maximum 500 characters. |
| `days_until_due` | integer | No | Number of days a customer has to pay invoices. Only valid when collection_method is 'send_invoice'. |
| `default_source` | string | No | ID of the payment source to use as the default for the subscription. Must belong to the subscription's customer. |
| `subscription_id` | string | Yes | The ID of the subscription to update (required). |
| `collection_method` | string | No | How invoices are paid. Use 'charge_automatically' to automatically charge the default payment method, or 'send_invoice' to email the customer an invoice. |
| `proration_behavior` | string | No | How to handle prorations when subscription is updated. Options: 'create_prorations' (default), 'none', or 'always_invoice'. |
| `billing_cycle_anchor` | string | No | Use 'now' to reset the billing cycle anchor to the current time, or 'unchanged' to keep it as is. |
| `cancel_at_period_end` | boolean | No | Set to true to cancel the subscription at the end of the current billing period. Set to false to undo a pending cancellation. |
| `default_payment_method` | string | No | ID of the payment method to use as the default for this subscription. Must belong to the subscription's customer. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Tax Rate

**Slug:** `STRIPE_POST_V1_TAX_RATES_TAX_RATE2`

Tool to update an existing Stripe tax rate. Use when you need to modify tax rate properties such as display name, description, or active status.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `state` | string | No | ISO 3166-2 subdivision code without country prefix (e.g., 'NY' for New York in the US, 'ON' for Ontario in Canada). |
| `active` | boolean | No | Flag determining whether the tax rate is active or inactive (archived). Inactive tax rates cannot be used with new applications or Checkout Sessions. |
| `country` | string | No | Two-letter country code per ISO 3166-1 alpha-2 standard. |
| `metadata` | object | No | Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. |
| `tax_type` | string | No | The high-level tax type, such as vat or sales_tax. One of: amusement_tax, communications_tax, gst, hst, igst, jct, lease_tax, pst, qst, retail_delivery_fee, rst, sales_tax, service_tax, or vat. |
| `description` | string | No | An arbitrary string attached to the tax rate for your own reference. It is not visible to your customers. |
| `tax_rate_id` | string | Yes | The unique identifier of the tax rate to update. |
| `display_name` | string | No | The display name of the tax rate as shown to customers on receipts and invoices. Maximum 50 characters. |
| `jurisdiction` | string | No | The jurisdiction for the tax rate. You can use this label field for tax reporting purposes. Maximum 50 characters. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Meter Event Adjustment

**Slug:** `STRIPE_POST_V2_BILLING_METER_EVENT_ADJUSTMENTS_METER_EVENT`

Creates a billing meter event adjustment to cancel a previously sent meter event. Use when you need to cancel a meter event within 24 hours of Stripe receiving it.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `type` | string | Yes | Specifies adjustment type. Currently only 'cancel' is supported for single events. |
| `cancel` | object | Yes | Object containing cancellation details with the identifier of the event to cancel. |
| `event_name` | string | Yes | The name of the meter event. Corresponds with the event_name field on a meter. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Present payment method on reader

**Slug:** `STRIPE_PRESENT_PAYMENT_METHOD`

Tool to present a payment method on a simulated terminal reader for testing purposes. Use when testing payment flows, simulating card acceptance, or validating terminal reader integrations in test mode.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `card` | object | No | Simulated card payment data. |
| `type` | string ("card" | "card_present" | "interac_present") | No | Simulated payment type. Must be one of: 'card', 'card_present', or 'interac_present'. |
| `reader_id` | string | Yes | The unique identifier of the terminal reader to present the payment method on. |
| `amount_tip` | integer | No | Simulated on-reader tip amount in the smallest currency unit (e.g., 100 cents to represent $1.00). |
| `card_present` | object | No | Simulated card_present payment data. |
| `interac_present` | object | No | Simulated Interac payment data. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Process setup intent on terminal reader

**Slug:** `STRIPE_PROCESS_SETUP_INTENT`

Initiates a SetupIntent flow on a Stripe Terminal Reader to save payment details. Use when you need to collect and save payment method information for future use.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `reader_id` | string | Yes | The unique identifier of the terminal reader to process the setup intent on. |
| `setup_intent` | string | Yes | The ID of the SetupIntent to process on the reader. |
| `process_config` | object | No | Configuration overrides for setup operations. |
| `allow_redisplay` | string ("always" | "limited" | "unspecified") | No | Indicates whether this payment method can be shown again to its customer in a checkout flow. Controls visibility in Stripe products like Checkout and Elements. |
| `customer_consent_collected` | boolean | Yes | Set to true when customer consent has been collected. Required by regulations in some jurisdictions to confirm the customer agreed to save their payment method. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Reactivate Billing Meter

**Slug:** `STRIPE_REACTIVATE_BILLING_METER`

Reactivates a deactivated billing meter. Use when you need to resume tracking usage after a meter has been deactivated.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Unique identifier of the billing meter to reactivate. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Report Payment Attempt Failed

**Slug:** `STRIPE_REPORT_PAYMENT_ATTEMPT_FAILED`

Reports that a recent payment attempt on a Payment Record has failed. Use when a payment attempt encounters an error to ensure Stripe has a complete view of payment flows.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The identifier of the Payment Record to update. |
| `failed_at` | integer | Yes | When the reported payment failed. Measured in seconds since the Unix epoch. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Resume subscription

**Slug:** `STRIPE_RESUME_SUBSCRIPTION`

Resumes a paused Stripe subscription with billing cycle and proration options. Use when a customer wants to restart payment collection on a previously paused subscription.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `proration_date` | integer | No | Calculates prorations as if resumed at specified time; useful for matching preview calculations. Unix timestamp in seconds. |
| `subscription_id` | string | Yes | The ID of the subscription to resume. |
| `proration_behavior` | string | No | Controls proration handling when anchor is 'unchanged'. Options: 'always_invoice' (immediate invoicing), 'create_prorations' (conditional invoicing), or 'none' (disable prorations). Default: 'create_prorations'. |
| `billing_cycle_anchor` | string | No | Determines timing for resumption. Options: 'now' (reset anchor to current UTC time) or 'unchanged' (advance to surrounding period). Default: 'now'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve Balance

**Slug:** `STRIPE_RETRIEVE_BALANCE`

Retrieves the complete current balance details for the connected Stripe account.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve Charge Details

**Slug:** `STRIPE_RETRIEVE_CHARGE`

Retrieves full details for an existing Stripe charge using its unique ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `charge_id` | string | Yes | Identifier for the charge, typically starting with 'ch_'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve Checkout Session

**Slug:** `STRIPE_RETRIEVE_CHECKOUT_SESSION`

Tool to retrieve a Checkout Session object from Stripe. Use when you need to get the current state of a checkout session, including payment status, customer details, and line items.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `expand` | array | No | Specifies which fields in the response should be expanded. Supports nested expansion using dot notation (e.g., 'payment_intent.customer'). Common expandable fields include: customer, payment_intent, subscription, invoice, line_items, payment_link. |
| `session` | string | Yes | The identifier of the checkout session to retrieve, typically starting with 'cs_'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve customer

**Slug:** `STRIPE_RETRIEVE_CUSTOMER`

Retrieves detailed information for an existing Stripe customer using their unique customer ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `customer_id` | string | Yes | The unique identifier of the Stripe customer to retrieve. This ID typically starts with 'cus_'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve payment intent

**Slug:** `STRIPE_RETRIEVE_PAYMENT_INTENT`

Retrieves a PaymentIntent by its ID; `client_secret` is required if a publishable API key is used.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `client_secret` | string | No | Client secret for the PaymentIntent. Required if using a publishable key for authentication. |
| `payment_intent_id` | string | Yes | The unique identifier of the PaymentIntent to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve Promotion Code

**Slug:** `STRIPE_RETRIEVE_PROMOTION_CODE`

Tool to retrieve a Stripe promotion code by its ID. Use when you need to get details about a specific promotion code including its associated coupon, usage restrictions, and redemption statistics.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `promotion_code_id` | string | Yes | The unique identifier of the promotion code to retrieve, typically starting with 'promo_'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve Upcoming Invoice

**Slug:** `STRIPE_RETRIEVE_UPCOMING_INVOICE`

Tool to preview the upcoming invoice for a customer, showing all pending charges including subscription renewals and invoice items. Use when you need to preview invoice amounts before they are finalized, test the effects of subscription updates including prorations, or estimate future billing.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `coupon` | string | No | The code of the coupon to apply to the invoice preview. If multiple discounts needed, use the discounts parameter instead. |
| `issuer` | object | No | The connected account that issues the invoice. Can specify type ('self' or 'account') and account ID. |
| `currency` | string | No | The currency for the invoice preview. Three-letter ISO currency code. Defaults to customer's currency. |
| `customer` | string | No | The identifier of the customer whose upcoming invoice to retrieve. Required if subscription is not specified. |
| `schedule` | string | No | The identifier of the subscription schedule for which you'd like to retrieve the upcoming invoice. Cannot be combined with subscription or subscription_details parameters. |
| `discounts` | array | No | List of discounts to apply. Each discount can have coupon, discount, or promotion_code. |
| `on_behalf_of` | string | No | The account (if any) for which the funds of the invoice payment are intended. Used with Stripe Connect. |
| `preview_mode` | string | No | Determines the preview calculation type. 'next' (default) calculates the next invoice with all items. 'recurring' estimates long-term recurring bill. |
| `subscription` | string | No | The identifier of the subscription for which you'd like to retrieve the upcoming invoice. If not specified, uses the customer's default subscription. |
| `automatic_tax` | object | No | Settings for automatic tax calculation. Must include 'enabled' boolean field. |
| `invoice_items` | array | No | List of invoice items to add or update in the upcoming invoice preview. Maximum 250 items. |
| `customer_details` | object | No | Details about the customer used for this invoice preview. Can include address, shipping, and tax information. |
| `schedule_details` | object | No | Details for schedule creation or modification to preview. Include phases, end_behavior, and proration_behavior. |
| `subscription_items` | array | No | List of subscription items for subscription updates. Each item can have id, deleted, price, quantity, etc. |
| `subscription_details` | object | No | Subscription creation or modification parameters to preview. Can include items, proration_behavior, proration_date, billing_cycle_anchor, trial_end, etc. |
| `subscription_cancel_at` | integer | No | Unix timestamp at which the subscription should be canceled. Used to preview the invoice that will be generated if the subscription is canceled at this time. |
| `subscription_resume_at` | string | No | For paused subscriptions, when to resume. Can be 'now'. |
| `subscription_trial_end` | string | No | Trial end for the subscription. Can be 'now' or a Unix timestamp. |
| `subscription_cancel_now` | boolean | No | Boolean to simulate immediate cancellation of the subscription. |
| `subscription_start_date` | integer | No | Unix timestamp for when the subscription should start. |
| `subscription_proration_date` | integer | No | Unix timestamp to use for proration calculations. Important: Use this same value when doing the actual subscription update to ensure matching prorations. |
| `subscription_trial_from_plan` | boolean | No | Boolean indicating if a default trial from the plan should be applied. |
| `subscription_default_tax_rates` | array | No | List of tax rate IDs to apply to the subscription items in this preview. |
| `subscription_proration_behavior` | string | No | How to handle prorations when updating subscriptions. Can be 'create_prorations', 'none', or 'always_invoice'. |
| `subscription_billing_cycle_anchor` | string | No | For new subscriptions, billing cycle anchor. Can be 'now', 'unchanged', or a Unix timestamp. |
| `subscription_cancel_at_period_end` | boolean | No | Boolean indicating whether the subscription should cancel at the end of the current period. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Search Stripe charges

**Slug:** `STRIPE_SEARCH_CHARGES`

Search charges using Stripe's Search Query Language. Use when you need to find historical charges by status, amount, customer, metadata, or other criteria.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | string | No | Pagination cursor for a specific page; omit entirely for the first page. Use `next_page` from a previous response for subsequent pages. |
| `limit` | integer | No | Maximum number of results per page (default is 10). |
| `query` | string | Yes | The search query string, adhering to Stripe's Search Query Language. Supports exact matches, range queries, boolean operators (AND/OR), and metadata searches. CRITICAL LIMITATION: You CANNOT mix AND and OR operators in the same query - use either all AND or all OR, never both. Parentheses are not supported. Combine up to 10 clauses with spaces (defaults to AND logic) or explicit AND/OR keywords. For detailed syntax, refer to https://docs.stripe.com/search#search-query-language. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Search Stripe customers

**Slug:** `STRIPE_SEARCH_CUSTOMERS`

Retrieves a list of Stripe customers matching a search query that adheres to Stripe's Search Query Language.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | string | No | Cursor token for pagination. MUST be the exact `next_page` value from a previous search response - NOT a numeric page number like '1' or '2'. Omit this parameter on the first request. Only provide this when `has_more` is true in the previous response. |
| `limit` | integer | No | Maximum number of results per page (default is 10). |
| `query` | string | Yes | The search query string using Stripe's Search Query Language. IMPORTANT: Every query must include at least one field:value condition - standalone wildcards like '*' are NOT supported and will fail. Supported operators: ':' for exact match (case-insensitive), '~' for substring match (minimum 3 characters), comparison operators (>, <, >=, <=) for numeric/date fields. Combine clauses with AND, OR, or prefix with '-' for negation. To retrieve many/all customers, use 'created>0'. For partial text matching, use the ~ operator (e.g., email~'example'). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Search invoices

**Slug:** `STRIPE_SEARCH_INVOICES`

Searches for invoices using Stripe's Search Query Language. Use when you need to find invoices by status, total amount, customer, currency, or other criteria. Data is typically searchable within one minute, though propagation can lag up to an hour during outages.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | string | No | Pagination cursor for a specific page; omit for the first page. Use `next_page` from a previous response for subsequent pages. |
| `limit` | integer | No | Maximum number of results per page (default is 10). |
| `query` | string | Yes | The search query string using Stripe's Search Query Language. Supported search fields for invoices: `created` (timestamp), `currency` (3-letter ISO code), `customer` (customer ID), `last_finalization_error_code` (error code from finalization), `last_finalization_error_type` (error type from finalization), `metadata` (key-value pairs), `number` (invoice number), `receipt_number` (receipt number), `status` (draft/open/paid/uncollectible/void), `subscription` (subscription ID), `total` (amount in cents). Supports exact matches, range queries (>, <, >=, <=), boolean operators (AND, OR, NOT), and metadata search. Can combine up to 10 query clauses. Cannot mix AND with OR in the same query. For detailed syntax, refer to https://docs.stripe.com/search#search-query-language. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Search payment intents

**Slug:** `STRIPE_SEARCH_PAYMENT_INTENTS`

Searches for PaymentIntents using Stripe's Search Query Language. Use when you need to find payments by status, amount, customer, or other criteria.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | string | No | Pagination cursor for a specific page; omit for the first page. Use `next_page` from a previous response for subsequent pages. |
| `limit` | integer | No | Maximum number of results per page (default is 10). |
| `query` | string | Yes | The search query string, adhering to Stripe's Search Query Language. This language supports features like exact matches, range queries, boolean operators, and searching by metadata. For detailed syntax, refer to https://docs.stripe.com/search#search-query-language. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Search Stripe prices

**Slug:** `STRIPE_SEARCH_PRICES`

Search for prices using Stripe's Search Query Language. Use when you need to find prices by status, currency, product, or other criteria with flexible query syntax.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | string | No | Pagination cursor for a specific page; omit for the first page. Use `next_page` from a previous response for subsequent pages. |
| `limit` | integer | No | Maximum number of results per page (default is 10, maximum is 100). |
| `query` | string | Yes | The search query string, adhering to Stripe's Search Query Language. This language supports features like exact matches, range queries, boolean operators, and searching by metadata. For detailed syntax, refer to https://docs.stripe.com/search#search-query-language. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Search Stripe products

**Slug:** `STRIPE_SEARCH_PRODUCTS`

Tool to search for products using Stripe's Search Query Language. Use when you need to find products based on specific criteria like active status, name, or metadata.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | string | No | A cursor for pagination across multiple pages of results. Don't include this parameter on the first call. Use the next_page value returned in a previous response to request subsequent results. |
| `limit` | integer | No | A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. |
| `query` | string | Yes | The search query string using Stripe's Search Query Language. CRITICAL: All string values MUST be enclosed in double quotes ("), not single quotes ('). The substring match operator is ~ (tilde), placed immediately after the field name with no colon, e.g., name~"value". Combine up to 10 clauses with AND or OR operators. Minimum 3 characters for substring matches. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Search subscriptions

**Slug:** `STRIPE_SEARCH_SUBSCRIPTIONS`

Searches for subscriptions using Stripe's Search Query Language. Use when you need to find subscriptions by status, metadata, created timestamp, or canceled_at timestamp.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | string | No | Pagination cursor for a specific page; omit for the first page. Use `next_page` from a previous response for subsequent pages. |
| `limit` | integer | No | Maximum number of results per page (default is 10, max is 100). |
| `query` | string | Yes | The search query string using Stripe's Search Query Language. Supported search fields for subscriptions: status (e.g., 'active', 'canceled'), metadata (custom key-value pairs), created (Unix timestamp), canceled_at (Unix timestamp). Supports exact matches, range queries (>, <, >=, <=), and boolean operators (AND, OR). For detailed syntax, refer to https://docs.stripe.com/search#search-query-language. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Send invoice for manual payment

**Slug:** `STRIPE_SEND_INVOICE`

Tool to manually send a finalized Stripe invoice to the customer outside the automatic billing schedule. Use when you need to deliver an invoice for manual payment. Note: In test mode, no emails are sent, but webhook events (invoice.sent) are still generated.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `invoice` | string | Yes | The unique identifier of the invoice to send to the customer. Must be a finalized invoice with 'send_invoice' collection method. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Set reader display

**Slug:** `STRIPE_SET_READER_DISPLAY`

Configures a Stripe Terminal reader to display cart information on its screen. Use when you need to show transaction details to customers during checkout.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `cart` | object | Yes | Cart details to display on the reader screen. Required when type is 'cart'. |
| `type` | string | No | The type of information to display. Currently only 'cart' is supported. |
| `reader` | string | Yes | The unique identifier of the Terminal reader to update (e.g., 'tmr_xxxxx'). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Set terminal reader display

**Slug:** `STRIPE_SET_TERMINAL_READER_DISPLAY`

Tool to set the display on a Stripe Terminal reader to show cart details. Use when you need to display line items, totals, and tax information on a physical terminal reader screen.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `cart` | object | No | Cart information to display on the terminal reader. |
| `type` | string | Yes | Display type. Currently only 'cart' is supported. |
| `reader_id` | string | Yes | The ID of the terminal reader to set the display for. Must be an existing terminal reader ID (format: tmr_xxx). Obtain this from listing terminal readers or after creating one. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Simulate successful input collection

**Slug:** `STRIPE_SUCCEED_TEST_TERMINAL_READER_INPUT_COLLECTION`

Simulates successful completion of an ongoing input collection on a Terminal reader. This test helper allows you to test your integration's handling of successfully collected customer inputs (signature, email, phone, etc.) without requiring physical hardware or actual customer interaction. The reader must have an active input collection in progress (initiated via collect_inputs endpoint). Note: This endpoint only works in test mode with test API keys.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `expand` | array | No | Specifies which fields in the response should be expanded. Each item has a maximum length of 5000 characters. |
| `reader` | string | Yes | The unique identifier of the terminal reader to simulate successful input collection on. |
| `skip_non_required_inputs` | string ("all" | "none") | No | Defines which non-required inputs should be skipped during simulation. Use 'all' to skip all non-required inputs (simulating customer skipping optional fields), or 'none' to collect all inputs including non-required ones (simulating customer completing all fields). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Simulate Terminal Reader Input Collection Timeout

**Slug:** `STRIPE_TIMEOUT_TEST_TERMINAL_READER_INPUT_COLLECTION`

Simulate an input collection timeout on a Stripe Terminal reader. This test helper endpoint allows you to simulate timeout scenarios during input collection operations on Terminal readers without needing physical hardware. When called, it marks the current reader action as failed with a timeout error, useful for testing error handling in your integration. **Important**: This endpoint is ONLY available in test mode. You must use test API keys (sk_test_...) to call this endpoint. Calling with live mode keys will result in an error. Use this when testing: - Timeout error handling in your application - Input collection failure scenarios - Reader action recovery flows

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `expand` | array | No | Specifies which fields in the response should be expanded. Each item has a maximum length of 5000 characters. |
| `reader` | string | Yes | The unique identifier of the Terminal reader to simulate timeout on. Must be a valid reader ID (starts with 'tmr_') that has an active input collection operation. The timeout will fail the current reader action. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Application Fee Refund

**Slug:** `STRIPE_UPDATE_APPLICATION_FEE_REFUND`

Updates an application fee refund by its fee ID and refund ID. Use this action when you need to update the metadata of an existing application fee refund. Application Fee Refund objects allow you to refund an application fee that has previously been created but not yet refunded. Funds will be refunded to the Stripe account from which the fee was originally collected. Related guide: Refunding application fees.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The ID of the refund to update. This ID typically starts with 'fr_'. |
| `fee` | string | Yes | The ID of the application fee that was refunded. This ID typically starts with 'fee_'. |
| `expand` | array | No | Specifies which fields in the response should be expanded. Expandable fields include: balance_transaction, fee. |
| `metadata` | object | No | Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to metadata. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update billing credit grant

**Slug:** `STRIPE_UPDATE_BILLING_CREDIT_GRANT`

Updates an existing billing credit grant. Use when you need to modify the expiration time or metadata of a credit grant.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Unique identifier for the credit grant object to update. Typically starts with 'credgr_'. |
| `metadata` | object | No | Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. |
| `expires_at` | integer | No | Unix timestamp when the billing credits created by this credit grant expire. If set to empty, the billing credits never expire. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Billing Meter

**Slug:** `STRIPE_UPDATE_BILLING_METER`

Tool to update a billing meter's display name. Use when you need to modify the name of an existing billing meter.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique identifier of the billing meter to update. |
| `expand` | array | No | Specifies which fields in the response should be expanded. Available on all API requests and applies to the response of that request only. |
| `display_name` | string | No | The meter's name. Not visible to the customer. Maximum length: 250 characters. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Billing Portal Configuration

**Slug:** `STRIPE_UPDATE_BILLING_PORTAL_CONFIGURATION`

Update a billing portal configuration. Use when you need to modify portal settings, business profile, or features.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | Configuration name (max 256 characters). |
| `active` | boolean | No | Whether the configuration is active for creating portal sessions. |
| `features` | object | No | Features configuration for the billing portal. |
| `metadata` | object | No | Key-value pairs for storing additional information. |
| `login_page` | object | No | Login page configuration. |
| `configuration` | string | Yes | ID of the billing portal configuration to update. |
| `business_profile` | object | No | Business profile settings for the billing portal. |
| `default_return_url` | string | No | Default URL to redirect customers when they return. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Cash Balance Settings

**Slug:** `STRIPE_UPDATE_CASH_BALANCE`

Tool to update a customer's cash balance settings in Stripe. Use when you need to modify how funds transferred to a customer's cash balance are applied to payment intents and invoices.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `settings` | object | No | Settings for the cash balance. |
| `customer_id` | string | Yes | The unique identifier of the Stripe customer whose cash balance settings you want to update. This ID typically starts with 'cus_'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Charge

**Slug:** `STRIPE_UPDATE_CHARGE`

Tool to update a Stripe charge object with provided parameters. Use when you need to modify charge details such as description, metadata, fraud assessment, receipt email, shipping information, or transfer group.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `customer` | string | No | The ID of an existing customer to associate with this charge. Only updatable if the charge has no existing customer. |
| `metadata` | object | No | Set of key-value pairs for storing structured information. Individual keys can be unset by posting empty values. |
| `shipping` | object | No | Shipping information for the charge. |
| `charge_id` | string | Yes | The ID of the charge to update. |
| `description` | string | No | An arbitrary string to attach to the charge. Displayed in the Stripe Dashboard and on customer receipts. |
| `fraud_details` | object | No | Fraud details for the charge. |
| `receipt_email` | string | No | The email address to send the receipt to. Updating this will trigger a new receipt email to be sent. |
| `transfer_group` | string | No | A string that identifies this transaction as part of a group for connected accounts. Can only be set once. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Charge Dispute

**Slug:** `STRIPE_UPDATE_CHARGE_DISPUTE`

Tool to update metadata on a charge's dispute. Use when you need to attach structured information to a dispute for tracking or internal reference purposes.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `charge` | string | Yes | The ID of the charge to update the dispute for. Must start with 'ch_'. |
| `metadata` | object | No | Key-value pairs to attach to the dispute for storing structured additional information. Individual keys can be unset by posting an empty value. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Charge Refund

**Slug:** `STRIPE_UPDATE_CHARGE_REFUND`

Tool to update a specified refund within a charge. Use when you need to modify the metadata of an existing refund.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `refund` | string | Yes | The identifier of the refund to update. This ID typically starts with 're_'. |
| `metadata` | object | No | Set of key-value pairs that you can attach to the refund object for storing additional information in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to metadata. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Checkout Session

**Slug:** `STRIPE_UPDATE_CHECKOUT_SESSION`

Tool to update a Stripe Checkout Session dynamically. Use when you need to modify customer information, line items, or shipping options on an existing checkout session. Line item updates require retransmitting the entire array.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `session` | string | Yes | The ID of the Checkout Session to update. |
| `metadata` | object | No | Key-value pairs for storing additional structured information about the checkout session. |
| `line_items` | array | No | List of purchased items. Must retransmit the entire array when updating. Items can be retained (by ID), updated (ID + new values), added (price/price_data), or removed (omit ID). |
| `shipping_options` | array | No | Shipping rate options (maximum 5). |
| `collected_information` | object | No | Customer data collected within the session. Only applies to embedded or custom checkout sessions. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Coupon

**Slug:** `STRIPE_UPDATE_COUPON`

Updates a Stripe coupon's metadata, name, or currency options. Other coupon details (currency, duration, amount_off, percent_off) are, by design, not editable. Use when you need to modify coupon metadata, display name, or add new currency-specific discount amounts.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | Name of the coupon displayed to customers on invoices or receipts. Maximum length is 40 characters. Defaults to the coupon ID if not set. |
| `coupon` | string | Yes | The ID of the coupon to update. |
| `metadata` | object | No | Set of key-value pairs for storing additional information in a structured format. Individual keys can be unset by posting an empty value. All keys can be unset by posting an empty value to metadata. |
| `currency_options` | object | No | Coupons defined in each available currency option (amount-based coupons only). Each key must be a three-letter ISO currency code with a nested amount_off value. Only applicable for amount-based coupons. Note: You can only add new currencies, not modify existing currency options. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Customer

**Slug:** `STRIPE_UPDATE_CUSTOMER`

Updates an existing Stripe customer, identified by customer_id, with only the provided details; unspecified fields remain unchanged.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tax` | object | No | Specifies tax-related information for the customer. |
| `name` | string | No | The customer's full name or the business name. |
| `email` | string | No | The customer's email address. Updating this may trigger a verification email to the new address. |
| `phone` | string | No | The customer's primary phone number, preferably in E.164 format. |
| `coupon` | string | No | The ID of a coupon to apply to the customer. This coupon will be applied to the customer's subsequent invoices and subscriptions. |
| `address` | object | No | Defines the customer's primary billing address. |
| `balance` | integer | No | An integer representing the customer's account balance in the smallest currency unit (e.g., cents for USD). A positive value credits the customer's balance, and a negative value debits it. This balance will be applied to future invoices. |
| `metadata` | object | No | Key-value pairs for storing additional, unstructured information. Keys up to 40 characters, values up to 500. |
| `shipping` | object | No | Encapsulates the customer's shipping details. |
| `tax_exempt` | string | No | Specifies the customer's tax exemption status. Accepted values are 'none', 'exempt', or 'reverse'. Use 'reverse' for B2B transactions in the EU subject to reverse charge. |
| `customer_id` | string | Yes | The unique identifier of the Stripe customer to update. |
| `description` | string | No | An arbitrary string providing additional information about the customer, often used for internal notes. Maximum 5000 characters. |
| `default_source` | string | No | The ID of a card or bank account object to set as the customer's default payment source for charges and subscriptions. Deprecated in favor of `default_payment_method` for newer integrations. |
| `invoice_settings` | object | No | Defines default settings for invoices created for this customer. |
| `default_payment_method` | string | No | The ID of a PaymentMethod to set as the customer's default for subscriptions and invoices. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Customer Balance Transaction

**Slug:** `STRIPE_UPDATE_CUSTOMER_BALANCE_TXN`

Updates an existing customer balance transaction's description and metadata. Use when you need to modify the description or add/update metadata on a customer balance transaction. Most transaction fields are immutable after creation.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `metadata` | object | No | Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. |
| `customer_id` | string | Yes | The unique identifier for the customer. Must start with 'cus_' followed by alphanumeric characters. |
| `description` | string | No | An arbitrary string attached to the object. Often useful for displaying to users. Maximum length is 350 characters. |
| `transaction_id` | string | Yes | The unique identifier for the customer balance transaction to update. Must start with 'cbtxn_' followed by alphanumeric characters. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update customer bank account

**Slug:** `STRIPE_UPDATE_CUSTOMER_BANK_ACCOUNT`

Updates a specified bank account for a given customer. Use when you need to modify account holder details or metadata for a customer's bank account.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique identifier for the bank account source to update. Must start with 'ba_' followed by alphanumeric characters. |
| `customer` | string | Yes | The unique identifier for the customer. Must start with 'cus_' followed by alphanumeric characters. |
| `metadata` | object | No | Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to metadata. |
| `account_holder_name` | string | No | The name of the person or business that owns the bank account. |
| `account_holder_type` | string | No | The type of entity that holds the account. This can be either 'individual' or 'company'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update customer bank account

**Slug:** `STRIPE_UPDATE_CUSTOMER_BANK_ACCOUNT_SOURCE`

Updates a bank account source attached to a customer. Use when you need to modify editable attributes like account holder name, type, or metadata.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `metadata` | object | No | Key-value pairs for storing additional structured information. Individual keys or all keys can be unset by posting empty values. |
| `source_id` | string | Yes | The unique identifier of the bank account source to update. |
| `customer_id` | string | Yes | The unique identifier of the Stripe customer. |
| `account_holder_name` | string | No | The name of the person or business that owns the bank account. |
| `account_holder_type` | string ("individual" | "company") | No | Entity type holding the account. Either 'individual' or 'company'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update customer card

**Slug:** `STRIPE_UPDATE_CUSTOMER_CARD`

Tool to update a card for a specified customer. Use when you need to update card details including billing address, expiration, name, or metadata.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The ID of the card to update. |
| `name` | string | No | Cardholder name as it appears on the card. |
| `customer` | string | Yes | The ID of the customer whose card should be updated. |
| `exp_year` | string | No | Four-digit number representing the card's expiration year. |
| `metadata` | object | No | Set of key-value pairs for storing additional structured information about the card. |
| `exp_month` | string | No | Two-digit number representing the card's expiration month. |
| `address_zip` | string | No | ZIP or postal code for billing address. |
| `address_city` | string | No | City, district, suburb, town, or village for billing address. |
| `address_line1` | string | No | Street address, PO Box, or company name for billing address. |
| `address_line2` | string | No | Apartment, suite, unit, or building number for billing address. |
| `address_state` | string | No | State, county, province, or region for billing address. |
| `address_country` | string | No | Two-letter country code (ISO 3166-1 alpha-2) for billing address. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update customer source

**Slug:** `STRIPE_UPDATE_CUSTOMER_SOURCE`

Update a specified source for a given customer. Use when modifying card details, bank account information, or source metadata.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique identifier of the source to update. |
| `name` | string | No | Cardholder name. Maximum 5000 characters. |
| `owner` | object | No | Owner information for source objects. |
| `expand` | array | No | Specifies which fields in the response should be expanded. Each item maximum 5000 characters. |
| `customer` | string | Yes | The unique identifier of the customer. |
| `exp_year` | string | No | Four-digit number representing the card's expiration year. Maximum 5000 characters. |
| `metadata` | object | No | Set of key-value pairs to attach to the object. Useful for storing additional information. Individual keys can be unset by posting an empty value. All keys can be unset by posting an empty value for metadata. |
| `exp_month` | string | No | Two-digit number representing the card's expiration month. Maximum 5000 characters. |
| `address_zip` | string | No | ZIP or postal code. Maximum 5000 characters. |
| `address_city` | string | No | City, district, suburb, town, or village. Maximum 5000 characters. |
| `address_line1` | string | No | Address line 1 (e.g., street address, PO Box, or company name). Maximum 5000 characters. |
| `address_line2` | string | No | Address line 2 (e.g., apartment, suite, unit, or building). Maximum 5000 characters. |
| `address_state` | string | No | State, county, province, or region. Maximum 5000 characters. |
| `address_country` | string | No | Billing address country. Maximum 5000 characters. |
| `account_holder_name` | string | No | Name of the person or business that owns the bank account. Maximum 5000 characters. |
| `account_holder_type` | string ("company" | "individual") | No | Type of entity that holds the account. Can be 'company' or 'individual'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Customer Subscription

**Slug:** `STRIPE_UPDATE_CUSTOMER_SUBSCRIPTION`

Tool to update a subscription on a customer in Stripe. Use when modifying subscription items, billing settings, payment methods, or metadata. Requires both customer ID and subscription ID. Supports updating items, metadata, billing cycle, cancellation settings, and more.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `items` | array | No | List of subscription items to update (max 20). |
| `customer` | string | Yes | The ID of the customer whose subscription is being updated. |
| `metadata` | object | No | Set of key-value pairs to attach to the subscription. Can be used to store additional information. |
| `cancel_at` | string | No | Unix timestamp or empty string to cancel scheduled cancellation. |
| `trial_end` | string | No | Unix timestamp for trial end or 'now' to end immediately. |
| `description` | string | No | Subscription description, displayed to customer. |
| `off_session` | boolean | No | Indicates if customer is off-session during invoice payment attempt. |
| `automatic_tax` | object | No | Automatic tax settings for subscription. |
| `days_until_due` | integer | No | Days customer has to pay invoices (only for send_invoice collection method). |
| `default_source` | string | No | ID of default payment source or empty string to remove. |
| `proration_date` | integer | No | Unix timestamp for calculating prorations. |
| `trial_settings` | object | No | Trial settings configuration. |
| `trial_from_plan` | boolean | No | If true, applies plan's trial_period_days to subscription. |
| `invoice_settings` | object | No | Invoice settings for subscription. |
| `pause_collection` | string | No | Pause collection configuration or empty string to unpause. |
| `payment_behavior` | string ("allow_incomplete" | "default_incomplete" | "error_if_incomplete" | "pending_if_incomplete") | No | Payment behavior for subscription updates. |
| `collection_method` | string ("charge_automatically" | "send_invoice") | No | Collection method for subscription payments. |
| `billing_thresholds` | string | No | Billing thresholds configuration or empty string to remove. |
| `proration_behavior` | string ("always_invoice" | "create_prorations" | "none") | No | Proration behavior for subscription changes. |
| `billing_cycle_anchor` | string ("now" | "unchanged") | No | Billing cycle anchor values. |
| `cancel_at_period_end` | boolean | No | If true, subscription cancels at end of current period. If false, undoes scheduled cancellation. |
| `cancellation_details` | object | No | Details about subscription cancellation. |
| `default_payment_method` | string | No | ID of default payment method for the subscription. |
| `subscription_exposed_id` | string | Yes | The ID of the subscription to update. |
| `pending_invoice_item_interval` | string | No | Interval for billing pending invoice items or empty string to remove. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Dispute

**Slug:** `STRIPE_UPDATE_DISPUTE`

Tool to update a Stripe dispute by submitting evidence or updating metadata. Use when responding to payment disputes to provide documentation countering the dispute claim.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `submit` | boolean | No | When true, submits evidence immediately to the bank; when false, stages evidence for later submission. Default: true. |
| `dispute` | string | Yes | The ID of the dispute to update. |
| `evidence` | object | No | Documentation to counter the dispute. |
| `metadata` | object | No | Custom key-value pairs for storing structured data about the dispute. Individual keys can be unset by posting an empty value. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update entitlements feature

**Slug:** `STRIPE_UPDATE_ENTITLEMENT_FEATURE`

Tool to update a feature's properties or deactivate it. Use when you need to modify an existing entitlements feature's metadata, name, or active status.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique identifier of the feature to update. This ID typically starts with 'feat_'. |
| `name` | string | No | The feature's internal name for your own identification purposes, not meant to be displayed to customers. Maximum length is 80 characters. |
| `active` | boolean | No | When set to false, prevents the feature from being attached to new products and excludes it from the features list endpoint. When true, the feature is active and available. |
| `metadata` | object | No | Set of key-value pairs for storing additional structured information about the feature. You can specify up to 50 keys, with key names up to 40 characters long and values up to 500 characters long. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Event Destination

**Slug:** `STRIPE_UPDATE_EVENT_DESTINATION`

Updates a v2 Event Destination with new values for specified parameters. Use when you need to modify an event destination's name, description, enabled events, webhook URL, or metadata.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | Event destination name. |
| `include` | array | No | Additional fields to include in the response. Currently supports 'webhook_endpoint.url'. |
| `metadata` | object | No | Metadata. Keys can be up to 40 characters long. Values can be unset by posting an empty value. |
| `description` | string | No | An optional description of what the event destination is used for. |
| `enabled_events` | array | No | The list of events to enable for this endpoint. Use ['*'] to receive all events. |
| `webhook_endpoint` | object | No | Webhook endpoint configuration for request. |
| `event_destination_id` | string | Yes | Unique identifier for the event destination to update. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update External Account

**Slug:** `STRIPE_UPDATE_EXTERNAL_ACCOUNT`

Updates the metadata, account holder name, account holder type of an external bank account or card belonging to a connected account and optionally sets it as the default for its currency. Use when you need to modify external account details for a connected account, such as updating the account holder information or setting it as the default external account. Other bank account details are not editable by design. Requires the 'account' parameter (the Stripe account ID) and 'id' parameter (the external account ID). You can only update bank accounts when account.controller.requirement_collection is 'application', which includes Custom accounts.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique identifier of the external account to update. Must start with 'ba_' (bank account) or 'ca_' (card). |
| `name` | string | No | Cardholder name. Maximum 5000 characters. |
| `expand` | array | No | Specifies which fields in the response should be expanded. Each item maximum 5000 characters. |
| `account` | string | Yes | The unique identifier of the Stripe account. Must start with 'acct_' followed by alphanumeric characters. |
| `metadata` | object | No | Set of key-value pairs to attach to the object. Useful for storing additional information. Individual keys can be unset by posting an empty value. All keys can be unset by posting an empty value for metadata. |
| `address_zip` | string | No | ZIP or postal code. Maximum 5000 characters. |
| `account_type` | string ("checking" | "futsu" | "savings" | "toza") | No | The bank account type. This can only be 'checking' or 'savings' in most countries. In Japan, this can only be 'futsu' or 'toza'. |
| `address_city` | string | No | City/District/Suburb/Town/Village. Maximum 5000 characters. |
| `address_line1` | string | No | Address line 1 (Street address/PO Box/Company name). Maximum 5000 characters. |
| `address_line2` | string | No | Address line 2 (Apartment/Suite/Unit/Building). Maximum 5000 characters. |
| `address_state` | string | No | State/County/Province/Region. Maximum 5000 characters. |
| `address_country` | string | No | Billing address country, if provided when creating card. Maximum 5000 characters. |
| `account_holder_name` | string | No | The name of the person or business that owns the bank account. Maximum 5000 characters. |
| `account_holder_type` | string ("company" | "individual") | No | The type of entity that holds the account. This can be either 'individual' or 'company'. |
| `default_for_currency` | boolean | No | When set to true, this becomes the default external account for its currency. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Invoice

**Slug:** `STRIPE_UPDATE_INVOICE`

Updates a draft Stripe invoice. Use when modifying invoice details before finalization. Once finalized, monetary values and collection_method become immutable.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `footer` | string | No | Footer text on invoice. |
| `issuer` | object | No | Connected account issuing the invoice. |
| `number` | string | No | Invoice number (max 26 chars). |
| `invoice` | string | Yes | The ID of the invoice to update. |
| `due_date` | integer | No | Payment due date (Unix timestamp, send_invoice only, draft only). |
| `metadata` | object | No | Key-value pairs for structured data storage. |
| `discounts` | array | No | Discounts to apply to the invoice. |
| `rendering` | object | No | Options for customizing the invoice PDF appearance. |
| `description` | string | No | Memo displayed to users. |
| `auto_advance` | boolean | No | Controls automatic collection, finalization, and reconciliation. |
| `effective_at` | integer | No | Date when invoice takes effect (Unix timestamp). |
| `on_behalf_of` | string | No | Account for which payment funds are intended. |
| `automatic_tax` | object | No | Configuration for Stripe's automatic tax calculation on the invoice. |
| `custom_fields` | array | No | Up to 4 custom fields to display on the invoice. |
| `shipping_cost` | object | No | Shipping cost for the invoice. |
| `transfer_data` | object | No | For Stripe Connect, details of the destination account for transferring funds. |
| `days_until_due` | integer | No | Days until payment due (send_invoice only, draft only). |
| `default_source` | string | No | Payment source ID for the customer. |
| `account_tax_ids` | array | No | Tax IDs associated with the invoice. |
| `payment_settings` | object | No | Settings for the invoice payment process. |
| `shipping_details` | object | No | Shipping details for the invoice recipient. |
| `collection_method` | string | No | Either 'charge_automatically' or 'send_invoice' (draft only). |
| `default_tax_rates` | array | No | Tax rates applied to line items without explicit rates. |
| `statement_descriptor` | string | No | Additional credit card statement information. |
| `application_fee_amount` | integer | No | Fee in cents transferred to application owner's account. |
| `default_payment_method` | string | No | Payment method ID for the customer. |
| `automatically_finalizes_at` | integer | No | Scheduled finalization time (Unix timestamp). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update invoice item

**Slug:** `STRIPE_UPDATE_INVOICEITEM`

Updates an invoice item on a draft invoice. Use when modifying invoice item properties like amount, description, discounts, or tax settings before invoice finalization.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `amount` | integer | No | The integer amount in cents of the charge to be applied to the upcoming invoice. To apply a credit, pass a negative value. |
| `period` | object | No | Time period for invoice item. |
| `pricing` | object | No | Pricing details for the invoice item. |
| `metadata` | object | No | Set of key-value pairs that you can attach to an object. This can be useful for storing additional information in a structured format. Individual keys can be unset by posting an empty value. All keys can be unset by posting an empty value to metadata. |
| `quantity` | integer | No | Non-negative integer. The quantity of units for the invoice item. |
| `tax_code` | string | No | A tax code ID. |
| `discounts` | array | No | The coupons, promotion codes & existing discounts which apply to the invoice item. Item discounts are applied before invoice discounts. Pass an empty array to remove previously-defined discounts. |
| `tax_rates` | array | No | The tax rates which apply to the invoice item. When set, the default_tax_rates on the invoice do not apply to this invoice item. Pass an empty array to remove previously-defined tax rates. |
| `price_data` | object | No | Data to create a new price inline. |
| `description` | string | No | An arbitrary string which you can attach to the invoice item. The description is displayed in the invoice for easy tracking. |
| `discountable` | boolean | No | Controls whether discounts apply to this invoice item. Defaults to false for prorations or negative invoice items, and true for all other invoice items. |
| `tax_behavior` | string | No | Only required if a default tax behavior was not provided in the Stripe Tax settings. Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of inclusive, exclusive, or unspecified. |
| `invoiceitem_id` | string | Yes | The ID of the invoice item to update. Must start with 'ii_' followed by alphanumeric characters. |
| `unit_amount_decimal` | string | No | Same as unit_amount, but accepts a decimal value with at most 12 decimal places. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Bulk update invoice line items

**Slug:** `STRIPE_UPDATE_INVOICE_LINES`

Tool to bulk update multiple line items on a draft invoice. Use when you need to modify descriptions, amounts, quantities, discounts, or other properties of existing line items on an invoice that is still in draft status. This operation only works with draft invoices; finalized invoices cannot be updated using this endpoint.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `lines` | array | Yes | List of line items to update. Each line item must have an 'id' field to identify which line item to update. |
| `invoice` | string | Yes | The ID of the invoice to update line items for. The invoice must be in 'draft' status. |
| `invoice_metadata` | object | No | Set of key-value pairs to attach to the invoice object itself. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Payment Intent

**Slug:** `STRIPE_UPDATE_PAYMENT_INTENT`

Updates a Stripe PaymentIntent with new values for specified parameters; note that if `currency` is updated, `amount` might also be required, and certain updates (e.g., to `payment_method`) can necessitate re-confirmation by the customer.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `amount` | integer | No | The amount intended to be collected by this PaymentIntent, in the smallest currency unit (e.g., cents for USD). This is a positive integer. |
| `currency` | string | No | The three-letter ISO currency code, in lowercase (e.g., 'usd', 'eur'). Must be a supported currency. |
| `customer` | string | No | The ID of the Customer this PaymentIntent should be associated with. |
| `metadata` | object | No | A set of key-value pairs to store additional structured information about the PaymentIntent. Keys can be up to 40 characters long and values can be up to 500 characters long. |
| `shipping` | object | No | Shipping information for the PaymentIntent. This is a dictionary that should contain the recipient's `name`, `phone`, and an `address` object with `line1`, `line2` (optional), `city`, `state`, `postal_code`, and `country`. |
| `description` | string | No | An arbitrary string providing a description of the PaymentIntent, often displayed to users. |
| `receipt_email` | string | No | The email address to which Stripe will send a receipt for a successful payment.  |
| `payment_method` | string | No | ID of the PaymentMethod to attach to this PaymentIntent. |
| `payment_intent_id` | string | Yes | The unique identifier of the PaymentIntent to be updated. |
| `setup_future_usage` | string | No | Indicates if you intend to use the payment method attached to this PaymentIntent for future payments. Allowed values are 'on_session' or 'off_session'. |
| `statement_descriptor` | string | No | String for customer's credit card statement (max 22 characters). |
| `statement_descriptor_suffix` | string | No | Additional info for customer's card statement, appended to `statement_descriptor` (max 22 characters). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Payment Link

**Slug:** `STRIPE_UPDATE_PAYMENT_LINK`

Updates an existing payment link with new configuration details. Use when modifying payment link settings, tax configurations, custom fields, metadata, or post-completion behavior.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `active` | boolean | No | Whether the payment link URL is active and can be used. |
| `metadata` | object | No | Key-value pairs for storing additional information. |
| `line_items` | array | No | Line items being sold (up to 20). |
| `custom_text` | object | No | Custom text to display on the payment page. |
| `submit_type` | string | No | Transaction type display: 'auto', 'book', 'donate', 'pay', or 'subscribe'. |
| `payment_link` | string | Yes | The ID of the payment link to update. |
| `restrictions` | object | No | Usage restrictions for the payment link. |
| `automatic_tax` | object | No | Automatic tax calculation configuration. |
| `custom_fields` | array | No | Custom form fields to display (up to 3). |
| `name_collection` | object | No | Configuration for collecting customer names. |
| `after_completion` | object | No | Post-purchase behavior configuration. |
| `inactive_message` | string | No | Message displayed when link is inactive (max 500 characters). |
| `invoice_creation` | object | No | Invoice creation configuration. |
| `customer_creation` | string | No | Customer object creation behavior: 'always' or 'if_required'. |
| `subscription_data` | object | No | Subscription configuration for the payment link. |
| `tax_id_collection` | object | No | Configuration for tax ID collection. |
| `payment_intent_data` | object | No | PaymentIntent configuration for the payment link. |
| `payment_method_types` | array | No | List of accepted payment method types. |
| `allow_promotion_codes` | boolean | No | Whether the payment link accepts promotion codes. |
| `phone_number_collection` | object | No | Configuration for phone number collection. |
| `payment_method_collection` | string | No | Payment method collection approach: 'always' or 'if_required'. |
| `billing_address_collection` | string | No | Billing address collection approach: 'auto' or 'required'. |
| `shipping_address_collection` | object | No | Configuration for shipping address collection. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Payment Method

**Slug:** `STRIPE_UPDATE_PAYMENT_METHOD`

Updates an existing PaymentMethod object in Stripe. Use when you need to modify billing details, expiration dates, or metadata for a payment method. The payment method must be attached to a customer before updates can be applied.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `card` | object | No | Card details for card-type payment methods. |
| `payto` | object | No | PayTo payment method details. |
| `metadata` | object | No | Key-value pairs for storing additional structured data. Post an empty object to clear all metadata. |
| `allow_redisplay` | string ("always" | "limited" | "unspecified") | No | Controls whether the payment method displays in checkout flows. Options: always, limited, unspecified. |
| `billing_details` | object | No | Billing information associated with the PaymentMethod. |
| `us_bank_account` | object | No | US bank account details. |
| `payment_method_id` | string | Yes | The unique identifier of the payment method to update. Must be attached to a customer. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update a price

**Slug:** `STRIPE_UPDATE_PRICE`

Updates a Stripe price by setting passed parameter values; unspecified parameters remain unchanged. Use when you need to modify price metadata, active status, lookup key, or nickname. Note: Price amounts cannot be modified via API.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `price` | string | Yes | The ID of the price to update. |
| `active` | boolean | No | Whether the price can be used for new purchases. Defaults to true. |
| `metadata` | object | No | Key-value pairs for storing additional information. Individual keys can be unset by posting an empty value. All keys can be unset by posting an empty value to metadata. |
| `nickname` | string | No | Internal price description (hidden from customers). |
| `lookup_key` | string | No | Retrieval identifier (max 200 characters). |
| `tax_behavior` | string | No | Tax classification: 'inclusive', 'exclusive', or 'unspecified'. Once specified, it cannot be changed. |
| `currency_options` | object | No | Per-currency pricing configuration. Keys must be ISO 4217 three-letter currency codes. |
| `transfer_lookup_key` | boolean | No | When true, atomically moves lookup key from another price to this one. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update product

**Slug:** `STRIPE_UPDATE_PRODUCT`

Tool to update an existing product in Stripe. Use when you need to modify product details like name, description, pricing, or availability.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique identifier of the product to update. |
| `url` | string | No | A URL of a publicly-accessible webpage for this product. |
| `name` | string | No | The product's name, meant to be displayable to the customer. |
| `active` | boolean | No | Whether the product is available for purchase. Set to false to archive. |
| `images` | array | No | A list of up to 8 URLs of images for this product, meant to be displayable to the customer. |
| `metadata` | object | No | Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to metadata. |
| `tax_code` | string | No | A tax code ID for determining tax rates on sales of this product. |
| `shippable` | boolean | No | Whether this product is shipped (i.e., physical goods). |
| `unit_label` | string | No | A label that represents units of this product. When set, this will be included in customers' receipts, invoices, Checkout, and the customer portal. Use singular form. Up to 12 characters. |
| `description` | string | No | The product's description, meant to be displayable to the customer. Use this field to optionally store a long form explanation of the product being sold for your own rendering purposes. |
| `default_price` | string | No | The ID of the Price object that is the default price for this product. |
| `marketing_features` | array | No | A list of up to 15 marketing features for this product. These are displayed in pricing tables. |
| `package_dimensions` | object | No | The dimensions of the product for shipping purposes. |
| `statement_descriptor` | string | No | An arbitrary string to be displayed on your customer's credit card or bank statement. While most banks display this information consistently, some may display it incorrectly or not at all. This may be up to 22 characters. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Promotion Code

**Slug:** `STRIPE_UPDATE_PROMOTION_CODE`

Updates an existing Stripe promotion code by setting the values of the parameters passed. Use when you need to activate/deactivate a promotion code, update its metadata, or modify redemption restrictions. Most promotion code fields are intentionally non-editable after creation.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The ID of the promotion code to update. |
| `active` | boolean | No | Whether the promotion code is currently active. Set to true to reactivate (requires a valid coupon and redeemable status), or false to deactivate. |
| `metadata` | object | No | Set of key-value pairs for storing additional structured information. Keys can be up to 40 characters, values up to 500 characters. Individual keys can be unset by posting an empty value. |
| `restrictions` | object | No | Settings controlling promotion code redemption conditions. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Quote

**Slug:** `STRIPE_UPDATE_QUOTE`

Tool to update an existing Stripe quote with new values. Use when modifying quote details like description, line items, metadata, or other quote parameters.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `quote` | string | Yes | The ID of the quote to update. |
| `footer` | string | No | Quote PDF footer text (max 500 characters). |
| `header` | string | No | Quote PDF header text (max 50 characters). |
| `customer` | string | No | Customer ID. Required before finalizing; cannot be changed once set. |
| `metadata` | object | No | Custom key-value pairs for structured data storage. |
| `discounts` | array | No | Applied discounts using coupon, discount ID, or promotion code. |
| `expires_at` | integer | No | Future Unix timestamp when draft/open quote auto-cancels. |
| `line_items` | array | No | Quoted products and services with quantities and costs. |
| `description` | string | No | Quote PDF description (max 500 characters). |
| `on_behalf_of` | string | No | Account to charge on behalf of. |
| `automatic_tax` | object | No | Automatic tax computation settings. |
| `transfer_data` | object | No | Automatic transfer configuration per invoice. |
| `customer_account` | string | No | Account ID. Required before finalizing; immutable after setting. |
| `invoice_settings` | object | No | Invoice billing configuration. |
| `collection_method` | string | No | Payment method: 'charge_automatically' or 'send_invoice'. Defaults to automatic. |
| `default_tax_rates` | array | No | Tax rates applied to line items without specific rates. |
| `subscription_data` | object | No | Subscription/schedule configuration data. |
| `application_fee_amount` | integer | No | Fee amount transferred to application owner's Stripe account. Cannot be used with recurring line items. |
| `application_fee_percent` | number | No | Percentage (0-100, max 2 decimals) of subscription invoice transferred to app owner. Requires at least one recurring line item. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Source

**Slug:** `STRIPE_UPDATE_SOURCE`

Updates a Stripe source with specified parameters. Use when you need to modify source metadata, owner information, or mandate details. NOTE: The Stripe Sources API is deprecated. Stripe recommends migrating to the Payment Methods API for new integrations. This action only works with sources created before the API deprecation.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `owner` | object | No | Payment instrument holder information. |
| `amount` | integer | No | Monetary value linked to the source. |
| `source` | string | Yes | The unique identifier of the source object to be updated. |
| `mandate` | object | No | Bank debit authorization details. |
| `metadata` | object | No | Set of key-value pairs for storing additional information. |
| `source_order` | object | No | Items and shipping details for transactional sources. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Subscription

**Slug:** `STRIPE_UPDATE_SUBSCRIPTION`

Updates an existing, non-canceled Stripe subscription by its ID, ensuring all referenced entity IDs (e.g., prices, coupons) are valid and automatic tax liability is correctly specified if enabled.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `items` | array | No | List of subscription item updates (max 20). Item `id` usually required for modification. |
| `metadata` | object | No | Key-value pairs for custom information (max 50 keys: 40 chars; values: 500 chars). Replaces existing; empty dict removes all. |
| `description` | string | No | Arbitrary string for user display or internal tracking. |
| `automatic_tax` | object | No | Stripe Tax settings for automatic tax calculation. `liability` may be required if `enabled` is true. |
| `subscription_id` | string | Yes | Unique identifier of the subscription to update. |
| `payment_behavior` | string ("allow_incomplete" | "error_if_incomplete" | "pending_if_incomplete") | No | Payment handling for invoices. |
| `collection_method` | string ("charge_automatically" | "send_invoice") | No | How invoices are paid. |
| `proration_behavior` | string ("create_prorations" | "none" | "always_invoice") | No | How to handle prorations on changes. |
| `billing_cycle_anchor` | string | No | Unix timestamp (seconds) or 'now' to anchor billing cycle and renewal. Changes may cause proration. |
| `cancel_at_period_end` | boolean | No | If true, schedules cancellation at current period's end; if false, undoes scheduled cancellation. |
| `default_payment_method` | string | No | ID of the default payment method; updates subscription's default payment source if provided. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Subscription Schedule

**Slug:** `STRIPE_UPDATE_SUBSCRIPTION_SCHEDULE`

Tool to update an existing subscription schedule in Stripe. Use when you need to modify phases, default settings, metadata, or end behavior of a subscription schedule.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `phases` | array | No | List of subscription phases with distinct configurations. |
| `metadata` | object | No | Custom key-value pairs for storing additional information. |
| `schedule` | string | Yes | The ID of the subscription schedule to update. |
| `end_behavior` | string ("release" | "cancel") | No | How to handle underlying subscription when schedule ends: 'release' (default) or 'cancel'. |
| `default_settings` | object | No | Default settings for subscription schedule. |
| `proration_behavior` | string ("create_prorations" | "always_invoice" | "none") | No | How to handle prorations for billing configuration changes: 'create_prorations' (default), 'always_invoice', or 'none'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Tax Registration

**Slug:** `STRIPE_UPDATE_TAX_REGISTRATION`

Tool to update an existing tax registration in Stripe. Use when you need to modify the active_from or expires_at fields of a registration. Registrations cannot be deleted after creation; use expires_at to terminate them instead.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Unique identifier for the tax registration object to update. |
| `expires_at` | string | No | Time at which the registration expires. Can be 'now' or a Unix timestamp in seconds. If not set, the registration will remain active indefinitely. |
| `active_from` | string | No | Time at which the registration becomes active. Can be 'now' or a Unix timestamp in seconds. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Tax Settings

**Slug:** `STRIPE_UPDATE_TAX_SETTINGS`

Updates Stripe Tax Settings parameters used in tax calculations. Use to configure default tax behavior, tax codes, and business head office location for tax purposes.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `defaults` | object | No | Default tax configuration settings. |
| `head_office` | object | No | The place where your business is located for tax purposes. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Terminal Location

**Slug:** `STRIPE_UPDATE_TERMINAL_LOCATION`

Updates a Terminal Location by modifying specified parameters. Use when you need to change location details like display name, address, phone, or metadata.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `phone` | string | No | The phone number of the location. |
| `address` | object | No | The full address of the location. |
| `location` | string | Yes | The identifier of the location to update. Must start with 'tml_' followed by alphanumeric characters. |
| `metadata` | object | No | Set of key-value pairs for storing additional information. Individual keys can be unset by posting an empty value. All keys can be unset by posting an empty value to metadata. |
| `address_kana` | object | No | Kana variation of the address (Japan only). |
| `display_name` | string | No | A name for the location. |
| `address_kanji` | object | No | Kanji variation of the address (Japan only). |
| `display_name_kana` | string | No | Kana variation of the display name (Japan only). |
| `display_name_kanji` | string | No | Kanji variation of the display name (Japan only). |
| `configuration_overrides` | string | No | Configuration ID to be used to customize all readers at this location. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Terminal Reader

**Slug:** `STRIPE_UPDATE_TERMINAL_READER`

Tool to update a Terminal Reader object by setting parameter values. Use when you need to modify the label or metadata of an existing reader device.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `label` | string | No | Custom label name for the reader to help distinguish it from other readers. Use this to set a friendly name. |
| `reader` | string | Yes | The unique identifier of the Terminal Reader to update. Must start with 'tmr_' followed by alphanumeric characters. |
| `metadata` | object | No | Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to metadata. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Validate payment method domain

**Slug:** `STRIPE_VALIDATE_PAYMENT_METHOD_DOMAIN`

Tool to validate an existing payment method domain in Stripe to activate payment methods. Use when additional registration steps need to be completed before a payment method can be used in Elements or Embedded Checkout.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `payment_method_domain` | string | Yes | The payment method domain identifier to validate (e.g., pmd_1Nnrer2eZvKYlo2Cips79tWl). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Verify microdeposits on setup intent

**Slug:** `STRIPE_VERIFY_MICRODEPOSITS`

Verifies microdeposits on a SetupIntent object to confirm bank account ownership. Use when customer needs to verify their bank account using either amounts or descriptor code from microdeposits.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `amounts` | array | No | Two positive integers, in cents, equal to the values of the microdeposits sent to the bank account. Provide this OR descriptor_code. |
| `descriptor_code` | string | No | A six-character code starting with SM present in the microdeposit sent to the bank account. Provide this OR amounts. |
| `setup_intent_id` | string | Yes | The unique identifier of the SetupIntent to verify microdeposits for. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Verify microdeposits on payment intent

**Slug:** `STRIPE_VERIFY_MICRODEPOSITS_PAYMENT_INTENT`

Verifies microdeposits on a PaymentIntent object by matching deposit amounts or descriptor code. Use after microdeposits are sent to complete bank account verification.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `intent` | string | Yes | The ID of the PaymentIntent to verify microdeposits for. |
| `amounts` | array | No | Two positive integers, in cents, equal to the values of the microdeposits sent to the bank account. Used to verify account ownership by matching the deposit amounts. Either amounts or descriptor_code must be provided, but not both. |
| `descriptor_code` | string | No | A six-character code starting with SM present in the microdeposit sent to the bank account. This is an alternative verification method to using amounts. Either amounts or descriptor_code must be provided, but not both. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Void a credit note

**Slug:** `STRIPE_VOID_CREDIT_NOTE`

Marks a credit note as void. Use when you need to void a credit note and reverse its adjustments.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The identifier of the credit note to void. Typically starts with 'cn_'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Void an invoice

**Slug:** `STRIPE_VOID_INVOICE`

Tool to void a finalized Stripe invoice. Use when you need to mark an invoice as uncollectible while maintaining a paper trail. Voiding an invoice is permanent and cannot be undone. Only finalized invoices can be voided; draft invoices should be deleted instead.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `invoice_id` | string | Yes | The identifier of the invoice to void. Must be a finalized invoice. Draft invoices should be deleted instead of voided. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Who Am I

**Slug:** `STRIPE_WHO_AM_I`

Return the connected Stripe account (account id, dashboard name). Identity is account-level.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |


## Triggers

### Charge Captured

**Slug:** `STRIPE_CHARGE_CAPTURED`

**Type:** webhook

Occurs whenever a previously uncaptured charge is captured.

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `account` | string | No | The connected account the event belongs to. Present only for events forwarded from a Stripe Connect account. |
| `data` | object | No | Event content — the resource is on `data.object`. |
| `livemode` | boolean | No | False when the event came from Stripe test mode. |

### Charge Dispute Closed

**Slug:** `STRIPE_CHARGE_DISPUTE_CLOSED`

**Type:** webhook

Occurs when a dispute is closed and the dispute status changes to `lost`, `warning_closed`, or `won`.

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `account` | string | No | The connected account the event belongs to. Present only for events forwarded from a Stripe Connect account. |
| `data` | object | No | Event content — the resource is on `data.object`. |
| `livemode` | boolean | No | False when the event came from Stripe test mode. |

### Charge Dispute Created

**Slug:** `STRIPE_CHARGE_DISPUTE_CREATED`

**Type:** webhook

Occurs whenever a customer disputes a charge with their bank.

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `account` | string | No | The connected account the event belongs to. Present only for events forwarded from a Stripe Connect account. |
| `data` | object | No | Event content — the resource is on `data.object`. |
| `livemode` | boolean | No | False when the event came from Stripe test mode. |

### Charge Dispute Updated

**Slug:** `STRIPE_CHARGE_DISPUTE_UPDATED`

**Type:** webhook

Occurs when the dispute is updated (usually with evidence).

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `account` | string | No | The connected account the event belongs to. Present only for events forwarded from a Stripe Connect account. |
| `data` | object | No | Event content — the resource is on `data.object`. |
| `livemode` | boolean | No | False when the event came from Stripe test mode. |

### Charge Failed

**Slug:** `STRIPE_CHARGE_FAILED`

**Type:** webhook

Occurs whenever a failed charge attempt occurs.

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `account` | string | No | The connected account the event belongs to. Present only for events forwarded from a Stripe Connect account. |
| `data` | object | No | Event content — the resource is on `data.object`. |
| `livemode` | boolean | No | False when the event came from Stripe test mode. |

### Charge Refunded

**Slug:** `STRIPE_CHARGE_REFUNDED`

**Type:** webhook

Occurs whenever a charge is refunded, including partial refunds. Listen to `refund.created` for information about the refund.

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `account` | string | No | The connected account the event belongs to. Present only for events forwarded from a Stripe Connect account. |
| `data` | object | No | Event content — the resource is on `data.object`. |
| `livemode` | boolean | No | False when the event came from Stripe test mode. |

### Charge Refund Updated

**Slug:** `STRIPE_CHARGE_REFUND_UPDATED`

**Type:** webhook

Occurs whenever a refund is updated on selected payment methods. For updates on all refunds, listen to `refund.updated` instead.

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `account` | string | No | The connected account the event belongs to. Present only for events forwarded from a Stripe Connect account. |
| `data` | object | No | Event content — the resource is on `data.object`. |
| `livemode` | boolean | No | False when the event came from Stripe test mode. |

### Charge Succeeded

**Slug:** `STRIPE_CHARGE_SUCCEEDED`

**Type:** webhook

Occurs whenever a charge is successful.

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `account` | string | No | The connected account the event belongs to. Present only for events forwarded from a Stripe Connect account. |
| `data` | object | No | Event content — the resource is on `data.object`. |
| `livemode` | boolean | No | False when the event came from Stripe test mode. |

### Checkout Session Async Payment Failed

**Slug:** `STRIPE_CHECKOUT_SESSION_ASYNC_PAYMENT_FAILED`

**Type:** webhook

Occurs when a payment intent using a delayed payment method fails.

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `account` | string | No | The connected account the event belongs to. Present only for events forwarded from a Stripe Connect account. |
| `data` | object | No | Event content — the resource is on `data.object`. |
| `livemode` | boolean | No | False when the event came from Stripe test mode. |

### Checkout Session Async Payment Succeeded

**Slug:** `STRIPE_CHECKOUT_SESSION_ASYNC_PAYMENT_SUCCEEDED`

**Type:** webhook

Occurs when a payment intent using a delayed payment method finally succeeds.

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `account` | string | No | The connected account the event belongs to. Present only for events forwarded from a Stripe Connect account. |
| `data` | object | No | Event content — the resource is on `data.object`. |
| `livemode` | boolean | No | False when the event came from Stripe test mode. |

### Checkout Session Completed

**Slug:** `STRIPE_CHECKOUT_SESSION_COMPLETED`

**Type:** webhook

Occurs when a Checkout Session has been successfully completed.

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `account` | string | No | The connected account the event belongs to. Present only for events forwarded from a Stripe Connect account. |
| `data` | object | No | Event content — the resource is on `data.object`. |
| `livemode` | boolean | No | False when the event came from Stripe test mode. |

### Checkout Session Expired

**Slug:** `STRIPE_CHECKOUT_SESSION_EXPIRED`

**Type:** webhook

Occurs when a Checkout Session is expired.

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `account` | string | No | The connected account the event belongs to. Present only for events forwarded from a Stripe Connect account. |
| `data` | object | No | Event content — the resource is on `data.object`. |
| `livemode` | boolean | No | False when the event came from Stripe test mode. |

### Customer Created

**Slug:** `STRIPE_CUSTOMER_CREATED`

**Type:** webhook

Occurs whenever a new customer is created.

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `account` | string | No | The connected account the event belongs to. Present only for events forwarded from a Stripe Connect account. |
| `data` | object | No | Event content — the resource is on `data.object`. |
| `livemode` | boolean | No | False when the event came from Stripe test mode. |

### Customer Deleted

**Slug:** `STRIPE_CUSTOMER_DELETED`

**Type:** webhook

Occurs whenever a customer is deleted.

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `account` | string | No | The connected account the event belongs to. Present only for events forwarded from a Stripe Connect account. |
| `data` | object | No | Event content — the resource is on `data.object`. |
| `livemode` | boolean | No | False when the event came from Stripe test mode. |

### Customer Subscription Created

**Slug:** `STRIPE_CUSTOMER_SUBSCRIPTION_CREATED`

**Type:** webhook

Occurs whenever a customer is signed up for a new plan.

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `account` | string | No | The connected account the event belongs to. Present only for events forwarded from a Stripe Connect account. |
| `data` | object | No | Event content — the resource is on `data.object`. |
| `livemode` | boolean | No | False when the event came from Stripe test mode. |

### Customer Subscription Deleted

**Slug:** `STRIPE_CUSTOMER_SUBSCRIPTION_DELETED`

**Type:** webhook

Occurs whenever a customer's subscription ends.

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `account` | string | No | The connected account the event belongs to. Present only for events forwarded from a Stripe Connect account. |
| `data` | object | No | Event content — the resource is on `data.object`. |
| `livemode` | boolean | No | False when the event came from Stripe test mode. |

### Customer Subscription Trial Will End

**Slug:** `STRIPE_CUSTOMER_SUBSCRIPTION_TRIAL_WILL_END`

**Type:** webhook

Occurs three days before a subscription's trial period is scheduled to end, or immediately when a trial is ended early (for example, with `trial_end=now` or when a Customer Portal plan change ends a trial). If a trial is shortened so that fewer than three days remain, this event can fire immediately, including during the same transaction that collects payment. Before sending payment-reminder communications from this webhook, check the subscription status and latest invoice to determine whether payment has already been collected.

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `account` | string | No | The connected account the event belongs to. Present only for events forwarded from a Stripe Connect account. |
| `data` | object | No | Event content — the resource is on `data.object`. |
| `livemode` | boolean | No | False when the event came from Stripe test mode. |

### Customer Subscription Updated

**Slug:** `STRIPE_CUSTOMER_SUBSCRIPTION_UPDATED`

**Type:** webhook

Occurs whenever a subscription changes (e.g., switching from one plan to another, or changing the status from trial to active).

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `account` | string | No | The connected account the event belongs to. Present only for events forwarded from a Stripe Connect account. |
| `data` | object | No | Event content — the resource is on `data.object`. |
| `livemode` | boolean | No | False when the event came from Stripe test mode. |

### Customer Updated

**Slug:** `STRIPE_CUSTOMER_UPDATED`

**Type:** webhook

Occurs whenever any property of a customer changes.

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `account` | string | No | The connected account the event belongs to. Present only for events forwarded from a Stripe Connect account. |
| `data` | object | No | Event content — the resource is on `data.object`. |
| `livemode` | boolean | No | False when the event came from Stripe test mode. |

### Invoice Created

**Slug:** `STRIPE_INVOICE_CREATED`

**Type:** webhook

Occurs whenever a new invoice is created. To learn how webhooks can be used with this event, and how they can affect it, see Using Webhooks with Subscriptions.

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `account` | string | No | The connected account the event belongs to. Present only for events forwarded from a Stripe Connect account. |
| `data` | object | No | Event content — the resource is on `data.object`. |
| `livemode` | boolean | No | False when the event came from Stripe test mode. |

### Invoice Finalized

**Slug:** `STRIPE_INVOICE_FINALIZED`

**Type:** webhook

Occurs whenever a draft invoice is finalized and updated to be an open invoice.

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `account` | string | No | The connected account the event belongs to. Present only for events forwarded from a Stripe Connect account. |
| `data` | object | No | Event content — the resource is on `data.object`. |
| `livemode` | boolean | No | False when the event came from Stripe test mode. |

### Invoiceitem Created

**Slug:** `STRIPE_INVOICEITEM_CREATED`

**Type:** webhook

Occurs whenever an invoice item is created.

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `account` | string | No | The connected account the event belongs to. Present only for events forwarded from a Stripe Connect account. |
| `data` | object | No | Event content — the resource is on `data.object`. |
| `livemode` | boolean | No | False when the event came from Stripe test mode. |

### Invoice Paid

**Slug:** `STRIPE_INVOICE_PAID`

**Type:** webhook

Occurs whenever an invoice payment attempt succeeds or an invoice is marked as paid out-of-band.

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `account` | string | No | The connected account the event belongs to. Present only for events forwarded from a Stripe Connect account. |
| `data` | object | No | Event content — the resource is on `data.object`. |
| `livemode` | boolean | No | False when the event came from Stripe test mode. |

### Invoice Payment Failed

**Slug:** `STRIPE_INVOICE_PAYMENT_FAILED`

**Type:** webhook

Occurs whenever an invoice payment attempt fails, due to either a declined payment, including soft decline, or to the lack of a stored payment method.

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `account` | string | No | The connected account the event belongs to. Present only for events forwarded from a Stripe Connect account. |
| `data` | object | No | Event content — the resource is on `data.object`. |
| `livemode` | boolean | No | False when the event came from Stripe test mode. |

### Invoice Payment Succeeded

**Slug:** `STRIPE_INVOICE_PAYMENT_SUCCEEDED`

**Type:** webhook

Occurs whenever an invoice payment attempt succeeds.

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `account` | string | No | The connected account the event belongs to. Present only for events forwarded from a Stripe Connect account. |
| `data` | object | No | Event content — the resource is on `data.object`. |
| `livemode` | boolean | No | False when the event came from Stripe test mode. |

### Invoice Upcoming

**Slug:** `STRIPE_INVOICE_UPCOMING`

**Type:** webhook

Occurs X number of days before a subscription is scheduled to create an invoice that is automatically charged-where X is determined by your subscriptions settings. Note: The received `Invoice` object will not have an invoice ID.

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `account` | string | No | The connected account the event belongs to. Present only for events forwarded from a Stripe Connect account. |
| `data` | object | No | Event content — the resource is on `data.object`. |
| `livemode` | boolean | No | False when the event came from Stripe test mode. |

### Invoice Voided

**Slug:** `STRIPE_INVOICE_VOIDED`

**Type:** webhook

Occurs whenever an invoice is voided.

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `account` | string | No | The connected account the event belongs to. Present only for events forwarded from a Stripe Connect account. |
| `data` | object | No | Event content — the resource is on `data.object`. |
| `livemode` | boolean | No | False when the event came from Stripe test mode. |

### Payment Intent Canceled

**Slug:** `STRIPE_PAYMENT_INTENT_CANCELED`

**Type:** webhook

Occurs when a PaymentIntent is canceled.

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `account` | string | No | The connected account the event belongs to. Present only for events forwarded from a Stripe Connect account. |
| `data` | object | No | Event content — the resource is on `data.object`. |
| `livemode` | boolean | No | False when the event came from Stripe test mode. |

### Payment Intent Created

**Slug:** `STRIPE_PAYMENT_INTENT_CREATED`

**Type:** webhook

Occurs when a new PaymentIntent is created.

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `account` | string | No | The connected account the event belongs to. Present only for events forwarded from a Stripe Connect account. |
| `data` | object | No | Event content — the resource is on `data.object`. |
| `livemode` | boolean | No | False when the event came from Stripe test mode. |

### Payment Intent Payment Failed

**Slug:** `STRIPE_PAYMENT_INTENT_PAYMENT_FAILED`

**Type:** webhook

Occurs when a PaymentIntent has failed the attempt to create a payment method or a payment.

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `account` | string | No | The connected account the event belongs to. Present only for events forwarded from a Stripe Connect account. |
| `data` | object | No | Event content — the resource is on `data.object`. |
| `livemode` | boolean | No | False when the event came from Stripe test mode. |

### Payment Intent Requires Action

**Slug:** `STRIPE_PAYMENT_INTENT_REQUIRES_ACTION`

**Type:** webhook

Occurs when a PaymentIntent transitions to requires_action state.

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `account` | string | No | The connected account the event belongs to. Present only for events forwarded from a Stripe Connect account. |
| `data` | object | No | Event content — the resource is on `data.object`. |
| `livemode` | boolean | No | False when the event came from Stripe test mode. |

### Payment Intent Succeeded

**Slug:** `STRIPE_PAYMENT_INTENT_SUCCEEDED`

**Type:** webhook

Occurs when a PaymentIntent has successfully completed payment.

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `account` | string | No | The connected account the event belongs to. Present only for events forwarded from a Stripe Connect account. |
| `data` | object | No | Event content — the resource is on `data.object`. |
| `livemode` | boolean | No | False when the event came from Stripe test mode. |

### Payment Link Created

**Slug:** `STRIPE_PAYMENT_LINK_CREATED`

**Type:** webhook

Occurs when a payment link is created.

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `account` | string | No | The connected account the event belongs to. Present only for events forwarded from a Stripe Connect account. |
| `data` | object | No | Event content — the resource is on `data.object`. |
| `livemode` | boolean | No | False when the event came from Stripe test mode. |

### Payout Failed

**Slug:** `STRIPE_PAYOUT_FAILED`

**Type:** webhook

Occurs whenever a payout attempt fails.

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `account` | string | No | The connected account the event belongs to. Present only for events forwarded from a Stripe Connect account. |
| `data` | object | No | Event content — the resource is on `data.object`. |
| `livemode` | boolean | No | False when the event came from Stripe test mode. |

### Payout Paid

**Slug:** `STRIPE_PAYOUT_PAID`

**Type:** webhook

Occurs whenever a payout is *expected* to be available in the destination account. If the payout fails, a `payout.failed` notification is also sent, at a later time.

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `account` | string | No | The connected account the event belongs to. Present only for events forwarded from a Stripe Connect account. |
| `data` | object | No | Event content — the resource is on `data.object`. |
| `livemode` | boolean | No | False when the event came from Stripe test mode. |

### Price Created

**Slug:** `STRIPE_PRICE_CREATED`

**Type:** webhook

Occurs whenever a price is created.

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `account` | string | No | The connected account the event belongs to. Present only for events forwarded from a Stripe Connect account. |
| `data` | object | No | Event content — the resource is on `data.object`. |
| `livemode` | boolean | No | False when the event came from Stripe test mode. |

### Price Updated

**Slug:** `STRIPE_PRICE_UPDATED`

**Type:** webhook

Occurs whenever a price is updated.

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `account` | string | No | The connected account the event belongs to. Present only for events forwarded from a Stripe Connect account. |
| `data` | object | No | Event content — the resource is on `data.object`. |
| `livemode` | boolean | No | False when the event came from Stripe test mode. |

### Product Created

**Slug:** `STRIPE_PRODUCT_CREATED`

**Type:** webhook

Occurs whenever a product is created.

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `account` | string | No | The connected account the event belongs to. Present only for events forwarded from a Stripe Connect account. |
| `data` | object | No | Event content — the resource is on `data.object`. |
| `livemode` | boolean | No | False when the event came from Stripe test mode. |

### Product Updated

**Slug:** `STRIPE_PRODUCT_UPDATED`

**Type:** webhook

Occurs whenever a product is updated.

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `account` | string | No | The connected account the event belongs to. Present only for events forwarded from a Stripe Connect account. |
| `data` | object | No | Event content — the resource is on `data.object`. |
| `livemode` | boolean | No | False when the event came from Stripe test mode. |

### Refund Created

**Slug:** `STRIPE_REFUND_CREATED`

**Type:** webhook

Occurs whenever a refund is created.

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `account` | string | No | The connected account the event belongs to. Present only for events forwarded from a Stripe Connect account. |
| `data` | object | No | Event content — the resource is on `data.object`. |
| `livemode` | boolean | No | False when the event came from Stripe test mode. |
