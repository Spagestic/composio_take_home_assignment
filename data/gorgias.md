# Gorgias

Gorgias is a helpdesk and live chat platform specializing in e-commerce, offering automated support, order management, and unified customer communication

- **Category:** crm
- **Auth:** API_KEY, OAUTH2
- **Composio-managed OAuth available?** Yes
- **Tools:** 44
- **Triggers:** 0
- **Slug:** `GORGIAS`
- **Version:** 20260918_00

## Tools

### Add Ticket Tags

**Slug:** `GORGIAS_ADD_TICKET_TAGS`

Adds tags to a ticket in Gorgias.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tag_ids` | array | Yes | List of tag IDs to add to the ticket |
| `ticket_id` | integer | Yes | The ID of the ticket |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Account Setting

**Slug:** `GORGIAS_CREATE_ACCOUNT_SETTING`

Creates a new account setting in Gorgias.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | The name of the setting |
| `value` | string | Yes | The value of the setting |
| `description` | string | No | Description of the setting |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Customer

**Slug:** `GORGIAS_CREATE_CUSTOMER`

Creates a new customer in Gorgias.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | object | No | Additional customer data |
| `name` | string | Yes | The customer's full name |
| `email` | string | No | The customer's email address |
| `address` | object | No | The customer's address information |
| `channels` | array | No | The customer's communication channels |
| `external_id` | string | No | External identifier for the customer |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Macro

**Slug:** `GORGIAS_CREATE_MACRO`

Creates a reusable response macro and its ticket actions. Reference: https://developers.gorgias.com/reference/create-macro

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Searchable name of the macro |
| `intent` | string ("discount/request" | "exchange/request" | "exchange/status" | "feedback" | "order/damaged" | "order/cancel" | "order/change" | "order/wrong" | "other/no_reply" | "other/question" | "other/thanks" | "product/recommendation" | "product/question" | "refund/request" | "refund/status" | "return/request" | "return/status" | "shipping/change" | "shipping/delivery-issue" | "shipping/policy" | "shipping/status" | "stock/request" | "subscription/cancel" | "subscription/change") | No | Documented support intent served by the macro |
| `actions` | array | No | Actions to apply when the macro is used |
| `language` | string | No | Macro language in ISO 639-1 format |
| `external_id` | string | No | ID of the macro in an external system |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Rule

**Slug:** `GORGIAS_CREATE_RULE`

Create a JavaScript automation rule in Gorgias.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `code` | string | Yes | Rule logic as JavaScript code |
| `name` | string | Yes | Name of the rule |
| `code_ast` | object | No | Rule logic as an ESTree AST; generated from code when omitted |
| `priority` | integer | No | Execution order; rules with higher priorities execute first |
| `description` | string | No | Description of the rule |
| `event_types` | array | No | Events that execute the rule |
| `deactivated_datetime` | string | No | When the rule was deactivated |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Team

**Slug:** `GORGIAS_CREATE_TEAM`

Creates a new team in Gorgias.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Name of the team |
| `members` | array | No | The list of users within the team |
| `decoration` | object | No | Object describing how the team appears on the webpage |
| `description` | string | No | Longer description of the team |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Ticket

**Slug:** `GORGIAS_CREATE_TICKET`

Creates a new ticket in Gorgias.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `via` | string | Yes | How the first message of the ticket has been received or sent from Gorgias |
| `meta` | object | No | Extra metadata about the ticket |
| `tags` | array | No | List of tag IDs to apply to the ticket |
| `status` | string | No | The status of the ticket |
| `channel` | string | No | The channel of the ticket (email, chat, etc.) |
| `subject` | string | No | The subject of the ticket |
| `customer` | object | No | Customer information (id, name, or email) |
| `language` | string | No | The language of the ticket |
| `messages` | array | Yes | Messages of the ticket |
| `priority` | string | No | The priority of the ticket |
| `external_id` | string | No | External identifier for the ticket |
| `assignee_team_id` | integer | No | ID of the team to assign the ticket to |
| `assignee_user_id` | integer | No | ID of the user to assign the ticket to |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create View

**Slug:** `GORGIAS_CREATE_VIEW`

Create a saved ticket-list view in Gorgias.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | Name of the view |
| `slug` | string | Yes | Deprecated but required URL-compatible name of the view |
| `type` | string ("ticket-list") | No | Type of objects to which the view applies |
| `fields` | array | No | Object attributes displayed in the view |
| `filters` | string | No | JavaScript filter expression selecting items for the view |
| `order_by` | string | No | Object attribute used to sort view items |
| `order_dir` | string ("asc" | "desc") | No | Sort direction for view items |
| `decoration` | object | No | How the view appears in Gorgias applications |
| `visibility` | string ("public" | "shared" | "private") | No | Who can see the view |
| `shared_with_teams` | array | No | IDs of teams this view is shared with (maximum 100) |
| `shared_with_users` | array | No | IDs of users this view is shared with (maximum 100) |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Customer

**Slug:** `GORGIAS_DELETE_CUSTOMER`

Deletes a specific customer from Gorgias.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `customer_id` | integer | Yes | The ID of the customer to delete |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Customer Field Value

**Slug:** `GORGIAS_DELETE_CUSTOMER_FIELD_VALUE`

Deletes a specific field value for a customer in Gorgias.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `field_id` | integer | Yes | The ID of the custom field |
| `customer_id` | integer | Yes | The ID of the customer |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Customers

**Slug:** `GORGIAS_DELETE_CUSTOMERS`

Deletes multiple customers from Gorgias.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `customer_ids` | array | Yes | List of customer IDs to delete |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Team

**Slug:** `GORGIAS_DELETE_TEAM`

Deletes a specific team from Gorgias.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `team_id` | integer | Yes | The ID of the team to delete |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Ticket

**Slug:** `GORGIAS_DELETE_TICKET`

Deletes a specific ticket from Gorgias.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ticket_id` | integer | Yes | The ID of the ticket to delete |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Ticket Field Value

**Slug:** `GORGIAS_DELETE_TICKET_FIELD_VALUE`

Deletes a specific field value for a ticket in Gorgias.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `field_id` | integer | Yes | The ID of the custom field |
| `ticket_id` | integer | Yes | The ID of the ticket |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Account

**Slug:** `GORGIAS_GET_ACCOUNT`

Retrieves your Gorgias account information.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Customer

**Slug:** `GORGIAS_GET_CUSTOMER`

Retrieves a specific customer from Gorgias.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `customer_id` | integer | Yes | The ID of the customer to retrieve |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Event

**Slug:** `GORGIAS_GET_EVENT`

Retrieves a specific event from Gorgias.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `event_id` | integer | Yes | The ID of the event to retrieve |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Team

**Slug:** `GORGIAS_GET_TEAM`

Retrieves a specific team from Gorgias.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `team_id` | integer | Yes | The ID of the team to retrieve |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Ticket

**Slug:** `GORGIAS_GET_TICKET`

Retrieves a specific ticket from Gorgias.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ticket_id` | integer | Yes | The ID of the ticket to retrieve |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Ticket Message

**Slug:** `GORGIAS_GET_TICKET_MESSAGE`

Retrieves one message from a Gorgias ticket. Reference: https://developers.gorgias.com/reference/get-ticket-message

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ticket_id` | integer | Yes | ID of the ticket containing the message |
| `message_id` | integer | Yes | ID of the message to retrieve |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Account Settings

**Slug:** `GORGIAS_LIST_ACCOUNT_SETTINGS`

Lists all account settings in Gorgias.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Number of settings to return (default: 20, max: 100) |
| `offset` | integer | No | Offset for pagination |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Customer Field Values

**Slug:** `GORGIAS_LIST_CUSTOMER_FIELD_VALUES`

