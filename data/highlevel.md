# Highlevel

HighLevel provides a marketing automation and CRM platform for agencies, featuring funnels, appointment scheduling, two-way texting, and other tools to drive client success

- **Category:** marketing automation
- **Auth:** OAUTH2
- **Composio-managed OAuth available?** No
- **Tools:** 218
- **Triggers:** 0
- **Slug:** `HIGHLEVEL`
- **Version:** 20260826_00

## Tools

### Add An Inbound Message

**Slug:** `HIGHLEVEL_ADD_AN_INBOUND_MESSAGE`

Adds an inbound message to a conversation in GoHighLevel. Use this action to record a message received from a contact (e.g. SMS, Email, WhatsApp) into an existing conversation. The conversationId, contactId, conversationProviderId, and message type are required. Required headers (handled automatically): Version: 2021-04-15

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `call` | object | No | Phone call dialer and receiver information. |
| `date` | string | No | Date of the inbound message (ISO 8601 date-time). |
| `html` | string | No | HTML Body of Email. |
| `type` | string ("SMS" | "RCS" | "Email" | "WhatsApp" | "GMB" | "IG" | "FB" | "Custom") | Yes | Message Type. |
| `altId` | string | No | External mail provider's message id. |
| `emailCc` | array | No | List of email address to CC. |
| `emailTo` | string | No | Recipient email address. This field is associated with the contact record and cannot be dynamically changed. |
| `message` | string | No | Message Body. |
| `subject` | string | No | Subject of the Email. |
| `emailBcc` | array | No | List of email address to BCC. |
| `contactId` | string | No | Contact Id. Either conversationId or contactId is required. |
| `direction` | string ("inbound") | No | Message direction for the inbound endpoint. |
| `emailFrom` | string | No | Email address to send from. This field is associated with the contact record and cannot be dynamically changed. |
| `attachments` | array | No | Array of attachments. |
| `conversationId` | string | No | Conversation Id. Either conversationId or contactId is required. |
| `emailMessageId` | string | No | Send the email message id for which this email should be threaded. This is for replying to a specific email. |
| `conversationProviderId` | string | No | Conversation Provider Id. Required only for custom/additional conversation providers. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Add Contact Tags

**Slug:** `HIGHLEVEL_ADD_CONTACT_TAGS`

Adds one or more tags to an existing contact in a GoHighLevel sub-account. Use this action to label or segment a contact by attaching tags to it. The contactId identifies the contact, and tags is the list of tags to add. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tags` | array | Yes | The tags to add to the contact. |
| `contactId` | string | Yes | The unique identifier of the contact to add tags to. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Add Followers Contact

**Slug:** `HIGHLEVEL_ADD_FOLLOWERS_CONTACT`

Adds one or more followers to an existing contact in a GoHighLevel sub-account. The contactId identifies the contact, and followers is the list of user IDs to add as followers. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `contactId` | string | Yes | The unique identifier of the contact to add followers to. |
| `followers` | array | Yes | The list of user IDs to add as followers of the contact. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Add Followers Opportunity

**Slug:** `HIGHLEVEL_ADD_FOLLOWERS_OPPORTUNITY`

Adds one or more followers to an existing opportunity in a GoHighLevel sub-account. The id identifies the opportunity, and followers is the list of user IDs to add as followers. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique identifier of the opportunity to add followers to. |
| `followers` | array | Yes | The list of user IDs to add as followers of the opportunity. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Add Remove Contact From Business

**Slug:** `HIGHLEVEL_ADD_REMOVE_CONTACT_FROM_BUSINESS`

Adds or removes a set of contacts from a business in a GoHighLevel sub-account in bulk. Provide the locationId, the list of contact ids, and the businessId to associate them with; pass a null businessId to remove the contacts from their business. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ids` | array | Yes | The unique identifiers of the contacts to add to or remove from the business (each up to 50 characters). |
| `businessId` | string | No | The unique identifier of the business to associate the contacts with. Pass null to remove the contacts from their business. |
| `locationId` | string | Yes | The unique identifier of the sub-account (location) the contacts belong to. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Bulk Edit

**Slug:** `HIGHLEVEL_BULK_EDIT`

Bulk updates multiple products in a GoHighLevel sub-account. Use this action to edit several products at once by providing an array of product objects, each identified by its '_id'. The altId and altType identify the location the products belong to. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `altId` | string | Yes | Location Id or Agency Id. |
| `altType` | string ("location") | Yes | The type of the altId. Currently only 'location' is supported. |
| `products` | array | Yes | Array of products to update. Each product object requires an '_id' and may include fields such as name, description, image, prices, collectionIds, seo, slug, taxes, and medias. Note: the total count includes all prices within each product. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Bulk Update

**Slug:** `HIGHLEVEL_BULK_UPDATE`

Performs a bulk update operation on products within a GoHighLevel sub-account. Supports updating price, availability, product collections, currency, or bulk deleting products for the specified product IDs or all products matching filters when selectAll is true. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `type` | string ("bulk-update-price" | "bulk-update-availability" | "bulk-update-product-collection" | "bulk-delete-products" | "bulk-update-currency") | Yes | Type of bulk update operation to perform. |
| `altId` | string | Yes | Location Id or Agency Id. |
| `price` | object | No | Price update configuration (e.g. type, value, roundToWhole). |
| `altType` | string ("location") | Yes | The type of the alt id. Currently only 'location' is supported. |
| `filters` | object | No | Filters to apply when selectAll is true (e.g. collectionIds, productType, availableInStore, search). |
| `currency` | string | No | Currency code to set on the products. |
| `selectAll` | boolean | No | When true, applies the bulk update to all products matching filters instead of requiring explicit productIds. |
| `productIds` | array | No | Array of product IDs to apply the bulk update to. Omit when selectAll is true and filters should determine the target products. |
| `availability` | boolean | No | New availability status to set on the products. |
| `collectionIds` | array | No | Array of collection IDs to associate with the products. |
| `compareAtPrice` | object | No | Compare at price update configuration (e.g. type, value, roundToWhole). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Cancel Scheduled Message

**Slug:** `HIGHLEVEL_CANCEL_SCHEDULED_MESSAGE`

Cancels a previously scheduled message in a GoHighLevel sub-account, identified by its messageId. This operation is destructive and prevents the scheduled message from being sent. Required headers (handled automatically): Version: 2021-04-15

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `messageId` | string | Yes | The unique identifier of the scheduled message to cancel. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Check Account Funds

**Slug:** `HIGHLEVEL_CHECK_ACCOUNT_FUNDS`

Checks if the GoHighLevel account has sufficient funds to cover marketplace charges. Use this action when you need to verify whether an account has adequate balance before initiating marketplace purchases, billing operations, or any transaction that requires funds to be available. This is a read-only operation that simply queries the current fund status. Required headers (handled automatically): Version: 2021-07-28

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Check Url Slug Exists

**Slug:** `HIGHLEVEL_CHECK_URL_SLUG_EXISTS`

Checks whether a given URL slug already exists for blog posts in a GoHighLevel sub-account. Use this action to validate slug uniqueness before creating or updating a blog post. Optionally exclude a specific post from the check by providing its post ID. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `postId` | string | No | The blog post identifier to exclude from the slug existence check. |
| `urlSlug` | string | Yes | The URL slug to check for existence. |
| `locationId` | string | Yes | The unique identifier of the sub-account (location). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Complete File Upload

**Slug:** `HIGHLEVEL_COMPLETE_FILE_UPLOAD`

Completes a previously initiated file upload for a GoHighLevel conversation message. Use this action after requesting an upload, passing the uploadId and filePath from that response to finalize the file and obtain its public URL. Required headers (handled automatically): Version: 2021-04-15

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `filePath` | string | Yes | File path from request response. |
| `filename` | string | Yes | Original filename required by the completion endpoint and used as the uploadedFiles response key. |
| `uploadId` | string | Yes | Upload ID from request response. |
| `locationId` | string | Yes | Location ID. |
| `conversationId` | string | Yes | Conversation ID. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Bulk Update Contact Tags

**Slug:** `HIGHLEVEL_CONTACTS_CREATE_ASSOCIATION`

Performs a bulk tag update on a list of GoHighLevel contacts. Use this action to add or remove tags across many contacts at once, with the operation type supplied as a path parameter. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tags` | array | Yes | List of tags to be added or removed. |
| `type` | string | Yes | The type of bulk tag operation to perform on the contacts (e.g. 'add' or 'remove'). |
| `contacts` | array | Yes | List of contact ids to be processed. |
| `locationId` | string | Yes | Location id from where the bulk request is executed. |
| `removeAllTags` | boolean | No | Option to implement remove all tags. If true, all tags will be removed from the contacts. Can only be used with remove type. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Appointment

**Slug:** `HIGHLEVEL_CREATE_APPOINTMENT`

Creates a new appointment (calendar event) in a GoHighLevel sub-account. Use this action to book a contact onto a calendar with a start time, optional end time, meeting location, and status. The calendarId, locationId, contactId, and startTime are required. Required headers (handled automatically): Version: 2021-04-15

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `rrule` | string | No | RRULE as per the iCalendar (RFC 5545) specification for recurring events. The rrule only be applied if ignoreFreeSlotValidation is true. |
| `title` | string | No | The title of the appointment. |
| `address` | string | No | The address of the appointment. |
| `endTime` | string | No | ISO 8601 end time of the appointment. |
| `toNotify` | boolean | No | If set to false, the automations will not run. |
| `contactId` | string | Yes | The unique identifier of the contact the appointment is booked for. |
| `startTime` | string | Yes | ISO 8601 start time |
| `calendarId` | string | Yes | The unique identifier of the calendar the appointment is booked on. |
| `locationId` | string | Yes | The unique identifier of the sub-account (location) the appointment belongs to. |
| `description` | string | No | The description of the appointment. |
| `assignedUserId` | string | No | The unique identifier of the user the appointment is assigned to. |
| `ignoreDateRange` | boolean | No | If set to true, the minimum scheduling notice and date range would be ignored. |
| `appointmentStatus` | string ("new" | "confirmed" | "cancelled" | "showed" | "noshow" | "invalid") | No | Supported appointment status values. |
| `meetingLocationId` | string | No | The unique identifier for the meeting location. This value can be found in calendar.locationConfigurations or calendar.teamMembers[].locationConfigurations. |
| `meetingLocationType` | string ("custom" | "zoom" | "gmeet" | "phone" | "address" | "ms_teams") | No | Supported meeting location types for an appointment. |
| `overrideLocationConfig` | boolean | No | Flag to override location config. false if only meetingLocationId is provided, true if only meetingLocationType is provided. |
| `ignoreFreeSlotValidation` | boolean | No | If true the time slot validation would be avoided for any appointment creation (even the ignoreDateRange). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Appointment Note

**Slug:** `HIGHLEVEL_CREATE_APPOINTMENT_NOTE`

Creates a note for an existing appointment in a GoHighLevel sub-account. Use this action to attach a free-form note to a specific appointment identified by appointmentId. Required headers (handled automatically): Version: 2021-04-15

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `body` | string | Yes | Note body. Maximum length is 5000 characters. |
| `userId` | string | No | The unique identifier of the user creating the note. |
| `appointmentId` | string | Yes | The unique identifier of the appointment to attach the note to. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Association

**Slug:** `HIGHLEVEL_CREATE_ASSOCIATION`

Creates a new association between two object types in a GoHighLevel sub-account. Use this action to define a relationship (such as linking a custom object to a contact) by specifying the labels and keys for both objects. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `key` | string | Yes | Association's unique key. |
| `locationId` | string | Yes | The unique identifier of the sub-account (location) the association belongs to. |
| `firstObjectKey` | string | Yes | First object's key. |
| `secondObjectKey` | string | Yes | Second object's key. |
| `firstObjectLabel` | string | Yes | First object's association label (e.g. custom_objects.children). |
| `secondObjectLabel` | string | Yes | Second object's association label (e.g. contact). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Block Slot

**Slug:** `HIGHLEVEL_CREATE_BLOCK_SLOT`

Creates a block slot on a GoHighLevel calendar to reserve time so it is unavailable for booking. Either calendarId or assignedUserId can be set, not both. Required headers (handled automatically): Version: 2021-04-15

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `title` | string | No | Title |
| `endTime` | string | No | End Time |
| `startTime` | string | No | Start Time |
| `calendarId` | string | No | Either calendarId or assignedUserId can be set, not both. |
| `locationId` | string | Yes | Location Id |
| `assignedUserId` | string | No | Either calendarId or assignedUserId can be set, not both. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Blog Post

**Slug:** `HIGHLEVEL_CREATE_BLOG_POST`

Creates a new blog post and adds it to an existing blog's post collection in a GoHighLevel sub-account. Use this action to publish or draft a blog post with its title, content, image, categories, author, and URL slug. The locationId and blogId identify the sub-account and the blog whose post set is modified. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tags` | array | No | Array of tags associated with the blog post. |
| `title` | string | Yes | The title of the blog post. |
| `author` | string | Yes | The author id of the blog post, which you can get from the author get api call. |
| `blogId` | string | Yes | The unique identifier of the blog. You can find the blog id from the blog site dashboard link. |
| `status` | string ("DRAFT" | "PUBLISHED" | "SCHEDULED" | "ARCHIVED") | Yes | The publication status of the blog post. |
| `rawHTML` | string | Yes | The raw HTML content of the blog post. |
| `urlSlug` | string | Yes | The URL slug for the blog post. |
| `imageUrl` | string | Yes | URL of the image associated with the blog post. |
| `categories` | array | Yes | Array of category ids associated with the blog post, which you can get from the category get api call. |
| `locationId` | string | Yes | The unique identifier of the sub-account (location) the blog post belongs to. |
| `description` | string | Yes | The description of the blog post. |
| `publishedAt` | string | Yes | ISO 8601 publish datetime |
| `imageAltText` | string | Yes | Alternative text for the blog post image. |
| `canonicalLink` | string | No | The canonical link of the blog post. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Brand Voice

**Slug:** `HIGHLEVEL_CREATE_BRAND_BOARDS_VOICES`

Creates a new brand voice for the specified location in GoHighLevel. Use this action when you need to define a brand voice with a name, tone, target audience, and customer pain points to represent the brand's communication style. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | The name of the brand voice. |
| `type` | string ("manual") | Yes | The type of brand voice. Currently only 'manual' is supported. |
| `answers` | object | Yes | Required answers when creating a manual brand voice. Contains brand details like name, tone, target audience and customer pain points. |
| `locationId` | string | Yes | The unique identifier of the location where the brand voice will be created. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Calendar

**Slug:** `HIGHLEVEL_CREATE_CALENDAR`

Creates a new calendar in a GoHighLevel sub-account. Use this action to set up a booking calendar (round robin, event, class, collective, service, or personal) with its scheduling rules, availability, and team members. The locationId and name are required. Required headers (handled automatically): Version: 2021-04-15

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | The name of the calendar. |
| `slug` | string | No | The slug for the calendar. |
| `notes` | string | No | Notes for the calendar. |
| `formId` | string | No | The form id associated with the calendar. |
| `groupId` | string | No | Group Id. |
| `pixelId` | string | No | The pixel id associated with the calendar. |
| `isActive` | boolean | No | Should the created calendar be active or draft. |
| `eventType` | string ("RoundRobin_OptimizeForAvailability" | "RoundRobin_OptimizeForEqualDistribution") | No | The event distribution type for the calendar. |
| `guestType` | string ("count_only" | "collect_detail") | No | The guest type for the calendar. |
| `openHours` | array | No | This is only to set the standard availability. For custom availability, use the availabilities property. |
| `preBuffer` | number | No | Pre-Buffer is additional time that can be added before an appointment, allowing for extra time to get ready. |
| `recurring` | object | No | Recurring appointment configuration. |
| `alertEmail` | string | No | The email address to send alerts to. |
| `eventColor` | string | No | The color used for events on the calendar. |
| `eventTitle` | string | No | The title used for events on the calendar. |
| `locationId` | string | Yes | The unique identifier of the sub-account (location) the calendar belongs to. |
| `slotBuffer` | number | No | Slot-Buffer is additional time that can be added after an appointment, allowing for extra time to wrap up. |
| `widgetSlug` | string | No | The widget slug for the calendar. |
| `widgetType` | string ("default" | "classic") | No | Calendar widget type. Choose 'default' for 'neo' and 'classic' for 'classic' layout. |
| `autoConfirm` | boolean | No | Whether to automatically confirm bookings. |
| `description` | string | No | A description of the calendar. |
| `teamMembers` | array | No | Team members are required for calendars of type: Round Robin, Collective, Class, Service. Personal calendar must have exactly one team member. |
| `calendarType` | string ("round_robin" | "event" | "class_booking" | "collective" | "service_booking" | "personal") | No | The type of the calendar. |
| `consentLabel` | string | No | The consent label for the calendar. |
| `slotDuration` | number | No | This controls the duration of the meeting. |
| `slotInterval` | number | No | Slot interval reflects the amount of time between booking slots that will be shown in the calendar. |
| `notifications` | array | No | Deprecated. Please use 'Calendar Notifications APIs' instead. |
| `preBufferUnit` | string ("mins" | "hours") | No | Unit for pre-buffer. |
| `stickyContact` | boolean | No | Whether to use sticky contact. |
| `availabilities` | array | No | This is only to set the custom availability. For standard availability, use the openHours property. |
| `formSubmitType` | string ("RedirectURL" | "ThankYouMessage") | No | The action to take after form submission. |
| `lookBusyConfig` | object | No | Look Busy Configuration. |
| `slotBufferUnit` | string ("mins" | "hours") | No | Unit for slot buffer. |
| `allowBookingFor` | number | No | Minimum number of days/weeks/months for which to allow booking events. |
| `allowReschedule` | boolean | No | Whether to allow rescheduling of bookings. |
| `enableRecurring` | boolean | No | Enable recurring appointments for the calendars. Please note that only one member should be added in the calendar to enable this. |
| `meetingLocation` | string | No | Deprecated. Use 'locationConfigurations.location' or 'teamMembers[].locationConfigurations.location' instead. |
| `appoinmentPerDay` | number | No | Number of appointments that can be booked for a given day. |
| `availabilityType` | integer | No | Determines which availability type to consider: 1 = only custom availabilities, 0 = only open hours, null = both. |
| `slotDurationUnit` | string ("mins" | "hours") | No | Unit for slot duration. |
| `slotIntervalUnit` | string ("mins" | "hours") | No | Unit for slot interval. |
| `allowBookingAfter` | number | No | Minimum scheduling notice for events. |
| `allowCancellation` | boolean | No | Whether to allow cancellation of bookings. |
| `appoinmentPerSlot` | number | No | Maximum bookings per slot (per user). Maximum seats per slot in case of Class Booking Calendar. |
| `isLivePaymentMode` | boolean | No | Whether payments are in live mode. |
| `calendarCoverImage` | string | No | The cover image URL for the calendar. |
| `allowBookingForUnit` | string ("days" | "weeks" | "months") | No | Unit for controlling the duration for which booking would be allowed for. |
| `allowBookingAfterUnit` | string ("hours" | "days" | "weeks" | "months") | No | Unit for minimum scheduling notice. |
| `formSubmitRedirectURL` | string | No | The URL to redirect to after form submission. |
| `googleInvitationEmails` | boolean | No | Whether to send Google invitation emails. |
| `locationConfigurations` | array | No | Meeting location configuration for event calendar. |
| `formSubmitThanksMessage` | string | No | The thank-you message shown after form submission. |
| `shouldAssignContactToTeamMember` | boolean | No | Whether to assign the contact to the team member. |
| `shouldSendAlertEmailsToAssignedMember` | boolean | No | Whether to send alert emails to the assigned member. |
| `shouldSkipAssigningContactForExisting` | boolean | No | Whether to skip assigning contact for existing contacts. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Calendar Group

**Slug:** `HIGHLEVEL_CREATE_CALENDAR_GROUP`

Creates a new calendar group in a GoHighLevel sub-account. Calendar groups organize related calendars under a shared name and slug. The locationId, name, description, and slug are required. Required headers (handled automatically): Version: 2021-04-15

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | The name of the calendar group. |
| `slug` | string | Yes | The URL-friendly slug used to identify the calendar group. |
| `isActive` | boolean | No | Whether the calendar group is active. |
| `locationId` | string | Yes | The unique identifier of the sub-account (location) the calendar group belongs to. |
| `description` | string | Yes | A description of the calendar group. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Calendars Service Location

**Slug:** `HIGHLEVEL_CREATE_CALENDARS_SERVICE_LOCATION`

Creates a new service location for the calendar services. Use this action when you need to add a new service location within a location in GoHighLevel. The service location will be associated with the location identified by the location_id parameter and will be accessible via the calendars API. Required headers (handled automatically): Content-Type: application/json, Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | The name of the service location. |
| `slug` | string | Yes | A URL-friendly slug for the service location. Must be unique within the location. |
| `locationId` | string | Yes | The unique identifier of the location where the service location will be created. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Contact

**Slug:** `HIGHLEVEL_CREATE_CONTACT`

Creates a new contact in a GoHighLevel sub-account. Use this action to add a person (lead or customer) with their name, contact details, tags, and custom fields. The locationId is required and identifies the sub-account the contact belongs to. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `dnd` | boolean | No | When true, enables Do Not Disturb across all channels for this contact. |
| `city` | string | No | The contact's city. |
| `name` | string | No | The contact's full name. |
| `tags` | array | No | Tags to associate with the contact. |
| `email` | string | No | The contact's email address. |
| `phone` | string | No | The contact's phone number in E.164 format. |
| `state` | string | No | The contact's state or region. |
| `gender` | string | No | The contact's gender. |
| `source` | string | No | The source attributed to the contact. |
| `country` | string | No | The contact's country as a two-letter ISO code. |
| `website` | string | No | The contact's website URL. |
| `address1` | string | No | The contact's street address. |
| `lastName` | string | No | The contact's last name. |
| `timezone` | string | No | The contact's timezone. |
| `firstName` | string | No | The contact's first name. |
| `assignedTo` | string | No | The unique identifier of the user the contact is assigned to. |
| `locationId` | string | Yes | The unique identifier of the sub-account (location) the contact belongs to. |
| `postalCode` | string | No | The contact's postal/ZIP code. |
| `companyName` | string | No | The contact's company name. |
| `dateOfBirth` | string | No | The contact's date of birth. |
| `dndSettings` | object | No | Per-channel Do Not Disturb settings (keys: Call, Email, SMS, WhatsApp, GMB, FB), each an object with status/message/code. |
| `customFields` | array | No | Custom field values. Each item is an object with an 'id' (or 'key') and a 'field_value'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Contact Note

**Slug:** `HIGHLEVEL_CREATE_CONTACT_NOTE`

Creates a new note for a specific contact in GoHighLevel. Use this action to attach a text note to a contact, optionally attributing it to a user and setting a title, color, or pinned state. The contactId identifies the contact the note belongs to. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `body` | string | Yes | The text content of the note. |
| `color` | string | No | The color associated with the note. |
| `title` | string | No | The title of the note. |
| `pinned` | boolean | No | When true, the note is pinned to the contact. |
| `userId` | string | No | The user the note is attributed to. |
| `contactId` | string | Yes | The unique identifier of the contact to add the note to. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Contact Task

**Slug:** `HIGHLEVEL_CREATE_CONTACT_TASK`

Creates a new task for a specific contact in GoHighLevel. Use this action to add a task (such as a follow-up or reminder) tied to a contact, with a title, due date, completion status, optional body text, and an optional assignee. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `body` | string | No | The description or body text of the task. |
| `title` | string | Yes | The title/subject of the task. |
| `dueDate` | string | Yes | ISO 8601 due date. |
| `completed` | boolean | Yes | Indicates whether the task is marked as completed. |
| `contactId` | string | Yes | The unique identifier of the contact to create the task for. |
| `assignedTo` | string | No | The unique identifier of the user assigned to the task. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Conversation

**Slug:** `HIGHLEVEL_CREATE_CONVERSATION`

Creates a new conversation in a GoHighLevel sub-account between the sub-account and a contact. Use this action to start a conversation thread for a given contact. Both the locationId and contactId are required. Required headers (handled automatically): Version: 2021-04-15

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `contactId` | string | Yes | The unique identifier of the contact the conversation is with. |
| `locationId` | string | Yes | The unique identifier of the sub-account (location) the conversation belongs to. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Custom Field

**Slug:** `HIGHLEVEL_CREATE_CUSTOM_FIELD`

Creates a new custom field in a GoHighLevel sub-account (location). Custom fields let you capture additional structured data on records of a custom or standard object. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | Field name |
| `options` | array | No | Options for the field (Optional, valid only for SINGLE_OPTIONS, MULTIPLE_OPTIONS, RADIO, CHECKBOX, TEXTBOX_LIST type) |
| `dataType` | string ("TEXT" | "LARGE_TEXT" | "NUMERICAL" | "PHONE" | "MONETORY" | "CHECKBOX" | "SINGLE_OPTIONS" | "MULTIPLE_OPTIONS" | "DATE" | "TEXTBOX_LIST" | "FILE_UPLOAD" | "RADIO" | "EMAIL") | Yes | Type of field that you are trying to create |
| `fieldKey` | string | Yes | Field key. For Custom Object it's formatted as "custom_object.{objectKey}.{fieldKey}". "custom_object" is a fixed prefix, "{objectKey}" is your custom object's identifier, and "{fieldKey}" is the unique field name within that object. Example: "custom_object.pet.name" for a "name" field in a "pet" custom object. |
| `parentId` | string | Yes | ID of the parent folder |
| `objectKey` | string | Yes | The key for your custom object. This key uniquely identifies the custom object. Example: "custom_object.pet" for a custom object related to pets. |
| `locationId` | string | Yes | Location Id |
| `description` | string | No | Description of the field |
| `placeholder` | string | No | Placeholder text for the field |
| `showInForms` | boolean | Yes | Whether the field should be shown in forms |
| `maxFileLimit` | number | No | Maximum file limit for uploads. Applicable only for fields with a data type of FILE_UPLOAD. |
| `acceptedFormats` | string | No | Allowed file formats for uploads. Options include: .pdf, .docx, .doc, .jpg, .jpeg, .png, .gif, .csv, .xlsx, .xls, all |
| `allowCustomOption` | boolean | No | Determines if users can add a custom option value different from the predefined options in records for RADIO type fields. A custom value added in one record does not automatically become an option and will not appear as an option for other records. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Custom Field Folder

**Slug:** `HIGHLEVEL_CREATE_CUSTOM_FIELD_FOLDER`

Creates a new custom field folder for a custom object in a GoHighLevel sub-account. Use this action to group custom fields under a folder for the given objectKey and location. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Field name |
| `objectKey` | string | Yes | The key for your custom object. This key uniquely identifies the custom object. Example: "custom_object.pet" for a custom object related to pets. |
| `locationId` | string | Yes | Location Id |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Custom Object Schema

**Slug:** `HIGHLEVEL_CREATE_CUSTOM_OBJECT_SCHEMA`

Creates a new custom object schema in a GoHighLevel sub-account. Use this action to define a custom object with its display labels, internal key, primary display property, and the location it belongs to. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `key` | string | Yes | Key that would be used to refer the Custom Object internally (lowercase + underscore_separated). 'custom_objects.' would be added as prefix by default. |
| `labels` | object | Yes | This is what your custom object will be called. These labels will be used to display your custom object on the UI. |
| `locationId` | string | Yes | Location Id. |
| `description` | string | No | The custom object's description. |
| `primaryDisplayPropertyDetails` | object | Yes | Primary property which will be displayed on the record page. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Custom Value

**Slug:** `HIGHLEVEL_CREATE_CUSTOM_VALUE`

Creates a new custom value within a GoHighLevel sub-account (location). Custom values act as reusable placeholders that can be referenced across the account. Provide the locationId, along with the name and value for the new custom value. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | The name of the custom value to create. |
| `value` | string | Yes | The value to assign to the custom value. |
| `locationId` | string | Yes | The unique identifier of the sub-account (location) in which to create the custom value. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Email Template Folder

**Slug:** `HIGHLEVEL_CREATE_EMAILS_TEMPLATES_FOLDER`

Creates a new email template folder for the specified location. Use this action when you need to create a folder to organize email templates within a location in GoHighLevel. The folder will be associated with the location identified by the location_id parameter. This action is useful for organizing email templates into logical categories. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | The name of the template folder to create. |
| `location_id` | string | Yes | The unique identifier of the location where the template folder will be created. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Event Notification

**Slug:** `HIGHLEVEL_CREATE_EVENT_NOTIFICATION`

Creates one or more event notifications for a GoHighLevel calendar. Use this action to configure how and when participants are notified about calendar events (e.g. booking confirmations, reminders, follow-ups) across channels such as email, SMS, in-App and WhatsApp. The calendarId identifies the calendar. Required headers (handled automatically): Version: 2021-04-15

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `calendarId` | string | Yes | The unique identifier of the calendar to create notifications for. |
| `notifications` | array | Yes | The list of event notification configurations to create. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Link

**Slug:** `HIGHLEVEL_CREATE_LINK`

Creates a new trigger link in a GoHighLevel sub-account. Use this action to add a trigger link with a name and a destination URL that contacts are redirected to when they click it. The locationId is required and identifies the sub-account the link belongs to. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | The name of the trigger link. |
| `locationId` | string | Yes | The unique identifier of the sub-account (location) the trigger link belongs to. |
| `redirectTo` | string | Yes | The destination URL the trigger link redirects to. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Media Folder

**Slug:** `HIGHLEVEL_CREATE_MEDIAS_FOLDER`

Creates a new folder in the media storage for a location. Use this action when you need to organize media files by creating a new folder in the GoHighLevel media library. The folder can be created at the root level or as a nested folder under an existing parent folder.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Name of the folder to be created |
| `alt_id` | string | Yes | Location ID associated with the folder |
| `alt_type` | string | Yes | Type of entity (currently only 'location' is supported) |
| `parent_id` | string | No | ID of the parent folder (optional, use for nested folders) |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Object Record

**Slug:** `HIGHLEVEL_CREATE_OBJECT_RECORD`

Creates a new record for a custom object schema in a GoHighLevel sub-account. Use this action to add an instance of a custom object (identified by its schemaKey) with its field values supplied via properties, and optionally assign owners and followers. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `owners` | array | No | User ids who own this record. The legacy input name 'owner' is also accepted. |
| `followers` | array | No | User ids following this record. |
| `schemaKey` | string | Yes | The key of the custom object schema (e.g. 'custom_objects.pet'). |
| `locationId` | string | Yes | The sub-account (location) id. |
| `properties` | object | Yes | A map of object-local property keys to their values. For example, use {'name': 'Buddy'} for a schema whose full field key is 'custom_objects.pet.name'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Opportunity

**Slug:** `HIGHLEVEL_CREATE_OPPORTUNITY`

Creates a new opportunity in a GoHighLevel sub-account. Use this action to add an opportunity to a pipeline, associating it with a contact and a pipeline stage, and optionally setting its monetary value, assignee, and custom fields. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | The name of the opportunity. |
| `status` | string ("open" | "won" | "lost" | "abandoned") | Yes | The status of the opportunity. One of: open, won, lost, abandoned. |
| `contactId` | string | Yes | The unique identifier of the contact associated with the opportunity. |
| `assignedTo` | string | No | The unique identifier of the user the opportunity is assigned to. |
| `locationId` | string | Yes | The unique identifier of the sub-account (location) the opportunity belongs to. |
| `pipelineId` | string | Yes | The unique identifier of the pipeline. |
| `customFields` | array | No | Custom fields to add to the opportunity. |
| `monetaryValue` | number | No | The monetary value of the opportunity. |
| `pipelineStageId` | string | No | The unique identifier of the pipeline stage. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Product

**Slug:** `HIGHLEVEL_CREATE_PRODUCT`

Creates a new product with the specified details in the HighLevel system. Use this action when you need to add a new product to a location in HighLevel, such as creating a service, digital product, or physical item with associated pricing, variants, and tax configurations.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `seo` | object | No | SEO data for the product |
| `name` | string | Yes | The name of the product. |
| `slug` | string | No | The slug using which the product navigation will be handled. |
| `image` | string | No | The URL for the product image. |
| `label` | object | No | Label data for product promotion period |
| `taxes` | array | No | List of IDs of Taxes attached to the Product. If taxes are passed, isTaxesEnabled should be true. |
| `medias` | array | No | An array of medias for the product. |
| `variants` | array | No | An array of variants for the product. |
| `locationId` | string | Yes | The unique identifier for the location. |
| `description` | string | No | A brief description of the product. |
| `productType` | string ("DIGITAL" | "PHYSICAL" | "SERVICE" | "PHYSICAL/DIGITAL") | Yes | The type of the product. |
| `taxInclusive` | boolean | No | Whether the taxes should be included in the purchase price. |
| `collectionIds` | array | No | An array of category IDs for the product. |
| `isLabelEnabled` | boolean | No | Is the product label enabled. If this is true, label object cannot be empty. |
| `isTaxesEnabled` | boolean | No | Are there any taxes attached to the product. If this is true, taxes array cannot be empty. |
| `availableInStore` | boolean | No | Indicates whether the product is available in-store. |
| `statementDescriptor` | string | No | The statement descriptor for the product. |
| `automaticTaxCategoryId` | string | No | Tax category ID for Automatic taxes calculation. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Product Collection

**Slug:** `HIGHLEVEL_CREATE_PRODUCT_COLLECTION`

Creates a new product collection in a GoHighLevel sub-account. Use this action to group products under a named, navigable collection with an optional thumbnail image and SEO metadata. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `seo` | object | No | SEO metadata for the product collection. |
| `name` | string | Yes | Name of the Product Collection. |
| `slug` | string | Yes | Slug of the Product Collection which helps in navigation. |
| `altId` | string | Yes | Location Id. |
| `image` | string | No | The URL of the image that is going to be displayed as the collection Thumbnail. |
| `altType` | string ("location") | Yes | The type of alt. For now it is only LOCATION. |
| `collectionId` | string | No | Unique Identifier of the Product Collection, Mongo Id. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Product Price

**Slug:** `HIGHLEVEL_CREATE_PRODUCT_PRICE`

Creates a new price for an existing product in a GoHighLevel sub-account. Use this action to attach pricing (one-time or recurring) to a product, specifying the amount, currency, and optional inventory, trial, and billing-cycle settings. The productId identifies the product and locationId identifies the sub-account. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `sku` | string | No | The unique identifier of the SKU associated with the price. |
| `name` | string | Yes | The name of the price. |
| `type` | string ("one_time" | "recurring") | Yes | The type of the price. |
| `amount` | number | Yes | The amount of the price. ( min: 0 ) |
| `userId` | string | No | The unique identifier of the user who created the price. |
| `currency` | string | Yes | The currency of the price. |
| `setupFee` | number | No | The setup fee for the price. |
| `productId` | string | Yes | The unique identifier of the product to create the price for. |
| `locationId` | string | Yes | The unique identifier of the location associated with the price. |
| `description` | string | No | A brief description of the price. |
| `totalCycles` | integer | No | The total number of billing cycles for the price. ( min: 1 ) |
| `trialPeriod` | integer | No | The trial period duration in days (if applicable). |
| `compareAtPrice` | number | No | The compare at price for the price. |
| `trackInventory` | boolean | No | Need to track inventory stock quantity. |
| `isDigitalProduct` | boolean | No | Is the product a digital product. |
| `variantOptionIds` | array | No | An array of variant option IDs associated with the price. |
| `availableQuantity` | integer | No | Available inventory stock quantity. |
| `allowOutOfStockPurchases` | boolean | No | Continue selling when out of stock. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Recurring Task

**Slug:** `HIGHLEVEL_CREATE_RECURRING_TASK`

Creates a recurring task within a GoHighLevel sub-account (location). Provide the task title and the recurrence rules (rruleOptions) that define how often the task repeats. Optionally associate contacts and assign owners. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `title` | string | Yes | Name of the task. |
| `owners` | array | No | The user IDs the recurring task is assigned to. |
| `contactIds` | array | No | The contact IDs to associate with the recurring task. |
| `locationId` | string | Yes | The unique identifier of the sub-account (location) to create the recurring task in. |
| `description` | string | No | Description of the task. |
| `rruleOptions` | object | Yes | Recurring rules that define how the task repeats. |
| `ignoreTaskCreation` | boolean | No | Whether to skip creation of the initial task. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Relation

**Slug:** `HIGHLEVEL_CREATE_RELATION`

Creates a relation between two records under a given association in a GoHighLevel sub-account. Use this action to link two entities (e.g. a contact and a custom object record) according to a previously defined association. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `locationId` | string | Yes | Your Sub Account's ID. |
| `pipelineId` | string | No | Pipeline ID required when creating opportunity-contact relations. |
| `associationId` | string | Yes | Association's Id. |
| `firstRecordId` | string | Yes | First Record's Id. For instance, if you have an association between a contact and a custom object, and you specify the contact as the first object while creating the association, then your firstRecordId would be the contactId. |
| `secondRecordId` | string | Yes | Second Record's Id. For instance, if you have an association between a contact and a custom object, and you specify the custom object as the second entity while creating the association, then your secondRecordId would be the customObject record Id. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Schedule

**Slug:** `HIGHLEVEL_CREATE_SCHEDULE`

Creates a new calendar schedule in a GoHighLevel sub-account. A schedule defines the availability rules (intervals, days, dates) within a given timezone for a user and its associated calendars. Required headers (handled automatically): Version: 2021-04-15

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Human-readable name for the schedule. |
| `rules` | array | No | Schedule rules defining when the schedule is active. |
| `userId` | string | Yes | User ID associated with the schedule. |
| `timezone` | string | Yes | Timezone for the schedule (IANA timezone identifier). |
| `locationId` | string | Yes | Location ID where this schedule applies. |
| `calendarIds` | array | No | Calendar IDs associated with the schedule. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Tag

**Slug:** `HIGHLEVEL_CREATE_TAG`

Creates a new tag for the specified location. Use this action when you need to create a tag within a location in GoHighLevel. The tag will be associated with the location identified by the location_id parameter. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | The name of the tag to create. |
| `location_id` | string | Yes | The unique identifier of the location where the tag will be created. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Template

**Slug:** `HIGHLEVEL_CREATE_TEMPLATE`

Creates a new email template in a GoHighLevel sub-account. Use this action to add an email template (html, folder, import, builder, or blank) to a location. The locationId and type are required. importProvider is required only for import templates. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | The name of the email template. |
| `type` | string ("html" | "folder" | "import" | "builder" | "blank") | Yes | The type of email template to create. One of: html, folder, import, builder, blank. |
| `title` | string | No | The title of the email template. |
| `parentId` | string | No | The unique identifier of the parent folder the template belongs to. |
| `importURL` | string | No | The URL to import the template from. |
| `updatedBy` | string | No | The unique identifier of the user who updated the template. |
| `locationId` | string | Yes | The unique identifier of the sub-account (location) the email template belongs to. |
| `isPlainText` | boolean | No | When true, the template is treated as plain text. |
| `builderVersion` | string ("1" | "2") | No | The builder version to use for the template. One of: 1, 2 (defaults to 2). |
| `importProvider` | string ("mailchimp" | "active_campaign") | No | The external provider to import the template from. One of: mailchimp, active_campaign. Required only when type is import. |
| `templateSource` | string | No | The source of the template. |
| `templateDataUrl` | string | No | The URL pointing to the template data. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Appointment Note

**Slug:** `HIGHLEVEL_DELETE_APPOINTMENT_NOTE`

Deletes a note associated with an appointment in a GoHighLevel sub-account. Identify the note by its appointmentId and noteId. This operation is destructive and cannot be undone. Required headers (handled automatically): Version: 2021-04-15

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `noteId` | string | Yes | The unique identifier of the note to delete from the appointment. |
| `appointmentId` | string | Yes | The unique identifier of the appointment whose note should be deleted. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Association

**Slug:** `HIGHLEVEL_DELETE_ASSOCIATION`

Deletes a user-defined association by its ID. Deleting an association will also delete all the relations for that association. Use this action when you need to remove a specific association and all its associated relations from the system. This action is irreversible — once the association is deleted, it cannot be recovered.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `association_id` | string | Yes | The unique identifier of the association to delete |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Business

**Slug:** `HIGHLEVEL_DELETE_BUSINESS`

Deletes a business by its unique identifier. Use this action when you need to permanently remove a business and all its associated data from the HighLevel system. This action is irreversible — once the business is deleted, it cannot be recovered. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `business_id` | string | Yes | The unique identifier of the business to delete |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Calendar

**Slug:** `HIGHLEVEL_DELETE_CALENDAR`

Deletes a calendar from a GoHighLevel sub-account identified by its calendarId. This operation is destructive and cannot be undone. Required headers (handled automatically): Version: 2021-04-15

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `calendarId` | string | Yes | The unique identifier of the calendar to delete. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Contact

**Slug:** `HIGHLEVEL_DELETE_CONTACT`

Deletes a contact from a GoHighLevel sub-account. Use this action to permanently remove a contact identified by its contactId. This operation is destructive and cannot be undone. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `contactId` | string | Yes | The unique identifier of the contact to delete. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Conversation

**Slug:** `HIGHLEVEL_DELETE_CONVERSATION`

Deletes a conversation from a GoHighLevel sub-account, identified by its conversationId. This operation is destructive and cannot be undone. Required headers (handled automatically): Version: 2021-04-15

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `conversationId` | string | Yes | The unique identifier of the conversation to delete. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Custom Field

**Slug:** `HIGHLEVEL_DELETE_CUSTOM_FIELD`

Deletes a custom field from a GoHighLevel location. Use this action to permanently remove a custom field identified by its id. This operation is destructive and cannot be undone. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique identifier of the custom field to delete. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Custom Field Folder

**Slug:** `HIGHLEVEL_DELETE_CUSTOM_FIELD_FOLDER`

Deletes a custom field folder from a GoHighLevel sub-account. Use this action to permanently remove a custom field folder identified by its id. This operation is destructive and cannot be undone. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique identifier of the custom field folder to delete. |
| `locationId` | string | Yes | The unique identifier of the sub-account (location) that owns the custom field folder. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Custom Value

**Slug:** `HIGHLEVEL_DELETE_CUSTOM_VALUE`

Deletes a custom value from a GoHighLevel sub-account (location). Use this action to permanently remove a custom value identified by its id within the given locationId. This operation is destructive and cannot be undone. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique identifier of the custom value to delete. |
| `locationId` | string | Yes | The unique identifier of the sub-account (location) that owns the custom value. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Email Template

**Slug:** `HIGHLEVEL_DELETE_EMAILS_TEMPLATE`

Deletes an email template by its ID for a specified location. Use this action when you need to permanently remove an email template from GoHighLevel. This action is irreversible — once the email template is deleted, it cannot be recovered. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `location_id` | string | Yes | The unique identifier of the location associated with the template. |
| `template_id` | string | Yes | The unique identifier of the email template to delete. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Event

**Slug:** `HIGHLEVEL_DELETE_EVENT`

Deletes a calendar event from a GoHighLevel sub-account. Use this action to permanently remove a calendar event identified by its eventId. This operation is destructive and cannot be undone. Required headers (handled automatically): Version: 2021-04-15

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `eventId` | string | Yes | The unique identifier of the calendar event to delete. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Event Notification

**Slug:** `HIGHLEVEL_DELETE_EVENT_NOTIFICATION`

Deletes a notification from a calendar by removing the specified notification ID. Use this action when you need to permanently remove a calendar notification from the GoHighLevel system. This action is irreversible — once the notification is deleted, it cannot be recovered. Required headers (handled automatically): Version: 2021-04-15

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `calendar_id` | string | Yes | The unique identifier of the calendar that owns the notification. |
| `notification_id` | string | Yes | The unique identifier of the notification to delete. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Group

**Slug:** `HIGHLEVEL_DELETE_GROUP`

Deletes a calendar group from a GoHighLevel sub-account, identified by its groupId. This operation is destructive and cannot be undone. Required headers (handled automatically): Version: 2021-04-15

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `groupId` | string | Yes | The unique identifier of the calendar group to delete. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Link

**Slug:** `HIGHLEVEL_DELETE_LINK`

Deletes a link by its unique identifier. Use this action when you need to permanently remove a link from the HighLevel system. This action is irreversible — once the link is deleted, it cannot be recovered. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `link_id` | string | Yes | The unique identifier of the link to delete |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Media

**Slug:** `HIGHLEVEL_DELETE_MEDIAS`

Deletes a specific file or folder from the media storage by its unique identifier. Use this action when you need to permanently remove a media file or folder from the HighLevel media library. This action requires the media object ID and the owning location information. This action is irreversible — once the media is deleted, it cannot be recovered. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique identifier of the media (file or folder) to delete |
| `altId` | string | Yes | Location identifier that owns the file or folder |
| `altType` | string ("location") | Yes | Type of entity that owns the file or folder (currently only 'location' is supported) |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Note

**Slug:** `HIGHLEVEL_DELETE_NOTE`

Deletes a note associated with a specific contact in a GoHighLevel sub-account. Use this action to permanently remove a note identified by its id under the given contactId. This operation is destructive and cannot be undone. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique identifier of the note to delete. |
| `contactId` | string | Yes | The unique identifier of the contact that owns the note. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Object Record

**Slug:** `HIGHLEVEL_DELETE_OBJECTS_RECORD`

Deletes a record by its ID from a specified object schema (business or custom objects). Use this action when you need to permanently remove a specific record from the HighLevel objects system. This action is irreversible — once the record is deleted, it cannot be recovered. Supported objects include business objects and custom objects. For custom objects, include the 'custom_objects.' prefix in the schemaKey parameter. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique identifier of the record to be deleted. Available on the Record details page under the 3 dots menu or in the URL. |
| `schema_key` | string | Yes | The key of the Custom Object or Standard Object Schema. For custom objects, the key must include the 'custom_objects.' prefix (e.g., 'custom_objects.pet'), while standard objects use their respective object keys (e.g., 'business.email' for company's email). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Opportunity

**Slug:** `HIGHLEVEL_DELETE_OPPORTUNITY`

Deletes an opportunity from a GoHighLevel sub-account. Use this action to permanently remove an opportunity identified by its opportunityId. This operation is destructive and cannot be undone. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `opportunityId` | string | Yes | The unique identifier of the opportunity to delete. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Price By Id For Product

**Slug:** `HIGHLEVEL_DELETE_PRICE_BY_ID_FOR_PRODUCT`

Deletes a price identified by its priceId from a specific product in a GoHighLevel sub-account. This operation is destructive and cannot be undone. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `priceId` | string | Yes | The unique identifier of the price to delete. |
| `productId` | string | Yes | The unique identifier of the product that the price belongs to. |
| `locationId` | string | Yes | The unique identifier of the sub-account (location) that owns the product and price. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Product By Id

**Slug:** `HIGHLEVEL_DELETE_PRODUCT_BY_ID`

Deletes a product from a GoHighLevel sub-account. Use this action to permanently remove a product identified by its productId. This operation is destructive and cannot be undone. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `productId` | string | Yes | The unique identifier of the product to delete. |
| `locationId` | string | Yes | The unique identifier of the sub-account (location) that owns the product. |
| `sendWishlistStatus` | boolean | No | Whether to send the wishlist status when deleting the product. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Product Collection

**Slug:** `HIGHLEVEL_DELETE_PRODUCT_COLLECTION`

Deletes a product collection from a GoHighLevel sub-account. Use this action to permanently remove a product collection identified by its collectionId. This operation is destructive and cannot be undone. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `altId` | string | Yes | The location ID (sub-account ID) the collection belongs to. |
| `altType` | string ("location") | Yes | The type of the altId. Currently only 'location' is supported. |
| `collectionId` | string | Yes | The unique identifier of the product collection to delete. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Product Review

**Slug:** `HIGHLEVEL_DELETE_PRODUCTS_REVIEW`

Deletes a product review by its unique identifier. Use this action when you need to permanently remove a product review from the HighLevel system. This action is irreversible — once the product review is deleted, it cannot be recovered. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `alt_id` | string | Yes | Location Id or Agency Id |
| `alt_type` | string ("location") | Yes | The type of altId - must be 'location' |
| `review_id` | string | Yes | The unique identifier of the product review to delete |
| `product_id` | string | Yes | The product ID of the product |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Recurring Task

**Slug:** `HIGHLEVEL_DELETE_RECURRING_TASK`

Deletes a recurring task from a GoHighLevel sub-account (location). Use this action to permanently remove a recurring task identified by its id within a specific location. This operation is destructive and cannot be undone. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique identifier of the recurring task to delete. |
| `locationId` | string | Yes | The unique identifier of the sub-account (location) that owns the recurring task. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Relation

**Slug:** `HIGHLEVEL_DELETE_RELATION`

Deletes a relation between two objects by its ID. Use this action when you need to remove a specific relation from the system. This action is irreversible — once the relation is deleted, it cannot be recovered. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `location_id` | string | Yes | Your Sub Account's ID |
| `relation_id` | string | Yes | The unique identifier of the relation to delete |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Schedule

**Slug:** `HIGHLEVEL_DELETE_SCHEDULE`

Deletes a calendar schedule from a GoHighLevel sub-account, identified by its id. This operation is destructive and cannot be undone. Required headers (handled automatically): Version: 2021-04-15

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique identifier of the calendar schedule to delete. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Tag

**Slug:** `HIGHLEVEL_DELETE_TAG`

Deletes a tag from a GoHighLevel sub-account (location). Use this action to permanently remove a tag identified by its tagId within the given locationId. This operation is destructive and cannot be undone. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tagId` | string | Yes | The unique identifier of the tag to delete. |
| `locationId` | string | Yes | The unique identifier of the sub-account (location) that owns the tag. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Task

**Slug:** `HIGHLEVEL_DELETE_TASK`

Deletes a task associated with a contact in a GoHighLevel sub-account. Use this action to permanently remove a task identified by its taskId from the given contact. This operation is destructive and cannot be undone. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `taskId` | string | Yes | The unique identifier of the task to delete. |
| `contactId` | string | Yes | The unique identifier of the contact that owns the task. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Template

**Slug:** `HIGHLEVEL_DELETE_TEMPLATE`

Deletes an email builder template from a GoHighLevel sub-account. Use this action to permanently remove a template identified by its templateId within a given location. This operation is destructive and cannot be undone. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `locationId` | string | Yes | The unique identifier of the sub-account (location) that owns the email template. |
| `templateId` | string | Yes | The unique identifier of the email builder template to delete. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Disable Group

**Slug:** `HIGHLEVEL_DISABLE_GROUP`

Enables or disables a calendar group in a GoHighLevel sub-account. Set isActive to false to disable the group or true to enable it; the groupId identifies the group to update. Required headers (handled automatically): Version: 2021-04-15

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `groupId` | string | Yes | The unique identifier of the calendar group to enable or disable. |
| `isActive` | boolean | Yes | Whether the calendar group should be active (true) or disabled (false). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Edit Appointment

**Slug:** `HIGHLEVEL_EDIT_APPOINTMENT`

Edits an existing appointment event in a GoHighLevel calendar. Use this action to update an appointment's time, status, location, assignment, and other details. The eventId identifies the appointment to edit; only the fields you provide are changed. Required headers (handled automatically): Version: 2021-04-15

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `rrule` | string | No | RRULE as per the iCalendar (RFC 5545) specification for recurring events. DTSTART is not required, instance ids are calculated on the basis of startTime of the event. The rrule only be applied if ignoreFreeSlotValidation is true. |
| `title` | string | No | Title of the appointment. |
| `address` | string | No | Appointment address. |
| `endTime` | string | No | End Time. |
| `eventId` | string | Yes | The unique identifier of the appointment event to edit. |
| `toNotify` | boolean | No | If set to false, the automations will not run. |
| `startTime` | string | No | Start Time. |
| `calendarId` | string | No | Calendar Id. |
| `description` | string | No | Appointment description. |
| `assignedUserId` | string | No | Assigned User Id. |
| `ignoreDateRange` | boolean | No | If set to true, the minimum scheduling notice and date range would be ignored. |
| `appointmentStatus` | string ("new" | "confirmed" | "cancelled" | "showed" | "noshow" | "invalid") | No | The status of the appointment. |
| `meetingLocationId` | string | No | The unique identifier for the meeting location. This value can be found in `calendar.locationConfigurations` or `calendar.teamMembers[].locationConfigurations`. |
| `meetingLocationType` | string ("custom" | "zoom" | "gmeet" | "phone" | "address" | "ms_teams" | "google") | No | Meeting location type. If `address` is provided in the request body, the `meetingLocationType` defaults to **custom**. |
| `overrideLocationConfig` | boolean | No | Flag to override location config. **false** - If only `meetingLocationId` is provided. **true** - If only `meetingLocationType` is provided. |
| `ignoreFreeSlotValidation` | boolean | No | If true the time slot validation would be avoided for any appointment creation (even the ignoreDateRange). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Edit Block Slot

**Slug:** `HIGHLEVEL_EDIT_BLOCK_SLOT`

Updates an existing block slot event on a GoHighLevel calendar. Use this action to modify the title, calendar/assigned user, location, and start/end times of a block slot identified by eventId. Required headers (handled automatically): Version: 2021-04-15

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `title` | string | No | Title |
| `endTime` | string | No | End Time |
| `eventId` | string | Yes | The unique identifier of the block slot event to edit. |
| `startTime` | string | No | Start Time |
| `calendarId` | string | Yes | Either calendarId or assignedUserId can be set, not both. |
| `locationId` | string | Yes | Location Id |
| `assignedUserId` | string | No | Either calendarId or assignedUserId can be set, not both. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Edit Group

**Slug:** `HIGHLEVEL_EDIT_GROUP`

Edits an existing calendar group in a GoHighLevel sub-account. Use this action to update a group's name, description, and slug. The groupId identifies the calendar group to update. Required headers (handled automatically): Version: 2021-04-15

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | The name of the calendar group. |
| `slug` | string | Yes | The URL slug of the calendar group. |
| `groupId` | string | Yes | The unique identifier of the calendar group to edit. |
| `description` | string | Yes | The description of the calendar group. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Export Messages By Location

**Slug:** `HIGHLEVEL_EXPORT_MESSAGES_BY_LOCATION`

Exports messages for a specific GoHighLevel sub-account (location). Use this action to retrieve a paginated list of messages, optionally filtered by conversation, contact, channel, and date range, sorted by creation or update time. Required headers (handled automatically): Version: 2021-04-15

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | number | No | The maximum number of messages to be included in a single page of results. |
| `cursor` | string | No | Cursor for fetching the next page of results. |
| `sortBy` | string ("createdAt" | "updatedAt") | No | Field by which to sort the exported messages. |
| `channel` | string ("Call" | "SMS" | "Email" | "WhatsApp" | "Instagram" | "Facebook") | No | Channel by which to filter the exported messages. |
| `endDate` | string | No | Filter messages created on or before this date. |
| `contactId` | string | No | Filter messages by the unique identifier of a contact. |
| `sortOrder` | string ("asc" | "desc") | No | Order in which to sort the exported messages. |
| `startDate` | string | No | Filter messages created on or after this date. |
| `locationId` | string | Yes | The unique identifier of the sub-account (location) to export messages from. |
| `conversationId` | string | No | Filter messages by the unique identifier of a conversation. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Fetch Calendar Resources

**Slug:** `HIGHLEVEL_FETCH_CALENDAR_RESOURCES`

Retrieves a paginated list of calendar resources (equipments or rooms) for a specific sub-account in GoHighLevel. Use this action to explore the resources available for calendar scheduling, such as meeting rooms or equipment. Required headers (handled automatically): Version: 2021-04-15

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `skip` | number | Yes | The number of resources to skip before starting to collect the result set. |
| `limit` | number | Yes | The maximum number of resources to return in a single page of results. |
| `locationId` | string | Yes | The unique identifier of the sub-account (location). |
| `resourceType` | string ("equipments" | "rooms") | Yes | The type of calendar resource to fetch (equipments or rooms). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Fetch Campaigns

**Slug:** `HIGHLEVEL_FETCH_CAMPAIGNS`

Retrieves a list of email campaigns (schedules) for a specific GoHighLevel sub-account. Use this action to fetch and explore campaign information, with support for filtering by status, email status, name, and parent, as well as pagination via limit and offset. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | Filter campaigns by name. |
| `limit` | integer | No | The maximum number of campaigns to return in a single page of results. |
| `offset` | integer | No | The starting index of the page, indicating the position from which results should be retrieved. |
| `status` | string ("active" | "pause" | "complete" | "cancelled" | "retry" | "draft" | "resend-scheduled") | No | Status of the campaign/schedule. |
| `archived` | boolean | No | When true, includes archived campaigns in the results. |
| `parentId` | string | No | Filter campaigns by their parent identifier. |
| `showStats` | boolean | No | When true, includes statistics for each campaign. |
| `locationId` | string | Yes | The unique identifier of the sub-account (location) to fetch campaigns for. |
| `emailStatus` | string ("all" | "not-started" | "paused" | "cancelled" | "processing" | "resumed" | "next-drip" | "complete" | "success" | "error" | "waiting" | "queued" | "queueing" | "reading" | "scheduled") | No | Email status filter for the campaign/schedule. |
| `campaignsOnly` | boolean | No | When true, returns only campaigns. |
| `limitedFields` | boolean | No | When true, returns only a limited set of fields for each campaign. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Fetch Email Templates

**Slug:** `HIGHLEVEL_FETCH_EMAIL_TEMPLATES`

Fetches email templates for the specified location from the GoHighLevel email builder. Use this action when you need to retrieve a list of email templates available in a location. The locationId parameter is required to identify which location's templates to fetch. This action returns templates from the email builder including their names, subjects, categories, and other metadata. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `location_id` | string | Yes | The unique identifier of the location to fetch email templates for. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Fetch Redirects List

**Slug:** `HIGHLEVEL_FETCH_REDIRECTS_LIST`

Retrieves a paginated list of URL redirects configured for a specific GoHighLevel sub-account (location). Use this action to explore, search, and paginate through the redirects set up under a location's funnels. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | number | Yes | The maximum number of redirects to be included in a single page of results. |
| `offset` | number | Yes | The starting index of the page, indicating the position from which the redirects should be retrieved. |
| `search` | string | No | An optional search term used to filter the returned redirects. |
| `locationId` | string | Yes | The unique identifier of the sub-account (location) whose redirects should be fetched. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Find Associations

**Slug:** `HIGHLEVEL_FIND_ASSOCIATIONS`

Retrieves all associations for a sub-account / location. Use this action when you need to list or discover all associations defined within a specific location, including custom object associations and their relations. This is a read-only action that returns existing associations without making any modifications. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `skip` | integer | No | Number of records to skip for pagination (offset) |
| `limit` | integer | No | Maximum number of associations to return per page |
| `location_id` | string | Yes | The unique identifier of the location/sub-account to find associations for |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Generate Estimate Number

**Slug:** `HIGHLEVEL_GENERATE_ESTIMATE_NUMBER`

Generates the next estimate number for the given location. Use this action when you need to retrieve the next available estimate number before creating a new estimate. This is a read-only action that does not modify any data - it simply returns the next estimate number based on the location's current state. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `alt_id` | string | Yes | Location Id or Agency Id |
| `alt_type` | string ("location") | Yes | The type of altId - must be 'location' |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Agent Studio Agents (Deprecated)

**Slug:** `HIGHLEVEL_GET_AGENT_STUDIO_PUBLIC_API_AGENTS`

Lists all active agents with a published production version for the specified location. Use this action when you need to retrieve all agents available in GoHighLevel's Agent Studio for a specific location. Note: This is a deprecated endpoint. Consider using GET /agent instead for new integrations.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of agents to return (for pagination). Default is 25, max is 100. |
| `offset` | integer | No | Number of agents to skip for pagination. Default is 0. |
| `location_id` | string | Yes | The location identifier to filter agents by. This parameter is required. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get All Blog Authors By Location

**Slug:** `HIGHLEVEL_GET_ALL_BLOG_AUTHORS_BY_LOCATION`

Retrieves a paginated list of blog authors for a specific GoHighLevel sub-account (location). Use this action to fetch the available blog authors when managing or displaying blog content. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | Yes | The maximum number of blog authors to be included in a single page of results. |
| `offset` | integer | Yes | The starting index of the page, indicating the position from which the results should be retrieved. |
| `locationId` | string | Yes | The unique identifier of the sub-account (location) whose blog authors should be retrieved. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get All Categories By Location

**Slug:** `HIGHLEVEL_GET_ALL_CATEGORIES_BY_LOCATION`

Retrieves a paginated list of blog categories for a specific GoHighLevel sub-account (location). Use this action to fetch and explore the blog categories configured for a location, such as to display available categories or paginate through them. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | Yes | The maximum number of categories to be included in a single page of results. |
| `offset` | integer | Yes | The starting index of the page, indicating the position from which the results should be retrieved. |
| `locationId` | string | Yes | The unique identifier of the sub-account (location) whose blog categories should be retrieved. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get All Notes

**Slug:** `HIGHLEVEL_GET_ALL_NOTES`

Retrieves all notes associated with a specific contact. Use this action when you need to fetch all notes for a contact in GoHighLevel, such as to review communication history or track important information about a contact. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `contact_id` | string | Yes | The unique identifier of the contact whose notes to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get All Or Email Sms Templates

**Slug:** `HIGHLEVEL_GET_ALL_OR_EMAIL_SMS_TEMPLATES`

Retrieves all templates (or email/SMS/WhatsApp templates filtered by type) for a specific GoHighLevel sub-account (location). Use this action to list available message templates, optionally filtering by template type and paginating through the results. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `skip` | string | No | The number of templates to skip for pagination. |
| `type` | string ("sms" | "email" | "whatsapp") | No | The type of template to filter by. |
| `limit` | string | No | The maximum number of templates to return. |
| `deleted` | boolean | No | Whether to include deleted templates in the results. |
| `originId` | string | Yes | The origin identifier used to scope the templates being fetched. |
| `locationId` | string | Yes | The unique identifier of the sub-account (location) whose templates are retrieved. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get All Schedules

**Slug:** `HIGHLEVEL_GET_ALL_SCHEDULES`

Retrieves all schedules for a given user within a sub-account (location), optionally filtered by calendar. Use this action to list the working/availability schedules configured for a user. Supports pagination via the skip and limit query parameters. Required headers (handled automatically): Version: 2021-04-15

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `skip` | number | No | The number of schedules to skip for pagination. |
| `limit` | number | No | The maximum number of schedules to return. |
| `userId` | string | Yes | The unique identifier of the user whose schedules are being fetched. |
| `calendarId` | string | No | The unique identifier of the calendar to filter schedules by. |
| `locationId` | string | Yes | The unique identifier for the sub-account (location). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get All Tasks

**Slug:** `HIGHLEVEL_GET_ALL_TASKS`

Retrieves all tasks associated with a specific contact. Use this action when you need to fetch all tasks for a contact in GoHighLevel, such as to track pending activities, follow-ups, or completed work related to a contact. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `contact_id` | string | Yes | The unique identifier of the contact whose tasks to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Appointments For Contact

**Slug:** `HIGHLEVEL_GET_APPOINTMENTS_FOR_CONTACT`

Retrieves all appointments associated with a specific contact in a GoHighLevel sub-account. Use this action to list the events booked for a contact, including their calendar, status, timing, and assignment details. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `contactId` | string | Yes | The unique identifier of the contact whose appointments should be retrieved. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Association By Id

**Slug:** `HIGHLEVEL_GET_ASSOCIATION_BY_ID`

Retrieves a single association from GoHighLevel by its unique identifier. Use this action to fetch the full details of an association, including the objects it links and its association type. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `associationId` | string | Yes | The unique identifier of the association to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Association By Object Keys

**Slug:** `HIGHLEVEL_GET_ASSOCIATION_BY_OBJECT_KEYS`

Retrieves associations from a GoHighLevel sub-account by object key. Use this action to fetch association details, including the first and second object labels, keys, and the association type. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `objectKey` | string | Yes | The object key of the association to retrieve. |
| `locationId` | string | No | The sub-account (location) identifier. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Blocked Slots

**Slug:** `HIGHLEVEL_GET_BLOCKED_SLOTS`

Retrieves blocked slots for a GoHighLevel sub-account within a given time range. Use this action to fetch calendar blocked slots, optionally filtered by user, calendar, or group. Required headers (handled automatically): Version: 2021-04-15

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `userId` | string | No | Filter blocked slots by the user identifier. |
| `endTime` | string | Yes | The end of the time range (in milliseconds) to fetch blocked slots for. |
| `groupId` | string | No | Filter blocked slots by the group identifier. |
| `startTime` | string | Yes | The start of the time range (in milliseconds) to fetch blocked slots for. |
| `calendarId` | string | No | Filter blocked slots by the calendar identifier. |
| `locationId` | string | Yes | The unique identifier of the sub-account (location). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Blogs

**Slug:** `HIGHLEVEL_GET_BLOGS`

Retrieves all blogs for a specific location ID. Use this action when you need to fetch all blogs associated with a GoHighLevel location, such as to display a list of blogs on a website or manage blog content for a specific location. This is a read-only action that retrieves existing blogs without modification. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `location_id` | string | Yes | The unique identifier of the location to retrieve blogs for |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Brand Boards

**Slug:** `HIGHLEVEL_GET_BRAND_BOARDS`

Retrieves all brand boards for a specific location. Use this action when you need to fetch all brand boards associated with a location in GoHighLevel, including their logos, colors, and fonts. This is a read-only action that retrieves existing brand boards without modification.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `location_id` | string | Yes | The unique identifier of the location to retrieve brand boards for |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Brand Voice

**Slug:** `HIGHLEVEL_GET_BRAND_VOICE`

Retrieves a brand voice by its ID within the specified location. Use this action when you need to fetch details of a specific brand voice, including its name, description, and sample content that represents the brand's tone and communication style. This is a read-only action that retrieves existing brand voice data without modification.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `location_id` | string | Yes | The unique identifier of the location |
| `brand_voice_id` | string | Yes | The unique identifier of the brand voice to retrieve |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Calendar

**Slug:** `HIGHLEVEL_GET_CALENDAR`

Retrieves a single calendar by its unique identifier. Use this action when you need to fetch the full details of a specific GoHighLevel calendar, including its booking rules, availability settings, team member assignments, and integration configurations. Required headers (handled automatically): Version: 2021-04-15

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `calendarId` | string | Yes | The unique identifier of the calendar to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Calendar Events

**Slug:** `HIGHLEVEL_GET_CALENDAR_EVENTS`

Retrieves calendar events for a GoHighLevel sub-account within a given time range. Use this action to fetch appointments and events, optionally filtered by user, calendar, or calendar group. Required headers (handled automatically): Version: 2021-04-15

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `userId` | string | No | The unique identifier of the user to filter calendar events by. |
| `endTime` | string | Yes | The end of the time range (in milliseconds since epoch) for which events should be retrieved. |
| `groupId` | string | No | The unique identifier of the calendar group to filter events by. |
| `startTime` | string | Yes | The start of the time range (in milliseconds since epoch) for which events should be retrieved. |
| `calendarId` | string | No | The unique identifier of the calendar to filter events by. |
| `locationId` | string | Yes | The unique identifier of the sub-account (location) to fetch calendar events for. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Calendars

**Slug:** `HIGHLEVEL_GET_CALENDARS`

Retrieves all calendars associated with a GoHighLevel location. Use this action when you need to list all booking calendars available in a GoHighLevel location, including their configuration details, availability settings, and team member assignments. Required headers (handled automatically): Version: 2021-04-15

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `groupId` | string | No | Filter calendars by a specific calendar group ID. |
| `locationId` | string | Yes | The location/agency ID whose calendars to retrieve. |
| `showDrafted` | boolean | No | Whether to include draft (inactive) calendars in the response. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Event Calendar Schedule

**Slug:** `HIGHLEVEL_GET_CALENDARS_SCHEDULES_EVENT_CALENDAR`

Retrieves the availability schedule for a specific event calendar. Use this action when you need to fetch the availability schedule configuration for an event calendar in GoHighLevel, including custom availabilities, open hours, recurring settings, and buffer times. Required headers (handled automatically): Version: 2021-04-15

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `calendarId` | string | Yes | The unique identifier of the event calendar. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Service Bookings

**Slug:** `HIGHLEVEL_GET_CALENDARS_SERVICES_BOOKINGS`

Retrieves service bookings for a location within a given date range, with an optional service location filter. Use this action when you need to fetch a list of booked service appointments for a GoHighLevel location, such as to view all upcoming or historical bookings, generate reports, or sync booking data with an external system. The startTime and endTime parameters define the date range for the query. Both are required and must be in ISO 8601 format. Optionally filter by serviceLocationId to narrow results to a specific service location. Required headers (handled automatically): Version: 2021-04-15

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `endTime` | string | Yes | End of the date range in ISO 8601 format (e.g., '2026-04-14T23:59:59Z'). Required. |
| `startTime` | string | Yes | Start of the date range in ISO 8601 format (e.g., '2026-01-01T00:00:00Z'). Required. |
| `locationId` | string | Yes | The location/agency ID for which to retrieve service bookings. Required. |
| `serviceLocationId` | string | No | Filter bookings by a specific service location ID. Optional. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Contact

**Slug:** `HIGHLEVEL_GET_CONTACT`

Retrieves a single contact from a GoHighLevel sub-account by its unique identifier. Use this action to fetch the full details of a contact, including their name, contact information, tags, and custom fields. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `contactId` | string | Yes | The unique identifier of the contact to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Contacts By Business Id

**Slug:** `HIGHLEVEL_GET_CONTACTS_BY_BUSINESS_ID`

Retrieves a paginated list of contacts associated with a specific business in a GoHighLevel sub-account. Use this action to fetch contacts filtered by business identifier, optionally narrowing the results with a search query and paginating via limit and skip parameters. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `skip` | string | No | The number of contacts to skip, used for pagination. |
| `limit` | string | No | The maximum number of contacts to return in a single page of results. |
| `query` | string | No | A search query to filter the returned contacts. |
| `businessId` | string | Yes | The unique identifier of the business whose contacts are to be retrieved. |
| `locationId` | string | Yes | The sub-account (location) identifier the contacts belong to. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Conversation

**Slug:** `HIGHLEVEL_GET_CONVERSATIONS`

Retrieves a specific conversation by its unique identifier. Use this action when you need to fetch the details of a particular conversation in GoHighLevel, including its status, assigned user, contact information, and metadata. This is a read-only action that retrieves an existing conversation without modification.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `conversation_id` | string | Yes | The unique identifier of the conversation to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Conversation Messages

**Slug:** `HIGHLEVEL_GET_CONVERSATIONS_MESSAGES2`

Retrieves all messages for a specific conversation in GoHighLevel. Use this action when you need to fetch the message history of a conversation to review communication details or track the history of interactions with a contact. Required headers (handled automatically): Version: 2021-04-15

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `conversationId` | string | Yes | The unique identifier of the conversation whose messages to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Custom Field

**Slug:** `HIGHLEVEL_GET_CUSTOM_FIELD`

Retrieves a single custom field from a GoHighLevel sub-account (location) by its unique identifier. Use this action to fetch the full details of a custom field, including its name, key, data type, and available options. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique identifier of the custom field to retrieve. |
| `locationId` | string | Yes | The unique identifier of the sub-account (location) that owns the custom field. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Custom Field By Id

**Slug:** `HIGHLEVEL_GET_CUSTOM_FIELD_BY_ID`

Retrieves a single custom field from a GoHighLevel sub-account by its unique identifier. Use this action to fetch the full details of a custom field, including its name, data type, options, and configuration. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique identifier of the custom field to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Custom Fields

**Slug:** `HIGHLEVEL_GET_CUSTOM_FIELDS`

Retrieves the custom fields configured for a specific GoHighLevel sub-account (location). Use this action to list all custom fields, optionally filtering by model (contact, opportunity, or all). Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `model` | string ("contact" | "opportunity" | "all") | No | The model to filter custom fields by. |
| `locationId` | string | Yes | The unique identifier of the sub-account (location) whose custom fields should be retrieved. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Custom Fields By Object Key

**Slug:** `HIGHLEVEL_GET_CUSTOM_FIELDS_BY_OBJECT_KEY`

Retrieves all custom fields and custom field folders for a given object within a GoHighLevel sub-account, identified by the object key (e.g. 'contact', 'opportunity', or a custom object key). Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `objectKey` | string | Yes | The key of the object whose custom fields should be retrieved (e.g. 'contact', 'opportunity', or a custom object key). |
| `locationId` | string | Yes | The unique identifier of the sub-account (location). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Custom Value

**Slug:** `HIGHLEVEL_GET_CUSTOM_VALUE`

Retrieves a single custom value from a GoHighLevel sub-account (location) by its unique identifier. Use this action to fetch the details of a custom value, including its name, field key, and value. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique identifier of the custom value to retrieve. |
| `locationId` | string | Yes | The unique identifier of the sub-account (location) that owns the custom value. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Custom Values

**Slug:** `HIGHLEVEL_GET_CUSTOM_VALUES`

Retrieves all custom values associated with a specific location in GoHighLevel. Use this action when you need to fetch all custom field values configured for a location, such as to access location-specific custom data or display custom field information in an integrated application. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `location_id` | string | Yes | The unique identifier of the location whose custom values to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Email By Id

**Slug:** `HIGHLEVEL_GET_EMAIL_BY_ID`

Retrieves a single email message from a GoHighLevel sub-account by its unique identifier. Use this action to fetch the full details of an email, including its subject, body, sender, recipients, and delivery status. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique identifier of the email message to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Bulk Action Campaigns

**Slug:** `HIGHLEVEL_GET_EMAILS_CAMPAIGNS_BULK_ACTIONS2`

Retrieves all bulk action campaigns for a specific GoHighLevel location. Use this action when you need to list email campaigns that use bulk actions for a location, such as to view available campaigns, check their status, or identify campaigns for enrollment purposes. This is a read-only action that retrieves existing campaigns without modification. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `location_id` | string | Yes | The unique identifier of the location whose bulk action campaigns to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Email Campaigns

**Slug:** `HIGHLEVEL_GET_EMAILS_CAMPAIGNS_EMAILS`

Retrieves all email campaigns for a specific GoHighLevel location. Use this action when you need to list all email marketing campaigns associated with a location, such as to review campaign statuses, track campaign performance metrics, or select a specific campaign for further operations. This is a read-only action that retrieves existing email campaigns without modification. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `locationId` | string | Yes | The unique identifier of the location to retrieve email campaigns for |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Email Templates

**Slug:** `HIGHLEVEL_GET_EMAILS_TEMPLATES`

Retrieves all email templates for a specific location. Use this action when you need to fetch all email templates available in a GoHighLevel location, including their content, subjects, and metadata. This is a read-only action that retrieves existing email templates without modification. The templates can be used for email campaigns, automations, and other communications. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `locationId` | string | Yes | The unique identifier of the location whose email templates to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Event Notification

**Slug:** `HIGHLEVEL_GET_EVENT_NOTIFICATION`

Retrieves a single event notification by its unique notification ID. Use this action when you need to fetch the details of a specific calendar notification, including its delivery channel, timing configuration, and recipient settings in the GoHighLevel system. Required headers (handled automatically): Version: 2021-04-15

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `calendarId` | string | Yes | The unique identifier of the calendar that owns the notification. |
| `notificationId` | string | Yes | The unique identifier of the notification to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Funnels Page

**Slug:** `HIGHLEVEL_GET_FUNNELS_PAGE`

Retrieves a list of all funnel pages based on the given query parameters. Use this action when you need to fetch all pages belonging to a specific funnel in GoHighLevel, such as to display funnel page information, manage funnel content, or retrieve page details for a marketing funnel. This is a read-only action that retrieves existing funnel pages without modification. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | Filter funnel pages by name (optional) |
| `limit` | integer | No | Maximum number of funnel pages to return |
| `offset` | integer | No | Number of funnel pages to skip for pagination |
| `funnel_id` | string | Yes | The unique identifier of the funnel to retrieve pages for |
| `location_id` | string | Yes | The unique identifier of the location to retrieve funnel pages for |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Funnels Page Count

**Slug:** `HIGHLEVEL_GET_FUNNELS_PAGE_COUNT`

Retrieves the count of funnel pages based on the given query parameters. Use this action when you need to get the number of pages in a specific funnel in GoHighLevel, such as to determine pagination requirements or to display page counts in a UI. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | Optional name filter to search for funnel pages by name. |
| `funnelId` | string | Yes | The unique identifier of the funnel to get page count for. |
| `locationId` | string | Yes | The unique identifier of the location associated with the funnel. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Groups

**Slug:** `HIGHLEVEL_GET_GROUPS`

Retrieves the list of calendar groups for a specific GoHighLevel sub-account (location). Use this action to fetch and explore calendar group information, such as group name, description, slug, and active status. Required headers (handled automatically): Version: 2021-04-15

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `locationId` | string | Yes | The unique identifier of the sub-account (location) whose calendar groups should be retrieved. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Invoice Settings

**Slug:** `HIGHLEVEL_GET_INVOICE_SETTINGS`

Retrieves invoice settings for a specific location in GoHighLevel. Use this action when you need to fetch the invoice configuration for a location, such as to display invoice templates, check default terms, or verify tax settings. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `altId` | string | Yes | Location ID to get invoice settings for |
| `altType` | string ("location") | Yes | The type of altId - must be 'location' |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Invoice Schedules

**Slug:** `HIGHLEVEL_GET_INVOICES_SCHEDULE`

Retrieves a list of invoice schedules for a location or company. Use this action when you need to fetch all invoice schedules from GoHighLevel, such as to list recurring billing schedules, view scheduled payment plans, or filter schedules by status, date range, or other criteria. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | Yes | Limit the number of items to return |
| `alt_id` | string | Yes | Location Id / Company Id based on altType |
| `end_at` | string | No | End date in YYYY-MM-DD format |
| `offset` | integer | Yes | Number of items to skip |
| `search` | string | No | Search for an schedule by id / name / email / phoneNo |
| `status` | string | No | Status to filter schedules |
| `alt_type` | string ("location") | Yes | The type of altId - must be 'location' |
| `start_at` | string | No | Start date in YYYY-MM-DD format |
| `payment_mode` | string ("default" | "live" | "test") | No | Payment mode options |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Link By Id

**Slug:** `HIGHLEVEL_GET_LINK_BY_ID`

Retrieves a single trigger link from a GoHighLevel sub-account by its unique identifier. Use this action to fetch the details of a link, including its name, redirect URL, and field key. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `linkId` | string | Yes | The unique identifier of the trigger link to retrieve. |
| `locationId` | string | Yes | The sub-account (location) identifier the link belongs to. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Links

**Slug:** `HIGHLEVEL_GET_LINKS`

Retrieves all trigger links for a specific GoHighLevel sub-account (location). Use this action to fetch the list of links, including their names, redirect targets, and field keys. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `locationId` | string | Yes | The unique identifier of the sub-account (location) whose links should be retrieved. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get List Inventory

**Slug:** `HIGHLEVEL_GET_LIST_INVENTORY`

Retrieves a paginated list of inventory items for a specific location. Use this action to fetch inventory data such as available quantities, SKUs, and product associations from GoHighLevel. Supports filtering by search query and pagination using limit and offset parameters. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `altId` | string | Yes | The unique identifier for the location. |
| `limit` | integer | No | The maximum number of items to be included in a single page of results. |
| `offset` | integer | No | The starting index of the page, indicating the position from which the results should be retrieved. |
| `search` | string | No | The search query to filter inventory items by name. |
| `altType` | string ("location") | Yes | The type of the alt id. Currently only 'location' is supported. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Location

**Slug:** `HIGHLEVEL_GET_LOCATION`

Retrieves a single sub-account (location) from GoHighLevel by its unique identifier. Use this action to fetch the full details of a location, including its name, address, contact information, and timezone. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `locationId` | string | Yes | The sub-account (location) id to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Lost Reason

**Slug:** `HIGHLEVEL_GET_LOST_REASON`

Retrieves the list of opportunity lost reasons configured for a GoHighLevel sub-account. Use this action to fetch and filter lost reasons by name or search query, with support for pagination and optionally including deleted reasons and a total count. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | Filter lost reasons by their exact name. |
| `skip` | integer | No | The number of lost reasons to skip for pagination. |
| `limit` | integer | No | The maximum number of lost reasons to return. |
| `query` | string | No | A search string to filter lost reasons. |
| `deleted` | boolean | No | Whether to include deleted lost reasons in the results. |
| `getCount` | boolean | No | Whether to include the total count of matching lost reasons in the response. |
| `locationId` | string | Yes | The unique identifier of the sub-account (location) to retrieve lost reasons for. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Media Files

**Slug:** `HIGHLEVEL_GET_MEDIAS_FILES`

Fetches a list of files and folders from the media storage for a location. Use this action when you need to retrieve the contents of the media library, browse folders, or search for specific files. The results can be filtered by type (file/folder), sorted by various fields, and paginated using offset and limit. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `type` | string ("file" | "folder") | Yes | Type of media item to retrieve |
| `altId` | string | Yes | Location identifier that owns the files |
| `limit` | string | No | Number of files to show in the listing (for pagination) |
| `query` | string | No | Query text to search for specific files or folders |
| `offset` | string | No | Number of files to skip in listing (for pagination) |
| `sortBy` | string ("createdAt" | "name" | "updatedAt") | Yes | Field to sort the file listing by |
| `altType` | string ("location") | Yes | Type of entity that owns the file (currently only 'location' is supported) |
| `fetchAll` | string | No | Whether to fetch all files or folders (true/false) |
| `parentId` | string | No | Parent folder ID to list contents from (optional, use for nested folders) |
| `sortOrder` | string ("asc" | "desc") | Yes | Direction in which files need to be sorted |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Message

**Slug:** `HIGHLEVEL_GET_MESSAGE`

Retrieves a single message from a GoHighLevel conversation by its unique identifier. Use this action to fetch the full details of a message, including its body, type, direction, status, and attachments. Required headers (handled automatically): Version: 2021-04-15

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique identifier of the message to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Note

**Slug:** `HIGHLEVEL_GET_NOTE`

Retrieves a single note for a specific contact in a GoHighLevel sub-account by its unique identifier. Use this action to fetch the full details of a note, including its body, title, and metadata. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique identifier of the note to retrieve. |
| `contactId` | string | Yes | The unique identifier of the contact the note belongs to. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Object By Location Id

**Slug:** `HIGHLEVEL_GET_OBJECT_BY_LOCATION_ID`

Retrieves the list of custom and standard object schemas for a specific GoHighLevel sub-account (location). Use this action to discover the available objects, their keys, labels, and metadata configured for a location. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `locationId` | string | Yes | The unique identifier of the sub-account (location) whose object schemas should be retrieved. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Object Schema

**Slug:** `HIGHLEVEL_GET_OBJECT_SCHEMA`

Retrieves the schema definition for an object by its key or ID in GoHighLevel. Use this action when you need to fetch the field structure and metadata for objects such as contacts, opportunities, businesses, or custom objects. This is a read-only operation that returns the schema definition including all field properties like data types, labels, and constraints. Required headers (handled automatically): Version: 2021-07-28 Supported object keys: contact, opportunity, business, and custom object keys.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `key` | string | Yes | Key of the object schema to retrieve. Supported keys include: contact, opportunity, business, and custom object keys (e.g., custom_objects.pet) |
| `location_id` | string | Yes | The unique identifier of the location/sub-account |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Object Record By Id

**Slug:** `HIGHLEVEL_GET_OBJECTS_RECORDS`

Retrieves a Standard Object (like business) or Custom Object record by its ID. Use this action when you need to fetch a specific record from the HighLevel objects system by providing the schema key and record ID. This is a read-only action that retrieves record data without making any modifications. Supported objects include business objects and custom objects. For custom objects, include the 'custom_objects.' prefix in the schemaKey parameter. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique identifier of the record to retrieve. Available on the Record details page under the 3 dots menu or in the URL. |
| `schema_key` | string | Yes | The key of the Custom Object or Standard Object Schema. For custom objects, the key must include the 'custom_objects.' prefix (e.g., 'custom_objects.pet'), while standard objects use their respective object keys (e.g., 'business.email' for company's email). This information is available on the Custom Objects Details page under Settings. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Opportunity

**Slug:** `HIGHLEVEL_GET_OPPORTUNITY`

Retrieves a single opportunity from a GoHighLevel sub-account by its unique identifier. Use this action to fetch the full details of an opportunity, including its name, monetary value, pipeline, stage, status, and associated contact. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `opportunityId` | string | Yes | The unique identifier of the opportunity to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Pipelines

**Slug:** `HIGHLEVEL_GET_PIPELINES`

Retrieves all opportunity pipelines associated with a GoHighLevel location. Use this action when you need to list all sales/opportunity pipelines available in a GoHighLevel location, including their stages, display settings, and probability configurations. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `locationId` | string | Yes | The location/agency ID whose opportunity pipelines to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Posts

**Slug:** `HIGHLEVEL_GET_POSTS`

Retrieves a list of social media posts for a specific location. Use this action when you need to fetch social media posts from GoHighLevel, such as to review scheduled content, monitor published posts, check failed posts, or manage social media content across different platforms. This is a read-only action that retrieves existing posts without modification. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `skip` | string | No | Number of records to skip for pagination |
| `type` | string ("recent" | "all" | "scheduled" | "draft" | "failed" | "in_review" | "published" | "in_progress" | "deleted") | No | Status of the social media post. |
| `limit` | string | No | Maximum number of posts to return |
| `toDate` | string | Yes | End date for filtering posts (ISO 8601 format) |
| `accounts` | string | No | List of account IDs separated by comma as a string |
| `fromDate` | string | Yes | Start date for filtering posts (ISO 8601 format) |
| `postType` | string ("post" | "story" | "reel") | No | Type of social media post. |
| `locationId` | string | Yes | The unique identifier of the location |
| `includeUsers` | string | Yes | Whether to include user data in the response |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Price By Id For Product

**Slug:** `HIGHLEVEL_GET_PRICE_BY_ID_FOR_PRODUCT`

Retrieves a single price for a specific product in a GoHighLevel sub-account by its unique identifier. Use this action to fetch the full details of a product price, including its amount, currency, type, and inventory settings. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `priceId` | string | Yes | The unique identifier of the price to retrieve. |
| `productId` | string | Yes | The unique identifier of the product the price belongs to. |
| `locationId` | string | Yes | The unique identifier of the sub-account (location). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Product By Id

**Slug:** `HIGHLEVEL_GET_PRODUCT_BY_ID`

Retrieves a single product from a GoHighLevel sub-account by its unique identifier. Use this action to fetch the full details of a product, including its name, type, variants, taxes, and label information. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `productId` | string | Yes | The unique identifier of the product to retrieve. |
| `locationId` | string | Yes | The unique identifier of the sub-account (location) the product belongs to. |
| `sendWishlistStatus` | boolean | No | Whether to include the wishlist status in the response. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Product Collection Id

**Slug:** `HIGHLEVEL_GET_PRODUCT_COLLECTION_ID`

Retrieves a single product collection from a GoHighLevel sub-account by its unique identifier. Use this action to fetch the full details of a product collection. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `altId` | string | Yes | The location (sub-account) identifier the collection belongs to. |
| `collectionId` | string | Yes | The unique identifier of the product collection to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Product Reviews

**Slug:** `HIGHLEVEL_GET_PRODUCT_REVIEWS`

Retrieves a paginated list of product reviews for a specific sub-account (location) in GoHighLevel. Use this action to fetch and explore product reviews, optionally filtered by product, store, rating, or date range, and sorted by creation date or rating. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `altId` | string | Yes | The alt identifier, typically the sub-account (location) id. |
| `limit` | integer | No | The maximum number of reviews to be included in a single page of results. |
| `offset` | integer | No | The starting index of the page, indicating the position from which the results should be retrieved. |
| `rating` | number | No | Filter the reviews by a specific rating value. |
| `status` | string ("approved" | "pending") | Yes | Filter reviews by moderation status. Supported values are 'approved' and 'pending'. |
| `altType` | string ("location") | Yes | The type of the alt identifier. Currently only 'location' is supported. |
| `endDate` | string | No | Filter reviews created on or before this date. |
| `storeId` | string | No | Filter reviews by the unique identifier of the store. |
| `productId` | string | No | Filter reviews by the unique identifier of the product. |
| `sortField` | string ("createdAt" | "rating") | No | The field by which the reviews should be sorted. |
| `sortOrder` | string ("asc" | "desc") | No | The order in which the reviews should be sorted. |
| `startDate` | string | No | Filter reviews created on or after this date. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Products

**Slug:** `HIGHLEVEL_GET_PRODUCTS`

Retrieves a paginated list of products for a specific location. Use this action when you need to fetch and explore product information from GoHighLevel, such as to display a product catalog, search for specific products by name, or paginate through available products. Supports filtering by product name, category (collection), store, and various product attributes. Also supports pagination using limit and offset parameters for efficient data retrieval. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | The maximum number of items to be included in a single page of results |
| `expand` | array | No | Name of an entity whose data has to be fetched along with product. Possible entities are tax, stripe and paypal. If not mentioned, only ID will be returned in case of taxes |
| `offset` | integer | No | The starting index of the page, indicating the position from which the results should be retrieved. |
| `search` | string | No | The name of the product for searching. |
| `storeId` | string | No | fetch and project products based on the storeId |
| `sortOrder` | string ("asc" | "desc") | No | Sort order for product listing |
| `locationId` | string | Yes | LocationId is the id of the sub-account |
| `productIds` | array | No | List of product ids to be fetched. |
| `collectionIds` | string | No | Filter by product category Ids. Supports comma separated values |
| `collectionSlug` | string | No | The slug value of the collection by which the collection would be searched |
| `includedInStore` | boolean | No | Separate products by which are included in the store and which are not |
| `availableInStore` | boolean | No | If the product is included in the online store |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Product Prices

**Slug:** `HIGHLEVEL_GET_PRODUCTS_PRICE`

Lists all prices associated with a specific product in the HighLevel system. Use this action when you need to retrieve pricing information for a product, including both one-time and recurring prices, with optional filtering by price IDs and pagination support for large result sets. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ids` | string | No | Filter the response only with the given price IDs. Provide comma-separated IDs. |
| `limit` | integer | No | The maximum number of items to be included in a single page of results. Defaults to 25. |
| `offset` | integer | No | The starting index of the page, indicating the position from which the results should be retrieved. Defaults to 0. |
| `productId` | string | Yes | The unique identifier of the product whose prices need to be retrieved. |
| `locationId` | string | Yes | The unique identifier for the location. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Product Store Stats

**Slug:** `HIGHLEVEL_GET_PRODUCT_STORE_STATS`

Retrieves product statistics for a specific store in a GoHighLevel sub-account, including the total number of products, the number included in the store, and the number excluded from the store. Supports filtering by search term and collection ids. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `altId` | string | Yes | The alternate identifier (e.g. the sub-account/location id). |
| `search` | string | No | A search term used to filter products when computing the statistics. |
| `altType` | string ("location") | Yes | The type of the alt identifier. Currently only 'location' is supported. |
| `storeId` | string | Yes | The unique identifier of the store to fetch statistics for. |
| `collectionIds` | string | No | Filter by product category ids. Supports comma separated values. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Recurring Task By Id

**Slug:** `HIGHLEVEL_GET_RECURRING_TASK_BY_ID`

Retrieves a single recurring task from a GoHighLevel sub-account by its unique identifier. Use this action to fetch the full details of a recurring task, including its title, description, recurrence rule, and assignment. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique identifier of the recurring task to retrieve. |
| `locationId` | string | Yes | The unique identifier of the sub-account (location) the recurring task belongs to. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Relations By Record Id

**Slug:** `HIGHLEVEL_GET_RELATIONS_BY_RECORD_ID`

Retrieves all relations for a specific record by its ID. Use this action when you need to find or list all relations associated with a specific record, such as contacts, custom objects, or opportunities. This is a read-only action that returns existing relations without making any modifications. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `skip` | integer | No | Number of records to skip for pagination (offset) |
| `limit` | integer | No | Maximum number of relations to return per page |
| `record_id` | string | Yes | The unique identifier of the record to get relations for |
| `location_id` | string | Yes | Your Sub Account's ID |
| `association_ids` | array | No | List of association IDs to filter relations by |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Reviews Count

**Slug:** `HIGHLEVEL_GET_REVIEWS_COUNT`

Retrieves the count of reviews for a specific location in GoHighLevel, optionally filtered by rating, date range, product, or store. Use this action to obtain aggregated review status counts for reporting and analytics. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `altId` | string | Yes | The alternate identifier (e.g. the location id) to fetch review counts for. |
| `rating` | number | No | Filter the review counts by a specific rating. |
| `altType` | string ("location") | Yes | The type of the alt identifier. Must be 'location'. |
| `endDate` | string | No | Filter reviews created on or before this end date. |
| `storeId` | string | No | Filter the review counts by a specific store id. |
| `productId` | string | No | Filter the review counts by a specific product id. |
| `startDate` | string | No | Filter reviews created on or after this start date. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Schedule By Id

**Slug:** `HIGHLEVEL_GET_SCHEDULE_BY_ID`

Retrieves a single calendar schedule from a GoHighLevel sub-account by its unique identifier. Use this action to fetch the full details of a schedule, including its availability rules, timezone, and linked calendars. Required headers (handled automatically): Version: 2021-04-15

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique identifier of the schedule to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Slots

**Slug:** `HIGHLEVEL_GET_SLOTS`

Retrieves the available free time slots for a specific GoHighLevel calendar within a given date range. Use this action to determine when appointments can be booked, optionally filtered by timezone and by specific user(s). The response is a mapping keyed by date, where each entry contains the list of free slot timestamps for that date. Required headers (handled automatically): Version: 2021-04-15

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `userId` | string | No | The unique identifier of a single user to filter free slots by. |
| `endDate` | integer | Yes | The end of the date range (epoch timestamp in milliseconds) to search for free slots. |
| `userIds` | array | No | A list of user identifiers to filter free slots by. |
| `timezone` | string | No | The timezone (e.g., 'America/Chihuahua') in which the free slots should be returned. |
| `startDate` | integer | Yes | The start of the date range (epoch timestamp in milliseconds) to search for free slots. |
| `calendarId` | string | Yes | The unique identifier of the calendar for which free slots are retrieved. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Store Settings

**Slug:** `HIGHLEVEL_GET_STORE_STORE_SETTING`

Retrieves store settings for a specific location or agency. Use this action when you need to fetch the store configuration and settings for a GoHighLevel location, such as shipping origins, order notifications, and fulfillment settings. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `altId` | string | Yes | Location Id or Agency Id. |
| `altType` | string ("location") | Yes | The type of altId - must be 'location'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Tag

**Slug:** `HIGHLEVEL_GET_TAG`

Retrieves a single tag from a GoHighLevel sub-account by its unique identifier. Use this action to fetch the details of a tag, including its name and the location it belongs to. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tagId` | string | Yes | The unique identifier of the tag to retrieve. |
| `locationId` | string | Yes | The unique identifier of the sub-account (location) the tag belongs to. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Task

**Slug:** `HIGHLEVEL_GET_TASK`

Retrieves a single task for a specific contact in a GoHighLevel sub-account by its unique identifier. Use this action to fetch the full details of a task, including its title, body, assignee, due date, and completion status. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `taskId` | string | Yes | The unique identifier of the task to retrieve. |
| `contactId` | string | Yes | The unique identifier of the contact that owns the task. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Timezones

**Slug:** `HIGHLEVEL_GET_TIMEZONES`

Retrieves all available timezones for a GoHighLevel location. Use this action when you need to fetch the list of supported timezones, such as to display timezone options in scheduling interfaces or configure location-specific time settings. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `location_id` | string | Yes | The unique identifier of the location whose timezones to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get User By Location

**Slug:** `HIGHLEVEL_GET_USER_BY_LOCATION`

Retrieves all users associated with a specific location in GoHighLevel. Use this action when you need to fetch the list of users belonging to a location, such as to view team members, check user details, or enumerate available users for task assignments. This is a read-only action that retrieves existing users without modification. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `location_id` | string | Yes | The unique identifier of the location to filter users by |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Initiate File Upload

**Slug:** `HIGHLEVEL_INITIATE_FILE_UPLOAD`

Initiates a direct file upload for a GoHighLevel conversation message by requesting a signed GCS upload URL. Use the returned uploadUrl to PUT the file content, then complete the upload via the confirmation endpoint. Required headers (handled automatically): Version: 2021-04-15

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `channel` | string | Yes | Channel type for size limits (WHATSAPP for 100MB limit, others for 5MB) |
| `fileSize` | number | No | File size in bytes (optional, for pre-validation) |
| `filename` | string | Yes | Original filename with extension |
| `locationId` | string | Yes | Location ID |
| `contentType` | string | Yes | MIME type of the file |
| `conversationId` | string | Yes | Conversation ID |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Agent Studio Agents

**Slug:** `HIGHLEVEL_LIST_AGENT_STUDIO_AGENT`

Lists all active agents for the specified location in Agent Studio. Use this action when you need to retrieve all agents available for a location in GoHighLevel's Agent Studio. The locationId parameter is required to ensure optimal performance. Supports pagination using limit and offset parameters. Optionally filter by isPublished=true to return only agents with a published production version. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of agents to return per page. Defaults to 25. |
| `offset` | integer | No | Number of agents to skip for pagination. Defaults to 0. |
| `location_id` | string | Yes | The unique identifier of the location to retrieve agents for. Required for optimal performance. |
| `is_published` | boolean | No | Filter to return only agents with a published production version. Set to true to include only published agents. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Brand Voices

**Slug:** `HIGHLEVEL_LIST_BRAND_BOARDS_VOICES`

Retrieves all brand voices for a specific location in GoHighLevel. Use this action when you need to fetch all brand voices associated with a location, including their names, descriptions, and sample content that represent the brand's tone. This is a read-only action that retrieves existing brand voices without modification.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `location_id` | string | Yes | The unique identifier of the location to retrieve brand voices for. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Event Notifications

**Slug:** `HIGHLEVEL_LIST_EVENT_NOTIFICATIONS`

Retrieves the event notifications configured for a specific GoHighLevel calendar. Use this action to list how and when notifications are sent for calendar events, optionally filtering by active or deleted status and paginating the results. Required headers (handled automatically): Version: 2021-04-15

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `skip` | number | No | The number of notifications to skip for pagination. |
| `limit` | number | No | The maximum number of notifications to return. |
| `deleted` | boolean | No | Filter notifications by their deleted status. |
| `isActive` | boolean | No | Filter notifications by their active status. |
| `calendarId` | string | Yes | The unique identifier of the calendar whose event notifications are retrieved. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Funnels Funnel

**Slug:** `HIGHLEVEL_LIST_FUNNELS_FUNNEL`

Retrieves a list of all funnels based on the given query parameters. Use this action when you need to fetch all funnels available in a GoHighLevel location, such as to display funnel information, manage funnel content, or retrieve funnel details for marketing campaigns. This is a read-only action that retrieves existing funnels without modification. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | Filter funnels by name (optional) |
| `type` | string | No | Filter funnels by type (optional) |
| `limit` | string | No | Maximum number of funnels to return (optional) |
| `offset` | string | No | Number of funnels to skip for pagination (optional) |
| `category` | string | No | Filter funnels by category (optional) |
| `parentId` | string | No | Filter funnels by parent ID for nested funnels (optional) |
| `locationId` | string | Yes | The unique identifier of the location to retrieve funnels for |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Coupons

**Slug:** `HIGHLEVEL_LIST_PAYMENTS_COUPON`

Retrieves a list of all coupons available in a GoHighLevel location. Use this action when you need to view all promotional offers and special discounts available in a GoHighLevel location. Supports filtering by status (scheduled, active, expired) and searching by coupon name or code. Use pagination parameters to retrieve large result sets. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `altId` | string | Yes | The location ID whose coupons to retrieve. |
| `limit` | integer | No | Maximum number of coupons to return. Defaults to 25. |
| `offset` | integer | No | Number of coupons to skip for pagination. Defaults to 0. |
| `search` | string | No | Search term to filter coupons by name or code. |
| `status` | string ("scheduled" | "active" | "expired") | No | Status of the coupon. |
| `altType` | string | No | Alt type. Must be 'location'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Product Collections

**Slug:** `HIGHLEVEL_LIST_PRODUCT_COLLECTIONS`

Retrieves a paginated list of product collections for a specific location (sub-account) in GoHighLevel. Use this action to browse or filter product collections by name or by specific collection ids. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | Filter collections by name. |
| `altId` | string | Yes | The location/sub-account id (alt id). |
| `limit` | integer | No | The maximum number of collections to return in a single page. |
| `offset` | integer | No | The starting index of the page from which results are retrieved. |
| `altType` | string ("location") | Yes | The alt type, identifying the kind of id supplied in altId. |
| `collectionIds` | string | No | Comma-separated collection ids. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Tags

**Slug:** `HIGHLEVEL_LIST_TAGS`

Retrieves the list of tags defined in a GoHighLevel sub-account (location). Use this action to fetch all tags available for a given location, including each tag's id, name, and location identifier. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `locationId` | string | Yes | The sub-account (location) id whose tags to list. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Locations Create Custom Field

**Slug:** `HIGHLEVEL_LOCATIONS_CREATE_CUSTOM_FIELD`

Creates a new custom field within a GoHighLevel sub-account (location). Use this action to define a custom field for contacts or opportunities, specifying its name, data type, and other display options. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | The name of the custom field to create. |
| `model` | string ("contact" | "opportunity") | No | Model of the custom field you want to create. |
| `dataType` | string | Yes | The data type of the custom field (e.g. TEXT, NUMERICAL, DATE). |
| `position` | number | No | The position (ordering) of the custom field. |
| `locationId` | string | Yes | The unique identifier of the sub-account (location) in which to create the custom field. |
| `placeholder` | string | No | The placeholder text displayed for the custom field. |
| `acceptedFormat` | array | No | The accepted file formats for the custom field when it is a file upload field. |
| `isMultipleFile` | boolean | No | Whether the custom field allows uploading multiple files. |
| `maxNumberOfFiles` | number | No | The maximum number of files allowed for the custom field. |
| `textBoxListOptions` | array | No | The list of options for a text box list custom field. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Locations Delete Custom Field

**Slug:** `HIGHLEVEL_LOCATIONS_DELETE_CUSTOM_FIELD`

Deletes a custom field from a GoHighLevel location (sub-account). Use this action to permanently remove a custom field identified by its id within the specified locationId. This operation is destructive and cannot be undone. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique identifier of the custom field to delete. |
| `locationId` | string | Yes | The unique identifier of the location (sub-account) that owns the custom field. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Locations Update Custom Field

**Slug:** `HIGHLEVEL_LOCATIONS_UPDATE_CUSTOM_FIELD`

Updates an existing custom field in a GoHighLevel sub-account (location). Use this action to modify a custom field's name, placeholder, position, accepted formats, and other attributes. The locationId and id together identify the custom field to update. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique identifier of the custom field to update. |
| `name` | string | Yes | The display name of the custom field. |
| `model` | string ("contact" | "opportunity") | No | Model of the custom field you want to update. |
| `position` | number | No | The display position of the custom field. |
| `locationId` | string | Yes | The unique identifier of the sub-account (location) that owns the custom field. |
| `placeholder` | string | No | Placeholder text shown for the custom field. |
| `acceptedFormat` | array | No | List of accepted file formats for file-upload custom fields. |
| `isMultipleFile` | boolean | No | When true, allows multiple files to be uploaded for this field. |
| `maxNumberOfFiles` | number | No | The maximum number of files allowed for this field. |
| `textBoxListOptions` | array | No | List of options for text box list custom fields. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Put Location

**Slug:** `HIGHLEVEL_PUT_LOCATION`

Updates an existing sub-account/location in GoHighLevel. Use this action to modify a location's business details, settings, social links, and integration credentials. The locationId identifies the location to update. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `city` | string | No | The city where the business is located for which sub-account is created |
| `name` | string | No | The name for the sub-account/location |
| `phone` | string | No | The phone number of the business for which sub-account is created |
| `state` | string | No | The state in which the business operates for which sub-account is created |
| `social` | object | No | The social media links for the location. |
| `twilio` | object | No | The Twilio credentials for the location. |
| `address` | string | No | The address of the business for which sub-account is created |
| `country` | string | No | The ISO 3166-1 alpha-2 country code for the location. |
| `mailgun` | object | No | The Mailgun credentials for the location. |
| `website` | string | No | The website of the business for which sub-account is created |
| `settings` | object | No | The default settings for the location. |
| `snapshot` | object | No | The snapshot to be updated in the location. |
| `timezone` | string | No | The timezone of the business for which sub-account is created |
| `companyId` | string | Yes | Company/Agency Id |
| `locationId` | string | Yes | The unique identifier of the sub-account/location to update. |
| `postalCode` | string | No | The postal code of the business for which sub-account is created |
| `prospectInfo` | object | No | Prospect information for the sub-account/location. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Remove Contact From Every Campaign

**Slug:** `HIGHLEVEL_REMOVE_CONTACT_FROM_EVERY_CAMPAIGN`

Removes a contact from all campaigns they are enrolled in. Use this action when you need to unenroll a contact from all marketing campaigns in GoHighLevel. This action is irreversible — the contact will be removed from all campaigns and would need to be re-enrolled manually if needed. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `contact_id` | string | Yes | The unique identifier of the contact to remove from all campaigns |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Remove Contact Tags

**Slug:** `HIGHLEVEL_REMOVE_CONTACT_TAGS`

Removes one or more tags from a contact in a GoHighLevel sub-account. Use this action to detach existing tags from a contact identified by its contactId. The tags to remove are provided in the request body. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tags` | array | Yes | The tags to remove from the contact. |
| `contactId` | string | Yes | The unique identifier of the contact to remove tags from. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Remove Followers Contact

**Slug:** `HIGHLEVEL_REMOVE_FOLLOWERS_CONTACT`

Removes one or more followers from a contact in a GoHighLevel sub-account. Provide the contactId and a list of follower user IDs to remove. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `contactId` | string | Yes | The unique identifier of the contact from which to remove followers. |
| `followers` | array | Yes | A list of user IDs to remove as followers of the contact. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Remove Followers Opportunity

**Slug:** `HIGHLEVEL_REMOVE_FOLLOWERS_OPPORTUNITY`

Removes one or more followers from an existing opportunity in a GoHighLevel sub-account. Provide the opportunity id and the list of follower user IDs to remove, or set isRemoveAllFollowers to true to remove all followers. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique identifier of the opportunity to remove followers from. |
| `followers` | array | Yes | The list of follower user IDs to remove from the opportunity. |
| `isRemoveAllFollowers` | boolean | No | When true, removes all followers from the opportunity regardless of the followers list. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Search Contacts

**Slug:** `HIGHLEVEL_SEARCH_CONTACTS`

Searches for contacts in a GoHighLevel sub-account using advanced filters, sorting, and pagination. Use this action to find contacts matching specific criteria within a location. The locationId is required and identifies the sub-account to search. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | integer | No | The page number of results to retrieve. |
| `sort` | array | No | An array of sort objects defining the ordering of results. Each object specifies a field and direction (asc/desc). |
| `filters` | array | No | An array of filter objects used to narrow the search. Each filter is an object describing a field, operator, and value to match. |
| `pageLimit` | integer | Yes | The maximum number of contacts to return per page. |
| `locationId` | string | Yes | The unique identifier of the sub-account (location) whose contacts should be searched. |
| `searchAfter` | array | No | Cursor values used for deep pagination. Pass the searchAfter value from the last contact of the previous page to fetch the next page. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Search Conversation AI Agents

**Slug:** `HIGHLEVEL_SEARCH_CONVERSATION_AI_AGENTS`

Searches for AI agents based on various criteria including name, status, and configuration. Use this action when you need to find conversation AI agents in GoHighLevel with support for advanced filtering and full-text search capabilities. Supports full-text search across agent names and descriptions. The target location is derived from the authenticated token. Results can be capped with the limit parameter. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of agents to return per page. Defaults to 25. |
| `query` | string | No | Full-text search query to match against agent names and descriptions. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Search Conversations

**Slug:** `HIGHLEVEL_SEARCH_CONVERSATIONS`

Returns a list of all conversations matching the search criteria along with the sort and filter options selected. Use this action when you need to search and retrieve conversations from GoHighLevel with various filtering options such as status, assigned user, contact, message type, direction, and more. Required headers (handled automatically): Version: 2021-04-15 At least `locationId` is required to perform the search. Additional filters can narrow down results based on assigned users, followers, mentions, contact details, message characteristics, and conversation status.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | No | The ID of the conversation to retrieve. |
| `sort` | string ("asc" | "desc") | No | Sort order for conversation search results. |
| `limit` | integer | No | Limit of conversations to return. Default is 20. |
| `query` | string | No | Search parameter as a string. |
| `sortBy` | string ("last_manual_message_date" | "last_message_date" | "score_profile") | No | Field to sort conversations by. |
| `status` | string ("all" | "read" | "unread" | "starred" | "recents") | No | Status of the conversation to filter by. |
| `mentions` | string | No | User ID of the mention. Multiple values are comma separated. |
| `contactId` | string | No | Filter conversations by contact ID. |
| `followers` | string | No | User IDs of followers to filter conversations by. Multiple IDs can be provided as comma-separated values. |
| `assignedTo` | string | No | User IDs that conversations are assigned to. Multiple IDs can be provided as comma-separated values. Use 'unassigned' to fetch conversations not assigned to any user. |
| `locationId` | string | Yes | The unique identifier of the location/sub-account to search conversations for. |
| `scoreProfile` | string | No | ID of score profile on which conversations should get filtered out. |
| `startAfterDate` | string | No | Search to begin after the specified date - should contain the sort value of the last document. |
| `lastMessageType` | string ("TYPE_CALL" | "TYPE_SMS" | "TYPE_EMAIL" | "TYPE_SMS_REVIEW_REQUEST" | "TYPE_WEBCHAT" | "TYPE_SMS_NO_SHOW_REQUEST" | "TYPE_CAMPAIGN_SMS" | "TYPE_CAMPAIGN_CALL" | "TYPE_CAMPAIGN_EMAIL" | "TYPE_CAMPAIGN_VOICEMAIL" | "TYPE_FACEBOOK" | "TYPE_CAMPAIGN_FACEBOOK" | "TYPE_CAMPAIGN_MANUAL_CALL" | "TYPE_CAMPAIGN_MANUAL_SMS" | "TYPE_GMB" | "TYPE_CAMPAIGN_GMB" | "TYPE_REVIEW" | "TYPE_INSTAGRAM" | "TYPE_WHATSAPP" | "TYPE_CUSTOM_SMS" | "TYPE_CUSTOM_EMAIL" | "TYPE_CUSTOM_PROVIDER_SMS" | "TYPE_CUSTOM_PROVIDER_EMAIL" | "TYPE_IVR_CALL" | "TYPE_ACTIVITY_CONTACT" | "TYPE_ACTIVITY_INVOICE" | "TYPE_ACTIVITY_PAYMENT" | "TYPE_ACTIVITY_OPPORTUNITY" | "TYPE_LIVE_CHAT" | "TYPE_LIVE_CHAT_INFO_MESSAGE" | "TYPE_ACTIVITY_APPOINTMENT" | "TYPE_FACEBOOK_COMMENT" | "TYPE_INSTAGRAM_COMMENT" | "TYPE_CUSTOM_CALL" | "TYPE_INTERNAL_COMMENT" | "TYPE_ACTIVITY_EMPLOYEE_ACTION_LOG") | No | Type of the last message in the conversation. |
| `scoreProfileMax` | integer | No | Maximum value for score. |
| `scoreProfileMin` | integer | No | Minimum value for score. |
| `sortScoreProfile` | string | No | ID of score profile on which sortBy.scoreProfile should sort on. |
| `lastMessageAction` | string ("automated" | "manual") | No | Action of the last outbound message in the conversation. |
| `lastMessageDirection` | string ("inbound" | "outbound") | No | Direction of the last message in the conversation. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Search Duplicate Contact

**Slug:** `HIGHLEVEL_SEARCH_DUPLICATE_CONTACT`

Searches for duplicate contacts in a GoHighLevel location. Use this action when you need to find contacts that may already exist in the system before creating a new contact. If `Allow Duplicate Contact` is disabled under Settings, the global unique identifier will be used for searching the contact. If the setting is enabled, first priority for search is `email` and the second priority will be `phone`. At least one of `email` or `number` should be provided for the search to return meaningful results. If neither is provided, an empty list may be returned. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `email` | string | No | Email address to search for duplicate contacts. Pass in URL Encoded form if special characters are present. |
| `number` | string | No | Phone number to search for duplicate contacts. Pass in URL Encoded form if special characters are present. |
| `locationId` | string | Yes | The unique identifier of the location/sub-account to search for duplicate contacts. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Search Links

**Slug:** `HIGHLEVEL_SEARCH_LINKS`

Searches for trigger links within a GoHighLevel location. Use this action when you need to find or retrieve a list of trigger links based on search criteria. The search supports filtering by a query string and pagination via skip/limit parameters. Results are scoped to the specified location ID. Required headers (handled automatically): Version: 2021-04-15

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `skip` | integer | No | Number of results to skip for pagination. |
| `limit` | integer | No | Maximum number of links to return per request. |
| `query` | string | No | Search query string to filter links by name or other attributes. |
| `locationId` | string | Yes | The unique identifier of the location/sub-account to search links for. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Search Locations

**Slug:** `HIGHLEVEL_SEARCH_LOCATIONS`

Searches for sub-accounts (locations) within a GoHighLevel agency. Use this action to look up locations belonging to a company, optionally filtering by email and paginating through the results using skip and limit. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `skip` | integer | No | The number of records to skip before starting to return results, used for pagination. |
| `email` | string | No | Filter locations by the email address associated with the location. |
| `limit` | integer | No | The maximum number of locations to return in a single page of results. |
| `order` | string | No | The sort order to apply to the results (e.g., 'asc' or 'desc'). |
| `companyId` | string | No | The unique identifier of the company (agency) whose sub-accounts (locations) should be searched. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Search Object Records

**Slug:** `HIGHLEVEL_SEARCH_OBJECT_RECORDS`

Searches records of a custom object in a GoHighLevel sub-account. Use this action to find records of a given object schema by querying its searchable properties. The schemaKey identifies the object, locationId identifies the sub-account, and query drives the search. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | number | Yes | The page number of results to retrieve (1-based). |
| `query` | string | Yes | Search query using your searchable properties. For example, if you have a custom object called "Pets" with "name" configured as a searchable property, pass name:Buddy to search for pets with the name "Buddy". |
| `pageLimit` | number | Yes | The maximum number of records to return per page. |
| `schemaKey` | string | Yes | The key of the custom object schema whose records are searched (e.g. 'custom_objects.pets'). |
| `locationId` | string | Yes | The unique identifier of the sub-account (location) to search records in. |
| `searchAfter` | array | Yes | Cursor values used for pagination, taken from the searchAfter field of the previous page's last record. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Search Opportunities

**Slug:** `HIGHLEVEL_SEARCH_OPPORTUNITIES`

Searches for opportunities within a GoHighLevel sub-account. Use this action to find and filter opportunities by pipeline, stage, contact, assigned user, status, date, and more. The location_id is required and identifies the sub-account to search. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `q` | string | No | A free-text search query to filter opportunities. |
| `id` | string | No | The unique identifier of a specific opportunity to fetch. |
| `date` | string | No | Filter opportunities by a specific date. |
| `page` | integer | No | The page number of results to retrieve. |
| `limit` | integer | No | The maximum number of opportunities to return per page. |
| `order` | string | No | The sort order for the results (e.g. asc or desc). |
| `status` | string | No | The opportunity status to filter by (e.g. open, won, lost, abandoned, all). |
| `country` | string | No | Filter opportunities by country. |
| `end_date` | string | No | Filter opportunities up to this end date. |
| `get_notes` | boolean | No | When true, includes related notes in the response. |
| `get_tasks` | boolean | No | When true, includes related tasks in the response. |
| `contact_id` | string | No | The unique identifier of the contact to filter opportunities by. |
| `assigned_to` | string | No | The unique identifier of the user the opportunities are assigned to. |
| `campaign_id` | string | No | The unique identifier of the campaign to filter opportunities by. |
| `location_id` | string | Yes | The unique identifier of the sub-account (location) to search opportunities within. |
| `pipeline_id` | string | No | The unique identifier of the pipeline to filter opportunities by. |
| `start_after` | string | No | Cursor timestamp used for pagination; returns results after this value. |
| `start_after_id` | string | No | Cursor id used for pagination; returns results after this id. |
| `pipeline_stage_id` | string | No | The unique identifier of the pipeline stage to filter opportunities by. |
| `get_calendar_events` | boolean | No | When true, includes related calendar events in the response. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Search Opportunities Advanced

**Slug:** `HIGHLEVEL_SEARCH_OPPORTUNITIES_ADVANCED`

Performs an advanced search for opportunities within a GoHighLevel sub-account. Use this action to query opportunities with pagination and optionally include related entities such as notes, tasks, calendar events, and unread conversations for each result. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | number | Yes | The page number of results to retrieve. |
| `limit` | number | Yes | The maximum number of opportunities to return per page. |
| `query` | string | Yes | The search query string used to match opportunities. |
| `locationId` | string | Yes | The unique identifier of the sub-account (location) to search opportunities within. |
| `searchAfter` | array | Yes | Cursor values used for deep pagination, returned from a previous search response. |
| `additionalDetails` | object | Yes | Flags controlling which additional related entities to include for each opportunity. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Search Users

**Slug:** `HIGHLEVEL_SEARCH_USERS`

Searches users in a HighLevel company and location. Use this action to harvest user IDs for assignment, follower, schedule, and calendar-resource workflows. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `skip` | integer | No | Number of users to skip before returning results. |
| `limit` | integer | No | Maximum number of users to return. |
| `query` | string | No | Search text for matching users. |
| `companyId` | string | Yes | The company or agency identifier. |
| `locationId` | string | Yes | The sub-account location identifier. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Send Message

**Slug:** `HIGHLEVEL_SEND_MESSAGE`

Sends a message to a contact in a GoHighLevel sub-account across a channel (SMS, RCS, Email, WhatsApp, Instagram, or Facebook). Use this action to deliver outbound messages, schedule them, or reply within an existing conversation thread. The message type and contactId are required. Required headers (handled automatically): Version: 2021-04-15

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `html` | string | No | HTML content of the message. |
| `type` | string ("SMS" | "RCS" | "Email" | "WhatsApp" | "IG" | "FB") | Yes | Type of message being sent (one of SMS, RCS, Email, WhatsApp, IG, FB). |
| `emailCc` | array | No | Array of CC email addresses. |
| `emailTo` | string | No | Email address to send to, if different from the contact's primary email. |
| `message` | string | No | Text content of the message. |
| `subType` | object | No | Subtype of the message being sent. |
| `subject` | string | No | Subject line for email messages. |
| `emailBcc` | array | No | Array of BCC email addresses. |
| `threadId` | string | No | ID of the message thread. For email messages, this is the message ID that contains multiple email messages in the thread. |
| `toNumber` | string | No | Recipient phone number for outbound messages. |
| `contactId` | string | Yes | ID of the contact receiving the message. |
| `emailFrom` | string | No | Email address to send from. |
| `fromNumber` | string | No | Phone number used as the sender number for outbound messages. |
| `templateId` | string | No | ID of the message template. |
| `attachments` | array | No | Array of attachment URLs. |
| `appointmentId` | string | No | ID of the associated appointment. |
| `replyMessageId` | string | No | ID of the message being replied to. |
| `scheduledTimestamp` | integer | No | UTC timestamp (in seconds) at which the message should be scheduled. |
| `conversationProviderId` | string | No | ID of the conversation provider. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Set Default Brand Voice

**Slug:** `HIGHLEVEL_SET_DEFAULT_BRAND_VOICE`

Sets a brand voice as the default for a location. Use this action when you need to designate a specific brand voice as the default for a location, which automatically unsets the previous default brand voice. This action is idempotent - setting the same brand voice as default multiple times will return a successful response.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `location_id` | string | Yes | The unique identifier of the location |
| `brand_voice_id` | string | Yes | The unique identifier of the brand voice to set as default |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Task Search

**Slug:** `HIGHLEVEL_TASK_SEARCH`

Searches tasks within a GoHighLevel sub-account (location). Use this action to find tasks filtered by contact, assigned user, completion status, a free-text query, or business, with pagination support via limit and skip. The locationId is required and identifies the sub-account to search within. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `skip` | number | No | Number of tasks to skip for pagination. Defaults to 0. |
| `limit` | number | No | Maximum number of tasks to return. Defaults to 25. |
| `query` | string | No | Search value to match tasks against. |
| `completed` | boolean | No | Filter by task completion status. True for completed tasks, false for pending tasks. |
| `contactId` | array | No | Filter tasks by these contact ids. |
| `assignedTo` | array | No | Filter tasks by these assigned user ids. |
| `businessId` | string | No | Filter tasks by this business id. |
| `locationId` | string | Yes | The unique identifier of the sub-account (location) to search tasks in. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Association

**Slug:** `HIGHLEVEL_UPDATE_ASSOCIATIONS`

Updates the labels of an association by its ID. This action allows you to modify the firstObjectLabel and secondObjectLabel of an existing association. Use this action when you need to update the label configuration of an existing association in a specific location/sub-account. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `associationId` | string | Yes | The unique identifier of the association to update |
| `firstObjectLabel` | string | Yes | The label for the first object in the association (e.g., 'student') |
| `secondObjectLabel` | string | Yes | The label for the second object in the association (e.g., 'teacher') |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Business

**Slug:** `HIGHLEVEL_UPDATE_BUSINESS`

Updates an existing business with the provided information. Use this action when you need to modify details of an existing business entity within the HighLevel system. All fields except business_id are optional. Only provide the fields you want to update; omitted fields will retain their current values. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `city` | string | No | City where the business is located |
| `name` | string | No | The name of the business |
| `email` | string | No | Email address of the business |
| `phone` | string | No | Phone number of the business in E.164 format |
| `state` | string | No | State or province where the business is located |
| `address` | string | No | Street address of the business |
| `country` | string | No | Country code in ISO 3166-1 alpha-2 format |
| `website` | string | No | Website URL of the business |
| `business_id` | string | Yes | The unique identifier of the business to update |
| `description` | string | No | Description of the business |
| `postal_code` | string | No | Postal code or ZIP code of the business |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Calendar

**Slug:** `HIGHLEVEL_UPDATE_CALENDAR`

Updates an existing calendar by its unique identifier. Use this action when you need to modify the settings, availability, team member assignments, or other configurations of an existing GoHighLevel booking calendar. Only include the fields you want to change — all fields except calendarId are optional. Required headers (handled automatically): Version: 2021-04-15

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | Name of the calendar. |
| `slug` | string | No | URL slug for the calendar booking page. |
| `notes` | string | No | Internal notes about the calendar (not visible to clients). |
| `formId` | string | No | Custom form ID to use for intake. |
| `groupId` | string | No | ID of the calendar group this calendar belongs to. |
| `pixelId` | string | No | Tracking pixel ID for analytics. |
| `isActive` | boolean | No | Whether the calendar is active (published) or a draft. |
| `eventType` | string ("RoundRobin_OptimizeForAvailability" | "RoundRobin_OptimizeForEqualDistribution") | No | Round-robin assignment strategy for team members. |
| `guestType` | string ("count_only" | "collect_detail") | No | Whether to collect guest details or only count them. |
| `openHours` | array | No | Standard availability windows. For custom availability, use availabilities instead. |
| `preBuffer` | number | No | Additional time (in preBufferUnit) added before each appointment. |
| `recurring` | object | No | Recurring appointment configuration. |
| `alertEmail` | string | No | Email address to receive booking alerts. |
| `calendarId` | string | Yes | The unique identifier of the calendar to update. |
| `eventColor` | string | No | Color of calendar events displayed in the booking interface. |
| `eventTitle` | string | No | Template for the event title (supports contact merge fields). |
| `slotBuffer` | number | No | Additional time (in slotBufferUnit) added after each appointment. |
| `widgetSlug` | string | No | Slug for the embedded booking widget. |
| `widgetType` | string ("default" | "classic") | No | Widget layout style: 'default' for neo layout, 'classic' for classic layout. |
| `autoConfirm` | boolean | No | Whether bookings are automatically confirmed without manual approval. |
| `description` | string | No | Description or notes about the calendar. |
| `teamMembers` | array | No | Team members assigned to the calendar. Required for round_robin, collective, class, and service_booking types. |
| `calendarType` | string ("round_robin" | "event" | "class_booking" | "collective" | "service_booking" | "personal") | No | Type of calendar: round_robin, event, class_booking, collective, service_booking, or personal. |
| `consentLabel` | string | No | Custom consent label shown to clients during booking. |
| `slotDuration` | number | No | Duration of the meeting in slotDurationUnit. |
| `slotInterval` | number | No | Time between consecutive booking slots shown in the calendar. |
| `notifications` | array | No | Deprecated — prefer Calendar Notifications APIs. |
| `preBufferUnit` | string ("mins" | "hours") | No | Unit for pre-buffer time. |
| `stickyContact` | boolean | No | Whether to always assign the same contact to the same team member. |
| `availabilities` | array | No | Custom availability entries. For standard availability, use openHours instead. |
| `formSubmitType` | string ("RedirectURL" | "ThankYouMessage") | No | How to handle form submission result. |
| `lookBusyConfig` | object | No | Look-Busy configuration to simulate busyness in availability slots. |
| `slotBufferUnit` | string ("mins" | "hours") | No | Unit for slot-buffer time. |
| `allowBookingFor` | number | No | How far in advance (in allowBookingForUnit) bookings are allowed. |
| `allowReschedule` | boolean | No | Whether clients can reschedule their own bookings. |
| `enableRecurring` | boolean | No | Enable recurring appointments. Only one member should be added to the calendar to enable this. |
| `meetingLocation` | string | No | Deprecated — use locationConfigurations or teamMembers[].locationConfigurations instead. |
| `appoinmentPerDay` | integer | No | Maximum number of appointments that can be booked per day. |
| `availabilityType` | integer ("0" | "1") | No | Determines which availability logic to use: 0 = open hours only, 1 = custom availabilities only, null = both. |
| `slotDurationUnit` | string ("mins" | "hours") | No | Unit for meeting duration. |
| `slotIntervalUnit` | string ("mins" | "hours") | No | Unit for slot interval. |
| `allowBookingAfter` | number | No | Minimum notice (in allowBookingAfterUnit) before an event can be booked. |
| `allowCancellation` | boolean | No | Whether clients can cancel their own bookings. |
| `appoinmentPerSlot` | integer | No | Maximum bookings per slot (per user) or maximum seats per slot for class calendars. |
| `isLivePaymentMode` | boolean | No | Whether payments are collected in real-time during booking. |
| `calendarCoverImage` | string | No | URL to the calendar cover image. |
| `allowBookingForUnit` | string ("days" | "weeks" | "months") | No | Unit for how far in advance bookings are allowed. |
| `allowBookingAfterUnit` | string ("hours" | "days" | "weeks" | "months") | No | Unit for minimum scheduling notice. |
| `formSubmitRedirectURL` | string | No | URL to redirect to after form submission. |
| `googleInvitationEmails` | boolean | No | Whether to send Google Calendar invitation emails. |
| `locationConfigurations` | array | No | Meeting location configurations for event calendars. |
| `formSubmitThanksMessage` | string | No | Thank-you message shown after form submission. |
| `shouldAssignContactToTeamMember` | boolean | No | Whether to automatically assign the contact to the booked team member. |
| `shouldSendAlertEmailsToAssignedMember` | boolean | No | Whether to send alert emails to the assigned team member. |
| `shouldSkipAssigningContactForExisting` | boolean | No | Whether to skip assigning a contact if one already exists. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Calendar Schedule

**Slug:** `HIGHLEVEL_UPDATE_CALENDAR_SCHEDULE`

Updates an existing calendar's availability schedule. Use this action when you need to modify the availability rules, open hours, recurring settings, or buffer times for a GoHighLevel calendar. All fields are optional—only provided fields will be updated. Required headers (handled automatically): Version: 2021-04-15

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | Name of the schedule. |
| `timezone` | string | No | Timezone for the schedule (e.g. 'America/New_York'). |
| `openHours` | array | No | Standard availability windows for recurring days. |
| `preBuffer` | number | No | Additional time (in preBufferUnit) added before each appointment. |
| `recurring` | object | No | Recurring appointment configuration. |
| `postBuffer` | number | No | Additional time (in postBufferUnit) added after each appointment. |
| `scheduleId` | string | Yes | The unique identifier of the schedule to update. |
| `preBufferUnit` | string ("mins" | "hours") | No | Unit for pre-buffer time. |
| `availabilities` | array | No | Custom availability entries for specific dates. |
| `postBufferUnit` | string ("mins" | "hours") | No | Unit for post-buffer time. |
| `lookBusyEnabled` | boolean | No | Whether look-busy simulation is enabled. |
| `lookBusyPercentage` | number | No | Percentage of slots to hide when look-busy is enabled (0-100). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Event Calendar Schedule

**Slug:** `HIGHLEVEL_UPDATE_CALENDARS_SCHEDULES_EVENT_CALENDAR`

Updates the availability schedule for a specific event calendar. Use this action when you need to modify the availability schedule configuration for an event calendar in GoHighLevel, including timezone settings and availability rules. Only the fields provided in the request body will be modified; unspecified fields retain their current values. Required headers (handled automatically): Version: 2021-07-28, Content-Type: application/json

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `rules` | array | No | List of availability rules defining when the calendar is open for bookings. |
| `timezone` | string | No | Timezone for the availability schedule (e.g., 'America/New_York'). |
| `calendarId` | string | Yes | The unique identifier of the event calendar to update. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Contact

**Slug:** `HIGHLEVEL_UPDATE_CONTACT`

Updates an existing contact in a GoHighLevel sub-account. Use this action to modify a contact's name, contact details, tags, and custom fields. The contactId identifies the contact to update; only the fields you provide are changed. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `dnd` | boolean | No | When true, enables Do Not Disturb across all channels for this contact. |
| `city` | string | No | The contact's city. |
| `name` | string | No | The contact's full name. |
| `tags` | array | No | Tags to associate with the contact. |
| `email` | string | No | The contact's email address. |
| `phone` | string | No | The contact's phone number in E.164 format. |
| `state` | string | No | The contact's state or region. |
| `source` | string | No | The source attributed to the contact. |
| `country` | string | No | The contact's country as a two-letter ISO code. |
| `website` | string | No | The contact's website URL. |
| `address1` | string | No | The contact's street address. |
| `lastName` | string | No | The contact's last name. |
| `timezone` | string | No | The contact's timezone. |
| `contactId` | string | Yes | The unique identifier of the contact to update. |
| `firstName` | string | No | The contact's first name. |
| `assignedTo` | string | No | The unique identifier of the user the contact is assigned to. |
| `postalCode` | string | No | The contact's postal/ZIP code. |
| `companyName` | string | No | The contact's company name. |
| `dateOfBirth` | string | No | The contact's date of birth. |
| `dndSettings` | object | No | Per-channel Do Not Disturb settings (keys: Call, Email, SMS, WhatsApp, GMB, FB), each an object with status/message/code. |
| `customFields` | array | No | Custom field values. Each item is an object with an 'id' (or 'key') and a 'field_value'. |
| `inboundDndSettings` | object | No | Inbound Do Not Disturb settings for the contact. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Contact Task

**Slug:** `HIGHLEVEL_UPDATE_CONTACT_TASK`

Updates a task associated with a contact in GoHighLevel. Use this action to modify an existing task's title, body, due date, completion status, or assignee. Both the contactId and taskId identify the task to update. Required headers (handled automatically): Version: 2021-07-28, Content-Type: application/json

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `body` | string | No | The description or body text of the task. |
| `title` | string | No | The title/subject of the task. |
| `taskId` | string | Yes | The unique identifier of the task to update. |
| `dueDate` | string | No | The due date for the task in ISO 8601 format. |
| `completed` | boolean | No | Whether the task should be marked as completed. |
| `contactId` | string | Yes | The unique identifier of the contact whose task to update. |
| `assignedTo` | string | No | The unique identifier of the user assigned to the task. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Conversation

**Slug:** `HIGHLEVEL_UPDATE_CONVERSATIONS`

Updates the conversation details based on the conversation ID. Use this action when you need to modify properties of an existing conversation, such as marking it as starred or updating the unread count. This action requires a valid conversation_id and location_id. Note that some field updates may be irreversible depending on the conversation state.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `starred` | boolean | No | Starred status of the conversation. |
| `feedback` | object | No | Feedback object for the conversation. |
| `location_id` | string | Yes | Location ID as string |
| `unread_count` | integer | No | Count of unread messages in the conversation. |
| `conversation_id` | string | Yes | The unique identifier of the conversation to update. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Custom Field

**Slug:** `HIGHLEVEL_UPDATE_CUSTOM_FIELD`

Updates an existing custom field in a GoHighLevel location. Use this action to modify a custom field's name, description, placeholder, options, and display settings. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique identifier of the custom field to update. |
| `name` | string | No | Field name. |
| `options` | array | No | Options for the field. Important: Providing options will completely replace the existing options array. You must include all existing options alongside any new options you wish to add. Removal of options is not supported through this update. Applicable only for SINGLE_OPTIONS, MULTIPLE_OPTIONS, RADIO, CHECKBOX, TEXTBOX_LIST types. |
| `locationId` | string | Yes | Location Id. |
| `description` | string | No | Description of the field. |
| `placeholder` | string | No | Placeholder text for the field. |
| `showInForms` | boolean | Yes | Whether the field should be shown in forms. |
| `maxFileLimit` | number | No | Maximum file limit for uploads. Applicable only for fields with a data type of FILE_UPLOAD. |
| `acceptedFormats` | string | No | Allowed file formats for uploads. Options include: .pdf, .docx, .doc, .jpg, .jpeg, .png, .gif, .csv, .xlsx, .xls, all. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Custom Field Folder

**Slug:** `HIGHLEVEL_UPDATE_CUSTOM_FIELD_FOLDER`

Updates an existing custom field folder in a GoHighLevel sub-account. The id identifies the folder to update; provide the folder name and location id. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique identifier of the custom field folder to update. |
| `name` | string | Yes | Field name. |
| `locationId` | string | Yes | Location Id. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Custom Object

**Slug:** `HIGHLEVEL_UPDATE_CUSTOM_OBJECT`

Updates an existing custom object schema in a GoHighLevel sub-account. Use this action to modify the object's labels, description, and searchable properties. The key identifies the custom object schema to update. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `key` | string | Yes | The key of the custom object schema to update. |
| `labels` | object | No | Display labels for the custom object. |
| `locationId` | string | Yes | The sub-account (location) identifier. |
| `description` | string | No | Pet Object`s description. |
| `searchableProperties` | array | Yes | Searchable Fields: Provide the field key of your object that you want to search on, using the format (custom_object.<object_name>.<field_key>). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Custom Value

**Slug:** `HIGHLEVEL_UPDATE_CUSTOM_VALUE`

Updates an existing custom value within a GoHighLevel sub-account (location). Provide the locationId and the custom value id to identify the record, along with the new name and value. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique identifier of the custom value to update. |
| `name` | string | Yes | The name of the custom value. |
| `value` | string | Yes | The content/value to store for the custom value. |
| `locationId` | string | Yes | The unique identifier of the sub-account (location) that owns the custom value. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Display Priority

**Slug:** `HIGHLEVEL_UPDATE_DISPLAY_PRIORITY`

Updates the display priority (ordering) of products within a GoHighLevel store. Provide the storeId along with the location context and the list of products with their display priorities. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `altId` | string | Yes | Location Id or Agency Id. |
| `altType` | string ("location") | Yes | The type of the alt id. Allowed value: 'location'. |
| `storeId` | string | Yes | The unique identifier of the store whose product display priorities are being updated. |
| `products` | array | Yes | Array of products with their display priorities. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Email Template

**Slug:** `HIGHLEVEL_UPDATE_EMAILS_TEMPLATES`

Updates an existing email template for the specified location. Use this action when you need to modify an email template's name, subject, content, or other properties. All request body fields are optional - only include the fields you want to update. The template will be associated with the specified location and template ID. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `html` | string | No | Updated HTML content of the email template. |
| `name` | string | No | Updated name of the email template. |
| `text` | string | No | Updated plain text content of the email template. |
| `subject` | string | No | Updated subject line of the email template. |
| `category` | string | No | Updated category of the template. |
| `folderId` | string | No | Updated folder ID where the template is stored. |
| `locationId` | string | Yes | The unique identifier of the location associated with the template. |
| `templateId` | string | Yes | The unique identifier of the email template to update. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Inventory

**Slug:** `HIGHLEVEL_UPDATE_INVENTORY`

Updates the inventory for one or more prices in a GoHighLevel sub-account. Provide the altId/altType identifying the location and a list of items, each referencing a priceId along with its available quantity and out-of-stock purchase settings. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `altId` | string | Yes | Location Id or Agency Id. |
| `items` | array | Yes | Array of items to update in the inventory. |
| `altType` | string ("location") | Yes | The type of the altId. Currently only 'location' is supported. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Link

**Slug:** `HIGHLEVEL_UPDATE_LINK`

Updates an existing trigger link in a GoHighLevel sub-account. Use this action to change the link's name or redirect destination. The linkId identifies the link to update. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | The name of the trigger link. |
| `linkId` | string | Yes | The unique identifier of the trigger link to update. |
| `redirectTo` | string | Yes | The destination URL the trigger link redirects to. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Bulk Delete Media Files

**Slug:** `HIGHLEVEL_UPDATE_MEDIAS_DELETE_FILES`

Bulk soft-deletes or trashes multiple files and folders in a single request. Use this action when you need to efficiently remove multiple media items at once by setting their status to either 'deleted' or 'trashed'. This operation affects only the specified files and does not permanently remove them from the system. This action is irreversible — files that are deleted or trashed cannot be recovered through this action. Consider using this for batch cleanup operations where you need to remove multiple media files from the HighLevel media library. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `altId` | string | Yes | Location identifier that owns the files |
| `status` | string ("deleted" | "trashed") | Yes | Status to set for the files (deleted or trashed) |
| `altType` | string ("location") | Yes | Type of entity that owns the files (currently only 'location' is supported) |
| `filesToBeDeleted` | array | Yes | Array of file objects to be deleted or trashed |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Bulk Update Media Files

**Slug:** `HIGHLEVEL_UPDATE_MEDIAS_UPDATE_FILES`

Updates metadata or status of multiple files and folders in bulk. Use this action when you need to rename multiple media files or folders in a single request. This action requires the location ID (altId), the entity type (altType), and an array of file objects containing their IDs and optional new names. Note: This is an update (not create) operation — only the name field can be modified; other metadata retains its current values. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `altId` | string | Yes | Location identifier that owns the files or folders |
| `altType` | string ("location") | Yes | Type of entity that owns the files (currently only 'location' is supported) |
| `filesToBeUpdated` | array | Yes | Array of file objects to be updated. Each object must include the file ID and optionally a new name. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Note

**Slug:** `HIGHLEVEL_UPDATE_NOTE`

Updates an existing note attached to a contact in a GoHighLevel sub-account. Use this action to modify the note's body, title, color, or pinned status. The contactId and id identify the note to update; only the fields you provide are changed. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique identifier of the note to update. |
| `body` | string | No | The text content of the note. |
| `color` | string | No | The color associated with the note. |
| `title` | string | No | The title of the note. |
| `pinned` | boolean | No | Whether the note is pinned. |
| `userId` | string | No | The unique identifier of the user associated with the note. |
| `contactId` | string | Yes | The unique identifier of the contact the note belongs to. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Object Record

**Slug:** `HIGHLEVEL_UPDATE_OBJECT_RECORD`

Updates an existing record of a custom object (or standard object) in a GoHighLevel sub-account. Identify the record by its schemaKey and id, and provide the locationId of the owning sub-account along with the fields to change. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique identifier of the object record to update. |
| `owner` | array | No | Owner (User's id). Limited to 1 for now. Only supported with custom objects. |
| `followers` | array | No | Follower (User's ids). Limited to 10 for now. |
| `schemaKey` | string | Yes | The key of the object schema whose record is being updated. |
| `locationId` | string | Yes | The sub-account (location) identifier the record belongs to. |
| `properties` | object | No | Properties of the record as key/value pairs. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Opportunity

**Slug:** `HIGHLEVEL_UPDATE_OPPORTUNITY`

Updates an existing opportunity in a GoHighLevel sub-account. Use this action to modify an opportunity's name, pipeline, stage, status, monetary value, assignee, and custom fields. The opportunityId identifies the opportunity to update; only the fields you provide are changed. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | The name of the opportunity. |
| `status` | string ("open" | "won" | "lost" | "abandoned") | No | The status of the opportunity. |
| `assignedTo` | string | No | The unique identifier of the user the opportunity is assigned to. |
| `pipelineId` | string | No | The unique identifier of the pipeline the opportunity belongs to. |
| `customFields` | array | No | Custom field values. Each item is an object with an 'id' (or 'key') and a 'field_value'. |
| `monetaryValue` | number | No | The monetary value associated with the opportunity. |
| `opportunityId` | string | Yes | The unique identifier of the opportunity to update. |
| `pipelineStageId` | string | No | The unique identifier of the pipeline stage the opportunity is in. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Opportunity Status

**Slug:** `HIGHLEVEL_UPDATE_OPPORTUNITY_STATUS`

Updates the status of an existing opportunity in a GoHighLevel sub-account. Use this action to move an opportunity to open, won, lost, or abandoned. The opportunityId identifies the opportunity to update; a lostReasonId may be supplied when marking an opportunity as lost. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `status` | string ("open" | "won" | "lost" | "abandoned") | Yes | The new status for the opportunity. |
| `lostReasonId` | string | No | The unique identifier of the lost reason, applicable when the status is set to 'lost'. |
| `opportunityId` | string | Yes | The unique identifier of the opportunity whose status is being updated. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Price By Id For Product

**Slug:** `HIGHLEVEL_UPDATE_PRICE_BY_ID_FOR_PRODUCT`

Updates an existing price for a product in a GoHighLevel sub-account. Use this action to modify a price's name, type, currency, amount, recurring details, inventory settings, and other attributes. The productId and priceId identify the price to update. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `sku` | string | No | The unique identifier of the SKU associated with the price. |
| `meta` | object | No | Additional metadata associated with the price, including source, sourceId, stripePriceId, and internalSource. |
| `name` | string | Yes | The name of the price. |
| `type` | string ("one_time" | "recurring") | Yes | The type of the price (one_time or recurring). |
| `amount` | number | Yes | The amount of the price. (min: 0) |
| `userId` | string | No | The unique identifier of the user who created the price. |
| `priceId` | string | Yes | The unique identifier of the price to update. |
| `currency` | string | Yes | The currency of the price. |
| `setupFee` | number | No | The setup fee for the price. |
| `productId` | string | Yes | The unique identifier of the product the price belongs to. |
| `recurring` | object | No | The recurring details of the price (if type is recurring), including interval and intervalCount. |
| `locationId` | string | Yes | The unique identifier of the location associated with the price. |
| `description` | string | No | A brief description of the price. |
| `totalCycles` | number | No | The total number of billing cycles for the price. (min: 1) |
| `trialPeriod` | number | No | The trial period duration in days (if applicable). |
| `compareAtPrice` | number | No | The compare at price for the price. |
| `trackInventory` | boolean | No | Need to track inventory stock quantity. |
| `digitalDelivery` | array | No | Digital delivery options. |
| `shippingOptions` | object | No | Shipping options of the price, including weight and dimensions. |
| `isDigitalProduct` | boolean | No | Whether the product is a digital product. |
| `membershipOffers` | array | No | An array of membership offers associated with the price. |
| `variantOptionIds` | array | No | An array of variant option IDs associated with the price. |
| `availableQuantity` | number | No | Available inventory stock quantity. |
| `allowOutOfStockPurchases` | boolean | No | Continue selling when out of stock. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Product By Id

**Slug:** `HIGHLEVEL_UPDATE_PRODUCT_BY_ID`

Updates an existing product in a GoHighLevel sub-account by its productId. Use this action to modify a product's name, type, description, media, variants, pricing references, taxes, and other attributes. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `seo` | object | No | SEO data for the product. |
| `name` | string | Yes | The name of the product. |
| `slug` | string | No | The slug using which the product navigation will be handled. |
| `image` | string | No | The URL for the product image. |
| `label` | object | No | Details for the product label. |
| `taxes` | array | No | List of ids of Taxes attached to the Product. If taxes are passed, isTaxesEnabled should be true. |
| `medias` | array | No | An array of medias for the product. |
| `prices` | array | No | The prices of the product. |
| `variants` | array | No | An array of variants for the product. |
| `productId` | string | Yes | The unique identifier of the product to update. |
| `locationId` | string | Yes | The unique identifier for the location. |
| `description` | string | No | A brief description of the product. |
| `productType` | string ("DIGITAL" | "PHYSICAL" | "SERVICE" | "PHYSICAL/DIGITAL") | Yes | The type of the product. |
| `taxInclusive` | boolean | No | Whether the taxes should be included in the purchase price. |
| `collectionIds` | array | No | An array of category Ids for the product. |
| `isLabelEnabled` | boolean | No | Is the product label enabled. If this is true, label object cannot be empty. |
| `isTaxesEnabled` | boolean | No | Are there any taxes attached to the product. If this is true, taxes array cannot be empty. |
| `availableInStore` | boolean | No | Indicates whether the product is available in-store. |
| `statementDescriptor` | string | No | The statement descriptor for the product. |
| `automaticTaxCategoryId` | string | No | Tax category ID for Automatic taxes calculation. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Product Collection

**Slug:** `HIGHLEVEL_UPDATE_PRODUCT_COLLECTION`

Updates an existing product collection in a GoHighLevel sub-account. The collectionId identifies the collection to update; only the fields you provide are changed. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `seo` | object | No | SEO metadata for the product collection. |
| `name` | string | No | Name of the Product Collection. |
| `slug` | string | No | Slug of the Product Collection which helps in navigation. |
| `altId` | string | Yes | Location Id. |
| `image` | string | No | The URL of the image that is going to be displayed as the collection Thumbnail. |
| `altType` | string ("location") | Yes | The type of alt. For now it is only LOCATION. |
| `collectionId` | string | Yes | The unique identifier of the product collection to update. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Product Review

**Slug:** `HIGHLEVEL_UPDATE_PRODUCTS_REVIEWS`

Updates the status, reply, and other details of a product review. Use this action when you need to moderate, respond to, or modify an existing product review in the HighLevel system. This action allows updating the review status (approved/pending/rejected), adding a reply, or modifying the review headline, detail, and rating. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `altId` | string | Yes | Location Id or Agency Id |
| `reply` | array | No | Reply to the review |
| `detail` | string | No | Detailed review text of the product |
| `rating` | number | No | Rating of the product (0-5) |
| `status` | string ("approved" | "pending" | "rejected") | Yes | The status of the review (approved, pending, or rejected) |
| `altType` | string ("location") | Yes | The type of altId - must be 'location' |
| `headline` | string | No | The headline of the review |
| `productId` | string | Yes | The product ID associated with the review |
| `review_id` | string | Yes | The unique identifier of the product review to update |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Recurring Task

**Slug:** `HIGHLEVEL_UPDATE_RECURRING_TASK`

Updates an existing recurring task for a GoHighLevel sub-account (location). Use this action to modify a recurring task's title, description, assigned contacts/owners, and recurrence rules. The locationId and id identify the task to update. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique identifier of the recurring task to update. |
| `title` | string | No | Name of the task. |
| `owners` | array | No | User Ids the task is assigned to. |
| `contactIds` | array | No | Contact Ids associated with the task. |
| `locationId` | string | Yes | The unique identifier of the sub-account (location). |
| `description` | string | No | Description of the task. |
| `rruleOptions` | object | No | Recurring rules controlling how and when the task recurs (interval, start/end dates, day/month settings, count, etc.). |
| `ignoreTaskCreation` | boolean | No | When true, the initial task is not created. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Store Status

**Slug:** `HIGHLEVEL_UPDATE_STORE_STATUS`

Includes or excludes products from a GoHighLevel store. Provide the storeId along with the action ('include' or 'exclude') and the list of product IDs to update their association with the store. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `altId` | string | Yes | Location Id or Agency Id. |
| `action` | string ("include" | "exclude") | Yes | Action to include or exclude the product from the store. |
| `altType` | string ("location") | Yes | The type of the alt id. Currently only 'location' is supported. |
| `storeId` | string | Yes | The unique identifier of the store to update. |
| `productIds` | array | Yes | Array of product IDs to include in or exclude from the store. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Tag

**Slug:** `HIGHLEVEL_UPDATE_TAG`

Updates an existing tag for the specified location. Use this action when you need to modify a tag's name within a location in GoHighLevel. The tag will be updated in the location identified by the location_id parameter. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | The new name for the tag. |
| `tag_id` | string | Yes | The unique identifier of the tag to update. |
| `location_id` | string | Yes | The unique identifier of the location where the tag exists. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Task Completed

**Slug:** `HIGHLEVEL_UPDATE_TASK_COMPLETED`

Updates the completed status of a task associated with a contact. Use this action when you need to mark a task as completed or uncompleted for a specific contact in GoHighLevel. This action modifies the completion status of an existing task identified by its ID. Required headers (handled automatically): Version: 2021-07-28, Content-Type: application/json

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `taskId` | string | Yes | The unique identifier of the task to update. |
| `completed` | boolean | Yes | Whether the task should be marked as completed. |
| `contactId` | string | Yes | The unique identifier of the contact whose task to update. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Template

**Slug:** `HIGHLEVEL_UPDATE_TEMPLATE`

Updates an existing email builder template in a GoHighLevel sub-account. Supply the template's drag-and-drop builder data, HTML content, and editor type to modify it. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `dnd` | object | Yes | The drag-and-drop builder data for the template, containing elements, attrs, and templateSettings. |
| `html` | string | Yes | The HTML content of the email template. |
| `updatedBy` | string | Yes | The identifier of the user performing the update. |
| `editorType` | string ("html" | "builder") | Yes | The editor type used for the template. One of 'html' or 'builder'. |
| `locationId` | string | Yes | The sub-account (location) identifier that owns the template. |
| `templateId` | string | Yes | The unique identifier of the email template to update. |
| `isPlainText` | boolean | No | Whether the template should be treated as plain text. |
| `previewText` | string | No | The preview text shown for the email template. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Upload File Attachments

**Slug:** `HIGHLEVEL_UPLOAD_FILE_ATTACHMENTS`

Uploads file attachments to a GoHighLevel conversation. Provide the conversationId, contactId, locationId, and a list of attachmentUrls to upload. Optionally supports group SMS uploads via chatServiceSid and isGroupSms. Required headers (handled automatically): Version: 2021-04-15

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `contactId` | string | Yes | The unique identifier of the contact associated with the conversation. |
| `isGroupSms` | string | No | Flag to indicate group SMS upload flow. When true, only 1 file upload is allowed per request. |
| `locationId` | string | Yes | The unique identifier of the sub-account (location) the conversation belongs to. |
| `attachmentUrls` | array | Yes | The list of file URLs to upload as attachments to the conversation. |
| `chatServiceSid` | string | No | Twilio chat service SID for group SMS uploads. |
| `conversationId` | string | Yes | The unique identifier of the conversation to attach the uploaded files to. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Upload File to Custom Fields

**Slug:** `HIGHLEVEL_UPLOAD_FILE_CUSTOM_FIELDS`

Upload files to custom fields. Use when you need to attach files to contacts, opportunities, or custom object records via custom field file upload functionality. The 'id' parameter should be the ID of the Contact, Opportunity, or Custom Field that the file should be associated with. The actual file field within the custom field configuration will be updated with the uploaded file URL. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Id of the entity to upload the file to. This can be a Contact ID, Opportunity ID, or Custom Field ID depending on which entity the custom field belongs to. |
| `file` | object | No | The file to upload to the custom field. The file name should match the filename to use (e.g., 'document.pdf', 'spreadsheet.xlsx'). Allowed file types depend on the custom field configuration. |
| `fileName` | string | No | The filename to use for the uploaded file (e.g., 'document.pdf', 'spreadsheet.xlsx'). Required when using 'file_content' parameter. |
| `maxFiles` | integer | No | Maximum number of files allowed for upload. Defaults to the field's configured limit. |
| `locationId` | string | Yes | The unique identifier of the location/sub-account |
| `contentType` | string | No | MIME type of the file (e.g., 'text/csv', 'application/pdf'). If not provided, will be inferred from filename extension. |
| `fileContent` | string | No | Base64 encoded file content. Alternative to 'file' parameter for direct file content upload. Use this when you have the file content as a string. The 'file_name' parameter is required when using this. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Upload Media File

**Slug:** `HIGHLEVEL_UPLOAD_MEDIA_FILE`

Upload a file to the Highlevel Media Library. Use when you need to upload documents, images, or videos to store them in the media library for use in campaigns and other features. If hosted is true, fileUrl is required. Otherwise, file is required. Maximum file size: 25 MB for regular files, 500 MB for video files.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `file` | object | No | The file to upload to the media library. The file name should match the destination filename (e.g., 'document.pdf', 'video.mp4'). Use this when not using a hosted file URL. Maximum size: 25 MB (500 MB for videos). |
| `name` | string | No | Name of the file to store in the media library. |
| `hosted` | boolean | No | Whether the file is hosted externally. If true, 'fileUrl' is required. If false or omitted, 'file' is required. |
| `fileUrl` | string | No | URL of the file to add to the media library. Required when 'hosted' is set to true. |
| `parentId` | string | No | ID of the parent folder in the media library. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Upsert Contact

**Slug:** `HIGHLEVEL_UPSERT_CONTACT`

Creates or updates a contact in a GoHighLevel sub-account. If a duplicate contact is found (based on the location's duplicate settings), it is updated; otherwise a new contact is created. The locationId is required and identifies the sub-account. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `dnd` | boolean | No | When true, enables Do Not Disturb across all channels for this contact. |
| `city` | string | No | The contact's city. |
| `name` | string | No | The contact's full name. |
| `tags` | array | No | Tags to associate with the contact. This field overwrites all current tags; to update tags it is recommended to use the Add Tag or Remove Tag API instead. |
| `email` | string | No | The contact's email address. |
| `phone` | string | No | The contact's phone number in E.164 format. |
| `state` | string | No | The contact's state or region. |
| `gender` | string | No | The contact's gender. |
| `source` | string | No | The source attributed to the contact. |
| `country` | string | No | The contact's country as a two-letter ISO code. |
| `website` | string | No | The contact's website URL. |
| `address1` | string | No | The contact's street address. |
| `lastName` | string | No | The contact's last name. |
| `timezone` | string | No | The contact's timezone. |
| `firstName` | string | No | The contact's first name. |
| `assignedTo` | string | No | The unique identifier of the user the contact is assigned to. |
| `locationId` | string | Yes | The unique identifier of the sub-account (location) the contact belongs to. |
| `postalCode` | string | No | The contact's postal/ZIP code. |
| `companyName` | string | No | The contact's company name. |
| `dateOfBirth` | string | No | The birth date of the contact. Supported formats: YYYY/MM/DD, MM/DD/YYYY, YYYY-MM-DD, MM-DD-YYYY, YYYY.MM.DD, MM.DD.YYYY, YYYY_MM_DD, MM_DD_YYYY. |
| `dndSettings` | object | No | Per-channel Do Not Disturb settings (keys: Call, Email, SMS, WhatsApp, GMB, FB), each an object with status/message/code. |
| `customFields` | array | No | Custom field values. Each item is an object with an 'id' (or 'key') and a 'field_value'. |
| `inboundDndSettings` | object | No | Inbound Do Not Disturb settings for the contact. |
| `createNewIfDuplicateAllowed` | boolean | No | Controls whether to create a new contact or update an existing duplicate. When true and the location allows duplicate contacts, a new contact is created immediately. Otherwise the normal upsert behavior applies: update an existing duplicate if found, or create a new contact. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Upsert Opportunity

**Slug:** `HIGHLEVEL_UPSERT_OPPORTUNITY`

Creates or updates an opportunity in a GoHighLevel sub-account. If an opportunity id is provided, the existing opportunity is updated; otherwise a new opportunity is created. The pipelineId and locationId are required. Required headers (handled automatically): Version: 2021-07-28

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | No | If provided, updates the existing opportunity; otherwise creates a new one. |
| `name` | string | No | The name of the opportunity. |
| `status` | string ("open" | "won" | "lost" | "abandoned") | No | The status of the opportunity. |
| `contactId` | string | Yes | The unique identifier of the contact associated with the opportunity. |
| `followers` | array | No | A list of user identifiers to set as followers of the opportunity. |
| `assignedTo` | string | No | The unique identifier of the user the opportunity is assigned to. |
| `locationId` | string | Yes | The unique identifier of the sub-account (location) the opportunity belongs to. |
| `pipelineId` | string | Yes | The unique identifier of the pipeline the opportunity belongs to. |
| `lostReasonId` | string | No | The unique identifier of the reason the opportunity was lost. |
| `monetaryValue` | number | No | The monetary value associated with the opportunity. |
| `pipelineStageId` | string | No | The unique identifier of the pipeline stage the opportunity is in. |
| `followersActionType` | string ("add" | "remove") | No | The action to apply to the opportunity's followers. |
| `isRemoveAllFollowers` | boolean | No | When true, removes all followers from the opportunity. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Validate Groups Slug

**Slug:** `HIGHLEVEL_VALIDATE_GROUPS_SLUG`

Validates whether a calendar group slug is available within a GoHighLevel sub-account (location). Use this action before creating or updating a calendar group to confirm the desired slug is not already in use. Required headers (handled automatically): Version: 2021-04-15

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `slug` | string | Yes | The slug to validate for availability within the location. |
| `locationId` | string | Yes | The unique identifier of the sub-account (location). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |
