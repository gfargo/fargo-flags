import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "Fargo Flags - Enhanced Feature Flags Toolkit";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
          background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
        }}
      >
        {/* Background Pattern */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "radial-gradient(circle at 25% 25%, #511281 0%, transparent 50%), radial-gradient(circle at 75% 75%, #7c3aed 0%, transparent 50%)",
            opacity: 0.1,
          }}
        />

        {/* Main Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            zIndex: 1,
          }}
        >
          {/* Logo/Icon */}
          <div
            style={{
              width: 120,
              height: 120,
              background: "linear-gradient(135deg, #511281 0%, #7c3aed 100%)",
              borderRadius: 30,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: 60,
              fontWeight: "bold",
              marginBottom: 40,
            }}
          >
            ⛳️
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: 72,
              fontWeight: "bold",
              background: "linear-gradient(135deg, #511281 0%, #7c3aed 100%)",
              backgroundClip: "text",
              color: "transparent",
              marginBottom: 20,
            }}
          >
            Fargo Flags
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: 32,
              color: "#64748b",
              maxWidth: 800,
              lineHeight: 1.2,
              marginBottom: 30,
            }}
          >
            Enhanced Feature Flags Toolkit Built on Vercel&apos;s Flags SDK
          </div>

          {/* Features */}
          <div
            style={{
              display: "flex",
              gap: 40,
              fontSize: 20,
              color: "#475569",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span>✓</span>
              <span>CLI Tools</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span>✓</span>
              <span>Type Safety</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span>✓</span>
              <span>React Components</span>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
