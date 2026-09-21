/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type * as analysis from "../analysis.js";
import type * as apps from "../apps.js";
import type * as catalog from "../catalog.js";
import type * as catalogParser from "../catalogParser.js";
import type * as chat from "../chat.js";
import type * as chatActions from "../chatActions.js";
import type * as exa from "../exa.js";
import type * as extract from "../extract.js";
import type * as lib_catalogCompare from "../lib/catalogCompare.js";
import type * as lib_researchSchemas from "../lib/researchSchemas.js";
import type * as lib_trace from "../lib/trace.js";
import type * as llm from "../llm.js";
import type * as research from "../research.js";
import type * as researchSteps from "../researchSteps.js";
import type * as seed from "../seed.js";
import type * as structuredActions from "../structuredActions.js";
import type * as verify from "../verify.js";

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";

declare const fullApi: ApiFromModules<{
  analysis: typeof analysis;
  apps: typeof apps;
  catalog: typeof catalog;
  catalogParser: typeof catalogParser;
  chat: typeof chat;
  chatActions: typeof chatActions;
  exa: typeof exa;
  extract: typeof extract;
  "lib/catalogCompare": typeof lib_catalogCompare;
  "lib/researchSchemas": typeof lib_researchSchemas;
  "lib/trace": typeof lib_trace;
  llm: typeof llm;
  research: typeof research;
  researchSteps: typeof researchSteps;
  seed: typeof seed;
  structuredActions: typeof structuredActions;
  verify: typeof verify;
}>;

/**
 * A utility for referencing Convex functions in your app's public API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;

/**
 * A utility for referencing Convex functions in your app's internal API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = internal.myModule.myFunction;
 * ```
 */
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;

export declare const components: {
  workflow: import("@convex-dev/workflow/_generated/component.js").ComponentApi<"workflow">;
  agent: import("@convex-dev/agent/_generated/component.js").ComponentApi<"agent">;
};