Lists all field values for a customer in Gorgias.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `customer_id` | integer | Yes | The ID of the customer |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Customers

**Slug:** `GORGIAS_LIST_CUSTOMERS`

Lists customers in Gorgias with various filtering options.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | Filter customers by name |
| `email` | string | No | Filter customers by email address |
| `limit` | integer | No | Number of customers to return per page (1-100, default: 30) |
| `cursor` | string | No | Pagination cursor from meta.next_cursor of previous response |
| `order_by` | string | No | Field to order results by. Note: Valid values must be discovered via API testing. Common values like 'created_datetime' may not be accepted. |
| `external_id` | string | No | Filter customers by external ID |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Events

**Slug:** `GORGIAS_LIST_EVENTS`

Lists events in Gorgias. Returns event objects with pagination support via cursor. Reference: https://developers.gorgias.com/reference/get_api-events

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Number of events to return (max: 100) |
| `types` | array | No | Array of event types to filter by (e.g., ['ticket-created', 'user-logged-in']) |
| `cursor` | string | No | Pagination cursor from meta.next_cursor |
| `object_id` | integer | No | Filter by object ID |
| `object_type` | string | No | Filter by object type (e.g., 'Ticket', 'Account', 'User') |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Integrations

**Slug:** `GORGIAS_LIST_INTEGRATIONS`

Lists Gorgias integrations, optionally filtered by integration type. Reference: https://developers.gorgias.com/reference/list-integrations

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `type` | string ("email" | "gmail" | "outlook" | "app" | "aircall" | "facebook" | "gorgias_chat" | "phone" | "sms" | "twitter" | "yotpo" | "whatsapp" | "http" | "shopify" | "recharge" | "smile" | "smooch_inside" | "smooch" | "magento2" | "zendesk" | "klaviyo" | "bigcommerce" | "alloy" | "ecom") | No | Filter by the exact Gorgias integration type |
| `limit` | integer | No | Maximum number of integrations to return (1-100) |
| `cursor` | string | No | Pagination cursor from meta.next_cursor or meta.prev_cursor |
| `order_by` | string ("created_datetime:asc" | "created_datetime:desc") | No | Order integrations by creation time |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Messages

**Slug:** `GORGIAS_LIST_MESSAGES`

Lists messages in Gorgias, optionally filtered by ticket. Reference: https://developers.gorgias.com/reference/list-messages

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of messages to return (1-100) |
| `cursor` | string | No | Pagination cursor from meta.next_cursor or meta.prev_cursor |
| `order_by` | string ("created_datetime:asc" | "created_datetime:desc") | No | Order messages by creation time |
| `ticket_id` | integer | No | Filter messages by the associated ticket ID |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Rules

**Slug:** `GORGIAS_LIST_RULES`

Lists automation rules with optional name search. Reference: https://developers.gorgias.com/reference/list-rules

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of rules to return (1-100) |
| `cursor` | string | No | Pagination cursor from a previous list-rules request |
| `search` | string | No | Case-insensitive search by rule name |
| `order_by` | string ("created_datetime:asc" | "created_datetime:desc") | No | Attribute and direction used to order rules |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Tags

**Slug:** `GORGIAS_LIST_TAGS`

Lists workspace tags independently of any ticket. Reference: https://developers.gorgias.com/reference/list-tags

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of tags to return (1-100) |
| `cursor` | string | No | Pagination cursor from meta.next_cursor or meta.prev_cursor |
| `search` | string | No | Match tag names containing this text, case-insensitively |
| `order_by` | string ("created_datetime:asc" | "created_datetime:desc" | "name:asc" | "name:desc" | "usage:asc,name:asc" | "usage:desc,name:desc") | No | Attribute and direction used to order tags |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Teams

**Slug:** `GORGIAS_LIST_TEAMS`

Lists teams in Gorgias.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of teams to return per page (default: 20, max: 100). |
| `cursor` | string | No | Cursor for pagination. Use the value of 'meta.next_cursor' from a previous response to fetch the next page. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Ticket Field Values

