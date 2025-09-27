"use client";
import { ReactNode } from "react";
import { useFlag } from "./flags-provider";
import type { ClientFlags } from "@/lib/flags/runtime";

type Props<K extends keyof ClientFlags> = {
  when: K;               // flag key
  is?: ClientFlags[K];   // render when value === is
  not?: ClientFlags[K];  // render when value !== not
  fallback?: ReactNode;
  children: ReactNode;
};

export function Flag<K extends keyof ClientFlags>({
  when,
  is,
  not,
  fallback = null,
  children,
}: Props<K>) {
  const value = useFlag(when);
  const pass =
    typeof is !== "undefined"
      ? value === is
      : typeof not !== "undefined"
      ? value !== not
      : Boolean(value);
  return pass ? <>{children}</> : <>{fallback}</>;
}