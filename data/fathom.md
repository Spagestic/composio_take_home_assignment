# Fathom

AI meeting assistant that records, transcribes, and summarizes meetings

- **Category:** ai meeting assistants
- **Auth:** OAUTH2, API_KEY
- **Composio-managed OAuth available?** Yes
- **Tools:** 7
- **Triggers:** 1
- **Slug:** `FATHOM`
- **Version:** 20260909_00

## Tools

### Create webhook for meeting content

**Slug:** `FATHOM_CREATE_WEBHOOK`

Tool to create a webhook to receive new meeting content from Fathom. Use when you need to set up notifications for meeting recordings. At least one of transcript, CRM matches, summary, or action items must be included in the webhook payload.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `triggered_for` | array | Yes | Recording types to monitor. Valid values: 'my_recordings', 'shared_external_recordings', 'my_shared_with_team_recordings', 'shared_team_recordings'. Must provide at least one type. |
| `destination_url` | string | Yes | The endpoint URL where webhook events will be sent. Must be a valid HTTPS URL. |
| `include_summary` | boolean | No | Whether to include meeting summaries in webhook payloads. At least one of include_transcript, include_summary, include_action_items, or include_crm_matches must be True. |
| `include_transcript` | boolean | No | Whether to include meeting transcripts in webhook payloads. At least one of include_transcript, include_summary, include_action_items, or include_crm_matches must be True. |
| `include_crm_matches` | boolean | No | Whether to include CRM data matches in webhook payloads. At least one of include_transcript, include_summary, include_action_items, or include_crm_matches must be True. |
| `include_action_items` | boolean | No | Whether to include extracted action items in webhook payloads. At least one of include_transcript, include_summary, include_action_items, or include_crm_matches must be True. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Delete Webhook

**Slug:** `FATHOM_DELETE_WEBHOOK`

Tool to delete an existing webhook by its ID. Use when you need to remove a webhook that is no longer needed.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique ID of the webhook to delete |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Recording Summary

**Slug:** `FATHOM_GET_RECORDING_SUMMARY`

Tool to retrieve the AI-generated summary for a specific recording. Use when you need to access the summary of a meeting recording. Supports both synchronous mode (returns summary directly) and asynchronous mode (delivers summary to webhook URL specified in destination_url parameter).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `recording_id` | integer | Yes | The identifier for the specific meeting recording. |
| `destination_url` | string | No | Webhook URL for asynchronous delivery of the summary. If provided, the endpoint behaves asynchronously and returns a confirmation. If omitted, returns the summary directly (synchronous mode). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Recording Transcript

**Slug:** `FATHOM_GET_RECORDING_TRANSCRIPT`

Tool to retrieve the full transcript for a specific recording. Use when you need to access the complete meeting transcript with speaker information and timestamps. Can operate synchronously (returns transcript directly) or asynchronously (posts transcript to a destination URL). In the response, speaker is an object — access speaker.display_name rather than treating speaker as a string. Prefer this tool over fetching transcripts via list-meetings calls with include_transcript=true, which produces extremely large responses when many meetings are returned.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `recording_id` | integer | Yes | The ID of the meeting recording to fetch the transcript for. |
| `destination_url` | string | No | Optional destination URL for asynchronous transcript delivery via POST. If provided, the transcript will be posted to this URL instead of being returned directly. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Meetings

**Slug:** `FATHOM_LIST_MEETINGS`

Tool to retrieve a paginated list of meeting recordings for the authenticated user or organization. Use when you need to fetch meetings with optional filtering by dates, domains, meeting type, or recorder. Supports data enrichment via include_* parameters.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `teams` | array | No | Filter by team names. Provide a list of team names. |
| `cursor` | string | No | Pagination cursor for fetching the next page of results. The response includes a `next_cursor` field; paginate through all pages when filtering by date range to avoid missing older recordings. |
| `recorded_by` | array | No | Filter by recorder email addresses. Provide a list of email addresses. |
| `created_after` | string | No | Filter meetings created after this ISO 8601 timestamp (e.g., '2024-01-01T00:00:00Z'). |
| `created_before` | string | No | Filter meetings created before this ISO 8601 timestamp (e.g., '2024-12-31T23:59:59Z'). |
| `include_summary` | boolean | No | NOT SUPPORTED FOR OAUTH USERS. This parameter is only available with API key authentication. OAuth authenticated users cannot use this flag on the list endpoint and must fetch summaries via the dedicated GET_RECORDING_SUMMARY action for individual recordings. Default is false. |
| `include_transcript` | boolean | No | NOT SUPPORTED FOR OAUTH USERS. This parameter is only available with API key authentication. OAuth authenticated users cannot use this flag on the list endpoint and must fetch transcripts via the dedicated GET_RECORDING_TRANSCRIPT action for individual recordings. Default is false. |
| `include_crm_matches` | boolean | No | Include linked CRM data in the response. Default is false. |
| `include_action_items` | boolean | No | Include action items data in the response. Default is false. |
| `calendar_invitees_domains` | array | No | Filter by company domains (exact match). Provide a list of domains. |
| `calendar_invitees_domains_type` | string ("all" | "only_internal" | "one_or_more_external") | No | Filter by domain type. Options: 'all' (default), 'only_internal', 'one_or_more_external'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Team Members

**Slug:** `FATHOM_LIST_TEAM_MEMBERS`

Tool to retrieve a paginated list of all team members in the organization. Use when you need to view team members, optionally filtered by team name or paginated using a cursor.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `team` | string | No | Team name to filter by. Allows filtering results by specific team. |
| `cursor` | string | No | Cursor for pagination. Used for retrieving subsequent pages of results. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Teams

**Slug:** `FATHOM_LIST_TEAMS`

Tool to retrieve a paginated list of all teams in the organization. Use when you need to get information about teams accessible through the API.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `cursor` | string | No | Cursor for pagination. Use the next_cursor value from a previous response to get the next page of results. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |


## Triggers

### Meeting Content Ready

**Slug:** `FATHOM_MEETING_CONTENT_READY`

**Type:** webhook

Triggers when a Fathom recording finalizes and its meeting content is ready — the same moment Fathom sends the summary email. Only calls that finalize after this trigger is created fire it; Fathom does not backfill past recordings.

#### Configuration

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `include_action_items` | boolean | No | Include the meeting's action items, each with its assignee and a link that opens the recording at that moment. |
| `include_crm_matches` | boolean | No | Include CRM records matched to the meeting's attendees. Reads only your or your team's linked CRM; with none linked, deliveries carry an error message in place of the records. |
| `include_summary` | boolean | No | Include the meeting's AI summary in every delivery. |
| `include_transcript` | boolean | No | Include the full speaker-attributed transcript. An hour-long call adds hundreds of KB to every delivery. |
| `triggered_for` | array | Yes | Which recordings fire this trigger. `my_recordings` covers your own recordings, is the only value that fires for a private call, and is the only one that works on every plan; `shared_external_recordings` covers recordings shared with you by people outside your team; `my_shared_with_team_recordings` and `shared_team_recordings` are Team Plans only. Start with ["my_recordings"]. |

#### Payload

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `action_items` | array | No | Action items extracted from the meeting. Present only when the trigger was created with action items included; empty when the meeting produced none. |
| `calendar_invitees` | array | Yes | Everyone on the calendar invite, with their internal/external flag. Empty for a recording with no calendar event. |
| `calendar_invitees_domains_type` | string | Yes | Whether the invitee list is internal-only or includes outside domains: 'only_internal' or 'one_or_more_external'. This is the field to branch on for external customer call vs internal sync. |
| `created_at` | string | Yes | ISO 8601 timestamp for when the meeting record was created. |
| `crm_matches` | object | No | CRM records matched to the meeting's attendees.  Either the three record lists or `error` arrives, never both. |
| `default_summary` | object | No | The AI-generated summary of the meeting. |
| `meeting_title` | string | No | The calendar event's title. Null when the recording has no associated calendar meeting. |
| `meeting_type` | string | No | Name of the Fathom meeting type assigned to this meeting, e.g. 'Quarterly Business Review'. Null or absent when none is assigned. |
| `meeting_url` | string | No | The join URL from the calendar event (Zoom, Google Meet, Microsoft Teams or a Slack huddle). Null when there is no calendar meeting. |
| `recorded_by` | object | Yes | The Fathom user who recorded the meeting. |
| `recording_end_time` | string | Yes | ISO 8601 timestamp for when recording actually ended. |
| `recording_id` | integer | No | The meeting recording's id — the stable key for this meeting across Fathom's other endpoints. |
| `recording_start_time` | string | Yes | ISO 8601 timestamp for when recording actually started. |
| `scheduled_end_time` | string | No | ISO 8601 scheduled end from the calendar event. |
| `scheduled_start_time` | string | No | ISO 8601 scheduled start from the calendar event. |
| `share_url` | string | Yes | Public share URL for the recording. |
| `shared_with` | string | No | Who the meeting is shared with inside the organisation: 'no_teams' (private to the recorder), 'single_team', 'multiple_teams' or 'all_teams'. |
| `title` | string | Yes | The Fathom recording's title. |
| `transcript` | array | No | Speaker-attributed transcript lines. Present only when the trigger was created with transcripts included. |
| `transcript_language` | string | No | Detected language of the transcript, e.g. 'en'. Can also be the literal 'unknown', so it is not always a language code. |
| `url` | string | Yes | Fathom URL for the call, for its owner and anyone with access. |