**Slug:** `GORGIAS_LIST_TICKET_FIELD_VALUES`

Lists all field values for a ticket in Gorgias.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ticket_id` | integer | Yes | The ID of the ticket |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Tickets

**Slug:** `GORGIAS_LIST_TICKETS`

Lists tickets in Gorgias with various filtering options.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of tickets to return |
| `cursor` | string | No | Cursor value indicating position in the list of all tickets for pagination. Use next_cursor or prev_cursor from previous response. |
| `rule_id` | integer | No | Apply filters from a rule to ticket selection |
| `trashed` | boolean | No | Whether to include removed tickets in results |
| `view_id` | integer | No | Apply filters from a predefined view to ticket selection |
| `order_by` | string ("created_datetime:asc" | "created_datetime:desc" | "updated_datetime:asc" | "updated_datetime:desc") | No | Sort order for tickets |
| `ticket_ids` | array | No | Select specific tickets by their identifiers (1-100 IDs) |
| `customer_id` | integer | No | Filter tickets by customer ID |
| `external_id` | string | No | Identifier from external systems for ticket lookup |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Ticket Tags

**Slug:** `GORGIAS_LIST_TICKET_TAGS`

Lists all tags for a ticket in Gorgias.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ticket_id` | integer | Yes | The ID of the ticket |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Users

**Slug:** `GORGIAS_LIST_USERS`

Lists helpdesk users with optional role and identity filters. Reference: https://developers.gorgias.com/reference/list-users

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `email` | string | No | Filter users by email address |
| `limit` | integer | No | Maximum number of users to return (1-100) |
| `roles` | array | No | Roles to include in the results |
| `cursor` | string | No | Pagination cursor from a previous list-users request |
| `search` | string | No | Match users by name or email address |
| `order_by` | string ("created_datetime:asc" | "created_datetime:desc" | "name:asc" | "name:desc" | "email:asc" | "email:desc" | "role.name:asc" | "role.name:desc") | No | Attribute and direction used to order users |
| `external_id` | string | No | Filter users by their external-system ID |
| `available_first` | boolean | No | Return available users before non-available users |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List View Items

**Slug:** `GORGIAS_LIST_VIEW_ITEMS`

Lists tickets matching a saved Gorgias view. Reference: https://developers.gorgias.com/reference/list-view-items

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of view items to return (1-100) |
| `cursor` | string | No | Pagination cursor from the current_cursor value or an item link |
| `view_id` | integer | Yes | ID of the view whose items to list |
| `order_by` | string ("created_datetime:asc" | "created_datetime:desc" | "updated_datetime:asc" | "updated_datetime:desc" | "last_message_datetime:asc" | "last_message_datetime:desc" | "last_received_message_datetime:asc" | "last_received_message_datetime:desc" | "closed_datetime:asc" | "closed_datetime:desc" | "snooze_datetime:asc" | "snooze_datetime:desc" | "priority:asc" | "priority:desc") | No | Ticket attribute and direction used to order the view items |
| `direction` | string ("prev" | "next") | No | Return items before (prev) or after (next) the cursor |
| `ignored_item` | integer | No | ID of an item to omit from the returned page |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Views

**Slug:** `GORGIAS_LIST_VIEWS`

Lists saved ticket views, optionally filtered by category. Reference: https://developers.gorgias.com/reference/list-views

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of views to return (1-100) |
| `cursor` | string | No | Pagination cursor from meta.next_cursor or meta.prev_cursor |
| `category` | string ("system" | "user") | No | Filter views by system-managed or user-created category |
| `order_by` | string ("created_datetime:asc" | "created_datetime:desc") | No | Order views by creation time |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Merge Customers

**Slug:** `GORGIAS_MERGE_CUSTOMERS`

