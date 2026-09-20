# Notion

Notion centralizes notes, docs, wikis, and tasks in a unified workspace, letting teams build custom workflows for collaboration and knowledge management

- **Category:** notes
- **Auth:** OAUTH2, API_KEY
- **Composio-managed OAuth available?** Yes
- **Tools:** 57
- **Triggers:** 8
- **Slug:** `NOTION`
- **Version:** 20260915_00

## Frequently Asked Questions

### Why do Notion operations show "Composio" instead of the user's name?

Notion attributes actions to the integration itself, not the individual user. The name and logo shown come from the integration configuration. To use a custom name or logo, create your own Notion integration. See [Notion integration docs](https://developers.notion.com/docs/create-a-notion-integration).

### How do I grant access to more Notion pages?

Open Notion, go to Settings & Members, then Connections. Select the integration (Composio or your custom integration), click "Select pages" or "Manage access", and add or remove pages as needed.

### Does Notion use OAuth scopes?

No. Notion controls access by granting integrations access to specific pages and databases, not through scopes. You don't need to pass scopes when creating an auth config.

### How does Notion's access model work?

It depends on the integration type. OAuth apps (public) let users select which pages to share during authorization. Internal integrations (API key) have page access managed in the integration settings.

### Reasons for Notion Connection expiry

- **The user disconnects the integration from Notion.** Notion documents that OAuth-installed public connections appear under `Settings` -> `Connections` and can be disconnected from the workspace. If a user removes the Composio-managed or custom Notion app there, the existing token set should be treated as revoked, and the user should reconnect Notion. See Notion's official guide to [adding and managing workspace connections](https://www.notion.com/help/add-and-manage-connections-with-the-api).

- **The same Notion user connects again through the same Notion app.** When a Notion user connects to a Notion app, Notion issues a new `access_token` and `refresh_token` pair for that connection. If the same user connects to the same Notion app again, whether it is Composio-managed or custom, Notion can issue a new token pair and invalidate the older `refresh_token`. The older `access_token` may continue working for some time, but once it expires, the older connection can no longer refresh and should be treated as expired. To avoid this, keep one active Notion connection per real user for a given Notion app, reuse that existing connection in your product, and avoid asking users to reconnect repeatedly. For production Notion integrations, we strongly recommend using your own Notion app so your users' tokens are isolated to your product. Follow the [Notion OAuth setup guide](https://composio.dev/auth/notion).

### How do I set up the Notion webhook ingress endpoint?

With Composio-managed Notion credentials, the webhook ingress endpoint is already provisioned, so just create the trigger. If you bring your own Notion OAuth app, the verification flow runs in reverse from Slack's: Notion sends a verification token to the ingress endpoint, and you paste that token back into Notion to finalize.

1. **Create the endpoint.**

   ```bash
   curl -X POST "https://backend.composio.dev/api/v3.1/webhook_endpoints" \
     -H "x-api-key: <YOUR_COMPOSIO_API_KEY>" \
     -H "Content-Type: application/json" \
     -d '{"toolkit_slug": "notion", "client_id": "<YOUR_NOTION_OAUTH_CLIENT_ID>"}'
   ```

   Save the returned `id` and `webhook_url`.

2. **Paste the `webhook_url` into Notion** under your integration's Webhook settings. Notion will POST a verification token to the URL.

3. **Read the token from Composio.**

   ```bash
   curl "https://backend.composio.dev/api/v3.1/webhook_endpoints/<ENDPOINT_ID>" \
     -H "x-api-key: <YOUR_COMPOSIO_API_KEY>"
   ```

   The token is in `data.webhook_signing_secret`.

4. **Paste the token back into Notion's verify field** to complete setup. Continue with [Creating triggers](https://docs.composio.dev/docs/setting-up-triggers/creating-triggers#create-the-trigger).

### Notion database trigger fires for new pages, not updates

In manual testing, the Notion trigger fired when pages were added to the watched database, but not for updates. Test by adding a new page to the target database.

## Tools

### Add multiple content blocks (bulk, user-friendly)

**Slug:** `NOTION_ADD_MULTIPLE_PAGE_CONTENT`

Bulk-add content blocks to Notion. Text >2000 chars auto-splits. Parses markdown formatting. ⚠️ PARENT BLOCK TYPES: Content is added AS CHILDREN of parent_block_id. - To add content AFTER a heading, use PAGE ID as parent + heading ID in 'after' param. - Headings CANNOT have children unless is_toggleable=True. Simplified format: {'content': 'text', 'block_property': 'paragraph'} Full format for code: {'type': 'code', 'code': {'rich_text': [...], 'language': 'python'}} Array format also supported (auto-normalized): [{"parent_block_id": "..."}, {block1}, {block2}] => proper request structure

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `after` | string | No | Block ID to insert content AFTER (as siblings). Use this to add content after a heading: set parent_block_id to the PAGE ID and 'after' to the HEADING block ID. The new blocks appear immediately after this block at the same nesting level. If omitted, blocks are appended to the end of the parent's children list. |
| `content_blocks` | array | Yes | ⚠️ CRITICAL: Notion API enforces 2000 char limit per text.content field. Content >2000 chars auto-splits. List of blocks to add (max 100). Each item can be in EITHER format: A) Unwrapped (recommended): {'content': 'text', 'block_property': 'paragraph'} B) Wrapped: {'content_block': {'content': 'text', 'block_property': 'paragraph'}} Block content formats: 1) Simplified: {'content': 'text (REQUIRED for text blocks)', 'block_property': 'type'} 2) Full Notion: {'type': 'code', 'code': {...}} for complex blocks. Auto-features: Markdown parsing (**bold** *italic* ~~strike~~ `code` [link](url)). Valid block_property values: paragraph, heading_1-3, callout, to_do, toggle, quote, bulleted/numbered_list_item, divider. NOTE: 'code' and 'table' blocks require full Notion format with nested children/properties. 'divider' blocks don't require content. ⚠️ UNSUPPORTED: child_database (use NOTION_CREATE_DATABASE), child_page (use NOTION_CREATE_NOTION_PAGE), link_preview (read-only). |
| `parent_block_id` | string | Yes | The UUID of the parent page or block where content will be added AS CHILDREN (nested inside). ⚠️ COMMON MISTAKE: To add content AFTER a block (as siblings), use the page ID as parent_block_id and specify the block ID in the 'after' parameter. Using a heading block ID here will fail because headings cannot have children unless they are toggleable. CONTAINER BLOCKS that support children: pages, paragraph, toggle, callout, quote, bulleted_list_item, numbered_list_item, to_do, column, column_list, table, synced_block, and heading_1/2/3 ONLY if is_toggleable=True. NON-CONTAINER blocks that CANNOT have children: heading_1/2/3 (unless toggleable), divider, image, video, file, embed, bookmark, equation, breadcrumb, table_of_contents, code, and child_database (databases don't support block children - use database entry actions instead). Accepts 32 hex chars with/without hyphens. Example: '4b5f6e87-123a-456b-789c-9de8f7a9e4c1'. Get valid IDs from create_page, search_pages, or other Notion actions. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Add single content block to Notion page (Deprecated)

**Slug:** `NOTION_ADD_PAGE_CONTENT`

DEPRECATED: Use 'add_multiple_page_content' for better performance. Adds a single content block to a Notion page/block. CRITICAL: Notion API enforces a HARD LIMIT of 2000 characters per text.content field. Content exceeding 2000 chars is AUTOMATICALLY SPLIT into multiple sequential blocks. REQUIRED 'content' field for text blocks: paragraph, heading_1-3, callout, to_do, toggle, quote, list items. Parent blocks MUST be: Page, Toggle, To-do, Bulleted/Numbered List Item, Callout, or Quote. Common errors: - "content.length should be ≤ 2000": Text exceeds API limit (should be auto-handled) - "Content is required for paragraph blocks": Missing 'content' field for text blocks - "object_not_found": Invalid parent_block_id or no integration access For bulk operations, use 'add_multiple_page_content' instead.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `after` | string | No | Identifier of an existing block. The new content block will be appended immediately after this block. If omitted or null, the new block is appended to the end of the parent's children list. |
| `content_block` | string | Yes | ⚠️ CRITICAL: Notion API enforces a HARD LIMIT of 2000 characters per text.content field in rich_text arrays. Content exceeding 2000 chars will be AUTOMATICALLY split into multiple blocks.  SHORTCUT: You can pass a plain 'content' string at the top level (alongside page_id) and it will be auto-wrapped as a paragraph block.  OPTION 1 - Simplified format: Provide {'content': 'text', 'block_property': 'type'}. The 'content' field is MANDATORY for: paragraph, heading_1, heading_2, heading_3, callout, to_do, toggle, quote, bulleted_list_item, numbered_list_item. Maximum 2000 chars per content field.  OPTION 2 - Full Notion block format: Provide complete block structure with 'type' and properties. Must include 'object': 'block' and proper rich_text arrays.  For file/image/video blocks: use 'link' instead of 'content'. Common errors: Missing 'content' for text blocks, exceeding 2000 chars, invalid block structure. |
| `parent_block_id` | string | Yes | Identifier of the parent page or block to which the new content block will be added. Parent must be one of: Page, Toggle, To-do, Bulleted/Numbered List Item, Callout, or Quote. Ensure your integration has access to this block. Use other Notion actions to obtain valid IDs. Alternative field names 'page_id' or 'block_id' are also accepted and will be normalized. Must not be empty. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Append raw Notion blocks (advanced API)

**Slug:** `NOTION_APPEND_BLOCK_CHILDREN`

DEPRECATED: Use NOTION_APPEND_TEXT_BLOCKS, NOTION_APPEND_TASK_BLOCKS, NOTION_APPEND_CODE_BLOCKS, NOTION_APPEND_MEDIA_BLOCKS, NOTION_APPEND_LAYOUT_BLOCKS, or NOTION_APPEND_TABLE_BLOCKS instead. Appends raw Notion API blocks to parent. Text limited to 2000 chars per text.content field. Each block MUST have 'object':'block' and 'type'. Use rich_text arrays for text blocks.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `after` | string | No | Optional UUID of an existing child block. New blocks will be inserted after this block. Must be a valid child block ID of the parent block. If omitted, blocks are appended at the end. Do not use placeholder values like '<block_id>' or invalid IDs. |
| `block_id` | string | Yes | The unique identifier (UUID) of the parent block or page to append children to. Must be a valid Notion block/page ID in UUID format (with or without hyphens). Use NOTION_FETCH_DATA to find valid page IDs. Do not use placeholder values. |
| `children` | array | Yes | Array of block objects (max 100 per request). 2000 char limit per text.content field. Each block MUST include: - 'object': 'block' (REQUIRED) - 'type': block type (REQUIRED) - Property matching type name with 'rich_text' array for text blocks  Pass an actual array of objects, NOT a JSON string.  Text blocks (paragraph, heading_1-3, etc.) MUST use 'rich_text' array structure: {'rich_text': [{'type': 'text', 'text': {'content': 'your text here (max 2000 chars)'}}]}  TABLE BLOCKS: Table blocks support up to 2 levels of nesting. The 'table' property MUST contain: - 'table_width': number of columns (integer >= 1) - 'has_column_header': boolean - 'has_row_header': boolean - 'children': array with at least 1 table_row block Each table_row MUST have 'cells' array with length = table_width. Each cell is an array of rich_text. Example: {'type': 'table', 'object': 'block', 'table': {'table_width': 2, 'has_column_header': false, 'has_row_header': false, 'children': [{'type': 'table_row', 'object': 'block', 'table_row': {'cells': [[{'type': 'text', 'text': {'content': 'Cell 1'}}], [{'type': 'text', 'text': {'content': 'Cell 2'}}]]}}]}}  Common errors: - Using 'text' instead of 'rich_text' (WRONG: heading_2: {'text': ...}) - Missing 'object': 'block' field - Malformed rich_text array structure - Table without 'children' array or with empty 'children' - Table_row cells array length != table_width - Nesting block objects directly in table cells (cells contain rich_text arrays, not blocks) |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Append code blocks (code, quote, equation)

**Slug:** `NOTION_APPEND_CODE_BLOCKS`

Append code and technical blocks (code, quote, equation) to a Notion page. Use for: - Code snippets and programming examples (code) - Citations and highlighted quotes (quote) - Mathematical formulas and equations (equation) Supported block types: - code: Code with syntax highlighting (70+ languages including Python, JavaScript, Go, Rust, etc.) - quote: Block quotes for citations - equation: LaTeX/KaTeX mathematical expressions ⚠️ Code content is limited to 2000 characters per text.content field. For longer code, split into multiple code blocks. For other block types, use specialized actions: - append_text_blocks: paragraphs, headings, lists - append_task_blocks: to-do, toggle, callout - append_media_blocks: image, video, audio, files - append_layout_blocks: divider, columns, TOC - append_table_blocks: tables

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `after` | string | No | Optional UUID of an existing child block. New blocks will be inserted after this block. |
| `block_id` | string | Yes | The UUID of the parent block or page to append children to. |
| `children` | array | Yes | Array of code/technical block objects to append. Supported types: - code: Code snippet with syntax highlighting (supports 70+ languages) - quote: Block quote for citations or highlighted text - equation: Mathematical equation using LaTeX/KaTeX syntax  ⚠️ Code content limited to 2000 characters per rich_text text.content field. For longer code, split into multiple code blocks. Max 100 blocks per request. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Append layout blocks (divider, TOC, columns)

**Slug:** `NOTION_APPEND_LAYOUT_BLOCKS`

Append layout blocks (divider, TOC, breadcrumb, columns) to a Notion page. Supported types: - divider: Horizontal line separator - table_of_contents: Auto-generated from headings - breadcrumb: Page hierarchy navigation - column_list: Multi-column layout (requires 2+ columns, each with 1+ child block) For multi-column layouts, create column_list with column children in one request. Each column must contain at least 1 child block. For other blocks, use: append_text_blocks, append_task_blocks, append_code_blocks, append_media_blocks, or append_table_blocks.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `after` | string | No | Optional UUID of an existing child block. New blocks will be inserted after this block. |
| `block_id` | string | Yes | The UUID of the parent block or page to append children to. |
| `children` | array | Yes | Array of layout/structural block objects to append. Supported types: - divider: Horizontal line separator - table_of_contents: Auto-generated TOC from headings - breadcrumb: Navigation breadcrumb (auto-generated) - column_list: Container with at least 2 columns, each column must have at least 1 child block - column: Individual column (must be child of column_list)  Note: column_list blocks must include their column children in the same request. Each column must contain at least one child block. Max 100 blocks per request. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Append media blocks (image, video, audio, files)

**Slug:** `NOTION_APPEND_MEDIA_BLOCKS`

Append media blocks (image, video, audio, file, pdf, embed, bookmark) to a Notion page. Use for: - Images and screenshots (image) - YouTube/Vimeo videos or direct video URLs (video) - Audio files and podcasts (audio) - File downloads (file) - PDF documents (pdf) - Embedded content from Twitter, Figma, CodePen, etc. (embed) - Link previews with metadata (bookmark) All media blocks require external URLs. For other block types, use specialized actions: - append_text_blocks: paragraphs, headings, lists - append_task_blocks: to-do, toggle, callout - append_code_blocks: code, quote, equation - append_layout_blocks: divider, columns, TOC - append_table_blocks: tables

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `after` | string | No | Optional UUID of an existing child block. New blocks will be inserted after this block. |
| `block_id` | string | Yes | The UUID of the parent block or page to append children to. |
| `children` | array | Yes | Array of media block objects to append. Supported types: - image: Image from external URL - video: Video from YouTube, Vimeo, or direct URL - audio: Audio file from external URL - file: Generic file download link - pdf: PDF document (rendered inline) - embed: Embed from supported services (Twitter, Figma, CodePen, etc.) - bookmark: Link preview with title and description  All media types require an external URL. Max 100 blocks per request. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Append table blocks

**Slug:** `NOTION_APPEND_TABLE_BLOCKS`

Append table blocks to a Notion page. Use for structured tabular data like spreadsheets, comparison charts, and status trackers. Example: { "table_width": 3, "has_column_header": true, "rows": [ {"cells": [[{"type": "text", "text": {"content": "Col1"}}], [...], [...]]} ] } ⚠️ Cell content limited to 2000 chars per text.content field.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `after` | string | No | Optional UUID of an existing child block. New blocks will be inserted after this block. |
| `tables` | array | Yes | Array of tables to append. Each table includes: - table_width: Number of columns (1-100) - has_column_header: Style first row as header (optional, default false) - has_row_header: Style first column as header (optional, default false) - rows: Array of row objects (at least one required)  Each row contains a 'cells' array where each cell is an array of rich text objects. The number of cells in each row MUST match table_width.  ⚠️ Cell content limited to 2000 characters per rich_text text.content field. Max 100 tables per request. |
| `block_id` | string | Yes | The UUID of the parent block or page to append children to. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Append task blocks (to-do, toggle, callout)

**Slug:** `NOTION_APPEND_TASK_BLOCKS`

Append task blocks (to-do, toggle, callout) to a Notion page or block. Supported block types: - to_do: Checkbox items (checkable/uncheckable) - toggle: Collapsible sections - callout: Highlighted boxes with emoji icons All three types support nested children (up to 2 levels of nesting). block_id must be a page or block that supports children (e.g., page, toggle, paragraph, list items, quote, callout, to_do). Blocks like divider, breadcrumb, equation do NOT support children. Limits: 2000 chars per text.content, max 100 blocks per request. For other blocks: append_text_blocks, append_code_blocks, append_media_blocks, append_layout_blocks, append_table_blocks.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `after` | string | No | Optional UUID of an existing child block. New blocks will be inserted after this block. |
| `block_id` | string | Yes | The UUID of the parent page or block to append children to. Must be a page_id or a block type that supports children (e.g., toggle, paragraph, bulleted_list_item, numbered_list_item, quote, callout, to_do). Some block types like divider, breadcrumb, equation do NOT support children. |
| `children` | array | Yes | Array of task/interactive block objects to append. Supported types: - to_do: Checkbox task item (can be checked/unchecked) - toggle: Collapsible section (click to expand/collapse) - callout: Highlighted box with emoji icon (for important notes)  ⚠️ Text content limited to 2000 characters per rich_text text.content field. Max 100 blocks per request. Max 2 levels of nesting allowed. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Append text blocks (paragraphs, headings, lists)

**Slug:** `NOTION_APPEND_TEXT_BLOCKS`

Append text blocks (paragraphs, headings, lists) to a Notion page. This is the most commonly used action for adding content to Notion. Use for: documentation, notes, articles, outlines, lists. Supported block types: - paragraph: Regular text - heading_1, heading_2, heading_3: Section headers - bulleted_list_item: Bullet points - numbered_list_item: Numbered lists ⚠️ Text content is limited to 2000 characters per text.content field. For other block types, use specialized actions: - append_task_blocks: to-do, toggle, callout - append_code_blocks: code, quote, equation - append_media_blocks: image, video, audio, files - append_layout_blocks: divider, columns, TOC - append_table_blocks: tables

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `after` | string | No | Optional UUID of an existing child block. New blocks will be inserted after this block. |
| `block_id` | string | Yes | The UUID of the parent block or page to append children to. |
| `children` | array | Yes | Array of text block objects to append (also accepts 'blocks' as parameter name). Supported types: - paragraph: Regular text paragraph - heading_1, heading_2, heading_3: Section headings - bulleted_list_item: Bullet point - numbered_list_item: Numbered list item  ⚠️ Text content limited to 2000 characters per rich_text text.content field. Max 100 blocks per request. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Archive Notion Page

**Slug:** `NOTION_ARCHIVE_NOTION_PAGE`

Archives (moves to trash) or unarchives (restores from trash) a specified Notion page. Limitation: Workspace-level pages (top-level pages with no parent page or database) cannot be archived via the API and must be archived manually in the Notion UI.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `archive` | boolean | No | Set to `true` to move the page to trash (archive), or `false` to restore it from trash (unarchive). Defaults to `true`. |
| `page_id` | string | Yes | The unique identifier (UUID) of the Notion page to be archived or unarchived. Must be a page ID, not a database ID. Note: Workspace-level pages (pages that sit at the root of your workspace with no parent page or database) cannot be archived via the API - only pages nested under other pages or databases can be archived programmatically. Page IDs can be obtained using NOTION_SEARCH_NOTION_PAGE with filter_value='page' or from the 'id' field of page objects returned by other Notion actions. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create comment

**Slug:** `NOTION_CREATE_COMMENT`

Adds a comment to a Notion page (via `parent_page_id`) OR to an existing discussion thread (via `discussion_id`); cannot create new discussion threads on specific blocks (inline comments).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `comment` | object | Yes | Content of the comment as a NotionRichText object or a JSON string. Simplest form: {'content': 'Looks good!'} or {'text': 'Looks good!'} (both 'content' and 'text' are accepted as the field name). Can also be passed as a JSON string: '{"content": "Looks good!"}'. Optional styling fields: bold, italic, etc. The 'link' field is for external URLs only (e.g., 'https://example.com'), NOT for page IDs. Do NOT wrap this in a list or use Notion API block JSON. |
| `discussion_id` | string | No | The ID of an existing discussion thread to which the comment will be added. This is required if `parent_page_id` is not provided. Must be a valid UUID (32 hex characters with or without hyphens). |
| `parent_page_id` | string | No | The ID of the Notion page where the comment will be added. This is required if `discussion_id` is not provided. Must be a valid UUID (32 hex characters with or without hyphens). Page IDs can be obtained using other Notion actions that fetch page details or list pages. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Notion Database

**Slug:** `NOTION_CREATE_DATABASE`

Creates a new Notion database as a subpage under a specified parent page with a defined properties schema. IMPORTANT NOTES: - The parent page MUST be shared with your integration, otherwise you'll get a 404 error - If you encounter conflict errors (409), retry the request as Notion may experience temporary save conflicts - For relation properties, you MUST provide the database_id of the related database - Parent ID must be a valid UUID format (with or without hyphens), not a template variable Use this action exclusively for creating new databases.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `title` | string | Yes | The desired title for the new database. This text will be automatically converted into Notion's rich text format when the database is created. |
| `parent_id` | string | Yes | **CRITICAL: MUST BE A PAGE ID, NOT A DATABASE ID.** Databases can only be created as children of pages, not as children of other databases. Using a database ID will result in an API error: 'Can't create databases parented by a database.' HOW TO IDENTIFY PAGE vs DATABASE: Use NOTION_SEARCH_NOTION_PAGE with filter_value='page' to find pages (object='page') - only these IDs can be used here. Database IDs (object='database') are NOT valid as parent_id for this action. FORMAT: Valid 32-character UUID with hyphens (xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx) or without hyphens (32 alphanumeric characters). Additional text after the UUID (e.g., 'uuid: Page Title') is automatically cleaned. The page must be shared with your integration, otherwise you'll receive a 404 error. |
| `properties` | array | No | Optional list defining the schema (columns) for the new database. Each item is an object with 'name' and 'type'. If not provided, Notion creates a default database with a single 'Name' column of type 'title'. When provided, the list must include at least one property of type 'title'. Common supported property types include: 'title', 'rich_text', 'number', 'select', 'multi_select', 'status', 'date', 'people', 'files', 'checkbox', 'url', 'email', 'phone_number'. Other types like 'formula', 'relation', 'rollup', 'created_time', 'created_by', 'last_edited_time', 'last_edited_by' might also be supported. IMPORTANT: For 'relation' type properties, you MUST also provide the 'database_id' field with the UUID of the related database. The related database must be shared with your integration. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Notion file upload

**Slug:** `NOTION_CREATE_FILE_UPLOAD`

Tool to create a Notion FileUpload object and retrieve an upload URL. Use when you need to automate attaching local or external files directly into Notion without external hosting.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `mode` | string ("single_part" | "multi_part" | "external_url") | No | Upload mode: 'single_part' for direct upload (default, up to 20 MB), 'multi_part' for chunked uploads (requires paid Notion workspace), or 'external_url' to import from a public URL. Note: Free workspaces are limited to 5 MB files and cannot use multi_part mode. |
| `filename` | string | No | Human-readable file name with extension. Required for external_url; for multi_part, supply to infer extension or pair with content_type; optional for single-part. Supported extensions: Audio (.aac, .adts, .mid, .midi, .mp3, .mpga, .m4a, .m4b, .mp4, .oga, .ogg, .wav, .wma); Document (.pdf, .txt, .json, .doc, .dot, .docx, .dotx, .xls, .xlt, .xla, .xlsx, .xltx, .ppt, .pot, .pps, .ppa, .pptx, .potx); Image (.gif, .heic, .jpeg, .jpg, .png, .svg, .tif, .tiff, .webp, .ico); Video (.amv, .asf, .wmv, .avi, .f4v, .flv, .gifv, .m4v, .mp4, .mkv, .webm, .mov, .qt, .mpeg). |
| `content_type` | string | No | MIME type of the file. Required in multi_part if filename lacks extension; optional for single-part. |
| `external_url` | string | No | Public HTTPS URL to import. Required when mode='external_url'. Must expose Content-Type and Content-Length. |
| `number_of_parts` | integer | No | Total parts for a multi-part upload; required when mode='multi_part'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Notion page

**Slug:** `NOTION_CREATE_NOTION_PAGE`

Creates a new page in a Notion workspace under a specified parent page or database. Supports creating pages with markdown content using the native markdown parameter, or as an empty page that can be populated later. PREREQUISITES: - Parent page/database must exist and be accessible in your Notion workspace - Use search_pages or list_databases first to obtain valid parent IDs LIMITATIONS: - Cannot create root-level pages (must have a parent) - May encounter conflicts if creating pages too quickly - Title-based parent search is less reliable than using UUIDs - The markdown parameter is mutually exclusive with children/content parameters

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `icon` | string | No | An emoji to be used as the icon for the new page. Must be a single emoji character. If the title starts with this emoji, it will be stripped from the title text to prevent duplication. |
| `cover` | string | No | The URL of an image to be used as the cover for the new page. The URL must be publicly accessible. |
| `title` | string | Yes | The title of the new page to be created. If an icon emoji is provided and the title starts with the same emoji, it will be automatically removed from the title to avoid duplication. |
| `markdown` | string | No | Page content as Notion-flavored Markdown. When provided, the page will be created from this markdown string. If properties.title is omitted, the first # h1 heading will be extracted as the page title. This parameter is mutually exclusive with children and content parameters. |
| `parent_id` | string | Yes | CRITICAL: Must be either: 1) A valid Notion UUID in dashed format (8-4-4-4-12 hex characters like '59833787-2cf9-4fdf-8782-e53db20768a5') or dashless format (32 hex characters like '598337872cf94fdf8782e53db20768a5') of an existing Notion page or database. 2) The exact title of an existing page/database (less reliable - UUID strongly preferred). IMPORTANT: Always use search_pages or list_databases actions FIRST to obtain valid parent IDs. Common errors: Using malformed UUIDs, non-existent IDs, or IDs from different workspaces. Note: Root-level pages cannot be created - you must specify a parent. Also accepts 'parent_page_id' as an alias. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Notion view

