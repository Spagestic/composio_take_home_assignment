"use node";

import { internalAction } from "./_generated/server";
import { v } from "convex/values";
import { internal } from "./_generated/api";

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

export const searchAppDocs = internalAction({
  args: {
    name: v.string(),
    website: v.string(),
    category: v.string(),
  },
  returns: v.object({
    contextText: v.string(),
    suggestedDocsUrl: v.union(v.string(), v.null()),
    sources: v.array(
      v.object({
        title: v.string(),
        url: v.string(),
      })
    ),
  }),
  handler: async (_ctx, args) => {
    const query = `${args.name} developer api documentation authentication oauth api key`;
    const body: Record<string, unknown> = {
      query,
      type: "auto",
      numResults: 5,
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
    let suggestedDocsUrl: string | null = null;
    const sources: { title: string; url: string }[] = [];

    for (const item of results) {
      const url = item.url ?? "";
      const title = item.title ?? "Documentation Source";
      sources.push({ title, url });

      if (!suggestedDocsUrl && (url.includes("docs") || url.includes("developer") || url.includes("api"))) {
        suggestedDocsUrl = url;
      }

      contextText += `\nSource: ${title} (${url})\nContent:\n${item.text ?? item.highlights?.join(" ") ?? ""}\n---\n`;
    }

    if (!suggestedDocsUrl && sources.length > 0) {
      suggestedDocsUrl = sources[0]!.url;
    }

    return {
      contextText,
      suggestedDocsUrl,
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
      return {
        url: args.url,
        text,
        success: text.length > 0,
      };
    } catch (err) {
      console.warn(`Failed to fetch docs content from ${args.url}:`, err);
      return { url: args.url, text: "", success: false };
    }
  },
});
