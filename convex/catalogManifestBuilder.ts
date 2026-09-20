import fs from "fs"
import path from "path"
import { apps } from "../components/table/data"
import {
  type ComposioCatalogEntry,
  parseComposioMarkdownHeader,
  getAbsenceReason,
  buildCanonicalDocsUrl,
} from "./catalogParser"

const DATA_DIR = path.resolve(process.cwd(), "data")

/**
 * Builds the complete 100-app Composio catalog baseline by reading `data/*.md` directly.
 * Can be run in node/script environments or imported in tests and seeds.
 */
export function buildComposioCatalogManifest(): ComposioCatalogEntry[] {
  const manifest: ComposioCatalogEntry[] = []
  const now = Date.now()

  for (const app of apps) {
    if (!app.composioInCatalog || !app.composioSlug) {
      manifest.push({
        rank: app.rank,
        appName: app.name,
        inCatalog: false,
        absenceReason: getAbsenceReason(app.name),
        composioSlug: null,
        composioToolkitKind: null,
        canonicalDocsUrl: null,
        snapshotPath: null,
        snapshotVersion: null,
        composioCategory: null,
        composioAuth: null,
        composioOauthAvailable: null,
        toolCount: null,
        triggerCount: null,
        headlineSummary: null,
        updatedAt: now,
      })
      continue
    }

    const fileName = `${app.composioSlug}.md`
    const filePath = path.join(DATA_DIR, fileName)

    if (!fs.existsSync(filePath)) {
      throw new Error(
        `Expected snapshot file missing for rank ${app.rank} (${app.name}): ${filePath}`
      )
    }

    const content = fs.readFileSync(filePath, "utf-8")
    const parsed = parseComposioMarkdownHeader(content)

    manifest.push({
      rank: app.rank,
      appName: app.name,
      inCatalog: true,
      absenceReason: null,
      composioSlug: app.composioSlug,
      composioToolkitKind: app.composioToolkitKind,
      canonicalDocsUrl: buildCanonicalDocsUrl(app.composioSlug),
      snapshotPath: `data/${fileName}`,
      snapshotVersion: parsed.snapshotVersion,
      composioCategory: parsed.composioCategory,
      composioAuth: parsed.composioAuth,
      composioOauthAvailable: parsed.composioOauthAvailable,
      toolCount: parsed.toolCount,
      triggerCount: parsed.triggerCount,
      headlineSummary: parsed.headlineSummary,
      updatedAt: now,
    })
  }

  return manifest
}
