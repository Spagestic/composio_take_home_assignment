# Composio AI Product Ops Intern — take-home

This repo is the take-home for the **Composio AI Product Ops Intern** role: a research agent that evaluates ~100 apps as potential agent toolkits (auth, self-serve vs gated, API surface, MCP, buildability), then a **single self-explanatory HTML case study** with findings, patterns, how the agent worked, and verification.

**Primary filter:** budget **6–8 hours**. Reviewers care about the result and how clearly it is presented, not hours spent. Prefer submitting as early as possible (**&lt;8 hours after receiving**).

## Context

Composio turns apps into tools that AI agents can call. Before building a toolkit for an app, they research it: what auth it uses, whether there is a self-serve path or it is partner-gated, what the API surface looks like, and whether it can be an MCP server or agent-callable skills. They do this across hundreds of apps. Doing it by hand does not scale. This assignment is a small, real version of that problem.

## The task

Given a list of 100 apps, research and capture for each:

- **Category** and what it does in one line.
- **Auth method(s):** OAuth2, API key, Basic, token, or other.
- **Self-serve vs gated:** can a developer get credentials themselves for free or on a trial, or does it need a paid plan, admin approval, or a partnership / contact-sales gate.
- **API surface:** documented public REST / GraphQL, roughly how broad, and any existing MCP.
- **Buildability verdict:** could this be an agent toolkit today, and the main blocker if not.
- **Evidence:** the docs URL / article behind each answer.
- and more as needed for a trustworthy row.

Then, the actual point:

- **Find the patterns.** Do not just produce 100 rows. Cluster the results and say what patterns you see (which auth dominates, which categories are self-serve vs gated, the most common blocker, where the easy wins are versus what needs outreach). Insight over raw table.
- **Do it with an agent, not by hand.** Build an agent (or script / pipeline) that does the research across the 100. Using Composio's own SDK and MCP is in the spirit of the role. Explain what it does and where a human was needed.
- **Verify accuracy.** Sample the 100, cross-check the agent's answers against real docs by hand, and report where it was right and wrong. Show how you know the findings are trustworthy. Build real verification loops (agent, browser-use, and other means) plus human checks, and show how accuracy moved from a lower first pass to a higher one because of those loops. **Accuracy is what matters most.**

## The 100 apps (research set)

A real mix: apps customers have actually requested, and well-known apps. Across 10 categories and every common auth pattern on purpose, so the interesting part is the patterns across all 100.

### 1. CRM and Sales

| # | App | Website / hint |
| --- | --- | --- |
| 1 | Salesforce | salesforce.com |
| 2 | HubSpot | hubspot.com |
| 3 | Pipedrive | pipedrive.com |
| 4 | Attio | attio.com |
| 5 | Twenty | twenty.com (open-source CRM) |
| 6 | Podio | podio.com |
| 7 | Zoho CRM | zoho.com/crm |
| 8 | Close | close.com |
| 9 | Copper | copper.com |
| 10 | DealCloud | api.docs.dealcloud.com |

### 2. Support and Helpdesk

| # | App | Website / hint |
| --- | --- | --- |
| 11 | Zendesk | zendesk.com |
| 12 | Intercom | intercom.com |
| 13 | Freshdesk | freshdesk.com |
| 14 | Front | front.com |
| 15 | Pylon | usepylon.com |
| 16 | LiveAgent | liveagent.com |
| 17 | Plain | plain.com |
| 18 | Help Scout | helpscout.com |
| 19 | Gorgias | gorgias.com |
| 20 | Gladly | gladly.com |

### 3. Communications and Messaging

| # | App | Website / hint |
| --- | --- | --- |
| 21 | Slack | slack.com |
| 22 | Twilio | twilio.com |
| 23 | Zoho Cliq | zoho.com/cliq |
| 24 | Lark (Larksuite) | open.larksuite.com |
| 25 | Pumble | pumble.com |
| 26 | Discord | discord.com |
| 27 | Telegram | core.telegram.org |
| 28 | WhatsApp Business | developers.facebook.com/docs/whatsapp |
| 29 | Aircall | aircall.io |
| 30 | Vonage | developer.vonage.com |

### 4. Marketing, Ads, Email and Social

