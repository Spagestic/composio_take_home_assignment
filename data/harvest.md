# Harvest

Harvest is a time-tracking and invoicing tool designed for teams and freelancers, helping them log billable hours, manage projects, and streamline payments

- **Category:** time tracking software
- **Auth:** OAUTH2
- **Composio-managed OAuth available?** Yes
- **Tools:** 57
- **Triggers:** 0
- **Slug:** `HARVEST`
- **Version:** 20260721_00

## Tools

### Create Client

**Slug:** `HARVEST_CREATE_CLIENT`

Tool to create a new client. Use after gathering client details to register a new client in Harvest.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | The name of the client or company. |
| `address` | string | No | The client's physical address. May include new line characters. |
| `currency` | string | No | ISO currency code for the client. If omitted, the company's default currency is used. |
| `is_active` | boolean | No | Whether the client is active, or archived. Defaults to true. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Client Contact

**Slug:** `HARVEST_CREATE_CLIENT_CONTACT`

Tool to create a new client contact. Use when you need to add a contact under an existing client. Call after you've retrieved or confirmed the client_id.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fax` | string | No | Contact's fax number. |
| `email` | string | No | Contact's email address. |
| `title` | string | No | Title of the contact (e.g., 'Director of Ops'). |
| `client_id` | integer | Yes | ID of the client associated with this contact. |
| `last_name` | string | No | Last name of the contact. |
| `first_name` | string | Yes | First name of the contact. |
| `phone_mobile` | string | No | Contact's mobile phone number. |
| `phone_office` | string | No | Contact's office phone number. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Estimate

**Slug:** `HARVEST_CREATE_ESTIMATE`

Tool to create a new estimate. Use after gathering client and line item details.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tax` | number | No | First tax percentage applied to subtotal, e.g., 10.0 for 10%. |
| `tax2` | number | No | Second tax percentage applied to subtotal, e.g., 5.0 for 5%. |
| `notes` | string | No | Additional notes to include on the estimate. |
| `number` | string | No | If not set, the estimate number will be auto-generated. |
| `subject` | string | No | Estimate subject. |
| `currency` | string | No | Currency for the estimate; defaults to client's currency. |
| `discount` | number | No | Discount percentage subtracted from subtotal, e.g., 15.0 for 15%. |
| `client_id` | integer | Yes | ID of the client this estimate belongs to. |
| `issue_date` | string | No | Date the estimate was issued (YYYY-MM-DD); defaults to today. |
| `line_items` | array | No | List of line items to include on the estimate. |
| `purchase_order` | string | No | The purchase order number. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Estimate Item Category

**Slug:** `HARVEST_CREATE_ESTIMATE_ITEM_CATEGORY`

Tool to create a new estimate item category in Harvest. Use after deciding to categorize line items within an estimate.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | The name of the estimate item category. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Estimate Message

**Slug:** `HARVEST_CREATE_ESTIMATE_MESSAGE`

Tool to create a new message for an estimate. Use when you have an estimate ID and want to send a message or run an event (send, accept, decline, re-open) on the estimate.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `body` | string | No | The message body. |
| `subject` | string | No | The message subject. |
| `event_type` | string ("accept" | "decline" | "re-open" | "send") | No | If provided, runs an event on the estimate. Options: accept, decline, re-open, or send. |
| `recipients` | array | No | Array of recipient parameters. Required unless performing an event-only call. |
| `estimate_id` | integer | Yes | ID of the estimate to add a message to. |
| `send_me_a_copy` | boolean | No | Whether to email a copy of the message to the current user. Defaults to false. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Expense

**Slug:** `HARVEST_CREATE_EXPENSE`

Tool to create a new expense entry. Use when recording costs against projects. Ensure either units or total_cost is provided.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `notes` | string | No | Textual notes describing the expense. |
| `units` | number | No | Quantity of units to use for calculating total_cost. Required for unit-based categories. |
| `receipt` | string | No | Receipt file to attach. Multipart/form-data upload not supported by this tool. |
| `user_id` | integer | No | ID of the user associated with this expense. Defaults to the authenticated user. |
| `billable` | boolean | No | Whether the expense is billable. Defaults to true. |
| `project_id` | integer | Yes | ID of the project associated with this expense. |
| `spent_date` | string | Yes | Date the expense occurred (YYYY-MM-DD). |
| `total_cost` | number | No | Total amount of the expense. Required if not using a unit-based category. |
| `expense_category_id` | integer | Yes | ID of the expense category this expense is tracked against. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Invoice

**Slug:** `HARVEST_CREATE_INVOICE`

Tool to create a new invoice. Use when you have gathered all invoice details and need to bill a client in Harvest.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tax` | string | No | First tax rate applied to the invoice (0-100). |
| `tax2` | string | No | Second tax rate applied to the invoice (0-100). |
| `notes` | string | No | Additional notes on the invoice. |
| `state` | string ("draft" | "open" | "paid" | "closed") | No | State of the invoice. Options: 'draft', 'open', 'paid', 'closed'. |
| `number` | string | No | Custom invoice number (e.g., 'INV-1001'). |
| `subject` | string | No | Subject of the invoice. |
| `currency` | string | No | Currency code (e.g., 'USD'). |
| `discount` | string | No | Percentage discount applied to the invoice (0-100). |
| `due_date` | string | No | Date the invoice is due (YYYY-MM-DD). |
| `client_id` | integer | Yes | ID of the client to associate with the invoice. |
| `issue_date` | string | No | Date the invoice was issued (YYYY-MM-DD). |
| `line_items` | array | Yes | Array of line item objects to include in the invoice. |
| `purchase_order` | string | No | Purchase order number. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Invoice Item Category

**Slug:** `HARVEST_CREATE_INVOICE_ITEM_CATEGORY`

Tool to create a new invoice item category. Use after you have decided on the category name to register it in Harvest.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | The name of the invoice item category. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Invoice Message

**Slug:** `HARVEST_CREATE_INVOICE_MESSAGE`

Creates a new message for an invoice in Harvest. Use this to send invoice notifications to clients, create draft messages, or change invoice states (close/reopen). Requires a valid invoice ID. The invoice must be in the appropriate state for the requested event_type.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `body` | string | No | The message body |
| `subject` | string | No | The message subject |
| `thank_you` | boolean | No | If true, send a thank you message email |
| `attach_pdf` | boolean | No | If true, attach a PDF of the invoice to the message email |
| `event_type` | string ("close" | "draft" | "re-open" | "send") | No | Invoice event type controls message sending and invoice state changes. Options: null/'send' - sends the message (invoice must be draft); 'draft' - creates message without sending; 'close' - closes invoice as written off (invoice must be open); 're-open' - reopens closed invoice (invoice must be closed). Default: null (same as 'send'). |
| `invoice_id` | integer | Yes | ID of the invoice to message |
| `recipients` | array | No | List of message recipients. If omitted and send_me_a_copy is false, the message will have no recipients and the request may fail. Required when event_type is 'send' or omitted (null) and send_me_a_copy is false. |
| `send_me_a_copy` | boolean | No | If true, send a copy of the message email to the current user |
| `include_link_to_client_invoice` | boolean | No | Deprecated. Ignored if true; if false, clears payment options on the invoice. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Invoice Payment

**Slug:** `HARVEST_CREATE_INVOICE_PAYMENT`

Tool to create a new payment on an invoice. Use when recording a payment against an existing invoice.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `notes` | string | No | Any notes to be associated with the payment. |
| `amount` | string | Yes | The amount of the payment. |
| `paid_at` | string | No | Date and time the payment was made (ISO 8601 format). Provide either paid_at or paid_date (at least one is required), but not both. |
| `paid_date` | string | No | Date the payment was made (YYYY-MM-DD format). Provide either paid_date or paid_at (at least one is required), but not both. |
| `invoice_id` | integer | Yes | ID of the invoice to add a payment to. |
| `send_thank_you` | boolean | No | Whether to send a thank you email to the client. Emails are only sent when the invoice becomes fully paid after this payment. Defaults to true if not specified. Requires account email settings to be enabled in Invoices > Configure > Messages. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Project

**Slug:** `HARVEST_CREATE_PROJECT`

