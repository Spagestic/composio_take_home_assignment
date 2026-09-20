export interface ComposioCatalogEntry {
  rank: number
  appName: string
  inCatalog: boolean
  absenceReason: string | null
  composioSlug: string | null
  composioToolkitKind: "rest" | "mcp" | null
  canonicalDocsUrl: string | null
  snapshotPath: string | null
  snapshotVersion: string | null
  composioCategory: string | null
  composioAuth: string | null
  composioOauthAvailable: string | null
  toolCount: number | null
  triggerCount: number | null
  headlineSummary: string | null
  updatedAt: number
}

export interface ParsedMarkdownHeader {
  headlineSummary: string | null
  composioCategory: string | null
  composioAuth: string | null
  composioOauthAvailable: string | null
  toolCount: number | null
  triggerCount: number | null
  snapshotSlug: string | null
  snapshotVersion: string | null
}

/**
 * Deterministically parses key metadata from the top header block of a data/{slug}.md snapshot.
 * Example structure:
 * # Telegram
 * Telegram is a cloud-based messaging app...
 * - **Category:** team chat
 * - **Auth:** API_KEY
 * - **Composio-managed OAuth available?** N/A
 * - **Tools:** 18
 * - **Triggers:** 0
 * - **Slug:** `TELEGRAM`
 * - **Version:** 20260821_00
 */
export function parseComposioMarkdownHeader(markdownContent: string): ParsedMarkdownHeader {
  const lines = markdownContent.split(/\r?\n/)
  
  let headlineSummary: string | null = null
  let composioCategory: string | null = null
  let composioAuth: string | null = null
  let composioOauthAvailable: string | null = null
  let toolCount: number | null = null
  let triggerCount: number | null = null
  let snapshotSlug: string | null = null
  let snapshotVersion: string | null = null

  // Capture the first descriptive paragraph right after the H1
  let seenH1 = false
  for (const line of lines) {
    const trimmed = line.trim()
    if (trimmed.startsWith("# ")) {
      seenH1 = true
      continue
    }
    if (seenH1) {
      if (trimmed.startsWith("- **") || trimmed.startsWith("## ")) {
        break
      }
      if (trimmed.length > 0 && !headlineSummary) {
        headlineSummary = trimmed
      }
    }
  }

  // Parse bullet items
  for (const line of lines) {
    const trimmed = line.trim()
    if (trimmed.startsWith("## ")) {
      // Reached body tools section
      break
    }

    const categoryMatch = trimmed.match(/^-\s+\*\*Category:\*\*\s*(.+)$/i)
    if (categoryMatch?.[1]) {
      composioCategory = categoryMatch[1].trim()
      continue
    }

    const authMatch = trimmed.match(/^-\s+\*\*Auth:\*\*\s*(.+)$/i)
    if (authMatch?.[1]) {
      composioAuth = authMatch[1].trim()
      continue
    }

    const oauthMatch = trimmed.match(/^-\s+\*\*Composio-managed OAuth available\?\*\*\s*(.+)$/i)
    if (oauthMatch?.[1]) {
      composioOauthAvailable = oauthMatch[1].trim()
      continue
    }

    const toolsMatch = trimmed.match(/^-\s+\*\*Tools:\*\*\s*(\d+)/i)
    if (toolsMatch?.[1]) {
      toolCount = parseInt(toolsMatch[1], 10)
      continue
    }

    const triggersMatch = trimmed.match(/^-\s+\*\*Triggers:\*\*\s*(\d+)/i)
    if (triggersMatch?.[1]) {
      triggerCount = parseInt(triggersMatch[1], 10)
      continue
    }

    const slugMatch = trimmed.match(/^-\s+\*\*Slug:\*\*\s*`?([A-Za-z0-9_-]+)`?/i)
    if (slugMatch?.[1]) {
      snapshotSlug = slugMatch[1].trim()
      continue
    }

    const versionMatch = trimmed.match(/^-\s+\*\*Version:\*\*\s*([A-Za-z0-9_-]+)/i)
    if (versionMatch?.[1]) {
      snapshotVersion = versionMatch[1].trim()
      continue
    }
  }

  return {
    headlineSummary,
    composioCategory,
    composioAuth,
    composioOauthAvailable,
    toolCount,
    triggerCount,
    snapshotSlug,
    snapshotVersion,
  }
}

export function getAbsenceReason(appName: string): string {
  if (appName === "Mermaid CLI") {
    return "Not in catalog: Composio provides Mermaid Chart MCP (a different proprietary cloud product), not mermaid-cli."
  }
  return "Not in catalog: No official Composio toolkit was published in the index snapshot at evaluation time."
}

export function buildCanonicalDocsUrl(slug: string): string {
  return `https://docs.composio.dev/toolkits/${slug}.md`
}