| # | App | Website / hint |
| --- | --- | --- |
| 31 | Google Ads | developers.google.com/google-ads |
| 32 | Meta Ads | developers.facebook.com/docs/marketing-apis |
| 33 | LinkedIn Ads | learn.microsoft.com/linkedin/marketing |
| 34 | GoHighLevel | highlevel.stoplight.io |
| 35 | Mailchimp | mailchimp.com/developer |
| 36 | Klaviyo | developers.klaviyo.com |
| 37 | systeme.io | systeme.io (funnel builder) |
| 38 | Pinterest | developers.pinterest.com |
| 39 | Threads (Meta) | developers.facebook.com/docs/threads |
| 40 | SendGrid | sendgrid.com |

### 5. Ecommerce

| # | App | Website / hint |
| --- | --- | --- |
| 41 | Shopify | shopify.dev |
| 42 | WooCommerce | woocommerce.com/document/woocommerce-rest-api |
| 43 | BigCommerce | developer.bigcommerce.com |
| 44 | Salesforce Commerce Cloud | developer.salesforce.com/docs/commerce |
| 45 | Magento (Adobe Commerce) | developer.adobe.com/commerce |
| 46 | Squarespace | developers.squarespace.com |
| 47 | Ecwid | api-docs.ecwid.com |
| 48 | Gumroad | gumroad.com/api |
| 49 | Amazon Selling Partner | developer-docs.amazon.com/sp-api |
| 50 | fanbasis | fanbasis.com |

### 6. Data, SEO and Scraping

| # | App | Website / hint |
| --- | --- | --- |
| 51 | DataForSEO | docs.dataforseo.com |
| 52 | SE Ranking | seranking.com/api |
| 53 | Ahrefs | ahrefs.com/api |
| 54 | MrScraper | docs.mrscraper.com |
| 55 | Apify | docs.apify.com |
| 56 | Firecrawl | firecrawl.dev |
| 57 | Bright Data | brightdata.com |
| 58 | Sherlock | github.com/sherlock-project/sherlock |
| 59 | Waterfall.io | waterfall.io (contact/company intel) |
| 60 | Clay | clay.com |

### 7. Developer, Infra and Data platforms

| # | App | Website / hint |
| --- | --- | --- |
| 61 | GitHub | docs.github.com/rest |
| 62 | Vercel | vercel.com/docs/rest-api |
| 63 | Netlify | docs.netlify.com/api |
| 64 | Cloudflare | developers.cloudflare.com/api |
| 65 | Supabase | supabase.com/docs |
| 66 | Neo4j | neo4j.com/docs/api |
| 67 | Snowflake | docs.snowflake.com |
| 68 | MongoDB Atlas | mongodb.com/docs/atlas/api |
| 69 | Datadog | docs.datadoghq.com/api |
| 70 | Sentry | docs.sentry.io/api |

### 8. Productivity and Project Management

| # | App | Website / hint |
| --- | --- | --- |
| 71 | Notion | developers.notion.com |
| 72 | Airtable | airtable.com/developers |
| 73 | Linear | developers.linear.app |
| 74 | Jira | developer.atlassian.com |
| 75 | Asana | developers.asana.com |
| 76 | Monday.com | developer.monday.com |
| 77 | ClickUp | clickup.com/api |
| 78 | Coda | coda.io/developers |
| 79 | Smartsheet | smartsheet.com/developers |
| 80 | Harvest | harvestapp.com (help.getharvest.com/api-v2) |

### 9. Finance and Fintech

| # | App | Website / hint |
| --- | --- | --- |
| 81 | Stripe | stripe.com/docs/api |
| 82 | Plaid | plaid.com/docs |
| 83 | Binance | binance-docs.github.io |
| 84 | Paygent Connect | paygent (NMI-powered) |
| 85 | iPayX | ipayx.ai/docs |
| 86 | QuickBooks | developer.intuit.com |
| 87 | Xero | developer.xero.com |
| 88 | Brex | developer.brex.com |
| 89 | Ramp | docs.ramp.com |
| 90 | PitchBook | pitchbook.com (research API) |

### 10. AI, Research and Media-native

