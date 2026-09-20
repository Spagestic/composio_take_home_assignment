# Coda

Collaborative workspace platform that transforms documents into powerful tools for team productivity and project management

- **Category:** productivity
- **Auth:** API_KEY
- **Composio-managed OAuth available?** N/A
- **Tools:** 110
- **Triggers:** 4
- **Slug:** `CODA`
- **Version:** 20260618_00

## Tools

### Add a category for pack

**Slug:** `CODA_ADD_A_CATEGORY_FOR_PACK`

Add a publishing category for a given pack.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `packId` | integer | Yes | ID of a Pack |
| `categoryName` | string | Yes | Name of the publishing category. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Add a maker for pack

**Slug:** `CODA_ADD_A_MAKER_FOR_PACK`

Add a maker to a Pack. Makers are users who are displayed as contributors on the Pack's public listing page. You must be an owner or admin of the Pack to add makers. This is typically used to credit collaborators and team members who contributed to the Pack's development.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `packId` | integer | Yes | The unique identifier of the Pack. You must have admin/owner permissions on this Pack to add makers. |
| `loginId` | string | Yes | The email address (login ID) of the user to add as a Pack maker. This user will be displayed as a maker on the Pack's public listing page. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Add a permission for pack

**Slug:** `CODA_ADD_A_PERMISSION_FOR_PACK`

Create or modify permissions for a given Pack. This action allows you to grant access to a Pack for users or workspaces. If a permission already exists for the specified principal, it will be updated with the new access level. The API returns a permission ID which is the same for updates to existing permissions. Note: You must have admin access to the Pack to manage its permissions.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `access` | string ("view" | "test" | "edit" | "admin") | Yes | Access level to grant for the Pack. Options: - 'view': Can view the Pack and its details. - 'test': Can test the Pack in their docs. - 'edit': Can modify the Pack (requires maker permissions). - 'admin': Full administrative access to the Pack. |
| `packId` | integer | Yes | ID of a Pack |
| `principal` | object | Yes | Metadata about a Pack principal. Must be a dictionary specifying who gets the permission. Supported types: 1) Workspace: {"type": "workspace", "workspaceId": "ws-xxx"} - Grant permission to an entire workspace. 2) User (email): {"type": "email", "email": "user@example.com"} - Grant permission to a specific user by email. Note: Not all principal types may be supported depending on pack configuration and user permissions. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Add custom domain

**Slug:** `CODA_ADD_CUSTOM_DOMAIN`

Add a custom domain to a published doc. This action allows you to map a custom domain (like 'docs.yourcompany.com') to a published Coda doc. Before using this action: 1. The doc must be published (use CODA_PUBLISH_DOC action first) 2. Your Coda account must have a paid plan (Pro, Team, or Enterprise) 3. You'll need to configure DNS settings at your domain registrar after adding the domain The domain setup typically takes 5-10 minutes to initialize after DNS is configured. You can check the status using CODA_LIST_CUSTOM_DOC_DOMAINS action. Note: Custom domains are NOT available on Coda's Free tier.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `docId` | string | Yes | The unique identifier of the Coda doc to which the custom domain will be added. The doc must be published before adding a custom domain. Example: 'dG7v27oLhI' |
| `customDocDomain` | string | Yes | The custom domain name to add to the published doc (e.g., 'docs.example.com' or 'www.mysite.com'). You must configure DNS settings at your domain registrar to point to Coda's servers before the domain will be fully functional. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Add permission

**Slug:** `CODA_ADD_PERMISSION`

Adds a new permission to the doc.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `docId` | string | Yes | ID of the doc. |
| `access` | string ("readonly" | "write" | "comment") | Yes | Type of access to grant. 'readonly' allows viewing only, 'write' allows editing, 'comment' allows commenting. |
| `principal` | object | Yes | The user, group, domain, or anyone principal to grant access to. Use type='email' with email field for individual users, type='group' with groupId for groups, type='domain' with name for domain access, or type='anyone' for public access. |
| `suppressEmail` | boolean | No | When true, suppresses email notification to the principal about the new permission. Default is false. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Begin content export

**Slug:** `CODA_BEGIN_CONTENT_EXPORT`

Initiate an asynchronous export of page content in HTML or Markdown format. This action starts a content export job and returns immediately with a request ID and status URL. The export is processed asynchronously. Use the returned 'href' URL with the 'content_export_status' action to poll for completion and retrieve the exported content.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `docId` | string | Yes | Unique identifier of the Coda document containing the page to export. |
| `outputFormat` | string ("html" | "markdown") | Yes | Output format for the exported page content. Supported formats are 'html' (preserves rich formatting) and 'markdown' (provides plain text representation).  |
| `pageIdOrName` | string | Yes | ID or name of the page to export. Page IDs are recommended (format: 'canvas-XXXXXXXX') as they are stable. Names can be used but should be URI-encoded and may be ambiguous if multiple pages share the same name. When multiple pages have the same name, an arbitrary one will be selected. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Content export status

**Slug:** `CODA_CONTENT_EXPORT_STATUS`

Check the status of a page content export operation. Use this to poll the export status and retrieve the download link when the export completes.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `docId` | string | Yes | The unique identifier of the Coda document containing the page. |
| `requestId` | string | Yes | The unique identifier of the content export request, obtained from the 'Begin content export' action. |
| `pageIdOrName` | string | Yes | ID or name of the page. Names are discouraged because they"re easily prone to being changed by users. If you"re using a name, be sure to URI-encode it. If you provide a name and there are multiple pages with the same name, an arbitrary one will be selected.   |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Copy Document

**Slug:** `CODA_COPY_DOC`

Creates a copy of an existing Coda document. This action allows you to duplicate a document while optionally specifying a new title and location for the copied document.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `title` | string | No | Title for the new document. If not specified, defaults to 'Untitled'. |
| `timezone` | string | No | The timezone to use for the newly created document. |
| `folder_id` | string | No | The ID of the folder where the new document will be created. If not specified, defaults to your 'My docs' folder. |
| `source_doc_id` | string | Yes | ID of the existing document to copy. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create a new pack release

**Slug:** `CODA_CREATE_A_NEW_PACK_RELEASE`

Creates a new Pack release based on an existing Pack version.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `packId` | integer | Yes | ID of a Pack |
| `packVersion` | string | Yes | The semantic version of the Pack to release (e.g., '1.0.0', '1.2.3'). Must be an existing Pack version. |
| `releaseNotes` | string | No | Optional release notes describing changes, improvements, or fixes in this release. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create a page

**Slug:** `CODA_CREATE_A_PAGE`