**Slug:** `NOTION_CREATE_VIEW`

Create a Notion view.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Name of the view. |
| `type` | string ("table" | "board" | "list" | "calendar" | "timeline" | "gallery" | "form" | "chart" | "map" | "dashboard") | Yes | Type of view to create. |
| `sorts` | array | No | View sorts. |
| `filter` | object | No | View filter in Notion data source query format. |
| `view_id` | string | No | Dashboard view ID to add this view to as a widget. |
| `position` | object | No | Position in the database view tab bar. |
| `placement` | object | No | Widget placement for dashboard views. |
| `database_id` | string | No | Database ID to create a top-level database view in. |
| `configuration` | object | No | View presentation configuration. |
| `quick_filters` | object | No | Pinned quick filters for the view. |
| `data_source_id` | string | Yes | Data source ID this view is scoped to. |
| `create_database` | object | No | Create a linked database block on a page and add the view to it. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Notion view query

**Slug:** `NOTION_CREATE_VIEW_QUERY`

Create a Notion view query and return the first page of page references.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `view_id` | string | Yes | ID of the Notion view to query. |
| `page_size` | integer | No | Number of results to return. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete a block

**Slug:** `NOTION_DELETE_BLOCK`

Archives a Notion block, page, or database using its ID, which sets its 'archived' property to true (like moving to "Trash" in the UI) and allows it to be restored later. Note: This operation will fail if the block has an archived parent or ancestor in the hierarchy. You must unarchive the ancestor before archiving/deleting its descendants. IMPORTANT LIMITATION: Workspace-level pages (top-level pages that are direct children of the workspace, not contained within other pages or databases) cannot be archived via the Notion API. This is a documented Notion API restriction. Only pages that are children of other pages or databases can be deleted through this action.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `block_id` | string | Yes | Identifier of the block, page, or database to be deleted (archived). Must be a valid Notion block/page/database ID in UUID format (with or without hyphens). IMPORTANT: Workspace-level pages (top-level pages not contained within other pages or databases) cannot be archived via the API - only pages that are children of other pages or databases can be deleted. To find page IDs and their titles, consider using an action like `NOTION_FETCH_DATA`. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Notion view

**Slug:** `NOTION_DELETE_VIEW`

Delete a Notion view.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `view_id` | string | Yes | ID of the Notion view to delete. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Notion view query

**Slug:** `NOTION_DELETE_VIEW_QUERY`

Delete a cached Notion view query.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `view_id` | string | Yes | ID of the Notion view. |
| `query_id` | string | Yes | ID of the cached Notion view query. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Duplicate page

**Slug:** `NOTION_DUPLICATE_PAGE`

Duplicates a Notion page, including all its content, properties, and nested blocks, under a specified parent page or workspace.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `title` | string | No | An optional new title for the duplicated page. If not provided, the title of the original page will be used, prefixed with 'Copy of'. |
| `page_id` | string | Yes | The unique identifier (UUID v4) of the Notion page to be duplicated. Ensure this page exists and is accessible. |
| `parent_id` | string | Yes | The unique identifier (UUID v4) of the Notion page or database that will serve as the parent for the duplicated page. If a database ID is provided, the new page is created as a row in that database with properties preserved. If a page ID is provided, the new page is created as a child page with only the title. This ID cannot be the same as `page_id`. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Fetch All Notion Block Contents

**Slug:** `NOTION_FETCH_ALL_BLOCK_CONTENTS`

Tool to fetch all child blocks for a given Notion block. Use when you need a complete listing of a block's children beyond a single page; supports optional recursive expansion of nested blocks.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `block_id` | string | No | Identifier (UUID) of the parent Notion block or page whose children to list. Pages are blocks in Notion. Accepts UUIDs with or without hyphens (e.g., 'c02fc1d3-db8b-45c5-a222-27595b15aea7' or 'c02fc1d3db8b45c5a22227595b15aea7'). Either block_id or page_url must be provided. The block must be shared with your integration. |
| `page_url` | string | No | Notion page URL from which to extract the page/block ID. Either block_id or page_url must be provided. NOTE: Database view URLs (those containing '?v=' parameter) are NOT supported. Database views are filtered views of a database and do not have block children. To access database content, use the NOTION_QUERY_DATABASE action instead. |
| `max_depth` | integer | No | Maximum recursion depth when recursive=true. Prevents excessive nesting traversal. Defaults to 10. Set higher for deeply nested structures, lower for faster results. |
| `page_size` | integer | No | Maximum number of child blocks to return per request. Defaults to 100, with a maximum of 100 as per Notion API limits. |
| `recursive` | boolean | No | If true, fetches nested children for blocks with 'has_children' set to true, appending all descendants to the output list. Subject to max_depth and max_blocks limits. |
| `max_blocks` | integer | No | Maximum total blocks to return when recursive=true. Prevents runaway fetches on extremely large block trees. Defaults to 5000. When limit is reached, blocks fetched so far are returned with a warning in the response. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Fetch Notion Block Children

