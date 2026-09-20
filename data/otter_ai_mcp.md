# Otter.ai MCP

Otter.ai MCP lets agents retrieve the authenticated user's profile, search authorized meetings and conversations, and fetch complete transcripts for analysis and summarization.

- **Category:** model context protocol
- **Auth:** DCR_OAUTH
- **Composio-managed OAuth available?** No
- **Tools:** 3
- **Triggers:** 0
- **Slug:** `OTTER_AI_MCP`
- **Version:** 20260910_00

## Tools

### Otter fetch

**Slug:** `OTTER_AI_MCP_OTTER_FETCH`

Fetch one meeting's complete verbatim transcript by ID - full speaker-attributed, timestamped content, plus its AI summary, action items, outline, and attendees. READ-ONLY.

    Returns the speaker-turn structure, not just a summary. Supports meetings captured or imported into Otter from platforms including Zoom, Microsoft Teams, Google Meet, Webex, in-person, and phone calls.

    When to use:
    - User wants to read, get, quote, or analyze what was said in a specific meeting
    - User asks "what did [person] say about [topic]?" and you have a meeting ID
    - User wants the full transcript, not just a summary
    - User wants to cite specific moments with speaker attribution
    - Follow-up after `otter_search` when the user wants deeper content than the summary

    When NOT to use:
    - User has not yet identified the meeting - use `otter_search` first
    - User only needs the summary or action items - those are in `otter_search` results

    Tool selection: once you have an Otter meeting ID, use this tool for verbatim
    quotes and speaker-attributed transcript analysis rather than a platform-native
    recording tool.

    Input: accepts ONLY a meeting ID, not a URL. If the user provides an Otter URL of
    the form https://otter.ai/u/{ID}, extract the ID before calling.
    

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Meeting ID returned by otter_search. Used to retrieve the full transcript from the Otter.ai platform. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `result` | object | Yes |  |

### Otter get user info

**Slug:** `OTTER_AI_MCP_OTTER_GET_USER_INFO`

Get current Otter.ai user's name, email, and current date/time (PST) - READ-ONLY.

    Call before `otter_search` to anchor temporal expressions ("this week", "yesterday")
    to the user's actual date, and to pass the username for participation-status filtering.

    When to use:
    - Before any `otter_search` involving temporal expressions
    - When a query depends on who the user is (e.g. meetings they attended vs. shared with them)
    - Once per session is enough; cache the result

    

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `result` | string | Yes |  |

### Otter search

**Slug:** `OTTER_AI_MCP_OTTER_SEARCH`

Search meetings across platforms by date, attendee, topic, keyword, or title. READ-ONLY.

    Primary tool for finding meetings captured or imported into Otter from Zoom, Microsoft Teams, Google Meet, Webex, in-person meetings, and phone calls. Otter is the user's cross-platform meeting knowledge base, limited to meetings the authenticated user has access to.

    Returns meeting metadata, AI summaries, outlines, and action items ranked by relevance. Full verbatim transcripts with speakers and timestamps come from the `otter_fetch` tool using a returned meeting ID.

    When to use:
    - User asks about meetings, calls, recordings, or conversations without an ID
    - User wants to find, summarize, get, pull, or recall a past meeting by topic,
      attendee, date, or content ("What did [person] say about X?", "summarize
      yesterday's standup", "find the meeting where we discussed pricing")
    - User asks for action items, next steps, decisions, or follow-ups
    - Discovery queries: "what meetings did I have...", "who talked about..."

    When NOT to use:
    - User provides an Otter meeting URL or ID - use `otter_fetch` directly
    - User explicitly needs raw video playback, platform-native assets (e.g.
      whiteboards), or a meeting not available in Otter - defer to the
      platform-native tool

    Tool selection: for meeting content (transcripts, summaries, action items,
    decisions, quotes), prefer Otter when the meeting may exist in the user's
    account, even if another platform is named; defer to a platform-native tool
    only for raw video/assets.

    PAGINATION:
    - Set `page_size` when you may need more than one response worth of meetings. Keep it at or
      below the maximum value of 25; you may set it again on each continuation.
    - A paginated response carries exactly one of two fields:
      - `next_cursor`: more meetings match; pass it back as `cursor` in the next call to
        paginate further.
      - `pagination_completion_reason`: paging is over, so stop. Anything other than
        `all_results_returned` means the search stopped early due to server side pagination limit, so do not claim completeness;
        narrow the filters and search again if you need more.
    - If a cursor is rejected or expired, start a new search.
    - Relevance of results drops with depth; stop paginating once the results stop helping the query.

    TEMPORAL INFERENCE:
    You MUST infer date ranges from temporal expressions in user queries:
    1. ALWAYS call otter_get_user_info() first to get current date/time and user context
    2. Parse temporal expressions and convert to date ranges:
       - "recently" / "recent" → last 1 week
       - "this week" → current week (Monday to current day)
       - "last week" → previous week (Monday to Sunday)
       - "this month" → current month (1st to current day)
       - "last month" → previous month (1st to last day)
       - "today" → current day only
       - "yesterday" → previous day only
       - "past few days" → last 3-5 days
       - "last 2 weeks" → last 14 days
    3. Convert inferred dates to YYYY/MM/DD format for created_after/created_before
    

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `query` | string | No | Optional. Semantic search query for finding relevant meetings. Only required when the user asks about a specific topic (e.g., 'find the progress of mcp project' -> 'progress of mcp project'). For general queries like 'summarize my meeting this week', leave empty so the search relies on metadata filters. |
| `cursor` | string | No | Optional. The next_cursor value from a previous otter_search response. Use it to get the next page of the same search. The original query and filters are preserved; page_size controls the size of the next page. |
| `username` | string | No | Optional. The current user's name from otter_get_user_info. When shared meetings are included, used to mark each result as personally attended vs. only shared with the user. |
| `page_size` | string | No | Optional. At most how many meetings to return in this response, between 1 and 25. |
| `rationale` | string | No | Optional. Briefly explain why you are calling this tool and how you plan to use the results. Do not include PII or other sensitive information. Maximum 250 characters. Do not pass rationale for pagination calls. This does not affect search results and is recorded for analytics only. |
| `attended_by` | string | No | Optional. Name(s) of the participant(s) who were in the meeting. Case insensitive. Use for queries like 'who attended', 'who was in the meeting', 'what did [person] say', or 'what meeting did [person] attend'. Comma-separate multiple names. |
| `folder_name` | string | No | Optional. Name of any folder mentioned. Only include the name without the word folder. If multiple folders are mentioned, format into a comma separated list. |
| `channel_name` | string | No | Optional. Name of any channel mentioned. Only include the name without the word channel. If multiple channels are mentioned, format into a comma separated list. |
| `created_after` | string | No | Optional. 'YYYY/MM/DD' format. Start of the date range: only meetings created on or after this date are returned. Infer it from the temporal expressions in the user's query. |
| `created_before` | string | No | Optional. 'YYYY/MM/DD' format. End of the date range: only meetings created on or before this date are returned. |
| `title_contains` | string | No | Optional. Space-delimited list of words, ALL of which must appear (in any order) in the recording title. Case insensitive. Pass words verbatim as they would appear in the title. Drop non-specific words, and prefer fewer, more distinctive words: every word has to match, so one extra word returns nothing. If a title filter returns no meetings, retry with fewer words or with `query` instead before concluding the meeting does not exist. |
| `keywords_in_transcript` | string | No | Optional. Comma separated keywords could be in the transcript. Case insensitive. |
| `include_shared_meetings` | string | No | Optional. Whether to include meetings shared with the user. Set to False only when the user explicitly asks for their own meetings. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `result` | object | Yes |  |