Merges two customers in Gorgias, combining their data and history.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `source_customer_id` | integer | Yes | The ID of the source customer (will be merged into the target) |
| `target_customer_id` | integer | Yes | The ID of the target customer (will remain after merge) |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Remove Ticket Tags

**Slug:** `GORGIAS_REMOVE_TICKET_TAGS`

Removes tags from a ticket in Gorgias.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tag_ids` | array | Yes | List of tag IDs to remove from the ticket |
| `ticket_id` | integer | Yes | The ID of the ticket |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Send Ticket Message

**Slug:** `GORGIAS_SEND_TICKET_MESSAGE`

Sends an externally delivered message on an existing Gorgias ticket. Delivery happens asynchronously after creation; internal notes are not supported. References: https://developers.gorgias.com/reference/create-ticket-message https://developers.gorgias.com/docs/create-a-new-message-in-ticket-via-api

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `sender` | object | No | Customer or user sending the message |
| `source` | object | No | External routing details; email source.from.address must match an existing Gorgias email integration |
| `channel` | string | Yes | External delivery channel, such as email; internal notes are not supported |
| `subject` | string | No | Message subject |
| `receiver` | object | No | Primary customer or user receiving the message |
| `body_html` | string | No | HTML message body |
| `body_text` | string | No | Plain-text message body |
| `ticket_id` | integer | Yes | ID of the ticket receiving the message |
| `attachments` | array | No | Files to attach to the message |
| `external_id` | string | No | Caller-defined external message ID |
| `integration_id` | integer | No | ID of the integration used to send the message |
| `if_unmodified_since` | string | No | HTTP date used to detect whether the source ticket was merged after that time |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Set Customer Data

**Slug:** `GORGIAS_SET_CUSTOMER_DATA`

Sets the complete data object for a customer in Gorgias.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | object | Yes | The complete data object to set for the customer |
| `customer_id` | integer | Yes | The ID of the customer |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Set Ticket Tags

**Slug:** `GORGIAS_SET_TICKET_TAGS`

Sets the complete list of tags for a ticket in Gorgias.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tag_ids` | array | Yes | List of tag IDs to set for the ticket |
| `ticket_id` | integer | Yes | The ID of the ticket |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Account Setting

**Slug:** `GORGIAS_UPDATE_ACCOUNT_SETTING`

Updates an existing account setting in Gorgias.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `value` | string | Yes | The new value of the setting |
| `setting_id` | integer | Yes | The ID of the setting to update |
| `description` | string | No | Updated description of the setting |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Customer

**Slug:** `GORGIAS_UPDATE_CUSTOMER`

Updates an existing customer in Gorgias.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | object | No | Additional customer data |
| `name` | string | No | The customer's full name |
| `email` | string | No | The customer's email address |
| `address` | object | No | The customer's address information |
| `channels` | array | No | The customer's communication channels |
| `customer_id` | integer | Yes | The ID of the customer to update |
| `external_id` | string | No | External identifier for the customer |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Team

**Slug:** `GORGIAS_UPDATE_TEAM`

Updates an existing team in Gorgias.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | Name of the team |
| `members` | array | No | The list of users within the team |
| `team_id` | integer | Yes | The ID of the team to update |
| `decoration` | object | No | Object describing how the team appears on the webpage |
| `description` | string | No | Longer description of the team |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Ticket

**Slug:** `GORGIAS_UPDATE_TICKET`

Updates an existing ticket in Gorgias.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `meta` | object | No | Extra metadata about the ticket |
| `status` | string | No | The status of the ticket |
| `subject` | string | No | The subject of the ticket |
| `language` | string | No | The language of the ticket |
| `priority` | string | No | The priority of the ticket |
| `ticket_id` | integer | Yes | The ID of the ticket to update |
| `customer_id` | integer | No | The ID of the customer for this ticket |
| `external_id` | string | No | External identifier for the ticket |
| `assignee_team_id` | integer | No | ID of the team to assign the ticket to |
| `assignee_user_id` | integer | No | ID of the user to assign the ticket to |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |
