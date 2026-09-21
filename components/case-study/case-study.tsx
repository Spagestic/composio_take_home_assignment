"use client"

import * as React from "react"
import { useQuery } from "convex/react"
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

import { api } from "@/convex/_generated/api"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

const CATEGORY_LABELS: Record<string, string> = {
  crm_sales: "CRM & Sales",
  support_helpdesk: "Support",
  communications: "Comms",
  marketing: "Marketing",
  ecommerce: "E-commerce",
  data_seo_scraping: "Data & SEO",
  developer_infra: "Dev & Infra",
  productivity: "Productivity",
  finance: "Finance",
  ai_research_media: "AI & Media",
}

const BUILDABILITY_COLORS: Record<string, string> = {
  ready: "#16a34a",
  caveats: "#d97706",
  blocked: "#dc2626",
  unknown: "#6b7280",
  unresearched: "#d1d5db",
}

const ACCESS_COLORS: Record<string, string> = {
  self_serve: "#0284c7",
  paid_plan: "#7c3aed",
  admin_approval: "#d97706",
  partnership: "#db2777",
  unknown: "#6b7280",
  unresearched: "#d1d5db",
}

const AUTH_COLORS: Record<string, string> = {
  oauth2: "#0284c7",
  api_key: "#16a34a",
  token: "#7c3aed",
  basic: "#d97706",
  other: "#db2777",
}

function StatCard({
  label,
  value,
  hint,
}: {
  label: string
  value: React.ReactNode
  hint?: string
}) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardDescription>{label}</CardDescription>
        <CardTitle className="text-3xl">{value}</CardTitle>
      </CardHeader>
      {hint ? (
        <CardContent className="text-xs text-muted-foreground">
          {hint}
        </CardContent>
      ) : null}
    </Card>
  )
}

function Section({
  title,
  description,
  children,
}: {
  title: string
  description?: string
  children: React.ReactNode
}) {
  return (
    <section className="flex flex-col gap-4">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
        {description ? (
          <p className="text-sm text-muted-foreground">{description}</p>
        ) : null}
      </div>
      {children}
    </section>
  )
}

function LoadingGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {Array.from({ length: 4 }).map((_, i) => (
        <Skeleton key={i} className="h-28 w-full" />
      ))}
    </div>
  )
}

export function CaseStudy() {
  const patterns = useQuery(api.analysis.patterns, {})
  const sample = useQuery(api.audit.suggestSample, {})
  const apps = useQuery(api.apps.list, {})

  const nameByRank = React.useMemo(() => {
    const map = new Map<number, string>()
    for (const app of apps ?? []) map.set(app.rank, app.name)
    return map
  }, [apps])

  const audits = React.useMemo(
    () =>
      (apps ?? [])
        .filter((a) => a.audit)
        .map((a) => ({ rank: a.rank, name: a.name, audit: a.audit! }))
        .sort((a, b) => a.rank - b.rank),
    [apps]
  )

  if (!patterns) {
    return (
      <div className="flex flex-col gap-10">
        <Header />
        <LoadingGrid />
      </div>
    )
  }

  const researched = patterns.totals.completed
  const verificationRate =
    patterns.verification.fieldsChecked > 0
      ? Math.round(
          (patterns.verification.fieldsVerified /
            patterns.verification.fieldsChecked) *
            100
        )
      : 0

  const buildabilityByCategory = patterns.buildabilityByCategory.map((row) => ({
    category: CATEGORY_LABELS[row.category] ?? row.category,
    ...row.counts,
  }))

  const accessByCategory = patterns.accessByCategory.map((row) => ({
    category: CATEGORY_LABELS[row.category] ?? row.category,
    ...row.counts,
  }))

  const authMix = Object.entries(patterns.authMix)
    .map(([method, count]) => ({ method, count }))
    .sort((a, b) => b.count - a.count)

  const apiBreadth = Object.entries(patterns.apiBreadth).map(
    ([breadth, count]) => ({ breadth, count })
  )

  return (
    <div className="flex flex-col gap-10">
      <Header />

      <Section
        title="TL;DR"
        description="One research agent evaluated 100 apps as potential Composio toolkits, with a second-pass verifier and a deterministic catalog cross-check."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            label="Apps researched"
            value={`${researched}/${patterns.totals.apps}`}
            hint="Two-pass agent pipeline per app"
          />
          <StatCard
            label="Ready to build"
            value={patterns.buildabilityTotals.ready}
            hint={`${patterns.buildabilityTotals.caveats} with caveats, ${patterns.buildabilityTotals.blocked} blocked`}
          />
          <StatCard
            label="Official MCP servers"
            value={patterns.officialMcpCount}
            hint="Apps shipping a first-party MCP"
          />
          <StatCard
            label="Verified field rate"
            value={`${verificationRate}%`}
            hint={`${patterns.verification.fieldsVerified}/${patterns.verification.fieldsChecked} field checks confirmed by pass 2`}
          />
        </div>
      </Section>

      <Section
        title="Patterns across all 100 apps"
        description="Aggregated findings: how these apps authenticate, who can get API access, and how buildable they are as toolkits."
      >
        <div className="grid gap-4 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Buildability by category</CardTitle>
              <CardDescription>
                Ready = public docs + self-serve credentials; caveats = extra
                hurdles; blocked = no usable public API path.
              </CardDescription>
            </CardHeader>
            <CardContent className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={buildabilityByCategory}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis
                    dataKey="category"
                    tick={{ fontSize: 11 }}
                    interval={0}
                    angle={-30}
                    textAnchor="end"
                    height={60}
                  />
                  <YAxis allowDecimals={false} />
                  <Tooltip />
                  <Bar dataKey="ready" stackId="a" fill={BUILDABILITY_COLORS.ready} />
                  <Bar dataKey="caveats" stackId="a" fill={BUILDABILITY_COLORS.caveats} />
                  <Bar dataKey="blocked" stackId="a" fill={BUILDABILITY_COLORS.blocked} />
                  <Bar dataKey="unknown" stackId="a" fill={BUILDABILITY_COLORS.unknown} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Access model by category</CardTitle>
              <CardDescription>
                Self-serve = sign up and get keys today; gated = paid plan,
                admin approval, or partnership.
              </CardDescription>
            </CardHeader>
            <CardContent className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={accessByCategory}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis
                    dataKey="category"
                    tick={{ fontSize: 11 }}
                    interval={0}
                    angle={-30}
                    textAnchor="end"
                    height={60}
                  />
                  <YAxis allowDecimals={false} />
                  <Tooltip />
                  <Bar dataKey="self_serve" stackId="a" fill={ACCESS_COLORS.self_serve} />
                  <Bar dataKey="paid_plan" stackId="a" fill={ACCESS_COLORS.paid_plan} />
                  <Bar dataKey="admin_approval" stackId="a" fill={ACCESS_COLORS.admin_approval} />
                  <Bar dataKey="partnership" stackId="a" fill={ACCESS_COLORS.partnership} />
                  <Bar dataKey="unknown" stackId="a" fill={ACCESS_COLORS.unknown} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Auth method mix</CardTitle>
              <CardDescription>
                Apps can support several methods; counts overlap.
              </CardDescription>
            </CardHeader>
            <CardContent className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={authMix} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                  <XAxis type="number" allowDecimals={false} />
                  <YAxis type="category" dataKey="method" width={80} />
                  <Tooltip />
                  <Bar dataKey="count">
                    {authMix.map((entry) => (
                      <Cell
                        key={entry.method}
                        fill={AUTH_COLORS[entry.method] ?? "#6b7280"}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Where the friction is</CardTitle>
              <CardDescription>
                Most common blockers, and the split between easy wins and
                outreach-required apps.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <div className="flex flex-wrap gap-2">
                <Badge variant="default">
                  {patterns.easyWins.length} easy wins
                </Badge>
                <Badge variant="destructive">
                  {patterns.outreachNeeded.length} need outreach
                </Badge>
                <Badge variant="secondary">
                  {patterns.catalog.inCatalog} already in Composio catalog
                </Badge>
              </div>
              <ul className="flex flex-col gap-1.5 text-sm">
                {patterns.topBlockers.slice(0, 8).map((b) => (
                  <li key={b.blocker} className="flex items-baseline gap-2">
                    <span className="font-mono text-xs text-muted-foreground">
                      {b.count}x
                    </span>
                    <span className="line-clamp-2">{b.blocker}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Easy wins</CardTitle>
              <CardDescription>
                Ready + self-serve + OAuth2. Fastest path to new toolkits.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-1.5">
              {patterns.easyWins.map((rank) => (
                <Badge key={rank} variant="outline">
                  {nameByRank.get(rank) ?? `#${rank}`}
                </Badge>
              ))}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Outreach needed</CardTitle>
              <CardDescription>
                Admin approval or partnership gates. Buildable, but not
                self-serve.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-1.5">
              {patterns.outreachNeeded.map((rank) => (
                <Badge key={rank} variant="outline">
                  {nameByRank.get(rank) ?? `#${rank}`}
                </Badge>
              ))}
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section
        title="How the agent works"
        description="Each app goes through the same durable Convex workflow."
      >
        <Card>
          <CardContent className="pt-6">
            <ol className="flex flex-col gap-3 text-sm">
              <li>
                <strong>1. Search</strong> â€” Exa finds API-reference and auth
                docs, ranking API pages above OAuth-only pages.
              </li>
              <li>
                <strong>2. Extract (pass 1)</strong> â€” Kimi K3 fills a strict
                JSON schema: auth methods, access model, API surface, MCP,
                buildability, plus citations.
              </li>
              <li>
                <strong>3. Fetch</strong> â€” primary docs and auth pages are
                pulled in full; JS-only junk fetches are discarded.
              </li>
              <li>
                <strong>4. Verify (pass 2)</strong> â€” a second LLM call checks
                every field against the full corpus and only overwrites on
                contradiction, emitting per-field confirmed/revised notes.
              </li>
              <li>
                <strong>5. Catalog cross-check</strong> â€” deterministic, no LLM:
                findings are compared to a snapshot of the Composio catalog
                (67 in, 33 absent) to catch MCP/auth mismatches.
              </li>
            </ol>
          </CardContent>
        </Card>
      </Section>

      <Section
        title="Verification & audit"
        description="Pass 2 re-checked every field against primary docs; a human audit scores a sample by hand."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            label="High confidence"
            value={patterns.verification.confidence.high}
            hint={`${patterns.verification.confidence.medium} medium, ${patterns.verification.confidence.low} low`}
          />
          <StatCard
            label="Fields verified"
            value={`${patterns.verification.fieldsVerified}/${patterns.verification.fieldsChecked}`}
            hint="Pass-1 claims confirmed against full docs"
          />
          <StatCard
            label="Corrections applied"
            value={patterns.verification.totalCorrections}
            hint={`across ${patterns.verification.appsWithCorrections} apps`}
          />
          <StatCard
            label="Catalog agreement"
            value={`${patterns.catalog.match}/${patterns.catalog.match + patterns.catalog.mismatch}`}
            hint={`${patterns.catalog.mismatch} mismatches flagged for review`}
          />
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Human audit sample</CardTitle>
            <CardDescription>
              Deterministic sample favoring low/medium confidence, catalog
              mismatches, and pass-2 corrections. Audits are recorded per app
              and shown here as they land.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b text-left text-xs text-muted-foreground">
                    <th className="py-2 pr-4 font-medium">App</th>
                    <th className="py-2 pr-4 font-medium">Why sampled</th>
                    <th className="py-2 pr-4 font-medium">Confidence</th>
                    <th className="py-2 font-medium">Audit verdict</th>
                  </tr>
                </thead>
                <tbody>
                  {(sample ?? []).map((row) => {
                    const recorded = audits.find((a) => a.rank === row.rank)
                    return (
                      <tr key={row.rank} className="border-b last:border-0">
                        <td className="py-2 pr-4 font-medium">{row.name}</td>
                        <td className="py-2 pr-4">
                          <div className="flex flex-wrap gap-1">
                            {row.reasons.map((r) => (
                              <Badge key={r} variant="secondary">
                                {r}
                              </Badge>
                            ))}
                          </div>
                        </td>
                        <td className="py-2 pr-4">{row.confidence ?? "â€”"}</td>
                        <td className="py-2">
                          {recorded ? (
                            <Badge
                              variant={
                                recorded.audit.verdict === "accurate"
                                  ? "default"
                                  : recorded.audit.verdict === "minor_errors"
                                    ? "secondary"
                                    : "destructive"
                              }
                            >
                              {recorded.audit.verdict.replace(/_/g, " ")}
                            </Badge>
                          ) : (
                            <span className="text-xs text-muted-foreground">
                              pending
                            </span>
                          )}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>

            {audits.length > 0 ? (
              <div className="flex flex-col gap-3">
                <h3 className="text-sm font-semibold">Recorded audits</h3>
                {audits.map(({ rank, name, audit }) => (
                  <div
                    key={rank}
                    className="rounded-md border p-3 text-sm"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-medium">{name}</span>
                      <Badge
                        variant={
                          audit.verdict === "accurate"
                            ? "default"
                            : audit.verdict === "minor_errors"
                              ? "secondary"
                              : "destructive"
                        }
                      >
                        {audit.verdict.replace(/_/g, " ")}
                      </Badge>
                    </div>
                    {audit.misses.length > 0 ? (
                      <p className="mt-1 text-xs text-muted-foreground">
                        Misses: {audit.misses.join("; ")}
                      </p>
                    ) : null}
                    {audit.notes ? (
                      <p className="mt-1 text-xs text-muted-foreground">
                        {audit.notes}
                      </p>
                    ) : null}
                  </div>
                ))}
              </div>
            ) : null}
          </CardContent>
        </Card>
      </Section>

    </div>
  )
}

function Header() {
  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-2xl font-bold tracking-tight">
        100 Apps as Composio Toolkits
      </h1>
      <p className="max-w-3xl text-muted-foreground">
        A two-pass research agent evaluated 100 apps across 10 categories for
        buildability as Composio toolkits â€” auth, access model, API surface,
        official MCP support â€” then a verifier pass and a deterministic catalog
        cross-check scored its own work.
      </p>
    </div>
  )
}