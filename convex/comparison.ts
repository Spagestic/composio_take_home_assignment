import { type AppResearch, type AuthMethod } from "../components/table/data"
import { type ComposioCatalogEntry } from "./catalogParser"

export type ComparisonStatus = "match" | "mismatch" | "not_researched" | "not_applicable"

export interface AppCatalogComparison {
  rank: number
  appName: string
  inCatalog: boolean
  researchStatus: string
  // Auth comparison
  authStatus: ComparisonStatus
  catalogAuth: string | null
  agentAuthMethods: AuthMethod[] | null
  // Toolkit type comparison (e.g. MCP-only toolkits)
  mcpStatus: ComparisonStatus
  catalogKind: "rest" | "mcp" | null
  agentHasMcp: boolean | null
  // Overall baseline consistency
  catalogPresenceStatus: ComparisonStatus
  notes: string[]
}

/**
 * Normalizes Composio snapshot auth string into standard comparable tokens
 * e.g. "API_KEY" -> ["api_key"], "OAUTH2, API_KEY" -> ["oauth2", "api_key"]
 */
export function normalizeCatalogAuth(authStr: string | null): AuthMethod[] {
  if (!authStr) return []
  const upper = authStr.toUpperCase()
  const methods: AuthMethod[] = []

  if (upper.includes("OAUTH2") || upper.includes("OAUTH")) {
    methods.push("oauth2")
  }
  if (upper.includes("API_KEY") || upper.includes("API KEY")) {
    methods.push("api_key")
  }
  if (upper.includes("BASIC")) {
    methods.push("basic")
  }
  if (upper.includes("TOKEN") || upper.includes("BEARER")) {
    methods.push("token")
  }

  return methods
}

/**
 * Compares an app's agent-researched findings against the deterministic Composio catalog baseline
 * without invoking any LLMs or external search APIs.
 */
export function compareAppWithBaseline(
  app: AppResearch,
  baseline: ComposioCatalogEntry | null
): AppCatalogComparison {
  const inCatalog = baseline?.inCatalog ?? app.composioInCatalog
  const isResearched = !!(app.buildability && app.researchStatus !== "failed")
  const notes: string[] = []

  // Check 1: Catalog Presence consistency
  // If app is not in catalog (one of 33), agent should NOT claim an official Composio toolkit already exists
  let catalogPresenceStatus: ComparisonStatus = "match"
  if (!inCatalog) {
    catalogPresenceStatus = "match"
    notes.push("App is part of the 33 absent set.")
  }

  // Check 2: Auth comparison
  let authStatus: ComparisonStatus = "not_researched"
  if (!isResearched) {
    authStatus = "not_researched"
  } else if (!inCatalog) {
    authStatus = "not_applicable"
  } else {
    const expectedAuth = normalizeCatalogAuth(baseline?.composioAuth ?? null)
    const agentAuth = app.authMethods ?? []

    if (expectedAuth.length === 0 || agentAuth.length === 0) {
      authStatus = "mismatch"
      notes.push("Missing auth methods to compare.")
    } else {
      const hasOverlap = expectedAuth.some((m) => agentAuth.includes(m))
      if (hasOverlap) {
        authStatus = "match"
      } else {
        authStatus = "mismatch"
        notes.push(
          `Auth mismatch: baseline states '${baseline?.composioAuth}' but agent found [${agentAuth.join(", ")}].`
        )
      }
    }
  }

  // Check 3: MCP toolkit type alignment
  let mcpStatus: ComparisonStatus = "not_researched"
  if (!isResearched) {
    mcpStatus = "not_researched"
  } else if (!inCatalog) {
    mcpStatus = "not_applicable"
  } else {
    const isMcpCatalog = baseline?.composioToolkitKind === "mcp"
    if (isMcpCatalog) {
      if (app.hasOfficialMcp === true) {
        mcpStatus = "match"
      } else {
        mcpStatus = "mismatch"
        notes.push("Composio ships this as an MCP toolkit, but agent missed MCP availability.")
      }
    } else {
      mcpStatus = "match"
    }
  }

  return {
    rank: app.rank,
    appName: app.name,
    inCatalog,
    researchStatus: app.researchStatus ?? "not_started",
    authStatus,
    catalogAuth: baseline?.composioAuth ?? null,
    agentAuthMethods: app.authMethods,
    mcpStatus,
    catalogKind: baseline?.composioToolkitKind ?? app.composioToolkitKind,
    agentHasMcp: app.hasOfficialMcp,
    catalogPresenceStatus,
    notes,
  }
}
