# Intercom

Intercom provides live chat, messaging, and customer engagement tools, enabling businesses to drive conversions, handle support, and personalize communication at scale

- **Category:** customer support
- **Auth:** OAUTH2
- **Composio-managed OAuth available?** Yes
- **Tools:** 133
- **Triggers:** 0
- **Slug:** `INTERCOM`
- **Version:** 20260826_00

## Tools

### Add subscription to a contact

**Slug:** `INTERCOM_ADD_SUBSCRIPTION_TO_A_CONTACT`

You can add a specific subscription to a contact. In Intercom, we have two different subscription types based on user consent - opt-out and opt-in: 1.Attaching a contact to an opt-out subscription type will opt that user out from receiving messages related to that subscription type. 2.Attaching a contact to an opt-in subscription type will opt that user in to receiving messages related to that subscription type. This will return a subscription type model for the subscription type that was added to the contact.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique identifier for the subscription which is given by Intercom |
| `contact_id` | string | Yes | The unique identifier for the contact which is given by Intercom |
| `consent_type` | string | Yes | The consent_type of a subscription, opt_out or opt_in. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Add tag to contact

**Slug:** `INTERCOM_ADD_TAG_TO_CONTACT`

Tool to add a tag to a contact in Intercom. Use when you need to attach or add a specific tag to a contact for categorization or tracking purposes.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique identifier for the tag which is given by Intercom |
| `contact_id` | string | Yes | The unique identifier for the contact which is given by Intercom |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Archive contact

**Slug:** `INTERCOM_ARCHIVE_CONTACT`

Tool to archive a single contact in Intercom. Use when you need to archive a contact by their ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `contact_id` | string | Yes | The unique identifier for the contact to archive |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Assign conversation

**Slug:** `INTERCOM_ASSIGN_CONVERSATION`

Assigns a conversation to a specific admin or team in Intercom. Mutates live conversation state; confirm intent before bulk-assigning multiple conversations.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `team_id` | string | No | ID of the team to assign the conversation to. Either admin_id or team_id must be provided |
| `admin_id` | string | No | ID of the admin to assign the conversation to. Either admin_id or team_id must be provided |
| `assignee_id` | string | No | ID of the admin making the assignment (who is performing this action) |
| `conversation_id` | string | Yes | The ID of the conversation to assign |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Attach contact to company

**Slug:** `INTERCOM_ATTACH_CONTACT_TO_COMPANY`

Tool to attach a contact to a company in Intercom. Use when you need to associate a contact with a company.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `company_id` | string | Yes | The unique identifier for the company which is given by Intercom |
| `contact_id` | string | Yes | The unique identifier for the contact which is given by Intercom |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Attach contact to conversation

**Slug:** `INTERCOM_ATTACH_CONTACT_TO_CONVERSATION`

Tool to attach a contact participant to a conversation on behalf of admin or contact. Use when you need to add a new participant to an existing conversation.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `admin_id` | string | Yes | The id of the admin who is adding the new participant |
| `customer` | object | Yes | Object containing contact identifier. Must include at least one of: id, intercom_user_id, user_id, or email |
| `conversation_id` | string | Yes | The identifier for the conversation as given by Intercom |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Attach tag to conversation

**Slug:** `INTERCOM_ATTACH_TAG_TO_CONVERSATION`

Tool to add a tag to a specific conversation in Intercom. Use when you need to attach or tag a conversation.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique identifier for the tag which is given by Intercom |
| `admin_id` | string | Yes | The unique identifier for the admin which is given by Intercom |
| `conversation_id` | string | Yes | The unique identifier for the conversation |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Attach tag to ticket

**Slug:** `INTERCOM_ATTACH_TAG_TO_TICKET`

Tool to add a tag to a ticket in Intercom. Use when you need to attach or add a specific tag to a ticket for categorization or tracking purposes.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique identifier for the tag which is given by Intercom |
| `admin_id` | string | Yes | The unique identifier for the admin which is given by Intercom |
| `ticket_id` | string | Yes | The unique identifier for the ticket which is given by Intercom |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Block contact

**Slug:** `INTERCOM_BLOCK_CONTACT`

Tool to block a single contact in Intercom. Use when you need to block a contact, which will also archive their conversations.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `contact_id` | string | Yes | The unique identifier for the contact to block |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Cancel data export

**Slug:** `INTERCOM_CANCEL_DATA_EXPORT`

Tool to cancel an active content data export job. Use when you need to terminate an ongoing export and update its status to 'canceled'.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `job_identifier` | string | Yes | The unique identifier for the export job to cancel. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Close conversation

**Slug:** `INTERCOM_CLOSE_CONVERSATION`

Closes a conversation in Intercom, marking it as resolved. Requires explicit user confirmation before calling; closing is irreversible without a separate reopen action. Send any reply via INTERCOM_REPLY_TO_CONVERSATION before calling this tool — parallel execution on the same conversation causes conflicts.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `body` | string | No | Optional message to send when closing the conversation |
| `admin_id` | string | Yes | ID of the admin closing the conversation |
| `conversation_id` | string | Yes | The ID of the conversation to close Conversation must be in open state; verify state via INTERCOM_GET_CONVERSATION first, as closing a snoozed or already-closed conversation produces unexpected results. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create a collection

**Slug:** `INTERCOM_CREATE_A_COLLECTION`

You can create a new collection by making a POST request to `https://api.intercom.io/help_center/collections.`

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | The name of the collection. For multilingual collections, this will be the name of the default language"s content.  |
| `parent_id` | string | No | The id of the parent collection. If `null` then it will be created as the first level collection.  |
| `description` | string | No | The description of the collection. For multilingual collections, this will be the description of the default language"s content.  |
| `help_center_id` | integer | No | The id of the help center where the collection will be created. If `null` then it will be created in the default help center.  |
| `translated__content__type` | string ("None" | "group_translated_content") | No | The type of object - group_translated_content. |
| `translated__content__ar__name` | string | No | The name of the collection or section. |
| `translated__content__ar__type` | string ("None" | "group_content") | No | The type of object - `group_content` . |
| `translated__content__bg__name` | string | No | The name of the collection or section. |
| `translated__content__bg__type` | string ("None" | "group_content") | No | The type of object - `group_content` . |
| `translated__content__bs__name` | string | No | The name of the collection or section. |
| `translated__content__bs__type` | string ("None" | "group_content") | No | The type of object - `group_content` . |
| `translated__content__ca__name` | string | No | The name of the collection or section. |
| `translated__content__ca__type` | string ("None" | "group_content") | No | The type of object - `group_content` . |
| `translated__content__cs__name` | string | No | The name of the collection or section. |
| `translated__content__cs__type` | string ("None" | "group_content") | No | The type of object - `group_content` . |
| `translated__content__da__name` | string | No | The name of the collection or section. |
| `translated__content__da__type` | string ("None" | "group_content") | No | The type of object - `group_content` . |
| `translated__content__de__name` | string | No | The name of the collection or section. |
| `translated__content__de__type` | string ("None" | "group_content") | No | The type of object - `group_content` . |
| `translated__content__el__name` | string | No | The name of the collection or section. |
| `translated__content__el__type` | string ("None" | "group_content") | No | The type of object - `group_content` . |
| `translated__content__en__name` | string | No | The name of the collection or section. |
| `translated__content__en__type` | string ("None" | "group_content") | No | The type of object - `group_content` . |
| `translated__content__es__name` | string | No | The name of the collection or section. |
| `translated__content__es__type` | string ("None" | "group_content") | No | The type of object - `group_content` . |
| `translated__content__et__name` | string | No | The name of the collection or section. |
| `translated__content__et__type` | string ("None" | "group_content") | No | The type of object - `group_content` . |
| `translated__content__fi__name` | string | No | The name of the collection or section. |
| `translated__content__fi__type` | string ("None" | "group_content") | No | The type of object - `group_content` . |
| `translated__content__fr__name` | string | No | The name of the collection or section. |
| `translated__content__fr__type` | string ("None" | "group_content") | No | The type of object - `group_content` . |
| `translated__content__he__name` | string | No | The name of the collection or section. |
| `translated__content__he__type` | string ("None" | "group_content") | No | The type of object - `group_content` . |
| `translated__content__hr__name` | string | No | The name of the collection or section. |
| `translated__content__hr__type` | string ("None" | "group_content") | No | The type of object - `group_content` . |
| `translated__content__hu__name` | string | No | The name of the collection or section. |
| `translated__content__hu__type` | string ("None" | "group_content") | No | The type of object - `group_content` . |
| `translated__content__id__name` | string | No | The name of the collection or section. |
| `translated__content__id__type` | string ("None" | "group_content") | No | The type of object - `group_content` . |
| `translated__content__it__name` | string | No | The name of the collection or section. |
| `translated__content__it__type` | string ("None" | "group_content") | No | The type of object - `group_content` . |
| `translated__content__ja__name` | string | No | The name of the collection or section. |
| `translated__content__ja__type` | string ("None" | "group_content") | No | The type of object - `group_content` . |
| `translated__content__ko__name` | string | No | The name of the collection or section. |
| `translated__content__ko__type` | string ("None" | "group_content") | No | The type of object - `group_content` . |
| `translated__content__lt__name` | string | No | The name of the collection or section. |
| `translated__content__lt__type` | string ("None" | "group_content") | No | The type of object - `group_content` . |
| `translated__content__lv__name` | string | No | The name of the collection or section. |
| `translated__content__lv__type` | string ("None" | "group_content") | No | The type of object - `group_content` . |
| `translated__content__mn__name` | string | No | The name of the collection or section. |
| `translated__content__mn__type` | string ("None" | "group_content") | No | The type of object - `group_content` . |
| `translated__content__nb__name` | string | No | The name of the collection or section. |
| `translated__content__nb__type` | string ("None" | "group_content") | No | The type of object - `group_content` . |
| `translated__content__nl__name` | string | No | The name of the collection or section. |
| `translated__content__nl__type` | string ("None" | "group_content") | No | The type of object - `group_content` . |
| `translated__content__pl__name` | string | No | The name of the collection or section. |
| `translated__content__pl__type` | string ("None" | "group_content") | No | The type of object - `group_content` . |
| `translated__content__pt__name` | string | No | The name of the collection or section. |
| `translated__content__pt__type` | string ("None" | "group_content") | No | The type of object - `group_content` . |
| `translated__content__ro__name` | string | No | The name of the collection or section. |
| `translated__content__ro__type` | string ("None" | "group_content") | No | The type of object - `group_content` . |
| `translated__content__ru__name` | string | No | The name of the collection or section. |
| `translated__content__ru__type` | string ("None" | "group_content") | No | The type of object - `group_content` . |
| `translated__content__sl__name` | string | No | The name of the collection or section. |
| `translated__content__sl__type` | string ("None" | "group_content") | No | The type of object - `group_content` . |
| `translated__content__sr__name` | string | No | The name of the collection or section. |
| `translated__content__sr__type` | string ("None" | "group_content") | No | The type of object - `group_content` . |
| `translated__content__sv__name` | string | No | The name of the collection or section. |
| `translated__content__sv__type` | string ("None" | "group_content") | No | The type of object - `group_content` . |
| `translated__content__tr__name` | string | No | The name of the collection or section. |
| `translated__content__tr__type` | string ("None" | "group_content") | No | The type of object - `group_content` . |
| `translated__content__vi__name` | string | No | The name of the collection or section. |
| `translated__content__vi__type` | string ("None" | "group_content") | No | The type of object - `group_content` . |
| `translated__content__pt__BR__name` | string | No | The name of the collection or section. |
| `translated__content__pt__BR__type` | string ("None" | "group_content") | No | The type of object - `group_content` . |
| `translated__content__zh__CN__name` | string | No | The name of the collection or section. |
| `translated__content__zh__CN__type` | string ("None" | "group_content") | No | The type of object - `group_content` . |
| `translated__content__zh__TW__name` | string | No | The name of the collection or section. |
| `translated__content__zh__TW__type` | string ("None" | "group_content") | No | The type of object - `group_content` . |
| `translated__content__ar__description` | string | No | The description of the collection. Only available for collections. |
| `translated__content__bg__description` | string | No | The description of the collection. Only available for collections. |
| `translated__content__bs__description` | string | No | The description of the collection. Only available for collections. |
| `translated__content__ca__description` | string | No | The description of the collection. Only available for collections. |
| `translated__content__cs__description` | string | No | The description of the collection. Only available for collections. |
| `translated__content__da__description` | string | No | The description of the collection. Only available for collections. |
| `translated__content__de__description` | string | No | The description of the collection. Only available for collections. |
| `translated__content__el__description` | string | No | The description of the collection. Only available for collections. |
| `translated__content__en__description` | string | No | The description of the collection. Only available for collections. |
| `translated__content__es__description` | string | No | The description of the collection. Only available for collections. |
| `translated__content__et__description` | string | No | The description of the collection. Only available for collections. |
| `translated__content__fi__description` | string | No | The description of the collection. Only available for collections. |
| `translated__content__fr__description` | string | No | The description of the collection. Only available for collections. |
| `translated__content__he__description` | string | No | The description of the collection. Only available for collections. |
| `translated__content__hr__description` | string | No | The description of the collection. Only available for collections. |
| `translated__content__hu__description` | string | No | The description of the collection. Only available for collections. |
| `translated__content__id__description` | string | No | The description of the collection. Only available for collections. |
| `translated__content__it__description` | string | No | The description of the collection. Only available for collections. |
| `translated__content__ja__description` | string | No | The description of the collection. Only available for collections. |
| `translated__content__ko__description` | string | No | The description of the collection. Only available for collections. |
| `translated__content__lt__description` | string | No | The description of the collection. Only available for collections. |
| `translated__content__lv__description` | string | No | The description of the collection. Only available for collections. |
| `translated__content__mn__description` | string | No | The description of the collection. Only available for collections. |
| `translated__content__nb__description` | string | No | The description of the collection. Only available for collections. |
| `translated__content__nl__description` | string | No | The description of the collection. Only available for collections. |
| `translated__content__pl__description` | string | No | The description of the collection. Only available for collections. |
| `translated__content__pt__description` | string | No | The description of the collection. Only available for collections. |
| `translated__content__ro__description` | string | No | The description of the collection. Only available for collections. |
| `translated__content__ru__description` | string | No | The description of the collection. Only available for collections. |
| `translated__content__sl__description` | string | No | The description of the collection. Only available for collections. |
| `translated__content__sr__description` | string | No | The description of the collection. Only available for collections. |
| `translated__content__sv__description` | string | No | The description of the collection. Only available for collections. |
| `translated__content__tr__description` | string | No | The description of the collection. Only available for collections. |
| `translated__content__vi__description` | string | No | The description of the collection. Only available for collections. |
| `translated__content__pt__BR__description` | string | No | The description of the collection. Only available for collections. |
| `translated__content__zh__CN__description` | string | No | The description of the collection. Only available for collections. |
| `translated__content__zh__TW__description` | string | No | The description of the collection. Only available for collections. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create an article

**Slug:** `INTERCOM_CREATE_AN_ARTICLE`

