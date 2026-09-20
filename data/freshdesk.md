# Freshdesk

Freshdesk provides customer support software with ticketing, knowledge base, and automation features for efficient helpdesk operations and better customer experiences

- **Category:** crm
- **Auth:** API_KEY
- **Composio-managed OAuth available?** N/A
- **Tools:** 178
- **Triggers:** 0
- **Slug:** `FRESHDESK`
- **Version:** 20260828_00

## Tools

### Add Note to Ticket

**Slug:** `FRESHDESK_ADD_NOTE_TO_TICKET`

Tool to add a private or public note to an existing ticket in Freshdesk. Use when you need to add internal comments or public notes to a ticket. Notes can be private (agent-only) or public, and can include HTML content.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `body` | string | Yes | The content of the note. Can contain plain text or HTML. |
| `private` | boolean | No | Indicates whether the note is private (visible only to agents). Default: true |
| `user_id` | integer | No | The ID of the user creating the note (useful for posting on behalf of another user). |
| `ticket_id` | integer | Yes | The unique identifier of the ticket to add the note to. |
| `notify_emails` | array | No | Email addresses to notify about the note. IMPORTANT: Only accepts agent email addresses, not external contacts or non-agent users. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Add Ticket User Access

**Slug:** `FRESHDESK_ADD_TICKET_USER_ACCESS`

Tool to add agent access to a specific ticket in Freshdesk. Use when you need to grant agent(s) permission to view or interact with a ticket. The endpoint accepts agent IDs (not contact IDs) and returns the list of agent IDs that have access to the ticket.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `user_ids` | array | Yes | List of agent IDs to grant access to the ticket. These should be agent IDs, not contact IDs. |
| `ticket_id` | integer | Yes | The unique identifier of the ticket to add user access to |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Add Watcher to Ticket

**Slug:** `FRESHDESK_ADD_WATCHER`

Tool to add the authenticated user as a watcher to a Freshdesk ticket. Use when you need to follow a ticket's progress and receive email notifications for updates like replies or status changes. The API automatically uses the authenticated user's credentials and does not require additional parameters.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ticket_id` | integer | Yes | The unique identifier of the ticket to add the watcher to. The authenticated user will be added as a watcher to this ticket. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Bulk Unwatch Tickets

**Slug:** `FRESHDESK_BULK_UNWATCH_TICKETS`

Tool to remove the authenticated user as a watcher from multiple Freshdesk tickets in bulk. Use when you need to stop following multiple tickets at once and stop receiving email notifications for their updates. The API automatically uses the authenticated user's credentials.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ids` | array | Yes | Array of ticket IDs to remove the authenticated user as a watcher from. The currently authenticated user will be removed as a watcher from all specified tickets. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Bulk Update Tickets

**Slug:** `FRESHDESK_BULK_UPDATE_TICKETS`

Tool to update multiple tickets simultaneously in bulk. The bulk update operation runs asynchronously in the background, and returns a job_id to track progress. Use when you need to modify the same properties across multiple tickets efficiently.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ids` | array | Yes | Array of ticket IDs to update in bulk. Example: [18, 17, 123] |
| `properties` | object | Yes | Object containing the fields to update and their new values. At least one property must be specified. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Cancel Contact Import

**Slug:** `FRESHDESK_CANCEL_CONTACT_IMPORT`

Tool to cancel an ongoing contact import operation in Freshdesk. Use when you need to halt a contact import process that is currently running.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `import_id` | integer | Yes | The unique identifier of the contact import operation to cancel. This ID is obtained from the Get Imported Contacts endpoint. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Admin Group

**Slug:** `FRESHDESK_CREATE_ADMIN`

Tool to create a new admin group in Freshdesk. Use when you need to create a new admin group with specific agents, escalation settings, and automatic assignment configuration.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Name of the admin group to create. Must be unique within your Freshdesk account. |
| `agent_ids` | array | No | List of agent IDs to be added to this group |
| `description` | string | No | Description of the admin group |
| `escalate_to` | integer | No | User ID to escalate unassigned tickets to |
| `unassigned_for` | string | No | Time duration before escalation triggers. Must be one of: '30m', '1h', '2h', '4h', '8h', '12h', '1d', '2d', '3d' |
| `business_hour_id` | integer | No | ID of the business hours configuration to associate with this group |
| `auto_ticket_assign` | integer | No | Enables automatic ticket assignment. Set to 0 to disable or 1 to enable. |
| `allow_agents_to_change_availability` | boolean | No | Permission flag for agents to change their availability |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Admin Group

**Slug:** `FRESHDESK_CREATE_ADMIN_GROUP`

Tool to create a new admin-level support agent group in Freshdesk. Use when you need to create groups for organizing support agents and managing ticket routing at the admin level.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | The name of the group. Must be unique within the Freshdesk account. |
| `type` | string | Yes | The type of group. Must be 'support_agent_group' for creating support agent groups. |
| `agent_ids` | array | No | Array of agent IDs who should be members of this group. |
| `description` | string | No | A brief description of the group's purpose and responsibilities. |
| `escalate_to` | integer | No | ID of the group to which unassigned tickets should be escalated after the specified time period. |
| `unassigned_for` | string | No | Time period after which an unassigned ticket in the group should be escalated. Format examples: '30m', '1h', '2h', '8h', '1d'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Admin Ticket Field

**Slug:** `FRESHDESK_CREATE_ADMIN_TICKET_FIELD`

Tool to create a new custom ticket field in Freshdesk. Use when you need to add a new field definition for capturing additional ticket information (e.g., priority level, customer type, issue category). The field type can be text, number, dropdown, checkbox, date, or paragraph.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `type` | string ("custom_text" | "custom_paragraph" | "custom_number" | "custom_dropdown" | "custom_checkbox" | "custom_date" | "custom_decimal" | "custom_phone_number" | "custom_url") | Yes | The field type. When using 'custom_dropdown', you must also provide the 'choices' parameter. |
| `label` | string | Yes | The internal label for the ticket field. This is what agents see in the UI. |
| `choices` | array | No | For dropdown fields, a list of choice objects with 'value' and 'position' keys. Required when field type is 'custom_dropdown'. Example: [{'value': 'Low', 'position': 1}, {'value': 'Medium', 'position': 2}] |
| `position` | integer | No | Position of the field in the form. Lower numbers appear first. If not specified, the field is added at the end. |
| `customers_can_edit` | boolean | No | Whether customers can edit this field after ticket creation. Defaults to False. |
| `label_for_customers` | string | Yes | The customer-facing label for the ticket field. This is displayed to customers in the portal. |
| `required_for_agents` | boolean | No | Whether the field is required for agents when creating or updating tickets. Defaults to False. |
| `required_for_closure` | boolean | No | Whether the field is required for ticket closure. Defaults to False. |
| `displayed_to_customers` | boolean | No | Whether the field is displayed to customers in the support portal. Defaults to True. |
| `required_for_customers` | boolean | No | Whether the field is required for customers when submitting tickets. Defaults to False. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Admin Ticket Field Section

**Slug:** `FRESHDESK_CREATE_ADMIN_TICKET_FIELD_SECTION`

Tool to create a new section within a ticket field in Freshdesk. Use when you need to add conditional field sections that appear based on selected dropdown choices.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The unique identifier of the parent ticket field to create a section for |
| `label` | string | Yes | The display name of the section |
| `choice_ids` | array | Yes | Array of choice IDs for which the section should be displayed. These are the dropdown options that trigger the section to appear |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Multiple Agents

**Slug:** `FRESHDESK_CREATE_AGENTS`

Tool to create multiple agents in Freshdesk in a single bulk operation. Use when you need to add multiple agents at once. This is an asynchronous operation that returns a job_id for tracking the creation status.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `agents` | array | Yes | List of agent objects to create in bulk. Each agent must have at least an email address. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Canned Response

**Slug:** `FRESHDESK_CREATE_CANNED_RESPONSE`

Tool to create a new canned response in Freshdesk. Use when you need to create a reusable message template that agents can quickly insert into tickets.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `title` | string | Yes | The title/name of the canned response |
| `folder_id` | integer | No | ID of the folder to place the canned response in. If not provided, the canned response will be auto-assigned to a folder |
| `group_ids` | array | No | Array of group IDs that can access this canned response. Only applicable when visibility is set to 2 (specific groups) |
| `visibility` | integer | Yes | Visibility of the canned response. 0 = Personal/Private (visible only to creator), 1 = All agents (visible to all agents in the account), 2 = Specific groups (visible to designated agent groups) |
| `content_html` | string | Yes | The HTML content of the canned response. This is the message template that will be inserted when the canned response is used |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Bulk Create Canned Responses

**Slug:** `FRESHDESK_CREATE_CANNED_RESPONSE_BULK`

Tool to create multiple canned responses in bulk via asynchronous operation. Use when you need to add multiple canned responses at once to your Freshdesk account. Returns a job_id that can be used to track the operation status.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `canned_responses` | array | Yes | Array of canned response objects to create in bulk. Each object must contain at minimum a title and content or content_html field. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Canned Response Folder

**Slug:** `FRESHDESK_CREATE_CANNED_RESPONSE_FOLDER`

Tool to create a new canned response folder in Freshdesk. Use when you need to organize canned response templates into folders.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | The name of the canned response folder to create. This folder will organize canned response templates. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Company

**Slug:** `FRESHDESK_CREATE_COMPANIES`

Tool to create a new company in Freshdesk. Use when you need to add a customer organization to your Freshdesk account. Companies can hold multiple contacts and are automatically associated with contacts based on email domain matching.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | The name of the company [REQUIRED] |
| `note` | string | No | Additional notes about the company |
| `domains` | array | No | Array of domain names associated with the company. Freshdesk automatically associates contacts to this company if their email address contains any specified domains |
| `industry` | string | No | Industry classification from standard industry choices (available in Blossom Plan and above) |
| `description` | string | No | Description about the company |
| `account_tier` | string | No | Account tier dropdown with three choices: 'Basic', 'Premium', 'Enterprise' |
| `health_score` | string | No | Health score dropdown with three choices: 'Happy', 'Doing okay', 'At risk' |
| `renewal_date` | string | No | Contract or renewal date for the company in YYYY-MM-DD format (available in Blossom Plan and above) |
| `custom_fields` | object | No | Key-value pairs for custom fields specific to your Freshdesk account. Unlike ticket custom fields, company custom field names don't have 'cf_' prepended |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Contact

**Slug:** `FRESHDESK_CREATE_CONTACT`

Tool to create a new contact in Freshdesk. Use when you need to add a customer or user to your Freshdesk account. IMPORTANT: The 'employee_id' custom field is mandatory for this Freshdesk instance.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Name of the contact [REQUIRED] |
| `tags` | array | No | Tags associated with the contact |
| `email` | string | No | Primary email address of the contact. Either email or phone must be provided. |
| `phone` | string | No | Phone number of the contact. Either email or phone must be provided. |
| `avatar` | string | No | URL of the contact's avatar image |
| `mobile` | string | No | Mobile number of the contact |
| `address` | string | No | Physical address of the contact |
| `language` | string | No | Language code for the contact's preferred language |
| `job_title` | string | No | Job title of the contact |
| `time_zone` | string | No | Time zone of the contact |
| `company_id` | integer | No | ID of the primary company associated with this contact |
| `twitter_id` | string | No | Twitter handle of the contact |
| `description` | string | No | Description or notes about the contact |
| `other_emails` | array | No | Additional email addresses of the contact |
| `custom_fields` | object | Yes | Custom fields object. IMPORTANT: The 'employee_id' field is required for this Freshdesk instance and cannot be blank. Custom field keys should be the field name directly (not prefixed with 'cf_'). |
| `other_companies` | array | No | Array of other company IDs associated with the contact. Each item should have 'company_id' and optionally 'view_all_tickets' |
| `view_all_tickets` | boolean | No | Set to true if the contact can view all tickets from their company |
| `unique_external_id` | string | No | External ID of the contact for integration purposes |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Contact Field

**Slug:** `FRESHDESK_CREATE_CONTACT_FIELDS`

Tool to create a new custom contact field in Freshdesk. Use when you need to add a new field definition for storing custom contact information (e.g., job title, department, customer type). The field type can be text, number, dropdown, checkbox, date, or paragraph.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `type` | string | Yes | Type of the contact field. Valid types are: 'custom_text' (single line text), 'custom_paragraph' (multi-line text), 'custom_number' (numeric), 'custom_dropdown' (dropdown select), 'custom_checkbox' (boolean), 'custom_date' (date picker), 'custom_phone_number' (phone number), 'custom_url' (URL), 'lookup' (lookup field), 'encrypted_text' (encrypted text). When using 'custom_dropdown', you must also provide the 'choices' parameter. |
| `label` | string | Yes | Display label for the contact field. This is what users will see in the UI. |
| `choices` | array | No | List of choice options for dropdown fields. Required when field type is 'custom_dropdown'. Each choice should have a label (display text) and value (actual value stored). |
| `position` | integer | No | Position/order of the field in the UI. Lower numbers appear first. Must be between 1 and 46 inclusive. |
| `agents_can_edit` | boolean | No | Whether agents can edit this field value. Required when 'required_for_agents' is True. Defaults to True if not specified. |
| `customers_can_edit` | boolean | No | Whether customers can edit this field value in the portal. Defaults to False. |
| `editable_in_signup` | boolean | No | Whether this field can be edited during customer signup. Defaults to False. |
| `label_for_customers` | string | Yes | Label to display to customers in the portal. This field is required by the Freshdesk API. |
| `quick_add_for_agent` | boolean | No | Whether this field appears in the quick-add form for agents (for frequently used fields). Required when 'required_for_agents' is True. Defaults to True if not specified. |
| `required_for_agents` | boolean | No | Whether this field is required for agents when creating or updating contacts. Defaults to False. |
| `displayed_for_agents` | boolean | No | Whether this field is displayed to agents. Required when 'required_for_agents' is True. Defaults to True if not specified. |
| `required_for_customers` | boolean | No | Whether this field is required for customers in the portal. Defaults to False. |
| `displayed_for_customers` | boolean | No | Whether this field is displayed to customers in the portal. Defaults to False. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Discussion Category

**Slug:** `FRESHDESK_CREATE_DISCUSSION_CATEGORY`

Tool to create a new discussion category in Freshdesk forums.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | The name of the discussion category. Must be unique among existing categories. |
| `description` | string | Yes | A brief description explaining the purpose of this discussion category. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Discussion Forum Topic

**Slug:** `FRESHDESK_CREATE_DISCUSSION_FORUM_TOPIC`

Tool to create a new topic in a Freshdesk discussion forum. Use when you need to post a new discussion topic or thread in a specific forum.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `title` | string | Yes | The title of the topic |
| `locked` | boolean | No | Whether the topic should be locked (no replies allowed) |
| `sticky` | boolean | No | Whether the topic should be pinned to the top of the forum |
| `message` | string | Yes | The message/content of the topic. Supports HTML formatting. |
| `forum_id` | integer | Yes | The ID of the forum in which to create the topic |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Discussion Topic Comment

**Slug:** `FRESHDESK_CREATE_DISCUSSION_TOPIC_COMMENT`

Tool to create a new comment on a discussion forum topic. Use when you need to add a comment to an existing topic in Freshdesk discussions.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `body` | string | Yes | The content of the comment. Can contain HTML formatting. |
| `topic_id` | integer | Yes | The unique identifier of the discussion topic to add a comment to |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Email Mailbox

**Slug:** `FRESHDESK_CREATE_EMAIL`

Tool to create a new email mailbox in Freshdesk. Use when you need to add a support email address that automatically creates tickets from incoming emails. Requires valid product_id and group_id.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Display name for the email mailbox |
| `group_id` | integer | Yes | ID of the group to assign tickets from this mailbox |
| `product_id` | integer | Yes | ID of the product to associate with this mailbox |
| `mailbox_type` | string ("freshdesk_mailbox" | "custom_mailbox") | Yes | Type of mailbox. Use 'freshdesk_mailbox' for Freshdesk-managed mailboxes or 'custom_mailbox' for external email providers |
| `support_email` | string | Yes | Email address for the mailbox. Must use your Freshdesk domain (e.g., name@yourdomain.freshdesk.com) |
| `default_reply_email` | boolean | No | Set as default reply email address for the account |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Forum

**Slug:** `FRESHDESK_CREATE_FORUM`

Tool to create a new forum within a category in Freshdesk discussions. Use when you need to add a new forum to organize discussions within a specific category.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | The name of the forum. Must be a non-empty string. |
| `forum_type` | integer | No | The type of forum. Valid values: 1=Questions, 2=Ideas, 3=Problems, 4=Announcements. If not specified, defaults to Questions (1). |
| `category_id` | integer | Yes | The ID of the category where the forum will be created. This is a required path parameter. |
| `description` | string | No | The description of the forum. Supports plain text or HTML content. |
| `forum_visibility` | integer | No | The visibility setting for the forum. Valid values: 1=Everyone, 2=Logged in users, 3=Agents only, 4=Selected companies. If not specified, defaults to Everyone (1). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create SLA Policy

**Slug:** `FRESHDESK_CREATE_SLA_POLICIES`

Tool to create a new SLA (Service Level Agreement) policy in Freshdesk. Use when you need to establish service level targets for ticket response and resolution times based on priority levels.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Name of the SLA policy |
| `active` | boolean | No | Whether the SLA policy is active or not |
| `sla_target` | object | Yes | SLA targets for all four priority levels with respond_within and resolve_within times in seconds |
| `description` | string | No | Description of the SLA policy |
| `applicable_to` | object | Yes | Conditions defining where the SLA policy applies. At least one non-empty array (sources, group_ids, or product_ids) is required. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Solution Article

**Slug:** `FRESHDESK_CREATE_SOLUTION_ARTICLE`

Tool to create a new solution article in a Freshdesk knowledge base folder. Use when you need to add documentation, FAQs, or help content to your knowledge base.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tags` | array | No | Tags for categorizing the article |
| `title` | string | Yes | Title of the solution article |
| `status` | string ("draft" | "published") | No | Publication status of the article. |
| `agent_id` | integer | No | ID of the agent creating the article. If not specified, the authenticated agent will be used |
| `seo_data` | object | No | SEO data for creating/updating an article (request format). |
| `folder_id` | integer | Yes | The unique identifier of the folder where the article will be created |
| `description` | string | Yes | Description/content of the article in HTML format |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Solution Category

**Slug:** `FRESHDESK_CREATE_SOLUTION_CATEGORY`

Tool to create a new solution category in Freshdesk's knowledge base. Use when you need to organize solution articles and folders under a new category.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | The name of the solution category |
| `description` | string | No | A description of the category and its purpose |
| `visible_in_portals` | array | No | An array of portal IDs where the category should be visible. If not specified, the category will be visible in all portals by default |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Ticket

**Slug:** `FRESHDESK_CREATE_TICKET`

Creates a new ticket in Freshdesk. REQUIRED FIELDS: - subject and description are always required - At least ONE requester identifier is REQUIRED: requester_id, email, phone, facebook_id, twitter_id, or unique_external_id CONDITIONAL REQUIREMENTS: - If phone is provided without email, name becomes MANDATORY NOTE ON ATTACHMENTS: - attachments field expects multipart/form-data format, not file paths

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | Name of the requester |
| `tags` | array | No | Tags that have been associated with the ticket |
| `email` | string | No | Email address of the requester |
| `phone` | string | No | Phone number of the requester |
| `due_by` | string | No | Timestamp when the ticket is due to be resolved. Format: ISO 8601 (YYYY-MM-DDTHH:MM:SSZ). |
| `source` | string ("email" | "portal" | "phone" | "chat" | "feedback_widget" | "outbound_email") | No | Channel through which the ticket was created. |
| `status` | string ("open" | "pending" | "resolved" | "closed") | No | Status of the ticket. |
| `subject` | string | Yes | Subject of the ticket. Must be a non-empty string. |
| `group_id` | integer | No | ID of the group to which the ticket has been assigned |
| `priority` | string ("low" | "medium" | "high" | "urgent") | No | Priority of the ticket. |
| `cc_emails` | array | No | Email addresses added in the 'cc' field of the incoming ticket email |
| `fr_due_by` | string | No | Timestamp when the first response is due. Format: ISO 8601 (YYYY-MM-DDTHH:MM:SSZ). |
| `company_id` | integer | No | Company ID of the requester |
| `product_id` | integer | No | ID of the product linked to the ticket |
| `twitter_id` | string | No | Twitter handle of the requester |
| `attachments` | array | No | Ticket attachments. Note: File attachments require multipart/form-data format and are not supported via JSON API calls. |
| `description` | string | Yes | HTML content of the ticket. Supports HTML formatting such as <p>, <strong>, <em>, etc. |
| `facebook_id` | string | No | Facebook ID of the requester |
| `requester_id` | integer | No | User ID of the requester |
| `responder_id` | integer | No | ID of the agent to whom the ticket has been assigned |
| `custom_fields` | object | No | Key–value pairs containing the names and values of custom fields. Example: {"cf_<field-name>": "test-value"}. Note: custom fields are to be predefined in Freshdesk. |
| `email_config_id` | integer | No | ID of email config which is used for this ticket |
| `lookup_parameter` | string | No | Lookup field for custom objects |
| `internal_agent_id` | integer | No | ID of the internal agent which the ticket should be assigned with |
| `internal_group_id` | integer | No | ID of the internal group to which the ticket should be assigned with |
| `unique_external_id` | string | No | External ID of the requester |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Ticket Form

**Slug:** `FRESHDESK_CREATE_TICKET_FORMS`

Tool to create a new ticket form in Freshdesk. Use when you need to create a custom ticket form for organizing support requests.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `title` | string | Yes | The title of the ticket form (display name shown to users) |
| `fields` | array | No | Array of field configurations for the form |
| `portal_ids` | array | No | Array of portal IDs where the form should be available |
| `description` | string | No | Description of the ticket form's purpose |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Ticket via Outbound Email

**Slug:** `FRESHDESK_CREATE_TICKET_OUTBOUND_EMAIL`

Tool to create a ticket by sending an outbound email to external recipients. Use when you need to initiate a support conversation via email. The ticket is automatically created with 'Closed' status and assigned to the sending agent to avoid unnecessary SLA timers.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `email` | string | Yes | Recipient email address for the outbound email |
| `subject` | string | Yes | Subject line of the outbound email |
| `priority` | string ("low" | "medium" | "high" | "urgent") | Yes | Priority level for the ticket created from this outbound email. |
| `description` | string | Yes | Body content of the outbound email. Supports HTML formatting |
| `email_config_id` | integer | Yes | Email configuration ID to use for sending the outbound email. Can be obtained from GET /api/v2/email_configs endpoint |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Ticket Time Entry

**Slug:** `FRESHDESK_CREATE_TICKET_TIME_ENTRY`

Tool to create a time entry for a specific ticket in Freshdesk. Use when you need to log time spent working on a ticket. Time entries track work duration and can be marked as billable or non-billable for billing and reporting purposes.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `note` | string | No | Description or comment about the work done during this time entry. |
| `agent_id` | integer | No | ID of the agent logging the time entry. If not provided, defaults to the authenticated agent. |
| `billable` | boolean | No | Whether the time entry is billable. Set to true for billable time, false for non-billable time. |
| `ticket_id` | integer | Yes | The unique identifier of the ticket to create a time entry for. |
| `start_time` | string | No | Timestamp when the timer was started in ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ) in UTC. |
| `time_spent` | string | Yes | Time spent in HH:MM format (e.g., '01:30' for 1 hour 30 minutes, '00:15' for 15 minutes). This is a required field. |
| `executed_at` | string | No | Timestamp when the work was executed in ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ) in UTC. If not provided, defaults to current time. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Translated Solution Category

**Slug:** `FRESHDESK_CREATE_TRANSLATED_SOLUTION_CATEGORY`

Tool to create a translated version of an existing solution category. Use when you need to add multilingual support to your knowledge base by creating category translations in different languages.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the solution category (must be an existing category created in the primary language) |
| `name` | string | Yes | The translated name of the solution category |
| `description` | string | No | The translated description of the solution category |
| `language_code` | string | Yes | The language code for the translation (e.g., 'fr' for French, 'es' for Spanish, 'de' for German) |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Currently Authenticated Agent

**Slug:** `FRESHDESK_CURRENTLY_AUTHENTICATED_AGENT`

Tool to retrieve profile information for the currently authenticated agent. Use when you need to get details about the agent whose API credentials are being used for authentication.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Admin Group

**Slug:** `FRESHDESK_DELETE_ADMIN_GROUP`

Tool to delete an admin group from Freshdesk. Use when you need to disband an admin group from your Freshdesk account. Note: Deleting a group only disbands it and does not delete the members of the group.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The unique identifier of the admin group to delete. Deleting a group disbands it but does not delete the group members. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Agent

**Slug:** `FRESHDESK_DELETE_AGENT`