Create a new project in Harvest. A project is a container for tracking time, expenses, and invoices for a specific client engagement. Required: You must provide a valid client_id (use list_clients or create_client first), project name, and billing configuration (is_billable, bill_by, budget_by). Common use cases: - Time & Materials: is_billable=true, bill_by="Tasks", budget_by="project" - Fixed Fee: is_billable=true, bill_by="Project", budget_by="none", is_fixed_fee=true - Internal/Non-billable: is_billable=false, bill_by="none", budget_by="none"

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fee` | number | No | The fee for the project when billing by project. |
| `code` | string | No | The project code. |
| `name` | string | Yes | Name of the project. |
| `notes` | string | No | Any additional notes about the project. |
| `budget` | number | No | The monetary budget for the project. |
| `bill_by` | string ("Project" | "Tasks" | "People" | "none") | Yes | The method by which the project is invoiced. Required by the Harvest API. |
| `ends_on` | string | No | Date the project ends (YYYY-MM-DD). |
| `budget_by` | string ("project" | "project_cost" | "task" | "task_fees" | "person" | "none") | Yes | The method by which the project is budgeted. Required by the Harvest API. |
| `client_id` | integer | Yes | ID of the client to associate this project with. |
| `is_active` | boolean | No | Whether the project is active (true) or archived (false). Defaults to true. |
| `starts_on` | string | No | Date the project starts (YYYY-MM-DD). |
| `cost_budget` | number | No | The monetary cost budget for the project. |
| `hourly_rate` | number | No | The default hourly rate to use for this project when billing by project. |
| `is_billable` | boolean | Yes | Whether the project is billable. Required by the Harvest API. |
| `is_fixed_fee` | boolean | No | Whether the project is a fixed-fee project. |
| `budget_is_monthly` | boolean | No | Whether the budget resets every month. |
| `show_budget_to_all` | boolean | No | Whether the budget is visible to all project members. |
| `notify_when_over_budget` | boolean | No | Whether to send a notification when the project exceeds its budget. |
| `cost_budget_include_expenses` | boolean | No | Whether expenses are included in the cost budget. |
| `over_budget_notification_percentage` | number | No | Percentage at which the over budget notification is triggered. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Task

**Slug:** `HARVEST_CREATE_TASK`

Creates a new task in Harvest. Tasks are reusable activity types (e.g., "Development", "Design", "Consulting") that can be assigned to projects for time tracking. Use this to define billable or non-billable work categories that your team will track time against.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | The name of the task to create. Must be unique across all tasks (both active and archived) in the Harvest account. |
| `is_active` | boolean | No | Whether the task is active (true) or archived (false). Archived tasks cannot be assigned to projects. If not specified, defaults to true. |
| `is_default` | boolean | No | Whether this task should be automatically added to all future projects. If not specified, defaults to false. |
| `billable_by_default` | boolean | No | Whether the task is billable by default when added to a project. If not specified, defaults to true. |
| `default_hourly_rate` | number | No | The default hourly rate (in account currency) for this task when added to a project. If not specified, defaults to 0. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Time Entry

**Slug:** `HARVEST_CREATE_TIME_ENTRY`

Tool to create a new time entry. Use when logging hours for a project by specifying start/end times or duration.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `hours` | string | No | Total hours to log. Only used when the Harvest account is configured for duration-based time tracking. If the account uses timestamp timers, this parameter is ignored and a running timer is started instead. Use started_time and ended_time for timestamp-based tracking. |
| `notes` | string | No | Notes or description of the work performed |
| `task_id` | integer | Yes | ID of the task to associate with the time entry. The task must be assigned to the specified project. To find valid task IDs, use GET /projects/{project_id}/task_assignments to list tasks assigned to your project - the task ID is found in the 'task.id' field of each assignment. Using HARVEST_LIST_TASKS returns global tasks which may not be assigned to your project. The task must also be active; inactive tasks cause a 422 'Task doesn't exist' error. |
| `user_id` | integer | No | ID of the user; defaults to the authenticated user |
| `ended_time` | string | No | Time the entry ended (e.g., '5:00pm', '17:00'). Only used when the Harvest account is configured for timestamp-based time tracking. If omitted with started_time, creates a running timer. |
| `project_id` | integer | Yes | ID of the project to associate with the time entry. Use HARVEST_LIST_PROJECTS to retrieve available project IDs. The authenticated user must be assigned to the project. |
| `spent_date` | string | Yes | Date the time entry was spent (YYYY-MM-DD) Use the user's local date, not UTC, to avoid logging hours on the wrong date. |
| `started_time` | string | No | Time the entry started (e.g., '9:00am', '14:30'). Only used when the Harvest account is configured for timestamp-based time tracking. Omit ended_time to create a running timer. |
| `external_reference` | object | No | Links this entry to an external system (task, project, etc.). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create User

**Slug:** `HARVEST_CREATE_USER`

Creates a new user in Harvest and sends an invitation email to the specified address. Use this action to add team members to your Harvest account. You can specify their role, permissions, rates, and whether they are employees or contractors. The user will receive an invitation email to activate their account. Required: first_name, last_name, and email. Optional: timezone, access roles, rates, weekly capacity, and business roles.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `email` | string | Yes | The email address of the user. |
| `roles` | array | No | Descriptive names of the business roles assigned to this person. Used for filtering reports, with no impact on permissions. |
| `timezone` | string | No | The user's timezone in Rails timezone format. Defaults to the company's timezone if not specified. Common values: 'Eastern Time (US & Canada)', 'Pacific Time (US & Canada)', 'Central Time (US & Canada)', 'Mountain Time (US & Canada)', 'UTC', 'London', 'Paris', 'Tokyo', 'Sydney', etc. |
| `cost_rate` | number | No | The cost rate to use for this user when calculating project costs. Defaults to 0.0. |
| `is_active` | boolean | No | Whether the user is active or archived. Defaults to true. |
| `last_name` | string | Yes | The last name of the user. |
| `first_name` | string | Yes | The first name of the user. |
| `access_roles` | array | No | Access role(s) that determine the user's permissions in Harvest. Primary roles (choose one): 'member' (default), 'manager', or 'administrator'. Additional manager-only roles (combine with 'manager'): 'project_creator', 'billable_rates_manager', 'managed_projects_invoice_drafter', 'managed_projects_invoice_manager', 'client_and_task_manager', 'time_and_expenses_manager', 'estimates_manager'. Note: Some roles have dependencies (e.g., invoice/estimates roles require 'billable_rates_manager'). |
| `is_contractor` | boolean | No | Whether the user is a contractor or an employee. Defaults to false. |
| `weekly_capacity` | integer | No | The number of hours per week this person is available to work in seconds. Defaults to 126000 (35 hours). |
| `default_hourly_rate` | number | No | The billable rate to use for this user when added to a project. Defaults to 0.0. |
| `has_access_to_all_future_projects` | boolean | No | Whether the user should be automatically added to future projects. Defaults to false. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Client

**Slug:** `HARVEST_DELETE_CLIENT`

Tool to delete a client. Use when you need to remove a client that has no associated projects, invoices, or estimates. Call after confirming the client_id exists and has no dependent resources.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `client_id` | integer | Yes | The ID of the client to delete. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Client Contact

**Slug:** `HARVEST_DELETE_CLIENT_CONTACT`

Permanently deletes a client contact from Harvest. Use when you need to remove a contact that is no longer relevant. Requires Administrator or Manager permissions. The deletion cannot be undone, so verify the contact_id before calling.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `contact_id` | integer | Yes | The ID of the contact to delete. Returns 404 error if the contact does not exist. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Estimate

**Slug:** `HARVEST_DELETE_ESTIMATE`

Tool to delete an estimate. Use when you need to remove an estimate that is no longer needed. Call after confirming the estimate_id exists and has no dependent resources.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `estimate_id` | integer | Yes | The ID of the estimate to delete. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Estimate Message

**Slug:** `HARVEST_DELETE_ESTIMATE_MESSAGE`

Tool to delete an estimate message. Use when you need to remove a message from an estimate. Call after confirming estimate_id and message_id are correct.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `message_id` | integer | Yes | The ID of the message to delete from the estimate. |
| `estimate_id` | integer | Yes | The ID of the estimate. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Invoice

**Slug:** `HARVEST_DELETE_INVOICE`

Delete an invoice from Harvest. Removes the specified invoice permanently. Requires Administrator or Manager permissions with invoice editing access.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `invoice_id` | integer | Yes | The ID of the invoice to delete. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Invoice Item Category

**Slug:** `HARVEST_DELETE_INVOICE_ITEM_CATEGORY`

Tool to delete an invoice item category from Harvest. Returns 200 OK on success with no response body. Important: Deletion is only possible if both use_as_service and use_as_expense are false. Categories actively used for billable hours or expenses cannot be deleted. Use when you need to remove an obsolete or unused invoice item category. Requires Admin or Project Manager permissions.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `invoice_item_category_id` | integer | Yes | The ID of the invoice item category to delete. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Invoice Message

**Slug:** `HARVEST_DELETE_INVOICE_MESSAGE`

Tool to delete a message from an invoice. Use when you need to remove a specific message that is no longer relevant. Call after confirming the invoice_id and message_id.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `invoice_id` | integer | Yes | The ID of the invoice to delete a message from. |
| `message_id` | integer | Yes | The ID of the message to be deleted. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Invoice Payment

**Slug:** `HARVEST_DELETE_INVOICE_PAYMENT`

Tool to delete an invoice payment. Use when you need to remove a payment from an invoice after confirming payment details.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `invoice_id` | integer | Yes | The ID of the invoice containing the payment to delete. |
| `payment_id` | integer | Yes | The ID of the invoice payment to delete. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Project

**Slug:** `HARVEST_DELETE_PROJECT`

Tool to delete a project. Use when you need to remove a project and all its associated time entries and expenses; invoices remain intact. Call after confirming the project_id exists.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `project_id` | integer | Yes | The ID of the project to delete. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Task

**Slug:** `HARVEST_DELETE_TASK`

Tool to delete a task. Use when you need to remove a task that has no associated time entries. Call after confirming the task_id exists and has no dependent time entries.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `task_id` | integer | Yes | The ID of the task to delete. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Time Entry

**Slug:** `HARVEST_DELETE_TIME_ENTRY`

Tool to delete a time entry. Use when removing an existing time entry that is deletable (not closed or on archived projects/tasks). Call after confirming the time_entry_id exists.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `time_entry_id` | integer | Yes | The ID of the time entry to delete. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete User

**Slug:** `HARVEST_DELETE_USER`

Tool to delete a user. Use when you need to remove a user that has no associated time entries or expenses. Call after confirming the user_id exists and has no dependent time entries or expenses.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `user_id` | integer | Yes | The ID of the user to delete. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Client

**Slug:** `HARVEST_GET_CLIENT`

Retrieves a specific client by ID from Harvest. Use this to get detailed information about a client including their name, active status, address, currency, and timestamps. Returns complete client details needed for invoicing, reporting, or verifying client information.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `client_id` | integer | Yes | The ID of the client to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Company Info

**Slug:** `HARVEST_GET_COMPANY_INFO`

Retrieves detailed information about the company associated with the authenticated Harvest account. This endpoint returns comprehensive company settings including: - Basic information (name, domain, active status) - Time tracking preferences (format, week start day, timer type) - Localization settings (date/time format, currency, separators) - Feature flags (expenses, invoices, estimates, approvals, team scheduling) - Weekly capacity and other operational settings No parameters required. Use this to understand company configuration before performing other operations.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Estimate

**Slug:** `HARVEST_GET_ESTIMATE`

Tool to retrieve a specific estimate by ID. Use after confirming the estimate ID. Example: "Get estimate with ID 123456".

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `estimate_id` | integer | Yes | ID of the estimate to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Invoice

**Slug:** `HARVEST_GET_INVOICE`

Tool to retrieve a specific invoice by ID. Use when you need the full details of an invoice after selecting or creating it. Example: 'Get invoice with ID 13150378.'

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `invoice_id` | integer | Yes | Unique ID of the invoice to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Project

**Slug:** `HARVEST_GET_PROJECT`

Tool to retrieve a specific Harvest project by ID. Use when you have a project ID and need its details.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `project_id` | integer | Yes | The ID of the Harvest project to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Task

**Slug:** `HARVEST_GET_TASK`

Tool to retrieve a specific task by ID. Use when you have a task ID and need its detailed information.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `task_id` | integer | Yes | Unique ID of the task to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Time Entry

**Slug:** `HARVEST_GET_TIME_ENTRY`

Tool to retrieve a single time entry by ID. Use when you have a specific time entry ID and need its full details.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `time_entry_id` | integer | Yes | The ID of the time entry to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get User

**Slug:** `HARVEST_GET_USER`

Tool to retrieve a specific user by ID. Use after obtaining a valid user ID (for example via List Users). Example: "Get details of user 3230547".

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `user_id` | integer | Yes | The unique ID of the user to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Client Contacts

**Slug:** `HARVEST_LIST_CLIENT_CONTACTS`

Tool to list client contacts. Use when you need to retrieve contacts with optional filtering and pagination.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number to use in pagination. |
| `per_page` | integer | No | Number of records to return per page. |
| `client_id` | integer | No | Only return contacts belonging to the client with this ID. |
| `updated_since` | string | No | Only return contacts updated since this date/time (ISO 8601). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Clients

**Slug:** `HARVEST_LIST_CLIENTS`

Tool to list clients. Use when you need to retrieve a paginated list of clients from Harvest. Ensure you have a valid access token in metadata before calling.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | DEPRECATED. Page number for pagination. Defaults to 1. |
| `per_page` | integer | No | The number of records to return per page. Min 1, max 2000. Defaults to 2000. |
| `is_active` | boolean | No | Pass true to only return active clients and false to return inactive clients. |
| `updated_since` | string | No | Only return clients that have been updated since the given date and time, in ISO 8601 format. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Estimate Messages

**Slug:** `HARVEST_LIST_ESTIMATE_MESSAGES`

Lists all messages associated with a specific estimate in Harvest. Returns messages sorted by creation date (most recent first). Use this tool when you need to: - View communication history for an estimate - Check what messages have been sent to clients regarding an estimate - Track events that occurred on an estimate (send, accept, decline, re-open) - Filter messages by update time to find recent communications Requires a valid estimate_id. Supports pagination via per_page parameter (default 2000, max 2000).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | DEPRECATED. Page number for pagination. Defaults to 1. |
| `per_page` | integer | No | Number of records per page, between 1 and 2000. Defaults to 2000. |
| `estimate_id` | integer | Yes | ID of the estimate to retrieve messages for. |
| `updated_since` | string | No | Only return estimate messages updated since the given date and time, in ISO 8601 format. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Expense Categories

**Slug:** `HARVEST_LIST_EXPENSE_CATEGORIES`

Tool to list expense categories. Use when you need to retrieve a paginated list of expense categories, optionally filtering by active status or last update timestamp.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number for pagination. |
| `per_page` | integer | No | Number of records to return per page (1–2000). |
| `is_active` | boolean | No | Pass true to return only active expense categories; false to return only inactive categories. |
| `updated_since` | string | No | Only return expense categories updated since the given date and time (ISO 8601). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Invoice Item Categories

**Slug:** `HARVEST_LIST_INVOICE_ITEM_CATEGORIES`

Tool to retrieve invoice item categories. Use when you need to fetch a paginated list of invoice item categories in Harvest.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | DEPRECATED. Page number for pagination. Defaults to 1. |
| `per_page` | integer | No | The number of records to return per page. Min 1, max 2000. Defaults to 2000. |
| `updated_since` | string | No | Only return invoice item categories that have been updated since the given date and time, in ISO 8601 format. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Invoice Messages

**Slug:** `HARVEST_LIST_INVOICE_MESSAGES`

Tool to list messages associated with a given invoice. Use when you need to retrieve invoice messages with optional filtering by update time and pagination.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number to use in pagination (deprecated, defaults to 1). |
| `per_page` | integer | No | Number of records to return per page (1-2000, defaults to 2000). |
| `invoice_id` | integer | Yes | ID of the invoice to retrieve messages for. |
| `updated_since` | string | No | Only return messages updated since this date/time (ISO 8601). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Invoice Payments

**Slug:** `HARVEST_LIST_INVOICE_PAYMENTS`

List all payments recorded for a specific invoice. Returns payment details including amounts, dates, payment gateway information, and who recorded each payment. Supports filtering by updated_since date and pagination. Returns an empty list if the invoice has no payments.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number for pagination. Note: This parameter is deprecated by Harvest in favor of cursor-based pagination. Defaults to 1. |
| `per_page` | integer | No | Number of payment records to return per page. Must be between 1 and 2000. Defaults to 2000 (maximum). |
| `invoice_id` | integer | Yes | The ID of the invoice whose payments you want to list. Required. |
| `updated_since` | string | No | Filter to only payments updated after this date/time. ISO 8601 format (e.g., '2021-03-01T00:00:00Z'). Optional. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Invoices

**Slug:** `HARVEST_LIST_INVOICES`

Tool to list invoices. Use when you need to retrieve invoices filtered by client, project, date range, or state. Example: 'List invoices for client 5735776 from 2023-01-01 to 2023-01-31.'

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number for pagination. Defaults to 1. |
| `state` | string ("draft" | "open" | "paid" | "closed") | No | Only return invoices with a state matching this value. |
| `to_date` | string | No | Only return invoices with an issue_date on or before the given date (YYYY-MM-DD). |
| `per_page` | integer | No | Number of records to return per page. 1–2000. Defaults to 100. |
| `client_id` | integer | No | Only return invoices belonging to the client with the given ID. |
| `from_date` | string | No | Only return invoices with an issue_date on or after the given date (YYYY-MM-DD). |
| `project_id` | integer | No | Only return invoices associated with the project with the given ID. |
| `updated_since` | string | No | Only return invoices that have been updated since the given date and time, in ISO 8601 format. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List projects

**Slug:** `HARVEST_LIST_PROJECTS`

Tool to list projects. Use when you need to retrieve a paginated list of projects from Harvest. Ensure a valid access token is present in metadata before calling. Results span multiple pages; check total_pages in the response and increment page to retrieve all projects. Large result sets may be returned as remote files rather than inline JSON; use structure_info to parse the response correctly.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number for pagination. Defaults to 1. |
| `client` | integer | No | Filter projects by the client ID. |
| `per_page` | integer | No | Number of records per page. Min 1, max 100. Defaults to 100. |
| `updated_since` | string | No | Only return projects updated since the given date/time (ISO 8601). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Tasks

**Slug:** `HARVEST_LIST_TASKS`

Tool to list tasks. Use when you need to retrieve a paginated list of tasks from Harvest. Ensure you have a valid access token in metadata before calling. Response includes `total_pages` to iterate all pages when task count exceeds `per_page`.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | Page number for pagination. Defaults to 1. |
| `per_page` | integer | No | The number of records to return per page. Min 1, max 100. Defaults to 100. |
| `is_active` | boolean | No | Pass true to only return active tasks and false to return archived tasks. Use `true` to obtain valid task IDs for time entry creation; passing an inactive task ID to HARVEST_CREATE_TIME_ENTRY causes a 422 error. |
| `is_default` | boolean | No | Pass true to only return default tasks. |
| `updated_since` | string | No | Only return tasks that have been updated since the given date and time, in ISO 8601 format. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Time Entries

**Slug:** `HARVEST_LIST_TIME_ENTRIES`

Tool to retrieve a list of time entries. Use when you need to fetch tracked hours with filters or date ranges for reporting or invoicing. Example: "List time entries for project 123 between 2023-01-01 and 2023-01-31".

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `to` | string | No | Only return time entries with a spent_date on or before this date (YYYY-MM-DD). |
| `page` | integer | No | Page number for pagination. |
| `task_id` | integer | No | Only return time entries belonging to the task with the given ID. |
| `user_id` | integer | No | Only return time entries belonging to the user with the given ID. |
| `per_page` | integer | No | Number of records to return per page (1–2000). |
| `client_id` | integer | No | Only return time entries belonging to the client with the given ID. |
| `from_date` | string | No | Only return time entries with a spent_date on or after this date (YYYY-MM-DD). |
| `is_billed` | boolean | No | Pass true to return invoiced entries, false for unbilled entries. |
| `is_running` | boolean | No | Pass true to return running timers, false for stopped entries. |
| `project_id` | integer | No | Only return time entries belonging to the project with the given ID. |
| `updated_since` | string | No | Only return time entries updated since this date and time (ISO 8601). |
| `external_reference_id` | string | No | Only return time entries with the given external reference ID. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Users

**Slug:** `HARVEST_LIST_USERS`

Tool to list users. Use when you need to retrieve a paginated list of users from Harvest.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | DEPRECATED. Page number for pagination. Defaults to 1. |
| `per_page` | integer | No | The number of records to return per page. Min 1, max 2000. Defaults to 2000. |
| `is_active` | boolean | No | Pass true to only return active users and false to return inactive users. |
| `updated_since` | string | No | Only return users that have been updated since the given date and time, in ISO 8601 format. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Client

**Slug:** `HARVEST_UPDATE_CLIENT`

Tool to update an existing client. Use after retrieving client details to modify its properties. Supports partial updates; omit fields to leave them unchanged.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | A textual description of the client. |
| `address` | string | No | The client's physical address. May include new line characters. |
| `currency` | string | No | ISO currency code for the client. |
| `client_id` | integer | Yes | Unique ID of the client to update |
| `is_active` | boolean | No | Whether the client is active or archived. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Client Contact

**Slug:** `HARVEST_UPDATE_CLIENT_CONTACT`

Tool to update a client contact. Use when you have a contact_id and need to modify its details.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `email` | string | No | Contact's email address. |
| `title` | string | No | Title of the contact (e.g., 'Director of Ops'). |
| `last_name` | string | No | Last name of the contact. |
| `contact_id` | integer | Yes | ID of the contact to update. |
| `first_name` | string | No | First name of the contact. |
| `phone_mobile` | string | No | Contact's mobile phone number. |
| `phone_office` | string | No | Contact's office phone number. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Company Info

**Slug:** `HARVEST_UPDATE_COMPANY_INFO`

Updates company time tracking settings in Harvest. This endpoint allows modification of two company settings: 1. wants_timestamp_timers - Controls whether time is tracked via duration or start/end times 2. weekly_capacity - Sets the expected working hours per week (in seconds) Returns the complete updated company object. Requires admin permissions. Note: Other company settings (name, timezone, currency, date/time formats, color scheme, etc.) cannot be modified via the API and must be changed through the Harvest web interface.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `weekly_capacity` | integer | No | The weekly capacity in seconds. This represents the expected number of working hours per week. For example, 144000 seconds = 40 hours (40 * 60 * 60). Must be non-negative. |
| `wants_timestamp_timers` | boolean | No | Whether time is tracked via duration (false) or start and end times (true). When true, users must enter start/end times for time entries. When false, users can enter just the duration. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Estimate

**Slug:** `HARVEST_UPDATE_ESTIMATE`

Tool to update an existing estimate. Use when you need to modify specific fields of an estimate; omit parameters to leave other fields unchanged.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tax` | number | No | First tax percentage applied to the subtotal, e.g., 10.0 for 10%. |
| `tax2` | number | No | Second tax percentage applied to the subtotal, e.g., 5.0 for 5%. |
| `notes` | string | No | Additional notes for the estimate. |
| `number` | string | No | Custom estimate number. Auto-generated if omitted. |
| `subject` | string | No | Estimate subject line. |
| `currency` | string | No | Currency code for the estimate; defaults to client's currency. |
| `discount` | number | No | Discount percentage subtracted from the subtotal, e.g., 15.0 for 15%. |
| `client_id` | integer | No | The ID of the client this estimate belongs to. |
| `issue_date` | string | No | Date the estimate was issued (YYYY-MM-DD). |
| `line_items` | array | No | List of line items to update or add. Omit unchanged items. |
| `estimate_id` | integer | Yes | Unique ID of the estimate to update. |
| `purchase_order` | string | No | The purchase order number. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Estimate Item Category

