import type { Doc } from "../_generated/dataModel"

export interface CatalogComparisonResult {
  catalogComparison: "match" | "mismatch" | "not_researched" | "not_applicable"
  catalogNotes: string | null
}

export function compareWithCatalogBaseline(args: {
  baseline: Doc<"composioCatalog"> | null | {
    inCatalog: boolean
    composioToolkitKind?: "rest" | "mcp" | null
    composioSlug?: string | null
    composioAuth?: string | null
  }
  findings: {
    hasOfficialMcp?: boolean | null
    authMethods?: string[] | null
  }
  revisions?: {
    revisedAuthMethods?: string[] | null
  }
}): CatalogComparisonResult {
  const { baseline, findings, revisions } = args

  if (!baseline) {
    return {
      catalogComparison: "not_applicable",
      catalogNotes: null,
    }
  }

  const catalogNotesList: string[] = []

  if (baseline.inCatalog) {
    let mismatches = 0

    // Check MCP kind
    if (baseline.composioToolkitKind === "mcp" && !findings.hasOfficialMcp) {
      mismatches++
      catalogNotesList.push(
        `Composio lists this as an MCP toolkit (${baseline.composioSlug ?? "mcp"}), but agent detected hasOfficialMcp=false.`
      )
    }

    // Check OAuth presence
    const baselineAuth = (baseline.composioAuth ?? "").toUpperCase()
    const effectiveAuth = (revisions?.revisedAuthMethods ?? findings.authMethods ?? [])
    if (baselineAuth.includes("OAUTH") && !effectiveAuth.includes("oauth2")) {
      mismatches++
      catalogNotesList.push(
        `Catalog baseline lists ${baseline.composioAuth}, but agent did not include oauth2.`
      )
    }

    return {
      catalogComparison: mismatches > 0 ? "mismatch" : "match",
      catalogNotes: catalogNotesList.length > 0 ? catalogNotesList.join(" ") : null,
    }
  }

  return {
    catalogComparison: "match",
    catalogNotes: "Verified absent from Composio catalog (one of 33 set).",
  }
}