Tool to permanently delete an agent from Freshdesk. Use when you need to remove an agent from your Freshdesk account. Note: You cannot delete yourself. The API prevents self-deletion as a security measure. When an agent is deleted, they are downgraded to a contact in the Freshdesk system.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `agent_id` | integer | Yes | The unique identifier of the agent to delete. Note: You cannot delete yourself using the API. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Automation Rule

**Slug:** `FRESHDESK_DELETE_AUTOMATION_RULE`

Permanently deletes an automation rule from Freshdesk by its type and rule ID. Use this action to remove workflow automation rules that are no longer needed. This action is idempotent - deleting an already-deleted rule will succeed without error. WARNING: This action is irreversible. The automation rule will be permanently deleted and cannot be recovered. Ensure you have the correct rule_id before proceeding.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `rule_id` | integer | Yes | The unique identifier of the automation rule to delete. Obtain this ID from the 'View Automation Rule' or list automations endpoint. |
| `automation_type_id` | integer | Yes | The type of automation rule to delete. Valid values: 1 (ticket creation rules - triggered when new tickets are created), 3 (time-triggered rules - run on a schedule), 4 (ticket update rules - triggered when tickets are updated). Note: Type 2 is not allowed by the API. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Company

**Slug:** `FRESHDESK_DELETE_COMPANY`

Tool to permanently disband a company from Freshdesk. Use when you need to delete a company from your Freshdesk account. Note: Deleting a company only disbands it and does not delete the customers inside it. Once disbanded, the company cannot be restored.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `company_id` | integer | Yes | The unique identifier of the company to delete. Note: Deleting a company disbands it but does not delete the customers inside it. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Company Field

**Slug:** `FRESHDESK_DELETE_COMPANY_FIELD`

Tool to permanently delete a custom company field from Freshdesk. Use when you need to remove a company field that is no longer needed. Note: This action is irreversible and will delete all data stored in that field across all companies. Only custom fields can be deleted, not default fields.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The unique identifier of the company field to delete. Note: Only custom company fields can be deleted, not default fields. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Contact

**Slug:** `FRESHDESK_DELETE_CONTACT`

Tool to soft delete a contact from Freshdesk. Use when you need to move a contact from All Contacts to Deleted Contacts view. Future communications from the contact will be directed to SPAM. The contact can be restored later - for permanent deletion, use hard_delete_contact instead.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `contact_id` | integer | Yes | The unique identifier of the contact to be soft deleted. This is the contact's numeric ID in Freshdesk. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Contact Field

**Slug:** `FRESHDESK_DELETE_CONTACT_FIELD`

Permanently delete a custom contact field from Freshdesk. Use this action when you need to remove a custom contact field that is no longer needed. Important notes: - This action is IRREVERSIBLE - all data stored in this field across all contacts will be permanently deleted - Only custom fields can be deleted - system/default fields (name, email, phone, etc.) cannot be deleted - If you attempt to delete a default field, the API will return an error

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `contact_field_id` | integer | Yes | The unique identifier of the custom contact field to delete. Only custom contact fields can be deleted - system/default fields (like name, email, phone) cannot be deleted. You can get this ID from the 'Get Contact Fields' or 'List Contact Fields' actions. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Conversation

**Slug:** `FRESHDESK_DELETE_CONVERSATION`

Tool to permanently delete a conversation from a ticket in Freshdesk. Use when you need to remove a specific conversation from a ticket. Note: Once deleted, the conversation cannot be restored.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `conversation_id` | integer | Yes | The unique identifier of the conversation to delete from the ticket. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Discussion Category

**Slug:** `FRESHDESK_DELETE_DISCUSSION_CATEGORY`

Permanently deletes a forum discussion category from Freshdesk. Use this action to remove an entire discussion category. This is a destructive operation and cannot be undone. Make sure you have the correct category_id before executing. Prerequisites: - The category_id must correspond to an existing discussion category - Use FRESHDESK_LIST_DISCUSSIONS to find available category IDs Common error scenarios: - 404: Category not found (invalid category_id or already deleted) - 401: Authentication failed (invalid API key) - 403: Insufficient permissions

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `category_id` | integer | Yes | The unique identifier of the discussion category to delete. You can obtain this ID from the List Discussions (FRESHDESK_LIST_DISCUSSIONS) action. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Discussion Comment

**Slug:** `FRESHDESK_DELETE_DISCUSSION_COMMENT`

Tool to permanently delete a comment from a discussion in Freshdesk. Use when you need to remove a specific comment from a discussion thread. Note: Once deleted, the comment cannot be restored.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | Comment ID - The unique identifier of the discussion comment to delete |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Discussion Forum

**Slug:** `FRESHDESK_DELETE_DISCUSSION_FORUM`

Tool to permanently delete a discussion forum in Freshdesk. Use when you need to remove a specific forum. Note: Once deleted, the forum cannot be restored.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | Forum ID - The unique identifier of the discussion forum to delete |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Unmonitor Forum

**Slug:** `FRESHDESK_DELETE_DISCUSSIONS_FORUMS_FOLLOW`

Tool to unfollow/unmonitor a discussion forum in Freshdesk. Use when you need to stop monitoring a specific forum. The operation removes the following status for the specified user from the forum. This is an idempotent operation - calling it multiple times or on an already-unfollowed forum will succeed without error. Note: Following forums is typically done through the Freshdesk web UI by end users. This action allows programmatic unfollowing via API.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | Discussion Forum ID - The unique identifier of the forum to unfollow |
| `user_id` | integer | Yes | User ID - The unique identifier of the user who wants to unfollow the forum |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Unmonitor Topic

**Slug:** `FRESHDESK_DELETE_DISCUSSIONS_TOPICS_FOLLOW`

Tool to unfollow/unmonitor a discussion topic in Freshdesk. Use when you need to stop monitoring a specific topic. The operation removes the following status for the specified user from the topic.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | Discussion Topic ID - The unique identifier of the topic to unfollow |
| `user_id` | integer | Yes | User ID - The unique identifier of the user who wants to unfollow the topic |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Discussion Topic

**Slug:** `FRESHDESK_DELETE_DISCUSSION_TOPIC`

Tool to permanently delete a discussion topic in Freshdesk. Use when you need to remove a specific topic from forums. Note: Once deleted, the topic cannot be restored.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | Topic ID - The unique identifier of the discussion topic to delete |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Email Mailbox

**Slug:** `FRESHDESK_DELETE_EMAIL_MAILBOXES`

Tool to permanently delete an email mailbox from Freshdesk. Use when you need to remove an email mailbox configuration. Note: This action is irreversible. Once deleted, emails sent to the mailbox's address will not generate tickets. Requires admin-level permissions to access the email/mailboxes endpoint.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The unique identifier of the email mailbox to delete. Once deleted, incoming emails to that mailbox will no longer create tickets in the system. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Group

**Slug:** `FRESHDESK_DELETE_GROUP`

Tool to permanently disband a group from Freshdesk. Use when you need to delete a group from your Freshdesk account. Note: Deleting a group only disbands it and does not delete the members of the group. Once disbanded, the group cannot be restored.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `group_id` | integer | Yes | The unique identifier of the group to delete. Note: Deleting a group only disbands it and does not delete the members of the group. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Multiple Tickets

**Slug:** `FRESHDESK_DELETE_MULTIPLE_TICKETS`

Asynchronously deletes multiple tickets in bulk. Returns a job_id to track deletion progress. Deleted tickets are moved to Trash and can be restored within 30 days.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ids` | array | Yes | Array of ticket IDs to delete in bulk. Example: [123, 456, 789] |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Section

**Slug:** `FRESHDESK_DELETE_SECTION`

Tool to permanently delete a section from a ticket field in Freshdesk. Use when you need to remove a section that is no longer needed. Note: The section must be empty before deletion. This action is irreversible.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `section_id` | integer | Yes | The unique identifier of the section to be deleted. Note: The section must be empty before it can be deleted. |
| `ticket_field_id` | integer | Yes | The unique identifier of the ticket field that contains the section to be deleted. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Skill

**Slug:** `FRESHDESK_DELETE_SKILL`

Tool to permanently delete a skill from Freshdesk. Use when you need to remove a skill from your Freshdesk account. This operation is permanent and cannot be undone.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The unique identifier of the skill to be removed |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Solution Article

**Slug:** `FRESHDESK_DELETE_SOLUTION_ARTICLE`

Tool to permanently delete a solution article and its translated versions in Freshdesk. Use when you need to remove a solution article that is no longer needed. Note: This operation is irreversible and cannot be undone.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `article_id` | integer | Yes | The unique identifier of the solution article to be deleted. Note: Deleting an article will permanently remove it along with all its translated versions. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Solution Category

**Slug:** `FRESHDESK_DELETE_SOLUTION_CATEGORY`

Permanently delete a solution category from Freshdesk's knowledge base. Use this tool when you need to remove a solution category that is no longer needed. This operation is irreversible and will also delete all translated versions of the category. Note: Categories containing folders may need to have their folders removed first.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `category_id` | integer | Yes | The unique identifier of the solution category to delete. This ID can be obtained from the List Solution Categories or Get Solution Category actions. Deleting a category will permanently remove it along with all its translated versions. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Solution Folder

**Slug:** `FRESHDESK_DELETE_SOLUTION_FOLDER`

Tool to permanently delete a solution folder and its translated versions in Freshdesk. Use when you need to remove a solution folder that is no longer needed. Note: This operation is irreversible and cannot be undone.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `folder_id` | integer | Yes | The unique identifier of the solution folder to be deleted. Note: Deleting a folder will permanently remove it along with all its translated versions. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Ticket

**Slug:** `FRESHDESK_DELETE_TICKET`

Tool to permanently delete a ticket from Freshdesk. Use when you need to remove a ticket from your Freshdesk account. Note: Once deleted, the ticket cannot be restored.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ticket_id` | integer | Yes | The unique identifier of the ticket to delete. This permanently removes the ticket from Freshdesk. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Ticket Field

**Slug:** `FRESHDESK_DELETE_TICKET_FIELD`

Permanently delete a custom ticket field from Freshdesk. Use this tool when you need to remove a custom ticket field that is no longer needed. This action is irreversible and will delete all data stored in that field across all tickets. Important: Only custom fields (those with 'cf_' prefix) can be deleted. Default system fields like 'subject', 'status', 'priority', etc. cannot be deleted and will return an error.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ticket_field_id` | integer | Yes | The unique identifier of the custom ticket field to delete. Only custom fields (those with 'cf_' prefix in their name) can be deleted. Default system fields cannot be deleted. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Ticket Form

**Slug:** `FRESHDESK_DELETE_TICKET_FORM`

Tool to permanently delete a ticket form from Freshdesk. Use when you need to remove a ticket form that is no longer needed. Note: This action is irreversible and once deleted, the ticket form cannot be restored through standard API operations.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ticket_form_id` | integer | Yes | The unique identifier of the ticket form to be deleted. This action permanently deletes the ticket form and is irreversible. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Ticket Form Field

**Slug:** `FRESHDESK_DELETE_TICKET_FORMS`

Tool to permanently delete a specific field from a ticket form in Freshdesk. Use when you need to remove a custom field that is no longer needed from a ticket form. Note: This action is irreversible and only custom fields can be deleted, not default fields which are interlinked with system functionalities.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `form_id` | integer | Yes | The unique identifier of the ticket form containing the field to be deleted. |
| `field_id` | integer | Yes | The unique identifier of the specific field to be deleted from the ticket form. Note: Only custom fields can be deleted, not default fields. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Ticket Summary

**Slug:** `FRESHDESK_DELETE_TICKET_SUMMARY`

Tool to delete the AI-generated summary of a ticket in Freshdesk. Use when you need to remove a ticket's summary. Note: Once deleted, the summary cannot be restored.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ticket_id` | integer | Yes | The unique identifier of the ticket whose AI-generated summary should be deleted. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Ticket User Access

**Slug:** `FRESHDESK_DELETE_TICKET_USER_ACCESS`

Tool to remove all agent access from a specific ticket in Freshdesk. Use when you need to revoke all agent permissions from a ticket. This removes all user accesses that were previously granted via the Add Ticket User Access endpoint.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ticket_id` | integer | Yes | The unique identifier of the ticket to remove all user accesses from |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Time Entry

**Slug:** `FRESHDESK_DELETE_TIME_ENTRY`

Tool to permanently delete a time entry from Freshdesk. Use when you need to remove a specific time entry. Note: Once deleted, the time entry cannot be restored.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `time_entry_id` | integer | Yes | The unique identifier of the time entry to be deleted. This operation permanently deletes the time entry and cannot be undone. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Export Contacts

**Slug:** `FRESHDESK_EXPORT_CONTACTS`

Tool to initiate an asynchronous export of contacts from Freshdesk to CSV file. Use when you need to export contact data for backup, sync with external databases, or data analysis. The API returns an export job ID which can be used to retrieve the download URL once processing completes.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fields` | object | Yes | Configuration object specifying which fields to include in the contact export. Must contain at least default_fields array. Contains `default_fields` (array of standard field names) and optionally `custom_fields` (array of custom field names). Invalid or misspelled field names cause export failure; validate names against your Freshdesk account's configured field metadata before submitting. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Account

**Slug:** `FRESHDESK_GET_ACCOUNT`

Tool to view Freshdesk account information. Use when you need to retrieve comprehensive account details including organization information, agent counts, timezone, data center location, plan tier, address, and primary contact information.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Agent

**Slug:** `FRESHDESK_GET_AGENT`

Tool to retrieve detailed information about a specific agent by ID. Use when you need to view a particular agent's profile, contact information, availability status, and role assignments.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `agent_id` | integer | Yes | The unique identifier of the agent to retrieve. Use FRESHDESK_GET_AGENTS to list all agents and obtain valid agent IDs. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Agent Availability

**Slug:** `FRESHDESK_GET_AGENT_AVAILABILITY`

Tool to retrieve availability information for a specific agent. Use when you need to check an agent's availability across different channels, their assignment limits, and current workload.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `agent_id` | integer | Yes | The unique identifier of the agent whose availability information is to be retrieved |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Search Agents Autocomplete

**Slug:** `FRESHDESK_GET_AGENTS`

Tool to search for agents using autocomplete functionality in Freshdesk. Use when you need to quickly find agents by name or email keyword for autocomplete suggestions.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `term` | string | Yes | The search keyword to find agents by name or email. Minimum 2 characters recommended for meaningful results. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Business Hours

**Slug:** `FRESHDESK_GET_BUSINESS_HOURS`

Retrieves all business hours configurations from Freshdesk. Use this tool to get a complete list of all business hour configurations including working hours schedules, time zones, and whether each configuration is set as the default for the account. No input parameters are required. Returns an array of all business hour configurations with their schedules for each day of the week.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Canned Response Folders

**Slug:** `FRESHDESK_GET_CANNED_RESPONSE_FOLDERS`

Tool to retrieve all canned response folders from Freshdesk. Use when you need to list available folders for organizing canned responses. Note: Empty folders (folders without canned responses) are not listed in the API response.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Companies

**Slug:** `FRESHDESK_GET_COMPANIES`

Tool to retrieve all companies from a Freshdesk account with pagination support. Use when you need to list companies representing customer organizations.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number for pagination. Starts at 1. Default: 1. |
| `per_page` | integer | No | Number of companies to return per page. Maximum: 100. Default: 30. Invalid values or values greater than 100 will result in an error. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Company

**Slug:** `FRESHDESK_GET_COMPANY`

Tool to retrieve detailed information about a specific company by ID. Use when you need to view a particular company's details, domains, and custom fields.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `company_id` | integer | Yes | The unique identifier of the company to retrieve |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Company Fields

**Slug:** `FRESHDESK_GET_COMPANY_FIELDS`

Tool to retrieve all company fields configured in Freshdesk. Use when you need to get the complete list of company field definitions including default fields (name, description, domains, etc.) and custom fields with their metadata.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Contact

**Slug:** `FRESHDESK_GET_CONTACT`

Tool to retrieve detailed information about a specific contact by ID. Use when you need to view a particular contact's profile, contact information, and custom fields.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `contact_id` | integer | Yes | The unique identifier of the contact to retrieve |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Contact Fields

**Slug:** `FRESHDESK_GET_CONTACT_FIELDS`

Tool to retrieve all contact fields configured in Freshdesk. Use when you need to get the complete list of contact field definitions including default fields (name, email, phone, etc.) and custom fields with their metadata.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Contacts

**Slug:** `FRESHDESK_GET_CONTACTS`

Tool to retrieve all contacts from a Freshdesk account. Use when you need to list contacts, optionally filtered by email, phone, mobile, company, state, or modification date. Results are paginated; iterate through pages using `page` and `per_page` (max 100) to retrieve the full dataset.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number for pagination. Starts at 1. Default: 1. |
| `email` | string | No | Filter contacts by email address |
| `phone` | string | No | Filter contacts by phone number. Should contain only numeric values; avoid characters like '-', '+', '(', ')' |
| `state` | string | No | Filter contacts by state |
| `mobile` | string | No | Filter contacts by mobile number. Should contain only numeric values; avoid characters like '-', '+', '(', ')' |
| `per_page` | integer | No | Number of contacts to return per page. Maximum: 100. Default: 30. |
| `company_id` | integer | No | Filter contacts belonging to a specific company by company ID |
| `updated_since` | string | No | Retrieve contacts modified after a specified timestamp in ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ) |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Discussion Category

**Slug:** `FRESHDESK_GET_DISCUSSION_CATEGORY`

Tool to view details of a specific forum category in Freshdesk. Use when you need to retrieve information about a discussion category including its name, description, and timestamps.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The unique identifier of the discussion category to retrieve |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### View Discussion Topic

**Slug:** `FRESHDESK_GET_DISCUSSION_TOPIC`

Tool to retrieve detailed information about a specific discussion topic by ID. Use when you need to view a topic's details, status, and metadata.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The unique identifier of the discussion topic to retrieve |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Email Mailbox

**Slug:** `FRESHDESK_GET_EMAIL_MAILBOX`

Tool to retrieve detailed information about a specific email mailbox by ID. Use when you need to view configuration details, status, and settings of a particular email mailbox.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The unique identifier of the email mailbox to retrieve |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Folder Responses

**Slug:** `FRESHDESK_GET_FOLDER_RESPONSES`

Tool to retrieve all canned responses within a specific folder in Freshdesk. Use when you need to list all response templates stored in a particular folder.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `folder_id` | integer | Yes | The unique identifier of the canned response folder |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Imported Contacts

**Slug:** `FRESHDESK_GET_IMPORTED_CONTACTS`

Tool to retrieve details of all contact import operations in Freshdesk. Use when you need to view import history, check import status, or get information about failed imports.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `status` | string | No | Filter imported contacts by status. Valid values: 'completed', 'blocked', 'failed', 'cancelled', 'in_progress' |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Job

**Slug:** `FRESHDESK_GET_JOB`

Tool to view the status of a bulk job operation. Use when you need to check the status of bulk ticket updates or bulk ticket deletions.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Job ID (UUID format) returned from bulk operations like bulk ticket updates or bulk ticket deletions |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List All Scenario Automations

**Slug:** `FRESHDESK_GET_SCENARIO_AUTOMATIONS_JSON`

Tool to list all scenario-based automations in Freshdesk. Use when you need to retrieve the complete list of scenario automations with their configurations.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Filter Tickets

**Slug:** `FRESHDESK_GET_SEARCH`

Tool to search and filter tickets in Freshdesk using flexible query syntax. Use when you need to find tickets based on status, priority, tags, custom fields, dates, or other ticket attributes with complex filtering logic.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number for pagination. Starts at 1 and cannot exceed 10. Default: 1. Each page returns up to 30 results. Maximum 300 tickets can be retrieved across all pages. |
| `query` | string | Yes | Query string to filter tickets using field:value syntax. Wrap conditions in parentheses for grouping. Use AND, OR for logic. Use :> (≥) and :< (≤) for numeric/date comparisons. Use null for empty fields. String values need single quotes. Do NOT include outer double quotes - they are added automatically. Max 512 characters. Common searchable fields: status (2=Open, 3=Pending, 4=Resolved, 5=Closed), priority (1=Low, 2=Medium, 3=High, 4=Urgent), agent_id, group_id, tag, created_at, updated_at, due_by. Custom fields use cf_ prefix. Note: Not all fields are searchable (e.g., requester_id may not work); use FRESHDESK_LIST_TICKET_FIELDS to discover available searchable fields. Dates in UTC (YYYY-MM-DD). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Tickets

**Slug:** `FRESHDESK_GET_TICKETS`

Retrieves a list of tickets from Freshdesk. Tickets are returned under `response_data` in the response object.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number to retrieve |
| `filter` | string | No | Predefined filter to apply. Possible values include 'new_and_my_open', 'watching', 'spam', 'deleted', etc. |
| `status` | string ("open" | "pending" | "resolved" | "closed" | "waiting_on_customer" | "waiting_on_third_party") | No | Enum for ticket status values. |
| `sort_by` | string | No | Field to sort tickets by, e.g., 'created_at' |
| `agent_id` | integer | No | Filter tickets by agent ID |
| `group_id` | integer | No | Filter tickets by group ID |
| `per_page` | integer | No | Number of tickets per page |
| `priority` | string ("low" | "medium" | "high" | "urgent") | No | Enum for ticket priority values. |
| `sort_order` | string | No | Order of sorting: 'asc' or 'desc' |
| `requester_id` | integer | No | Filter tickets by requester ID |
| `created_since` | string | No | Retrieve tickets created since this timestamp. Format: YYYY-MM-DDTHH:MM:SSZ |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Ticket Time Entries

**Slug:** `FRESHDESK_GET_TICKET_TIME_ENTRIES`

Tool to retrieve all time entries for a specific ticket in Freshdesk. Use when you need to view time logs associated with a particular ticket.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number for pagination. Default is 1. |
| `ticket_id` | integer | Yes | The unique identifier of the ticket to retrieve time entries for. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Ticket User Access

**Slug:** `FRESHDESK_GET_TICKET_USER_ACCESS`

Tool to retrieve agent access information for a specific ticket in Freshdesk. Use when you need to check which agents have permission to view or interact with a ticket. Returns a list of agent IDs that have access to the specified ticket.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ticket_id` | integer | Yes | The unique identifier of the ticket to retrieve user access information for |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Translated Solution Category

**Slug:** `FRESHDESK_GET_TRANSLATED_SOLUTION_CATEGORY`

Tool to view a translated solution category in Freshdesk. Use when you need to retrieve a solution category in a specific language other than the default language.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the solution category |
| `language_code` | string | Yes | The language code for the translated category (e.g., 'en', 'es', 'fr', 'de') |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Hard Delete Contact

**Slug:** `FRESHDESK_HARD_DELETE_CONTACT`

Tool to permanently delete a contact from Freshdesk. Use when you need to completely remove a contact's profile, tickets, calls, forum topics, ratings, and notes (useful for GDPR compliance). By default, the contact must be soft-deleted first unless force=true is used. This deletion is irreversible.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `force` | boolean | No | If true, force delete a contact even if it is not soft deleted previously. Default value is false. |
| `contact_id` | integer | Yes | The unique identifier of the contact to be permanently deleted |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Import Contact

**Slug:** `FRESHDESK_IMPORT_CONTACT`

Tool to import contacts in bulk from a CSV file to Freshdesk. Use when you need to create multiple contacts at once from a CSV file with field mappings.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `file` | object | No | CSV file containing contact data to import. File must be UTF-8 encoded with first row as headers. |
| `raw_content` | string | No | Inline CSV file content to upload as bytes or UTF-8 string. |
| `raw_filename` | string | No | Filename for the inline content (e.g., 'contacts.csv'). Defaults to 'import.csv'. |
| `raw_mimetype` | string | No | MIME type for the inline content (e.g., 'text/csv'). Defaults to text/csv. |
| `name_column_index` | integer | Yes | Zero-based column index for contact name field in the CSV file (e.g., 0 for first column, 1 for second column) |
| `email_column_index` | integer | Yes | Zero-based column index for email address field in the CSV file |
| `job_title_column_index` | integer | No | Zero-based column index for contact job title field in the CSV file (optional) |
| `company_name_column_index` | integer | Yes | Zero-based column index for company name field in the CSV file |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Admin Groups

**Slug:** `FRESHDESK_LIST_ADMIN_GROUPS`

Tool to list all admin groups in Freshdesk. Use when you need to retrieve all groups configured in the account with their members, escalation settings, and configuration details.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number for pagination (default: 1) |
| `per_page` | integer | No | Number of groups to return per page (default: 30, max: 100) |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List All Agents in a Group

**Slug:** `FRESHDESK_LIST_ALL_AGENTS_IN_A_GROUP`

Tool to retrieve all agents associated with a specific group in Freshdesk. Use when you need to get the list of agents assigned to a particular group.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `group_id` | integer | Yes | The unique identifier of the group whose agents you want to list |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List All Sections for a Ticket Field

**Slug:** `FRESHDESK_LIST_ALL_SECTIONS_FOR_TICKET_FIELD`

Tool to retrieve all dynamic sections for a specific ticket field in Freshdesk. Use when you need to view all sections associated with a dropdown field that controls dynamic field visibility.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ticket_field_id` | integer | Yes | The unique identifier of the ticket field for which to retrieve all sections. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List All Skills

**Slug:** `FRESHDESK_LIST_ALL_SKILLS`

Tool to retrieve all skills configured in Freshdesk account. Use when you need to get the complete list of skills available for ticket routing and agent assignment.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List All Ticket Conversations

**Slug:** `FRESHDESK_LIST_ALL_TICKET_CONVERSATIONS`

Tool to retrieve all conversations of a specific ticket in Freshdesk. Use when you need to view all messages, notes, and replies associated with a ticket.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number for pagination. Used to retrieve specific pages of results when there are many conversations. |
| `per_page` | integer | No | Number of items per page for pagination. Controls how many conversation records are returned per page. |
| `ticket_id` | integer | Yes | The unique identifier of the ticket whose conversations are to be retrieved. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Automation Rules

**Slug:** `FRESHDESK_LIST_AUTOMATION_RULES`

Tool to list all automation rules for a specific automation type in Freshdesk. Use when you need to retrieve all automation rules for ticket creation, time-based triggers, or ticket updates.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `automation_type_id` | integer | Yes | The automation type ID. Valid values: 1 (ticket creation rules - triggered when a ticket is created), 3 (time-based triggers - run on schedule based on ticket state), 4 (ticket update rules - triggered when a ticket is updated). Note: type 2 is not accessible via API. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List All Forum Categories

**Slug:** `FRESHDESK_LIST_DISCUSSIONS`

Tool to retrieve all forum categories (discussions) from Freshdesk. Use when you need to list all discussion categories available in the account. Supports pagination via page parameter.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number for pagination. Starts with 1. Used to scroll through paginated responses. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List All Topics in a Forum

**Slug:** `FRESHDESK_LIST_DISCUSSIONS_TOPICS`

Tool to retrieve all discussion topics within a specified forum in Freshdesk. Use when you need to list topics in a specific forum. Supports pagination and filtering by user participation.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number for pagination. Starts with 1. Default: 1 |
| `forum_id` | integer | Yes | The unique identifier of the forum whose topics you want to retrieve |
| `per_page` | integer | No | Number of topics to retrieve per page. Min: 1, Max: 100, Default: 30 |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Email Mailboxes

**Slug:** `FRESHDESK_LIST_EMAIL`

Tool to retrieve all email mailbox configurations from Freshdesk account. Use when you need to view support email addresses, mailbox settings, or filter mailboxes by product, group, or status.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number for pagination (default: 1) |
| `active` | boolean | No | Filter by active status - true for active mailboxes, false for inactive |
| `group_id` | integer | No | Filter mailboxes by associated group ID |
| `order_by` | string | No | Order results by specific field. Allowed values: 'group_id', 'product_id', 'failure_code', 'public_domain_failure' |
| `per_page` | integer | No | Number of records per page (default: 30, maximum: 100) |
| `order_type` | string | No | Sort order - 'asc' for ascending or 'desc' for descending |
| `product_id` | integer | No | Filter mailboxes by associated product ID |
| `support_email` | string | No | Filter by specific support email address |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List All Email Configs

**Slug:** `FRESHDESK_LIST_EMAIL_CONFIGS`

Retrieve all email configurations from a Freshdesk account. Returns a list of email configs including support email addresses, associated products, groups, and active status. Useful for viewing mailbox configurations or finding email config IDs needed for other operations.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Forums in Category

**Slug:** `FRESHDESK_LIST_FORUMS_IN_CATEGORY`

Tool to retrieve all forums within a specified category in Freshdesk. Use when you need to list all forums that exist within a specific forum category. Supports pagination via page and per_page parameters.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number for pagination. Starts with 1. Used to scroll through paginated responses. |
| `per_page` | integer | No | Number of results per page. Default and maximum limits apply based on endpoint. |
| `category_id` | integer | Yes | The unique identifier of the forum category for which to retrieve forums |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Monitored Topics

**Slug:** `FRESHDESK_LIST_MONITORED_TOPICS`

Tool to retrieve all discussion topics that are monitored/followed by a specific user in Freshdesk. Use when you need to list topics a user is following.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number for pagination. Starts with 1. Used to scroll through paginated responses. |
| `user_id` | integer | No | The ID of the user whose followed/monitored topics to retrieve. If not provided, returns topics for the authenticated user (from API key). Only admins can query other users' monitored topics. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Participated Topics

**Slug:** `FRESHDESK_LIST_PARTICIPATED_TOPICS`

Tool to retrieve discussion topics that a user has participated in by creating or commenting. Use when you need to list topics where a specific user has been active. Only admins can fetch topics for other users; without user_id, returns authenticated user's topics.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number for pagination. Starts with 1. Used to scroll through paginated responses. |
| `user_id` | integer | No | The ID of the user whose participated topics to retrieve. If not provided, returns topics for the authenticated user (from API key). Only admins can query other users' participated topics. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List All Products

**Slug:** `FRESHDESK_LIST_PRODUCTS`

Tool to retrieve all products configured in Freshdesk account. Use when you need to get the complete list of products available for support and ticket categorization.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List All Roles

**Slug:** `FRESHDESK_LIST_ROLES`

Tool to retrieve all roles available in the Freshdesk system with their permissions and details. Use when you need to get the complete list of roles for agents and collaborators.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number for pagination (starts from 1) |
| `per_page` | integer | No | Number of results per page. Default is 30, maximum is 100. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Satisfaction Ratings

**Slug:** `FRESHDESK_LIST_SATISFACTION_RATINGS`

Tool to retrieve all customer satisfaction survey ratings from Freshdesk. Use when you need to view satisfaction ratings, optionally filtered by creation date. By default, only returns results from the previous month unless created_since parameter is specified.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number for pagination. Default: 1. Used to scroll through pages of results. |
| `per_page` | integer | No | Number of results to return per page. Default: 30. Maximum: 100. Invalid values or values greater than 100 will result in an error. |
| `created_since` | string | No | Filter satisfaction ratings created after this timestamp. Format: ISO 8601 datetime (YYYY-MM-DDTHH:MM:SSZ in UTC). Example: 2019-03-25T00:00:00Z. Without this parameter, only results from the previous month are returned. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List All SLA Policies

**Slug:** `FRESHDESK_LIST_SLA_POLICIES`

Tool to retrieve all SLA (Service Level Agreement) policies in Freshdesk. Use when you need to get the complete list of SLA policies with their configurations, targets, and applicability conditions.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Solution Articles

**Slug:** `FRESHDESK_LIST_SOLUTION_ARTICLES`

Tool to retrieve all solution articles within a specified folder in Freshdesk. Use when you need to list all articles that exist within a specific solution folder.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number for pagination. Starts at 1. Each page returns up to 30 articles. |
| `folder_id` | integer | Yes | The unique identifier of the solution folder for which to retrieve articles |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Solution Categories

**Slug:** `FRESHDESK_LIST_SOLUTION_CATEGORIES`

Tool to retrieve all solution categories in Freshdesk. Use when you need to list all available solution categories in the knowledge base.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number for pagination. Starts at 1. Each page returns up to 30 categories. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Solution Folders

**Slug:** `FRESHDESK_LIST_SOLUTION_FOLDERS`

Tool to retrieve all folders within a specified solution category in Freshdesk. Use when you need to list all folders that exist within a specific solution category.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number for pagination. Starts at 1. Each page returns up to 30 folders. |
| `category_id` | integer | Yes | The unique identifier of the solution category for which to retrieve folders |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Translated Category Folders

**Slug:** `FRESHDESK_LIST_SOLUTIONS_CATEGORY_FOLDERS_TRANSLATED`

Tool to retrieve all translated solution folders in a category. Use when you need to list all folders in a specific language for a given solution category.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number for pagination. Starts at 1. Each page returns up to 30 folders. |
| `category_id` | integer | Yes | The unique identifier of the solution category for which to retrieve translated folders |
| `language_code` | string | Yes | The language code for the translated folders (e.g., 'en' for English, 'es' for Spanish, 'fr' for French). Must be a valid ISO language code. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Solution Subfolders

**Slug:** `FRESHDESK_LIST_SOLUTION_SUBFOLDERS`

Tool to list all subfolders within a specific solution folder in Freshdesk. Use when you need to retrieve the child folders of a parent folder in the knowledge base hierarchy.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number for pagination. Starts at 1. Each page returns up to 30 subfolders. |
| `folder_id` | integer | Yes | The unique identifier of the parent folder whose subfolders you want to retrieve |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List a Specific Section Details

**Slug:** `FRESHDESK_LIST_SPECIFIC_SECTION_DETAILS`

Tool to retrieve details of a specific section within a ticket field in Freshdesk. Use when you need to view information about a particular dynamic section including its label, associated choices, and contained fields.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `section_id` | integer | Yes | The unique identifier of the specific section to retrieve details for. |
| `ticket_field_id` | integer | Yes | The unique identifier of the parent ticket field that contains the section. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List All Surveys

**Slug:** `FRESHDESK_LIST_SURVEYS`

Tool to retrieve all surveys from a Freshdesk account. Use when you need to view the list of surveys, optionally filtered by state (active or inactive). Note that only one survey can be active at any given time.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `state` | string ("active" | "draft" | "paused") | No | Filter surveys by their current state. Use 'active' for active surveys, 'draft' for draft surveys, or 'paused' for paused surveys. Only one survey can be active at any given time. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List All Ticket Fields

**Slug:** `FRESHDESK_LIST_TICKET_FIELDS`

Tool to list all ticket fields configured in Freshdesk. Use when you need to retrieve metadata about all ticket field definitions including both default and custom fields.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Ticket Forms

**Slug:** `FRESHDESK_LIST_TICKET_FORMS`

Tool to retrieve all ticket forms from Freshdesk. Use when you need to view the list of available ticket forms, optionally with pagination or portal associations.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number for pagination. Page numbers start with 1. |
| `include` | string | No | Fetches additional data. Use 'portals' to include portal associations with each ticket form. |
| `per_page` | integer | No | Number of ticket forms to retrieve per page. Maximum is 50, default is 30. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Ticket Satisfaction Ratings

**Slug:** `FRESHDESK_LIST_TICKET_SATISFACTION_RATINGS`

Tool to list all satisfaction ratings of a ticket. Use when you need to retrieve customer feedback and survey responses for a specific ticket.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number for pagination. Default: 1 |
| `per_page` | integer | No | Number of results per page. Default: 30, Maximum: 100 |
| `ticket_id` | integer | Yes | The unique identifier of the ticket whose satisfaction ratings should be retrieved |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Ticket Watchers

**Slug:** `FRESHDESK_LIST_TICKETS_WATCHERS`

Tool to list all watchers subscribed to a specific Freshdesk ticket. Use when you need to see who is following a ticket and receiving notifications for updates.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | ID of the ticket to retrieve watchers for |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Time Entries

**Slug:** `FRESHDESK_LIST_TIME_ENTRIES`

Tool to retrieve all time entries from Freshdesk with optional filtering by company, agent, execution time range, and billable status. Use when you need to view time logs across tickets with support for pagination.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number for pagination. Default is 1. Avoid page numbers over 500 for performance reasons. |
| `agent_id` | integer | No | Filter time entries by specific agent ID |
| `billable` | boolean | No | Filter by billable status (true for billable, false for non-billable) |
| `per_page` | integer | No | Number of entries per page. Default is 30, maximum is 100. |
| `company_id` | integer | No | Filter time entries by company ID |
| `executed_after` | string | No | Filter time entries executed after specified date/time in ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ) in UTC |
| `executed_before` | string | No | Filter time entries executed before specified date/time in ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ) in UTC |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Topic Comments (Paginated)

**Slug:** `FRESHDESK_LIST_TOPIC_COMMENTS2`

Tool to list all comments on a specific discussion topic with pagination support. Use when you need to retrieve comments from a topic with control over page size and pagination.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the topic whose comments you want to retrieve |
| `page` | integer | No | Page number for pagination (default: 1, max: 10) |
| `per_page` | integer | No | Number of items per page (default: 30) |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Translated Solution Articles

**Slug:** `FRESHDESK_LIST_TRANSLATED_SOLUTION_ARTICLES`

