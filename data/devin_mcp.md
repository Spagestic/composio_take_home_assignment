# Devin MCP

AI-powered access to GitHub repository documentation and codebase analysis, including private repositories, via Devin.

- **Category:** model context protocol
- **Auth:** API_KEY
- **Composio-managed OAuth available?** N/A
- **Tools:** 22
- **Triggers:** 0
- **Slug:** `DEVIN_MCP`
- **Version:** 20260910_00

## Tools

### Ask question

**Slug:** `DEVIN_MCP_ASK_QUESTION`

Ask any question about a GitHub repository and get an AI-powered, context-grounded response.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `question` | string | Yes | The question to ask about the repository. |
| `repoName` | string | Yes | GitHub repository or list of repositories (max 10) in owner/repo format. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `result` | string | Yes |  |

### Devin automation manage

**Slug:** `DEVIN_MCP_DEVIN_AUTOMATION_MANAGE`

Manage Devin automations.

Automations run Devin in response to events (GitHub activity, Slack messages,
Linear updates, schedules, incoming webhooks). Each automation has triggers
(which events fire it, with optional filter conditions and replies) and actions (what to do,
e.g. start a session with a prompt).

Single-automation results include the canonical webapp URL.

Use action="schemas" first when building a new automation: it returns every
supported trigger event type with its condition fields and supported replies,
plus the validation constraints enforced on create/update, so you can
construct valid triggers/actions for action="create" or action="update".
Use action="validate_create" or action="validate_update" for a dry-run
validation that needs no approval.
Each schedule:recurring trigger accepts exactly one rrule condition and no
other condition fields; use a separate trigger per additional schedule.
When the user specifies a timezone, preserve it with an IANA TZID DTSTART;
BYHOUR/BYMINUTE remain the requested local wall-clock values and DST follows
that timezone. Only use a timezone-less or UTC rule when the user explicitly
wants UTC or no wall-clock timezone applies, such as interval-only cadence.
For a one-time schedule, preserve a specified timezone with a local wall-clock
DTSTART and COUNT=1; an explicit UTC DTSTART remains valid.

On create, always set session_settings.net_policy to the Git Manager policy
from "schemas", even for tasks needing no external services. Add only required
hosts and explain why. Omission blocks all access. Use null only for explicitly
requested unrestricted access; omit settings for existing-session reminders
without auto_create.

