import { z } from "zod";
import { defineFlag } from "../kit";

export const key = "pagination-ui-location" as const;
export const schema = z.enum(["top", "bottom", "both"]);

export default defineFlag({
  key,
  schema,
  description: "Where to show pagination controls in lists",
  defaultValue: "bottom",
  options: [
    { value: "top", label: "Top only" },
    { value: "bottom", label: "Bottom only" },
    { value: "both", label: "Top and bottom" }
  ],
  client: { public: true },
});