**Slug:** `NOTION_FETCH_BLOCK_CONTENTS`

Retrieves a paginated list of direct, first-level child block objects along with contents for a given parent Notion block or page ID; use block IDs from the response for subsequent calls to access deeply nested content.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `block_id` | string | Yes | UUID of the parent Notion block or page whose children are to be fetched. Accepts both hyphenated (e.g., 'c02fc1d3-db8b-45c5-a222-27595b15aea7') and non-hyphenated (e.g., 'c02fc1d3db8b45c5a22227595b15aea7') UUID formats. Notion's API does not support special identifiers like 'root' or 'top-level' - you must always provide an actual page or block UUID. To discover valid page/block IDs, first use 'NOTION_SEARCH_NOTION_PAGE' to find pages or 'NOTION_QUERY_DATABASE' to query databases. |
| `page_size` | integer | No | The maximum number of child blocks to return in a single response. The actual number of results may be lower if there are fewer child blocks available or if the end of the list is reached. Maximum allowed value is 100. If unspecified, Notion's default page size will be used. |
| `start_cursor` | string | No | Pagination cursor from next_cursor in a previous API response. When paginating through results, pass the next_cursor value from the previous response here to fetch the next page. Must be a valid UUID format or cursor string returned by Notion's API. If omitted, returns the first page of results. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Fetch Notion block metadata

**Slug:** `NOTION_FETCH_BLOCK_METADATA`

Fetches metadata for a Notion block (including pages, which are special blocks) using its UUID. Returns block type, properties, and basic info but not child content. Prerequisites: 1) Block/page must be shared with your integration, 2) Use valid block_id from API responses (not URLs). For child blocks, use fetch_block_contents instead. Common 404 errors mean the block isn't accessible to your integration.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `block_id` | string | Yes | The unique UUID identifier for the Notion block to be retrieved. Must be a valid 32-character UUID (with or without hyphens). Pages in Notion are also blocks, so page IDs work here too. Important: The block/page must be shared with your integration. To find valid block IDs, use actions like search_pages, list_databases, or fetch_block_contents. Common error: Ensure you're using the actual block_id from API responses, not URLs or other identifiers. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Fetch comments

**Slug:** `NOTION_FETCH_COMMENTS`

Fetches unresolved comments for a specified Notion block or page ID. The block/page must be shared with your Notion integration and the integration must have 'Read comments' capability enabled, otherwise a 404 error will be returned.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page_id` | string | No | Identifier for a Notion page from which to fetch comments. This is an alias for block_id since pages are blocks in Notion. Provide either page_id or block_id, but not both. IMPORTANT: The page must be shared with your Notion integration - if not shared, you will receive a 404 error. To find IDs, use the `NOTION_SEARCH_NOTION_PAGE` action. |
| `block_id` | string | No | Identifier for a Notion block from which to fetch comments. In Notion, pages are technically blocks, so you can pass a page ID here as well. Provide either block_id or page_id, but not both. IMPORTANT: The block/page must be shared with your Notion integration - if not shared, you will receive a 404 error. To find IDs, use the `NOTION_FETCH_DATA` action. |
| `page_size` | integer | No | The number of comments to return in a single response page. Must be between 1 and 100, inclusive. Default is 100. |
| `start_cursor` | string | No | A pagination cursor. If provided, the response will contain the page of results starting after this cursor. If omitted, the first page of results is returned. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Fetch Notion Data

**Slug:** `NOTION_FETCH_DATA`

Fetches Notion items (pages and/or databases) from the Notion workspace, use this to get minimal data about the items in the workspace with a query or list all items in the workspace with minimal data

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `query` | string | No | An optional search query to filter pages and/or databases by their title or content. If not provided (None or empty string), all accessible items matching the selected type (pages, databases, or both) are returned. |
| `page_size` | integer | No | The maximum number of items per page (1-100). IMPORTANT: Notion API enforces a hard maximum of 100 items per request - values above 100 will be automatically capped to 100. To retrieve more than 100 items, use pagination by passing the returned 'next_cursor' value in subsequent requests. Defaults to 100. |
| `fetch_type` | string ("pages" | "databases" | "all") | Yes | Specifies what type of Notion data to fetch. Use 'pages' to fetch only pages, 'databases' to fetch only databases, or 'all' to fetch both pages and databases. |
| `start_cursor` | string | No | Pagination cursor to fetch the next page of results. Pass the 'next_cursor' value from a previous response to retrieve the next page. When null or not provided, the first page is returned. |
| `original_page_size` | integer | No | The original page size value before it was capped. |
| `page_size_was_capped` | boolean | No | Indicates whether the page size was capped to the maximum allowed value. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Fetch Database

**Slug:** `NOTION_FETCH_DATABASE`

Fetches a Notion database's structural metadata (properties, title, etc.) via its `database_id`, not the data entries; `database_id` must reference an existing database.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `database_id` | string | Yes | Required. The unique identifier of the Notion database in UUID format (e.g., '2ec43c10-7ecd-8159-a8f4-ff16630df66c') or unhyphenated 32-char hex (e.g., '2ec43c107ecd8159a8f4ff16630df66c'). Must be a DATABASE ID, not a page ID. Linked databases are NOT supported - use the original source database ID. To find database IDs: use NOTION_SEARCH_NOTION_PAGE with filter_value='database', or extract from database URLs (notion.so/{database_id}). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Fetch database row

**Slug:** `NOTION_FETCH_ROW`

Retrieves a Notion database row's properties and metadata; use fetch_block_contents for page content blocks.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page_id` | string | Yes | The UUID of the Notion page (which represents a row in a database) to retrieve. Must be a page ID, not a database ID. Each row in a Notion database is a page. Use actions like NOTION_FETCH_DATA or NOTION_QUERY_DATABASE to get page IDs from databases. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get About Me (Deprecated)

**Slug:** `NOTION_GET_ABOUT_ME`

DEPRECATED: Use GetAboutUser instead. Retrieves the User object for the bot associated with the current Notion integration token, typically to obtain the bot's user ID for other API operations.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get about user

**Slug:** `NOTION_GET_ABOUT_USER`

Retrieves detailed information about a specific Notion user, such as their name, avatar, and email, based on their unique user ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `user_id` | string | Yes | The unique identifier of the Notion user whose details are to be retrieved. This ID is used to fetch specific user information. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get page markdown

**Slug:** `NOTION_GET_PAGE_MARKDOWN`

Retrieve a Notion page's full content rendered as Notion-flavored Markdown in a single API call. Use when you need the readable content of a page without recursive block-children fetching.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page_id` | string | Yes | The UUID of the Notion page to retrieve as markdown. Accepts both hyphenated (8-4-4-4-12) and unhyphenated (32 characters) UUID formats. This endpoint retrieves the full page content rendered as Notion-flavored Markdown in a single API call, avoiding the need for recursive block-children fetching. IMPORTANT: Only page IDs are accepted - database IDs will be rejected. To retrieve database content, use the 'Fetch Database' or 'Query Database' actions instead. |
| `include_transcript` | boolean | No | Set to true to include meeting note transcripts in the markdown response. Defaults to false if not specified. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get page property

**Slug:** `NOTION_GET_PAGE_PROPERTY_ACTION`