Note: on "update", omitted top-level params are left unchanged. Whether a
passed config group merges (omitted keys kept, null clears) or replaces
wholesale is per-organization — action="schemas" reports it under "Update
semantics". When in doubt, fetch with "get" and include every field you
want to keep: that is correct under either semantics.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | Human-readable name for the automation (1-500 characters). Required for 'create' and 'validate_create'. |
| `after` | string | No | Opaque cursor for 'list'/'preflight_events' pagination (from a previous response's end_cursor). |
| `first` | string | No | Page size for 'list' (default 100) and 'preflight_events' (default 20) pagination; max 200. |
| `tools` | string | No | Tool grants for the sessions the automation spawns (slack_dm_scope goes inside this group, never as a top-level argument). |
| `action` | string ("list" | "get" | "schemas" | "templates" | "create" | "validate_create" | "update" | "validate_update" | "delete" | "run" | "preflight_get" | "preflight_events" | "preflight_event" | "preflight_test" | "preflight_run") | Yes | The operation to perform: 'list', 'get', 'schemas', 'templates' (the built-in automation templates whose template_id create accepts), 'create', 'validate_create', 'update', 'validate_update', 'delete', or 'run' (manually fire an enabled automation now — 'run now' — bypassing its trigger conditions). validate_create and validate_update perform a dry-run validation without requiring approval. |
| `limits` | string | No | Resource limits for the automation and the sessions it spawns. |
| `prompt` | string | No | For 'run' only: free-text stand-in for the triggering event, included in the event payload as additional context (max 10000 chars). Mutually exclusive with event_data. |
| `run_as` | string | No | Identity the triggered sessions run under — REQUIRED for 'create', no default. Choose it together with tools.mcp_servers. On 'update', omitted = unchanged. |
| `run_id` | string | No | For 'preflight_run': the run_id returned by 'preflight_test'. |
| `search` | string | No | Filter 'list' results by name substring. |
| `actions` | string | No | What the automation does. Required for 'create'; replaces all existing actions when passed to 'update'. Most automations use a single start_session action; scheduled/event-driven code scans use start_code_scan (fresh scan) or scan_new_commits (re-scan an existing scan) instead of a session. Long prompts render as BEGIN/END PROMPT <label> blocks: extract only the text between those two lines (excluding both) into a local file, edit it, and update with the full actions array and 'prompt': 'file:///absolute/path' (Devin's client resolves file URIs; other MCP clients must pass the text inline). Never retype a long prompt; extraction may add one trailing newline. |
| `enabled` | string | No | Enable or disable the automation on 'create'/'update'; on 'list', filter to automations in that enabled state. |
| `metadata` | string | No | Org-visible string key/value labels (max 16 pairs; keys <= 32 chars, values <= 128). Update behavior (per-key merge with null deleting a key, vs whole-dict replace) follows the org's update semantics — see action="schemas". On 'list', filters to automations whose metadata matches every given pair exactly (null values are invalid there). |
| `triggers` | string | No | Events that dispatch the automation. Required for 'create'; replaces all existing triggers when passed to 'update'. Schedule triggers use an RRULE condition (RFC 5545) with the 'recurrence' operator. When the user specifies a timezone, preserve it with an IANA TZID DTSTART and keep BYHOUR/BYMINUTE as the requested local wall-clock values, e.g. {'event_type': 'schedule:recurring', 'conditions': {'any': [{'all': [{'field': 'rrule', 'operator': 'recurrence', 'value': 'DTSTART;TZID=America/Los_Angeles:19700101T000000\nRRULE:FREQ=DAILY;BYHOUR=6;BYMINUTE=0'}]}]}}. DST follows that timezone. Only use a timezone-less or UTC rule when the user explicitly wants UTC or no wall-clock timezone applies (for example, interval-only cadence). Examples: every 6 hours — FREQ=HOURLY;INTERVAL=6; every day at 9:00 UTC — DTSTART;TZID=UTC:19700101T000000\nRRULE:FREQ=DAILY;BYHOUR=9;BYMINUTE=0; weekdays at 13:30 UTC — DTSTART;TZID=UTC:19700101T000000\nRRULE:FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR;BYHOUR=13;BYMINUTE=30; first of the month at 08:00 UTC — DTSTART;TZID=UTC:19700101T000000\nRRULE:FREQ=MONTHLY;BYMONTHDAY=1;BYHOUR=8;BYMINUTE=0. The API rejects malformed rrules; sub-hourly schedules require a Teams plan or above. For a one-time ('run once') schedule, use a DTSTART plus COUNT=1. Preserve a specified timezone with a local wall-clock DTSTART, e.g. 'DTSTART;TZID=America/Los_Angeles:20260115T093000\nRRULE:FREQ=DAILY;COUNT=1'; an explicitly UTC schedule may use 'DTSTART:20260115T173000Z\nRRULE:FREQ=DAILY;COUNT=1'. It fires once then auto-disables. Never fake it with a recurring schedule plus an invocation limit of 1. |
| `preflight` | string | No | For 'create'/'update' (and their validate_ dry-runs): the automation's Preflight check — a script run before the actions that decides per trigger event whether to proceed, skip, or fan out. For 'preflight_test': the script to run (need not be saved). Pass the source as 'file:///absolute/path' (Devin's client resolves file URIs). On update the whole group replaces the stored one; omitted keeps it. Preflight actions: 'preflight_get' (the saved script and settings), 'preflight_events' (recent matched trigger events a test can replay), 'preflight_event' (one event's full $EVENT_FILE document), 'preflight_test' (run a script — saved or not — against a recent event on a real VM; starts no actions), 'preflight_run' (poll a test run's outcome and logs). Only when action='schemas' reports the Preflight check available. |
| `creator_id` | string | No | Filter 'list' results to automations created by this user id. |
| `event_data` | string | No | For 'run' only: structured stand-in for the event data the real source would have sent. Mutually exclusive with prompt. |
| `event_type` | string | No | Filter 'list' results to automations with a trigger of this event type, e.g. 'slack:message'. |
| `agent_types` | string | No | Filter 'list' results by agent type; multiple values match automations containing at least one action of any given type (OR). Values: 'new_session' (start_session), 'long_running' (message_session), 'triage_session' (auto-triage), 'auto_triage' (legacy monitor_session), 'code_scan' (start_code_scan / scan_new_commits), 'remediate_finding', 'incident_session'. |
| `concurrency` | string | No | Caps on simultaneous runs and the queue of events waiting to run. |
| `template_id` | string | No | Create-only provenance marker from the automation templates endpoint. |
| `automation_id` | string | No | The automation ID. Required for 'get', 'update', 'validate_update', 'delete', and 'run'. |
| `notifications` | string | No | Email/Slack pings about the automation's dispatch outcomes. |
| `queued_event_id` | string | No | For 'preflight_event' (required) and 'preflight_test' (optional; default = the most recent matched event): a queued_event_id from 'preflight_events'. |
| `security_profile` | string | No | The automation's security-profile binding: {'profile_id': '...'} pins that profile, {'profile_id': null} records an explicit opt-out, omitted inherits the org/enterprise default. Writing it requires the security-profile management permission; an opt-out cannot escape a mandatory org/enterprise profile. Reads return {'selection': 'inherit'&#124;'none'&#124;'profile', 'profile_id', 'warnings': [...]} — warnings are non-blocking configuration conflicts (e.g. an MCP server endpoint the governing profile's network policy blocks); surface them to the user. |
| `session_settings` | string | No | Settings applied to every session the automation spawns. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `result` | string | Yes |  |

### Devin billing tag manage

**Slug:** `DEVIN_MCP_DEVIN_BILLING_TAG_MANAGE`

Manage Devin billing tags (groupings of Devin sessions for usage tracking) with a
single action-based tool: list/get/create tags, add/list their members, and
assign sessions. Only available in private mode (via devin.ai endpoints).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | Billing tag display name. Required for 'create'. |
| `after` | string | No | Opaque cursor for 'list'/'list_members' pagination (from a previous response's end_cursor). |
| `first` | string | No | Page size for 'list'/'list_members' pagination (default 100, max 200). |
| `action` | string ("list" | "get" | "create" | "add_member" | "list_members" | "assign_session") | Yes | Operation to perform: 'list', 'get', 'create', 'add_member', 'list_members', or 'assign_session'. |
| `user_id` | string | No | ID of the organization member to add. Required for 'add_member'. User ids can be found via the organization members listing (they are not email addresses). |
| `devin_id` | string | No | ID of the Devin session to assign. Required for 'assign_session'. Assigning replaces the session's current billing tag. |
| `description` | string | No | Free-form description of what work the tag covers. Optional for 'create'. |
| `billing_tag_id` | string | No | Billing tag id. Required for 'get', 'add_member', 'list_members', and 'assign_session'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `result` | string | Yes |  |

### Devin blueprint test

**Slug:** `DEVIN_MCP_DEVIN_BLUEPRINT_TEST`

Test a candidate blueprint YAML in an authoring VM: start → run initialize → fix → run initialize again (clean VM) → run maintenance → then persist with update_environment_config.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | Knowledge command name, when target is knowledge. |
| `yaml` | string | No | Candidate blueprint YAML for a run. |
| `after` | integer | No | Log cursor for get. |
| `scope` | string | No | Optional repository scope for the run working directory. |
| `action` | string ("start" | "run" | "get" | "cancel" | "close") | Yes | Operation: start, run, get, cancel, or close. |
| `run_id` | string | No | Run ID for get and cancel. |
| `target` | string | No | Blueprint target: initialize, maintenance, or knowledge. |
| `platform` | string | No | Authoring VM platform label. |
| `platforms` | string | No | Platform labels matching YAML "runs-on" values; use "default" for the default platform. Defaults to [platform]. |
| `repo_name` | string | No | Repository name used to create or set the session working directory. |
| `author_session_id` | string | No | Author session ID for run, get, cancel, and close. |
| `wait_timeout_seconds` | integer | No | Maximum time to wait for a run. Capped below the 15-minute approval window; use `get` to keep following a longer run. |
| `poll_interval_seconds` | integer | No | Seconds between run polls; capped so keepalives keep flowing. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `result` | string | Yes |  |

### Devin code scan manage

**Slug:** `DEVIN_MCP_DEVIN_CODE_SCAN_MANAGE`

Manage Devin code scans (sometimes referred to as "security scans" or
"Devin Security Swarm"). Targets the
authenticated organization and requires the org code scan view permission
for read actions or use permission for creation and remediation. Code
scanning must be enabled for the org.

The "create_profile" action creates an org-owned scan profile that
mutates the organization's scan configuration. The profile's mode is
fixed at creation; the guidance fields define the scan's objective for
non-security scan types. The "update_profile" action edits an existing
org-owned profile: only the fields you set are changed; omitted fields
are left untouched. Pass an empty string to clear a guidance field.

A profile is a reusable configuration that codifies a team's scanning
strategy. It is an implementation detail: do not say "profile" to the
user, list profiles for them, or ask them to pick or name one. Ask what
they want out of the scan and what should happen when it finishes, then
create or reuse a profile yourself to match. Users rarely know what the
settings mean: whenever you offer an option (effort; interactive mode
for security scans), say in one plain sentence what it does and what
choosing it changes before asking. When building the configuration from their answers:

- Establish the scan type FIRST: call "list_scan_types" to see which
  types the org may use. The full set is 'security', 'performance',
  'db-queries', 'test-coverage', 'dead-code', 'code-quality',
  'cleanup' (behavior-preserving cleanup of messy, redundant,
  over-built code), 'telemetry', 'accessibility', 'compliance',
  'migration-docs', and 'general' (no fixed domain — the profile
  defines the objective), but orgs without general scans enabled can
  only use 'security'; never use a type that is not listed. Infer the
  type from what the user asked for instead of presenting the types as
  a menu: a named type or obvious synonym maps to that type; a specific
  thing to find that no standard type covers ("camelCase variable
  names") is a 'general' scan aimed at exactly that. State the choice
  in a clause so they can correct it, and only ask when the request is
  genuinely ambiguous. A profile only appears in scan creation for its
  own type, so always set scan_type explicitly to that type; a profile
  created with the wrong type will not show up where the user expects
  it.
- Ask whether there is anything specific they want out of the scan:
  problems or areas to focus on, parts of the codebase to skip (e.g.
  generated code, vendored deps, test fixtures), and anything that is
  always critical or never worth reporting. Map the answers onto fields
  yourself — threat_model_guidance (what to look for; the UI calls this
  the "scan model"), include/exclude globs (which files are scanned),
  triage_guidance (dedup/priority policy) — and never ask the user to
  fill in fields or enumerate them. Only set investigation, validation,
  report, or remediation guidance if the user volunteered that detail
  (validation guidance says how to build and run the code to confirm
  findings; without it that phase is skipped).
- Always ask about communication for non-security discover scans:
  should anything happen when the scan finishes? Offer concrete choices
  (Slack the requester a summary; identify the code owners of each
  finding and ping them with it and its recommended fix; post to a team
  channel; no notifications), pin down which findings qualify, and
  write the answer as communication_guidance. Profiles are shared
  across the org: when reusing one that has no communication_guidance,
  fill it in with "update_profile"; if its guidance differs from what
  the user wants, create a new profile rather than overwriting it.
  Security and ingest scans do not run this phase.
- Reuse an existing profile ("list_profiles" with scan_type set to the
  chosen type, then "get_profile") only when its description clearly
  covers what the user asked for; otherwise create a new one. A profile
  for a different scan type is never an option for this scan — do not
  propose, reuse, or retype one. If you reuse one, say so in the user's
  terms ("your team has scanned for this before — I'll reuse that
  setup").
- If the user's findings already come from their own scanner or security
  process, create an ingest-mode profile (mode='ingest') instead of a
  discover profile: ingestion_source_guidance is then required in
  practice and must be concrete (where findings live, how to
  authenticate — reference credentials by org secret name, never inline
  a token), with optional post_ingestion_guidance for triage policy.
  Ingest profiles have no scope globs or scan model.

Before setting up a scan, invoke the creating-code-scans skill and follow
its guided flow (repositories → scan type → what to look for and what
happens when it finishes → options → summary → explicit confirmation).
NEVER call "create_scan" until the user has
explicitly approved a summary of the exact scan you are about to create;
a request to run a scan is a request to set one up, not approval to
launch it, and until they confirm you are setting a scan up — never tell
them you are launching or starting one. After a successful "create_scan",
give the user the returned scan URL for security scans, or the orchestrating
session URL for all non-security scans (never their scan page).
If the session is not ready yet, use get_session with the returned scan_id;
do not create the scan again. The scan runs in its own session.

Scans are typed (e.g. 'security', 'general'). A non-security scan's objective
is defined by its profile, so every non-security scan type requires a
profile_id. When a profile is given, the scan's type comes from the profile;
an explicit scan_type must match it.

Scans are re-runnable: once a scan has completed, "scan_new_commits"
scans only the commits landed since, on the same scan and with the same
setup, so its findings join the existing ones. Prefer it over a new scan
whenever the user wants an existing scan refreshed. It needs no
confirmation flow beyond the user asking for it, and returns 409 while
the scan is still running or has never completed.

The "remediate_finding" and "remediate_findings" actions launch a Devin
session that modifies code and attempts to open pull requests. Use them
only when the user has explicitly requested remediation of those findings;
for more than one finding use "remediate_findings" once (it groups related
findings into as few pull requests as makes sense) rather than
"remediate_finding" per finding.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `host` | string | No | Git host of the repository/repositories ('create_scan' only). |
| `mode` | string | No | Profile mode: 'discover' (default) or 'ingest' ('create_profile' only; the mode is fixed at creation). |
| `after` | string | No | Opaque cursor for list pagination (from a previous response's end_cursor). |
| `first` | string | No | Page size for list actions (default 100, max 200). |
| `repos` | string | No | Full names of the repositories to scan together as one scan ('create_scan'; provide exactly one of repo_name or repos). The first entry is the scan's primary repo. Use this whenever the user wants more than one repository covered. |
| `action` | string ("list_scans" | "list_findings" | "list_scan_types" | "list_profiles" | "get_profile" | "create_profile" | "update_profile" | "create_scan" | "scan_new_commits" | "get_session" | "remediate_finding" | "remediate_findings") | Yes | The operation to perform: 'list_scans', 'list_findings', 'list_scan_types', 'list_profiles', 'get_profile', 'create_profile', 'update_profile', 'create_scan', 'scan_new_commits', 'get_session', 'remediate_finding', or 'remediate_findings'. 'list_scan_types' returns the scan types enabled for this org — only ever use those types (when general scans are disabled, only 'security'). Pick the type from the user's request yourself rather than presenting the types as a menu; use 'general' for anything no standard type covers. 'create_scan' launches the scan: only call it after the user has explicitly confirmed the summarized setup (every repo, scan type, what the scan looks for, what happens when it finishes, effort, and for security scans interactive mode) in their most recent reply. 'scan_new_commits' re-runs an existing, completed scan against only the commits landed since it last ran — use it (not 'create_scan') whenever the user wants an existing scan brought up to date, e.g. "scan for new commits" or "rescan"; findings accumulate on the same scan. 'get_session' retrieves the latest run's orchestrating session link for a scan. |
| `effort` | string | No | Scan effort ('create_scan' only): 'normal' (default) uses lower model reasoning effort and larger investigation batches — faster; 'deep' runs the full pipeline, tracing each finding further and validating findings one at a time — most thorough, slower. Explain the trade-off in terms of time and thoroughness only (never cost or usage), then ask. |
| `status` | string | No | Filter findings to these statuses: 'open', 'dismissed', 'resolved' ('list_findings' only). |
| `scan_id` | string | No | Filter findings to this scan ('list_findings'), or the scan ID containing the finding(s) ('remediate_finding', 'remediate_findings'), or the scan to re-run ('scan_new_commits'), or the scan whose orchestrating session to retrieve ('get_session'). |
| `severity` | string | No | Filter findings to these severities: 'critical', 'high', 'medium', 'low' ('list_findings' only). |
| `repo_name` | string | No | Filter to this repository ('list_scans' and 'list_findings'), or the full repository name to scan ('create_scan'; provide exactly one of repo_name or repos). |
| `scan_type` | string | No | Type of scan, e.g. 'security' or 'general' ('create_scan', 'create_profile', 'list_profiles'). For 'list_profiles': only return profiles for this scan type — always pass the chosen type so profiles for other types are never shown or considered. For 'create_scan': must match the chosen profile's scan type; defaults to the profile's type, or 'security' when neither a profile nor a type is given. Every non-security scan type requires a profile_id — the profile defines the scan's objective. For 'create_profile': the type of scan the profile configures (defaults to 'security'). For 'update_profile': the new scan type of the profile. |
| `finding_id` | string | No | The finding ID. Required for 'remediate_finding'. |
| `profile_id` | string | No | The profile ID. Required for 'get_profile' and 'update_profile'; optional for 'create_scan'. |
| `time_after` | string | No | Unix seconds lower bound. Optional creation-time filter ('list_scans' only). |
| `description` | string | No | Description of the profile ('create_profile' and 'update_profile'). |
| `finding_ids` | string | No | Findings of scan_id to fix together ('remediate_findings'; at least one). One session plans and groups them, then opens one pull request per group. |
| `interactive` | string | No | Interactive mode ('create_scan', security scans only): true pauses the scan once it has drafted its threat model and opens a session where the user reviews and adjusts it before investigation starts; false (default) runs end to end unattended. For security scans explain the difference, then ask. Never offer or set it for any other scan type — those always run unattended. |
| `time_before` | string | No | Unix seconds upper bound. Optional creation-time filter ('list_scans' only). |
| `profile_name` | string | No | Name of the profile. Required for 'create_profile'; optional new name for 'update_profile'. |
| `exclude_globs` | string | No | Glob patterns of files to exclude from scans ('create_profile' and 'update_profile'). |
| `include_globs` | string | No | Glob patterns of files to include in scans ('create_profile' and 'update_profile'). |
| `report_guidance` | string | No | Guidance for the report phase ('create_profile' and 'update_profile'). |
| `triage_guidance` | string | No | Guidance for the triage phase ('create_profile' and 'update_profile'). |
| `validation_guidance` | string | No | Guidance for the validation phase ('create_profile' and 'update_profile'). |
| `remediation_guidance` | string | No | Guidance for the remediation phase ('create_profile' and 'update_profile'). |
| `threat_model_guidance` | string | No | Guidance describing the threat model ('create_profile' and 'update_profile'). |
| `communication_guidance` | string | No | Guidance for the communication phase: what happens when the scan finishes, e.g. Slack the requester a summary, or ping the code owners of each finding with it and its fix ('create_profile' and 'update_profile'). Always ask the user about this for non-security discover profiles. Security and ingest scans do not run this phase. |
| `investigation_guidance` | string | No | Guidance for the investigation phase ('create_profile' and 'update_profile'). |
| `post_ingestion_guidance` | string | No | Guidance for the post-ingestion phase ('create_profile' and 'update_profile'). |
| `ingestion_source_guidance` | string | No | Guidance describing the ingestion source ('create_profile' and 'update_profile'). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `result` | string | Yes |  |

### Devin find setting

**Slug:** `DEVIN_MCP_DEVIN_FIND_SETTING`

Find a Devin webapp setting and get a deep-link URL to it. Use for
"where do I change X?". The output includes everything needed to build
the final URL.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `query` | string | No | Feature keywords (e.g. "queue messages", "fast mode"). Omit for the full settings catalog. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `result` | string | Yes |  |

### Devin knowledge manage

**Slug:** `DEVIN_MCP_DEVIN_KNOWLEDGE_MANAGE`

Manage Devin knowledge notes and suggestions via a single action-based tool.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `body` | string | No | Deprecated alias for `content`. Prefer `content`; this is accepted only for backward compatibility with older callers/skills. |
| `name` | string | No | Note name — required for create and update (v3 PUT is full-replace). |
| `after` | string | No | Opaque cursor for 'list' pagination (from a previous response's end_cursor). |
| `first` | string | No | Page size for 'list' pagination (default 100, max 200). |
| `limit` | string | No | Page size for list_suggestions (default 20, max 100). |
| `query` | string | No | Search query for list_suggestions — filters by trigger/content text. |
| `action` | string ("list" | "get" | "create" | "update" | "delete" | "folders" | "list_suggestions" | "view_suggestion" | "dismiss_suggestions") | Yes | Operation to perform. Notes: 'list', 'get', 'create', 'update', 'delete', 'folders' (returns the folder structure with per-folder note counts). Suggestions: 'list_suggestions', 'view_suggestion', 'dismiss_suggestions'. |
| `offset` | string | No | Pagination offset for list_suggestions (default 0). |
| `search` | string | No | Search query for 'list' — case-insensitive substring match across note name, trigger, and content. Useful for dedup and conflict detection. |
| `status` | string | No | Filter suggestions by status (default 'pending'). Valid: 'pending', 'accepted', 'rejected'. |
| `content` | string | No | Note content — required for create and update (v3 PUT is full-replace). |
| `note_id` | string | No | Note ID — required for get, update, delete. |
| `trigger` | string | No | Trigger description — required for create and update (v3 PUT is full-replace). |
| `event_id` | string | No | Event ID of a knowledge suggestion — required for view_suggestion. |
| `event_ids` | string | No | List of event IDs to dismiss — required for dismiss_suggestions. |
| `since_days` | string | No | Only return suggestions from the last N days (list_suggestions). |
| `folder_path` | string | No | Filter 'list' results to notes in a specific folder (e.g. 'Dana/SubFolder' or '/' for root notes only). |
| `pinned_repo` | string | No | Pin this note to a specific repo (owner/repo format). For create/update: sets the pinned repo. For list: filters results to notes pinned to this repo. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `result` | string | Yes |  |

### Devin list integrations

**Slug:** `DEVIN_MCP_DEVIN_LIST_INTEGRATIONS`

List native integrations and MCP servers for the organization, with status and settings/install URLs.

Returns a JSON object with two arrays: "integrations" (native integrations like GitHub, Jira, Slack)
and "mcp_servers" (marketplace MCP servers). Each entry includes whether it's installed and a
path-only URL to the settings/setup page (no host, works with custom enterprise domains).
Pass `query` to look up a specific server by name — an empty "mcp_servers" array then means it is
not in the marketplace (install it as a custom server with devin_mcp_server_manage instead).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `query` | string | No | Case-insensitive substring matched against name, slug, and description. Use it whenever you are looking for one specific integration or MCP server (e.g. query='whimsical'); the unfiltered catalog is large. |
| `filter` | string ("all" | "installed" | "not_installed") | No | Filter results — 'all' (default), 'installed', or 'not_installed'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `result` | string | Yes |  |

### Devin mcp server manage

**Slug:** `DEVIN_MCP_DEVIN_MCP_SERVER_MANAGE`

Manage MCP server installations for the organization: install (from the
marketplace or custom), update, delete, enable, or disable. Marketplace
installs use the one-call fast path. Before a custom install, use web
research to confirm the official endpoint and authentication method. For an
API key, use request_secret and pass only auth_header_secret_name. Never ask
the user to paste a secret into normal session text. The pre-approval check
rejects OAuth when automatic registration cannot complete. Install, update,
and delete show the approval card, so do not send another approval request.
Only available in private mode.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `url` | string | No | Server URL. Required for HTTP/SSE transport on a custom 'install'. On a marketplace 'install', only to select a URL variant (e.g. a region): it must keep the scheme and host of one of the manifest's URLs; omit it for the default. |
| `icon` | string | No | Icon URL for the approval card. Set automatically; do not set it. |
| `name` | string | No | Display name. Required for a custom 'install'. |
| `slug` | string | No | URL-safe identifier for the installation. Required for a custom 'install'. |
| `action` | string ("install" | "resolve_install" | "update" | "delete" | "enable" | "disable") | Yes | Operation to perform. 'resolve_install' is read-only: it resolves a marketplace server or validates a custom server before the approval card. |
| `command` | string | No | Command to run. Required for STDIO transport on a custom 'install'. |
| `transport` | string | No | 'HTTP', 'SSE', or 'STDIO'. Required for a custom 'install'. |
| `auth_method` | string | No | 'none', 'auth_header', or 'oauth'. Before a custom install, research the provider's official documentation and select a supported method. Never put a credential value in this tool call. |
| `description` | string | No | Longer description. Optional. |
| `oauth_scope` | string | No | OAuth scope. Custom installs only. |
| `oauth_resource` | string | No | OAuth resource indicator. Custom installs only. |
| `auth_header_key` | string | No | Header name for custom auth_header installs. Defaults to Authorization. |
| `installation_id` | string | No | Installation id. Required for 'update', 'delete', 'enable', and 'disable'. Find it with devin_list_integrations. |
| `oauth_client_id` | string | No | Pre-registered OAuth client ID for a custom install. Client IDs are identifiers, not secret values. If the provider also requires a client secret, configure that secret in Settings instead of putting it in session text. |
| `short_description` | string | No | One-line description. Required for a custom 'install'. |
| `auth_header_format` | string | No | How to format auth_header_secret_name: 'bearer' creates 'Bearer ${SECRET_NAME}'; 'raw' creates '${SECRET_NAME}'. Defaults to 'bearer'. |
| `installation_scope` | string | No | Optional override: 'org' (Organization) shares one credential org-wide; 'user' (Personal) has each member connect their own account. Omit unless the user requests a scope; the marketplace default (or 'org') applies. |
| `auth_header_secret_name` | string | No | Protected Brain secret name for a custom auth_header install. First use request_secret and tell the user never to paste the value into normal session text. Pass only the name here; the credential value is never included in the install card. The name must start with MCP_ to limit access to MCP-specific secrets. For an org installation, use an org-scoped saved secret. A temporary secret works only in the current session. |
| `marketplace_server_slug` | string | No | For 'install': the marketplace server's slug or exact name (e.g. 'notion' or 'Notion'); no prior devin_list_integrations call is needed. Transport, command, and auth come from the marketplace manifest and cannot be overridden; url may only select a variant the manifest allows. Omit to install a custom server. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `result` | string | Yes |  |

### Devin oncall manage

**Slug:** `DEVIN_MCP_DEVIN_ONCALL_MANAGE`

Manage Devin Oncall. Oncall resources mirror automations (same triggers / tools / limits /
session_settings / session / run_as / metadata groups and the same merge-patch update
semantics) — only the action is implicit: a responder triages one Slack channel, an
incident investigates one incident channel, a report summarizes responders/incidents on a
schedule.

Resources and actions:
- responder: list, get, create, validate_create, update, validate_update, delete, issues
  (a responder's open issues, paged via first/after/order_by).
- incident_settings: get, update, validate_update (one settings object per org; PATCH).
- incident: list (report_id= returns that report's next-run period, candidates and
  period counts), get (Slack channel, parent session, report ids — the incident report
  is the 'incident-report.md' attachment on the parent session; fetch it with
  devin_session_interact get_attachments), stop, resume.
- report: list, get (config + live membership), create, validate_create, update,
  validate_update, delete, runs (GET history, or POST a new immutable run when
  incident_ids is supplied), run (one run with its frozen sections and counts).
- schemas (no resource): default_net_policy, default_devin_mode / available modes,
  default_runbook, slack_connected. ingest_dashboard (no resource): queue an unattended
  run that turns a Datadog/New Relic dashboard into Oncall knowledge.

Creating: call 'schemas' first when unsure about modes or the network policy. Defaults
when omitted — run_as organization (the system user), devin_mode = best available (Ultra
when the org has it), net_policy = deployment Git Manager-only policy, no runbook, Linear
on, responder Slack grants following the watched channels, incident auto-join on. Recommend
metadata.team (and service), tools.mcp_servers only for telemetry servers the org has
installed, and Slack delivery for reports when a channel is known. Never invent Slack
channel IDs. Use validate_create/validate_update to dry-run a payload. Creates are not
idempotent: on ambiguous failure, list before retrying. Update is a merge-patch: omitted
params keep their value; within a passed group (tools, limits, session_settings, session,
run_as, metadata) a null key clears it; lists replace wholesale. Top-level params cannot be
nulled through this tool — runbook, slack_channel_prefix, slack_team_id, response_mode and
incidents_match take '' instead. Mutations (create/update/delete/stop/resume/ingest_dashboard) require the
user's approval. report runs POST is accepted server-side only from that report's schedule
session.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | Display name for responder/report create (required) or update. |
| `type` | string | No | 'ingest_dashboard': dashboard source, 'datadog' (default) or 'newrelic'. |
| `after` | string | No | Opaque cursor for list/issues/runs pagination (from a previous response). |
| `first` | string | No | Page size for list/issues/runs (default 100, max 200). |
| `tools` | string | No | Responder / incident_settings tool grants for spawned sessions: mcp_servers (only telemetry servers the org has installed — check devin_list_integrations), slack_channels, linear_enabled. Omit slack_channels on responder create: the server grants Slack for the channels the trigger watches. Update merges per member; lists replace wholesale. |
| `action` | string ("list" | "get" | "create" | "validate_create" | "update" | "validate_update" | "delete" | "issues" | "stop" | "resume" | "runs" | "run" | "schemas" | "ingest_dashboard" | "report_context" | "responder_issues" | "report_stats" | "digest_runs" | "incident_candidates" | "submit_report_run") | Yes | Operation to perform on 'resource': 'list', 'get', 'create', 'validate_create', 'update', 'validate_update', 'delete', 'issues' (responder), 'stop'/'resume' (incident), 'runs'/'run' (report). Without a resource: 'schemas' (defaults, available modes, Slack connectivity) or 'ingest_dashboard'. The flat legacy names (report_context, responder_issues, ...) are aliases for older prompts; do not use them in new ones. |
| `limits` | string | No | Responder limits: max_acu_limit per triage session and invocations rate (server default 150 per hour). Omit unless the user asks. |
| `report` | string | No | Report 'runs' POST: the full report body in markdown. |
| `run_as` | string | No | Identity spawned sessions run as: {'type': 'organization'} (default; the org system user, recommended so triage survives the creator leaving) or {'type': 'creator'}. |
| `run_id` | string | No | Report run id for report 'run'. |
| `enabled` | string | No | Responder: whether it triages new messages (default true). incident_settings: whether the incident feature is on for the org. |
| `runbook` | string | No | Responder investigation instructions. Omit by default — the server applies 'Investigate the root cause to the best of your abilities.' Only supply one when the user gives concrete investigation steps; pass '' on update to reset to the default. |
| `session` | string | No | Responder / incident_settings / report session tags (cost codes) spawned sessions bill to, validated as the run identity. Orgs that require session tags must supply exactly one allowed tag; otherwise omit. |
| `summary` | string | No | Report 'runs' POST: at-most-2-sentence overview of the period vs the previous run. |
| `team_id` | string | No | Slack workspace (team) ID for the responder's channel; omit when the org has one workspace. |
| `metadata` | string | No | Responder labels. Recommend {'team': ...} always and {'service': ...} when obvious from the channel/runbook; reports can select members by these tags (responder_tags). Update merges per key; a null value deletes the key. |
| `order_by` | string | No | Issue ordering for responder 'issues': 'last_activity' (default) or 'occurrence_count'. A cursor is only valid for the ordering it was minted under. |
| `resource` | string | No | What to operate on: 'responder' (a Slack channel triage bot), 'incident_settings' (the org's single incident-channel config), 'incident' (an incident channel + investigation session), or 'report' (recurring report over responders/incidents; runs live under it). Omit only for 'schemas' and 'ingest_dashboard'. |
| `triggers` | string | No | Responder create (required)/update: exactly one 'slack:message' trigger whose conditions name the Slack channel ID to triage, e.g. [{'event_type': 'slack:message', 'conditions': {'any': [{'all': [{'field': 'channel', 'operator': 'eq', 'value': 'C0123ABC456'}]}]}}]. Ask the user for the channel ID (or find it via devin_list_integrations / Slack tools); never invent one. On update the list replaces wholesale. |
| `dashboard` | string | No | 'ingest_dashboard': reference to the dashboard to ingest — a URL, id, or name. |
| `report_id` | string | No | Report id for report get/update/validate_update/delete/runs/run, and the optional filter for incident list (returns that report's candidate period + incidents to classify). |
| `incident_id` | string | No | Incident id for incident get/stop/resume. |
| `incident_ids` | string | No | Report 'runs' POST: incident ids classified into the report for this period (from incident list with report_id). Supplying this (even []) submits a run instead of listing runs. |
| `responder_id` | string | No | Responder id for responder get/update/validate_update/delete/issues. |
| `notifications` | string | No | Report create only: {'slack': {'channel_id': 'C...'}} delivers each run to that channel. Recommend it when the user names a channel or one is obvious (e.g. the team's channel); never invent an ID. Cannot be changed on update. |
| `response_mode` | string | No | incident_settings: response mode, 'proactive' or 'one_shot_rca'. Omit to preserve it; pass '' to clear it to the application default. |
| `slack_team_id` | string | No | incident_settings: Slack workspace ID incidents are watched in (omit for one workspace). Pass '' on update to clear the stored workspace. |
| `responder_tags` | string | No | Report create/update: tag-managed membership — every responder whose metadata matches ALL these key/values (e.g. {'team': 'payments'}), resolved live at each run. Preferred when the user describes members by team/service. |
| `incidents_match` | string | No | Report create/update: natural-language description of which incidents belong in this report (e.g. 'incidents affecting the payments service'). Omit for a responders-only report; pass '' on update to clear it. |
| `session_settings` | string | No | Responder: devin_mode (omit on create for the server default — the best of ultra > fusion > normal the org can use; Ultra is recommended for Oncall) and net_policy (omit on create for the deployment default Git Manager-only policy from 'schemas'; explicit null = unrestricted, only when the user asks). On update, preserve unless asked. |
| `auto_join_enabled` | string | No | incident_settings: whether Devin auto-joins new public channels matching the prefix (default true — keep it on unless the user wants to invite Devin manually). |
| `slack_channel_prefix` | string | No | incident_settings: prefix for auto-created incident channels (server default 'inc-'). Pass '' on update to clear the stored prefix. |
| `responder_automation_ids` | string | No | Report create/update: fixed responder membership (ids from responder list). Mutually exclusive with responder_tags; on update the list replaces wholesale. |
| `incident_session_settings` | string | No | incident_settings: devin_mode plus the staged investigation overrides initial_investigation_mode and thread_session_mode. Omit either override to use the application default; explicit null clears it. net_policy follows the deployment default and explicit-null semantics. The legacy session_settings alias is also accepted. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `result` | string | Yes |  |

### Devin playbook manage

**Slug:** `DEVIN_MCP_DEVIN_PLAYBOOK_MANAGE`

Manage Devin playbooks with a single action-based tool.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `body` | string | No | Deprecated alias for `content`. Prefer `content`; this is accepted only for backward compatibility with older callers/skills. |
| `after` | string | No | Opaque cursor for 'list' pagination (from a previous response's end_cursor). |
| `first` | string | No | Page size for 'list' pagination (default 100, max 200). |
| `macro` | string | No | Automation macro identifier. Must start with '!' followed by word characters (letters, digits, underscores), e.g. '!my_macro'. Optional. |
| `title` | string | No | Playbook title. Required for 'create' and 'update' (v3 PUT is full-replace). |
| `action` | string ("list" | "get" | "create" | "update" | "delete") | Yes | Operation to perform: 'list', 'get', 'create', 'update', or 'delete'. |
| `content` | string | No | Playbook markdown content. Required for 'create' and 'update' (v3 PUT is full-replace). |
| `playbook_id` | string | No | Playbook id. Required for 'get', 'update', 'delete'. |
| `structured_output_schema` | string | No | JSON Schema (Draft 7) defining the required output contract for sessions using this playbook. Max 64KB. Optional for 'create' and 'update'. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `result` | string | Yes |  |

### Devin review manage

**Slug:** `DEVIN_MCP_DEVIN_REVIEW_MANAGE`

Trigger a Devin Review for a pull/merge request, fetch the latest review
status for one, or fetch a completed review's findings. Only available in
private mode (via devin.ai endpoints). The repo must be connected to the
authenticated organization.

Reviews run asynchronously: 'trigger' accepts the review (status starts
as 'pending'); poll with 'get_status' until it reaches 'completed', then
use 'get_findings' to read the findings ('get_findings' returns an error
until the review completes).

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `action` | string ("trigger" | "get_status" | "get_findings") | Yes | 'trigger' starts a Devin Review for the PR; 'get_status' fetches the latest review status for the PR; 'get_findings' fetches the findings of a completed review. By default, only the severities the org delivers to sessions are returned; the rest remain available on the Devin Review page and can be fetched by passing the severity explicitly. |
| `pr_url` | string | Yes | Full URL of the pull/merge request (e.g. 'https://github.com/owner/repo/pull/123'). |
| `severity` | string | No | get_findings only: filter findings to one severity ('bug', 'security', 'flag', or 'info'). Bug means a concrete correctness, regression, or repo-rule violation; security means a vulnerability or hardening gap; flag means something needing further investigation that may or may not be a bug; info means an informational note. Omit to return only the severities the org delivers to sessions; the remaining severities stay available on the Devin Review page and can be fetched by passing the severity explicitly. |
| `commit_sha` | string | No | get_status/get_findings only: commit SHA to look up (full or short prefix). Defaults to the PR's current head commit. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `result` | string | Yes |  |

### Devin schedule manage

**Slug:** `DEVIN_MCP_DEVIN_SCHEDULE_MANAGE`

Manage scheduled Devin sessions (deprecated in favor of Automations).

Note: "create" is only for organizations not yet migrated to Automations.
For migrated organizations the API rejects it with 403 — schedule work by
creating an automation with a schedule trigger via
'devin_automation_manage' instead. The other actions keep working for
existing schedules.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | Human-readable name for the schedule. Required for 'create'. |
| `agent` | string | No | Which agent to run: 'devin', 'data_analyst', or 'advanced'. |
| `limit` | string | No | Max number of results for 'list' (capped at 100). |
| `action` | string ("list" | "get" | "create" | "update" | "delete") | Yes | The operation to perform: 'list', 'get', 'create', 'update', or 'delete'. |
| `offset` | string | No | Pagination offset for 'list'. |
| `prompt` | string | No | The prompt Devin will run on each trigger. Required for 'create'. |
| `enabled` | string | No | Enable or disable the schedule (used with 'update'). |
| `platform` | string | No | VM platform for sessions spawned by this schedule (e.g. 'windows'). When omitted, sessions fall back to the org's default platform at trigger time. Must match a platform configured for the organization (case-insensitive); unknown values are rejected with a 400 that lists the available platform labels. |
| `frequency` | string | No | Cron expression (e.g. '0 9 * * 1-5'). Required for 'create' with recurring schedules. |
| `notify_on` | string | No | When to send notifications: 'always', 'failure', or 'never'. |
| `playbook_id` | string | No | Optional playbook to attach to the scheduled session. |
| `schedule_id` | string | No | The schedule ID. Required for 'get', 'update', and 'delete'. |
| `scheduled_at` | string | No | ISO 8601 datetime to run at. Required for 'create' with one_time schedules. |
| `schedule_type` | string | No | 'recurring' (default) or 'one_time'. |
| `bypass_approval` | string | No | Skip MCP tool permission checks for created sessions. |
| `target_devin_id` | string | No | Devin session ID to send the prompt to instead of starting a new session. Only valid for one_time schedules. Use this to schedule a message to be sent to an existing session at a future time (e.g. to wake yourself up later). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `result` | string | Yes |  |

### Devin session create

**Slug:** `DEVIN_MCP_DEVIN_SESSION_CREATE`

Create one or more child Devin sessions via the v3 REST API.

Only use this when prompted to; do not use it to parallelize your own work by default.

Before calling this, invoke the managing-child-sessions skill for guidance.

The returned session_id values do NOT include the "devin-" prefix. To use them
with devin_session_interact, prepend "devin-" (e.g. session_id "abc123" becomes "devin-abc123").

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tags` | string | No | Tags to apply to ALL created sessions (e.g. a shared run or campaign identifier). Each session spec can also include a 'tags' key to override this value for that session. |
| `repos` | string | No | List of repository identifiers in 'owner/repo' format (e.g. ['myorg/myrepo']) to restrict ALL created sessions to. Each session spec can also include a 'repos' key to override this value for that session. |
| `platform` | string | No | Prefer leaving this unset. When omitted (or set to 'inherit'), the child inherits the parent session's placement — its VM platform AND its outpost (BYOB) pool — so a Windows session spawns Windows children, and a session running on an outpost pool spawns children on the same pool, by default. Only set this when the user explicitly asks for a different machine type or a specific outpost pool: pass a platform label (e.g. 'linux', 'windows') or the name of an outpost pool. Each session spec can also include a 'platform' key to override this value for that session. Any value must match either a platform label or an outpost pool name registered for the org (built-in platforms take priority when a name matches both). |
| `sessions` | array | Yes | Array of session specs; only 'prompt' is required in each. |
| `devin_mode` | string | No | Devin agent mode for ALL created sessions. One of 'normal' (default Agent mode), 'fast' (Fast mode, Opus-backed), 'lite' (Devin Lite — cheaper, smaller-scope sessions), 'ultra' (Devin Ultra — smartest, most capable model), or 'fusion' (Fusion — multi-model routing). Batch-level only — a 'devin_mode' key inside a session spec is rejected with guidance to move it to this batch-level field. When omitted, the org/user default is used. 'fast', 'lite', 'ultra', and 'fusion' are gated by the same feature flags / enterprise agent-preview restrictions as the web app — the server rejects the call with a 400 if the mode is not available for the org. |
| `board_ticket_ids` | string | No | Devin Boards ticket ids (from devin_ticket_manage) that ALL created sessions are dispatched to work on. Each session spec can also include a 'board_ticket_ids' key to override this value for that session. The server validates the ids against the org, persists them on the child and tags it 'board'; the CHILD claims the tickets itself on its first turn, so do not claim them before dispatching. |
| `structured_output_schema` | string | No | JSON Schema (Draft 7) applied to ALL sessions that don't specify their own. Only pass this when you need a task-specific result from the child; without it no structured output is requested. The child reports output conforming to the schema via provide_structured_output; poll it via devin_session_interact(action='get') — the structured_output field is populated without interrupting the child. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `result` | string | Yes |  |

### Devin session events

**Slug:** `DEVIN_MCP_DEVIN_SESSION_EVENTS`

Inspect events within a Devin session — list summaries, fetch full details, or search.

Actions:
  - list: Paginated event summaries with optional filters.
  - details: Batch-fetch full event contents by event_id or by offset+limit range.
  - search: Full-text search across event contents.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `after` | string | No | Opaque cursor for pagination (list/search only). |
| `first` | string | No | Page size (default 50, max 100; list/search only). |
| `limit` | string | No | Number of events to fetch when using offset (details only, default 20, max 50). |
| `query` | string | No | Search text (search only, required for search action). |
| `action` | string ("list" | "details" | "search") | Yes | 'list', 'details', or 'search'. |
| `offset` | string | No | 0-based offset into the session timeline for details (details only, mutually exclusive with event_ids). Use with limit. |
| `direction` | string | No | Filter by direction (list/search only). |
| `event_ids` | string | No | Event IDs to fetch full contents for (details only, max 20, mutually exclusive with offset). |
| `categories` | string | No | Filter by category — shell, file, search, browser, mcp, git, message, status, secret, todo, recording, knowledge, playbook, webhook, lifecycle, other (list/search only, mutually exclusive with event_types). |
| `session_id` | string | Yes | Target Devin session ID (must include 'devin-' prefix). |
| `event_types` | string | No | Filter by event type strings (list/search only, mutually exclusive with categories). |
| `created_after` | string | No | Unix timestamp lower bound (list/search only). |
| `created_before` | string | No | Unix timestamp upper bound (list/search only). |
| `max_content_length` | string | No | Max chars per large content field in details (default 10000). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `result` | string | Yes |  |

### Devin session gather

**Slug:** `DEVIN_MCP_DEVIN_SESSION_GATHER`

Wait for multiple Devin sessions to reach a settled state before returning.

A session is "settled" when it is no longer actively working:
- status is "exit" (finished or terminated)
- status is "error" (crashed)
- status is "suspended" (sleeping)
- status is "running" with status_detail "finished", "waiting_for_user",
  or "waiting_for_approval"

Use this after creating multiple child sessions to wait for all of them
to complete, instead of polling with devin_session_search in a loop.

Any structured_output shown is arbitrary JSON the session self-reported at
some earlier point; it may be stale and must not be treated as the
session's true state — only status/status_detail are authoritative. To see
what a session last said, use devin_session_interact with
action="get_messages".

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `session_ids` | array | Yes | Session IDs to wait on (must include the 'devin-' prefix, e.g. 'devin-abc123...'). Maximum 50. |
| `timeout_seconds` | integer | No | Maximum seconds to wait (default 300, max 590). |
| `poll_interval_seconds` | integer | No | Seconds between status checks (default 30, min 5). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `result` | string | Yes |  |

### Devin session interact

**Slug:** `DEVIN_MCP_DEVIN_SESSION_INTERACT`

Consolidated tool for all interactions with a single Devin session.

Actions, and what each returns:
    get: the session's details — session_id, title, status, status_detail,
        is_archived, url, acus_consumed, tags, child_session_ids (the sessions
        it spawned; this is how you look up a session's, or your own, children —
        they come back without the "devin-" prefix, which these tools still accept),
        pull_requests, structured_output. Fields are omitted when empty.
    message: sends a message (resumes the session if it is sleeping), and returns
        the same session details as "get".
    sleep / terminate / archive / unarchive: performs the lifecycle action and
        returns the resulting session details, same shape as "get". Archiving
        cascades to child sessions; unarchiving does not.
    get_messages: the session's message history — per message, its source,
        created_at, event_id and body (long bodies are truncated; fetch a
        specific message in full via devin_session_events action="details"
        with its event_id). Paginated via first / after.
    get_attachments: the session's attachments — name, content_type, url.
        Not paginated.
    set_tags: replaces the session's tags and returns the resulting tag list.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tags` | string | No | Tag list (required when action is 'set_tags'). Replaces all existing tags on the session — this is a full replacement, not a union/append. |
| `after` | string | No | Opaque cursor for get_messages pagination (v3 cursor param). |
| `first` | string | No | Page size for get_messages pagination (v3 cursor param). get_attachments is not paginated — v3 returns the full list. |
| `action` | string ("get" | "message" | "sleep" | "terminate" | "archive" | "unarchive" | "get_messages" | "get_attachments" | "set_tags") | Yes | Operation to perform — get, message, sleep, terminate, archive, unarchive, get_messages, get_attachments, set_tags. |
| `message` | string | No | Message text (required when action is 'message'). |
| `session_id` | string | Yes | Target Devin session ID, e.g. 'devin-abc123...' (the 'devin-' prefix is optional — bare IDs, such as the ones in child_session_ids, also work). |
| `attachment_urls` | string | No | Optional list of already-uploaded attachment URLs to attach to the message (only used when action is 'message'). Each URL must belong to the session's org — same mechanism as the initial prompt's attachments. |
| `notify_on_response` | string | No | Only used when action is 'message'. When true, you are notified (and woken if sleeping) once when this session next settles (finishes, blocks, or exits). One-shot: consumed on delivery — pass it again on a later message to re-subscribe. Works for any session you are allowed to message (children and same-automation siblings). |
| `archive_on_terminate` | boolean | No | Also archive the session when terminating (default False). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `result` | string | Yes |  |

### Devin session search

**Slug:** `DEVIN_MCP_DEVIN_SESSION_SEARCH`

Search and filter Devin sessions. All filters are optional and combined with AND.

The returned session_id values do NOT include the "devin-" prefix. To use them
with devin_session_interact, prepend "devin-" (e.g. session_id "abc123" becomes "devin-abc123").

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tags` | string | No | Filter by tags. |
| `after` | string | No | Opaque cursor for pagination (from a previous response's end_cursor). |
| `first` | string | No | Number of results per page (default 20, max 100 — tool-level cap below server's 200). |
| `origins` | string | No | Filter by origin. Valid values: 'webapp', 'slack', 'teams', 'api', 'linear', 'jira', 'scheduled', 'cli', 'other'. |
| `user_ids` | string | No | Filter by user. |
| `playbook_id` | string | No | Filter by playbook. |
| `schedule_id` | string | No | Filter by schedule. |
| `session_ids` | string | No | Filter to specific session IDs (must include the 'devin-' prefix, e.g. 'devin-abc123...'). |
| `created_after` | string | No | Unix timestamp lower bound for creation time. |
| `updated_after` | string | No | Unix timestamp lower bound for update time. |
| `created_before` | string | No | Unix timestamp upper bound for creation time. |
| `updated_before` | string | No | Unix timestamp upper bound for update time. |
| `parent_session_id` | string | No | Filter to child sessions spawned by this parent session (accepts the 'devin-' prefix). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `result` | string | Yes |  |

### Generate wiki

**Slug:** `DEVIN_MCP_GENERATE_WIKI`

Generate a codebase wiki for a repository. Triggers wiki generation and
waits for completion.

Only use this tool when the user explicitly asks to generate or regenerate
a wiki. Do not call it proactively.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `repoName` | string | Yes | Repository in owner/repo format (e.g. "myorg/myrepo"). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `result` | string | Yes |  |

### List available repos

**Slug:** `DEVIN_MCP_LIST_AVAILABLE_REPOS`

List all repositories available to query with your Devin account.

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `result` | string | Yes |  |

### Read wiki contents

**Slug:** `DEVIN_MCP_READ_WIKI_CONTENTS`

View documentation about a GitHub repository.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `repoName` | string | Yes | GitHub repository in owner/repo format (e.g. "facebook/react"). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `result` | string | Yes |  |

### Read wiki structure

**Slug:** `DEVIN_MCP_READ_WIKI_STRUCTURE`

Get a list of documentation topics for a GitHub repository.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `repoName` | string | Yes | GitHub repository in owner/repo format (e.g. "facebook/react"). |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `result` | string | Yes |  |
