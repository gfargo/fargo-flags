import { z } from "zod";
import type { FlagDefinition } from "./kit";

/**
 * Managed regions — the wizard inserts new imports and entries
 * between these tags. Manual edits are fine too.
 */

// @fargo-flags:imports
import * as f_enable_ai_assistant from "./defs/enable_ai_assistant.flag";
import * as f_pagination_ui_location from "./defs/pagination_ui_location.flag";
import * as f_ai_claims_model from "./defs/ai_claims_model.flag";
import * as f_theme_mode from "./defs/theme_mode.flag";
// @fargo-flags:imports:end

export const flagSchemas = {
  // @fargo-flags:schemas
  "enable-ai-assistant-in-pdf-toolbar": f_enable_ai_assistant.schema,
  "pagination-ui-location": f_pagination_ui_location.schema,
  "ai-claims-model": f_ai_claims_model.schema,
  "theme-mode": f_theme_mode.schema,
  // @fargo-flags:schemas:end
} as const;

export const registry = {
  // @fargo-flags:registry
  "enable-ai-assistant-in-pdf-toolbar": f_enable_ai_assistant.default,
  "pagination-ui-location": f_pagination_ui_location.default,
  "ai-claims-model": f_ai_claims_model.default,
  "theme-mode": f_theme_mode.default,
  // @fargo-flags:registry:end
} as const satisfies Record<
  keyof typeof flagSchemas,
  FlagDefinition<z.ZodTypeAny>
>;

/** Keys safe to send to the client (NEXT_PUBLIC-style). */
export const clientFlagKeys = [
  // @fargo-flags:public
  "enable-ai-assistant-in-pdf-toolbar",
  "pagination-ui-location",
  "theme-mode",
  // @fargo-flags:public:end
] as const;

export type SchemaMap = typeof flagSchemas;
export type FlagKey = keyof SchemaMap;