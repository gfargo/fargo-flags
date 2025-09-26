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
});