Call this to get a specific property from a Notion page when you have a valid `page_id` and `property_id`; handles pagination for properties returning multiple items.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page_id` | string | Yes | Identifier of the Notion page (e.g., '067dd719-a912-471e-a9a3-ac10710e78b4') from which to retrieve the property. Use the 'NOTION_FETCH_DATA' action or similar to discover available page IDs and their titles. |
| `page_size` | integer | No | For paginated property types (e.g., 'relation', 'rollup', 'rich_text' if content is extensive), this specifies the number of items to return per request. If omitted, Notion's default page size for the property is used. |
| `property_id` | string | Yes | Identifier or name of the property to retrieve. For 'title' properties, the ID is always 'title'. For other properties, this can be the property's name as displayed in Notion (e.g., 'Status', 'Assignee') or its unique programmatic ID (e.g., 'N%3A%5B%7C', 'prop_id_example'). Property IDs/names can be found by inspecting the page object or database schema. |
| `start_cursor` | string | No | For paginated properties, if a previous request's response indicated `has_more: true`, provide the `next_cursor` value here to fetch the subsequent set of items. Omit if fetching the first page. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Notion view query results

**Slug:** `NOTION_GET_VIEW_QUERY_RESULTS`

Get a page of results from a cached Notion view query.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `view_id` | string | Yes | ID of the Notion view. |
| `query_id` | string | Yes | ID of the cached Notion view query. |
| `page_size` | integer | No | Number of results to return. |
| `start_cursor` | string | No | Opaque next_cursor from a previous query page. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Insert row database

**Slug:** `NOTION_INSERT_ROW_DATABASE`

Creates a new page (row) in a specified Notion database. Prerequisites: - Database must be shared with your integration - Property names AND types must match schema exactly (case-sensitive) - Use NOTION_FETCH_DATA with fetch_type='databases' first to get exact property names and types - Each database has ONE 'title' property; other text fields are 'rich_text' - Database must NOT have multiple data sources (synced databases are not supported) Common Errors: - 404: Database not shared with integration - 400 "not a property": Wrong property name - 400 "expected to be X": Wrong property type - 400 "multiple_data_sources": Database uses multiple data sources (not supported) Note: Rich text content in child_blocks is automatically truncated to 2000 characters per Notion API limits.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `icon` | string | No | Emoji to be used as the page icon. Must be a single emoji character. |
| `cover` | string | No | URL of an external image to set as the page cover. The URL must point to a publicly accessible image. |
| `properties` | array | No | Property values for the new page. Accepts a LIST of objects or a JSON-encoded string. Each object must include: `name` (exact property name, case-sensitive), `type` (property data type), and `value` (string-formatted value).  Property names AND types are CASE-SENSITIVE and must match your Notion database schema exactly. Each database has exactly ONE 'title' type property; all other text properties use 'rich_text'. Use NOTION_FETCH_DATA with fetch_type='databases' to find exact property names and types.  CORRECT FORMAT (list of property objects): [   {"name": "Task Name", "type": "title", "value": "Finalize Q3 report"},   {"name": "Priority", "type": "select", "value": "High"},   {"name": "Tags", "type": "multi_select", "value": "Work,Personal"},   {"name": "Due Date", "type": "date", "value": "2024-06-01T12:00:00.000-04:00"},   {"name": "Completed", "type": "checkbox", "value": "False"} ]  INCORRECT FORMAT (dict - causes validation error): {"Task Name": "value", "Priority": "High"}  'status' vs 'select' TYPE CONFUSION: - Dropdown lists use type='select' - even if the property is NAMED 'Status'. - The 'status' type is a special Notion property with workflow groups ('To-do', 'In progress', 'Complete'). - Use NOTION_FETCH_DATA to verify the actual type in your database schema.  PROPERTY TYPE ERRORS: - 'X is not a property that exists': Check schema - wrong property name or wrong type. - 'X is expected to be Y': Wrong type specified - use the type shown in the error.  Value formatting rules by type: - `title` / `rich_text`: Plain text string (max 2000 chars). - `number`: String of a number (e.g., "23.4"). - `select`: Single option name. Commas NOT allowed - use 'multi_select' for multiple values. - `multi_select`: Comma-separated option names (e.g., "Work,Personal"). Options must exist in schema. - `date`: ISO 8601. Single: "2024-06-01T12:00:00.000-04:00". Range: "start/end" separated by "/". - `people`: Comma-separated Notion user IDs. - `relation`: Comma-separated page UUIDs (NOT text/titles). Use NOTION_QUERY_DATABASE to get page IDs. - `checkbox`: "True" or "False". - `url`: Valid URL string. - `files`: Comma-separated URLs. - `email`: Valid email string. - `phone_number`: Phone number string. Only use if database property type is 'Phone'. |
| `database_id` | string | Yes | Identifier (UUID) of the Notion database where the new page (row) will be inserted. Can be provided with or without hyphens (e.g., '59833787-2cf9-4fdf-8782-e53db20768a5' or '598337872cf94fdf8782e53db20768a5'). This ID must correspond to an existing database that has been explicitly shared with your integration. IMPORTANT: The database must be shared with your integration in Notion settings, otherwise you will get a 404 error. NOTE: Databases with multiple data sources (synced databases or combined views) are not supported by this integration. Use the `NOTION_FETCH_DATA` action to find available database IDs that are already shared with your integration. |
| `child_blocks` | array | No | A list of `NotionRichText` objects defining content blocks (e.g., paragraphs, headings, media) to append to the new page's body. Accepts either a list of objects OR a JSON-encoded string representing a list. If omitted, the page body will be empty.   **Supported block types:** paragraph, heading_1, heading_2, heading_3, callout, to_do, toggle, quote, bulleted_list_item, numbered_list_item, divider, image, video, file.   **Media blocks (image, video, file):** Require the `link` field with an external URL. The Notion API does not support uploading files directly - you must provide publicly accessible URLs.  **Note:** Notion API limits children to 100 blocks per request. If more than 100 blocks are provided, the action will automatically create the page with the first 100 blocks and then append remaining blocks in subsequent API calls. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Insert Row From Natural Language

**Slug:** `NOTION_INSERT_ROW_FROM_NL`

Creates a new row (page) in a Notion database from a natural language description. Fetches the database schema at runtime, uses an LLM to generate the correctly-formatted property payload, and creates the page.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `icon` | string | No | Optional emoji icon for the page. |
| `cover` | string | No | Optional cover image URL for the page. |
| `nl_query` | string | Yes | Natural language description of the row to create. Example: 'Add task: Review PR #14143, priority High, status In Progress, due tomorrow'. |
| `database_id` | string | Yes | Notion database UUID where the new row will be inserted. Can be provided with or without hyphens. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List data source templates

**Slug:** `NOTION_LIST_DATA_SOURCE_TEMPLATES`

Tool to list all templates for a Notion data source. Use when needing to discover template IDs/names for bulk page creation. Use after confirming the data_source_id.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page_size` | integer | No | Number of templates to return per page (1–100). Defaults to 100 if omitted. |
| `start_cursor` | string | No | Cursor for pagination. Use the `next_cursor` value from a previous response to retrieve the next page. |
| `data_source_id` | string | Yes | Data source ID (UUIDv4). Path parameter identifying the data source to list templates from. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Notion file uploads

**Slug:** `NOTION_LIST_FILE_UPLOADS`

Tool to retrieve file uploads for the current bot integration, sorted by most recent first. Use when you need to list all file uploads or paginate through file upload history.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page_size` | integer | No | Controls how many items the response includes from the complete list. Maximum 100, default 100. The actual response may contain fewer results than requested. |
| `start_cursor` | string | No | Accepts a next_cursor value from a previous response. Treat as an opaque value to retrieve subsequent result pages. If omitted, begins from the list's start. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List users

**Slug:** `NOTION_LIST_USERS`

Retrieves a paginated list of users (excluding guests) from the Notion workspace; the number of users returned per page may be less than the requested `page_size`.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page_size` | integer | No | The desired number of users to retrieve per page. The maximum value is 100. |
| `start_cursor` | string | No | If omitted, retrieves the first page of users. Use the 'next_cursor' value from a previous response to get the next page. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Notion views

**Slug:** `NOTION_LIST_VIEWS`

