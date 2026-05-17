import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #B2EF91, #FA9372)",
          borderRadius: "8px",
        }}
      >
        <span
          style={{
            color: "#111111",
            fontSize: 22,
            fontWeight: 700,
            fontStyle: "italic",
            fontFamily: "Georgia, serif",
            lineHeight: 1,
            paddingBottom: 2,
          }}
        >
          J
        </span>
      </div>
    ),
    { ...size }
  );
}
