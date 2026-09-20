/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type * as apps from "../apps.js";
import type * as catalog from "../catalog.js";
import type * as catalogParser from "../catalogParser.js";
import type * as comparison from "../comparison.js";
import type * as exa from "../exa.js";
import type * as llm from "../llm.js";
import type * as mistral from "../mistral.js";
import type * as research from "../research.js";
import type * as researchSteps from "../researchSteps.js";
import type * as seed from "../seed.js";

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";

declare const fullApi: ApiFromModules<{
  apps: typeof apps;
  catalog: typeof catalog;
  catalogParser: typeof catalogParser;
  comparison: typeof comparison;
  exa: typeof exa;
  llm: typeof llm;
  mistral: typeof mistral;
  research: typeof research;
  researchSteps: typeof researchSteps;
  seed: typeof seed;
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