**Slug:** `HARVEST_UPDATE_ESTIMATE_ITEM_CATEGORY`

Updates an existing estimate item category's name in Harvest. Estimate item categories are used to organize line items within estimates. Provide the category ID and the new name you want to set.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | The new name for the estimate item category. |
| `estimate_item_category_id` | integer | Yes | Unique ID of the estimate item category to update |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Expense

**Slug:** `HARVEST_UPDATE_EXPENSE`

Tool to update an existing expense. Use after retrieving an expense to modify project, category, date, cost, or delete a receipt; omit fields to leave unchanged.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `notes` | string | No | Notes or description for the expense. |
| `units` | string | No | Quantity of units used to calculate the expense total. |
| `billable` | boolean | No | Whether the expense is billable. |
| `expense_id` | integer | Yes | Unique ID of the expense to update |
| `project_id` | integer | No | ID of the project associated with this expense. |
| `spent_date` | string | No | Date the expense occurred (YYYY-MM-DD) |
| `total_cost` | string | No | Total amount of the expense. |
| `delete_receipt` | boolean | No | Pass true to delete the attached receipt. |
| `expense_category_id` | integer | No | ID of the expense category for this expense. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Invoice

**Slug:** `HARVEST_UPDATE_INVOICE`

Tool to update an existing invoice. Use after retrieving invoice details to modify its fields. Supports partial updates; omit fields to leave unchanged.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tax` | string | No | Tax percentage applied to the invoice. |
| `tax2` | string | No | Additional tax percentage applied. |
| `notes` | string | No | Additional notes to include on the invoice. |
| `number` | string | No | Custom invoice number. |
| `subject` | string | No | The invoice subject. |
| `currency` | string | No | Currency code (e.g., USD). |
| `discount` | string | No | Discount percentage applied to the invoice. |
| `due_date` | string | No | Date the invoice is due (YYYY-MM-DD). |
| `client_id` | integer | No | ID of the client this invoice belongs to. |
| `invoice_id` | integer | Yes | Unique ID of the invoice to update. |
| `issue_date` | string | No | Date the invoice was issued (YYYY-MM-DD). |
| `line_items` | array | No | Array of line item objects to update or add. |
| `estimate_id` | integer | No | ID of the estimate associated with this invoice. |
| `retainer_id` | integer | No | ID of the retainer associated with this invoice. |
| `payment_term` | string ("upon receipt" | "net 15" | "net 30" | "net 45" | "net 60") | No | Payment timeframe: 'upon receipt', 'net 15', 'net 30', 'net 45', or 'net 60'. |
| `purchase_order` | string | No | The purchase order number. |
| `payment_options` | array | No | Payment options available: 'ach', 'credit_card', or 'paypal'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Project

**Slug:** `HARVEST_UPDATE_PROJECT`

Tool to update an existing project. Use when you need to modify one or more fields of a project by its ID. Invoke after confirming the project ID and desired changes.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `fee` | number | No | Fixed-fee amount to invoice for fixed-fee projects |
| `code` | string | No | Project code identifier |
| `name` | string | No | Name of the project |
| `notes` | string | No | Project notes or description |
| `budget` | number | No | Time budget in hours when budgeting by hours |
| `bill_by` | string ("Project" | "Tasks" | "People" | "none") | No | Billing method: 'Project', 'Tasks', 'People', or 'none' |
| `ends_on` | string | No | Project end date (YYYY-MM-DD) |
| `budget_by` | string ("project" | "project_cost" | "task" | "task_fees" | "person" | "none") | No | Budgeting method: 'project' (hours per project), 'project_cost' (total fees), 'task' (hours per task), 'task_fees' (fees per task), 'person' (hours per person), or 'none' |
| `client_id` | integer | No | ID of the client to associate this project with |
| `is_active` | boolean | No | Whether the project is active (true) or archived (false) |
| `starts_on` | string | No | Project start date (YYYY-MM-DD) |
| `project_id` | integer | Yes | Unique ID of the project to update. This must be an existing project ID obtained from Harvest, typically by using LIST_PROJECTS first. Do not use arbitrary numbers or placeholders. |
| `cost_budget` | number | No | Monetary budget when budgeting by money |
| `hourly_rate` | number | No | Hourly rate when billed by project hourly rate |
| `is_billable` | boolean | No | Whether time on this project is billable |
| `is_fixed_fee` | boolean | No | Whether this is a fixed-fee project |
| `budget_is_monthly` | boolean | No | If true, reset budget each month; defaults to false |
| `show_budget_to_all` | boolean | No | Show budget to all employees; defaults to false |
| `notify_when_over_budget` | boolean | No | Email managers when over budget; defaults to false |
| `cost_budget_include_expenses` | boolean | No | Include tracked expenses in 'project_cost' budgets; defaults to false |
| `over_budget_notification_percentage` | number | No | Threshold percent to trigger over-budget alerts (e.g., 80.0) |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Task

**Slug:** `HARVEST_UPDATE_TASK`

Tool to update an existing task. Use after retrieving task details to modify its attributes such as name, billing defaults, or status. Supports partial updates; omit fields to leave them unchanged.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | New name for the task. |
| `task_id` | integer | Yes | Unique ID of the task to update |
| `is_active` | boolean | No | Whether this task is active (true) or archived (false). |
| `is_default` | boolean | No | Whether this task should be automatically added to future projects. |
| `billable_by_default` | boolean | No | Whether new projects with this task are billable by default. |
| `default_hourly_rate` | number | No | Default hourly rate when this task is added to a project. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Time Entry

**Slug:** `HARVEST_UPDATE_TIME_ENTRY`

Tool to update an existing time entry. Use after retrieving the entry to adjust hours, notes, project, or task details. Supports partial updates; omit fields to leave unchanged.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `hours` | string | No | The updated number of hours for the time entry. |
| `notes` | string | No | The updated notes for the time entry. |
| `task_id` | integer | No | ID of the task associated with the time entry. |
| `ended_time` | string | No | The time the entry ended (e.g., '5:00pm'); if omitted, timer remains running |
| `project_id` | integer | No | ID of the project associated with the time entry. |
| `spent_date` | string | No | The date the time entry was spent (YYYY-MM-DD) |
| `started_time` | string | No | The time the entry started (e.g., '9:00am'); omit ended_time for running timer |
| `time_entry_id` | integer | Yes | Unique ID of the time entry to update |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update User

**Slug:** `HARVEST_UPDATE_USER`

Tool to update an existing user. Use when you need to modify a user's profile or settings after confirming the user ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `email` | string | No | The email address of the user. Cannot be updated if the user is inactive. |
| `roles` | array | No | Descriptive names of the business roles assigned to this person. Used for filtering reports, with no impact on permissions. |
| `user_id` | integer | Yes | Unique ID of the user to update |
| `timezone` | string | No | The user’s timezone. Defaults to the company’s timezone. See supported time zones in the Harvest docs. |
| `is_active` | boolean | No | Whether the user is active or archived. |
| `last_name` | string | No | The last name of the user. Cannot be updated if the user is inactive. |
| `first_name` | string | No | The first name of the user. Cannot be updated if the user is inactive. |
| `access_roles` | array | No | Access roles that determine the user’s permissions in Harvest. Possible values: administrator, manager, member, project_creator, billable_rates_manager, managed_projects_invoice_drafter, managed_projects_invoice_manager, client_and_task_manager, time_and_expenses_manager, estimates_manager. |
| `is_contractor` | boolean | No | Whether the user is a contractor or an employee. Defaults to false. |
| `weekly_capacity` | integer | No | The number of hours per week this person is available to work, in seconds. Must be non-negative. |
| `has_access_to_all_future_projects` | boolean | No | Whether the user should be automatically added to future projects. Defaults to false. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |
