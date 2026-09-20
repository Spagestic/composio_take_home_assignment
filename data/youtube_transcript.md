# YouTube Transcript

Retrieve and store captions for one video or a bounded batch, read job and batch status, access stored transcripts and languages, and resolve playlist or channel video metadata through the YouTube Transcript REST API.

- **Category:** transcription
- **Auth:** API_KEY
- **Composio-managed OAuth available?** N/A
- **Tools:** 9
- **Triggers:** 0
- **Slug:** `YOUTUBE_TRANSCRIPT`
- **Version:** 20260826_00

## Tools

### Get Stored Transcript

**Slug:** `YOUTUBE_TRANSCRIPT_GET_STORED_TRANSCRIPT`

Read a transcript already stored in the connected account without submitting new transcription work or consuming retrieval credits.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `source` | string ("auto" | "manual" | "asr") | No | Restrict the stored transcript to an automatic-caption, manual-caption, or ASR source. |
| `language` | string | No | Preferred stored transcript language as an ISO 639-1 code. |
| `video_id` | string | Yes | YouTube video ID whose stored transcript should be read. |
| `transcript_id` | string | No | Specific stored transcript or job UUID when multiple records exist for the video. |
| `include_timestamps` | boolean | No | Include timestamp segments. Stored timestamp capability may remain true when segments are omitted. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Video Transcript

**Slug:** `YOUTUBE_TRANSCRIPT_GET_VIDEO_TRANSCRIPT`

Fetch captions for one YouTube video and store the resulting transcript in the connected account. This consumes provider credits, but never starts ASR. The tool waits up to 20 seconds for asynchronous caption jobs; if one is still processing, use GET_VIDEO_TRANSCRIPT_JOB_STATUS with the job_id from the timeout.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `video` | string | Yes | YouTube video URL or 11-character video ID. |
| `source` | string ("auto" | "manual") | No | Caption source preference. ASR is intentionally unavailable in this tool. |
| `language` | string | No | Preferred ISO 639-1 caption language; omit to let the provider choose. |
| `include_words` | boolean | No | Include word-level timing when available. |
| `include_paragraphs` | boolean | No | Include paragraph grouping when available. |
| `include_timestamps` | boolean | No | Include timestamped segments; start and end values are milliseconds. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Video Transcript Job Status

**Slug:** `YOUTUBE_TRANSCRIPT_GET_VIDEO_TRANSCRIPT_JOB_STATUS`

Read one transcript job's current processing, completed, failed, or requires-ASR-confirmation state without creating work or waiting. Use this one-shot read when GET_VIDEO_TRANSCRIPT times out, passing the same include flags to recover the requested transcript shape.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `job_id` | string | Yes | Provider job UUID returned by GET_VIDEO_TRANSCRIPT, including in its polling-timeout error. |
| `include_words` | boolean | No | Include word-level transcript timing in a completed job result. Use the original create request value during timeout recovery. |
| `include_segments` | boolean | No | Include timestamped transcript segments in a completed job result. Keep this aligned with the original GET_VIDEO_TRANSCRIPT include_timestamps value when recovering from a polling timeout. |
| `include_paragraphs` | boolean | No | Include paragraph-grouped transcript ranges in a completed job result. Use the original create request value during timeout recovery. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Video Transcripts Batch

**Slug:** `YOUTUBE_TRANSCRIPT_GET_VIDEO_TRANSCRIPTS_BATCH`

Fetch and store captions for 1-10 YouTube videos. Each uncached video can consume provider credits, so cost scales with the request size. ASR never starts. This creates one batch and waits up to 20 seconds for a terminal result; if it is still processing, use GET_VIDEO_TRANSCRIPTS_BATCH_STATUS with the batch_id from the timeout.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `source` | string ("auto" | "manual") | No | Caption source preference. ASR is unavailable and never starts. |
| `language` | string | No | Preferred ISO 639-1 caption language; omit to let the provider choose. |
| `video_ids` | array | Yes | One to ten unique 11-character YouTube video IDs. URLs are not accepted. Cost can increase with every uncached video, so include only videos needed. |
| `include_words` | boolean | No | Include word-level timing when available. |
| `include_paragraphs` | boolean | No | Include paragraph grouping when available. |
| `include_timestamps` | boolean | No | Include timestamped segments; false keeps each result compact. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Get Video Transcripts Batch Status

**Slug:** `YOUTUBE_TRANSCRIPT_GET_VIDEO_TRANSCRIPTS_BATCH_STATUS`

Read the current state and available per-video results for a transcript batch without creating work or waiting. Use this one-shot read to recover when GET_VIDEO_TRANSCRIPTS_BATCH times out while the provider is still processing.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `batch_id` | string | Yes | Provider batch UUID returned by GET_VIDEO_TRANSCRIPTS_BATCH, including in its polling-timeout error. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Stored Transcripts

**Slug:** `YOUTUBE_TRANSCRIPT_LIST_STORED_TRANSCRIPTS`

List and search transcripts already stored in the connected account, one bounded page at a time.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum records in this page (1-100). |
| `search` | string | No | Search video IDs, titles, and transcript text. |
| `status` | string | No | Exact-match stored transcript status filter. Common observed values are queued, processing, succeeded, and failed. Other strings are accepted; an unmatched value returns an empty list. Omit for the provider default. |
| `date_to` | string | No | Include records created at or before this ISO 8601 timestamp. |
| `language` | string | No | Filter by ISO 639-1 language code. |
| `date_from` | string | No | Include records created at or after this ISO 8601 timestamp. |
| `next_cursor` | string | No | Opaque cursor returned by the previous call. Omit for the first page and pass it back unchanged to fetch the next page. |
| `include_segments` | boolean | No | Include transcript segments in each list item; false keeps responses compact. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### List Transcript Languages

**Slug:** `YOUTUBE_TRANSCRIPT_LIST_TRANSCRIPT_LANGUAGES`

List stored languages and YouTube translation target languages for one owned video transcript.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `video_id` | string | Yes | YouTube video ID whose transcript languages should be listed. |
| `include_youtube_default` | boolean | No | Include the video's default YouTube language in the result. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Resolve Channel Videos

**Slug:** `YOUTUBE_TRANSCRIPT_RESOLVE_CHANNEL_VIDEOS`

Requires Basic or higher. Resolve a YouTube channel into bounded upload metadata without transcribing the videos. This may count against the account's monthly channel allowance.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum video metadata items to resolve (1-100). |
| `handle` | string | No | YouTube handle with or without a leading @. Provide exactly one channel identifier. |
| `channel_id` | string | No | YouTube channel ID. Provide exactly one channel identifier. |
| `channel_url` | string | No | Full YouTube channel URL. Provide exactly one channel identifier. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |

### Resolve Playlist Videos

**Slug:** `YOUTUBE_TRANSCRIPT_RESOLVE_PLAYLIST_VIDEOS`

Requires Basic or higher. Resolve a YouTube playlist into bounded video metadata without transcribing the videos. This may count against the account's monthly playlist allowance.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | integer | No | Maximum video metadata items to resolve (1-100). |
| `playlist_id` | string | No | YouTube playlist ID. Provide exactly one of playlist_id or playlist_url. |
| `playlist_url` | string | No | Full YouTube playlist URL. Provide exactly one of playlist_url or playlist_id. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |
