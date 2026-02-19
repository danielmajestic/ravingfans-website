import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "RavingFans.ai — We Turn Your Customers Into Raving Fans";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#1B2A4A",
          padding: "80px",
          position: "relative",
        }}
      >
        {/* Gold accent bar top */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "8px",
            backgroundColor: "#C8962E",
          }}
        />

        {/* Logo / brand name */}
        <div
          style={{
            fontSize: "52px",
            fontWeight: "800",
            color: "#C8962E",
            letterSpacing: "-1px",
            marginBottom: "24px",
            display: "flex",
          }}
        >
          RavingFans.ai
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: "42px",
            fontWeight: "700",
            color: "#FFFFFF",
            textAlign: "center",
            lineHeight: 1.2,
            maxWidth: "900px",
            marginBottom: "32px",
            display: "flex",
          }}
        >
          We Turn Your Customers Into Raving Fans
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: "24px",
            color: "#A8B4C8",
            textAlign: "center",
            maxWidth: "700px",
            lineHeight: 1.5,
            display: "flex",
          }}
        >
          AI-powered customer acquisition for CPG brands doing $3M+
        </div>

        {/* Gold accent bar bottom */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "8px",
            backgroundColor: "#C8962E",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
