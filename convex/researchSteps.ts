"use node";

import { internalAction } from "./_generated/server";
import { v } from "convex/values";

const EXA_BASE = "https://api.exa.ai";

function getExaApiKey(): string {
  const key = process.env.EXA_API_KEY;
  if (!key) {
    throw new Error("EXA_API_KEY is not configured");
  }
  return key;
}

type ExaResultItem = {
  title?: string;
  url?: string;
  text?: string;
  highlights?: string[];
  summary?: string;
};

function docsUrlScore(url: string, title: string): number {
  const u = url.toLowerCase();
  const t = title.toLowerCase();
  let score = 0;
  if (/developer|docs\.|\/docs\b/.test(u)) score += 4;
  if (/api-reference|rest.?api|openapi|swagger|\/api\//.test(u) || /rest api|api reference/.test(t)) score += 8;
  if (/graphql/.test(u) || /graphql/.test(t)) score += 4;
  if (/oauth|authentication|connected.?app|auth\b/.test(u) && !/api-reference|rest/.test(u)) score -= 2;
  if (/blog|medium\.com|reddit|youtube/.test(u)) score -= 6;
  if (url.startsWith("https://")) score += 1;
  return score;
}

function looksLikeRenderedDocs(text: string): boolean {
  if (!text || text.length < 120) return false;
  const jsHeavy = /window\.__|function\(\)\s*\{|navigator\.sendBeacon|SILO_ACCESSOR/.test(text);
  const docsSignals = /oauth|endpoint|authentication|REST|GraphQL|API key|developer/i.test(text);
  if (jsHeavy && !docsSignals) return false;
  const ratio = (text.match(/[{};]/g)?.length ?? 0) / text.length;
  if (jsHeavy && ratio > 0.04) return false;
  return true;
}

export const searchAppDocs = internalAction({
  args: {
    name: v.string(),
    website: v.string(),
    category: v.string(),
  },
  returns: v.object({
    contextText: v.string(),
    suggestedDocsUrl: v.union(v.string(), v.null()),
    suggestedAuthUrl: v.union(v.string(), v.null()),
    sources: v.array(
      v.object({
        title: v.string(),
        url: v.string(),
      })
    ),
  }),
  handler: async (_ctx, args) => {
    const query = `${args.name} ${args.website} official REST API reference developer documentation OAuth`;
    const body: Record<string, unknown> = {
      query,
      type: "auto",
      numResults: 6,
      text: { maxCharacters: 2500 },
      highlights: { numSentences: 3 },
    };

    const res = await fetch(`${EXA_BASE}/search`, {
      method: "POST",
      headers: {
        "x-api-key": getExaApiKey(),
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const errText = await res.text();
      throw new Error(`Exa search failed (${res.status}): ${errText}`);
    }

    const data = (await res.json()) as { results?: ExaResultItem[] };
    const results = data.results ?? [];

    let contextText = `Application: ${args.name}\nWebsite: ${args.website}\nCategory: ${args.category}\n\nSearch Findings:\n`;
    const sources: { title: string; url: string }[] = [];

    for (const item of results) {
      const url = item.url ?? "";
      const title = item.title ?? "Documentation Source";
      sources.push({ title, url });
      contextText += `\nSource: ${title} (${url})\nContent:\n${item.text ?? item.highlights?.join(" ") ?? ""}\n---\n`;
    }

    const ranked = [...sources].sort(
      (a, b) => docsUrlScore(b.url, b.title) - docsUrlScore(a.url, a.title)
    );
    const suggestedDocsUrl = ranked[0]?.url ?? null;
    const suggestedAuthUrl =
      ranked.find((s) => /oauth|authentication|auth/i.test(`${s.url} ${s.title}`) && s.url !== suggestedDocsUrl)
        ?.url ?? null;

    return {
      contextText,
      suggestedDocsUrl,
      suggestedAuthUrl,
      sources,
    };
  },
});

export const fetchDocsContent = internalAction({
  args: {
    url: v.string(),
  },
  returns: v.object({
    url: v.string(),
    text: v.string(),
    success: v.boolean(),
  }),
  handler: async (_ctx, args) => {
    if (!args.url || !args.url.startsWith("http")) {
      return { url: args.url, text: "", success: false };
    }

    try {
      const body = {
        urls: [args.url],
        text: { maxCharacters: 8000 },
      };

      const res = await fetch(`${EXA_BASE}/contents`, {
        method: "POST",
        headers: {
          "x-api-key": getExaApiKey(),
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        return { url: args.url, text: "", success: false };
      }

      const data = (await res.json()) as {
        results?: { url?: string; text?: string }[];
      };
      const text = data.results?.[0]?.text ?? "";
      const usable = looksLikeRenderedDocs(text);
      return {
        url: args.url,
        text: usable ? text : "",
        success: usable,
      };
    } catch (err) {
      console.warn(`Failed to fetch docs content from ${args.url}:`, err);
      return { url: args.url, text: "", success: false };
    }
  },
});
