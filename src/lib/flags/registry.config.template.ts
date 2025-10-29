import { z } from "zod";
import type { FlagDefinition } from "./kit";

/**
 * Managed regions — the wizard inserts new imports and entries
 * between these tags. Manual edits are fine too.
 */

// @fargo-flags:imports
// @fargo-flags:imports:end

export const flagSchemas = {
  // @fargo-flags:schemas
  // @fargo-flags:schemas:end
} as const;

export const registry = {
  // @fargo-flags:registry
  // @fargo-flags:registry:end
} as const satisfies Record<
  keyof typeof flagSchemas,
  FlagDefinition<z.ZodTypeAny>
>;

/** Keys safe to send to the client (NEXT_PUBLIC-style). */
export const clientFlagKeys = [
  // @fargo-flags:public
  // @fargo-flags:public:end
] as const;

export type SchemaMap = typeof flagSchemas;
export type FlagKey = keyof SchemaMap;