List Notion views for a database or data source.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page_size` | integer | No | Number of view references to return. Maximum 100. |
| `database_id` | string | No | Database ID to list views for. At least one of database_id or data_source_id is required. |
| `start_cursor` | string | No | Opaque next_cursor from a previous response. |
| `data_source_id` | string | No | Data source ID to list views for. At least one of database_id or data_source_id is required. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Move Page

**Slug:** `NOTION_MOVE_PAGE`

Tool to move a Notion page to a new parent (page or database). Use when you need to reorganize page hierarchy. Important: To move to a database, use data_source_id (NOT database_id). Get the data source ID from the database object using NOTION_FETCH_DATABASE.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `parent` | string | Yes | Parent destination for the page. Use type='page_id' with page_id to move under another page (the page_id must reference a page, not a database). Use type='data_source_id' with data_source_id to move into a database. Common mistake: Using type='page_id' with a database ID will fail - databases require type='data_source_id'. |
| `page_id` | string | Yes | The ID of the page to move. UUID format with or without dashes is supported. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Query database

**Slug:** `NOTION_QUERY_DATABASE`

Queries a Notion database to retrieve pages (rows). In Notion, databases are collections where each row is a page and columns are properties. Returns paginated results with metadata. Important requirements: - The database must be shared with your integration - Property names in sorts must match existing database properties exactly (case-sensitive) - For timestamp sorting, use 'created_time' or 'last_edited_time' (case-insensitive) - The start_cursor must be the opaque value from a previous response's next_cursor field - Database IDs must be valid 32-character UUIDs (with or without hyphens) Use this action to: - Retrieve all or filtered database entries - Sort results by database properties or page timestamps - Paginate through large result sets - Get database content for processing or display

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `sorts` | array | No | List of sort rules to order the database query results. Each sort rule must specify: 'property_name' (name of database property or timestamp field) and 'ascending' (True/False). For database properties: names must match exactly (case-sensitive). For timestamps: use 'created_time' or 'last_edited_time' (case-insensitive). Multiple sorts are applied in the order specified. |
| `page_size` | integer | No | Number of items (database rows/pages) to return per request. Valid range: 1-100. Default is 100. The API may return fewer items than requested if that's all that's available. |
| `database_id` | string | Yes | The UUID of the Notion DATABASE to query (32-character hex string, optionally with hyphens). Query parameters (e.g., ?v=viewid) from Notion URLs are automatically stripped. IMPORTANT: This must be a DATABASE ID, not a page ID. Pages and databases are different object types in Notion. A database is a collection/table that contains pages as rows. If you have a page ID, you cannot use it here. How to obtain a database ID: Use NOTION_SEARCH_NOTION_PAGE with filter_value='database' to list accessible databases, or find it in the Notion URL of a database view (the 32-char ID after the workspace name). Common error: If you receive 'validation_error' with message 'Provided ID is a page, not a database', you have passed a page ID instead of a database ID. Format: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx or xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx |
| `start_cursor` | string | No | An opaque pagination cursor for fetching the next page of results. Use the exact 'next_cursor' field from a previous query response. If omitted, returns the first page. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Query database with filter

**Slug:** `NOTION_QUERY_DATABASE_WITH_FILTER`

Tool to query a Notion database with server-side filtering, sorting, and pagination. Use when you need to retrieve a subset of rows by property, date, status, or other conditions.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `sorts` | array | No | List of sort criteria in order of precedence. Use PropertySort for database properties (with property field) and TimestampSort for system timestamps (with timestamp='created_time' or 'last_edited_time'). IMPORTANT: To sort by page creation or last edited time, you MUST use the TimestampSort format with timestamp='created_time' or timestamp='last_edited_time', NOT property names like 'Created' or 'Last Edited'. Common timestamp field name variations (Created, creation time, Last Edited, etc.) will be automatically converted to the correct format. |
| `filter` | object | No | PREREQUISITE: Call NOTION_FETCH_DATABASE first to discover property names and types. Filter type keys MUST match the property's actual type in the schema. Each filter object MUST contain exactly ONE filter type key. For multiple conditions, use compound filters: {"and": [{"property": "Name", "title": {...}}, {"property": "Description", "rich_text": {...}}]}. 'title' IS A RESERVED PROPERTY NAME: 'title' always refers to the database's built-in primary title column (type 'title', NOT 'select' or 'rich_text'). Even custom properties named 'title' are treated as the built-in title column. FILTER TYPE MUST MATCH SCHEMA TYPE: Property names are NOT reliable indicators of type. A property named 'Status' could be type 'select' in one database but type 'status' in another. 'select' is for dropdowns; 'status' is ONLY for Notion's built-in Status property with workflow groups. SELECT/STATUS/MULTI_SELECT VALUES ARE CASE-SENSITIVE: Option names must match EXACTLY as defined in the database schema, including capitalization and emoji prefixes (e.g., 'Done' not 'done', '✅ Done' not 'Done'). Common mistake: using 'done' when the actual option is 'Done'. Check the database schema for exact option names. Valid filter type keys: title, rich_text, number, checkbox, select, multi_select, status, date, people, files, url, email, phone_number, relation, created_by, created_time, last_edited_by, last_edited_time, formula, unique_id, rollup, verification, timestamp. FORMULA FILTERS: Structure: {'property': '<name>', 'formula': {<result_type>: {<condition>: <value>}}}. Result types: 'string' (rich_text conditions), 'number' (numeric conditions), 'date' (date conditions), 'checkbox' (boolean conditions). The result type MUST match the formula's actual output type. If the formula property value shows type 'boolean', use 'checkbox' in the filter (API naming mismatch). Some complex formulas are unfilterable ('Unable to filter based on a formula of unknown type') - use client-side filtering instead. NOTE: 'text' is NOT valid - use 'rich_text' for text properties or 'title' for title properties. SYSTEM TIMESTAMP FILTERS: Use simplified format: {"created_time": {"on_or_after": "2024-01-01"}} - auto-transformed to correct API format. Filter structure for database properties: {"property": "<property_name>", "<filter_type>": {"<condition>": "<value>"}}. Common conditions by type: title/rich_text: equals, contains, starts_with, ends_with, is_empty, is_not_empty; select/status: equals, does_not_equal, is_empty, is_not_empty; number: equals, does_not_equal, greater_than, less_than, greater_than_or_equal_to, less_than_or_equal_to, is_empty, is_not_empty; checkbox: equals (true/false); date: equals, before, after, on_or_before, on_or_after, is_empty, is_not_empty, past_week, past_month, past_year, next_week, next_month, next_year; relation: contains, does_not_contain (both require a valid page UUID), is_empty, is_not_empty. ROLLUP FILTERS: Require a nested aggregation type wrapper. Do NOT use flat filters like {"rollup": {"contains": "value"}}. Instead use one of: (1) {"rollup": {"any": {<condition>}}} - matches if ANY related item satisfies condition; (2) {"rollup": {"every": {<condition>}}} - matches if ALL related items satisfy condition; (3) {"rollup": {"none": {<condition>}}} - matches if NO related items satisfy condition; (4) {"rollup": {"number": {<number_condition>}}} - for number rollup aggregations (count, sum, avg, etc.); (5) {"rollup": {"date": {<date_condition>}}} - for date rollup aggregations (earliest, latest). Inside rollup.any/every/none, use the filter type matching the underlying property type. Compound filters use 'and' or 'or' arrays: {"and": [<filter1>, <filter2>]} or {"or": [<filter1>, <filter2>]}. |
| `page_size` | integer | No | Maximum number of items to return (1–100). Defaults to 100 if omitted. |
| `database_id` | string | Yes | The UUID of the Notion database to query (32 character hex string, with hyphens or without). IMPORTANT: This must be a DATABASE ID, not a page ID. Page IDs and database IDs are different things. If you have a page URL/ID, that is NOT the same as the database ID - inline databases within pages have their own separate database IDs distinct from the parent page ID. Use NOTION_SEARCH_NOTION_PAGE or NOTION_FETCH_DATABASE to discover the correct database ID. The database must be shared with your integration. |
| `start_cursor` | string | No | Cursor from a prior response's `next_cursor` for fetching the next page. Use the exact cursor value returned by Notion. |
| `composio_execution_message` | string | No | Internal message about any automatic conversions made during execution. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Query data source

**Slug:** `NOTION_QUERY_DATA_SOURCE`

Tool to query a Notion data source. Use when you need to retrieve pages or child data sources with filters, sorts, and pagination. Make paginated requests using cursors and optional property filters for efficient data retrieval.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `sorts` | array | No | List of sort criteria in order of precedence. Use PropertySort for property fields or TimestampSort for creation/edit times. |
| `filter` | object | No | Filter object to limit returned entries. Supports single-property filters or compound filters using 'and'/'or'. |
| `page_size` | integer | No | Maximum number of items to return (1-100). Defaults to 100 if omitted. |
| `start_cursor` | string | No | Cursor from a prior response's `next_cursor` for fetching the next page. |
| `data_source_id` | string | Yes | UUID of the Notion data source to query (with or without hyphens). URI prefixes like 'collection://' are automatically stripped. |
| `filter_properties` | array | No | List of property IDs to include in each returned item; maps to the `filter_properties[]` query parameter. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Replace page content (with backup)

**Slug:** `NOTION_REPLACE_PAGE_CONTENT`

Safely replaces a page's child blocks by optionally backing up current content, deleting existing children, then appending new children in batches. Use when you need to rebuild a page without leaving partial states. Notion does not provide atomic transactions; this tool orchestrates a multi-step workflow with optional backup to reduce risk.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `dry_run` | boolean | No | If True, returns what would be deleted and appended without making any changes. Use to preview the operation. |
| `page_id` | string | Yes | The unique identifier (UUID) of the page whose content will be replaced. Must be a valid Notion page ID in UUID format (with or without hyphens). |
| `new_children` | array | Yes | Array of block objects to append to the page after clearing existing content. Supported types: paragraph, heading_1/2/3, bulleted_list_item, numbered_list_item, to_do, toggle, callout, code, quote, equation, image, video, audio, file, pdf, embed, bookmark, divider, table_of_contents, breadcrumb, column_list, column, table, table_row. Each block MUST include 'type' field and type-specific content. Text blocks must use 'rich_text' array structure with max 2000 chars per text.content. Will be appended in batches of up to 100 blocks to respect Notion API limits. |
| `backup_parent` | object | No | Parent specification for backup page creation. |
| `create_backup` | boolean | No | Whether to create a backup page with the current content before replacing it. Strongly recommended when replacing important content. |
| `backup_title_suffix` | string | No | Suffix to append to the original page title when creating a backup page. |
| `archive_existing_children` | boolean | No | Whether to delete (archive) existing child blocks before appending new content. Set to False to keep existing content and only append new blocks. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve Comment

**Slug:** `NOTION_RETRIEVE_COMMENT`

Tool to retrieve a specific comment by its ID. Use when you have a comment ID and need to fetch its details.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `comment_id` | string | Yes | Identifier for the comment to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve Database Property

**Slug:** `NOTION_RETRIEVE_DATABASE_PROPERTY`

Tool to retrieve a specific property object of a Notion database. Use when you need to get details about a single database column/property.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `database_id` | string | Yes | Identifier for the database. |
| `property_id` | string | Yes | Identifier for the property. This can be the property ID (e.g., 'GZtn') or the property name (e.g., 'Status'). Supports URL-encoded values (e.g., 'kD%5ER' decodes to 'kD^R'). Property name matching is case-sensitive but supports Unicode normalization for characters that can be represented in multiple ways. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve Notion file upload

**Slug:** `NOTION_RETRIEVE_FILE_UPLOAD`

Tool to retrieve details of a Notion File Upload object by its identifier. Use when you need to check the status or details of an existing file upload.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `file_upload_id` | string | Yes | The unique identifier (UUID) of the file upload to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve page

**Slug:** `NOTION_RETRIEVE_PAGE`

Retrieve a Notion page's properties/metadata (not block content) by page_id. Use when you have a page URL/ID and need to access its properties; for page content use block-children tools.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page_id` | string | Yes | The UUID of the Notion page to retrieve. Accepts both hyphenated (8-4-4-4-12) and unhyphenated (32 characters) UUID formats. IMPORTANT: Must be a PAGE ID, not a database ID. If you have a database ID, use NOTION_FETCH_DATABASE instead. This endpoint returns page properties and metadata, not page content (use block-children tools for content). For pages with properties containing more than 25 references, use NOTION_GET_PAGE_PROPERTY_ACTION to retrieve complete property values. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve Notion view

**Slug:** `NOTION_RETRIEVE_VIEW`

Retrieve a Notion view and its configuration.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `view_id` | string | Yes | ID of the Notion view to retrieve. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Search Notion pages and databases

**Slug:** `NOTION_SEARCH_NOTION_PAGE`

Searches Notion pages and databases by title. Use specific search terms to find items by title (primary approach). KNOWN LIMITATIONS: (1) Search indexing is not immediate - recently shared items may not appear. (2) Search is not exhaustive - results may be incomplete. (3) Database pages return all custom properties with full nested structures, which can create large responses for databases with many properties - use filter_properties to reduce response size. FALLBACK STRATEGY: If a specific title search returns empty results despite knowing items exist, try an empty query to list all accessible items and filter client-side.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `query` | string | No | Text to search for in page and database titles. Use specific search terms to find items by title (primary approach). Note: Notion's search has known limitations - indexing is not immediate and recently shared items may not appear. If a specific query returns empty results, try an empty query as a fallback to list all accessible items and filter client-side. |
| `direction` | string | No | Specifies the sort direction for the results. Required if `timestamp` is provided. Valid values are `ascending` or `descending`. |
| `page_size` | integer | No | The number of items to include in the response. Must be an integer between 1 and 100, inclusive. Defaults to 25. |
| `timestamp` | string | No | The timestamp field to sort the results by. Currently, the only supported value is `last_edited_time`. If provided, `direction` must also be specified. |
| `filter_value` | string ("page" | "database") | No | Filters results by object type: 'page' or 'database'. Note: When searching databases, Notion's search may not find recently shared or newly created databases due to indexing delays. If specific database searches return empty results, try an empty query with filter_value='database' as a fallback to list all accessible databases. |
| `start_cursor` | string | No | An opaque cursor value from a previous response's `next_cursor` field. Must be exactly as returned by the API - do not pass page IDs, database IDs, or any other identifiers. If `None`, empty, or invalid, results start from the beginning. |
| `filter_property` | string | No | The property to filter the search results by. Currently, the only supported value is `object`, which filters by the type specified in `filter_value`. Defaults to `object`. |
| `filter_properties` | array | No | List of property names to include in the response for page results. When specified, only these properties will be returned in each page's 'properties' object, reducing response size. Useful for database pages with many custom properties. If not specified, all properties are returned. Note: This filter is applied client-side after receiving the API response. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Send file upload

**Slug:** `NOTION_SEND_FILE_UPLOAD`

Tool to transmit file contents to Notion for a file upload object. Use after creating a file upload object to send the actual file data.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `file` | object | Yes | File information including name and mimetype. FileInfo object where 'name' is the filename (e.g., 'document.pdf', 'test.txt'). |
| `part_number` | integer | No | Required when the file upload mode is 'multi_part'. Indicates which part is being sent (parts are numbered starting from 1). For single-part uploads, omit this parameter. |
| `file_upload_id` | string | Yes | Identifier of the file upload object to send data for. This ID is obtained from the Create File Upload action. |
| `file_content_base64` | string | No | Optional base64-encoded file content. If provided, this will be used instead of downloading from S3 or reading from file_path. Useful for direct file content submission. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update block

