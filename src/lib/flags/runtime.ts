import { z } from "zod";
import { registry, clientFlagKeys, type SchemaMap } from "./registry.config";

/**
 * Client-safe runtime helpers. This module must not import `flags/next`
 * (or anything reaching `next/headers`) because it is pulled into client
 * bundles via the test provider. Server-side resolution lives in
 * `server.ts` (`resolveAllFlags`), which is backed by the Flags SDK.
 */

export type Flags = { [K in keyof SchemaMap]: z.infer<SchemaMap[K]> };
export type FlagKey = keyof Flags;

export type ClientSchemaMap = Pick<SchemaMap, (typeof clientFlagKeys)[number]>;
export type ClientFlags = {
  [K in keyof ClientSchemaMap]: z.infer<ClientSchemaMap[K]>;
};

export const defaultFlags = Object.fromEntries(
  Object.entries(registry).map(([key, def]) => [key, def.defaultValue])
) as Flags;

/** Create the client-safe subset (respects each flag's `client.public`). */
export function pickClientFlags(flags: Flags): ClientFlags {
  const out: Record<string, unknown> = {};
  for (const key of clientFlagKeys) {
    out[key as string] = flags[key];
  }
  return out as ClientFlags;
}
