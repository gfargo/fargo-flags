import { createFlagsDiscoveryEndpoint, getProviderData } from "flags/next";
import { sdkFlags } from "@/lib/flags/server";

/**
 * Flags Explorer discovery endpoint.
 *
 * Exposes the SDK-backed flag definitions to the Vercel Toolbar's Flags
 * Explorer so they can be inspected and overridden. Access is verified
 * against `FLAGS_SECRET` by `createFlagsDiscoveryEndpoint`.
 */
export const GET = createFlagsDiscoveryEndpoint(async () => {
  return getProviderData(sdkFlags);
});