Create a new page in a doc. Note that creating a page requires you to be a Doc Maker in the applicable workspace.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | Name of the page. |
| `docId` | string | Yes | ID of the doc. |
| `iconName` | string | No | Name of the icon. |
| `imageUrl` | string | No | Url of the cover image to use. |
| `subtitle` | string | No | Subtitle of the page. |
| `pageContent` | string | No | Content for the page. Must be a discriminated union with a 'type' field. Valid types: 'canvas' for text/rich text content, 'embed' for full-page embeds. For canvas: {'type': 'canvas', 'canvasContent': {'format': 'html'&#124;'markdown', 'content': '...'}}. For embed: {'type': 'embed', 'url': 'https://...'}. NOTE: Tables cannot be created via pageContent - use separate table insertion APIs after page creation. |
| `parentPageId` | string | No | The ID of this new page"s parent, if creating a subpage. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create doc

**Slug:** `CODA_CREATE_DOC`

Creates a new Coda doc, optionally copying an existing doc. Note that creating a doc requires you to be a Doc Maker in the applicable workspace (or be auto-promoted to one).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `title` | string | No | Title of the new doc. Defaults to "Untitled". |
| `folderId` | string | No | The ID of the folder within which to create this doc. Defaults to your "My docs" folder in the oldest workspace you joined; this is subject to change. You can get this ID by opening the folder in the docs list on your computer and grabbing the `folderId` query parameter.   |
| `timezone` | string | No | The timezone to use for the newly created doc. |
| `sourceDoc` | string | No | An optional doc ID from which to create a copy. |
| `initialPage` | object | No | The initial page to create in the doc. Can include properties like 'name' (page title), 'subtitle', 'iconName', 'imageUrl', 'parentPageId', and 'pageContent' (with 'type': 'canvas' and 'canvasContent' containing HTML). This allows you to pre-configure the first page of the newly created document. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Folder

**Slug:** `CODA_CREATE_FOLDER`

Creates a new folder in a Coda workspace. Use this action to organize documents by creating folders within a workspace. Folders help structure content and make it easier to navigate and manage documents.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Name of the folder to create. |
| `description` | string | No | Description of the folder to provide context about its purpose. |
| `workspaceId` | string | Yes | ID of the workspace where the folder should be created. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Pack

**Slug:** `CODA_CREATE_PACK`

Creates a new Pack in Coda. A Pack is a container for custom functionality that extends Coda's capabilities. This endpoint registers a new Pack and returns its ID. After creation, you'll need to separately upload the Pack's source code and assets. Prerequisites: - You must have appropriate permissions in the target workspace - The workspace must allow Pack creation Next steps after creation: 1. Upload Pack source code using the upload pack source code endpoint 2. Upload Pack assets (logos, images) using the upload pack asset endpoint 3. Register a Pack version to make it available for use

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | The name for the Pack. This is a required field and will be displayed to users when they browse or search for Packs. Should be descriptive and unique within your workspace. Can be an empty string but it's recommended to provide a meaningful name. |
| `description` | string | No | A brief description of what the Pack does and its purpose. This helps users understand the Pack's functionality. Optional but recommended for better discoverability. Can include details about features, use cases, or any special requirements. |
| `workspaceId` | string | No | The parent workspace ID where the Pack will be created. If not specified, the Pack will be created in the authenticated user's default workspace. You can obtain workspace IDs from the user info or list docs endpoints. |
| `sourcePackId` | integer | No | The ID of an existing Pack to fork/copy from. Use this when creating a new Pack based on an existing one. The new Pack will inherit the source Pack's code and configuration. Leave empty for creating a Pack from scratch. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Pack Invitation

**Slug:** `CODA_CREATE_PACK_INVITATION`

Create an invitation for a user to access a Pack. This action sends an invitation to the specified email address, granting them access to the Pack at the specified access level. The invitee will receive an email notification with instructions to accept the invitation. Prerequisites: - You must have appropriate permissions (admin or owner) on the Pack to create invitations - The email address must be valid Note: The invitation must be accepted by the recipient to grant them actual access to the Pack.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `email` | string | Yes | Email address of the user to invite to the Pack. The invitation will be sent to this email address. |
| `access` | string ("none" | "view" | "test" | "edit" | "admin") | Yes | Access level to grant for the Pack. Options: 'none' - No access, 'view' - Can view the Pack and its details, 'test' - Can test the Pack in their docs, 'edit' - Can modify the Pack (requires maker permissions), 'admin' - Full administrative access to the Pack. |
| `packId` | integer | Yes | ID of the Pack to create an invitation for. You must have appropriate permissions on this Pack to create invitations. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete a category for pack

**Slug:** `CODA_DELETE_A_CATEGORY_FOR_PACK`

Delete a publishing category for a given pack.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `packId` | integer | Yes | ID of a Pack |
| `categoryName` | string | Yes | Name of a publishing category |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete a maker for pack

**Slug:** `CODA_DELETE_A_MAKER_FOR_PACK`

Removes a maker from a Pack's maker list. The maker will no longer be displayed as a contributor on the Pack's public page. This action requires admin access to the Pack. The operation returns successfully even if the maker was not previously listed for the Pack.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `packId` | integer | Yes | The unique numeric identifier of the Pack from which to remove the maker. |
| `loginId` | string | Yes | The email address of the maker to be removed from the Pack's maker list. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete a page

**Slug:** `CODA_DELETE_A_PAGE`

Deletes the specified page.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `docId` | string | Yes | ID of the doc. |
| `pageIdOrName` | string | Yes | ID or name of the page. Names are discouraged because they"re easily prone to being changed by users. If you"re using a name, be sure to URI-encode it. If you provide a name and there are multiple pages with the same name, an arbitrary one will be selected.   |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete a permission for pack

**Slug:** `CODA_DELETE_A_PERMISSION_FOR_PACK`

Delete user, workspace, or global permissions for a given Pack.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `packId` | integer | Yes | ID of a Pack |
| `permissionId` | string | Yes | ID of a permission on a pack. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete doc

**Slug:** `CODA_DELETE_DOC`

Permanently deletes a Coda doc. This action permanently removes the specified doc and all its contents including pages, tables, formulas, and data. The deletion is processed asynchronously and returns immediately with a 202 Accepted status. The doc will be fully deleted within a few seconds. **Warning**: This is a destructive operation that cannot be undone. Ensure you have the correct doc ID before executing this action. **Permissions**: You must be the owner of the doc or have appropriate deletion permissions. **Error Responses**: - 404: The doc does not exist or you don't have access to it - 401: Invalid or expired API token - 403: You don't have permission to delete this doc

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `docId` | string | Yes | The unique identifier of the doc to delete. This is the alphanumeric ID found in the doc's URL (e.g., 'AbCDeFGH' from https://coda.io/d/_dAbCDeFGH). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Folder

**Slug:** `CODA_DELETE_FOLDER`

Tool to delete a folder in Coda. Use when you need to permanently remove a folder. This operation deletes the specified folder.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `folder_id` | string | Yes | ID of the folder to delete. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete multiple rows

**Slug:** `CODA_DELETE_MULTIPLE_ROWS`

Deletes multiple rows from a Coda table or view. This action queues the specified rows for deletion and returns immediately with a 202 status. The actual deletion is processed asynchronously and typically completes within several seconds. Use the returned requestId with the getMutationStatus endpoint to verify completion if needed.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `docId` | string | Yes | ID of the Coda document containing the table with rows to delete. |
| `rowIds` | array | Yes | Array of row IDs to delete from the table. Each ID should be in the format 'i-xxxxxxxxxx'. |
| `tableIdOrName` | string | Yes | ID or name of the table containing the rows to delete. Table IDs (e.g., 'grid-abc123') are recommended over names since names can be changed by users. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete pack

**Slug:** `CODA_DELETE_PACK`

Delete a given Pack.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `packId` | integer | Yes | ID of a Pack |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Pack listing draft

**Slug:** `CODA_DELETE_PACK_LISTING_DRAFT`

Delete the listing draft for a Pack, discarding any unsaved changes. Tool to delete the listing draft for a Pack, discarding any unsaved changes. Use when you need to discard a draft listing for a Pack without publishing it. This removes the draft version and reverts to the last published listing (if any). **Important**: This action permanently discards all unpublished changes to the Pack listing. To publish changes instead of discarding them, use the appropriate publish action.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `packId` | integer | Yes | ID of the Pack whose listing draft should be deleted. This is the unique numeric identifier assigned when the Pack was created. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Page Content

**Slug:** `CODA_DELETE_PAGE_CONTENT`

Tool to delete content from a Coda page. Use when you need to remove specific elements or all content from a page. This endpoint returns a 202 status code indicating the deletion has been queued and will be processed within seconds.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `doc_id` | string | Yes | ID of the doc containing the page. |
| `element_ids` | array | No | IDs of the elements to delete from the page. If omitted or empty, all content will be deleted. |
| `page_id_or_name` | string | Yes | ID or name of the page. Names are discouraged because they're easily prone to being changed by users. If you provide a name and there are multiple pages with the same name, an arbitrary one will be selected. Note: URI encoding is handled automatically. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete permission

**Slug:** `CODA_DELETE_PERMISSION`

Deletes an existing permission from a Coda document. This action permanently removes access for a specific user, group, or domain that was previously granted to the document. To use this action, you must first obtain the permissionId from the LIST_PERMISSIONS action. The deletion is immediate and cannot be undone through the API. Common use cases: - Revoking access when a user no longer needs to view/edit the document - Managing document security by removing obsolete permissions - Cleaning up permissions after organizational changes Note: This action requires appropriate permissions to manage document access.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `docId` | string | Yes | The unique identifier of the Coda document from which to delete the permission. Can be obtained from LIST_AVAILABLE_DOCS or CREATE_DOC actions. |
| `permissionId` | string | Yes | The unique identifier of the permission to delete. This ID can be retrieved from the LIST_PERMISSIONS action. Each permission represents access granted to a specific user, group, or domain for the document. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete row

**Slug:** `CODA_DELETE_ROW`

Deletes the specified row from the table or view. This endpoint will always return a 202, so long as the row exists and is accessible (and the update is structurally valid). Row deletions are generally processed within several seconds. When deleting using a name as opposed to an ID, an arbitrary row will be removed.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `docId` | string | Yes | ID of the doc. |
| `rowIdOrName` | string | Yes | ID or name of the row. Names are discouraged because they"re easily prone to being changed by users. If you"re using a name, be sure to URI-encode it. If there are multiple rows with the same value in the identifying column, an arbitrary one will be selected.   |
| `tableIdOrName` | string | Yes | ID or name of the table. Names are discouraged because they"re easily prone to being changed by users. If you"re using a name, be sure to URI-encode it.  |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Deletes a custom domain

**Slug:** `CODA_DELETES_A_CUSTOM_DOMAIN`

Deletes a custom domain from a published doc.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `docId` | string | Yes | ID of the Coda doc from which to remove the custom domain. Example: 'rqC5QoVKYT' |
| `customDocDomain` | string | Yes | The custom domain name to delete (e.g., 'example.com', 'docs.mycompany.io'). Note: The API returns 200 OK even if the domain doesn't exist on the doc. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Fetch grouped logs by pack org root ingestion id

**Slug:** `CODA_FETCH_GROUPED_LOGS_BY_PACK_ORG_ROOT_INGESTION_ID`

Retrieve the grouped logs of a Pack ingestion for debugging purposes. This action is used with Coda Brain (Enterprise feature) to retrieve and debug logs from Pack ingestion processes. It provides detailed log information grouped by invocation, including timestamps, log levels, messages, and execution status. Note: This endpoint requires valid organizationId and rootIngestionId values which are only available for Enterprise accounts with Coda Brain enabled. These IDs track data ingestion from external sources via Packs.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `q` | string | No | A search query that follows Lucene syntax.  |
| `limit` | integer | No | Maximum number of results to return in this query. |
| `order` | string ("asc" | "desc") | No | Specifies if the logs will be returned in time desc or asc. Default is desc.   |
| `packId` | integer | Yes | ID of a Pack |
| `pageToken` | string | No | An opaque token used to fetch the next page of results. |
| `afterTimestamp` | string | No | Only return logs after the given time (non-inclusive).  |
| `organizationId` | string | Yes | ID of the organization. |
| `beforeTimestamp` | string | No | Only return logs before the given time (non-inclusive).  |
| `rootIngestionId` | string | Yes | ID of the root ingestion. |
| `ingestionExecutionId` | string | No | ID of the ingestion execution. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Fetch ingestion executions for pack

**Slug:** `CODA_FETCH_INGESTION_EXECUTIONS_FOR_PACK`

Retrieve the ingestion execution ids of a root ingestion for debugging purpose. This action is typically used with Coda Brain (Enterprise feature) to track and debug data ingestion processes from external sources via Packs. Note: This endpoint requires valid organizationId and rootIngestionId values which are only available for Enterprise accounts with Coda Brain enabled.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of results to return in this query. |
| `order` | string ("asc" | "desc") | No | Sort order for ingestion executions by time: 'asc' (ascending/oldest first) or 'desc' (descending/newest first). Default is 'desc'. |
| `packId` | integer | Yes | ID of a Pack |
| `pageToken` | string | No | An opaque token used to fetch the next page of results. |
| `datasource` | string | No | Filter results by datasource name (e.g., the external data source being ingested). |
| `executionType` | string ("FULL" | "INCREMENTAL") | No | Filter results by execution type: 'FULL' (complete data sync) or 'INCREMENTAL' (delta/changes only). |
| `afterTimestamp` | string | No | Only return ingestion executions after the given time (non-inclusive). Format: ISO 8601 timestamp. |
| `csbIngestionId` | string | No | Filter results by specific CSB (Coda Sync Bridge) ingestion ID. |
| `organizationId` | string | Yes | ID of the organization. This is an Enterprise-level identifier used with Coda Brain features. |
| `beforeTimestamp` | string | No | Only return ingestion executions before the given time (non-inclusive). Format: ISO 8601 timestamp. |
| `ingestionStatus` | string ("QUEUED" | "STARTED" | "CANCELLED" | "UP_FOR_RETRY" | "COMPLETED" | "FAILED") | No | Filter results by ingestion execution status. Options: QUEUED, STARTED, CANCELLED, UP_FOR_RETRY, COMPLETED, FAILED. |
| `rootIngestionId` | string | Yes | ID of the root ingestion. This identifies a specific data ingestion process in Coda Brain. |
| `csbIngestionExecutionId` | string | No | Filter results by specific CSB (Coda Sync Bridge) ingestion execution ID. |
| `includeDeletedIngestions` | boolean | No | Include deleted ingestion executions in the response. Default is false. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get acl settings

**Slug:** `CODA_GET_ACL_SETTINGS`

Returns settings associated with ACLs for this Coda doc.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `docId` | string | Yes | ID of the doc. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get a column

**Slug:** `CODA_GET_A_COLUMN`

Returns detailed information about a specific column in a Coda table. Retrieves column metadata including: - Column ID, name, type, and href - Format details (type, isArray, label, action, displayType, etc.) - Whether it's a display column or calculated column - Formula (for calculated columns) - Default value - Parent table and page information

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `docId` | string | Yes | ID of the Coda document. |
| `tableIdOrName` | string | Yes | ID or name of the table. Names are discouraged because they're easily prone to being changed by users. If you're using a name, be sure to URI-encode it. |
| `columnIdOrName` | string | Yes | ID or name of the column. Names are discouraged because they're easily prone to being changed by users. If you're using a name, be sure to URI-encode it. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get a control

**Slug:** `CODA_GET_A_CONTROL`

Returns info on a control.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `docId` | string | Yes | ID of the doc. |
| `controlIdOrName` | string | Yes | ID or name of the control. Names are discouraged because they"re easily prone to being changed by users. If you"re using a name, be sure to URI-encode it.  |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get a formula

**Slug:** `CODA_GET_A_FORMULA`

Returns info on a formula.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `docId` | string | Yes | ID of the doc. |
| `formulaIdOrName` | string | Yes | ID or name of the formula. Names are discouraged because they're easily prone to being changed by users. If you're using a name, be sure to URI-encode it. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get analytics last updated day

**Slug:** `CODA_GET_ANALYTICS_LAST_UPDATED_DAY`

Returns days based on Pacific Standard Time when analytics were last updated.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get a page

**Slug:** `CODA_GET_A_PAGE`

Returns details about a page.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `docId` | string | Yes | ID of the doc. |
| `pageIdOrName` | string | Yes | ID or name of the page. Names are discouraged because they"re easily prone to being changed by users. If you"re using a name, be sure to URI-encode it. If you provide a name and there are multiple pages with the same name, an arbitrary one will be selected.   |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get a row

**Slug:** `CODA_GET_A_ROW`

Retrieves detailed information about a specific row in a Coda table, including all cell values, metadata (creation/update timestamps), and parent table information. Use this action when you need to read data from a specific row in a Coda document.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `docId` | string | Yes | Unique identifier of the Coda document containing the table and row. |
| `rowIdOrName` | string | Yes | ID or name of the row to retrieve. Row IDs (e.g., 'i-xyz123') are recommended over names as names can be changed by users. If using a name, ensure it is properly URI-encoded. If multiple rows have the same name value, an arbitrary one will be returned. |
| `valueFormat` | string ("simple" | "simpleWithArrays" | "rich") | No | Format for cell values in the response. Options: 'simple' (default) returns primitive types (string/number/boolean) with arrays as comma-delimited strings; 'simpleWithArrays' returns arrays as JSON arrays; 'rich' returns values with full encoding including Markdown for text and structured data for complex types (currency, person, image, etc.). |
| `tableIdOrName` | string | Yes | ID or name of the table containing the row. Table IDs (e.g., 'grid-xyz123') are recommended over names as names can be changed by users. If using a name, ensure it is properly URI-encoded. |
| `useColumnNames` | boolean | No | When true, returns column names as keys in the values object instead of column IDs. Default is false. Using column IDs is recommended as column names can be changed by users, which may break integrations relying on specific names. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Pack details by ID

**Slug:** `CODA_GET_A_SINGLE_PACK`

Retrieves detailed information about a specific Coda Pack by its ID. Returns pack metadata including name, description, workspace, logo URL, categories, rate limits, and configuration settings. Only accessible for Packs that the authenticated user has created or has been granted access to.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `packId` | integer | Yes | The unique identifier of the Pack to retrieve. Must be a Pack that the authenticated user has created or has access to. You can obtain Pack IDs by creating a new Pack with the 'create_pack' action or by listing accessible Packs with the 'list_packs' action. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get a table

**Slug:** `CODA_GET_A_TABLE`

Returns details about a specific table or view.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `docId` | string | Yes | ID of the doc. |
| `tableIdOrName` | string | Yes | ID or name of the table. Names are discouraged because they're easily prone to being changed by users. If you're using a name, be sure to URI-encode it. |
| `useUpdatedTableLayouts` | boolean | No | Return "detail" and "form" for the `layout` field of detail and form layouts respectively (instead of "masterDetail" for both)  |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get detailed listing information for a pack

**Slug:** `CODA_GET_DETAILED_LISTING_INFORMATION_FOR_A_PACK`

Get comprehensive public listing information for a Coda Pack. Returns detailed metadata about a Pack including its description, logo, categories, makers, pricing, version information, and user access permissions. This endpoint provides the same information displayed on the Pack's public listing page in the Coda Pack gallery. Optionally accepts workspace/document context to check installation privileges and release channel to retrieve specific versions (LIVE or LATEST).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `docId` | string | No | Optional document ID to check installation privileges for that specific document. If provided, the response will include user access permissions relative to this document. |
| `packId` | integer | Yes | ID of the Pack to retrieve detailed listing information for. |
| `workspaceId` | string | No | Optional workspace ID to check installation privileges in that specific workspace. If provided, the response will include user access permissions relative to this workspace. |
| `installContext` | string ("workspace" | "doc") | No | Optional installation context type (workspace or doc) to specify where the Pack would be installed. When provided, must be accompanied by the corresponding workspaceId (if context is 'workspace') or docId (if context is 'doc'). Affects the userAccess permissions returned in the response. |
| `releaseChannel` | string ("LIVE" | "LATEST") | No | Optional release channel to retrieve Pack information for. LIVE returns the current live/production version, LATEST returns the most recently uploaded version (may be unpublished). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get doc analytics summary

**Slug:** `CODA_GET_DOC_ANALYTICS_SUMMARY`

Returns aggregated analytics summary data across documents, including session counts, installs, copies, reads, and conversions. Can be filtered by publication status, date range, and workspace.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `sinceDate` | string | No | Limit results to activity on or after this date. Format: YYYY-MM-DD (e.g., '2025-01-01'). |
| `untilDate` | string | No | Limit results to activity on or before this date. Format: YYYY-MM-DD (e.g., '2025-12-31'). |
| `isPublished` | boolean | No | Limit results to only published items. |
| `workspaceId` | string | No | ID of the workspace to filter analytics. If not specified, returns analytics for all accessible workspaces. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get doc categories

**Slug:** `CODA_GET_DOC_CATEGORIES`

Retrieves the list of all available doc categories in Coda. These categories can be used when publishing docs to help users discover content.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get folder

**Slug:** `CODA_GET_FOLDER`

Tool to get metadata about a Coda folder. Use when you need to retrieve information about a specific folder including its name, description, icon, workspace, and editing permissions.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `folderId` | string | Yes | ID of the folder. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get info about a doc

**Slug:** `CODA_GET_INFO_ABOUT_A_DOC`

Retrieves comprehensive metadata for a specific Coda document. This action returns detailed information about a document including its name, owner, creation/update timestamps, workspace and folder location, size metrics (page count, row count, table count), icon, publication status, and source document reference if the doc was copied from another. This is useful for understanding document properties, discovering document structure, and tracking document relationships.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `docId` | string | Yes | The unique identifier of the Coda document. This is the document ID visible in the URL (e.g., 'abc123XYZ' from 'https://coda.io/d/_dabc123XYZ'). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get mutation status

**Slug:** `CODA_GET_MUTATION_STATUS`

Checks whether an asynchronous mutation operation has been applied to a Coda document. When you perform mutations like inserting/updating rows, deleting rows, or pushing buttons, the Coda API returns a 202 status with a requestId. These operations are queued and processed asynchronously (usually within a few seconds). Use this tool to verify that your mutation has been successfully applied before proceeding with dependent operations. Important notes: - Mutation status information is only available for about 24 hours after completion - This should be used shortly after the mutation request was made - Returns completed=true when the operation has finished, completed=false if still pending

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `requestId` | string | Yes | The unique request identifier returned from a mutation operation (e.g., 'mutate:c39bd6d9-2719-40e4-bd21-110f3c520031'). This ID is provided in the response from mutation endpoints like upsert rows, delete row, or push button. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get pack analytics summary

**Slug:** `CODA_GET_PACK_ANALYTICS_SUMMARY`

Returns summarized analytics data for Packs the user can edit. This endpoint provides aggregate statistics including: - Total Pack invocations across all accessible Packs - Total document installations - Total workspace installations All query parameters are optional. If no filters are specified, returns analytics for all Packs the authenticated user can edit.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `packIds` | array | No | Which Pack IDs to fetch. Note: This parameter may not be supported by the API endpoint. |
| `sinceDate` | string | No | Limit results to activity on or after this date (ISO 8601 format, e.g., '2024-01-01'). |
| `untilDate` | string | No | Limit results to activity on or before this date (ISO 8601 format, e.g., '2024-12-31'). |
| `isPublished` | boolean | No | Limit results to only published Packs. If false or unspecified, returns analytics for all Packs including published ones. |
| `workspaceId` | string | No | ID of the workspace to filter analytics by. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Gets custom doc domains providers

**Slug:** `CODA_GETS_CUSTOM_DOC_DOMAINS_PROVIDERS`

Identifies the domain registrar/provider for a given domain name by performing a DNS lookup. Returns the provider name (e.g., GoDaddy, Namecheap) or 'Other' if unidentified. Useful for determining where to configure DNS settings when setting up custom domains for published Coda docs.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `customDocDomain` | string | Yes | The domain name to check (e.g., 'example.com' or 'docs.example.com'). Can be any valid domain; does not need to be configured in Coda. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get sharing metadata

**Slug:** `CODA_GET_SHARING_METADATA`

Returns metadata associated with sharing for this Coda doc.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `docId` | string | Yes | ID of the doc. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Gets the json schema for pack configuration

**Slug:** `CODA_GETS_THE_JSON_SCHEMA_FOR_PACK_CONFIGURATION`

Retrieves the JSON Schema that defines the configuration options available for a specific Coda Pack. This schema describes how the Pack can be customized, including connection settings, OAuth scopes, endpoint configurations, sharing permissions, and which Pack components (formulas, actions, sync tables) are available for use.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `packId` | integer | Yes | The unique numeric ID of the Coda Pack for which to retrieve the configuration schema. This ID can be obtained from the List Packs endpoint. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get the difference between two pack versions

**Slug:** `CODA_GET_THE_DIFFERENCE_BETWEEN_TWO_PACK_VERSIONS`

Gets information about the difference between the specified previous version and next version of a Pack. This endpoint compares two semantic versions of a Pack and returns the differences. Both versions must exist for the specified pack.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `packId` | integer | Yes | ID of a Pack. Must be a pack you own or have access to. |
| `basePackVersion` | string | Yes | Semantic version of the previous/base Pack version (e.g., '1.0.0'). This version must exist for the specified pack. |
| `targetPackVersion` | string | Yes | Semantic version of the new/target Pack version to compare against (e.g., '1.1.0'). This version must exist for the specified pack. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get the next valid version for a pack

**Slug:** `CODA_GET_THE_NEXT_VALID_VERSION_FOR_A_PACK`

Get the next valid version number for a Pack based on the proposed metadata. This endpoint validates the proposed Pack metadata and determines what the next semantic version number should be. It returns validation findings if there are any issues with the metadata. This is typically used before registering and uploading a new Pack version. Note: This endpoint only works with Packs that the authenticated user owns or has appropriate permissions to manage.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `packId` | integer | Yes | ID of a Pack |
| `sdkVersion` | string | No | The SDK version the metadata was built on. |
| `proposedMetadata` | string | Yes | The metadata for the next version of the Pack as a JSON string. This typically includes Pack definition metadata such as formulas, sync tables, authentication configuration, and other Pack features. The API will validate this metadata and return the next valid version number along with any validation findings. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get the source code for a pack version

**Slug:** `CODA_GET_THE_SOURCE_CODE_FOR_A_PACK_VERSION`

Retrieves temporary download URLs for the source code files of a specific Pack version. Returns pre-signed, time-limited URLs to download the original TypeScript/JavaScript source code. Useful for reviewing, auditing, backing up, or comparing Pack code between versions. Prerequisites: - Pack must exist and be accessible to the authenticated user - Version must have been created with source code uploaded - Use CODA_LIST_PACKS to find Pack IDs and CODA_LIST_THE_VERSIONS_FOR_A_PACK for versions Important: URLs expire within hours, so download files promptly. Returns empty array if no source code was uploaded for the version. This action only returns URLs, not file contents.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `packId` | integer | Yes | ID of the Pack to retrieve source code from. You can obtain Pack IDs by using CODA_LIST_PACKS or CODA_CREATE_PACK actions. The Pack must be accessible to the authenticated user (owner, collaborator, or viewer with appropriate permissions). |
| `packVersion` | string | Yes | Semantic version number of the Pack version to retrieve source code for. Must follow semantic versioning format (e.g., '1.0.0', '2.3.5', '0.1.0'). Use CODA_LIST_THE_VERSIONS_FOR_A_PACK to get available versions for a Pack. Note that source code is only available for versions where it was explicitly uploaded during the Pack version creation process. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get user info

**Slug:** `CODA_GET_USER_INFO`

Returns basic info about the current user.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List available docs

**Slug:** `CODA_LIST_AVAILABLE_DOCS`

Returns a list of Coda docs accessible by the user, and which they have opened at least once. These are returned in the same order as on the docs page: reverse chronological by the latest event relevant to the user (last viewed, edited, or shared).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of results to return in this query. |
| `query` | string | No | Search term used to filter down results. |
| `isOwner` | boolean | No | Show only docs owned by the user. |
| `folderId` | string | No | Show only docs belonging to the given folder. |
| `inGallery` | boolean | No | Show only docs visible within the gallery. |
| `isStarred` | boolean | No | If true, returns docs that are starred. If false, returns docs that are not starred.  |
| `pageToken` | string | No | An opaque token used to fetch the next page of results. |
| `sourceDoc` | string | No | Show only docs copied from the specified doc ID. |
| `isPublished` | boolean | No | Show only published docs. |
| `workspaceId` | string | No | Show only docs belonging to the given workspace. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List categories for pack

**Slug:** `CODA_LIST_CATEGORIES_FOR_PACK`

List all publishing categories associated with a specific Coda Pack. Categories help users discover packs by organizing them into topics like 'Project Management', 'Marketing', 'Engineering', etc.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `packId` | integer | Yes | The numeric ID of the Coda Pack to retrieve categories for. You can obtain pack IDs from the list_packs action. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List columns

**Slug:** `CODA_LIST_COLUMNS`

Returns a list of columns in a table.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `docId` | string | Yes | ID of the doc. |
| `limit` | integer | No | Maximum number of results to return in this query. |
| `pageToken` | string | No | An opaque token used to fetch the next page of results. |
| `visibleOnly` | boolean | No | If true, returns only visible columns for the table. This parameter only applies to base tables, and not views.  |
| `tableIdOrName` | string | Yes | ID or name of the table. Names are discouraged because they"re easily prone to being changed by users. If you"re using a name, be sure to URI-encode it.  |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List controls

**Slug:** `CODA_LIST_CONTROLS`

Returns a list of controls in a Coda doc.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `docId` | string | Yes | ID of the doc. |
| `limit` | integer | No | Maximum number of results to return in this query. |
| `sortBy` | string ("name") | No | Determines how to sort the given objects. |
| `pageToken` | string | No | An opaque token used to fetch the next page of results. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List custom doc domains

**Slug:** `CODA_LIST_CUSTOM_DOC_DOMAINS`

List all custom domains configured for a published Coda doc. Custom domains allow you to publish your doc at your own domain (e.g., www.example.com) instead of the default Coda.io URL. Returns an empty list if no custom domains are configured.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `docId` | string | Yes | ID of the doc. This is the unique identifier for the Coda document (e.g., 'DUTh3qjMrM'). You can get this from creating a doc or listing available docs. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List doc analytics

**Slug:** `CODA_LIST_DOC_ANALYTICS`

Returns analytics data for accessible documents. Provides detailed metrics including views, sessions (desktop/mobile/other), copies, likes, and AI credits usage. Supports filtering by workspace, date range, publication status, and search query. Results can be aggregated daily or cumulatively and sorted by various document properties or metric values.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of results to return in this query. |
| `query` | string | No | Search term to filter documents by name or title. Returns only documents matching this query string. |
| `scale` | string ("daily" | "cumulative") | No | Time period granularity for metrics aggregation. 'daily' returns metrics per day (default), 'cumulative' returns aggregated metrics over the entire date range. |
| `docIds` | array | No | List of document IDs to filter analytics. Provide as an array of doc IDs (e.g., ['docId1', 'docId2']). If not specified, returns analytics for all accessible documents. |
| `orderBy` | string ("date" | "docId" | "title" | "createdAt" | "publishedAt" | "likes" | "copies" | "views" | "sessionsDesktop" | "sessionsMobile" | "sessionsOther" | "totalSessions" | "aiCreditsChat" | "aiCreditsBlock" | "aiCreditsColumn" | "aiCreditsAssistant" | "aiCreditsReviewer" | "aiCredits") | No | Field to sort results by. Options include document properties (date, docId, title, createdAt, publishedAt) or metric values (likes, copies, views, sessions, aiCredits). |
| `direction` | string ("ascending" | "descending") | No | Sort direction. 'ascending' for lowest to highest, 'descending' for highest to lowest. Use with orderBy parameter. |
| `pageToken` | string | No | Pagination token for fetching subsequent pages. Use the 'nextPageToken' value from a previous response to retrieve the next set of results. |
| `sinceDate` | string | No | Start date for analytics data range in ISO 8601 format (YYYY-MM-DD). Returns metrics on or after this date. Example: '2025-01-01'. |
| `untilDate` | string | No | End date for analytics data range in ISO 8601 format (YYYY-MM-DD). Returns metrics on or before this date. Example: '2025-12-31'. |
| `isPublished` | boolean | No | Filter by publication status. Set to true to return only published documents, false for unpublished, or omit to include all. |
| `workspaceId` | string | No | Filter analytics to documents in a specific workspace. Provide the workspace ID (e.g., 'ws-1234Abcd'). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List featured docs for a pack

**Slug:** `CODA_LIST_FEATURED_DOCS_FOR_A_PACK`

Returns a list of featured docs for a Pack. Featured docs are example or template documents that showcase how to use the Pack. Each entry includes the document reference (id, type, href, browserLink), whether it's pinned at the top, and its published URL if available.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `packId` | integer | Yes | The unique numeric identifier of the Pack whose featured docs you want to retrieve. You can get pack IDs from the list_packs action. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Folders

**Slug:** `CODA_LIST_FOLDERS`

Tool to list folders accessible by the user. Returns a list of folders with their metadata including ID, name, workspace, and icon. Use when you need to discover available folders or find a specific folder by workspace.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of results to return in this query. Default is 25. |
| `is_starred` | boolean | No | If true, returns folders that are starred. If false, returns folders that are not starred. If not specified, returns all folders. |
| `page_token` | string | No | An opaque token used to fetch the next page of results. |
| `workspace_id` | string | No | Show only folders belonging to the given workspace. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List formulas

**Slug:** `CODA_LIST_FORMULAS`

Returns a list of named formulas in a Coda doc.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `docId` | string | Yes | ID of the doc. |
| `limit` | integer | No | Maximum number of results to return in this query. |
| `sortBy` | string ("name") | No | Determines how to sort the given objects. |
| `pageToken` | string | No | An opaque token used to fetch the next page of results. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List makers for pack

**Slug:** `CODA_LIST_MAKERS_FOR_PACK`

List makers for a given pack.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `packId` | integer | Yes | ID of a Pack |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List pack analytics

**Slug:** `CODA_LIST_PACK_ANALYTICS`

Returns analytics data for Packs the user can edit. This endpoint retrieves analytics information for Packs where the authenticated user has edit permissions. Analytics include installation counts, invocation metrics, and active usage statistics. All parameters are optional - if no filters are specified, returns analytics for all accessible Packs. Common use cases: - Get analytics for all accessible packs (no parameters) - Filter by workspace using workspaceId - Filter by date range using sinceDate/untilDate - Sort results using orderBy and direction - Paginate through results using limit and pageToken

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of results to return per page. Defaults to 1000. Use with pageToken for pagination. |
| `query` | string | No | Search term used to filter pack analytics by pack name or other attributes. |
| `scale` | string ("daily" | "cumulative") | No | Quantization period over which to view analytics. Options: 'daily' (default) for daily metrics, or 'cumulative' for cumulative totals. |
| `orderBy` | string ("date" | "packId" | "name" | "createdAt" | "docInstalls" | "workspaceInstalls" | "numFormulaInvocations" | "numActionInvocations" | "numSyncInvocations" | "numMetadataInvocations" | "docsActivelyUsing" | "docsActivelyUsing7Day" | "docsActivelyUsing30Day" | "docsActivelyUsing90Day" | "docsActivelyUsingAllTime" | "workspacesActivelyUsing" | "workspacesActivelyUsing7Day" | "workspacesActivelyUsing30Day" | "workspacesActivelyUsing90Day" | "workspacesActivelyUsingAllTime" | "workspacesWithActiveSubscriptions" | "workspacesWithSuccessfulTrials" | "revenueUsd") | No | Field to sort the pack analytics by. Options include: 'date', 'packId', 'name', 'createdAt', 'docInstalls', 'workspaceInstalls', 'numFormulaInvocations', 'numActionInvocations', 'numSyncInvocations', and various activelyUsing metrics. |
| `packIds` | array | No | Which Pack IDs to fetch. Note: This parameter may not be supported by the Coda API and may result in a 400 error if used. |
| `direction` | string ("ascending" | "descending") | No | Direction to sort results in. Options: 'ascending' or 'descending'. Use with orderBy parameter. |
| `pageToken` | string | No | An opaque token used to fetch the next page of results. Obtain this from the 'nextPageToken' field in a previous response. |
| `sinceDate` | string | No | Limit results to activity on or after this date (ISO 8601 format, e.g., '2024-01-01'). |
| `untilDate` | string | No | Limit results to activity on or before this date (ISO 8601 format, e.g., '2024-12-31'). |
| `isPublished` | boolean | No | Limit results to only published packs. Set to true to get only published packs, or false/unspecified to get all packs including published ones. |
| `workspaceId` | string | No | ID of the workspace to filter pack analytics by. Use this to get analytics only for packs in a specific workspace. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List pack formula analytics

**Slug:** `CODA_LIST_PACK_FORMULA_ANALYTICS`

Returns analytics data for Pack formulas.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of results to return in this query. |
| `scale` | string ("daily" | "cumulative") | No | Quantization period over which to view analytics. Defaults to daily. |
| `packId` | integer | Yes | ID of the Pack for which to retrieve formula analytics. You must have edit access to the pack. |
| `orderBy` | string ("date" | "formulaName" | "formulaType" | "formulaInvocations" | "medianLatencyMs" | "medianResponseSizeBytes" | "errors" | "docsActivelyUsing" | "docsActivelyUsing7Day" | "docsActivelyUsing30Day" | "docsActivelyUsing90Day" | "docsActivelyUsingAllTime" | "workspacesActivelyUsing" | "workspacesActivelyUsing7Day" | "workspacesActivelyUsing30Day" | "workspacesActivelyUsing90Day" | "workspacesActivelyUsingAllTime") | No | Field by which to sort the analytics results. Options include date, formulaName, formulaInvocations, medianLatencyMs, errors, docsActivelyUsing, and various time-based active usage metrics. |
| `direction` | string ("ascending" | "descending") | No | Direction to sort results in. Use 'ascending' for lowest to highest, 'descending' for highest to lowest. |
| `pageToken` | string | No | An opaque token used to fetch the next page of results. |
| `sinceDate` | string | No | Limit results to activity on or after this date. Use ISO 8601 date format (e.g., '2024-01-15'). |
| `untilDate` | string | No | Limit results to activity on or before this date. Use ISO 8601 date format (e.g., '2024-12-31'). |
| `packFormulaNames` | array | No | A list of Pack formula names (case-sensitive) for which to retrieve analytics. If not specified, returns analytics for all formulas in the pack. |
| `packFormulaTypes` | array | No | A list of Pack formula types corresponding to the `packFormulaNames`. If specified, this must have the same length as `packFormulaNames`.  |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List packs

**Slug:** `CODA_LIST_PACKS`

Get the list of accessible Packs.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of results to return in this query. |
| `sortBy` | string ("title" | "createdAt" | "updatedAt") | No | The sort order of the Packs returned. |
| `direction` | string ("ascending" | "descending") | No | Direction to sort results in. |
| `pageToken` | string | No | An opaque token used to fetch the next page of results. |
| `accessType` | string ("view" | "test" | "edit" | "admin") | No | Deprecated, use accessTypes instead. Filter to only return the Packs for which the current user has this access type  |
| `accessTypes` | array | No | Filter to only return the Packs for which the current user has these access types.  |
| `onlyWorkspaceId` | string | No | Use only this workspace (not all of a user"s workspaces) to check for Packs shared via workspace ACL.  |
| `excludePublicPacks` | boolean | No | Only get Packs shared with users/workspaces, not publicly. |
| `parentWorkspaceIds` | array | No | Filter to only Packs whose parent workspace is one of the given IDs. |
| `excludeWorkspaceAcls` | boolean | No | Do not include Packs that are only shared with workspaces. |
| `excludeIndividualAcls` | boolean | No | Do not include Packs that are only shared with the user individually. |
| `includeBrainOnlyPacks` | boolean | No | Include Packs that only support Coda Brain. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List page analytics

**Slug:** `CODA_LIST_PAGE_ANALYTICS`

Returns page-level analytics data for pages within a document. Shows metrics like views and sessions per page over time. **Important:** This endpoint requires the document to be in an Enterprise workspace. If the document is not in an Enterprise workspace, the API will return a 401 Unauthorized error with the message: "Page level analytics are only available for Enterprise and higher plans".

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `docId` | string | Yes | ID of the doc. Must be a doc in an Enterprise workspace. |
| `limit` | integer | No | Maximum number of results to return in this query. |
| `pageToken` | string | No | An opaque token used to fetch the next page of results. |
| `sinceDate` | string | No | Limit results to activity on or after this date (ISO 8601 format, e.g., '2024-01-15'). |
| `untilDate` | string | No | Limit results to activity on or before this date (ISO 8601 format, e.g., '2024-01-31'). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Page Content

**Slug:** `CODA_LIST_PAGE_CONTENT`

Tool to list page content. Returns the content of the specified page. Use when you need to retrieve the content elements from a Coda page.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of content items to return in this query. Default is 50. |
| `doc_id` | string | Yes | ID of the doc containing the page. |
| `page_token` | string | No | An opaque token used to fetch the next page of results. |
| `content_format` | string ("plainText") | No | Format for content output. |
| `page_id_or_name` | string | Yes | ID or name of the page. Names are discouraged because they're easily prone to being changed by users. If you provide a name and there are multiple pages with the same name, an arbitrary one will be selected. Note: URI encoding is handled automatically. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List pages

**Slug:** `CODA_LIST_PAGES`

Returns a list of pages in a Coda doc.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `docId` | string | Yes | ID of the doc. |
| `limit` | integer | No | Maximum number of results to return in this query. |
| `pageToken` | string | No | An opaque token used to fetch the next page of results. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List permissions

**Slug:** `CODA_LIST_PERMISSIONS`

Returns a list of permissions for this Coda doc.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `docId` | string | Yes | ID of the doc. |
| `limit` | integer | No | Maximum number of results to return in this query. |
| `pageToken` | string | No | An opaque token used to fetch the next page of results. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List permissions for a pack

**Slug:** `CODA_LIST_PERMISSIONS_FOR_A_PACK`

Get user, workspace, and/or global permissions for a given Pack.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `packId` | integer | Yes | ID of a Pack |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List table rows

**Slug:** `CODA_LIST_TABLE_ROWS`

Retrieves rows from a specific table within a Coda document. This endpoint allows you to fetch data from your Coda tables programmatically, enabling integration with other systems or data analysis tools. Use this when you need to access the content of a table in your Coda document, such as for reporting, data synchronization, or building custom views of your data outside of Coda. The endpoint supports pagination for large tables and allows you to control the number of rows returned per request. It's important to note that this endpoint only retrieves data and doesn't modify the table contents.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `docId` | string | Yes | ID of the doc. |
| `limit` | integer | No | Maximum number of results to return in this query. |
| `query` | string | No | Query used to filter returned rows, specified as `<column_id_or_name>:<value>`. If you"d like to use a column name instead of an ID, you must quote it (e.g., `"My Column":123`). Also note that `value` is a JSON value; if you"d like to use a string, you must surround it in quotes (e.g., `"groceries"`).   |
| `sortBy` | string ("createdAt" | "natural" | "updatedAt") | No | Specifies the sort order of the rows returned. If left unspecified, rows are returned by creation time ascending. "UpdatedAt" sort ordering is the order of rows based upon when they were last updated. This does not include updates to calculated values. "Natural" sort ordering is the order that the rows appear in the table view in the application. This ordering is only meaningfully defined for rows that are visible (unfiltered). Because of this, using this sort order will imply visibleOnly=true, that is, to only return visible rows. If you pass sortBy=natural and visibleOnly=false explicitly, this will result in a Bad Request error as this condition cannot be satisfied.   |
| `pageToken` | string | No | An opaque token used to fetch the next page of results. |
| `syncToken` | string | No | An opaque token returned from a previous call that can be used to return results that are relevant to the query since the call where the syncToken was generated.   |
| `valueFormat` | string ("simple" | "simpleWithArrays" | "rich") | No | The format that cell values are returned as. |
| `visibleOnly` | boolean | No | If true, returns only visible rows and columns for the table. |
| `tableIdOrName` | string | Yes | ID or name of the table. Names are discouraged because they"re easily prone to being changed by users. If you"re using a name, be sure to URI-encode it.  |
| `useColumnNames` | boolean | No | Use column names instead of column IDs in the returned output. This is generally discouraged as it is fragile. If columns are renamed, code using original names may throw errors.   |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List tables

**Slug:** `CODA_LIST_TABLES`

Returns a list of tables in a Coda doc.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `docId` | string | Yes | ID of the doc. |
| `limit` | integer | No | Maximum number of results to return in this query. |
| `sortBy` | string ("name") | No | Determines how to sort the given objects. |
| `pageToken` | string | No | An opaque token used to fetch the next page of results. |
| `tableTypes` | array | No | Comma-separated list of table types to include in results. If omitted, includes both tables and views.  |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List the pack listings accessible to a user

**Slug:** `CODA_LIST_THE_PACK_LISTINGS_ACCESSIBLE_TO_A_USER`

Get listings of public Packs and Packs created by you.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of results to return in this query. |
| `sortBy` | string ("packId" | "name" | "packVersion" | "packVersionModifiedAt") | No | Specify a sort order for the returned Pack listings returned. |
| `orderBy` | string ("packId" | "name" | "packVersion" | "packVersionModifiedAt") | No | Deprecated: use sortBy instead. |
| `packIds` | array | No | Which Pack IDs to fetch. |
| `direction` | string ("ascending" | "descending") | No | Direction to sort results in. |
| `pageToken` | string | No | An opaque token used to fetch the next page of results. |
| `installContext` | string ("workspace" | "doc") | No | Type of installation context for which Pack information is being requested.  |
| `onlyWorkspaceId` | string | No | Use only this workspace (not all of a user"s workspaces) to check for Packs shared via workspace ACL.  |
| `packAccessTypes` | array | No | Pack access types. |
| `excludePublicPacks` | boolean | No | Only get Packs shared with users/workspaces, not publicly. |
| `parentWorkspaceIds` | array | No | Filter to only Packs whose parent workspace is one of the given IDs. |
| `excludeWorkspaceAcls` | boolean | No | Do not include Packs that are only shared with workspaces. |
| `excludeIndividualAcls` | boolean | No | Do not include Packs that are only shared with the user individually. |
| `includeBrainOnlyPacks` | boolean | No | Include Packs that only support Coda Brain. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List the releases for a pack

**Slug:** `CODA_LIST_THE_RELEASES_FOR_A_PACK`

Get the list of releases of a Pack.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of results to return in this query. |
| `packId` | integer | Yes | ID of a Pack |
| `pageToken` | string | No | An opaque token used to fetch the next page of results. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List the versions for a pack

**Slug:** `CODA_LIST_THE_VERSIONS_FOR_A_PACK`

Get the list of versions of a Pack.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of results to return in this query. |
| `packId` | integer | Yes | ID of a Pack |
| `pageToken` | string | No | An opaque token used to fetch the next page of results. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List User Pack Invitations

**Slug:** `CODA_LIST_USER_PACK_INVITATIONS`

Tool to get pending Pack invitations for the authenticated user. Use when you need to retrieve invitations to collaborate on Packs.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum number of results to return in this query. Default is 25. |
| `pageToken` | string | No | An opaque token used to fetch the next page of results. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List workspace roles

**Slug:** `CODA_LIST_WORKSPACE_ROLES`

Returns a list of the counts of users over time by role for the workspace. Note: This endpoint requires a workspace that belongs to an organization (Enterprise feature). Workspaces not belonging to an organization will return a 400 error with message "Workspace does not belong to an organization."

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `workspaceId` | string | Yes | ID of the workspace (must belong to an organization). Use CODA_GET_USER_INFO to get your workspace ID. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List workspace users

**Slug:** `CODA_LIST_WORKSPACE_USERS`

Returns a list of members in the given workspace. This list will be ordered with the requesting user first and then ordered by role. Note: This endpoint requires a workspace that belongs to an organization (Enterprise feature). Workspaces not belonging to an organization will return a 400 error with message "Workspace does not belong to an organization."

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `pageToken` | string | No | An opaque token used to fetch the next page of results. |
| `workspaceId` | string | Yes | ID of the workspace (must belong to an organization). Use CODA_GET_USER_INFO to get your workspace ID. |
| `includedRoles` | array | No | Show only the members that match the included roles. Multiple roles can be specified with a comma-delimited list.  |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Pack asset upload complete

**Slug:** `CODA_PACK_ASSET_UPLOAD_COMPLETE`

Notify Coda that the Pack asset upload to S3 is complete. This action is the final step in the Pack asset upload workflow: 1. Call upload_a_pack_asset to get a signed S3 URL and packAssetUploadedPathName 2. Upload your image file (logo/cover/example) directly to the S3 URL using HTTP PUT 3. Call this action to notify Coda that the upload is complete and register the asset The packAssetId must be extracted from the packAssetUploadedPathName returned by upload_a_pack_asset. The packAssetType must match the type specified when initiating the upload. Supported asset types: - logo: Pack logo image (max 5MB, square recommended) - cover: Pack cover image (max 5MB, 1200x630px recommended) - exampleImage: Pack example/screenshot images (max 75MB) After completion, the asset will be processed and available for display in the Pack gallery and listing.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `packId` | integer | Yes | The unique ID of the Pack. This ID is returned when creating a Pack and identifies which Pack the asset belongs to. |
| `packAssetId` | string | Yes | The unique identifier for the Pack asset (a long hash string). This is the asset ID from the packAssetUploadedPathName returned by upload_a_pack_asset, extracted from the path: /packs/{packId}/assets/{packAssetId}/assetType/{packAssetType}/uploadComplete |
| `packAssetType` | string | Yes | The type of Pack asset being uploaded. Must be one of: 'logo' (Pack logo image), 'cover' (Pack cover image), or 'exampleImage' (Pack example/screenshot image). Must match the asset type specified when initiating the upload with upload_a_pack_asset. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Pack source code upload complete

**Slug:** `CODA_PACK_SOURCE_CODE_UPLOAD_COMPLETE`

Notify Coda that the Pack source code upload to S3 is complete. This action is the final step in the Pack source code upload workflow: 1. Call upload_pack_source_code to get a signed S3 URL 2. Upload your source code file to the S3 URL 3. Call this action to notify Coda that the upload is complete The filename and codeHash parameters must match the values used when initiating the upload with upload_pack_source_code.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `packId` | integer | Yes | The unique ID of the Pack. This ID is returned when creating a Pack and identifies which Pack the source code belongs to. |
| `codeHash` | string | Yes | A SHA-256 hash of the source code file contents (64 hex characters). Used to verify file integrity and identify duplicate uploads. Must exactly match the hash provided when initiating the upload with upload_pack_source_code. |
| `filename` | string | Yes | The filename of the source code file that was uploaded to S3. Must exactly match the filename provided when initiating the upload with upload_pack_source_code. |
| `packVersion` | string | Yes | The semantic version string for this Pack version (e.g., '1.0.0', '2.1.3-beta'). Must match the version used when initiating the upload with upload_pack_source_code. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Pack version upload complete

**Slug:** `CODA_PACK_VERSION_UPLOAD_COMPLETE`

Mark a Pack version upload as complete to finalize the Pack version creation. This action is part of a multi-step workflow for creating Pack versions: 1. First, register a new Pack version using the 'Register pack version' action, which returns a signed upload URL 2. Upload your Pack version bundle (JavaScript/TypeScript code) to the signed URL 3. Call this action to notify Coda that the upload is complete and trigger Pack version validation and creation After completion, the Pack version will be validated and available for testing or release. Note: This action will fail with a 400 error if no upload was found for the specified Pack and version.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `notes` | string | No | Developer notes describing changes, improvements, or fixes in this Pack version. |
| `packId` | integer | Yes | ID of a Pack |
| `source` | string ("web" | "cli") | No | Source of the Pack version upload. 'web' indicates uploaded via Coda's web interface, 'cli' indicates uploaded via the Coda CLI tool. |
| `packVersion` | string | Yes | Semantic version of a Pack |
| `allowOlderSdkVersion` | boolean | No | Set to true to bypass Coda's protection against SDK version regression when multiple makers build versions. Use with caution as downgrading SDK versions may introduce compatibility issues. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Patch the system connection credentials of the pack

**Slug:** `CODA_PATCH_THE_SYSTEM_CONNECTION_CREDENTIALS_OF_THE_PACK`

Patch the system connection credentials of the Pack.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `packId` | integer | Yes | ID of a Pack |
| `credentials` | object | No | Credentials to be patched for the Pack's system connection. Since this is a PATCH operation, only the provided fields will be updated. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Publish doc

**Slug:** `CODA_PUBLISH_DOC`

Update publish settings for a doc.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `mode` | string ("view" | "play" | "edit") | No | Which interaction mode the published doc should use. |
| `slug` | string | No | Slug for the published doc. |
| `docId` | string | Yes | ID of the doc. |
| `earnCredit` | boolean | No | If true, new users may be required to sign in to view content within this document. You will receive Coda credit for each user who signs up via your doc.   |
| `discoverable` | boolean | No | If true, indicates that the doc is discoverable. |
| `categoryNames` | array | No | The names of categories to apply to the document. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Push a button

**Slug:** `CODA_PUSH_A_BUTTON`

Pushes a button on a row in a table. Authorization note: This action is available to API tokens that are authorized to write to the table. However, the underlying button can perform any action on the document, including writing to other tables and performing Pack actions.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `docId` | string | Yes | ID of the doc. |
| `rowIdOrName` | string | Yes | ID or name of the row. Names are discouraged because they"re easily prone to being changed by users. If you"re using a name, be sure to URI-encode it. If there are multiple rows with the same value in the identifying column, an arbitrary one will be selected.   |
| `tableIdOrName` | string | Yes | ID or name of the table. Names are discouraged because they"re easily prone to being changed by users. If you"re using a name, be sure to URI-encode it.  |
| `columnIdOrName` | string | Yes | ID or name of the column. Names are discouraged because they"re easily prone to being changed by users. If you"re using a name, be sure to URI-encode it.  |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Register pack version

**Slug:** `CODA_REGISTER_PACK_VERSION`

Registers a new Pack version and obtains a signed upload URL. This is the first step in the Pack version upload workflow. It registers a new version with Coda and returns a pre-signed S3 URL along with required headers for uploading the Pack bundle file. Workflow: 1. Call this action with packId, packVersion (semantic version), and bundleHash (SHA-256) 2. Use the returned upload_url and headers to upload your Pack bundle JSON via PUT request 3. After upload completes, call pack_version_upload_complete to finalize the registration 4. Optionally create a release to make the version available to users Prerequisites: - A Pack must exist (create one with CODA_CREATE_PACK if needed) - The version number must be greater than any existing version for this Pack - You must have calculated the SHA-256 hash of your Pack bundle file Note: The version must follow semantic versioning (e.g., 1.0.0, 1.2.3, 2.0.0).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `packId` | integer | Yes | ID of the Pack to register a new version for. You can obtain this from creating a Pack (CODA_CREATE_PACK) or listing Packs (CODA_LIST_PACKS). |
| `bundleHash` | string | Yes | SHA-256 hash of the Pack bundle file to be uploaded. This is a 64-character hexadecimal string. The hash is used to verify the integrity of the uploaded file. Calculate this using SHA-256 on your Pack definition JSON file. Example: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855'. |
| `packVersion` | string | Yes | Semantic version number for the Pack version being registered. Must follow semantic versioning format (e.g., '1.0.0', '1.2.3', '2.0.0'). Must be greater than any previously registered version for this Pack. Use patch version for bug fixes (e.g., 1.0.1), minor version for backwards-compatible features (e.g., 1.1.0), and major version for breaking changes (e.g., 2.0.0). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Resolve browser link

**Slug:** `CODA_RESOLVE_BROWSER_LINK`

Given a browser link to a Coda object, attempts to find it and return metadata that can be used to get more info on it. Returns a 400 if the URL does not appear to be a Coda URL or a 404 if the resource cannot be located with the current credentials.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `url` | string | Yes | The browser link to try to resolve. |
| `degradeGracefully` | boolean | No | By default, attempting to resolve the Coda URL of a deleted object will result in an error. If this flag is set, the next-available object, all the way up to the doc itself, will be resolved.   |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve the grouped logs of a pack

**Slug:** `CODA_RETRIEVE_THE_GROUPED_LOGS_OF_A_PACK`

Retrieve grouped execution logs for a Pack in a specific Coda document. This endpoint returns Pack invocation logs grouped by execution, showing timestamps, status (success/failed), and detailed log entries for debugging. Logs are sorted by timestamp (newest first by default) and can be filtered by time range or search query. Use this to debug Pack executions, track errors, and monitor Pack performance in a document.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `q` | string | No | Search query using Lucene syntax to filter logs by content (e.g., 'error', 'level:error', 'message:failed'). |
| `docId` | string | Yes | ID of the Coda document where the Pack is used. Use CODA_LIST_AVAILABLE_DOCS to find available document IDs. |
| `limit` | integer | No | Maximum number of grouped log invocations to return per page. Default is 25. |
| `order` | string ("asc" | "desc") | No | Sort order for logs by timestamp: 'asc' (oldest first) or 'desc' (newest first). Default is 'desc'. |
| `packId` | integer | Yes | Numeric ID of the Pack whose logs you want to retrieve. Use CODA_LIST_PACKS to find available pack IDs. |
| `pageToken` | string | No | Opaque pagination token from a previous response's nextPageToken field. Use to fetch the next page of results. |
| `afterTimestamp` | string | No | Return only logs after this timestamp (non-inclusive). Format: ISO 8601 (e.g., '2026-01-01T00:00:00.000Z'). |
| `beforeTimestamp` | string | No | Return only logs before this timestamp (non-inclusive). Format: ISO 8601 (e.g., '2026-01-30T12:00:00.000Z'). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve the information for a specific log

**Slug:** `CODA_RETRIEVE_THE_INFORMATION_FOR_A_SPECIFIC_LOG`

Retrieve detailed information for a specific log entry from a Pack ingestion. This action retrieves comprehensive log details for Coda Brain (Enterprise feature) ingestion debugging. It provides in-depth information about specific log entries including user context, action details, entity information, event metadata, and execution results. The action is useful for: - Investigating specific ingestion events or errors - Auditing user actions within Pack ingestion processes - Debugging failed or unexpected ingestion behaviors - Understanding the context of specific log entries Note: This endpoint requires valid organizationId, rootIngestionId, and logId values which are only available for Enterprise accounts with Coda Brain enabled. For non-existent or invalid IDs, the action returns a response with found=False.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `logId` | string | Yes | The unique identifier of the specific log entry to retrieve. |
| `packId` | integer | Yes | ID of a Pack |
| `detailsKey` | string | Yes | The key identifying which specific details to retrieve from the log entry. This parameter specifies the type of detailed information requested. |
| `organizationId` | string | Yes | ID of the organization. This is an Enterprise-level identifier used with Coda Brain features. |
| `rootIngestionId` | string | Yes | ID of the root ingestion. This identifies a specific data ingestion process in Coda Brain. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve the logs of a ingestion

**Slug:** `CODA_RETRIEVE_THE_LOGS_OF_A_INGESTION`

Retrieve the logs of a Ingestion for debugging purpose. This action is typically used with Coda Brain (Enterprise feature) to track and debug data ingestion processes from external sources via Packs. Note: This endpoint requires valid organizationId and rootIngestionId values which are only available for Enterprise accounts with Coda Brain enabled. For non-existent or invalid IDs, the action returns an empty result.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `q` | string | No | Search query to filter logs. Follows Lucene syntax for complex queries (e.g., 'error AND status:failed'). |
| `limit` | integer | No | Maximum number of results to return in this query. |
| `order` | string ("asc" | "desc") | No | Sort order for logs by timestamp: 'asc' (ascending/oldest first) or 'desc' (descending/newest first). Default is 'desc'. |
| `packId` | integer | Yes | ID of a Pack |
| `logTypes` | array | No | Only return logs of the given types. |
| `pageToken` | string | No | An opaque token used to fetch the next page of results. |
| `requestIds` | array | No | Only return logs matching provided request IDs. |
| `afterTimestamp` | string | No | Only return logs after the given time (non-inclusive). Format: ISO 8601 timestamp. |
| `organizationId` | string | Yes | ID of the organization. This is an Enterprise-level identifier used with Coda Brain features. |
| `beforeTimestamp` | string | No | Only return logs before the given time (non-inclusive). Format: ISO 8601 timestamp. |
| `rootIngestionId` | string | Yes | ID of the root ingestion. This identifies a specific data ingestion process in Coda Brain. |
| `ingestionExecutionId` | string | No | ID of the ingestion execution. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve the logs of a pack

**Slug:** `CODA_RETRIEVE_THE_LOGS_OF_A_PACK`

Retrieve the execution logs of a Pack within a specific document for debugging purposes. Note: Logs are typically retained for approximately 2 weeks.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `q` | string | No | A search query that follows Lucene syntax to filter log messages. Example: 'error' or 'status:failed'. |
| `docId` | string | Yes | ID of the Coda document where the Pack is installed and being used. |
| `limit` | integer | No | Maximum number of results to return in this query. |
| `order` | string ("asc" | "desc") | No | Specifies if the logs will be returned in time desc (newest first) or asc (oldest first). Default is desc. |
| `packId` | integer | Yes | Numeric ID of the Pack whose logs you want to retrieve. |
| `logTypes` | array | No | Only return logs of the given types. |
| `pageToken` | string | No | An opaque token used to fetch the next page of results. |
| `requestIds` | array | No | Only return logs matching provided request IDs. |
| `afterTimestamp` | string | No | Only return logs after the given time (non-inclusive). Format: ISO 8601 timestamp. |
| `beforeTimestamp` | string | No | Only return logs before the given time (non-inclusive). Format: ISO 8601 timestamp. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve the oauth configuration of the pack

**Slug:** `CODA_RETRIEVE_THE_OAUTH_CONFIGURATION_OF_THE_PACK`

Retrieve the OAuth configuration of the Pack for display purpose. Secrets will be returned with masks.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `packId` | integer | Yes | ID of a Pack |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Retrieve the system connection metadata of the pack

**Slug:** `CODA_RETRIEVE_THE_SYSTEM_CONNECTION_METADATA_OF_THE_PACK`

Retrieve the system connection metadata of a Pack. This endpoint returns metadata about a Pack's system-level authentication configuration, where the Pack maker's credentials are used for all users. Not all packs use system authentication - many use per-user authentication instead. Common error cases: - 400: Pack exists but hasn't been uploaded with a version yet, or system authentication isn't configured - 404: Pack doesn't exist or doesn't have system connection authentication

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `packId` | integer | Yes | ID of the Pack to retrieve system connection metadata for. Must be a Pack you own or have appropriate access to. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Search principals

**Slug:** `CODA_SEARCH_PRINCIPALS`

Search for users and groups (principals) that a Coda document can be shared with. This action searches across the workspace for principals matching the query term. The search is case-insensitive and matches against user names, email addresses, and group names. Results are limited to 20 users and 20 groups maximum. Use this action when you need to find people or groups to share a document with, or when building permission management workflows. Note: If no query is provided or the query is empty/whitespace-only, no results will be returned.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `docId` | string | Yes | The ID of the Coda document to search principals for. Must be a valid document ID that the authenticated user has access to. |
| `query` | string | No | Search term to find users and groups. Can match names, email addresses, or parts thereof. Case-insensitive. Leading/trailing whitespace is automatically trimmed. If empty or None, no results are returned. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Set the oauth configurations of the pack

**Slug:** `CODA_SET_THE_OAUTH_CONFIGURATIONS_OF_THE_PACK`

Set OAuth2 client credentials (client ID, secret, redirect URI) for a Pack. Prerequisites: The Pack must have OAuth2 authentication defined in its source code using setUserAuthentication() with authorizationUrl and tokenUrl. You must obtain these credentials by registering your application with the OAuth provider (e.g., Google, GitHub, Salesforce). Note: This sets the *credentials* for an OAuth-enabled Pack, not the OAuth configuration itself (authorizationUrl, tokenUrl, scopes), which are defined in the Pack's source code. Returns a request ID for tracking the configuration status. Changes may take a few moments to propagate.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `packId` | integer | Yes | ID of a Pack |
| `clientId` | string | No | The OAuth2 client ID for this Pack. This ID is obtained when you register your application with the OAuth provider's developer portal. It identifies your Pack to the OAuth provider during the authorization flow. |
| `redirectUri` | string | No | The OAuth2 redirect URI (callback URL) for this Pack. This is the URL where users will be redirected after authorizing your Pack. For Coda Packs, this is typically a Coda-provided URL. The redirect URI must match exactly what you configured in the OAuth provider's application settings. |
| `clientSecret` | string | No | The OAuth2 client secret for this Pack. This secret is obtained alongside the client ID when registering your application with the OAuth provider. It is used to securely authenticate token exchange requests. Keep this value confidential as it grants access to your Pack's OAuth credentials. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Set the system connection credentials of the pack

**Slug:** `CODA_SET_THE_SYSTEM_CONNECTION_CREDENTIALS_OF_THE_PACK`

Set the system connection credentials of the Pack. This endpoint completely replaces the existing system connection credentials for a Pack. System connection credentials are used when a Pack is configured with system-level authentication, where the Pack maker's credentials are used for all users rather than per-user authentication. Prerequisites: - The Pack must have at least one version uploaded before credentials can be set - The Pack's source code must define system authentication (e.g., via setSystemAuthentication()) - You must be the owner or have appropriate permissions for the Pack Note: This is a destructive operation that replaces all existing credentials. Use PATCH (/packs/{packId}/systemConnection) to update specific credential fields instead.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `packId` | integer | Yes | ID of a Pack. The Pack must have at least one version uploaded before system connection credentials can be set. |
| `credentials` | object | Yes | Credentials for the Pack's system connection. The structure depends on the authentication type configured in the Pack's source code (e.g., OAuth2ClientCredentials, HeaderBearerToken, WebBasic, CustomAuthentication, etc.). Common fields include 'token', 'client_id', 'client_secret', 'username', 'password', 'api_key', etc. This completely replaces any existing credentials. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Trigger automation

**Slug:** `CODA_TRIGGER_AUTOMATION`

Triggers a webhook-invoked automation in a Coda doc. This action triggers an automation that has been configured with "Webhook invoked" as its trigger type. When triggered, the automation will execute its configured steps asynchronously. The response includes a requestId that can be used with the get_mutation_status action to check if the automation has completed. Important: The automation rule ID must be obtained manually from the Coda UI with Developer Mode enabled. There is currently no API endpoint to list automation rules programmatically.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `docId` | string | Yes | ID of the doc containing the webhook-triggered automation. Example: 'AbCDeFGH'. You can get this from the list_available_docs action or from the doc's browser URL. |
| `ruleId` | string | Yes | ID of the webhook-triggered automation rule to trigger. To obtain this ID: 1) Enable Developer Mode in your Coda account settings (Labs > Enable Developer Mode), 2) Navigate to the automation in your doc, 3) Click the three-dots menu on the automation rule to view its ID. The automation must be configured as 'Webhook invoked' type. Example: 'grid-auto-AbCdEfGh'. |
| `payload` | object | No | Optional JSON payload to pass to the webhook automation. This data will be available in the automation's steps as 'Step 1 Result'. You can include any JSON-serializable data (strings, numbers, booleans, objects, arrays). Example: {'message': 'Hello from API', 'count': 42, 'tags': ['urgent', 'test']} |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Unpublish doc

**Slug:** `CODA_UNPUBLISH_DOC`

Unpublishes a Coda document, removing it from public access. This action removes the document from the Coda Gallery and makes it private to the workspace. The operation succeeds even if the document is already unpublished (idempotent). Note that this is a destructive operation that affects document visibility.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `docId` | string | Yes | ID of the doc to unpublish. This is the unique identifier for the Coda document (e.g., 'pXsafDTyh1'). The document must exist and be accessible by the authenticated user. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update acl settings

**Slug:** `CODA_UPDATE_ACL_SETTINGS`

Update access control list (ACL) settings for a Coda document. This action allows you to control sharing and permission settings: - Whether editors can manage document permissions - Whether viewers can copy the document - Whether viewers can request editing access You can update one or multiple settings in a single request. Settings not specified in the request will retain their current values. Returns the complete set of ACL settings after the update.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `docId` | string | Yes | The ID of the Coda document whose ACL settings should be updated. Example: 'AbCDeFGH' |
| `allowCopying` | boolean | No | Controls whether viewers can make copies of the document. When true, anyone with view access can create their own copy. When false, copying is restricted. Leave unset to keep current value. |
| `allowViewersToRequestEditing` | boolean | No | Controls whether viewers can request edit access to the document. When true, viewers see a button to request editing permissions from the owner. When false, viewers cannot request access upgrades. Leave unset to keep current value. |
| `allowEditorsToChangePermissions` | boolean | No | Controls whether editors can modify document permissions. When true, editors can invite others and change sharing settings. When false, only the document owner can change permissions. Leave unset to keep current value. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update an existing Pack release

**Slug:** `CODA_UPDATE_AN_EXISTING_PACK_RELEASE`

Update the release notes of an existing Pack release. Use this to modify the description and changelog information displayed to users who have installed or are considering installing your Pack.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `packId` | integer | Yes | The ID of the Pack to update the release for. |
| `releaseNotes` | string | No | Updated release notes describing key features, changes, or fixes in this release. Use this to communicate important information to Pack users. |
| `packReleaseId` | integer | Yes | The ID of the Pack release to update. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update a page

**Slug:** `CODA_UPDATE_A_PAGE`

Update properties for a page. Note that updating a page title or icon requires you to be a Doc Maker in the applicable workspace.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | New name for the page. Note: Updating the page name requires Doc Maker permissions. |
| `docId` | string | Yes | ID of the doc containing the page to update. |
| `iconName` | string | No | Name of the icon to use for the page. Can be a standard Coda icon name (e.g., 'rocket', 'star') or a custom icon reference. Requires Doc Maker permissions. |
| `imageUrl` | string | No | URL of the cover image to use for the page. |
| `isHidden` | boolean | No | Whether the page should be hidden. Note: Some pages cannot be hidden (e.g., the sole top-level page in a doc), and this setting will be ignored for those pages. |
| `subtitle` | string | No | New subtitle for the page. |
| `pageIdOrName` | string | Yes | ID or name of the page to update. Page IDs are recommended over names as names can be easily changed by users. If using a name, URI-encode it. If multiple pages have the same name, an arbitrary one will be selected. |
| `contentUpdate` | object | No | Content update configuration for appending or inserting content into a page |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update doc

**Slug:** `CODA_UPDATE_DOC`

Updates metadata for a Coda document, including its title and icon. This action allows you to modify: - Document title/name - Document icon Note: Updating a doc title requires you to be a Doc Maker in the applicable workspace. The API returns an empty response on success - use CODA_GET_INFO_ABOUT_A_DOC to verify changes.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `docId` | string | Yes | The unique identifier of the document to update. You can obtain this from the CODA_LIST_AVAILABLE_DOCS or CODA_CREATE_DOC actions. |
| `title` | string | No | The new title/name for the document. If not provided, the document title remains unchanged. |
| `iconName` | string | No | The name of the icon to display for the document. Common icon names include: 'rocket', 'star', 'lightbulb', 'calendar', 'coda', etc. If not provided, the document icon remains unchanged. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update featured docs for a pack

**Slug:** `CODA_UPDATE_FEATURED_DOCS_FOR_A_PACK`

Create or replace the featured docs for a Pack. Featured docs are example or template documents that showcase how to use the Pack. This action replaces the entire list of featured docs (it does not append). Requirements: - You must be the pack owner to update featured docs - Exactly one doc in the items list must have isPinned=true - All doc URLs must be published doc URLs (e.g., https://coda.io/@username/doc-name) - Regular browser links will cause a 400 error On success, returns an empty JSON object {}.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `items` | array | Yes | A list of docs to set as the featured docs for a Pack. This replaces the existing featured docs list. Exactly one doc must have isPinned=true. Each doc URL must be a published doc URL (e.g., https://coda.io/@username/doc-name). |
| `packId` | integer | Yes | The unique numeric identifier of the Pack. You must be the pack owner to update featured docs. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Folder

**Slug:** `CODA_UPDATE_FOLDER`

Tool to update folder metadata in Coda. Use when you need to modify the name or description of an existing folder. Note that some folder types (like personal folders) cannot be edited.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | Name of the folder. |
| `folder_id` | string | Yes | ID of the folder to update. |
| `description` | string | No | Description of the folder. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update pack

**Slug:** `CODA_UPDATE_PACK`

Update an existing Pack for non-versioned fields.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | The name of the Pack. |
| `packId` | integer | Yes | ID of a Pack |
| `description` | string | No | The full description of the Pack. |
| `logoAssetId` | string | No | The asset id of the Pack"s logo, returned by [`#PackAssetUploadComplete`](#operation/packAssetUploadComplete) endpoint.  |
| `coverAssetId` | string | No | The asset id of the Pack"s cover image, returned by [`#PackAssetUploadComplete`](#operation/packAssetUploadComplete) endpoint.  |
| `supportEmail` | string | No | A contact email for the Pack. |
| `exampleImages` | array | No | The example images for the Pack. |
| `privacyPolicyUrl` | string | No | A Privacy Policy URL for the Pack. |
| `shortDescription` | string | No | A short version of the description of the Pack. |
| `termsOfServiceUrl` | string | No | A Terms of Service URL for the Pack. |
| `sourceCodeVisibility` | string ("private" | "shared") | No | Visibility of a pack"s source code. |
| `overallRateLimit__intervalSeconds` | integer | No | The rate limit interval in seconds. |
| `overallRateLimit__operationsPerInterval` | integer | No | The maximum number of Pack operations that can be performed in a given interval.  |
| `perConnectionRateLimit__intervalSeconds` | integer | No | The rate limit interval in seconds. |
| `perConnectionRateLimit__operationsPerInterval` | integer | No | The maximum number of Pack operations that can be performed in a given interval.  |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Update Row in Coda Table (Deprecated)

**Slug:** `CODA_UPDATE_ROW`

DEPRECATED: Use CODA_UPSERT_ROWS instead. Tool to update an existing row in a Coda table. Use when you need to modify specific cell values in a row. This endpoint returns a 202 status code indicating the update has been queued and will be processed within seconds.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `row` | object | Yes | Row object containing the cells to update. |
| `doc_id` | string | Yes | ID of the doc containing the table. |
| `row_id_or_name` | string | Yes | ID or name of the row to update. Using row IDs is recommended. If using a name and multiple rows have the same value in the identifying column, an arbitrary one will be selected. |
| `disable_parsing` | boolean | No | If true, the API will not attempt to parse the data in any way. |
| `table_id_or_name` | string | Yes | ID or name of the table. Using table IDs is recommended to avoid issues if table names change. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Updates a custom domain

**Slug:** `CODA_UPDATES_A_CUSTOM_DOMAIN`

Updates properties of a document's custom domain.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `docId` | string | Yes | ID of the doc. |
| `customDocDomain` | string | Yes | A custom domain for a published doc. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Updates user role

**Slug:** `CODA_UPDATES_USER_ROLE`

Updates the workspace user role of a user that matches the parameters. Only succeeds if the requesting user has admin permissions in the workspace. **Requirements:** - The workspace must belong to an organization (Enterprise feature) - The requesting user must have Admin permissions in the workspace - The target user must already be a member of the workspace **Note:** This endpoint will return a 400 error with message "Workspace does not belong to an organization" if used with a non-Enterprise workspace.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `email` | string | Yes | Email address of the user whose role you want to update. |
| `newRole` | string ("Admin" | "DocMaker" | "Editor") | Yes | The new workspace role to assign to the user. Must be one of: 'Admin' (full workspace admin access), 'DocMaker' (can create and edit docs), or 'Editor' (can edit but not create docs). |
| `workspaceId` | string | Yes | ID of the workspace (must belong to an organization). Use CODA_GET_USER_INFO to get your workspace ID. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Upload a pack asset

**Slug:** `CODA_UPLOAD_A_PACK_ASSET`

Request a signed s3 URL to upload your Pack asset.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `packId` | integer | Yes | ID of a Pack |
| `filename` | string | Yes | Filename |
| `mimeType` | string | Yes | The media type of the image being sent. |
| `imageHash` | string | Yes | The SHA-256 hash of the image to be uploaded. |
| `packAssetType` | string ("logo" | "cover" | "exampleImage") | Yes | Packassettype |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Upload pack source code

**Slug:** `CODA_UPLOAD_PACK_SOURCE_CODE`

Request a signed s3 URL to upload your Pack source code.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `packId` | integer | Yes | ID of a Pack |
| `filename` | string | Yes | Filename |
| `packVersion` | string | No | Packversion |
| `payloadHash` | string | Yes | The SHA-256 hash of the image to be uploaded. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Insert/Update Rows in Coda Table

**Slug:** `CODA_UPSERT_ROWS`

This tool allows you to insert new rows into a Coda table or update existing ones based on specified key columns. This is particularly useful for synchronizing data or ensuring records are up-to-date without creating duplicates.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `rows` | array | Yes | Array of row objects to insert or upsert. When row_id_or_name is provided, only the first row in the array is used. |
| `doc_id` | string | Yes | ID of the doc containing the table. |
| `key_columns` | array | No | Optional array of column IDs/names to use as upsert keys. If provided, existing rows matching these keys will be updated. Ignored when row_id_or_name is provided. |
| `row_id_or_name` | string | No | ID or name of a specific row to update. When provided, only the first item in 'rows' is used and a PUT request is made to update that specific row. Using row IDs is recommended to avoid issues if row names change. |
| `disable_parsing` | boolean | No | If true, the API will not attempt to parse the data in any way. |
| `table_id_or_name` | string | Yes | ID or name of the table. Using table IDs is recommended to avoid issues if table names change. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |


## Triggers

### Coda Document Deleted Trigger

**Slug:** `CODA_DOCUMENT_DELETED`

**Type:** poll

Triggers when a Coda document is deleted.

#### Configuration

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `folderId` | string | No | Show only docs belonging to the given folder. |
| `interval` | number | No | Periodic Interval to Check for Updates & Send a Trigger in Minutes |
| `isOwner` | boolean | No | Show only docs owned by the user. |
| `isPublished` | boolean | No | Show only published docs. |
| `isStarred` | boolean | No | If true, returns docs that are starred. If false, returns docs that are not starred. |
| `limit` | integer | No | Maximum number of items to retrieve in a single poll (1-100). |
| `workspaceId` | string | No | Show only docs belonging to the given workspace. |

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `document` | object | Yes | The document that was deleted |
| `event_type` | string | Yes | Type of event |

### New Coda Document Trigger

**Slug:** `CODA_NEW_CODA_DOCUMENT`

**Type:** poll

Triggers when a new Coda document is created.

#### Configuration

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `folderId` | string | No | Show only docs belonging to the given folder. |
| `interval` | number | No | Periodic Interval to Check for Updates & Send a Trigger in Minutes |
| `isOwner` | boolean | No | Show only docs owned by the user. |
| `isPublished` | boolean | No | Show only published docs. |
| `isStarred` | boolean | No | If true, returns docs that are starred. If false, returns docs that are not starred. |
| `limit` | integer | No | Maximum number of items to retrieve in a single poll (1-100). |
| `workspaceId` | string | No | Show only docs belonging to the given workspace. |

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `browserLink` | string | No | The browser link to the document |
| `createdAt` | string | No | The creation timestamp of the document |
| `folderId` | string | No | The ID of the folder containing the document |
| `href` | string | No | The URL of the document |
| `id` | string | No | The ID of the document |
| `name` | string | No | The name of the document |
| `owner` | string | No | The email of the document owner |
| `ownerName` | string | No | The name of the document owner |
| `type` | string | No | The type of the document |
| `updatedAt` | string | No | The last update timestamp of the document |
| `workspaceId` | string | No | The ID of the workspace containing the document |

### New Coda Page Trigger

**Slug:** `CODA_NEW_CODA_PAGE`

**Type:** poll

Triggers when a new page is added to a Coda document.

#### Configuration

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `docId` | string | Yes | ID of the Coda document to monitor for new pages. |
| `interval` | number | No | Periodic Interval to Check for Updates & Send a Trigger in Minutes |
| `limit` | integer | No | Maximum number of pages to retrieve in a single poll (1-100). |

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `event_type` | string | Yes | Type of event |
| `page` | object | Yes | The page that triggered the event |

### Specific Coda Page Updated Trigger

**Slug:** `CODA_SPECIFIC_CODA_PAGE_UPDATED`

**Type:** poll

Triggers when a specific page within a Coda document is updated.

#### Configuration

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `docId` | string | Yes | ID of the Coda document containing the page to monitor. |
| `interval` | number | No | Periodic Interval to Check for Updates & Send a Trigger in Minutes |
| `pageIdOrName` | string | Yes | ID or name of the specific page to monitor for updates. |

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `event_type` | string | Yes | Type of event |
| `page` | object | Yes | The page that was updated |
