# Consensus

Consensus provides evidence-based search across scientific research papers.

- **Category:** artificial intelligence
- **Auth:** API_KEY
- **Composio-managed OAuth available?** N/A
- **Tools:** 1
- **Triggers:** 0
- **Slug:** `CONSENSUS`
- **Version:** 20260826_00

## Tools

### Search Research Papers

**Slug:** `CONSENSUS_SEARCH_PAPERS`

Search Consensus for relevant research papers with study, publication, and access filters. Returns one result page and an optional continuation cursor. Search calls are billed; pagination beyond the first page and full-text chunks require Enterprise access.

#### Input Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `human` | boolean | No | Set true to include only human studies. |
| `query` | string | Yes | Research question or topic to search for. |
| `country` | string | No | Comma-separated ISO 3166-1 alpha-2 study-country codes such as us or gb. Unknown codes are ignored; if none resolve, this filter is not applied. |
| `domains` | array | No | Academic fields to include. These are research domains such as med for medicine or cs for computer science, not web domains. |
| `sjr_max` | integer | No | Exclude journals in lesser SJR quartiles; 1 is the best quartile. |
| `sjr_min` | integer | No | Exclude journals in better SJR quartiles; 1 is the best quartile. |
| `year_max` | integer | No | Exclude papers published after this year; required when month_max is set. |
| `year_min` | integer | No | Exclude papers published before this year; required when month_min is set. |
| `month_max` | integer | No | Exclude papers after this month within year_max. Requires year_max. |
| `month_min` | integer | No | Exclude papers before this month within year_min. Requires year_min. |
| `page_size` | integer | No | Results to request for this page. The plan-dependent maximum is unpublished; oversized values are capped and the applied value is returned. |
| `controlled` | boolean | No | Set true to include only controlled studies. |
| `next_cursor` | string | No | Continuation value returned by a previous call. Omit for page 0. Pages after page 0 require Enterprise access; pass the returned value back unchanged. |
| `open_access` | boolean | No | Set true to include only open-access papers. |
| `study_types` | array | No | Only include papers with one of these documented study types. Values are sent as repeated study_types query parameters. |
| `citation_min` | integer | No | Exclude papers with fewer citations. |
| `duration_max` | integer | No | Maximum study duration in days. |
| `duration_min` | integer | No | Minimum study duration in days. |
| `journal_name` | string | No | Preferred journal name. Matching journals rank higher, but other journals are not excluded. |
| `medical_mode` | boolean | No | Set true to search top medical journals and guidelines, approximately 8 million documents. |
| `publisher_name` | string | No | Comma-separated publisher display names to include. |
| `sample_size_min` | integer | No | Exclude studies with a smaller sample size. |
| `exclude_preprints` | boolean | No | Set true to exclude preprints and include only peer-reviewed papers. |
| `clinical_guideline` | boolean | No | Set true to include only papers classified as clinical guidelines. |
| `include_semantic_score` | boolean | No | Set true to include semantic_score in each result. |
| `include_full_text_chunks` | boolean | No | Include query-relevant full-text excerpts. Enterprise customers only; leave false on other plans. |

#### Output

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `data` | string | Yes | Data from the action execution |
| `error` | string | No | Error if any occurred during the execution of the action |
| `successful` | boolean | Yes | Whether or not the action execution was successful or not |