Tool to view all translated solution articles in a folder for a specific language. Use when you need to retrieve all articles from a folder in a particular language translation.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The unique identifier of the solution folder |
| `page` | integer | No | Page number for pagination. Starts at 1. Each page returns up to 30 articles. |
| `language_code` | string | Yes | Language code for the translated articles (e.g., 'en', 'es', 'fr', 'de') |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Translated Subfolders

**Slug:** `FRESHDESK_LIST_TRANSLATED_SUBFOLDERS`

Tool to list all translated subfolders within a parent folder in Freshdesk. Use when you need to retrieve subfolders in a specific language for a given folder.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number for pagination. Starts at 1. Each page returns up to 30 subfolders. |
| `folder_id` | integer | Yes | The unique identifier of the parent folder to retrieve subfolders from |
| `language_code` | string | Yes | The language code for the translated folders (e.g., 'en' for English, 'es' for Spanish, 'fr' for French) |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Group Agents

**Slug:** `FRESHDESK_PATCH_ADMIN_GROUPS_AGENTS`

Tool to add or remove agents in a Freshdesk group. Use when you need to modify the list of agents assigned to a specific group by providing an array of agent IDs.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The unique identifier of the group to modify |
| `agents` | array | Yes | Array of agent IDs to set for the group. This replaces the current list of agents in the group. Pass an empty array to remove all agents from the group. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Remove Watcher from Ticket

**Slug:** `FRESHDESK_REMOVE_WATCHER`

Tool to remove the authenticated user as a watcher from a Freshdesk ticket. Use when you need to stop receiving email notifications for ticket updates like replies or status changes. The API automatically uses the authenticated user's credentials and does not require additional parameters.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ticket_id` | integer | Yes | The unique identifier of the ticket to remove the watcher from. The authenticated user will be removed as a watcher from this ticket. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Reply to Forward Ticket

**Slug:** `FRESHDESK_REPLY_TO_FORWARD_TICKET`

Tool to reply to or forward a ticket to external email addresses. Use when you need to send a ticket reply to specific email recipients outside the normal ticket flow.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `body` | string | Yes | Content of the reply or forward message |
| `cc_emails` | array | No | List of email addresses to be CC'd |
| `ticket_id` | integer | Yes | ID of the ticket to reply to or forward |
| `to_emails` | array | Yes | List of email addresses to send the reply/forward to |
| `bcc_emails` | array | No | List of email addresses to be BCC'd |
| `from_email` | string | No | Email address from which the reply should be sent |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Reply to Ticket

**Slug:** `FRESHDESK_REPLY_TO_TICKET`

Tool to create a public reply to an existing support ticket in Freshdesk. Use when an agent needs to respond to a ticket. The reply is sent to the ticket requester and any CC'd recipients. Supports both plain text and HTML content, file attachments, and email distribution control.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `body` | string | Yes | The content of the reply message. Can contain HTML formatting. This is the primary reply content that will be sent to the requester. |
| `user_id` | integer | No | The ID of the agent creating the reply. Use this to create a reply on behalf of a specific user. Can also be used to create a reply as if it came from the customer. |
| `cc_emails` | array | No | Email addresses to include in the CC field of the reply. Maximum 50 total recipients across to/cc/bcc fields. |
| `ticket_id` | integer | Yes | The unique identifier of the ticket to reply to |
| `to_emails` | array | No | Direct recipient email addresses to override the default ticket requester. Requires the 'multiple_to' feature to be enabled in your Freshdesk account. When not using this feature, the reply is automatically sent to the ticket requester. |
| `bcc_emails` | array | No | Email addresses to include in the BCC field of the reply. Maximum 50 total recipients across to/cc/bcc fields. |
| `from_email` | string | No | The support email address to send the reply from. If you have multiple support emails configured, use this parameter to specify which email should be used as the sender. By default, replies are sent from the support email where the ticket was originally created. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Search Agents

**Slug:** `FRESHDESK_SEARCH_AGENTS`

Tool to search and filter agents in Freshdesk. Use when you need to find agents by email, phone, mobile, or state (fulltime/occasional).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Specifies which page of results to return |
| `email` | string | No | Filter agents by email address |
| `phone` | string | No | Filter agents by phone number |
| `state` | string ("fulltime" | "occasional") | No | Filter agents by their state (fulltime or occasional) |
| `mobile` | string | No | Filter agents by mobile phone number |
| `per_page` | integer | No | Specifies the number of results per page |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Search Companies

**Slug:** `FRESHDESK_SEARCH_COMPANIES`

Tool to search and filter companies in Freshdesk using query strings with custom fields. Use when you need to find companies based on searchable fields like created_at, updated_at, or custom company fields. Note: Standard fields like 'name' are NOT searchable and will cause validation errors.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number for pagination. Starts at 1 and should not exceed 10. Default: 1. Maximum 300 results can be returned across all pages (30 per page). |
| `query` | string | Yes | URL-encoded query string to filter companies. Format: "(field:value OR field:'string') AND field:boolean". Must be enclosed in double quotes and limited to 512 characters. Note: Only custom fields and certain system fields like 'created_at' are searchable. Standard fields like 'name' are NOT supported and will cause validation errors. Use relational operators :> (greater than or equal) and :< (less than or equal) for numeric and date fields. Example: "created_at:>'2020-01-01'" or "(custom_field_1:100 OR custom_field_2:'value')" |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Search Companies Autocomplete

**Slug:** `FRESHDESK_SEARCH_COMPANY`

Tool to search for companies using autocomplete functionality in Freshdesk. Use when you need to quickly find companies by name or partial name keyword for autocomplete suggestions.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | The company name or partial name to search for. Use this parameter to find companies matching the search term via autocomplete functionality. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Search Contacts

**Slug:** `FRESHDESK_SEARCH_CONTACTS`

Tool to search and filter contacts in Freshdesk using query-based search. Use when you need to find contacts based on fields like email, phone, mobile, company_id, or other searchable contact attributes.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number for pagination. Starts at 1 and cannot exceed 10. Default: 1. Returns maximum 30 results per page. |
| `query` | string | Yes | Query string to filter contacts. IMPORTANT: The entire query must be wrapped in double quotes. Format: "field:value" for strings or "field:number" for numeric values. Searchable fields: email, phone, mobile, company_id, active. Supports logical operators (AND, OR) for combining conditions. String values must use single quotes inside the double-quoted query. Limited to 512 characters. Use "field:null" to search for null values. Note: The search API requires exact matches; partial/regex searches are not supported. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Search Contacts Autocomplete

**Slug:** `FRESHDESK_SEARCH_CONTACTS_AUTOCOMPLETE`

Tool to search for contacts using autocomplete functionality in Freshdesk. Use when you need to quickly find contacts by name, email, or other contact attributes for autocomplete suggestions.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `term` | string | Yes | Search term to find matching contacts. The endpoint searches across contact name, email, and other contact fields to return matches for autocomplete suggestions. Minimum 1 character required. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Search Solution Articles

**Slug:** `FRESHDESK_SEARCH_SOLUTION_ARTICLES`

Tool to search solution articles in Freshdesk knowledge base by keyword. Use when you need to find articles by searching titles and content.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number for pagination. Starts at 1. Each page returns up to 30 results (max 10 pages). |
| `term` | string | Yes | The search term or keyword to search for in solution articles. Searches across article titles and body content. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Toggle Timer

**Slug:** `FRESHDESK_TOGGLE_TIMER`

Tool to toggle the timer on a time entry to start or stop time tracking. Use when you need to start tracking time on a stopped timer or stop a currently running timer.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `time_entry_id` | integer | Yes | The unique identifier of the time entry to toggle the timer on. The timer will start if currently stopped, or stop if currently running. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Admin Group

**Slug:** `FRESHDESK_UPDATE_ADMIN_GROUP`

Tool to update an existing admin-level support agent group in Freshdesk. Use when you need to modify group details such as name, description, assigned agents, or escalation settings at the admin level.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The unique identifier of the admin group to update |
| `name` | string | No | The name of the group. Must be unique within the Freshdesk account. |
| `agent_ids` | array | No | Array of agent IDs who should be members of this group. |
| `description` | string | No | A brief description of the group's purpose and responsibilities. |
| `escalate_to` | integer | No | ID of the group to which unassigned tickets should be escalated after the specified time period. |
| `unassigned_for` | string | No | Time period after which an unassigned ticket in the group should be escalated. Format examples: '30m', '1h', '2h', '8h', '1d'. |
| `business_calendar_id` | integer | No | ID of the business calendar associated with this group for calculating business hours. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Admin Ticket Field

**Slug:** `FRESHDESK_UPDATE_ADMIN_TICKET_FIELD`

Tool to update an existing ticket field configuration in Freshdesk. Use when you need to modify field properties such as labels, visibility settings, or requirement flags.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the ticket field to update |
| `label` | string | No | The agent-facing label for the ticket field. This is what agents see in the UI. |
| `position` | integer | No | The display position/order of the field in the form. Lower numbers appear first. |
| `customers_can_edit` | boolean | No | Whether customers can edit this field after ticket creation. |
| `label_for_customers` | string | No | The customer-facing label for the ticket field. This is displayed to customers in the portal. |
| `required_for_agents` | boolean | No | Whether this field is required for agents when creating or updating tickets. |
| `required_for_closure` | boolean | No | Whether this field is required when closing a ticket. |
| `displayed_to_customers` | boolean | No | Whether this field is displayed to customers in the support portal. |
| `required_for_customers` | boolean | No | Whether this field is required for customers when submitting tickets. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Admin Ticket Field Section

**Slug:** `FRESHDESK_UPDATE_ADMIN_TICKET_FIELD_SECTION`

Tool to update a section within a ticket field in Freshdesk. Use when you need to modify section properties like label, associated choices, or contained fields.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the parent ticket field that contains the section |
| `label` | string | No | The display label for the section |
| `choice_ids` | array | No | Array of choice IDs from the parent ticket field that trigger this section. These are the dropdown options that determine when the section appears |
| `section_id` | integer | Yes | The ID of the section to update |
| `ticket_field_ids` | array | No | Array of ticket field IDs to include in this section |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Agent

**Slug:** `FRESHDESK_UPDATE_AGENT`

Tool to update an existing agent's information in Freshdesk. Use when you need to modify agent details such as email, permissions, signature, skills, groups, roles, or focus mode.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The unique identifier of the agent to update |
| `email` | string | No | Email address of the Agent |
| `language` | string | No | Agent language preference, defaults to en |
| `role_ids` | array | No | Array of role identifiers |
| `group_ids` | array | No | Array of group identifiers |
| `signature` | string | No | Signature of the agent in HTML format |
| `skill_ids` | array | No | Array of skill identifiers |
| `time_zone` | string | No | Agent timezone setting |
| `agent_type` | string ("support" | "field" | "collaborator") | No | Agent classification. |
| `focus_mode` | boolean | No | Focus mode toggle, defaults to true |
| `occasional` | boolean | No | Agent employment type indicator - true for occasional, false for full-time |
| `ticket_scope` | string ("global_access" | "group_access" | "restricted_access") | No | Ticket permission scope. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Agent Availability

**Slug:** `FRESHDESK_UPDATE_AGENT_AVAILABILITY`

Tool to update agent availability settings in Freshdesk. Use when you need to modify an agent's load settings by changing assignment limits for different channels.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `agent_id` | integer | Yes | The unique identifier of the agent whose availability settings are to be updated |
| `channel_availability` | array | Yes | Array of channel availability settings to update for the agent. Each object specifies the channel name and its assignment limit. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Automation Rule

**Slug:** `FRESHDESK_UPDATE_AUTOMATIONS`

Tool to update an existing automation rule in Freshdesk. Use when you need to modify automation rule properties like name, description, active status, conditions, or actions. Supports ticket creation rules (type 1), time-based triggers (type 3), and ticket update rules (type 4).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The unique identifier of the specific automation rule to update. |
| `name` | string | No | The name of the automation rule. |
| `active` | boolean | No | Whether the automation rule is active (true) or inactive (false). |
| `actions` | array | No | Array of action objects that are performed when conditions are met. Each action has an action_type and associated value. |
| `position` | integer | No | The position/order of the rule in the automation sequence. |
| `conditions` | object | No | Conditions that must be met for the rule to execute. Typically contains an 'all' or 'any' key with an array of condition objects. |
| `description` | string | No | Description of what the automation rule does. |
| `automation_type_id` | integer | Yes | The ID of the automation type. Use 1 for ticket creation rules, 3 for time-based triggers, or 4 for ticket update rules. Note: Value 2 is not allowed and will return an error. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Canned Response

**Slug:** `FRESHDESK_UPDATE_CANNED_RESPONSE`

