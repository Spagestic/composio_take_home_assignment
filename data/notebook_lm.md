# NotebookLM

NotebookLM Enterprise is Google's licensed, source-grounded notebook service for organizing sources in global-location deployments.

- **Category:** ai assistants
- **Auth:** OAUTH2
- **Composio-managed OAuth available?** Yes
- **Tools:** 11
- **Triggers:** 0
- **Slug:** `NOTEBOOK_LM`
- **Version:** 20260807_00

## Tools

### Add Text Sources

**Slug:** `NOTEBOOK_LM_ADD_TEXT_SOURCES`

Add one or more named raw-text sources to a NotebookLM Enterprise notebook.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `sources` | array | Yes | Text sources to add; each item contains a display name and raw text content. |
| `notebook_id` | string | Yes | Notebook UUID to receive the sources. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Audio Overview

**Slug:** `NOTEBOOK_LM_CREATE_AUDIO_OVERVIEW`

Start asynchronous generation of a NotebookLM Enterprise audio overview from selected notebook sources. Each notebook can have only one audio overview; if one already exists, Google returns it and ignores new generation options. The request may incur provider charges and returns before audio is ready; the public API exposes no status polling method.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `source_ids` | array | Yes | One or more source UUIDs from the notebook to include in the audio overview. |
| `notebook_id` | string | Yes | Notebook UUID whose sources will be used to generate the audio overview. |
| `episode_focus` | string | No | Optional instructions describing the topics or angle the generated episode should emphasize. |
| `language_code` | string | No | Optional BCP-47 language code for the generated audio, such as 'en-US' or 'fr-FR'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Create Notebook

**Slug:** `NOTEBOOK_LM_CREATE_NOTEBOOK`

Create a NotebookLM Enterprise notebook in a licensed Google Cloud project and location.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `title` | string | Yes | Human-readable notebook title. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Audio Overview

**Slug:** `NOTEBOOK_LM_DELETE_AUDIO_OVERVIEW`

Permanently delete an audio overview from a NotebookLM Enterprise notebook. If the audio overview is still being generated, this permanently cancels generation. This cannot be undone.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `notebook_id` | string | Yes | Notebook UUID containing the audio overview. |
| `audio_overview_id` | string | Yes | Audio overview UUID to permanently delete. If generation is still in progress, deletion permanently cancels it. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Notebooks

**Slug:** `NOTEBOOK_LM_DELETE_NOTEBOOKS`

Permanently delete one or more NotebookLM Enterprise notebooks by notebook ID.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `notebook_ids` | array | Yes | One to 100 notebook UUIDs to permanently delete. The tool handles Google's single-notebook request limit; pass IDs, not full resource names. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Sources

**Slug:** `NOTEBOOK_LM_DELETE_SOURCES`

Permanently remove one or more sources from a NotebookLM Enterprise notebook.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `source_ids` | array | Yes | Source UUIDs to permanently remove. Pass IDs, not full resource names. |
| `notebook_id` | string | Yes | Notebook UUID containing the sources. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Notebook

**Slug:** `NOTEBOOK_LM_GET_NOTEBOOK`

Retrieve a NotebookLM Enterprise notebook and its current source metadata.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `notebook_id` | string | Yes | Notebook UUID returned by create or list. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Source

**Slug:** `NOTEBOOK_LM_GET_SOURCE`

Retrieve a notebook source's ingestion status, metadata, and failure reason.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `source_id` | string | Yes | Source UUID returned by add text sources or get notebook. |
| `notebook_id` | string | Yes | Notebook UUID containing the source. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Recent Notebooks

**Slug:** `NOTEBOOK_LM_LIST_RECENT_NOTEBOOKS`

List up to 500 NotebookLM Enterprise notebooks ordered by when the connected user last viewed them. Google currently omits continuation tokens, so accounts with more than 500 notebooks may not expose older results.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Share Notebook

**Slug:** `NOTEBOOK_LM_SHARE_NOTEBOOK`

Grant, change, or remove account access to a NotebookLM Enterprise notebook. Notification emails are disabled by default; setting notify_via_email=true sends email and cannot be undone.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `shares` | array | Yes | Accounts and exact access roles to apply to the notebook. |
| `notebook_id` | string | Yes | Notebook UUID whose account access will be changed. |
| `notify_via_email` | boolean | No | Whether Google sends notification emails to affected accounts. Defaults to false. WARNING: true sends email and cannot be undone. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Upload Source File

**Slug:** `NOTEBOOK_LM_UPLOAD_SOURCE_FILE`

Upload a plain-text file as a source in a NotebookLM Enterprise notebook.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `file` | object | Yes | Plain-text file whose raw bytes will become the source. |
| `file_name` | string | Yes | Filename NotebookLM should use for the source, including its extension. |
| `mime_type` | string | No | MIME type sent with the raw upload. Only text/plain is currently verified. |
| `notebook_id` | string | Yes | Notebook UUID to receive the uploaded source. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |
