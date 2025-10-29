export function DefiningFlagsSection() {
  return (
    <section id="defining-flags">
      <h2 className="text-2xl font-bold mb-4">4. Defining Flags</h2>

      <h3 className="text-lg font-semibold mb-2">
        Flag File Structure
      </h3>
      <p className="text-muted-foreground mb-4">
        Each flag is defined in its own file in{" "}
        <code>src/lib/flags/defs/</code>:
      </p>

      <h4 className="font-medium mb-2">Boolean Flag</h4>
      <pre className="bg-muted p-4 rounded-lg text-sm mb-4">
        {`// src/lib/flags/defs/my-feature.flag.ts
import { z } from "zod";
import { defineFlag } from "../kit";

export const key = "my-awesome-feature" as const;
export const schema = z.boolean();

export default defineFlag({
  key,
  schema,
  description: "Enable my awesome new feature",
  defaultValue: false,
  client: { public: true }, // Expose to client
  async decide(ctx) {
    const user = await ctx.getUser?.();
    return user?.plan === "premium";
  },
});`}
      </pre>

      <h4 className="font-medium mb-2">Enum Flag</h4>
      <pre className="bg-muted p-4 rounded-lg text-sm mb-4">
        {`// src/lib/flags/defs/theme-mode.flag.ts
import { z } from "zod";
import { defineFlag } from "../kit";

export const key = "theme-mode" as const;
export const schema = z.enum(["light", "dark", "auto"]);

export default defineFlag({
  key,
  schema,
  description: "Application theme mode",
  defaultValue: "light",
  options: [
    { value: "light", label: "Light Mode" },
    { value: "dark", label: "Dark Mode" },
    { value: "auto", label: "Auto (System)" }
  ],
  client: { public: true },
});`}
      </pre>

      <h4 className="font-medium mb-2">Server-Only Flag</h4>
      <pre className="bg-muted p-4 rounded-lg text-sm">
        {`// src/lib/flags/defs/ai-model.flag.ts
import { z } from "zod";
import { defineFlag } from "../kit";

export const key = "ai-claims-model" as const;
export const schema = z.enum([
  "gpt-4o-mini",
  "gpt-4.5",
  "claude-3-sonnet"
]);

export default defineFlag({
  key,
  schema,
  description: "Which AI model to use for claims processing",
  defaultValue: "gpt-4o-mini",
  client: { public: false }, // Server-only
  async decide(ctx) {
    // Complex server-side logic
    const workspace = await ctx.getWorkspace?.();
    return workspace?.plan === "enterprise" ? "gpt-4.5" : "gpt-4o-mini";
  },
});`}
      </pre>
    </section>
  );
}