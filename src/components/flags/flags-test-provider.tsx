"use client";
import { PropsWithChildren, useMemo } from "react";
import { FlagsProvider } from "./flags-provider";
import { defaultFlags, pickClientFlags } from "@/lib/flags/runtime";

export type PartialClientFlags = Partial<ReturnType<typeof pickClientFlags>>;

export function FlagsTestProvider({
  overrides = {},
  children,
}: PropsWithChildren<{ overrides?: PartialClientFlags }>) {
  const clientDefault = pickClientFlags(defaultFlags);
  const flags = useMemo(() => ({ ...clientDefault, ...overrides }), [clientDefault, overrides]);
  return <FlagsProvider flags={flags}>{children}</FlagsProvider>;
}