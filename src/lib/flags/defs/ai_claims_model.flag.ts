import { z } from "zod";
import { defineFlag } from "../kit";

export const key = "ai-claims-model" as const;
export const schema = z.enum([
  "gemini-2.5-pro",
  "gemini-2.5-flash",
  "openai-gpt-4o-mini",
  "openai-gpt-4.5",
  "openai-gpt-5",
]);

export default defineFlag({
  key,
  schema,
  description: "Which AI model powers claims analysis",
  defaultValue: "openai-gpt-4o-mini",
  client: { public: false }, // keep server-only
});