| # | App | Website / hint |
| --- | --- | --- |
| 91 | NotebookLM | cloud.google.com/gemini (Enterprise API) |
| 92 | Otter AI | help.otter.ai (MCP server) |
| 93 | Fathom | fathom.video |
| 94 | Consensus | consensus.app (OAuth requested) |
| 95 | Reducto | reducto.ai (document parsing) |
| 96 | Devin | docs.devin.ai (MCP) |
| 97 | higgsfield | higgsfield.ai/cli (content suite) |
| 98 | Mermaid CLI | github.com/mermaid-js/mermaid-cli |
| 99 | YouTube Transcript | transcriptapi.com |
| 100 | Grain | grain.com (meeting notes) |

## The deliverable

A **single self-explanatory HTML page / case study** a reviewer understands in about two minutes with no narration. It must make clear on its own:

- the **findings** (clean skimmable table / matrix)
- the **patterns** (on top, plainly stated — the headline)
- the **agent** (what was built, where a human was needed)
- the **proof** (the app, live link or runnable trigger)
- the **verification** (accuracy check on a sample, hits and misses shown honestly)

Clarity and presentation are the point. Show both the final output and the process / workflow behind it, and make it easy for both an agent and a human to consume.

## Constraints and honesty

- Use AI tooling freely (that is the job), but understand and be able to explain everything submitted; the interview will probe it.
- If the agent got things wrong or an app defeated you, say so on the page.
- Paid accounts for apps are not required. Where an app is gated behind payment or partnership, saying so with evidence is the correct finding, not a failure.

## What to submit

- A live link to the deployed HTML page / case study.
- A link to this source repo with a short README on how to run the research agent (this file).

## Stack

- [Convex](https://convex.dev/) — backend (database, server logic)
- [Next.js](https://nextjs.org/) + [React](https://react.dev/) — app / case study
- [Tailwind](https://tailwindcss.com/) — UI

## How to run

```bash
bun install
bun run dev
```

(`npx convex dev` for the Convex backend during development; do not use `npx convex deploy` except for production.)

How to run the **research agent** across the 100 apps will be documented here once the pipeline exists.

## Ground truth: existing Composio toolkits

`data/` is a snapshot of [Composio toolkit docs](https://docs.composio.dev/toolkits) for apps in the research set. We will use it later to **cross-check the research agent** (did it say an app is already a toolkit when Composio already ships one, and do auth / tool counts line up with the official page).

### How the files were collected

1. Download the catalog markdown: `https://docs.composio.dev/toolkits.md` (Mintlify `.md` mirror of the toolkits index; ~1552 toolkits at snapshot time).
2. Parse each row’s display name, URL slug, and `SLUG` (e.g. Telegram → `telegram` / `TELEGRAM`).
3. Match the 100 research apps by name / slug (spaces → `_` or concatenation; aliases such as GoHighLevel → `highlevel`, WhatsApp Business → `whatsapp`).
4. If a match exists, save the official page: `https://docs.composio.dev/toolkits/{slug}.md` → `data/{slug}.md`.
5. If there is no catalog row, there is no file. **Absence is also a check:** the agent should not invent a Composio toolkit for those apps.

### Coverage (100 apps)

- **67 in catalog** — markdown saved under `data/`.
- **33 not in catalog** — Podio, Copper, DealCloud, Front, LiveAgent, Gladly, Twilio, Zoho Cliq, Lark, Aircall, Vonage, systeme.io, Threads, WooCommerce, BigCommerce, Salesforce Commerce Cloud, Magento, Squarespace, Ecwid, Amazon Selling Partner, fanbasis, SE Ranking, Sherlock, Waterfall.io, MongoDB Atlas, Smartsheet, Binance, Paygent Connect, iPayX, PitchBook, Reducto, Mermaid CLI, Grain.

Matching notes (so validation does not treat these as misses):

- Some apps only appear as an **MCP toolkit** (`pylon_mcp`, `netlify_mcp`, `plaid_mcp`, `otter_ai_mcp`, `devin_mcp`, `higgsfield_mcp`), not a same-named REST toolkit.
- **Zoho CRM** maps to the generic `zoho` toolkit, not a `zoho_crm` page.
- **Mermaid CLI** was not saved: the catalog has [Mermaid Chart MCP](https://docs.composio.dev/toolkits/mermaid_chart_mcp.md), a different product.
