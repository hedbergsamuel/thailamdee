import React from "react";

/**
 * The elephant motif from the truck's sign, used as a rule or a mark.
 * Image lives in the design system's assets folder; pass `src` to relocate it.
 */
export function Ornament({
  variant = "rule",
  width = 72,
  opacity = 1,
  src = "assets/elephant-l.png",
  flip = false,
  style
}) {
  const img = (
    <img
      src={src}
      alt=""
      aria-hidden="true"
      style={{
        width,
        height: "auto",
        opacity,
        transform: flip ? "scaleX(-1)" : undefined,
        flex: "0 0 auto"
      }}
    />
  );
  if (variant === "mark") return <span style={{ display: "inline-flex", ...style }}>{img}</span>;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "var(--space-4)", width: "100%", ...style }}>
      <span style={{ flex: 1, height: 1, background: "var(--border-hairline)" }} />
      {img}
      <span style={{ flex: 1, height: 1, background: "var(--border-hairline)" }} />
    </div>
  );
}