**Slug:** `NOTION_UPDATE_BLOCK`

Updates existing Notion block's text content. ⚠️ CRITICAL: Content limited to 2000 chars. Cannot change block type or archive blocks. Content exceeding 2000 chars will fail with validation error. For longer content, split across multiple blocks using add_multiple_page_content.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `content` | string | Yes | The new text content for the block. Replaces existing text content entirely. ⚠️ CRITICAL: Notion API enforces a HARD LIMIT of 2000 characters per text.content field. Content exceeding 2000 chars will cause a validation error. For longer content, split across multiple blocks using append_block_children or add_multiple_page_content. |
| `block_id` | string | Yes | Identifier of the Notion block to be updated. Must be a valid UUID (with or without dashes). To find a block's ID, other Notion actions that list or retrieve blocks can be used. For updating content within a page (which is also a block), its ID can be obtained using actions like `NOTION_FETCH_DATA` to get page IDs and titles. |
| `language` | string | No | Programming language for code blocks. Required when block_type='code'. Supported values include: 'abap', 'arduino', 'bash', 'basic', 'c', 'clojure', 'coffeescript', 'c++', 'c#', 'css', 'dart', 'diff', 'docker', 'elixir', 'elm', 'erlang', 'flow', 'fortran', 'f#', 'gherkin', 'glsl', 'go', 'graphql', 'groovy', 'haskell', 'html', 'java', 'javascript', 'json', 'julia', 'kotlin', 'latex', 'less', 'lisp', 'livescript', 'lua', 'makefile', 'markdown', 'markup', 'matlab', 'mermaid', 'nix', 'objective-c', 'ocaml', 'pascal', 'perl', 'php', 'plain text', 'powershell', 'prolog', 'protobuf', 'python', 'r', 'reason', 'ruby', 'rust', 'sass', 'scala', 'scheme', 'scss', 'shell', 'sql', 'swift', 'typescript', 'vb.net', 'verilog', 'vhdl', 'visual basic', 'webassembly', 'xml', 'yaml', 'java/c/c++/c#'. If not provided for a code block, the existing language will be preserved. |
| `block_type` | string | No | The type of the block being updated. If not provided, the action will automatically detect the block type by fetching the block first (adds 1 extra API call). If provided, it must match the EXISTING block's type - you cannot change a block's type. Supported types: 'paragraph', 'heading_1', 'heading_2', 'heading_3', 'bulleted_list_item', 'numbered_list_item', 'to_do', 'toggle', 'code', 'quote', 'callout'. |
| `additional_properties` | object | No | Optional dictionary of type-specific properties. Common examples: 'checked' (boolean) for to_do blocks to mark complete/incomplete, 'color' (string like 'blue_background', 'gray', 'red') for text styling, 'is_toggleable' (boolean) for heading blocks to make them collapsible, 'icon' (object with 'type' and 'emoji' fields) for callout blocks. NOTE: Cannot use 'archived' here - use NOTION_DELETE_BLOCK to remove blocks instead. NOTE: Null/None values are automatically filtered out (omitting a property preserves its existing value). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Page

**Slug:** `NOTION_UPDATE_PAGE`

Update page properties, icon, cover, or archive status. IMPORTANT: Property names are workspace-specific and case-sensitive. Use NOTION_FETCH_ROW or NOTION_FETCH_DATABASE first to discover exact property names and valid select/status options. Common errors: - "X is not a property that exists": Discover properties with NOTION_FETCH_ROW - "Invalid status option": Check valid options with NOTION_FETCH_DATABASE - "should be defined": Wrap values: {'Field': {'type': value}} Property formats: title/rich_text use {'text': {'content': 'value'}}, select/status use {'name': 'option'}

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `icon` | object | No | Page icon object. At least one of properties, archived, icon, or cover is required. |
| `cover` | object | No | Page cover image. Must contain either 'external' (with url) or 'file_upload' key. Empty dicts are treated as no-op. At least one of properties, archived, icon, or cover is required. |
| `page_id` | string | Yes | Identifier for the Notion page to be updated. Use 'page_id' as the parameter name (not 'id'). |
| `archived` | boolean | No | Set to true to archive (trash) the page, false to restore. Note: Workspace-level pages (pages in the sidebar that are not inside a database or another page) may not be archivable via the API depending on workspace configuration. Setting archived=true on an already-archived page or a page with an archived ancestor will be handled gracefully (returns current state without error). At least one of properties, archived, icon, or cover is required. |
| `properties` | object | No | Dictionary mapping property names to property value objects. IMPORTANT: Property names are workspace-specific and case-sensitive. Before updating, use NOTION_FETCH_ROW (for database pages) or NOTION_FETCH_DATABASE to discover the exact property names available in your database. Common properties like 'Status', 'Name', or 'Tags' may have different names in your workspace (e.g., 'Task Name', 'Priority'). For status/select properties, valid option values also vary by workspace - check the database schema for available options. Values must be wrapped in property type objects - never send plain values. Example: {'Status': {'select': {'name': 'Done'}}} not {'Status': 'Done'}. For relation properties, IDs must be valid UUIDs (format: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Database Row (Page)

**Slug:** `NOTION_UPDATE_ROW_DATABASE`

Updates a specific row/page within a Notion database by its page UUID (row_id). IMPORTANT CLARIFICATION: This action updates INDIVIDUAL ROWS (pages) in a database, NOT the database structure. - To update a ROW/PAGE: Use THIS action with `row_id` (the page UUID) - To update DATABASE SCHEMA (columns, properties, title): Use NOTION_UPDATE_SCHEMA_DATABASE with `database_id` REQUIRED: `row_id` is MANDATORY. This is the UUID of the specific page/row to update. Do NOT pass `database_id` to this action - that parameter does not exist here. Common issues: (1) Use UUID from page URL, not the full URL (2) Ensure page is shared with integration (3) Match property names exactly as in database (4) Use 'status' type for Status properties, not 'select' (5) Retry on 409 Conflict errors (concurrent updates) Supports updating properties, icon, cover, or archiving the row.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `icon` | string | No | The emoji to be used as the icon for the page. Must be a single emoji character (e.g., '😻', '🤔'). Empty strings or whitespace-only values are ignored. |
| `cover` | string | No | URL of an external image to be used as the cover for the page (e.g., 'https://google.com/image.png'). Empty strings or whitespace-only values are ignored. |
| `row_id` | string | Yes | REQUIRED: The page UUID of the database row to update. This is a PAGE ID (not a database ID). A database row in Notion is actually a page - use the page's UUID here. Format: 32-character UUID with hyphens (e.g., '59833787-2cf9-4fdf-8782-e53db20768a5'). NOT a URL or page title. Find this ID in the page URL or via 'Copy link' in Notion. NOTE: To update DATABASE structure/schema, use NOTION_UPDATE_SCHEMA_DATABASE instead. This action only updates individual rows/pages within a database. |
| `delete_row` | boolean | No | If true, the row (page) will be archived, effectively deleting it from the active view. If the page is already archived, the action will return success with the current page state. If false, the row will be updated with other provided data. |
| `properties` | array | No | List of properties to update. Each property requires: (1) 'name' - exact property name as shown in Notion, (2) 'type' - the property type (title, rich_text, number, select, status, multi_select, date, people, relation, checkbox, url, email, phone_number, files), (3) 'value' - formatted according to type. IMPORTANT: Verify property names exist in the database and match the exact case. Use 'status' type for Status properties, NOT 'select'. Properties not listed will remain unchanged. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update database schema

**Slug:** `NOTION_UPDATE_SCHEMA_DATABASE`

Updates an existing Notion database's schema including title, description, and/or properties (columns). IMPORTANT NOTES: - At least one update (title, description, or properties) must be provided - The database must be shared with your integration - Property names are case-sensitive and must match exactly - When changing a property to 'relation' type, you MUST provide the database_id of the target database - Removing properties will permanently delete that column and its data - Use NOTION_FETCH_DATA first to get the exact property names and database structure Common errors: - 'database_id' missing: Ensure you're passing the database_id parameter (not page_id) - 'data_source_id' undefined: When changing to relation type, database_id is required in PropertySchemaUpdate - Property name mismatch: Names must match exactly including case and special characters

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `title` | string | No | New title for the database. Leave as None or omit to keep the existing title unchanged. This updates the database name visible in Notion. At least one of (title, description, or properties) must be provided. |
| `properties` | array | No | List of property (column) updates for the database schema. At least one of (title, description, or properties) must be provided. Each PropertySchemaUpdate must specify:  1) 'name': The EXACT case-sensitive name of the existing property 2) One of these actions:    - 'rename': Change the property name    - 'new_type': Change the property type (see PropertySchemaUpdate for valid types)    - 'remove': Set to true to delete the property IMPORTANT: When changing a property to 'relation' type, you MUST also provide 'database_id' with the UUID of the target database to link to. Example: [{'name': 'Status', 'new_type': 'select'}, {'name': 'Tasks', 'new_type': 'relation', 'database_id': 'abc123...'}] |
| `database_id` | string | Yes | REQUIRED: The UUID identifier of the Notion database to update. IMPORTANT: This must be a DATABASE ID, not a page ID. Page IDs and database IDs are both UUIDs but they are NOT interchangeable - passing a page ID will result in an error. Use NOTION_FETCH_DATA with get_databases=true to get available database IDs. Format: UUID with or without hyphens (e.g., 'd9824bdc-8445-4327-be8b-554d41f30b60'). The database must be shared with your integration. NOTE: At least one of (title, description, or properties) must also be provided to perform an update. |
| `description` | string | No | New description for the database. Leave as None or omit to keep the existing description unchanged. This updates the description text shown below the database title. At least one of (title, description, or properties) must be provided. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Notion view

**Slug:** `NOTION_UPDATE_VIEW`

Update a Notion view.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | New name for the view. |
| `sorts` | array | No | View sorts. Set null explicitly to clear existing sorts. |
| `filter` | object | No | View filter. Set null explicitly to clear an existing filter. |
| `view_id` | string | Yes | ID of the Notion view to update. |
| `configuration` | object | No | View presentation configuration. |
| `quick_filters` | object | No | Quick filters. Set null explicitly to clear all quick filters. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Upsert database rows

**Slug:** `NOTION_UPSERT_ROW_DATABASE`

Tool to upsert rows in a Notion database by querying for existing rows and creating or updating them. Use when you need to sync data to Notion without creating duplicates. Each item is matched by a filter, then either created (if no match) or updated (if match found). Supports bulk operations with per-item error handling.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `items` | array | Yes | Array of items to upsert. Each item contains match criteria and create/update payloads. |
| `options` | object | No | Options controlling upsert behavior. |
| `database_id` | string | No | UUID of the Notion database (legacy). If provided without data_source_id, will attempt to resolve to data_source_id. Only safe for single-source databases. |
| `data_source_id` | string | No | UUID of the Notion data source (preferred). Required if database_id is not provided. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Who Am I

**Slug:** `NOTION_WHO_AM_I`

Return the identity (workspace, owner) of the connected Notion account.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |


## Triggers

### Comment Created

**Slug:** `NOTION_COMMENT_CREATED`

**Type:** webhook

Triggers when a new comment is created in Notion.

Optional `page_id` filter scopes to comments on a specific page. When
omitted, fires for any new comment in the workspace the integration
has access to.

Requires the 'Read comments' capability on the Notion integration. If
a connection was authorized before that capability was enabled, the
user must re-authorize the connection for comment events to flow.

#### Configuration

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page_id` | string | No | Optional page ID to scope comment events. When omitted, the trigger fires for any new comment in the workspace. Requires the 'Read comments' capability on the Notion integration. |

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `authors` | array | No | Actors who performed the action. |
| `comment_id` | string | Yes | ID of the newly created comment. |
| `data` | object | Yes | Page reference for the comment. |
| `event_id` | string | Yes | Unique ID of the webhook event. |
| `event_type` | string | Yes | Notion webhook event type. |
| `timestamp` | string | Yes | ISO 8601 event timestamp. |
| `workspace_id` | string | Yes | Workspace where the event occurred. |
| `workspace_name` | string | No | Workspace name from the event. |

### Database Created

**Slug:** `NOTION_DATABASE_CREATED`

**Type:** webhook

Triggers when a new Notion database (the container) is created.

A database is the post-2025-09-03 container that holds one or more data
sources. This trigger fires for the container's creation event
(`database.created`), distinct from `NOTION_DATASOURCE_CREATED` which
fires when a new data source is added to an existing database.

Most customers calling Notion's `POST /v1/databases` (the legacy API)
or creating a database via the Notion UI will see this event. Adding a
new data source to an existing database fires `data_source.created`
instead — use `NOTION_DATASOURCE_CREATED` for that.

Notion's payload puts `entity.type: "block"` (the container is a
`child_database` block in the content tree) and `entity.id` is the
database id.

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `authors` | array | No | Actors who performed the action. |
| `data` | object | Yes | Where the new database was created. |
| `database_id` | string | Yes | ID of the newly created database. |
| `event_id` | string | Yes | Unique ID of the webhook event. |
| `event_type` | string | Yes | Notion webhook event type. |
| `timestamp` | string | Yes | ISO 8601 event timestamp. |
| `workspace_id` | string | Yes | Workspace where the event occurred. |
| `workspace_name` | string | No | Workspace name from the event. |

### Data Source Created

**Slug:** `NOTION_DATASOURCE_CREATED`

**Type:** webhook

Triggers when a new Notion data source is created.

Fires workspace-wide. The payload's `data.parent` carries the data
source's tree parent (typically the teamspace) for downstream
filtering.

A single template-based database creation can fire multiple
`data_source.created` events at once — one per data source the
template instantiates.

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `authors` | array | No | Actors who performed the action. |
| `data` | object | Yes | Where the new data source was created. |
| `data_source_id` | string | Yes | ID of the newly created data source. |
| `event_id` | string | Yes | Unique ID of the webhook event. |
| `event_type` | string | Yes | Notion webhook event type. |
| `timestamp` | string | Yes | ISO 8601 event timestamp. |
| `workspace_id` | string | Yes | Workspace where the event occurred. |
| `workspace_name` | string | No | Workspace name from the event. |

### Data Source Schema Updated

**Slug:** `NOTION_DATASOURCE_SCHEMA_UPDATED`

**Type:** webhook

Triggers when a Notion data source's schema is updated.

Fires on column add / remove / rename. Payload includes
`data.updated_properties: [{id, name, action}]` so consumers can
discriminate the kind of change downstream.

Optional `data_source_id` filter scopes to schema changes on a single
data source. When omitted, fires for any schema change in the
workspace the integration has access to.

Note: adding a column also fires `page.properties_updated` once per
existing row in the data source. Customers wanting a single
structural-change signal should use this trigger.

#### Configuration

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data_source_id` | string | No | Optional data source ID to scope schema-change events. When omitted, the trigger fires for any data source schema change in the workspace the integration has access to. |

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `authors` | array | No | Actors who performed the action. |
| `data` | object | Yes | Parent reference plus the schema-change details. |
| `data_source_id` | string | Yes | ID of the data source whose schema changed. |
| `event_id` | string | Yes | Unique ID of the webhook event. |
| `event_type` | string | Yes | Notion webhook event type. |
| `timestamp` | string | Yes | ISO 8601 event timestamp. |
| `workspace_id` | string | Yes | Workspace where the event occurred. |
| `workspace_name` | string | No | Workspace name from the event. |

### Page Content Updated

**Slug:** `NOTION_PAGE_CONTENT_UPDATED`

**Type:** webhook

Triggers when the body content of a Notion page is updated.

Customer optionally scopes with at most one of:
  - data_source_id: any row in this data source
  - page_id: this specific page
  - parent_page_id: any page whose immediate parent is this page

With none set, fires for any page content edit in the workspace the
integration has access to. Notion aggregates content edits within a
short window (~60s typical).

#### Configuration

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data_source_id` | string | No | Optional data source ID to scope to body-content edits on any row in this Notion data source. Mutually exclusive with page_id and parent_page_id. |
| `page_id` | string | No | Optional page ID to scope to body-content edits on this specific Notion page. Mutually exclusive with data_source_id and parent_page_id. |
| `parent_page_id` | string | No | Optional parent page ID to scope to body-content edits on any page whose immediate parent is this Notion page (does not match grandchildren). Mutually exclusive with data_source_id and page_id. |

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `authors` | array | No | Actors who performed the action. |
| `data` | object | Yes | Parent reference plus the list of updated blocks. |
| `event_id` | string | Yes | Unique ID of the webhook event. |
| `event_type` | string | Yes | Notion webhook event type. |
| `page_id` | string | Yes | ID of the page whose content changed. For child-block additions (e.g. a new sub-page), this is the parent's ID. |
| `timestamp` | string | Yes | ISO 8601 event timestamp. |
| `workspace_id` | string | Yes | Workspace where the event occurred. |
| `workspace_name` | string | No | Workspace name from the event. |

### Page Created

**Slug:** `NOTION_PAGE_CREATED`

**Type:** webhook

Triggers when a new Notion page is created.

Customer optionally scopes with at most one of:
  - data_source_id: new row in this data source
  - parent_page_id: new sub-page under this page (immediate parent only)

With neither set, fires for any new page in the workspace the
integration has access to. Notion sends ~60s aggregation latency on
most events.

#### Configuration

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data_source_id` | string | No | Optional data source ID to scope to new rows in this Notion data source. Mutually exclusive with parent_page_id. Find the data source ID via Notion's API (GET /v1/databases/{id}.data_sources[].id) or the data source URL. |
| `parent_page_id` | string | No | Optional parent page ID to scope to new sub-pages whose immediate parent is this Notion page (does not match grandchildren). Mutually exclusive with data_source_id. |

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `authors` | array | No | Actors who performed the action. |
| `data` | object | Yes | Where the new page was created. |
| `event_id` | string | Yes | Unique ID of the webhook event. |
| `event_type` | string | Yes | Notion webhook event type. |
| `page_id` | string | Yes | ID of the newly created page. |
| `timestamp` | string | Yes | ISO 8601 event timestamp. |
| `workspace_id` | string | Yes | Workspace where the event occurred. |
| `workspace_name` | string | No | Workspace name from the event. |

### Page Properties Updated

**Slug:** `NOTION_PAGE_PROPERTIES_UPDATED`

**Type:** webhook

Triggers when properties of a Notion page are updated.

Customer optionally scopes with at most one of:
  - data_source_id: any row in this data source
  - page_id: this specific page
  - parent_page_id: any page whose immediate parent is this page

With none set, fires for any property change in the workspace the
integration has access to. Adding a column to a data source fires this
trigger once per existing row. Customers can branch on
`data.updated_properties` (array of property IDs) to filter downstream.

#### Configuration

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data_source_id` | string | No | Optional data source ID to scope to property changes on any row in this Notion data source. Mutually exclusive with page_id and parent_page_id. |
| `page_id` | string | No | Optional page ID to scope to property changes on this specific Notion page. Mutually exclusive with data_source_id and parent_page_id. |
| `parent_page_id` | string | No | Optional parent page ID to scope to property changes on any page whose immediate parent is this Notion page (does not match grandchildren). Mutually exclusive with data_source_id and page_id. |

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `authors` | array | No | Actors who performed the action. |
| `data` | object | Yes | Parent reference plus the list of property IDs that changed. |
| `event_id` | string | Yes | Unique ID of the webhook event. |
| `event_type` | string | Yes | Notion webhook event type. |
| `page_id` | string | Yes | ID of the page whose properties changed. |
| `timestamp` | string | Yes | ISO 8601 event timestamp. |
| `workspace_id` | string | Yes | Workspace where the event occurred. |
| `workspace_name` | string | No | Workspace name from the event. |

### View Created

**Slug:** `NOTION_VIEW_CREATED`

**Type:** webhook

Triggers when a new Notion view is created.

Fires workspace-wide. The payload includes `data.view_type`
(`table`, `board`, `gallery`, `calendar`, `list`, `timeline`, `gantt`)
and `data.parent` pointing at the view's tree parent (typically the
teamspace), so customers can filter downstream.

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `authors` | array | No | Actors who performed the action. |
| `data` | object | Yes | Parent reference plus the view's layout type. |
| `event_id` | string | Yes | Unique ID of the webhook event. |
| `event_type` | string | Yes | Notion webhook event type. |
| `timestamp` | string | Yes | ISO 8601 event timestamp. |
| `view_id` | string | Yes | ID of the newly created view. |
| `workspace_id` | string | Yes | Workspace where the event occurred. |
| `workspace_name` | string | No | Workspace name from the event. |