Tool to update an existing canned response in Freshdesk. Use when you need to modify the title, content, folder location, visibility, or group access of a canned response template.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The unique identifier of the canned response to update |
| `title` | string | No | Title of the canned response |
| `folder_id` | integer | No | ID of the folder to move this canned response to |
| `group_ids` | array | No | Array of group IDs that should have access to this canned response. Used when visibility is set to 2 (specific groups) |
| `visibility` | integer | No | Visibility setting: 0=personal (visible only to creator), 1=all agents (visible to all agents), 2=specific groups (visible to designated groups) |
| `content_html` | string | No | HTML formatted content of the canned response. The plain text content field is automatically generated from this. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Canned Response Folder

**Slug:** `FRESHDESK_UPDATE_CANNED_RESPONSE_FOLDER`

Updates the name of an existing canned response folder in Freshdesk. Use this to rename folders that organize canned response templates.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | The new name for the canned response folder |
| `folder_id` | integer | Yes | The unique identifier of the canned response folder to update. Use the 'Get Canned Response Folders' action to find folder IDs. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Company

**Slug:** `FRESHDESK_UPDATE_COMPANIES`

Tool to update an existing company's information in Freshdesk. Use when you need to modify company details, domains, or custom fields.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | Company name |
| `note` | string | No | Notes associated with the company |
| `domains` | array | No | Domain names for the company. Multiple domains can be added |
| `industry` | string | No | Industry classification of the company. Editable dropdown of standard industry choices. Available on Blossom plan and above |
| `company_id` | integer | Yes | The unique identifier of the company to update |
| `description` | string | No | Description about the company |
| `account_tier` | string | No | Account tier for the company. Editable dropdown with choices: 'basic', 'premium', 'enterprise'. Available on Blossom plan and above |
| `health_score` | string | No | Health score for the company. Editable dropdown with choices: 'happy', 'doing okay', 'at risk'. Available on Blossom plan and above |
| `renewal_date` | string | No | Date field for contract or renewal dates in ISO 8601 format (e.g., '2024-12-31'). Available on Blossom plan and above |
| `custom_fields` | object | No | Custom field values specific to your Freshdesk configuration. Available on Growth plan or above |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Contact

**Slug:** `FRESHDESK_UPDATE_CONTACT`

Tool to update an existing contact's information in Freshdesk. Use when you need to modify contact details such as name, email, phone, job title, or custom fields.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | ID of the contact to update |
| `name` | string | No | Updated name of the contact |
| `tags` | array | No | Updated tags associated with the contact |
| `email` | string | No | Updated email address |
| `phone` | string | No | Updated phone number |
| `mobile` | string | No | Updated mobile number |
| `address` | string | No | Updated physical address |
| `language` | string | No | Updated language code for preferred language |
| `job_title` | string | No | Updated job title |
| `time_zone` | string | No | Updated time zone |
| `company_id` | integer | No | Updated ID of the primary company associated with this contact |
| `twitter_id` | string | No | Updated Twitter handle |
| `description` | string | No | Updated description or notes about the contact |
| `other_emails` | array | No | Updated additional email addresses |
| `custom_fields` | object | No | Custom fields object. Note: If contact has required custom fields (e.g., employee_id), they must be included in updates to avoid validation errors. |
| `view_all_tickets` | boolean | No | Set to true if the contact can view all tickets from their company |
| `unique_external_id` | string | No | Updated external ID for integration purposes |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Contact Field

**Slug:** `FRESHDESK_UPDATE_CONTACT_FIELD`

Tool to update a contact field's configuration in Freshdesk. Use when you need to modify field properties like labels, requirements, or visibility settings for agents and customers.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `label` | string | No | Display label shown to agents for this contact field |
| `contact_field_id` | integer | Yes | The unique identifier of the contact field to update |
| `customers_can_edit` | boolean | No | Whether customers can edit this field |
| `label_for_customers` | string | No | Display label shown to customers for this contact field |
| `required_for_agents` | boolean | No | Whether the field is required for agents to fill out |
| `required_for_customers` | boolean | No | Whether the field is required for customers to fill out |
| `displayed_for_customers` | boolean | No | Whether the field is displayed to customers |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Make Agent

**Slug:** `FRESHDESK_UPDATE_CONTACT_MAKE_AGENT`

Tool to convert a contact into an agent in Freshdesk. Use when you need to grant a contact access to the helpdesk as an agent with specific permissions and roles.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | ID of the contact to convert to an agent |
| `role_ids` | array | Yes | Array of role IDs that determine the agent's permissions. At least one role ID is required. |
| `occasional` | boolean | No | Specifies whether the agent is an occasional agent (true) or a full-time agent (false). Defaults to false if not specified. |
| `ticket_scope` | integer | Yes | Ticket scope defines the level of access: 1 (Global access - all tickets), 2 (Group access - tickets assigned to agent or their group), 3 (Restricted access - only tickets assigned to agent) |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Conversation

**Slug:** `FRESHDESK_UPDATE_CONVERSATIONS`

Tool to update the content of a conversation note in Freshdesk. Use when you need to modify existing public or private notes. Note: Only public and private notes can be edited, not incoming replies. The 'private' parameter cannot be modified.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The unique identifier of the conversation to update |
| `body` | string | Yes | The updated content of the note in HTML format. This parameter replaces the deprecated 'body_html' from API v1. Only public and private notes can be edited. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Discussion Category

**Slug:** `FRESHDESK_UPDATE_DISCUSSION_CATEGORY`

Tool to update an existing discussion category in Freshdesk forums. Use when you need to modify the name or description of a forum category.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The unique identifier of the discussion category to update |
| `name` | string | No | The name of the forum category |
| `description` | string | No | The description of the forum category |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Discussion Comment

**Slug:** `FRESHDESK_UPDATE_DISCUSSION_COMMENT`

Tool to update an existing comment in a discussion forum. Use when you need to edit the content of a comment in Freshdesk discussions.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The unique identifier of the discussion comment to update |
| `body` | string | Yes | The updated content of the comment. Can contain HTML formatting. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Discussion Forum

**Slug:** `FRESHDESK_UPDATE_DISCUSSION_FORUM`

Tool to update an existing discussion forum in Freshdesk. Use when you need to modify forum details such as name, description, category, type, or visibility settings.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The unique identifier of the discussion forum to update |
| `name` | string | No | Name of the forum |
| `forum_type` | integer | No | Type of the forum. Valid values: 1=Questions, 2=Ideas, 3=Problems, 4=Announcements. Note: Cannot be updated if forum contains topics. |
| `company_ids` | array | No | Array of company IDs that have access to the forum. Can only be updated when forum_visibility is set to 4 (Selected companies). |
| `description` | string | No | Description of the forum |
| `forum_visibility` | integer | No | Visibility setting for the forum. Valid values: 1=Everyone, 2=Logged in users, 3=Agents only, 4=Selected companies. |
| `forum_category_id` | integer | No | ID of the forum category to assign the forum to |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Discussion Topic

**Slug:** `FRESHDESK_UPDATE_DISCUSSION_TOPIC`

Tool to update an existing discussion topic in Freshdesk. Use when you need to modify a topic's title, message, lock status, or other properties.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The unique identifier of the discussion topic to update |
| `title` | string | No | The topic's title |
| `locked` | boolean | No | Controls whether the topic is locked. When true, no new replies can be added. |
| `sticky` | boolean | No | Whether the topic is pinned/sticky. Pinned topics appear at the top of the forum. |
| `message` | string | No | If included, updates the first comment/post of the topic. Supports HTML formatting. |
| `forum_id` | integer | No | ID of the forum to move the topic to. Can only be updated if user has privilege to manage forums. |
| `stamp_type` | string | No | Type of stamp/badge for the topic. Used to mark topics with special designations. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Email Settings

**Slug:** `FRESHDESK_UPDATE_EMAIL_SETTINGS`

Tool to update mailbox settings for email handling in Freshdesk. Use when you need to configure email behavior such as personalized replies, ticket threading, auto-response detection, or agent conversation settings.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `multiple_to` | boolean | No | Allow multiple email addresses in the To field when sending outbound emails from Freshdesk |
| `email_subject_match` | boolean | No | Enable ticket threading based on matching email subject lines |
| `extended_quoted_text` | boolean | No | Enable extended quoted text detection to better identify and handle quoted content in email replies |
| `skip_ticket_threading` | boolean | No | Disable automatic ticket threading based on email conversation history |
| `personalized_email_replies` | boolean | No | Enable or disable personalized email replies. When enabled, emails to customers will include personalized content |
| `allow_wildcard_ticket_create` | boolean | No | Allow tickets to be created when emails are sent to wildcard addresses configured in your mailbox |
| `threading_without_user_check` | boolean | No | Enable email threading without validating that the sender matches the original requester |
| `auto_response_detector_toggle` | boolean | No | Enable automatic detection of auto-response emails to prevent automatic replies from creating tickets or updating existing ones |
| `create_requester_using_reply_to` | boolean | No | Create requester using the Reply-To address instead of the From address when processing incoming emails |
| `threading_without_ticket_id_check` | boolean | No | Enable email threading without requiring a ticket ID in the email subject or references |
| `allow_agent_to_initiate_conversation` | boolean | No | Allow agents to initiate new email conversations with customers directly from Freshdesk |
| `original_sender_as_requester_for_forward` | boolean | No | Set the original sender as the requester when emails are forwarded to Freshdesk |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Automatic BCC Emails

**Slug:** `FRESHDESK_UPDATE_NOTIFICATION_EMAIL_BCC`

Tool to update automatic BCC email addresses for all ticket communications in Freshdesk. Use when you need to configure which email addresses should automatically receive BCC copies of all outgoing emails.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `emails` | array | Yes | Array of email addresses to set as automatic BCC recipients for all ticket communications. Maximum 50 email addresses allowed with a total limit of 255 characters. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update SLA Policy

**Slug:** `FRESHDESK_UPDATE_SLA_POLICIES`

Tool to update an existing SLA (Service Level Agreement) policy in Freshdesk. Use when you need to modify service level targets, policy settings, or applicability conditions for an SLA policy.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | Unique identifier of the SLA policy to update |
| `name` | string | No | Name of the SLA policy |
| `active` | boolean | No | Whether the SLA policy is active or not |
| `sla_target` | object | No | SLA targets for different priority levels. |
| `description` | string | No | Description of the SLA policy |
| `applicable_to` | object | No | Conditions that determine where the SLA policy applies. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Solution Category

**Slug:** `FRESHDESK_UPDATE_SOLUTION_CATEGORY`

Tool to update an existing solution category in Freshdesk. Use when you need to modify the name or description of a solution category.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | The name of the solution category |
| `category_id` | integer | Yes | The unique identifier of the solution category to update |
| `description` | string | No | A description of the solution category and its purpose |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Solution Folder

**Slug:** `FRESHDESK_UPDATE_SOLUTION_FOLDER`

Tool to update an existing solution folder in Freshdesk knowledge base. Use when you need to modify folder properties such as name, description, visibility settings, or folder hierarchy.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | Name of the solution folder |
| `folder_id` | integer | Yes | The unique identifier of the solution folder to update |
| `visibility` | integer | No | Visibility setting for the folder (1=All users, 2=Logged in users, 3=Selected companies, 4=Selected contacts) |
| `company_ids` | array | No | Array of company IDs associated with the folder. Used when visibility is set to selected companies. |
| `description` | string | No | Description of the solution folder |
| `language_code` | string | No | Optional language code for multilingual folder translation (e.g., 'en', 'es', 'fr'). When provided, updates the folder in that specific language. |
| `parent_folder_id` | integer | No | ID of the parent folder for creating folder hierarchy. Set to null or omit to make it a top-level folder. |
| `company_segment_ids` | array | No | Array of company segment IDs for segmentation |
| `contact_segment_ids` | array | No | Array of contact segment IDs for customer segmentation |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Solution Article

**Slug:** `FRESHDESK_UPDATE_SOLUTIONS`

Tool to update an existing solution article in Freshdesk. Use when you need to modify the title, description, status, tags, or SEO metadata of a solution article. All parameters are optional; only include fields you want to update.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The unique identifier of the solution article to update |
| `tags` | array | No | Tags for the article |
| `title` | string | No | Title of the solution article |
| `status` | integer | No | Status of the article (1=Draft, 2=Published). To unpublish an article, pass status as 1. |
| `agent_id` | integer | No | Agent ID associated with the article |
| `seo_data` | object | No | Meta data for search engine optimization containing meta_title, meta_description, and meta_keywords (array) |
| `description` | string | No | Description/content of the article in HTML format |
| `language_code` | string | No | Optional language code for updating translated articles (e.g., 'en', 'es', 'fr'). If specified, updates the article in that language. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Ticket

**Slug:** `FRESHDESK_UPDATE_TICKET`

Tool to update an existing ticket in Freshdesk. Use when you need to modify ticket attributes like subject, priority, status, description, or custom fields.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | Name of the requester. |
| `tags` | array | No | Array of tags to associate with the ticket. |
| `type` | string | No | Type of the ticket. Default types: Question, Incident, Problem, Feature Request. Custom types configured in your Freshdesk instance (e.g., Billing, Refund, Bug, Enhancement) are also supported. |
| `email` | string | No | Email address of the requester. |
| `phone` | string | No | Phone number of the requester. |
| `due_by` | string | No | Timestamp when the ticket is due to be resolved in ISO 8601 format (e.g., '2026-01-30T15:00:00Z'). |
| `source` | string ("email" | "portal" | "phone" | "forum" | "twitter" | "facebook" | "chat" | "mobihelp" | "feedback_widget" | "outbound_email") | No | Enum for ticket source values. |
| `status` | string ("open" | "pending" | "resolved" | "closed" | "waiting_on_customer" | "waiting_on_third_party") | No | Enum for ticket status values. |
| `subject` | string | No | Subject of the ticket. |
| `group_id` | integer | No | ID of the group to which the ticket has been assigned. |
| `priority` | string ("low" | "medium" | "high" | "urgent") | No | Enum for ticket priority values. |
| `fr_due_by` | string | No | Timestamp when the first response is due in ISO 8601 format (e.g., '2026-01-28T15:00:00Z'). |
| `parent_id` | integer | No | ID of the parent ticket to link this ticket to. |
| `ticket_id` | integer | Yes | ID of the ticket to be updated. |
| `company_id` | integer | No | ID of the company associated with the requester. |
| `product_id` | integer | No | ID of the product associated with this ticket. |
| `twitter_id` | string | No | Twitter handle of the requester. |
| `attachments` | array | No | Array of attachment objects to add to the ticket. |
| `description` | string | No | HTML content of the ticket description. |
| `facebook_id` | string | No | Facebook ID of the requester. |
| `requester_id` | integer | No | User ID of the requester. |
| `responder_id` | integer | No | ID of the agent to whom the ticket has been assigned. |
| `custom_fields` | object | No | Key-value pairs containing names and values of custom fields. Example: {"cf_reference_number": "REF-123"}. Custom fields must be predefined in Freshdesk admin settings. |
| `email_config_id` | integer | No | ID of the email configuration used for this ticket. |
| `lookup_parameter` | string | No | Lookup field value for custom objects. |
| `internal_agent_id` | integer | No | ID of the internal agent to assign the ticket to. |
| `internal_group_id` | integer | No | ID of the internal group to assign the ticket to. |
| `unique_external_id` | string | No | External ID of the requester. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Bulk Add Watcher to Tickets

**Slug:** `FRESHDESK_UPDATE_TICKET_BULK_WATCH`

Tool to add the authenticated user as a watcher to multiple tickets in a single bulk operation. Use when you need to follow multiple tickets and receive email notifications for their updates. Returns lists of succeeded and failed ticket IDs.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ids` | array | Yes | Array of ticket IDs to add the authenticated user as a watcher. The authenticated user will receive email notifications for updates on all specified tickets. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Ticket Form

**Slug:** `FRESHDESK_UPDATE_TICKET_FORMS`

Tool to update an existing ticket form in Freshdesk. Use when you need to modify ticket form properties like title, description, default status, or field configurations.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `title` | string | No | The display title of the ticket form shown to users and agents. |
| `fields` | array | No | List of field configurations to update on the form. Each field can specify id, name, label, position, and visibility/requirement settings. |
| `include` | string | No | Additional data to include in the response. Use 'portals' to include portal associations. |
| `description` | string | No | Description explaining the purpose of this ticket form. |
| `ticket_form_id` | integer | Yes | The unique identifier of the ticket form to update. This is a required path parameter. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Ticket Summary

**Slug:** `FRESHDESK_UPDATE_TICKET_SUMMARY`

Tool to update the AI-generated summary of a ticket in Freshdesk. Use when you need to modify or set the summary content for a ticket. The summary provides a concise overview of the ticket's content and history.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `body` | string | Yes | The AI-generated summary content to update for the ticket. Can contain plain text or HTML. |
| `ticket_id` | integer | Yes | The unique identifier of the ticket to update the AI-generated summary for. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Ticket User Access

**Slug:** `FRESHDESK_UPDATE_TICKET_USER_ACCESS`

Tool to update agent access to a specific ticket in Freshdesk by adding or removing agents. Use when you need to grant or revoke agent permission to view or interact with a ticket. Returns the list of agent IDs that have access after the update.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The ID of the ticket to update user access for |
| `user_ids` | array | Yes | Array of objects containing user ID and action. Each object must have 'id' (integer, agent ID) and 'action' (string, either 'add' or 'remove') fields. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Time Entry

**Slug:** `FRESHDESK_UPDATE_TIME_ENTRY`

Tool to update an existing time entry in Freshdesk. Use when you need to modify time entry details such as duration, notes, billable status, or agent assignment. Note: start_time cannot be updated if the timer is running, and timer_running cannot be set to its current value.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The unique identifier of the time entry to update. This is a required field. |
| `note` | string | No | Notes or description about the time entry. Provides context about the work performed. |
| `agent_id` | integer | No | The ID of the agent associated with the time entry. Used to reassign the time entry to a different agent. |
| `billable` | boolean | No | Boolean indicating if the time entry is billable. Set to true for billable time, false for non-billable time. |
| `start_time` | string | No | The start time of the time entry in ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ) in UTC. Note: This field cannot be updated if the timer is currently running. |
| `time_spent` | string | No | Amount of time spent in HH:MM format (e.g., '02:00' for 2 hours, '00:30' for 30 minutes). |
| `executed_at` | string | No | The date/time when the work was executed in ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ) in UTC. |
| `timer_running` | boolean | No | Boolean indicating if the timer is currently running. Note: Cannot be set to the same value as before - this field is used to toggle the timer state. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### View a Canned Response

**Slug:** `FRESHDESK_VIEW_A_CANNED_RESPONSE`

Tool to view details of a specific canned response in Freshdesk. Use when you need to retrieve information about a canned response including its title, content, folder location, and attachments.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `canned_response_id` | integer | Yes | The unique identifier of the canned response to retrieve |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### View Automation Rule

**Slug:** `FRESHDESK_VIEW_AUTOMATIONS`

Tool to view details of a specific automation rule in Freshdesk. Use when you need to retrieve comprehensive information about an automation rule including its triggers, conditions, and actions.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The unique identifier of the specific automation rule to retrieve. |
| `automation_type_id` | integer | Yes | The automation type ID. Valid values: 1 (ticket creation rules - triggered when a ticket is created), 3 (time-based triggers - run on schedule based on ticket state), 4 (ticket update rules - triggered when a ticket is updated). Note: type 2 is not accessible via API. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### View a Business Hour

**Slug:** `FRESHDESK_VIEW_BUSINESS_HOUR`

Tool to retrieve a specific business hour configuration from Freshdesk. Use when you need to view detailed information about business hours including working schedule, time zone, and holiday list.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `business_hours_id` | integer | Yes | The unique identifier of the business hour configuration to retrieve |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### View a Company Field

**Slug:** `FRESHDESK_VIEW_COMPANY_FIELD`

Tool to retrieve details of a specific company field by ID. Use when you need to view configuration and metadata for a single company field including its type, position, and choices for dropdown fields.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `company_field_id` | integer | Yes | The unique identifier of the company field to retrieve |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### View a Contact Field

**Slug:** `FRESHDESK_VIEW_CONTACT_FIELD`

Tool to retrieve details of a specific contact field by ID. Use when you need to view configuration and metadata for a single contact field including its type, position, and customer/agent requirements.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `contact_field_id` | integer | Yes | The unique identifier of the contact field to retrieve |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### View Email Mailbox Settings

**Slug:** `FRESHDESK_VIEW_EMAIL`

Tool to retrieve mailbox settings for the Freshdesk account. Use when you need to view email configuration settings such as threading options, requester creation settings, and agent conversation permissions.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### View Email Config

**Slug:** `FRESHDESK_VIEW_EMAIL_CONFIGS`

Tool to view details of a specific email configuration in Freshdesk. Use when you need to retrieve information about an email config including its associated product, group, and email addresses.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The unique identifier of the email configuration to retrieve |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### View Group

**Slug:** `FRESHDESK_VIEW_GROUP`

Tool to view details of a specific admin group in Freshdesk. Use when you need to retrieve information about a group including its members, escalation settings, and automatic assignment configuration.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `group_id` | integer | Yes | The unique identifier of the group to retrieve |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### View Automatic BCC Emails

**Slug:** `FRESHDESK_VIEW_NOTIFICATIONS`

Tool to view automatic BCC email addresses configured in Freshdesk. Use when you need to retrieve the list of email addresses that are automatically added as BCC to outgoing emails from the helpdesk.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### View Product

**Slug:** `FRESHDESK_VIEW_PRODUCTS`

Tool to retrieve detailed information about a specific product by ID. Use when you need to view a particular product's details including name, description, primary email, and default status.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The unique identifier of the product to retrieve |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### View a Role

**Slug:** `FRESHDESK_VIEW_ROLES`

Tool to view detailed information about a specific role by ID. Use when you need to retrieve a particular role's name, description, default status, and agent type.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The unique identifier of the role to retrieve |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### View Helpdesk Settings

**Slug:** `FRESHDESK_VIEW_SETTINGS`

Tool to retrieve helpdesk settings from Freshdesk. Use when you need to view language configuration including primary language, supported languages, portal languages, and help widget languages.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### View a Skill

**Slug:** `FRESHDESK_VIEW_SKILL`

Tool to retrieve a specific skill from Freshdesk by ID. Use when you need to view detailed information about a particular skill including its name, rank, associated agents, and routing conditions.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | integer | Yes | The unique identifier of the skill to retrieve |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### View Solution Category

**Slug:** `FRESHDESK_VIEW_SOLUTION_CATEGORY`

Tool to view a specific solution category by ID in Freshdesk. Use when you need to retrieve detailed information about a single solution category including its name, description, and visibility settings.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `category_id` | integer | Yes | The unique identifier of the solution category to retrieve |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### View Solution Folder

**Slug:** `FRESHDESK_VIEW_SOLUTION_FOLDER`

Tool to view a specific solution folder by ID in Freshdesk. Use when you need to retrieve detailed information about a solution folder including its name, description, hierarchy, and visibility settings.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `folder_id` | integer | Yes | The unique identifier of the solution folder to retrieve |
| `language_code` | string | No | Optional language code for translated version (e.g., 'en', 'es', 'fr'). If specified, retrieves the folder in that language. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### View Solution Article

**Slug:** `FRESHDESK_VIEW_SOLUTIONS`

Tool to view a specific solution article by ID in Freshdesk. Use when you need to retrieve detailed information about a single article including its content, metadata, SEO data, and engagement metrics.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `article_id` | integer | Yes | The unique identifier of the solution article to retrieve |
| `language_code` | string | No | Optional language code for translated version (e.g., 'fr', 'es', 'de'). If specified, retrieves the article in that language. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### View Ticket

**Slug:** `FRESHDESK_VIEW_TICKET`

Views an existing ticket in Freshdesk. Ticket details are returned nested under `response_data` in the tool response.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `include` | string | No | Comma-separated list of additional information to include in the response. Valid values: 'stats' (ticket timing statistics like first response time), 'requester' (full requester details), 'company' (company information). Example: 'stats,requester,company' to include all expansion fields. |
| `ticket_id` | integer | Yes | ID of the ticket to be viewed |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### View a Ticket Field

**Slug:** `FRESHDESK_VIEW_TICKET_FIELD`

Tool to retrieve a single ticket field configuration from Freshdesk. Use when you need to view detailed information about a specific ticket field including its type, position, visibility settings, and validation requirements.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ticket_field_id` | integer | Yes | The unique identifier of the ticket field to retrieve |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### View a Ticket Form's Field

**Slug:** `FRESHDESK_VIEW_TICKET_FORM_FIELD`

Tool to retrieve a specific field from a ticket form in Freshdesk. Use when you need to view detailed configuration of a field including its type, position, visibility, and requirement settings.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `form_id` | string | Yes | The ID of the ticket form |
| `field_id` | string | Yes | The ID of the field within the ticket form |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |
