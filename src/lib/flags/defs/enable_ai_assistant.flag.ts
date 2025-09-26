import { z } from "zod";
import { defineFlag } from "../kit";

export const key = "enable-ai-assistant-in-pdf-toolbar" as const;
export const schema = z.boolean();

export default defineFlag({
  key,
  schema,
  description: "Enable AI Assistant in the PDF toolbar",
  defaultValue: false,
  client: { public: true }, // send to the client
  async decide(ctx) {
    const user = await ctx.getUser?.();
    return !!user;
  },
});