You can create a new article by making a POST request to `https://api.intercom.io/articles`.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `body` | string | No | The content of the article. For multilingual articles, this will be the body of the default language"s content.  |
| `state` | string ("published" | "draft") | No | Whether the article will be `published` or will be a `draft`. Defaults to draft. For multilingual articles, this will be the state of the default language"s content.  |
| `title` | string | Yes | The title of the article.For multilingual articles, this will be the title of the default language"s content.  |
| `author_id` | integer | Yes | The id of the author of the article. For multilingual articles, this will be the id of the author of the default language"s content. Must be a teammate on the help center"s workspace.  |
| `parent_id` | integer | No | The id of the article"s parent collection or section. An article without this field stands alone.  |
| `description` | string | No | The description of the article. For multilingual articles, this will be the description of the default language"s content.  |
| `parent_type` | string | No | The type of parent, which can either be a `collection` or `section`. |
| `translated__content__type` | string ("None" | "article_translated_content") | No | The type of object - article_translated_content. |
| `translated__content__ar__url` | string | No | The URL of the article. |
| `translated__content__bg__url` | string | No | The URL of the article. |
| `translated__content__bs__url` | string | No | The URL of the article. |
| `translated__content__ca__url` | string | No | The URL of the article. |
| `translated__content__cs__url` | string | No | The URL of the article. |
| `translated__content__da__url` | string | No | The URL of the article. |
| `translated__content__de__url` | string | No | The URL of the article. |
| `translated__content__el__url` | string | No | The URL of the article. |
| `translated__content__en__url` | string | No | The URL of the article. |
| `translated__content__es__url` | string | No | The URL of the article. |
| `translated__content__et__url` | string | No | The URL of the article. |
| `translated__content__fi__url` | string | No | The URL of the article. |
| `translated__content__fr__url` | string | No | The URL of the article. |
| `translated__content__he__url` | string | No | The URL of the article. |
| `translated__content__hr__url` | string | No | The URL of the article. |
| `translated__content__hu__url` | string | No | The URL of the article. |
| `translated__content__id__url` | string | No | The URL of the article. |
| `translated__content__it__url` | string | No | The URL of the article. |
| `translated__content__ja__url` | string | No | The URL of the article. |
| `translated__content__ko__url` | string | No | The URL of the article. |
| `translated__content__lt__url` | string | No | The URL of the article. |
| `translated__content__lv__url` | string | No | The URL of the article. |
| `translated__content__mn__url` | string | No | The URL of the article. |
| `translated__content__nb__url` | string | No | The URL of the article. |
| `translated__content__nl__url` | string | No | The URL of the article. |
| `translated__content__pl__url` | string | No | The URL of the article. |
| `translated__content__pt__url` | string | No | The URL of the article. |
| `translated__content__ro__url` | string | No | The URL of the article. |
| `translated__content__ru__url` | string | No | The URL of the article. |
| `translated__content__sl__url` | string | No | The URL of the article. |
| `translated__content__sr__url` | string | No | The URL of the article. |
| `translated__content__sv__url` | string | No | The URL of the article. |
| `translated__content__tr__url` | string | No | The URL of the article. |
| `translated__content__vi__url` | string | No | The URL of the article. |
| `translated__content__ar__body` | string | No | The body of the article. |
| `translated__content__ar__type` | string ("None" | "article_content") | No | The type of object - `article_content` . |
| `translated__content__bg__body` | string | No | The body of the article. |
| `translated__content__bg__type` | string ("None" | "article_content") | No | The type of object - `article_content` . |
| `translated__content__bs__body` | string | No | The body of the article. |
| `translated__content__bs__type` | string ("None" | "article_content") | No | The type of object - `article_content` . |
| `translated__content__ca__body` | string | No | The body of the article. |
| `translated__content__ca__type` | string ("None" | "article_content") | No | The type of object - `article_content` . |
| `translated__content__cs__body` | string | No | The body of the article. |
| `translated__content__cs__type` | string ("None" | "article_content") | No | The type of object - `article_content` . |
| `translated__content__da__body` | string | No | The body of the article. |
| `translated__content__da__type` | string ("None" | "article_content") | No | The type of object - `article_content` . |
| `translated__content__de__body` | string | No | The body of the article. |
| `translated__content__de__type` | string ("None" | "article_content") | No | The type of object - `article_content` . |
| `translated__content__el__body` | string | No | The body of the article. |
| `translated__content__el__type` | string ("None" | "article_content") | No | The type of object - `article_content` . |
| `translated__content__en__body` | string | No | The body of the article. |
| `translated__content__en__type` | string ("None" | "article_content") | No | The type of object - `article_content` . |
| `translated__content__es__body` | string | No | The body of the article. |
| `translated__content__es__type` | string ("None" | "article_content") | No | The type of object - `article_content` . |
| `translated__content__et__body` | string | No | The body of the article. |
| `translated__content__et__type` | string ("None" | "article_content") | No | The type of object - `article_content` . |
| `translated__content__fi__body` | string | No | The body of the article. |
| `translated__content__fi__type` | string ("None" | "article_content") | No | The type of object - `article_content` . |
| `translated__content__fr__body` | string | No | The body of the article. |
| `translated__content__fr__type` | string ("None" | "article_content") | No | The type of object - `article_content` . |
| `translated__content__he__body` | string | No | The body of the article. |
| `translated__content__he__type` | string ("None" | "article_content") | No | The type of object - `article_content` . |
| `translated__content__hr__body` | string | No | The body of the article. |
| `translated__content__hr__type` | string ("None" | "article_content") | No | The type of object - `article_content` . |
| `translated__content__hu__body` | string | No | The body of the article. |
| `translated__content__hu__type` | string ("None" | "article_content") | No | The type of object - `article_content` . |
| `translated__content__id__body` | string | No | The body of the article. |
| `translated__content__id__type` | string ("None" | "article_content") | No | The type of object - `article_content` . |
| `translated__content__it__body` | string | No | The body of the article. |
| `translated__content__it__type` | string ("None" | "article_content") | No | The type of object - `article_content` . |
| `translated__content__ja__body` | string | No | The body of the article. |
| `translated__content__ja__type` | string ("None" | "article_content") | No | The type of object - `article_content` . |
| `translated__content__ko__body` | string | No | The body of the article. |
| `translated__content__ko__type` | string ("None" | "article_content") | No | The type of object - `article_content` . |
| `translated__content__lt__body` | string | No | The body of the article. |
| `translated__content__lt__type` | string ("None" | "article_content") | No | The type of object - `article_content` . |
| `translated__content__lv__body` | string | No | The body of the article. |
| `translated__content__lv__type` | string ("None" | "article_content") | No | The type of object - `article_content` . |
| `translated__content__mn__body` | string | No | The body of the article. |
| `translated__content__mn__type` | string ("None" | "article_content") | No | The type of object - `article_content` . |
| `translated__content__nb__body` | string | No | The body of the article. |
| `translated__content__nb__type` | string ("None" | "article_content") | No | The type of object - `article_content` . |
| `translated__content__nl__body` | string | No | The body of the article. |
| `translated__content__nl__type` | string ("None" | "article_content") | No | The type of object - `article_content` . |
| `translated__content__pl__body` | string | No | The body of the article. |
| `translated__content__pl__type` | string ("None" | "article_content") | No | The type of object - `article_content` . |
| `translated__content__pt__body` | string | No | The body of the article. |
| `translated__content__pt__type` | string ("None" | "article_content") | No | The type of object - `article_content` . |
| `translated__content__ro__body` | string | No | The body of the article. |
| `translated__content__ro__type` | string ("None" | "article_content") | No | The type of object - `article_content` . |
| `translated__content__ru__body` | string | No | The body of the article. |
| `translated__content__ru__type` | string ("None" | "article_content") | No | The type of object - `article_content` . |
| `translated__content__sl__body` | string | No | The body of the article. |
| `translated__content__sl__type` | string ("None" | "article_content") | No | The type of object - `article_content` . |
| `translated__content__sr__body` | string | No | The body of the article. |
| `translated__content__sr__type` | string ("None" | "article_content") | No | The type of object - `article_content` . |
| `translated__content__sv__body` | string | No | The body of the article. |
| `translated__content__sv__type` | string ("None" | "article_content") | No | The type of object - `article_content` . |
| `translated__content__tr__body` | string | No | The body of the article. |
| `translated__content__tr__type` | string ("None" | "article_content") | No | The type of object - `article_content` . |
| `translated__content__vi__body` | string | No | The body of the article. |
| `translated__content__vi__type` | string ("None" | "article_content") | No | The type of object - `article_content` . |
| `translated__content__ar__state` | string ("published" | "draft") | No | Whether the article is `published` or is a `draft` . |
| `translated__content__ar__title` | string | No | The title of the article. |
| `translated__content__bg__state` | string ("published" | "draft") | No | Whether the article is `published` or is a `draft` . |
| `translated__content__bg__title` | string | No | The title of the article. |
| `translated__content__bs__state` | string ("published" | "draft") | No | Whether the article is `published` or is a `draft` . |
| `translated__content__bs__title` | string | No | The title of the article. |
| `translated__content__ca__state` | string ("published" | "draft") | No | Whether the article is `published` or is a `draft` . |
| `translated__content__ca__title` | string | No | The title of the article. |
| `translated__content__cs__state` | string ("published" | "draft") | No | Whether the article is `published` or is a `draft` . |
| `translated__content__cs__title` | string | No | The title of the article. |
| `translated__content__da__state` | string ("published" | "draft") | No | Whether the article is `published` or is a `draft` . |
| `translated__content__da__title` | string | No | The title of the article. |
| `translated__content__de__state` | string ("published" | "draft") | No | Whether the article is `published` or is a `draft` . |
| `translated__content__de__title` | string | No | The title of the article. |
| `translated__content__el__state` | string ("published" | "draft") | No | Whether the article is `published` or is a `draft` . |
| `translated__content__el__title` | string | No | The title of the article. |
| `translated__content__en__state` | string ("published" | "draft") | No | Whether the article is `published` or is a `draft` . |
| `translated__content__en__title` | string | No | The title of the article. |
| `translated__content__es__state` | string ("published" | "draft") | No | Whether the article is `published` or is a `draft` . |
| `translated__content__es__title` | string | No | The title of the article. |
| `translated__content__et__state` | string ("published" | "draft") | No | Whether the article is `published` or is a `draft` . |
| `translated__content__et__title` | string | No | The title of the article. |
| `translated__content__fi__state` | string ("published" | "draft") | No | Whether the article is `published` or is a `draft` . |
| `translated__content__fi__title` | string | No | The title of the article. |
| `translated__content__fr__state` | string ("published" | "draft") | No | Whether the article is `published` or is a `draft` . |
| `translated__content__fr__title` | string | No | The title of the article. |
| `translated__content__he__state` | string ("published" | "draft") | No | Whether the article is `published` or is a `draft` . |
| `translated__content__he__title` | string | No | The title of the article. |
| `translated__content__hr__state` | string ("published" | "draft") | No | Whether the article is `published` or is a `draft` . |
| `translated__content__hr__title` | string | No | The title of the article. |
| `translated__content__hu__state` | string ("published" | "draft") | No | Whether the article is `published` or is a `draft` . |
| `translated__content__hu__title` | string | No | The title of the article. |
| `translated__content__id__state` | string ("published" | "draft") | No | Whether the article is `published` or is a `draft` . |
| `translated__content__id__title` | string | No | The title of the article. |
| `translated__content__it__state` | string ("published" | "draft") | No | Whether the article is `published` or is a `draft` . |
| `translated__content__it__title` | string | No | The title of the article. |
| `translated__content__ja__state` | string ("published" | "draft") | No | Whether the article is `published` or is a `draft` . |
| `translated__content__ja__title` | string | No | The title of the article. |
| `translated__content__ko__state` | string ("published" | "draft") | No | Whether the article is `published` or is a `draft` . |
| `translated__content__ko__title` | string | No | The title of the article. |
| `translated__content__lt__state` | string ("published" | "draft") | No | Whether the article is `published` or is a `draft` . |
| `translated__content__lt__title` | string | No | The title of the article. |
| `translated__content__lv__state` | string ("published" | "draft") | No | Whether the article is `published` or is a `draft` . |
| `translated__content__lv__title` | string | No | The title of the article. |
| `translated__content__mn__state` | string ("published" | "draft") | No | Whether the article is `published` or is a `draft` . |
| `translated__content__mn__title` | string | No | The title of the article. |
| `translated__content__nb__state` | string ("published" | "draft") | No | Whether the article is `published` or is a `draft` . |
| `translated__content__nb__title` | string | No | The title of the article. |
| `translated__content__nl__state` | string ("published" | "draft") | No | Whether the article is `published` or is a `draft` . |
| `translated__content__nl__title` | string | No | The title of the article. |
| `translated__content__pl__state` | string ("published" | "draft") | No | Whether the article is `published` or is a `draft` . |
| `translated__content__pl__title` | string | No | The title of the article. |
| `translated__content__pt__state` | string ("published" | "draft") | No | Whether the article is `published` or is a `draft` . |
| `translated__content__pt__title` | string | No | The title of the article. |
| `translated__content__ro__state` | string ("published" | "draft") | No | Whether the article is `published` or is a `draft` . |
| `translated__content__ro__title` | string | No | The title of the article. |
| `translated__content__ru__state` | string ("published" | "draft") | No | Whether the article is `published` or is a `draft` . |
| `translated__content__ru__title` | string | No | The title of the article. |
| `translated__content__sl__state` | string ("published" | "draft") | No | Whether the article is `published` or is a `draft` . |
| `translated__content__sl__title` | string | No | The title of the article. |
| `translated__content__sr__state` | string ("published" | "draft") | No | Whether the article is `published` or is a `draft` . |
| `translated__content__sr__title` | string | No | The title of the article. |
| `translated__content__sv__state` | string ("published" | "draft") | No | Whether the article is `published` or is a `draft` . |
| `translated__content__sv__title` | string | No | The title of the article. |
| `translated__content__tr__state` | string ("published" | "draft") | No | Whether the article is `published` or is a `draft` . |
| `translated__content__tr__title` | string | No | The title of the article. |
| `translated__content__vi__state` | string ("published" | "draft") | No | Whether the article is `published` or is a `draft` . |
| `translated__content__vi__title` | string | No | The title of the article. |
| `translated__content__pt__BR__url` | string | No | The URL of the article. |
| `translated__content__zh__CN__url` | string | No | The URL of the article. |
| `translated__content__zh__TW__url` | string | No | The URL of the article. |
| `translated__content__pt__BR__body` | string | No | The body of the article. |
| `translated__content__pt__BR__type` | string ("None" | "article_content") | No | The type of object - `article_content` . |
| `translated__content__zh__CN__body` | string | No | The body of the article. |
| `translated__content__zh__CN__type` | string ("None" | "article_content") | No | The type of object - `article_content` . |
| `translated__content__zh__TW__body` | string | No | The body of the article. |
| `translated__content__zh__TW__type` | string ("None" | "article_content") | No | The type of object - `article_content` . |
| `translated__content__pt__BR__state` | string ("published" | "draft") | No | Whether the article is `published` or is a `draft` . |
| `translated__content__pt__BR__title` | string | No | The title of the article. |
| `translated__content__zh__CN__state` | string ("published" | "draft") | No | Whether the article is `published` or is a `draft` . |
| `translated__content__zh__CN__title` | string | No | The title of the article. |
| `translated__content__zh__TW__state` | string ("published" | "draft") | No | Whether the article is `published` or is a `draft` . |
| `translated__content__zh__TW__title` | string | No | The title of the article. |
| `translated__content__ar__author__id` | integer | No | The ID of the author of the article. |
| `translated__content__bg__author__id` | integer | No | The ID of the author of the article. |
| `translated__content__bs__author__id` | integer | No | The ID of the author of the article. |
| `translated__content__ca__author__id` | integer | No | The ID of the author of the article. |
| `translated__content__cs__author__id` | integer | No | The ID of the author of the article. |
| `translated__content__da__author__id` | integer | No | The ID of the author of the article. |
| `translated__content__de__author__id` | integer | No | The ID of the author of the article. |
| `translated__content__el__author__id` | integer | No | The ID of the author of the article. |
| `translated__content__en__author__id` | integer | No | The ID of the author of the article. |
| `translated__content__es__author__id` | integer | No | The ID of the author of the article. |
| `translated__content__et__author__id` | integer | No | The ID of the author of the article. |
| `translated__content__fi__author__id` | integer | No | The ID of the author of the article. |
| `translated__content__fr__author__id` | integer | No | The ID of the author of the article. |
| `translated__content__he__author__id` | integer | No | The ID of the author of the article. |
| `translated__content__hr__author__id` | integer | No | The ID of the author of the article. |
| `translated__content__hu__author__id` | integer | No | The ID of the author of the article. |
| `translated__content__id__author__id` | integer | No | The ID of the author of the article. |
| `translated__content__it__author__id` | integer | No | The ID of the author of the article. |
| `translated__content__ja__author__id` | integer | No | The ID of the author of the article. |
| `translated__content__ko__author__id` | integer | No | The ID of the author of the article. |
| `translated__content__lt__author__id` | integer | No | The ID of the author of the article. |
| `translated__content__lv__author__id` | integer | No | The ID of the author of the article. |
| `translated__content__mn__author__id` | integer | No | The ID of the author of the article. |
| `translated__content__nb__author__id` | integer | No | The ID of the author of the article. |
| `translated__content__nl__author__id` | integer | No | The ID of the author of the article. |
| `translated__content__pl__author__id` | integer | No | The ID of the author of the article. |
| `translated__content__pt__author__id` | integer | No | The ID of the author of the article. |
| `translated__content__ro__author__id` | integer | No | The ID of the author of the article. |
| `translated__content__ru__author__id` | integer | No | The ID of the author of the article. |
| `translated__content__sl__author__id` | integer | No | The ID of the author of the article. |
| `translated__content__sr__author__id` | integer | No | The ID of the author of the article. |
| `translated__content__sv__author__id` | integer | No | The ID of the author of the article. |
| `translated__content__tr__author__id` | integer | No | The ID of the author of the article. |
| `translated__content__vi__author__id` | integer | No | The ID of the author of the article. |
| `translated__content__ar__created__at` | integer | No | The time when the article was created (seconds). |
| `translated__content__ar__description` | string | No | The description of the article. |
| `translated__content__ar__updated__at` | integer | No | The time when the article was last updated (seconds). |
| `translated__content__bg__created__at` | integer | No | The time when the article was created (seconds). |
| `translated__content__bg__description` | string | No | The description of the article. |
| `translated__content__bg__updated__at` | integer | No | The time when the article was last updated (seconds). |
| `translated__content__bs__created__at` | integer | No | The time when the article was created (seconds). |
| `translated__content__bs__description` | string | No | The description of the article. |
| `translated__content__bs__updated__at` | integer | No | The time when the article was last updated (seconds). |
| `translated__content__ca__created__at` | integer | No | The time when the article was created (seconds). |
| `translated__content__ca__description` | string | No | The description of the article. |
| `translated__content__ca__updated__at` | integer | No | The time when the article was last updated (seconds). |
| `translated__content__cs__created__at` | integer | No | The time when the article was created (seconds). |
| `translated__content__cs__description` | string | No | The description of the article. |
| `translated__content__cs__updated__at` | integer | No | The time when the article was last updated (seconds). |
| `translated__content__da__created__at` | integer | No | The time when the article was created (seconds). |
| `translated__content__da__description` | string | No | The description of the article. |
| `translated__content__da__updated__at` | integer | No | The time when the article was last updated (seconds). |
| `translated__content__de__created__at` | integer | No | The time when the article was created (seconds). |
| `translated__content__de__description` | string | No | The description of the article. |
| `translated__content__de__updated__at` | integer | No | The time when the article was last updated (seconds). |
| `translated__content__el__created__at` | integer | No | The time when the article was created (seconds). |
| `translated__content__el__description` | string | No | The description of the article. |
| `translated__content__el__updated__at` | integer | No | The time when the article was last updated (seconds). |
| `translated__content__en__created__at` | integer | No | The time when the article was created (seconds). |
| `translated__content__en__description` | string | No | The description of the article. |
| `translated__content__en__updated__at` | integer | No | The time when the article was last updated (seconds). |
| `translated__content__es__created__at` | integer | No | The time when the article was created (seconds). |
| `translated__content__es__description` | string | No | The description of the article. |
| `translated__content__es__updated__at` | integer | No | The time when the article was last updated (seconds). |
| `translated__content__et__created__at` | integer | No | The time when the article was created (seconds). |
| `translated__content__et__description` | string | No | The description of the article. |
| `translated__content__et__updated__at` | integer | No | The time when the article was last updated (seconds). |
| `translated__content__fi__created__at` | integer | No | The time when the article was created (seconds). |
| `translated__content__fi__description` | string | No | The description of the article. |
| `translated__content__fi__updated__at` | integer | No | The time when the article was last updated (seconds). |
| `translated__content__fr__created__at` | integer | No | The time when the article was created (seconds). |
| `translated__content__fr__description` | string | No | The description of the article. |
| `translated__content__fr__updated__at` | integer | No | The time when the article was last updated (seconds). |
| `translated__content__he__created__at` | integer | No | The time when the article was created (seconds). |
| `translated__content__he__description` | string | No | The description of the article. |
| `translated__content__he__updated__at` | integer | No | The time when the article was last updated (seconds). |
| `translated__content__hr__created__at` | integer | No | The time when the article was created (seconds). |
| `translated__content__hr__description` | string | No | The description of the article. |
| `translated__content__hr__updated__at` | integer | No | The time when the article was last updated (seconds). |
| `translated__content__hu__created__at` | integer | No | The time when the article was created (seconds). |
| `translated__content__hu__description` | string | No | The description of the article. |
| `translated__content__hu__updated__at` | integer | No | The time when the article was last updated (seconds). |
| `translated__content__id__created__at` | integer | No | The time when the article was created (seconds). |
| `translated__content__id__description` | string | No | The description of the article. |
| `translated__content__id__updated__at` | integer | No | The time when the article was last updated (seconds). |
| `translated__content__it__created__at` | integer | No | The time when the article was created (seconds). |
| `translated__content__it__description` | string | No | The description of the article. |
| `translated__content__it__updated__at` | integer | No | The time when the article was last updated (seconds). |
| `translated__content__ja__created__at` | integer | No | The time when the article was created (seconds). |
| `translated__content__ja__description` | string | No | The description of the article. |
| `translated__content__ja__updated__at` | integer | No | The time when the article was last updated (seconds). |
| `translated__content__ko__created__at` | integer | No | The time when the article was created (seconds). |
| `translated__content__ko__description` | string | No | The description of the article. |
| `translated__content__ko__updated__at` | integer | No | The time when the article was last updated (seconds). |
| `translated__content__lt__created__at` | integer | No | The time when the article was created (seconds). |
| `translated__content__lt__description` | string | No | The description of the article. |
| `translated__content__lt__updated__at` | integer | No | The time when the article was last updated (seconds). |
| `translated__content__lv__created__at` | integer | No | The time when the article was created (seconds). |
| `translated__content__lv__description` | string | No | The description of the article. |
| `translated__content__lv__updated__at` | integer | No | The time when the article was last updated (seconds). |
| `translated__content__mn__created__at` | integer | No | The time when the article was created (seconds). |
| `translated__content__mn__description` | string | No | The description of the article. |
| `translated__content__mn__updated__at` | integer | No | The time when the article was last updated (seconds). |
| `translated__content__nb__created__at` | integer | No | The time when the article was created (seconds). |
| `translated__content__nb__description` | string | No | The description of the article. |
| `translated__content__nb__updated__at` | integer | No | The time when the article was last updated (seconds). |
| `translated__content__nl__created__at` | integer | No | The time when the article was created (seconds). |
| `translated__content__nl__description` | string | No | The description of the article. |
| `translated__content__nl__updated__at` | integer | No | The time when the article was last updated (seconds). |
| `translated__content__pl__created__at` | integer | No | The time when the article was created (seconds). |
| `translated__content__pl__description` | string | No | The description of the article. |
| `translated__content__pl__updated__at` | integer | No | The time when the article was last updated (seconds). |
| `translated__content__pt__created__at` | integer | No | The time when the article was created (seconds). |
| `translated__content__pt__description` | string | No | The description of the article. |
| `translated__content__pt__updated__at` | integer | No | The time when the article was last updated (seconds). |
| `translated__content__ro__created__at` | integer | No | The time when the article was created (seconds). |
| `translated__content__ro__description` | string | No | The description of the article. |
| `translated__content__ro__updated__at` | integer | No | The time when the article was last updated (seconds). |
| `translated__content__ru__created__at` | integer | No | The time when the article was created (seconds). |
| `translated__content__ru__description` | string | No | The description of the article. |
| `translated__content__ru__updated__at` | integer | No | The time when the article was last updated (seconds). |
| `translated__content__sl__created__at` | integer | No | The time when the article was created (seconds). |
| `translated__content__sl__description` | string | No | The description of the article. |
| `translated__content__sl__updated__at` | integer | No | The time when the article was last updated (seconds). |
| `translated__content__sr__created__at` | integer | No | The time when the article was created (seconds). |
| `translated__content__sr__description` | string | No | The description of the article. |
| `translated__content__sr__updated__at` | integer | No | The time when the article was last updated (seconds). |
| `translated__content__sv__created__at` | integer | No | The time when the article was created (seconds). |
| `translated__content__sv__description` | string | No | The description of the article. |
| `translated__content__sv__updated__at` | integer | No | The time when the article was last updated (seconds). |
| `translated__content__tr__created__at` | integer | No | The time when the article was created (seconds). |
| `translated__content__tr__description` | string | No | The description of the article. |
| `translated__content__tr__updated__at` | integer | No | The time when the article was last updated (seconds). |
| `translated__content__vi__created__at` | integer | No | The time when the article was created (seconds). |
| `translated__content__vi__description` | string | No | The description of the article. |
| `translated__content__vi__updated__at` | integer | No | The time when the article was last updated (seconds). |
| `translated__content__pt__BR__author__id` | integer | No | The ID of the author of the article. |
| `translated__content__zh__CN__author__id` | integer | No | The ID of the author of the article. |
| `translated__content__zh__TW__author__id` | integer | No | The ID of the author of the article. |
| `translated__content__pt__BR__created__at` | integer | No | The time when the article was created (seconds). |
| `translated__content__pt__BR__description` | string | No | The description of the article. |
| `translated__content__pt__BR__updated__at` | integer | No | The time when the article was last updated (seconds). |
| `translated__content__zh__CN__created__at` | integer | No | The time when the article was created (seconds). |
| `translated__content__zh__CN__description` | string | No | The description of the article. |
| `translated__content__zh__CN__updated__at` | integer | No | The time when the article was last updated (seconds). |
| `translated__content__zh__TW__created__at` | integer | No | The time when the article was created (seconds). |
| `translated__content__zh__TW__description` | string | No | The description of the article. |
| `translated__content__zh__TW__updated__at` | integer | No | The time when the article was last updated (seconds). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create a note

