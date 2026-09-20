import { apps } from "../components/table/data"
import { buildComposioCatalogManifest } from "../convex/catalogManifestBuilder"
import { compareAppWithBaseline } from "../convex/comparison"

console.log("=== COMPOSIO CATALOG BASELINE VALIDATION ===")

const manifest = buildComposioCatalogManifest()

// 1. Overall counts
const total = manifest.length
const inCatalog = manifest.filter((m) => m.inCatalog)
const absent = manifest.filter((m) => !m.inCatalog)

console.log(`Total apps evaluated: ${total}`)
console.log(`In catalog (expected 67): ${inCatalog.length}`)
console.log(`Absent (expected 33): ${absent.length}`)

if (inCatalog.length !== 67 || absent.length !== 33 || total !== 100) {
  console.error("FAIL: Catalog manifest counts do not match assignment specification!")
  process.exit(1)
}

// 2. Telegram verification
const telegram = manifest.find((m) => m.appName === "Telegram")
console.log("\nTelegram snapshot verification:")
console.log(`- Slug: ${telegram?.composioSlug}`)
console.log(`- Version: ${telegram?.snapshotVersion}`)
console.log(`- Auth: ${telegram?.composioAuth}`)
console.log(`- Tools: ${telegram?.toolCount}`)
console.log(`- Triggers: ${telegram?.triggerCount}`)
console.log(`- Canonical Docs URL: ${telegram?.canonicalDocsUrl}`)

if (
  telegram?.composioAuth !== "API_KEY" ||
  telegram?.toolCount !== 18 ||
  telegram?.triggerCount !== 0 ||
  telegram?.snapshotVersion !== "20260821_00" ||
  telegram?.canonicalDocsUrl !== "https://docs.composio.dev/toolkits/telegram.md"
) {
  console.error("FAIL: Telegram snapshot values do not match expected ground truth!")
  process.exit(1)
}

// 3. MCP special cases verification
const mcpApps = ["Pylon", "Netlify", "Plaid", "Otter AI", "Devin", "higgsfield"]
console.log("\nMCP snapshot verification:")
for (const name of mcpApps) {
  const item = manifest.find((m) => m.appName === name)
  console.log(`- ${name}: inCatalog=${item?.inCatalog}, kind=${item?.composioToolkitKind}, slug=${item?.composioSlug}`)
  if (item?.composioToolkitKind !== "mcp") {
    console.error(`FAIL: ${name} should have composioToolkitKind = 'mcp'`)
    process.exit(1)
  }
}

// 4. Zoho CRM alias verification
const zohoCrm = manifest.find((m) => m.appName === "Zoho CRM")
console.log(`\nZoho CRM alias verification: slug=${zohoCrm?.composioSlug}, path=${zohoCrm?.snapshotPath}`)
if (zohoCrm?.composioSlug !== "zoho" || zohoCrm?.snapshotPath !== "data/zoho.md") {
  console.error("FAIL: Zoho CRM should alias to zoho / data/zoho.md")
  process.exit(1)
}

// 5. Mermaid CLI negative verification
const mermaid = manifest.find((m) => m.appName === "Mermaid CLI")
console.log(`\nMermaid CLI absence verification: inCatalog=${mermaid?.inCatalog}, reason=${mermaid?.absenceReason}`)
if (mermaid?.inCatalog !== false) {
  console.error("FAIL: Mermaid CLI must be marked inCatalog: false")
  process.exit(1)
}

// 6. Test comparison function (mocking an agent finding for Telegram)
const mockResearchedTelegram = {
  ...apps.find((a) => a.name === "Telegram")!,
  authMethods: ["api_key" as const],
  buildability: "ready" as const,
  researchStatus: "completed" as const,
}

const comparison = compareAppWithBaseline(mockResearchedTelegram, telegram!)
console.log("\nMock Agent vs Baseline Comparison (Telegram):")
console.log(`- Auth status: ${comparison.authStatus}`)
console.log(`- MCP status: ${comparison.mcpStatus}`)
console.log(`- Catalog presence: ${comparison.catalogPresenceStatus}`)

if (comparison.authStatus !== "match" || comparison.mcpStatus !== "match") {
  console.error("FAIL: Comparison engine failed to match valid agent findings against baseline!")
  process.exit(1)
}

console.log("\nALL BASELINE VALIDATION CHECKS PASSED!")
