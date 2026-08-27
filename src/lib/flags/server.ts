import "server-only";
import { AsyncLocalStorage } from "node:async_hooks";
import { flag, evaluate } from "flags/next";
import { registry, flagSchemas, type SchemaMap } from "./registry.config";
import type { FlagContext } from "./kit";
import type { Flags } from "./runtime";

/**
 * Server-only: the Flags SDK engine.
 *
 * Every flag defined with `defineFlag` is backed here by a real
 * `flag()` declaration from `flags/next`. This is what makes Fargo Flags
 * genuinely "built on the Vercel Flags SDK": the SDK owns evaluation,
 * request-scoped memoization, Flags Explorer discovery, and toolbar
 * overrides, while `defineFlag` keeps the ergonomic Zod-typed authoring
 * surface and the client/public exposure model.
 *
 * This module imports `flags/next` (which reaches into `next/headers`),
 * so it must never enter a client bundle — hence `server-only`. The
 * client-safe helpers (`defaultFlags`, `pickClientFlags`) live in
 * `runtime.ts`.
 */

type RegistryDef = (typeof registry)[keyof typeof registry];

// Bridges the app-provided FlagContext (getUser/getWorkspace) into each
// flag's `decide` without a provider adapter. `resolveAllFlags` sets the
// store for the duration of the batch; the SDK invokes `decide` within it.
const contextStore = new AsyncLocalStorage<FlagContext>();

function buildSdkFlag(key: string, def: RegistryDef) {
  return flag({
    key,
    description: def.description,
    defaultValue: def.defaultValue,
    options: def.options,
    // Code-based resolution — no external provider required. Attach an
    // adapter here (e.g. `adapter: vercelAdapter`) to source values from
    // Vercel Flags or another provider instead.
    decide() {
      const ctx = contextStore.getStore() ?? {};
      return def.decide ? def.decide(ctx) : def.defaultValue;
    },
  });
}

/** Real Flags SDK declarations, one per registered flag. */
export const sdkFlags = Object.fromEntries(
  Object.entries(registry).map(([key, def]) => [key, buildSdkFlag(key, def)])
) as Record<keyof SchemaMap, ReturnType<typeof flag>>;

/**
 * Resolve every flag on the server through the Flags SDK, then validate
 * each result against its Zod schema. Uses the SDK's `evaluate()` batch
 * API so headers, cookies, and toolbar overrides are read once for the
 * whole group.
 */
export async function resolveAllFlags(ctx?: FlagContext): Promise<Flags> {
  const keys = Object.keys(registry) as (keyof SchemaMap)[];
  if (keys.length === 0) return {} as Flags;

  return contextStore.run(ctx ?? {}, async () => {
    const group = keys.map((key) => sdkFlags[key]);
    const values = await evaluate(group);
    const entries = keys.map((key, i) => {
      const value = flagSchemas[key].parse(values[i]);
      return [key, value] as const;
    });
    return Object.fromEntries(entries) as Flags;
  });
}