**Slug:** `INTERCOM_CREATE_A_NOTE`

You can add a note to a single contact.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique identifier of a given contact. |
| `body` | string | Yes | The text of the note. |
| `admin_id` | string | No | The unique identifier of a given admin. |
| `contact_id` | string | No | The unique identifier of a given contact. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create contact

**Slug:** `INTERCOM_CREATE_CONTACT`

Tool to create a new contact in Intercom workspace. Use when you need to add a user or lead to Intercom. At least one identifier (email, external_id, or role) must be provided.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | Contact's full name |
| `role` | string | No | The contact's role designation (user/lead). At least one identifier (email, external_id, or role) must be provided. |
| `email` | string | No | The contact's email address. At least one identifier (email, external_id, or role) must be provided. |
| `phone` | string | No | Contact phone number (E.164 format recommended, e.g., +353871234567) |
| `avatar` | string | No | Image URL for the contact's avatar |
| `owner_id` | integer | No | Admin ID assigned as account owner |
| `external_id` | string | No | A unique identifier from your system. At least one identifier (email, external_id, or role) must be provided. |
| `last_seen_at` | integer | No | Unix timestamp of last activity |
| `signed_up_at` | integer | No | Unix timestamp of signup date |
| `custom_attributes` | object | No | Custom key-value data fields |
| `unsubscribed_from_emails` | boolean | No | Email subscription status |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create content import source

**Slug:** `INTERCOM_CREATE_CONTENT_IMPORT_SOURCE`

Tool to create a new content import source for the Fin Content Library. Use when you need to create a container for External Pages to be ingested into Intercom's AI content system.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `url` | string | Yes | The URL of the content import source. Must be a valid URL. |
| `status` | string ("active" | "deactivated") | No | The status of the content import source. Defaults to 'active'. |
| `sync_behavior` | string ("api" | "automatic" | "manual") | Yes | Defines sync method. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create conversation

**Slug:** `INTERCOM_CREATE_CONVERSATION`

Creates a new conversation in Intercom. Requires exactly one of from_user_id or from_contact_id — both are schema-optional but at least one must be provided.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `body` | string | Yes | The message content for the conversation |
| `subject` | string | No | Subject line for the conversation |
| `from_user_id` | string | No | ID of the user to create the conversation from. Either from_user_id or from_contact_id is required |
| `message_type` | string | No | Type of message: inapp, email, or facebook |
| `from_admin_id` | string | No | ID of the admin creating the conversation. If not provided, uses authenticated admin |
| `from_contact_id` | string | No | ID of the contact to create the conversation from. Either from_user_id or from_contact_id is required |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create data attribute

**Slug:** `INTERCOM_CREATE_DATA_ATTRIBUTE`

Tool to create a custom data attribute for contacts or companies. Use when you need to define a new attribute to track additional information beyond standard fields.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | The identifier for the data attribute. This will be the key used to reference the attribute. |
| `model` | string ("contact" | "company") | Yes | Specifies which object type this attribute applies to. Must be either 'contact' or 'company'. |
| `options` | array | No | Required when data_type is 'options'. Array of option objects, each containing a 'value' property. |
| `data_type` | string ("string" | "integer" | "float" | "boolean" | "date") | Yes | The type of data stored. Valid values: 'string', 'integer', 'float', 'boolean', or 'date'. |
| `description` | string | No | A readable description of the attribute shown in the UI. Helps users understand the purpose of the attribute. |
| `messenger_writable` | boolean | No | Whether the Messenger can update this attribute. Set to true to allow updates via Messenger. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create data event

**Slug:** `INTERCOM_CREATE_DATA_EVENT`

Tool to submit a data event to Intercom to track user activities. Use when you need to notify Intercom of user actions and changes. Events are detected as duplicates using workspace ID, contact identifier, event name, and timestamp.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | No | Intercom's 24-character UUID identifier for a lead or user. The contact must already exist in Intercom; events cannot be created for non-existent contacts. At least one of user_id, id, or email is required. |
| `email` | string | No | The user's email address. The contact with this email must already exist in Intercom; events cannot be created for non-existent contacts. Use only when email uniquely identifies users. At least one of user_id, id, or email is required. |
| `user_id` | string | No | Your application's unique identifier for the user. The contact must already exist in Intercom with this user_id; events cannot be created for non-existent contacts. At least one of user_id, id, or email is required. |
| `metadata` | object | No | Additional key-value pairs providing context about the event. Can include custom properties relevant to the event. |
| `created_at` | integer | Yes | Unix timestamp indicating when the event occurred. |
| `event_name` | string | Yes | The name of the event in past tense verb-noun format (e.g., 'updated-plan', 'purchased-item'). Describes what action occurred. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create data export

**Slug:** `INTERCOM_CREATE_DATA_EXPORT`

Tool to initiate an async data export job for message content. Use when you need to export messages created within a specific timeframe. Only one active job per workspace is allowed; exceeding this limit triggers a 429 error. Jobs expire two days after completion.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `created_at_after` | integer | Yes | Start date for data export; must be formatted as a UNIX timestamp. Only messages created after this time will be included. |
| `created_at_before` | integer | Yes | End date for data export; formatted as UNIX timestamp. This parameter is required by the API. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create external page

**Slug:** `INTERCOM_CREATE_EXTERNAL_PAGE`

Tool to create an external page in Fin Content Library or update an existing page by external ID. Use when you need to ingest new content or update existing content for AI-generated answers. Supports upsert behavior: if a page with the same source_id and external_id exists, it will be updated instead of creating a new one.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `url` | string | Yes | The page URL; used by Fin to attribute answers to sources. Must be a valid URL. |
| `html` | string | Yes | The body content of the external page in HTML format |
| `title` | string | Yes | The title of the external page |
| `locale` | string | Yes | Language code for the page. Must be 'en'. |
| `source_id` | integer | Yes | Identifier for the content import source. This links the page to a specific content import source in your workspace. |
| `external_id` | string | Yes | Unique ID from the source; enables upsert functionality. If a page with the same source_id and external_id exists, it will be updated instead of creating a new one. |
| `ai_agent_availability` | boolean | No | Whether Fin AI Agent can reference this content. Defaults to false if not provided. |
| `ai_copilot_availability` | boolean | No | Whether AI Copilot can use this content. Defaults to false if not provided. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create help center section

**Slug:** `INTERCOM_CREATE_HELP_CENTER_SECTION`

Tool to create a new help center section within a collection. Use when you need to add a new section to organize articles in the help center hierarchy (Help Center → Collections → Sections → Articles). Supports multilingual content via translated_content parameter.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | The name of the section. For multilingual sections, this will be the name of the default language's content. |
| `parent_id` | string | Yes | The collection ID where the section will be located. |
| `translated_content` | object | No | A dictionary of locale codes to translated content. Keys are locale codes (e.g., 'es', 'fr', 'de'). Each value contains the translated name and optional description for that locale. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create internal article

**Slug:** `INTERCOM_CREATE_INTERNAL_ARTICLE`

Tool to create a new internal article for team knowledge sharing. Use when you need to add new internal documentation or knowledge base articles for team members.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `body` | string | No | The content of the article (supports HTML). |
| `title` | string | Yes | The title of the article. |
| `locale` | string | No | Language/locale identifier for the article content. |
| `owner_id` | integer | Yes | The id of the owner of the article. |
| `author_id` | integer | Yes | The id of the author of the article. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create or update a company

**Slug:** `INTERCOM_CREATE_OR_UPDATE_A_COMPANY`

You can create or update a company. Companies will be only visible in Intercom when there is at least one associated user. Companies are looked up via `company_id` in a `POST` request, if not found via `company_id`, the new company will be created, if found, that company will be updated. {% admonition type="attention" name="Using `company_id`" %} You can set a unique `company_id` value when creating a company. However, it is not possible to update `company_id`. Be sure to set a unique value once upon creation of the company. {% /admonition %}

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | The name of the Company |
| `plan` | string | No | The name of the plan you have associated with the company. |
| `size` | integer | No | The number of employees in this company. |
| `website` | string | No | The URL for this company"s website. Please note that the value specified here is not validated. Accepts any string.  |
| `industry` | string | No | The industry that this company operates in. |
| `company_id` | string | No | The company id you have defined for the company. Can"t be updated |
| `monthly_spend` | integer | No | How much revenue the company generates for your business. Note that this will truncate floats. i.e. it only allow for whole integers, 155.98 will be truncated to 155. Note that this has an upper limit of 2**31-1 or 2147483647..  |
| `custom_attributes` | object | No | A hash of key/value pairs containing any other data about the company you want Intercom to store. Values must be strings, numbers, or booleans (not objects or arrays).  |
| `remote_created_at` | integer | No | The time the company was created by you. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create or update tag

**Slug:** `INTERCOM_CREATE_TAG`

Tool to create or update a tag, and optionally tag/untag companies or tag contacts. Use when you need to create a new tag, update an existing tag, or apply/remove tags to/from companies or users.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | No | The ID of an existing tag to update. Optional - only needed when updating a specific tag. |
| `name` | string | Yes | The name of the tag. Will be created if it doesn't exist, or the existing tag will be used if it does. |
| `users` | array | No | Optional list of users to tag. Each user must have an 'id' field. |
| `companies` | array | No | Optional list of companies to tag or untag. Each company should have either 'id' or 'company_id' field, and optionally 'untag': true to remove the tag. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create ticket

**Slug:** `INTERCOM_CREATE_TICKET`

Tool to create a ticket in Intercom to track customer requests and issues. Use when you need to create a new support ticket with specified type, contacts, and attributes.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `contacts` | array | Yes | Array of contact objects representing users affected by this ticket. Each contact must include one of: id, external_id, or email |
| `assignment` | object | No | Assignment information for the ticket |
| `company_id` | string | No | The ID of the company associated with this ticket |
| `created_at` | integer | No | Unix timestamp indicating when the ticket was created. Defaults to current time if not provided |
| `ticket_type_id` | string | Yes | The ID of the ticket type you want to create. This defines the structure and workflow for the ticket |
| `ticket_attributes` | object | No | Custom attribute key-value pairs for the ticket. Use '_default_title_' for the ticket title and '_default_description_' for the ticket description. Additional custom fields depend on your ticket type configuration |
| `conversation_to_link_id` | string | No | The ID of an existing conversation to link to this ticket |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create a ticket type

**Slug:** `INTERCOM_CREATE_TICKET_TYPE`

Tool to create a new ticket type that defines the data structure for tracking customer requests. Use when you need to establish a new category of tickets with specific fields and states.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `icon` | string | No | Emoji representation (from Twemoji Cheatsheet) |
| `name` | string | Yes | The designation for the ticket type |
| `category` | string | Yes | Classification as 'Customer', 'Back-office', or 'Tracker' (required) |
| `description` | string | No | Explanatory text about the ticket type |
| `is_internal` | boolean | No | Whether tickets are for internal use only; defaults to false |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create ticket type attribute

**Slug:** `INTERCOM_CREATE_TICKET_TYPE_ATTRIBUTE`

Tool to create a new attribute for a ticket type in Intercom. Use when you need to add custom attributes to ticket types for data collection.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | The name of the ticket type attribute |
| `data_type` | string ("string" | "list" | "integer" | "decimal" | "boolean" | "datetime" | "files") | Yes | The data type of the attribute. Allowed values: string, list, integer, decimal, boolean, datetime, files |
| `multiline` | boolean | No | Whether the attribute allows multiple lines of text (applicable for string data_type only) |
| `list_items` | string | No | A comma delimited list of items for the attribute value (applicable for list data_type only) |
| `description` | string | Yes | The description of the attribute presented to the teammate or contact |
| `ticket_type_id` | string | Yes | The unique identifier of the ticket type to add the attribute to |
| `visible_on_create` | boolean | No | Visibility to teammates during creation (default: true) |
| `required_to_create` | boolean | No | Whether teammates must fill this attribute when creating tickets (default: false) |
| `visible_to_contacts` | boolean | No | Visibility to contacts in Messenger (default: true) |
| `allow_multiple_values` | boolean | No | Whether the attribute allows multiple files to be attached (applicable for files data_type only) |
| `required_to_create_for_contacts` | boolean | No | Whether contacts must fill this attribute in Messenger (default: false) |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create event summaries

**Slug:** `INTERCOM_DATA_EVENT_SUMMARIES`

Tool to create event summaries for a user to track event occurrences. Use when you need to bulk update event counts for a user.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `user_id` | string | Yes | Your identifier for the user to create event summaries for |
| `event_summaries` | array | Yes | List of event summaries to create for the user |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete a collection

**Slug:** `INTERCOM_DELETE_A_COLLECTION`

You can delete a single collection by making a DELETE request to `https://api.intercom.io/collections/<id>`.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The unique identifier for the collection which is given by Intercom. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete a company

**Slug:** `INTERCOM_DELETE_A_COMPANY`

You can delete a single company.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique identifier for the company which is given by Intercom |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete an article

**Slug:** `INTERCOM_DELETE_AN_ARTICLE`

You can delete a single article by making a DELETE request to `https://api.intercom.io/articles/<id>`.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The unique identifier for the article which is given by Intercom. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete a tag

**Slug:** `INTERCOM_DELETE_A_TAG_DELETE_TAG`

Tool to delete a tag from Intercom workspace. Use when you need to permanently remove a tag that is no longer needed.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tag_id` | string | Yes | The unique identifier of the tag to delete |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete a visitor

**Slug:** `INTERCOM_DELETE_A_VISITOR`

Tool to delete a visitor from the Intercom workspace. Use when you need to permanently remove a visitor record.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique identifier for the visitor which is given by Intercom |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete a contact

**Slug:** `INTERCOM_DELETE_CONTACT`

Tool to delete a contact from the Intercom workspace. Use when you need to permanently remove a contact record.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `contact_id` | string | Yes | The unique identifier for the contact which is given by Intercom |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete content import source

**Slug:** `INTERCOM_DELETE_CONTENT_IMPORT_SOURCE`

Tool to delete a content import source and all its external pages. Use when you need to remove a content import source from Intercom. This operation is permanent and cannot be undone.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `source_id` | string | Yes | The unique identifier for the content import source which is given by Intercom. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete external page

**Slug:** `INTERCOM_DELETE_EXTERNAL_PAGE`

Tool to delete an external page from content library and AI answers. Use when you need to remove an external page from Intercom's AI knowledge base.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page_id` | string | Yes | The unique identifier for the external page provided by Intercom |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete internal article

**Slug:** `INTERCOM_DELETE_INTERNAL_ARTICLE`

Tool to delete a single internal article by ID. Use when you need to permanently remove an internal article from Intercom.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `internal_article_id` | integer | Yes | The unique identifier for the internal article which is given by Intercom. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete ticket

**Slug:** `INTERCOM_DELETE_TICKET`

Tool to delete a ticket from the Intercom system. Use when you need to permanently remove a ticket.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ticket_id` | string | Yes | The unique identifier for the ticket assigned by Intercom |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Detach a contact from tag

**Slug:** `INTERCOM_DETACH_A_CONTACT`

Tool to remove a tag from a specific contact in Intercom. Use when you need to detach or untag a contact.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tag_id` | string | Yes | The unique identifier for the tag which is given by Intercom |
| `contact_id` | string | Yes | The unique identifier for the contact which is given by Intercom |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Detach contact from company

**Slug:** `INTERCOM_DETACH_CONTACT_FROM_COMPANY`

Tool to detach a contact from a company in Intercom. Use when you need to remove a company association from a contact.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `company_id` | string | Yes | The unique identifier for the company which is given by Intercom |
| `contact_id` | string | Yes | The unique identifier for the contact which is given by Intercom |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Detach tag from conversation

**Slug:** `INTERCOM_DETACH_TAG_FROM_CONVERSATION`

Tool to remove a tag from a specific conversation in Intercom. Use when you need to detach or untag a conversation.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tag_id` | string | Yes | The unique identifier for the tag to be removed |
| `admin_id` | string | Yes | The unique identifier for the admin which is performing the action |
| `conversation_id` | string | Yes | The unique identifier for the conversation |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Detach tag from ticket

**Slug:** `INTERCOM_DETACH_TAG_FROM_TICKET`

Tool to remove a tag from a ticket in Intercom. Use when you need to detach or remove a specific tag from a ticket.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tag_id` | string | Yes | The unique identifier for the tag which is given by Intercom |
| `admin_id` | string | Yes | The unique identifier for the admin which is given by Intercom |
| `ticket_id` | string | Yes | The unique identifier for the ticket which is given by Intercom |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Download data export

**Slug:** `INTERCOM_DOWNLOAD_DATA_EXPORT`

Tool to download content data export from Intercom. Use when you need to retrieve exported message data from a completed data export job. The data is returned as a gzipped CSV file stream.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `job_identifier` | string | Yes | The location identifier where you can download your data. This is obtained from the download_url when a content data export job reaches 'complete' status. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Enqueue create ticket

**Slug:** `INTERCOM_ENQUEUE_CREATE_TICKET`

Tool to enqueue ticket creation for asynchronous processing. Use when you need to create a ticket in Intercom. The system attempts validation on inputs before tasks are enqueued.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `contacts` | array | Yes | List of contacts affected by the ticket (currently only one allowed). Provide at least one of: id, external_id, or email |
| `assignment` | object | No | Optional assignment details for the ticket |
| `company_id` | string | No | Associated company identifier |
| `created_at` | integer | No | Timestamp for ticket creation (current time if omitted) |
| `ticket_type_id` | string | Yes | The identifier of the ticket type you want to create |
| `ticket_attributes` | object | No | Ticket field values as key-value pairs. Default fields: _default_title_ and _default_description_. Supports strings, numbers, booleans, arrays, and file attributes |
| `skip_notifications` | boolean | No | Disable notifications when created |
| `conversation_to_link_id` | string | No | Conversation ID to link to the ticket |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Find a tag

**Slug:** `INTERCOM_FIND_TAG`

Tool to retrieve details for a specific tag by its ID. Use when you need to get information about a particular tag in the workspace.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tag_id` | string | Yes | The unique identifier for the tag within the workspace. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get a contact

**Slug:** `INTERCOM_GET_A_CONTACT`

You can fetch the details of a single contact.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | id |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get content import source

**Slug:** `INTERCOM_GET_CONTENT_IMPORT_SOURCE`

Tool to retrieve a content import source by its ID. Use when you need to fetch details about a specific content import source from Intercom's AI features.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `source_id` | string | Yes | The unique identifier for the content import source which is given by Intercom. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get conversation

**Slug:** `INTERCOM_GET_CONVERSATION`

Retrieves a specific conversation by ID with all messages and details. Key response caveats: `conversation_parts` are paginated — walk all cursors for complete transcripts. Fields `title`, `subject`, `source.body`, `conversation_parts.body`, `statistics`, and some contact properties can be null. System/workflow events appear in `conversation_parts` with null `body` or `author`; `first_admin_reply_at` may be null despite actual replies — use `last_admin_reply_at` for SLA calculations. Attachment URLs in `conversation_parts` are short-lived — download promptly. The `state` field and `open` boolean can diverge — re-fetch to verify state before assign/reply/close actions. Timestamps are Unix epoch seconds UTC. Use this tool (not INTERCOM_SEARCH_CONVERSATIONS) when full message context is required.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `display_as` | string | No | Display format for message content: plaintext or html Even with 'plaintext', fields like `subject` and `custom_attributes` may still contain raw HTML — sanitize separately. |
| `conversation_id` | string | Yes | The ID of the conversation to retrieve |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get entity counts

**Slug:** `INTERCOM_GET_COUNTS`

Tool to retrieve summary counts for Intercom app entities including companies, users, leads, tags, segments, and conversations. Use when you need to get statistics about the total number of entities in the workspace or conversation counts.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `type` | string | No | Set to 'conversation' to retrieve conversation-specific counts. If omitted, returns app total counts (companies, users, leads, tags, segments). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get custom object instance by external ID

**Slug:** `INTERCOM_GET_CUSTOM_OBJECT_INSTANCE_BY_EXTERNAL_ID`

Tool to retrieve a custom object instance by its external_id. Use when you need to fetch a specific custom object instance from Intercom using an identifier from your external system rather than Intercom's internal ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `external_id` | string | Yes | The unique identifier for the Custom Object instance in the external system it originated from |
| `custom_object_type_identifier` | string | Yes | The unique identifier of the custom object type (e.g., 'Order', 'Product') |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get external page

**Slug:** `INTERCOM_GET_EXTERNAL_PAGE`

Tool to retrieve an external page from Fin Content Library by ID. Use when you need to fetch details of a specific external page including its content, metadata, and AI availability settings.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page_id` | string | Yes | The unique identifier for the external page provided by Intercom |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get ticket

**Slug:** `INTERCOM_GET_TICKET`

Tool to retrieve a ticket from Intercom. Use when you need to fetch comprehensive details about a specific ticket including state, type, attributes, and contacts.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ticket_id` | string | Yes | The unique identifier for the ticket assigned by Intercom |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get a ticket type

**Slug:** `INTERCOM_GET_TICKET_TYPE`

Tool to retrieve details for a specific ticket type by its ID. Use when you need to get complete information about a ticket type including its attributes and states.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ticket_type_id` | string | Yes | The unique identifier for the ticket type to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Identify an admin

**Slug:** `INTERCOM_IDENTIFY_AN_ADMIN`

You can view the currently authorised admin along with the embedded app object (a "workspace" in legacy terminology). > 🚧 Single Sign On > > If you are building a custom "Log in with Intercom" flow for your site, and you call the `/me` endpoint to identify the logged-in user, you should not accept any sign-ins from users with unverified email addresses as it poses a potential impersonation security risk.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve job status

**Slug:** `INTERCOM_JOBS_STATUS`

Tool to retrieve the status of job execution. Use when checking progress and outcome of asynchronous operations like data imports or exports.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `job_id` | string | Yes | The unique identifier for the job which is given by Intercom |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List all activity logs

**Slug:** `INTERCOM_LIST_ALL_ACTIVITY_LOGS`

You can get a log of activities by all admins in an app.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `created_at_after` | string | Yes | The start date that you request data for. It must be formatted as a UNIX timestamp.  |
| `created_at_before` | string | No | The end date that you request data for. It must be formatted as a UNIX timestamp.  |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List all admins

**Slug:** `INTERCOM_LIST_ALL_ADMINS`

You can fetch a list of admins for a given workspace.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List all articles

**Slug:** `INTERCOM_LIST_ALL_ARTICLES`

You can fetch a list of all articles by making a GET request to `https://api.intercom.io/articles`. > 📘 How are the articles sorted and ordered? > > Articles will be returned in descending order on the `updated_at` attribute. This means if you need to iterate through results then we'll show the most recently updated articles first.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List all collections

**Slug:** `INTERCOM_LIST_ALL_COLLECTIONS`

You can fetch a list of all collections by making a GET request to `https://api.intercom.io/help_center/collections`. Collections will be returned in descending order on the `updated_at` attribute. This means if you need to iterate through results then we'll show the most recently updated collections first.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List all companies

**Slug:** `INTERCOM_LIST_ALL_COMPANIES`

You can list companies. The company list is sorted by the `last_request_at` field and by default is ordered descending, most recently requested first. Note that the API does not include companies who have no associated users in list responses. When using the Companies endpoint and the pages object to iterate through the returned companies, there is a limit of 10,000 Companies that can be returned. If you need to list or iterate on more than 10,000 Companies, please use the [Scroll API](https://developers.intercom.com/reference#iterating-over-all-companies). {% admonition type="warning" name="Pagination" %} You can use pagination to limit the number of results returned. The default is `20` results per page. See the [pagination section](https://developers.intercom.com/docs/build-an-integration/learn-more/rest-apis/pagination/#pagination-for-list-apis) for more details on how to use the `starting_after` param. {% /admonition %}

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | The page of results to fetch. Defaults to first page |
| `order` | string | No | `asc` or `desc`. Return the companies in ascending or descending order. Defaults to desc  |
| `per_page` | integer | No | How many results to return per page. Defaults to 15. Maximum allowed value is 60. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List all help centers

**Slug:** `INTERCOM_LIST_ALL_HELP_CENTERS`

You can list all Help Centers by making a GET request to `https://api.intercom.io/help_center/help_centers`.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List all macros

**Slug:** `INTERCOM_LIST_ALL_MACROS`

Tool to fetch a list of all macros (saved replies) in your workspace for use in automating responses. The macros are returned in descending order by updated_at. Use when you need to retrieve available macros or sync macro data.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `per_page` | integer | No | Number of results to return per page. Controls pagination size. |
| `updated_since` | integer | No | Unix timestamp to retrieve only macros modified after this time. Useful for incremental syncs. |
| `starting_after` | string | No | Cursor for pagination - Base64-encoded JSON array containing [updated_at, id] of the last item from previous page. Use this to fetch the next page of results. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List all notes

**Slug:** `INTERCOM_LIST_ALL_NOTES`

You can fetch a list of notes that are associated to a contact.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique identifier of a contact. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List attached companies for contact

**Slug:** `INTERCOM_LIST_ATTACHED_COMPANIES_FOR_CONTACT`

You can fetch a list of companies that are associated to a contact.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique identifier for the contact which is given by Intercom |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List attached contacts

**Slug:** `INTERCOM_LIST_ATTACHED_CONTACTS`

You can fetch a list of all contacts that belong to a company.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique identifier for the company which is given by Intercom |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List attached segments for companies

**Slug:** `INTERCOM_LIST_ATTACHED_SEGMENTS_FOR_COMPANIES`

You can fetch a list of all segments that belong to a company.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique identifier for the company which is given by Intercom |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List attached segments for contact

**Slug:** `INTERCOM_LIST_ATTACHED_SEGMENTS_FOR_CONTACT`

You can fetch a list of segments that are associated to a contact.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `contact_id` | string | Yes | The unique identifier for the contact which is given by Intercom |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List away status reasons

**Slug:** `INTERCOM_LIST_AWAY_STATUS_REASONS`

Tool to retrieve all away status reasons for a workspace including deleted ones. Use when you need to list available away status options for team members.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List calls

**Slug:** `INTERCOM_LIST_CALLS`

Tool to list all phone calls from Intercom with pagination support. Use when you need to retrieve call records, view call history, or iterate through calls.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | The page of results to fetch. Defaults to first page. |
| `per_page` | integer | No | How many results to display per page. Defaults to 25. Maximum 25. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List calls with transcripts

**Slug:** `INTERCOM_LIST_CALLS_WITH_TRANSCRIPTS`

Tool to retrieve calls by conversation IDs with transcripts when available. Use when you need to get call records with their transcripts for specific conversations. Maximum 20 conversation IDs per request.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `conversation_ids` | array | Yes | A list of conversation IDs to fetch calls for. Must contain between 1 and 20 conversation IDs. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List company notes

**Slug:** `INTERCOM_LIST_COMPANY_NOTES`

Tool to list all notes associated with a specific company. Use when you need to retrieve all notes that have been added to a company record.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `company_id` | string | Yes | The unique identifier for the company which is given by Intercom |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List all contacts

**Slug:** `INTERCOM_LIST_CONTACTS`

Tool to list all contacts (users or leads) in your Intercom workspace with pagination support. Use when you need to retrieve multiple contacts or iterate through all contacts in the workspace.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `per_page` | integer | No | Number of results per page. Maximum 150. |
| `starting_after` | string | No | Pagination cursor to fetch the next page of results. Use the value from pages.next.starting_after in the previous response. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List content import sources

**Slug:** `INTERCOM_LIST_CONTENT_IMPORT_SOURCES`

Tool to retrieve all content import sources for the workspace. Use when you need to list all content sources for Fin Content Library.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `per_page` | integer | No | Number of items per page. Default: 20, max: 150. |
| `starting_after` | string | No | Cursor for fetching the next page of results. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List conversations

**Slug:** `INTERCOM_LIST_CONVERSATIONS`

Lists all conversations from Intercom with pagination support. This endpoint does not support filtering by state, assignee, or other attributes - use INTERCOM_SEARCH_CONVERSATIONS for filtering. Paginate by reading pages.next.starting_after from each response and passing it as starting_after until pages.next is absent. Response fields including title, source.body, conversation_parts.body, and statistics may be null; guard before string operations.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `per_page` | integer | No | Number of conversations per page (1-150) |
| `starting_after` | string | No | Pagination cursor - ID of the last conversation from previous page |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List data attributes

**Slug:** `INTERCOM_LIST_DATA_ATTRIBUTES`

Tool to list all data attributes for contacts, companies, and conversations. Use when you need to retrieve metadata about available data attributes.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `model` | string ("contact" | "company" | "conversation") | No | Filter attributes by model type. Accepts: 'contact', 'company', or 'conversation' |
| `include_archived` | boolean | No | Include archived attributes in results. Defaults to false (non-archived only) |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List data events

**Slug:** `INTERCOM_LIST_DATA_EVENTS`

Tool to retrieve a log of data events belonging to a customer. Use when you need to list events for a specific user. Note: Only events less than 90 days old can be listed.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `email` | string | No | Contact's email address. Required if user_id and intercom_user_id are not provided. |
| `summary` | boolean | No | Flag to include event summaries in response |
| `user_id` | string | No | Your internal identifier for the user. Required if intercom_user_id and email are not provided. |
| `intercom_user_id` | string | No | Intercom's identifier for the contact. Required if user_id and email are not provided. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List external pages

**Slug:** `INTERCOM_LIST_EXTERNAL_PAGES`

Tool to list all external pages from Fin Content Library. Use when you need to retrieve external pages used for AI-generated answers in Intercom.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `per_page` | integer | No | Number of items per page. Default: 20, max: 150. |
| `starting_after` | string | No | Cursor for fetching the next page of results. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List help center sections

**Slug:** `INTERCOM_LIST_HELP_CENTER_SECTIONS`

Tool to fetch a list of all help center sections in descending order by updated_at. Use when you need to retrieve sections from the help center hierarchy (Help Center → Collections → Sections → Articles).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `per_page` | integer | No | Number of results per page. Maximum is 150. |
| `starting_after` | string | No | Cursor value for pagination to fetch the next page of results. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List internal articles

**Slug:** `INTERCOM_LIST_INTERNAL_ARTICLES`

Fetches one page of internal articles from Intercom. Uses Intercom's cursor-based pagination via `starting_after`. ONE Intercom API call is made per invocation; pagination is caller-driven via the `starting_after` request parameter and the `next_starting_after` field in the response.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `per_page` | integer | No | Number of internal articles to fetch in this single call (1-200). Defaults to 25. |
| `starting_after` | string | No | Pagination cursor for cursor-based pagination. Omit on the first call. Pass the `next_starting_after` value from a previous response to fetch the next page. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List all news items

**Slug:** `INTERCOM_LIST_NEWS_ITEMS`

Tool to fetch a list of all news items from Intercom. Use when you need to retrieve news items posted in the workspace.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List all segments

**Slug:** `INTERCOM_LIST_SEGMENTS`

Tool to retrieve all segments defined within a workspace for filtering and categorizing contacts. Use when you need to get a list of all available segments or check segment counts.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `include_count` | boolean | No | Include the count of contacts in each segment. When true, the 'count' field will be populated in each segment object. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List subscriptions for a contact

**Slug:** `INTERCOM_LIST_SUBSCRIPTIONS_FOR_A_CONTACT`

You can fetch a list of subscription types that are attached to a contact. These can be subscriptions that a user has 'opted-in' to or has 'opted-out' from, depending on the subscription type. This will return a list of Subscription Type objects that the contact is associated with. The data property will show a combined list of: 1.Opt-out subscription types that the user has opted-out from. 2.Opt-in subscription types that the user has opted-in to receiving.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `contact_id` | string | Yes | The unique identifier for the contact which is given by Intercom |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List subscription types

**Slug:** `INTERCOM_LIST_SUBSCRIPTION_TYPES`

Tool to list all subscription types available in the workspace. Use when you need to retrieve subscription configuration details including state, translations, consent type, and supported content types.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List all tags

**Slug:** `INTERCOM_LIST_TAGS`

Tool to fetch all tags for the workspace. Use when you need to retrieve all available tags that can be applied to contacts, companies, and conversations.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List tags attached to a contact

**Slug:** `INTERCOM_LIST_TAGS_ATTACHED_TO_A_CONTACT`

You can fetch a list of all tags that are attached to a specific contact.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `contact_id` | string | Yes | The unique identifier for the contact which is given by Intercom |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List all teams

**Slug:** `INTERCOM_LIST_TEAMS`

Tool to retrieve all teams within a workspace. Use when you need to get a list of all available teams, their members, or assignment configurations.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List all ticket states

**Slug:** `INTERCOM_LIST_TICKET_STATES`

Tool to fetch all ticket states for the workspace. Use when you need to retrieve all configured ticket states, including both active and archived ones.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List all ticket types

**Slug:** `INTERCOM_LIST_TICKET_TYPES`

Tool to retrieve all ticket types for the workspace. Use when you need to get all available ticket type configurations including attributes and states.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Merge a lead and a user

**Slug:** `INTERCOM_MERGE_A_LEAD_AND_A_USER`

You can merge a contact with a `role` of `lead` into a contact with a `role` of `user`.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `from` | string | No | The unique identifier for the contact to merge away from. Must be a lead.  |
| `into` | string | No | The unique identifier for the contact to merge into. Must be a user. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Register Fin Voice call

**Slug:** `INTERCOM_REGISTER_FIN_VOICE_CALL`

Tool to register a Fin Voice call with Intercom. Use when you need to create a record of an external voice call in Intercom, enabling AI-powered call analysis and customer interaction tracking.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | object | No | Additional metadata about the call as key-value pairs. Use this to store custom information about the call. |
| `source` | string ("five9" | "zoom_phone" | "aws_connect") | No | Enum for supported call sources. |
| `call_id` | string | Yes | External call identifier from the call provider. This is a unique identifier for the call in your system. |
| `phone_number` | string | Yes | Phone number in E.164 format for the call (e.g., +1234567890). Must start with '+' followed by country code and number. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Remove subscription from a contact

**Slug:** `INTERCOM_REMOVE_SUBSCRIPTION_FROM_A_CONTACT`

You can remove a specific subscription from a contact. This will return a subscription type model for the subscription type that was removed from the contact.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique identifier for the subscription type which is given by Intercom  |
| `contact_id` | string | Yes | The unique identifier for the contact which is given by Intercom |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Remove tag from a contact

**Slug:** `INTERCOM_REMOVE_TAG_FROM_A_CONTACT`

You can remove tag from a specific contact. This will return a tag object for the tag that was removed from the contact.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique identifier for the tag which is given by Intercom |
| `contact_id` | string | Yes | The unique identifier for the contact which is given by Intercom |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Reopen conversation

**Slug:** `INTERCOM_REOPEN_CONVERSATION`

Reopens a closed conversation in Intercom. Only operates correctly on conversations in a closed state; verify state via INTERCOM_GET_CONVERSATION before calling, as using on open or snoozed conversations may produce unexpected results.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `body` | string | No | Optional message to send when reopening the conversation |
| `admin_id` | string | Yes | ID of the admin reopening the conversation |
| `conversation_id` | string | Yes | The ID of the conversation to reopen |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Reply to ticket

**Slug:** `INTERCOM_REPLY_TICKET`

Tool to reply to a ticket with a message from admin or contact, or with a note for admins. Use when you need to add a response or comment to an existing ticket.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `body` | string | Yes | The content of the reply. HTML is supported for notes. |
| `email` | string | No | Contact's email address for contact replies. Used when replying as a contact. |
| `user_id` | string | No | External contact identifier for contact replies. Used when replying as a contact. |
| `admin_id` | string | No | Admin identifier for admin replies. Required when replying as an admin. |
| `ticket_id` | string | Yes | The unique identifier for the ticket to reply to |
| `created_at` | integer | No | Unix timestamp for when the reply was created. Optional, used for contact replies. |
| `message_type` | string | Yes | Type of message to send. Must be 'comment', 'note', or 'quick_reply' |
| `attachment_urls` | array | No | List of URLs of attachments to include in the reply |
| `intercom_user_id` | string | No | Contact identifier from Intercom for contact replies. Used when replying as a contact. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Reply to conversation

**Slug:** `INTERCOM_REPLY_TO_CONVERSATION`

Sends a reply to an existing conversation in Intercom. Always send reply before closing a conversation — never parallelize with INTERCOM_CLOSE_CONVERSATION on the same conversation. Verify conversation state via INTERCOM_GET_CONVERSATION before replying, as open/snoozed/closed states may diverge from cached values.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `admin_id` | string | Yes | ID of the admin sending the reply. Required - must be explicitly provided. |
| `message_body` | string | Yes | The message content to send as a reply |
| `message_type` | string | No | Type of message: comment, note, or assignment |
| `attachment_urls` | array | No | List of attachment URLs to include in the reply URLs must be publicly accessible (no auth required); private or oversized URLs will cause the request to fail. |
| `conversation_id` | string | Yes | The ID of the conversation to reply to |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve a collection

**Slug:** `INTERCOM_RETRIEVE_A_COLLECTION`

You can fetch the details of a single collection by making a GET request to `https://api.intercom.io/help_center/collections/<id>`.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The unique identifier for the collection which is given by Intercom. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve a company by id

**Slug:** `INTERCOM_RETRIEVE_A_COMPANY_BY_ID`

You can fetch a single company.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique identifier for the company which is given by Intercom |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve a help center

**Slug:** `INTERCOM_RETRIEVE_A_HELP_CENTER`

You can fetch the details of a single Help Center by making a GET request to `https://api.intercom.io/help_center/help_center/<id>`.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The unique identifier for the collection which is given by Intercom. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve job status

**Slug:** `INTERCOM_RETRIEVE_A_JOB_STATUS`

Tool to retrieve the status of a data export job. Use when checking the progress of an export job by providing the job identifier.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `job_identifier` | string | Yes | The unique identifier for the export job whose status you want to check. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve a macro

**Slug:** `INTERCOM_RETRIEVE_A_MACRO`

Tool to fetch a single macro (saved reply) by its ID. The macro will only be returned if it is visible to the authenticated user based on its visibility settings.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique identifier for the macro to retrieve |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve an admin

**Slug:** `INTERCOM_RETRIEVE_AN_ADMIN`

You can retrieve the details of a single admin.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The unique identifier of a given admin |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve an article

**Slug:** `INTERCOM_RETRIEVE_AN_ARTICLE`

You can fetch the details of a single article by making a GET request to `https://api.intercom.io/articles/<id>`.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The unique identifier for the article which is given by Intercom. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve a segment

**Slug:** `INTERCOM_RETRIEVE_A_SEGMENT`

Tool to retrieve details for a single segment by its ID. Use when you need to get information about a specific segment including its name, type, and optionally the count of items.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `segment_id` | string | Yes | The unique identifier of the segment to retrieve. |
| `include_count` | boolean | No | When set to true, includes the count field showing the number of items in the segment. Only applicable for user segments. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve companies

**Slug:** `INTERCOM_RETRIEVE_COMPANIES`

You can fetch a single company by passing in `company_id` or `name`. `https://api.intercom.io/companies?name={name}` `https://api.intercom.io/companies?company_id={company_id}` You can fetch all companies and filter by `segment_id` or `tag_id` as a query parameter. `https://api.intercom.io/companies?tag_id={tag_id}` `https://api.intercom.io/companies?segment_id={segment_id}`

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | The `name` of the company to filter by. |
| `page` | integer | No | The page of results to fetch. Defaults to first page |
| `tag_id` | string | No | The `tag_id` of the company to filter by. |
| `per_page` | integer | No | How many results to display per page. Defaults to 15 |
| `company_id` | string | No | The `company_id` of the company to filter by. |
| `segment_id` | string | No | The `segment_id` of the company to filter by. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve internal article

**Slug:** `INTERCOM_RETRIEVE_INTERNAL_ARTICLE`

Tool to retrieve an internal article by ID from Intercom. Use when you need to fetch details of a specific internal article including its title, body content, and metadata.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `internal_article_id` | integer | Yes | The unique identifier for the internal article which is given by Intercom. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve note

**Slug:** `INTERCOM_RETRIEVE_NOTE`

Tool to retrieve details of a single note by its identifier. Use when you need to fetch the complete information about a specific note.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `note_id` | string | Yes | The unique identifier of the note to retrieve |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve a team

**Slug:** `INTERCOM_RETRIEVE_TEAM`

Tool to retrieve detailed information about a specific team by ID. Use when you need to get team details including members and assignment configuration.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `team_id` | string | Yes | The unique identifier of the team to retrieve |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve visitor with user ID

**Slug:** `INTERCOM_RETRIEVE_VISITOR_WITH_USER_ID`

Tool to retrieve a specific visitor's details using their user_id. Use when you need to fetch comprehensive visitor information including profile data, location, and activity metrics.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `user_id` | string | Yes | A unique identifier for the visitor that you've assigned |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Scroll over all companies

**Slug:** `INTERCOM_SCROLL_OVER_ALL_COMPANIES`

The `list all companies` functionality does not work well for huge datasets, and can result in errors and performance problems when paging deeply. The Scroll API provides an efficient mechanism for iterating over all companies in a dataset. - Each app can only have 1 scroll open at a time. You'll get an error message if you try to have more than one open per app. You can get the first page of companies by simply sending a GET request to the scroll endpoint. For subsequent requests you will need to use the scroll parameter from the response type="danger" name="Scroll network timeouts". Since scroll is often used on large datasets network errors such as timeouts can be encountered. When this occurs you will see a HTTP 500 error with the following message: "Request failed due to an internal network error. Please restart the scroll operation." If this happens, you will need to restart your scroll query.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `scroll_param` | string | No | Scroll Param |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Search contacts

**Slug:** `INTERCOM_SEARCH_CONTACTS`

Tool to search for contacts using query filters with operators. Use when finding contacts by role, email, name, or attributes. Response entries may include null or non-dictionary values; guard against missing/null fields before accessing nested properties. A contact may have multiple emails or contact_ids; deduplicate when aggregating across searches.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `query` | string | Yes | Search query as a JSON string. Single filter: {"field": "role", "operator": "=", "value": "user"}. Multiple: {"operator": "AND", "value": [filter1, filter2]} |
| `per_page` | integer | No | Number of results per page (1-150) |
| `starting_after` | string | No | Cursor for pagination |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Search conversations

**Slug:** `INTERCOM_SEARCH_CONVERSATIONS`

Searches for conversations using query string with support for filtering and sorting

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `query` | string | Yes | JSON object defining the Intercom search query. Example: '{"field": "created_at", "operator": ">", "value": "1600000000"}'. For compound queries use: '{"operator": "AND", "value": [{"field": "created_at", "operator": ">", "value": "1600000000"}]}'. |
| `per_page` | integer | No | Number of conversations per page (1-150) |
| `sort_field` | string | No | Field to sort by: created_at, updated_at, waiting_since |
| `sort_order` | string | No | Sort order: ascending or descending |
| `starting_after` | string | No | Pagination cursor - ID of the last conversation from previous page |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Search for articles

**Slug:** `INTERCOM_SEARCH_FOR_ARTICLES`

You can search for articles by making a GET request to `https://api.intercom.io/articles/search`.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `state` | string | No | The state of the Articles returned. One of `published`, `draft` or `all`.  |
| `phrase` | string | No | The phrase within your articles to search for. |
| `highlight` | boolean | No | Return a highlighted version of the matching content within your articles. Refer to the response schema for more details.  |
| `help_center_id` | integer | No | The ID of the Help Center to search in. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Search internal articles

**Slug:** `INTERCOM_SEARCH_INTERNAL_ARTICLES`

Searches one page of internal articles in Intercom. Uses Intercom's cursor-based pagination via `starting_after`. ONE Intercom API call is made per invocation; pagination is caller-driven via the `starting_after` request parameter and the `next_starting_after` field in the response. Optionally filtered by `folder_id`.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `per_page` | integer | No | Number of internal articles to fetch in this single call (1-200). Defaults to 25. |
| `folder_id` | string | No | The ID of the folder to search in. If not provided, searches across all folders. |
| `starting_after` | string | No | Pagination cursor for cursor-based pagination. Omit on the first call. Pass the `next_starting_after` value from a previous response to fetch the next page. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Search tickets

**Slug:** `INTERCOM_SEARCH_TICKETS`

Tool to search tickets in Intercom by filtering attribute values. Use when you need to find tickets matching specific criteria like state, creation date, assignment, or custom attributes.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `query` | object | Yes | Query object containing filters to search tickets. Can be simple (single field/value) or complex (AND/OR with multiple filters) |
| `pagination` | object | No | Pagination settings for search results |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Set admin to away

**Slug:** `INTERCOM_SET_ADMIN_TO_AWAY`

Tool to set an admin to away status in Intercom. Use when you need to mark an admin as away, optionally with a specific reason and reassignment behavior.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `admin_id` | integer | Yes | The unique identifier of the admin to set away |
| `away_mode_enabled` | boolean | No | Set to "true" to change the status of the admin to away. |
| `away_mode_reassign` | boolean | No | Set to "true" to assign any new conversation replies to your default inbox. |
| `away_status_reason_id` | integer | No | The unique identifier of the away status reason |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Set an admin to away

**Slug:** `INTERCOM_SET_AN_ADMIN_TO_AWAY`

You can set an Admin as away for the Inbox.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The unique identifier of a given admin |
| `away_mode_enabled` | boolean | No | Set to "true" to change the status of the admin to away. |
| `away_mode_reassign` | boolean | No | Set to "true" to assign any new conversation replies to your default inbox.  |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Show call

**Slug:** `INTERCOM_SHOW_CALL`

Tool to retrieve a single call by ID from Intercom. Use when you need to get detailed information about a specific phone call.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `call_id` | string | Yes | The unique identifier of the call to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Show call transcript

**Slug:** `INTERCOM_SHOW_CALL_TRANSCRIPT`

Tool to get call transcript by call ID. Use when you need to retrieve the transcript text from a recorded call.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `call_id` | string | Yes | The unique identifier for the call |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Show contact by external ID

**Slug:** `INTERCOM_SHOW_CONTACT_BY_EXTERNAL_ID`

Tool to retrieve a contact by their external ID. Use when you need to fetch contact details using an identifier from your external system rather than Intercom's internal ID. Only supports users, not leads.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `external_id` | string | Yes | The unique identifier for the contact which is provided by the Client in their external system |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Unarchive contact

**Slug:** `INTERCOM_UNARCHIVE_CONTACT`

Tool to unarchive a previously archived contact in Intercom. Use when you need to restore an archived contact by their ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `contact_id` | string | Yes | The unique identifier for the contact to unarchive |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update a collection

**Slug:** `INTERCOM_UPDATE_A_COLLECTION`

You can update the details of a single collection by making a PUT request to `https://api.intercom.io/collections/<id>`.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The unique identifier for the collection which is given by Intercom. |
| `name` | string | No | The name of the collection. For multilingual collections, this will be the name of the default language"s content.  |
| `parent_id` | string | No | The id of the parent collection. If `null` then it will be updated as the first level collection.  |
| `description` | string | No | The description of the collection. For multilingual collections, this will be the description of the default language"s content.  |
| `translated__content__type` | string ("None" | "group_translated_content") | No | The type of object - group_translated_content. |
| `translated__content__ar__name` | string | No | The name of the collection or section. |
| `translated__content__ar__type` | string ("None" | "group_content") | No | The type of object - `group_content` . |
| `translated__content__bg__name` | string | No | The name of the collection or section. |
| `translated__content__bg__type` | string ("None" | "group_content") | No | The type of object - `group_content` . |
| `translated__content__bs__name` | string | No | The name of the collection or section. |
| `translated__content__bs__type` | string ("None" | "group_content") | No | The type of object - `group_content` . |
| `translated__content__ca__name` | string | No | The name of the collection or section. |
| `translated__content__ca__type` | string ("None" | "group_content") | No | The type of object - `group_content` . |
| `translated__content__cs__name` | string | No | The name of the collection or section. |
| `translated__content__cs__type` | string ("None" | "group_content") | No | The type of object - `group_content` . |
| `translated__content__da__name` | string | No | The name of the collection or section. |
| `translated__content__da__type` | string ("None" | "group_content") | No | The type of object - `group_content` . |
| `translated__content__de__name` | string | No | The name of the collection or section. |
| `translated__content__de__type` | string ("None" | "group_content") | No | The type of object - `group_content` . |
| `translated__content__el__name` | string | No | The name of the collection or section. |
| `translated__content__el__type` | string ("None" | "group_content") | No | The type of object - `group_content` . |
| `translated__content__en__name` | string | No | The name of the collection or section. |
| `translated__content__en__type` | string ("None" | "group_content") | No | The type of object - `group_content` . |
| `translated__content__es__name` | string | No | The name of the collection or section. |
| `translated__content__es__type` | string ("None" | "group_content") | No | The type of object - `group_content` . |
| `translated__content__et__name` | string | No | The name of the collection or section. |
| `translated__content__et__type` | string ("None" | "group_content") | No | The type of object - `group_content` . |
| `translated__content__fi__name` | string | No | The name of the collection or section. |
| `translated__content__fi__type` | string ("None" | "group_content") | No | The type of object - `group_content` . |
| `translated__content__fr__name` | string | No | The name of the collection or section. |
| `translated__content__fr__type` | string ("None" | "group_content") | No | The type of object - `group_content` . |
| `translated__content__he__name` | string | No | The name of the collection or section. |
| `translated__content__he__type` | string ("None" | "group_content") | No | The type of object - `group_content` . |
| `translated__content__hr__name` | string | No | The name of the collection or section. |
| `translated__content__hr__type` | string ("None" | "group_content") | No | The type of object - `group_content` . |
| `translated__content__hu__name` | string | No | The name of the collection or section. |
| `translated__content__hu__type` | string ("None" | "group_content") | No | The type of object - `group_content` . |
| `translated__content__id__name` | string | No | The name of the collection or section. |
| `translated__content__id__type` | string ("None" | "group_content") | No | The type of object - `group_content` . |
| `translated__content__it__name` | string | No | The name of the collection or section. |
| `translated__content__it__type` | string ("None" | "group_content") | No | The type of object - `group_content` . |
| `translated__content__ja__name` | string | No | The name of the collection or section. |
| `translated__content__ja__type` | string ("None" | "group_content") | No | The type of object - `group_content` . |
| `translated__content__ko__name` | string | No | The name of the collection or section. |
| `translated__content__ko__type` | string ("None" | "group_content") | No | The type of object - `group_content` . |
| `translated__content__lt__name` | string | No | The name of the collection or section. |
| `translated__content__lt__type` | string ("None" | "group_content") | No | The type of object - `group_content` . |
| `translated__content__lv__name` | string | No | The name of the collection or section. |
| `translated__content__lv__type` | string ("None" | "group_content") | No | The type of object - `group_content` . |
| `translated__content__mn__name` | string | No | The name of the collection or section. |
| `translated__content__mn__type` | string ("None" | "group_content") | No | The type of object - `group_content` . |
| `translated__content__nb__name` | string | No | The name of the collection or section. |
| `translated__content__nb__type` | string ("None" | "group_content") | No | The type of object - `group_content` . |
| `translated__content__nl__name` | string | No | The name of the collection or section. |
| `translated__content__nl__type` | string ("None" | "group_content") | No | The type of object - `group_content` . |
| `translated__content__pl__name` | string | No | The name of the collection or section. |
| `translated__content__pl__type` | string ("None" | "group_content") | No | The type of object - `group_content` . |
| `translated__content__pt__name` | string | No | The name of the collection or section. |
| `translated__content__pt__type` | string ("None" | "group_content") | No | The type of object - `group_content` . |
| `translated__content__ro__name` | string | No | The name of the collection or section. |
| `translated__content__ro__type` | string ("None" | "group_content") | No | The type of object - `group_content` . |
| `translated__content__ru__name` | string | No | The name of the collection or section. |
| `translated__content__ru__type` | string ("None" | "group_content") | No | The type of object - `group_content` . |
| `translated__content__sl__name` | string | No | The name of the collection or section. |
| `translated__content__sl__type` | string ("None" | "group_content") | No | The type of object - `group_content` . |
| `translated__content__sr__name` | string | No | The name of the collection or section. |
| `translated__content__sr__type` | string ("None" | "group_content") | No | The type of object - `group_content` . |
| `translated__content__sv__name` | string | No | The name of the collection or section. |
| `translated__content__sv__type` | string ("None" | "group_content") | No | The type of object - `group_content` . |
| `translated__content__tr__name` | string | No | The name of the collection or section. |
| `translated__content__tr__type` | string ("None" | "group_content") | No | The type of object - `group_content` . |
| `translated__content__vi__name` | string | No | The name of the collection or section. |
| `translated__content__vi__type` | string ("None" | "group_content") | No | The type of object - `group_content` . |
| `translated__content__pt__BR__name` | string | No | The name of the collection or section. |
| `translated__content__pt__BR__type` | string ("None" | "group_content") | No | The type of object - `group_content` . |
| `translated__content__zh__CN__name` | string | No | The name of the collection or section. |
| `translated__content__zh__CN__type` | string ("None" | "group_content") | No | The type of object - `group_content` . |
| `translated__content__zh__TW__name` | string | No | The name of the collection or section. |
| `translated__content__zh__TW__type` | string ("None" | "group_content") | No | The type of object - `group_content` . |
| `translated__content__ar__description` | string | No | The description of the collection. Only available for collections. |
| `translated__content__bg__description` | string | No | The description of the collection. Only available for collections. |
| `translated__content__bs__description` | string | No | The description of the collection. Only available for collections. |
| `translated__content__ca__description` | string | No | The description of the collection. Only available for collections. |
| `translated__content__cs__description` | string | No | The description of the collection. Only available for collections. |
| `translated__content__da__description` | string | No | The description of the collection. Only available for collections. |
| `translated__content__de__description` | string | No | The description of the collection. Only available for collections. |
| `translated__content__el__description` | string | No | The description of the collection. Only available for collections. |
| `translated__content__en__description` | string | No | The description of the collection. Only available for collections. |
| `translated__content__es__description` | string | No | The description of the collection. Only available for collections. |
| `translated__content__et__description` | string | No | The description of the collection. Only available for collections. |
| `translated__content__fi__description` | string | No | The description of the collection. Only available for collections. |
| `translated__content__fr__description` | string | No | The description of the collection. Only available for collections. |
| `translated__content__he__description` | string | No | The description of the collection. Only available for collections. |
| `translated__content__hr__description` | string | No | The description of the collection. Only available for collections. |
| `translated__content__hu__description` | string | No | The description of the collection. Only available for collections. |
| `translated__content__id__description` | string | No | The description of the collection. Only available for collections. |
| `translated__content__it__description` | string | No | The description of the collection. Only available for collections. |
| `translated__content__ja__description` | string | No | The description of the collection. Only available for collections. |
| `translated__content__ko__description` | string | No | The description of the collection. Only available for collections. |
| `translated__content__lt__description` | string | No | The description of the collection. Only available for collections. |
| `translated__content__lv__description` | string | No | The description of the collection. Only available for collections. |
| `translated__content__mn__description` | string | No | The description of the collection. Only available for collections. |
| `translated__content__nb__description` | string | No | The description of the collection. Only available for collections. |
| `translated__content__nl__description` | string | No | The description of the collection. Only available for collections. |
| `translated__content__pl__description` | string | No | The description of the collection. Only available for collections. |
| `translated__content__pt__description` | string | No | The description of the collection. Only available for collections. |
| `translated__content__ro__description` | string | No | The description of the collection. Only available for collections. |
| `translated__content__ru__description` | string | No | The description of the collection. Only available for collections. |
| `translated__content__sl__description` | string | No | The description of the collection. Only available for collections. |
| `translated__content__sr__description` | string | No | The description of the collection. Only available for collections. |
| `translated__content__sv__description` | string | No | The description of the collection. Only available for collections. |
| `translated__content__tr__description` | string | No | The description of the collection. Only available for collections. |
| `translated__content__vi__description` | string | No | The description of the collection. Only available for collections. |
| `translated__content__pt__BR__description` | string | No | The description of the collection. Only available for collections. |
| `translated__content__zh__CN__description` | string | No | The description of the collection. Only available for collections. |
| `translated__content__zh__TW__description` | string | No | The description of the collection. Only available for collections. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update a company

**Slug:** `INTERCOM_UPDATE_A_COMPANY`

You can update a single company using the Intercom provisioned `id`. {% admonition type="attention" name="Using `company_id`" %} When updating a company it is not possible to update `company_id`. This can only be set once upon creation of the company. {% /admonition %}

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique identifier for the company which is given by Intercom |
| `name` | string | No | The name of the Company |
| `plan` | string | No | The name of the plan you have associated with the company. |
| `size` | integer | No | The number of employees in this company. |
| `website` | string | No | The URL for this company's website. Please note that the value specified here is not validated. Accepts any string. |
| `industry` | string | No | The industry that this company operates in. |
| `monthly_spend` | integer | No | How much revenue the company generates for your business. Note that this will truncate floats. i.e. it only allows whole integers, 155.98 will be truncated to 155. Note that this has an upper limit of 2**31-1 or 2147483647. |
| `custom_attributes` | object | No | User-defined key-value pairs for custom company data. Keys must be pre-defined via the Data Attributes API. Field names must not contain periods or dollar signs, max 190 characters. Values: strings (max 255 chars), numbers, or booleans. Max 100 fields. |
| `remote_created_at` | integer | No | The time the company was created by you as a Unix timestamp. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update a contact

**Slug:** `INTERCOM_UPDATE_A_CONTACT`

You can update an existing contact (ie. user or lead).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique identifier for the contact which is given by Intercom. |
| `name` | string | No | The contact's name. |
| `role` | string | No | The role of the contact. Can be 'user' or 'lead'. |
| `email` | string | No | The contact's email address. |
| `phone` | string | No | The contact's phone number. |
| `avatar` | string | No | An image URL containing the avatar of a contact. |
| `owner_id` | integer | No | The id of an admin that has been assigned account ownership of the contact. |
| `companies` | array | No | List of companies to attach to the contact. Each company object must contain either 'id' (Intercom company ID) or 'company_id' (client-provided company ID). Company attachments are made via separate API calls after updating the contact. |
| `external_id` | string | No | A unique identifier for the contact which is provided by the client. |
| `last_seen_at` | integer | No | The time when the contact was last seen as a UNIX timestamp. |
| `signed_up_at` | integer | No | The time specified for when a contact signed up as a UNIX timestamp. |
| `custom_attributes` | object | No | The custom attributes which are set for the contact as key-value pairs. |
| `unsubscribed_from_emails` | boolean | No | Whether the contact is unsubscribed from emails. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update an article

**Slug:** `INTERCOM_UPDATE_AN_ARTICLE`

You can update the details of a single article by making a PUT request to `https://api.intercom.io/articles/<id>`.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The unique identifier for the article which is given by Intercom. |
| `body` | string | No | The content of the article. For multilingual articles, this will be the body of the default language"s content.  |
| `state` | string ("published" | "draft") | No | Whether the article will be `published` or will be a `draft`. Defaults to draft. For multilingual articles, this will be the state of the default language"s content.  |
| `title` | string | No | The title of the article.For multilingual articles, this will be the title of the default language"s content.  |
| `author_id` | integer | No | The id of the author of the article. For multilingual articles, this will be the id of the author of the default language"s content. Must be a teammate on the help center"s workspace.  |
| `parent_id` | string | No | The id of the article"s parent collection or section. An article without this field stands alone.  |
| `description` | string | No | The description of the article. For multilingual articles, this will be the description of the default language"s content.  |
| `parent_type` | string | No | The type of parent, which can either be a `collection` or `section`. |
| `translated__content__type` | string ("None" | "article_translated_content") | No | The type of object - article_translated_content. |
| `translated__content__ar__url` | string | No | The URL of the article. |
| `translated__content__bg__url` | string | No | The URL of the article. |
| `translated__content__bs__url` | string | No | The URL of the article. |
| `translated__content__ca__url` | string | No | The URL of the article. |
| `translated__content__cs__url` | string | No | The URL of the article. |
| `translated__content__da__url` | string | No | The URL of the article. |
| `translated__content__de__url` | string | No | The URL of the article. |
| `translated__content__el__url` | string | No | The URL of the article. |
| `translated__content__en__url` | string | No | The URL of the article. |
| `translated__content__es__url` | string | No | The URL of the article. |
| `translated__content__et__url` | string | No | The URL of the article. |
| `translated__content__fi__url` | string | No | The URL of the article. |
| `translated__content__fr__url` | string | No | The URL of the article. |
| `translated__content__he__url` | string | No | The URL of the article. |
| `translated__content__hr__url` | string | No | The URL of the article. |
| `translated__content__hu__url` | string | No | The URL of the article. |
| `translated__content__id__url` | string | No | The URL of the article. |
| `translated__content__it__url` | string | No | The URL of the article. |
| `translated__content__ja__url` | string | No | The URL of the article. |
| `translated__content__ko__url` | string | No | The URL of the article. |
| `translated__content__lt__url` | string | No | The URL of the article. |
| `translated__content__lv__url` | string | No | The URL of the article. |
| `translated__content__mn__url` | string | No | The URL of the article. |
| `translated__content__nb__url` | string | No | The URL of the article. |
| `translated__content__nl__url` | string | No | The URL of the article. |
| `translated__content__pl__url` | string | No | The URL of the article. |
| `translated__content__pt__url` | string | No | The URL of the article. |
| `translated__content__ro__url` | string | No | The URL of the article. |
| `translated__content__ru__url` | string | No | The URL of the article. |
| `translated__content__sl__url` | string | No | The URL of the article. |
| `translated__content__sr__url` | string | No | The URL of the article. |
| `translated__content__sv__url` | string | No | The URL of the article. |
| `translated__content__tr__url` | string | No | The URL of the article. |
| `translated__content__vi__url` | string | No | The URL of the article. |
| `translated__content__ar__body` | string | No | The body of the article. |
| `translated__content__ar__type` | string ("None" | "article_content") | No | The type of object - `article_content` . |
| `translated__content__bg__body` | string | No | The body of the article. |
| `translated__content__bg__type` | string ("None" | "article_content") | No | The type of object - `article_content` . |
| `translated__content__bs__body` | string | No | The body of the article. |
| `translated__content__bs__type` | string ("None" | "article_content") | No | The type of object - `article_content` . |
| `translated__content__ca__body` | string | No | The body of the article. |
| `translated__content__ca__type` | string ("None" | "article_content") | No | The type of object - `article_content` . |
| `translated__content__cs__body` | string | No | The body of the article. |
| `translated__content__cs__type` | string ("None" | "article_content") | No | The type of object - `article_content` . |
| `translated__content__da__body` | string | No | The body of the article. |
| `translated__content__da__type` | string ("None" | "article_content") | No | The type of object - `article_content` . |
| `translated__content__de__body` | string | No | The body of the article. |
| `translated__content__de__type` | string ("None" | "article_content") | No | The type of object - `article_content` . |
| `translated__content__el__body` | string | No | The body of the article. |
| `translated__content__el__type` | string ("None" | "article_content") | No | The type of object - `article_content` . |
| `translated__content__en__body` | string | No | The body of the article. |
| `translated__content__en__type` | string ("None" | "article_content") | No | The type of object - `article_content` . |
| `translated__content__es__body` | string | No | The body of the article. |
| `translated__content__es__type` | string ("None" | "article_content") | No | The type of object - `article_content` . |
| `translated__content__et__body` | string | No | The body of the article. |
| `translated__content__et__type` | string ("None" | "article_content") | No | The type of object - `article_content` . |
| `translated__content__fi__body` | string | No | The body of the article. |
| `translated__content__fi__type` | string ("None" | "article_content") | No | The type of object - `article_content` . |
| `translated__content__fr__body` | string | No | The body of the article. |
| `translated__content__fr__type` | string ("None" | "article_content") | No | The type of object - `article_content` . |
| `translated__content__he__body` | string | No | The body of the article. |
| `translated__content__he__type` | string ("None" | "article_content") | No | The type of object - `article_content` . |
| `translated__content__hr__body` | string | No | The body of the article. |
| `translated__content__hr__type` | string ("None" | "article_content") | No | The type of object - `article_content` . |
| `translated__content__hu__body` | string | No | The body of the article. |
| `translated__content__hu__type` | string ("None" | "article_content") | No | The type of object - `article_content` . |
| `translated__content__id__body` | string | No | The body of the article. |
| `translated__content__id__type` | string ("None" | "article_content") | No | The type of object - `article_content` . |
| `translated__content__it__body` | string | No | The body of the article. |
| `translated__content__it__type` | string ("None" | "article_content") | No | The type of object - `article_content` . |
| `translated__content__ja__body` | string | No | The body of the article. |
| `translated__content__ja__type` | string ("None" | "article_content") | No | The type of object - `article_content` . |
| `translated__content__ko__body` | string | No | The body of the article. |
| `translated__content__ko__type` | string ("None" | "article_content") | No | The type of object - `article_content` . |
| `translated__content__lt__body` | string | No | The body of the article. |
| `translated__content__lt__type` | string ("None" | "article_content") | No | The type of object - `article_content` . |
| `translated__content__lv__body` | string | No | The body of the article. |
| `translated__content__lv__type` | string ("None" | "article_content") | No | The type of object - `article_content` . |
| `translated__content__mn__body` | string | No | The body of the article. |
| `translated__content__mn__type` | string ("None" | "article_content") | No | The type of object - `article_content` . |
| `translated__content__nb__body` | string | No | The body of the article. |
| `translated__content__nb__type` | string ("None" | "article_content") | No | The type of object - `article_content` . |
| `translated__content__nl__body` | string | No | The body of the article. |
| `translated__content__nl__type` | string ("None" | "article_content") | No | The type of object - `article_content` . |
| `translated__content__pl__body` | string | No | The body of the article. |
| `translated__content__pl__type` | string ("None" | "article_content") | No | The type of object - `article_content` . |
| `translated__content__pt__body` | string | No | The body of the article. |
| `translated__content__pt__type` | string ("None" | "article_content") | No | The type of object - `article_content` . |
| `translated__content__ro__body` | string | No | The body of the article. |
| `translated__content__ro__type` | string ("None" | "article_content") | No | The type of object - `article_content` . |
| `translated__content__ru__body` | string | No | The body of the article. |
| `translated__content__ru__type` | string ("None" | "article_content") | No | The type of object - `article_content` . |
| `translated__content__sl__body` | string | No | The body of the article. |
| `translated__content__sl__type` | string ("None" | "article_content") | No | The type of object - `article_content` . |
| `translated__content__sr__body` | string | No | The body of the article. |
| `translated__content__sr__type` | string ("None" | "article_content") | No | The type of object - `article_content` . |
| `translated__content__sv__body` | string | No | The body of the article. |
| `translated__content__sv__type` | string ("None" | "article_content") | No | The type of object - `article_content` . |
| `translated__content__tr__body` | string | No | The body of the article. |
| `translated__content__tr__type` | string ("None" | "article_content") | No | The type of object - `article_content` . |
| `translated__content__vi__body` | string | No | The body of the article. |
| `translated__content__vi__type` | string ("None" | "article_content") | No | The type of object - `article_content` . |
| `translated__content__ar__state` | string ("published" | "draft") | No | Whether the article is `published` or is a `draft` . |
| `translated__content__ar__title` | string | No | The title of the article. |
| `translated__content__bg__state` | string ("published" | "draft") | No | Whether the article is `published` or is a `draft` . |
| `translated__content__bg__title` | string | No | The title of the article. |
| `translated__content__bs__state` | string ("published" | "draft") | No | Whether the article is `published` or is a `draft` . |
| `translated__content__bs__title` | string | No | The title of the article. |
| `translated__content__ca__state` | string ("published" | "draft") | No | Whether the article is `published` or is a `draft` . |
| `translated__content__ca__title` | string | No | The title of the article. |
| `translated__content__cs__state` | string ("published" | "draft") | No | Whether the article is `published` or is a `draft` . |
| `translated__content__cs__title` | string | No | The title of the article. |
| `translated__content__da__state` | string ("published" | "draft") | No | Whether the article is `published` or is a `draft` . |
| `translated__content__da__title` | string | No | The title of the article. |
| `translated__content__de__state` | string ("published" | "draft") | No | Whether the article is `published` or is a `draft` . |
| `translated__content__de__title` | string | No | The title of the article. |
| `translated__content__el__state` | string ("published" | "draft") | No | Whether the article is `published` or is a `draft` . |
| `translated__content__el__title` | string | No | The title of the article. |
| `translated__content__en__state` | string ("published" | "draft") | No | Whether the article is `published` or is a `draft` . |
| `translated__content__en__title` | string | No | The title of the article. |
| `translated__content__es__state` | string ("published" | "draft") | No | Whether the article is `published` or is a `draft` . |
| `translated__content__es__title` | string | No | The title of the article. |
| `translated__content__et__state` | string ("published" | "draft") | No | Whether the article is `published` or is a `draft` . |
| `translated__content__et__title` | string | No | The title of the article. |
| `translated__content__fi__state` | string ("published" | "draft") | No | Whether the article is `published` or is a `draft` . |
| `translated__content__fi__title` | string | No | The title of the article. |
| `translated__content__fr__state` | string ("published" | "draft") | No | Whether the article is `published` or is a `draft` . |
| `translated__content__fr__title` | string | No | The title of the article. |
| `translated__content__he__state` | string ("published" | "draft") | No | Whether the article is `published` or is a `draft` . |
| `translated__content__he__title` | string | No | The title of the article. |
| `translated__content__hr__state` | string ("published" | "draft") | No | Whether the article is `published` or is a `draft` . |
| `translated__content__hr__title` | string | No | The title of the article. |
| `translated__content__hu__state` | string ("published" | "draft") | No | Whether the article is `published` or is a `draft` . |
| `translated__content__hu__title` | string | No | The title of the article. |
| `translated__content__id__state` | string ("published" | "draft") | No | Whether the article is `published` or is a `draft` . |
| `translated__content__id__title` | string | No | The title of the article. |
| `translated__content__it__state` | string ("published" | "draft") | No | Whether the article is `published` or is a `draft` . |
| `translated__content__it__title` | string | No | The title of the article. |
| `translated__content__ja__state` | string ("published" | "draft") | No | Whether the article is `published` or is a `draft` . |
| `translated__content__ja__title` | string | No | The title of the article. |
| `translated__content__ko__state` | string ("published" | "draft") | No | Whether the article is `published` or is a `draft` . |
| `translated__content__ko__title` | string | No | The title of the article. |
| `translated__content__lt__state` | string ("published" | "draft") | No | Whether the article is `published` or is a `draft` . |
| `translated__content__lt__title` | string | No | The title of the article. |
| `translated__content__lv__state` | string ("published" | "draft") | No | Whether the article is `published` or is a `draft` . |
| `translated__content__lv__title` | string | No | The title of the article. |
| `translated__content__mn__state` | string ("published" | "draft") | No | Whether the article is `published` or is a `draft` . |
| `translated__content__mn__title` | string | No | The title of the article. |
| `translated__content__nb__state` | string ("published" | "draft") | No | Whether the article is `published` or is a `draft` . |
| `translated__content__nb__title` | string | No | The title of the article. |
| `translated__content__nl__state` | string ("published" | "draft") | No | Whether the article is `published` or is a `draft` . |
| `translated__content__nl__title` | string | No | The title of the article. |
| `translated__content__pl__state` | string ("published" | "draft") | No | Whether the article is `published` or is a `draft` . |
| `translated__content__pl__title` | string | No | The title of the article. |
| `translated__content__pt__state` | string ("published" | "draft") | No | Whether the article is `published` or is a `draft` . |
| `translated__content__pt__title` | string | No | The title of the article. |
| `translated__content__ro__state` | string ("published" | "draft") | No | Whether the article is `published` or is a `draft` . |
| `translated__content__ro__title` | string | No | The title of the article. |
| `translated__content__ru__state` | string ("published" | "draft") | No | Whether the article is `published` or is a `draft` . |
| `translated__content__ru__title` | string | No | The title of the article. |
| `translated__content__sl__state` | string ("published" | "draft") | No | Whether the article is `published` or is a `draft` . |
| `translated__content__sl__title` | string | No | The title of the article. |
| `translated__content__sr__state` | string ("published" | "draft") | No | Whether the article is `published` or is a `draft` . |
| `translated__content__sr__title` | string | No | The title of the article. |
| `translated__content__sv__state` | string ("published" | "draft") | No | Whether the article is `published` or is a `draft` . |
| `translated__content__sv__title` | string | No | The title of the article. |
| `translated__content__tr__state` | string ("published" | "draft") | No | Whether the article is `published` or is a `draft` . |
| `translated__content__tr__title` | string | No | The title of the article. |
| `translated__content__vi__state` | string ("published" | "draft") | No | Whether the article is `published` or is a `draft` . |
| `translated__content__vi__title` | string | No | The title of the article. |
| `translated__content__pt__BR__url` | string | No | The URL of the article. |
| `translated__content__zh__CN__url` | string | No | The URL of the article. |
| `translated__content__zh__TW__url` | string | No | The URL of the article. |
| `translated__content__pt__BR__body` | string | No | The body of the article. |
| `translated__content__pt__BR__type` | string ("None" | "article_content") | No | The type of object - `article_content` . |
| `translated__content__zh__CN__body` | string | No | The body of the article. |
| `translated__content__zh__CN__type` | string ("None" | "article_content") | No | The type of object - `article_content` . |
| `translated__content__zh__TW__body` | string | No | The body of the article. |
| `translated__content__zh__TW__type` | string ("None" | "article_content") | No | The type of object - `article_content` . |
| `translated__content__pt__BR__state` | string ("published" | "draft") | No | Whether the article is `published` or is a `draft` . |
| `translated__content__pt__BR__title` | string | No | The title of the article. |
| `translated__content__zh__CN__state` | string ("published" | "draft") | No | Whether the article is `published` or is a `draft` . |
| `translated__content__zh__CN__title` | string | No | The title of the article. |
| `translated__content__zh__TW__state` | string ("published" | "draft") | No | Whether the article is `published` or is a `draft` . |
| `translated__content__zh__TW__title` | string | No | The title of the article. |
| `translated__content__ar__author__id` | integer | No | The ID of the author of the article. |
| `translated__content__bg__author__id` | integer | No | The ID of the author of the article. |
| `translated__content__bs__author__id` | integer | No | The ID of the author of the article. |
| `translated__content__ca__author__id` | integer | No | The ID of the author of the article. |
| `translated__content__cs__author__id` | integer | No | The ID of the author of the article. |
| `translated__content__da__author__id` | integer | No | The ID of the author of the article. |
| `translated__content__de__author__id` | integer | No | The ID of the author of the article. |
| `translated__content__el__author__id` | integer | No | The ID of the author of the article. |
| `translated__content__en__author__id` | integer | No | The ID of the author of the article. |
| `translated__content__es__author__id` | integer | No | The ID of the author of the article. |
| `translated__content__et__author__id` | integer | No | The ID of the author of the article. |
| `translated__content__fi__author__id` | integer | No | The ID of the author of the article. |
| `translated__content__fr__author__id` | integer | No | The ID of the author of the article. |
| `translated__content__he__author__id` | integer | No | The ID of the author of the article. |
| `translated__content__hr__author__id` | integer | No | The ID of the author of the article. |
| `translated__content__hu__author__id` | integer | No | The ID of the author of the article. |
| `translated__content__id__author__id` | integer | No | The ID of the author of the article. |
| `translated__content__it__author__id` | integer | No | The ID of the author of the article. |
| `translated__content__ja__author__id` | integer | No | The ID of the author of the article. |
| `translated__content__ko__author__id` | integer | No | The ID of the author of the article. |
| `translated__content__lt__author__id` | integer | No | The ID of the author of the article. |
| `translated__content__lv__author__id` | integer | No | The ID of the author of the article. |
| `translated__content__mn__author__id` | integer | No | The ID of the author of the article. |
| `translated__content__nb__author__id` | integer | No | The ID of the author of the article. |
| `translated__content__nl__author__id` | integer | No | The ID of the author of the article. |
| `translated__content__pl__author__id` | integer | No | The ID of the author of the article. |
| `translated__content__pt__author__id` | integer | No | The ID of the author of the article. |
| `translated__content__ro__author__id` | integer | No | The ID of the author of the article. |
| `translated__content__ru__author__id` | integer | No | The ID of the author of the article. |
| `translated__content__sl__author__id` | integer | No | The ID of the author of the article. |
| `translated__content__sr__author__id` | integer | No | The ID of the author of the article. |
| `translated__content__sv__author__id` | integer | No | The ID of the author of the article. |
| `translated__content__tr__author__id` | integer | No | The ID of the author of the article. |
| `translated__content__vi__author__id` | integer | No | The ID of the author of the article. |
| `translated__content__ar__created__at` | integer | No | The time when the article was created (seconds). |
| `translated__content__ar__description` | string | No | The description of the article. |
| `translated__content__ar__updated__at` | integer | No | The time when the article was last updated (seconds). |
| `translated__content__bg__created__at` | integer | No | The time when the article was created (seconds). |
| `translated__content__bg__description` | string | No | The description of the article. |
| `translated__content__bg__updated__at` | integer | No | The time when the article was last updated (seconds). |
| `translated__content__bs__created__at` | integer | No | The time when the article was created (seconds). |
| `translated__content__bs__description` | string | No | The description of the article. |
| `translated__content__bs__updated__at` | integer | No | The time when the article was last updated (seconds). |
| `translated__content__ca__created__at` | integer | No | The time when the article was created (seconds). |
| `translated__content__ca__description` | string | No | The description of the article. |
| `translated__content__ca__updated__at` | integer | No | The time when the article was last updated (seconds). |
| `translated__content__cs__created__at` | integer | No | The time when the article was created (seconds). |
| `translated__content__cs__description` | string | No | The description of the article. |
| `translated__content__cs__updated__at` | integer | No | The time when the article was last updated (seconds). |
| `translated__content__da__created__at` | integer | No | The time when the article was created (seconds). |
| `translated__content__da__description` | string | No | The description of the article. |
| `translated__content__da__updated__at` | integer | No | The time when the article was last updated (seconds). |
| `translated__content__de__created__at` | integer | No | The time when the article was created (seconds). |
| `translated__content__de__description` | string | No | The description of the article. |
| `translated__content__de__updated__at` | integer | No | The time when the article was last updated (seconds). |
| `translated__content__el__created__at` | integer | No | The time when the article was created (seconds). |
| `translated__content__el__description` | string | No | The description of the article. |
| `translated__content__el__updated__at` | integer | No | The time when the article was last updated (seconds). |
| `translated__content__en__created__at` | integer | No | The time when the article was created (seconds). |
| `translated__content__en__description` | string | No | The description of the article. |
| `translated__content__en__updated__at` | integer | No | The time when the article was last updated (seconds). |
| `translated__content__es__created__at` | integer | No | The time when the article was created (seconds). |
| `translated__content__es__description` | string | No | The description of the article. |
| `translated__content__es__updated__at` | integer | No | The time when the article was last updated (seconds). |
| `translated__content__et__created__at` | integer | No | The time when the article was created (seconds). |
| `translated__content__et__description` | string | No | The description of the article. |
| `translated__content__et__updated__at` | integer | No | The time when the article was last updated (seconds). |
| `translated__content__fi__created__at` | integer | No | The time when the article was created (seconds). |
| `translated__content__fi__description` | string | No | The description of the article. |
| `translated__content__fi__updated__at` | integer | No | The time when the article was last updated (seconds). |
| `translated__content__fr__created__at` | integer | No | The time when the article was created (seconds). |
| `translated__content__fr__description` | string | No | The description of the article. |
| `translated__content__fr__updated__at` | integer | No | The time when the article was last updated (seconds). |
| `translated__content__he__created__at` | integer | No | The time when the article was created (seconds). |
| `translated__content__he__description` | string | No | The description of the article. |
| `translated__content__he__updated__at` | integer | No | The time when the article was last updated (seconds). |
| `translated__content__hr__created__at` | integer | No | The time when the article was created (seconds). |
| `translated__content__hr__description` | string | No | The description of the article. |
| `translated__content__hr__updated__at` | integer | No | The time when the article was last updated (seconds). |
| `translated__content__hu__created__at` | integer | No | The time when the article was created (seconds). |
| `translated__content__hu__description` | string | No | The description of the article. |
| `translated__content__hu__updated__at` | integer | No | The time when the article was last updated (seconds). |
| `translated__content__id__created__at` | integer | No | The time when the article was created (seconds). |
| `translated__content__id__description` | string | No | The description of the article. |
| `translated__content__id__updated__at` | integer | No | The time when the article was last updated (seconds). |
| `translated__content__it__created__at` | integer | No | The time when the article was created (seconds). |
| `translated__content__it__description` | string | No | The description of the article. |
| `translated__content__it__updated__at` | integer | No | The time when the article was last updated (seconds). |
| `translated__content__ja__created__at` | integer | No | The time when the article was created (seconds). |
| `translated__content__ja__description` | string | No | The description of the article. |
| `translated__content__ja__updated__at` | integer | No | The time when the article was last updated (seconds). |
| `translated__content__ko__created__at` | integer | No | The time when the article was created (seconds). |
| `translated__content__ko__description` | string | No | The description of the article. |
| `translated__content__ko__updated__at` | integer | No | The time when the article was last updated (seconds). |
| `translated__content__lt__created__at` | integer | No | The time when the article was created (seconds). |
| `translated__content__lt__description` | string | No | The description of the article. |
| `translated__content__lt__updated__at` | integer | No | The time when the article was last updated (seconds). |
| `translated__content__lv__created__at` | integer | No | The time when the article was created (seconds). |
| `translated__content__lv__description` | string | No | The description of the article. |
| `translated__content__lv__updated__at` | integer | No | The time when the article was last updated (seconds). |
| `translated__content__mn__created__at` | integer | No | The time when the article was created (seconds). |
| `translated__content__mn__description` | string | No | The description of the article. |
| `translated__content__mn__updated__at` | integer | No | The time when the article was last updated (seconds). |
| `translated__content__nb__created__at` | integer | No | The time when the article was created (seconds). |
| `translated__content__nb__description` | string | No | The description of the article. |
| `translated__content__nb__updated__at` | integer | No | The time when the article was last updated (seconds). |
| `translated__content__nl__created__at` | integer | No | The time when the article was created (seconds). |
| `translated__content__nl__description` | string | No | The description of the article. |
| `translated__content__nl__updated__at` | integer | No | The time when the article was last updated (seconds). |
| `translated__content__pl__created__at` | integer | No | The time when the article was created (seconds). |
| `translated__content__pl__description` | string | No | The description of the article. |
| `translated__content__pl__updated__at` | integer | No | The time when the article was last updated (seconds). |
| `translated__content__pt__created__at` | integer | No | The time when the article was created (seconds). |
| `translated__content__pt__description` | string | No | The description of the article. |
| `translated__content__pt__updated__at` | integer | No | The time when the article was last updated (seconds). |
| `translated__content__ro__created__at` | integer | No | The time when the article was created (seconds). |
| `translated__content__ro__description` | string | No | The description of the article. |
| `translated__content__ro__updated__at` | integer | No | The time when the article was last updated (seconds). |
| `translated__content__ru__created__at` | integer | No | The time when the article was created (seconds). |
| `translated__content__ru__description` | string | No | The description of the article. |
| `translated__content__ru__updated__at` | integer | No | The time when the article was last updated (seconds). |
| `translated__content__sl__created__at` | integer | No | The time when the article was created (seconds). |
| `translated__content__sl__description` | string | No | The description of the article. |
| `translated__content__sl__updated__at` | integer | No | The time when the article was last updated (seconds). |
| `translated__content__sr__created__at` | integer | No | The time when the article was created (seconds). |
| `translated__content__sr__description` | string | No | The description of the article. |
| `translated__content__sr__updated__at` | integer | No | The time when the article was last updated (seconds). |
| `translated__content__sv__created__at` | integer | No | The time when the article was created (seconds). |
| `translated__content__sv__description` | string | No | The description of the article. |
| `translated__content__sv__updated__at` | integer | No | The time when the article was last updated (seconds). |
| `translated__content__tr__created__at` | integer | No | The time when the article was created (seconds). |
| `translated__content__tr__description` | string | No | The description of the article. |
| `translated__content__tr__updated__at` | integer | No | The time when the article was last updated (seconds). |
| `translated__content__vi__created__at` | integer | No | The time when the article was created (seconds). |
| `translated__content__vi__description` | string | No | The description of the article. |
| `translated__content__vi__updated__at` | integer | No | The time when the article was last updated (seconds). |
| `translated__content__pt__BR__author__id` | integer | No | The ID of the author of the article. |
| `translated__content__zh__CN__author__id` | integer | No | The ID of the author of the article. |
| `translated__content__zh__TW__author__id` | integer | No | The ID of the author of the article. |
| `translated__content__pt__BR__created__at` | integer | No | The time when the article was created (seconds). |
| `translated__content__pt__BR__description` | string | No | The description of the article. |
| `translated__content__pt__BR__updated__at` | integer | No | The time when the article was last updated (seconds). |
| `translated__content__zh__CN__created__at` | integer | No | The time when the article was created (seconds). |
| `translated__content__zh__CN__description` | string | No | The description of the article. |
| `translated__content__zh__CN__updated__at` | integer | No | The time when the article was last updated (seconds). |
| `translated__content__zh__TW__created__at` | integer | No | The time when the article was created (seconds). |
| `translated__content__zh__TW__description` | string | No | The description of the article. |
| `translated__content__zh__TW__updated__at` | integer | No | The time when the article was last updated (seconds). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update contact

**Slug:** `INTERCOM_UPDATE_CONTACT`

Tool to update an existing contact in Intercom. Use when you need to modify contact information such as name, email, custom attributes, or other properties.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | Contact's full name |
| `role` | string | No | The contact's role designation (user/lead) |
| `email` | string | No | The contact's email address |
| `phone` | string | No | Contact phone number (E.164 format recommended, e.g., +353871234567) |
| `avatar` | string | No | Image URL for the contact's avatar |
| `owner_id` | integer | No | Admin ID assigned as account owner |
| `contact_id` | string | Yes | The unique identifier for the contact to update |
| `external_id` | string | No | A unique identifier from your system |
| `last_seen_at` | integer | No | Unix timestamp of last activity |
| `signed_up_at` | integer | No | Unix timestamp of signup date |
| `custom_attributes` | object | No | Custom key-value data fields |
| `unsubscribed_from_emails` | boolean | No | Email subscription status |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update content import source

**Slug:** `INTERCOM_UPDATE_CONTENT_IMPORT_SOURCE`

Tool to update an existing content import source in Fin Content Library. Use when you need to modify the URL, sync behavior, or status of an existing content import source.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `url` | string | Yes | The URL of the content import source. Must be a valid URL. |
| `status` | string | No | The operational state of the source. Allowed values: 'active', 'deactivated'. Defaults to 'active'. |
| `source_id` | string | Yes | The unique identifier for the content import source which is given by Intercom. |
| `sync_behavior` | string | Yes | Controls how the source is synchronized. Via API, the only allowed value is 'api'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update data attribute

**Slug:** `INTERCOM_UPDATE_DATA_ATTRIBUTE`

Tool to update an existing data attribute in Intercom. Use when you need to modify a data attribute's description, archive status, or messenger writability. Note: Changing a data attribute's type via the API is restricted and must be done through the UI.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `options` | array | No | Predefined value options (required for list-type attributes). Each object contains a 'value' property |
| `archived` | boolean | No | Whether to archive the attribute |
| `description` | string | No | Human-readable description for UI display |
| `data_attribute_id` | integer | Yes | The unique identifier of the data attribute to update |
| `messenger_writable` | boolean | No | Whether the Messenger can update this attribute |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update external page

**Slug:** `INTERCOM_UPDATE_EXTERNAL_PAGE`

Tool to update an existing external page in Fin Content Library. Use when you need to modify the content, metadata, or availability settings of an external page. Only pages created through the API can be updated.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `url` | string | Yes | The page URL; used by Fin to attribute answers to sources. Must be a valid URL. Required for updates. |
| `html` | string | Yes | The body content of the external page in HTML format. Required for updates. |
| `title` | string | Yes | The title of the external page. Required for updates. |
| `locale` | string | Yes | Language identifier code. Must be 'en'. Required for updates. |
| `page_id` | string | Yes | The unique identifier for the external page provided by Intercom |
| `source_id` | integer | Yes | Identifier for the content import source. This links the page to a specific content import source in your workspace. Required for updates. |
| `external_id` | string | Yes | The identifier for the external page which was given by the source. Required for updates. |
| `fin_availability` | boolean | No | Whether the external page should be used to answer questions by Fin. Defaults to true if not provided. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update internal article

**Slug:** `INTERCOM_UPDATE_INTERNAL_ARTICLE`

Tool to update an internal article with new title, body, author or owner information. Use when you need to modify an existing internal article in Intercom.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `body` | string | Yes | The article content in HTML format. |
| `title` | string | Yes | The article heading. |
| `owner_id` | integer | Yes | The id of the owner of the article. |
| `author_id` | integer | Yes | The id of the author of the article. |
| `internal_article_id` | integer | Yes | The unique identifier for the internal article which is given by Intercom. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update ticket

**Slug:** `INTERCOM_UPDATE_TICKET`

Tool to update an existing ticket in Intercom. Use when you need to modify ticket attributes, state, assignment, or other properties.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `open` | boolean | No | Controls ticket open status; setting to false closes and unsnoozes the ticket |
| `admin_id` | integer | No | The ID of the admin performing ticket update, needed for workflows |
| `is_shared` | boolean | No | Specifies visibility to users |
| `ticket_id` | string | Yes | The unique identifier for the ticket assigned by Intercom |
| `company_id` | string | No | ID of the company linked to the ticket; set to empty string to remove company association |
| `assignee_id` | string | No | ID of admin or team for assignment; set to '0' to unassign |
| `snoozed_until` | integer | No | Unix timestamp for when ticket should reopen |
| `ticket_state_id` | string | No | ID of the ticket state associated with the ticket type |
| `ticket_attributes` | object | No | An object containing key-value pairs for ticket attributes (e.g., _default_title_, _default_description_) |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update a ticket type

**Slug:** `INTERCOM_UPDATE_TICKET_TYPE`

Tool to update an existing ticket type in the workspace. Use when you need to modify a ticket type's name, description, category, icon, or archive status.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `icon` | string | No | An emoji icon (copy from Twemoji Cheatsheet). |
| `name` | string | No | The ticket type's name. |
| `archived` | boolean | No | Archived status of the ticket type. |
| `category` | string | No | One of: Customer, Back-office, or Tracker. |
| `description` | string | No | The ticket type's description. |
| `is_internal` | boolean | No | Whether tickets are internal-only or shared with customers. |
| `ticket_type_id` | string | Yes | The unique identifier of the ticket type to update. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update ticket type attribute

**Slug:** `INTERCOM_UPDATE_TICKET_TYPE_ATTRIBUTE`

Tool to update an existing attribute for a ticket type. Use when you need to modify properties like description, visibility, or requirements for a ticket type attribute.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | The label for the ticket type attribute |
| `multiline` | boolean | No | Enables multiple text lines for string-type attributes |
| `list_items` | string | No | A comma delimited list of items for the attribute value (only applicable to list attributes) |
| `description` | string | No | The description of the attribute presented to the teammate or contact |
| `attribute_id` | string | Yes | The unique identifier of the ticket type attribute to update |
| `ticket_type_id` | string | Yes | The unique identifier of the ticket type |
| `visible_on_create` | boolean | No | Whether this field displays to teammates during ticket creation |
| `required_to_create` | boolean | No | Whether teammates must complete this field when creating tickets |
| `visible_to_contacts` | boolean | No | Whether this field displays to contacts during ticket creation |
| `allow_multiple_values` | boolean | No | Permits multiple file attachments for file-type attributes |
| `required_to_create_for_contacts` | boolean | No | Whether contacts must complete this field when creating tickets |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |
