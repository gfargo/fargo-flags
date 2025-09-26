"use client";
import { ReactNode } from "react";
import { useFlag } from "./flags-provider";

type Props<K extends string = string> = {
  when: K;               // flag key
  is?: any;              // render when value === is
  not?: any;             // render when value !== not
  fallback?: ReactNode;
  children: ReactNode;
};

export function Flag<K extends string>({
  when,
  is,
  not,
  fallback = null,
  children,
}: Props<K>) {
  const value = useFlag(when as any);
  const pass =
    typeof is !== "undefined"
      ? value === is
      : typeof not !== "undefined"
      ? value !== not
      : Boolean(value);
  return pass ? <>{children}</> : <>{fallback}</>;
}