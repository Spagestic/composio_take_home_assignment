# Pumble

Pumble is a team communication platform for channels, direct messages, scheduled messages, and workspace collaboration.

- **Category:** team chat
- **Auth:** API_KEY
- **Composio-managed OAuth available?** N/A
- **Tools:** 9
- **Triggers:** 0
- **Slug:** `PUMBLE`
- **Version:** 00000000_00

## Tools

### Delete Message

**Slug:** `PUMBLE_DELETE_MESSAGE`

Permanently delete one Pumble message identified by channel ID and message ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `channel_id` | string | Yes | ID of the channel containing the message. |
| `message_id` | string | Yes | ID of the message to permanently delete. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Edit Message

**Slug:** `PUMBLE_EDIT_MESSAGE`

Replace the text of an existing Pumble message in a channel.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `text` | string | Yes | Replacement message text. |
| `channel_id` | string | Yes | ID of the channel containing the message. |
| `message_id` | string | Yes | ID of the message to edit. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Current User

**Slug:** `PUMBLE_GET_CURRENT_USER`

Return the Pumble user and workspace associated with the connected API key. Use this to identify the connected account or verify its credentials.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Message

**Slug:** `PUMBLE_GET_MESSAGE`

Fetch one Pumble message by its message ID and channel ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `channel_id` | string | Yes | ID of the channel containing the message. |
| `message_id` | string | Yes | ID of the message to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Channel Messages

**Slug:** `PUMBLE_LIST_CHANNEL_MESSAGES`

Return one page of recent messages from a channel, continuing backward through history with a cursor.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum messages to return in this page; must be at least 1. |
| `cursor` | string | No | Continuation cursor returned by a previous call; omit for the newest page. |
| `channel_id` | string | Yes | ID of the channel whose messages to list. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Channels

**Slug:** `PUMBLE_LIST_CHANNELS`

List channels visible to the connected Pumble user, including channel IDs needed by message tools.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Users

**Slug:** `PUMBLE_LIST_USERS`

List users in the current Pumble workspace with stable IDs and profile details.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Search Messages

**Slug:** `PUMBLE_SEARCH_MESSAGES`

Search Pumble messages and return one bounded page. For the first page, provide at least one of text, author_ids, or channel_ids; for later pages, pass the returned cursor alone.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `text` | string | No | Text to find in messages. Required on the first page unless another filter is provided. |
| `limit` | integer | No | Maximum results in this page (1-20). |
| `cursor` | string | No | Opaque continuation cursor returned by a previous call. Pass it alone for the next page; the original filters and limit are restored from it. |
| `author_ids` | array | No | Only return messages authored by these workspace user IDs. Required on the first page unless another filter is provided. |
| `channel_ids` | array | No | Only return messages from these channel IDs. Required on the first page unless another filter is provided. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Send Message

**Slug:** `PUMBLE_SEND_MESSAGE`

Immediately post a text message to a Pumble channel identified by its channel ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `text` | string | Yes | Message text to send. |
| `as_bot` | boolean | No | Whether to post as the API Addon bot when the workspace permits it. |
| `channel_id` | string | Yes | ID of the destination channel; obtain it from PUMBLE_LIST_CHANNELS. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |
