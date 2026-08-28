import React from "react";

const tones = {
  info: { background: "rgba(239,198,92,0.1)", borderColor: "var(--border-hairline)", color: "var(--text-secondary)", mark: "var(--gold-400)" },
  gluten: { background: "var(--leaf-100)", borderColor: "transparent", color: "var(--leaf-600)", mark: "var(--leaf-600)" },
  warning: { background: "var(--chili-100)", borderColor: "transparent", color: "var(--chili-600)", mark: "var(--chili-600)" },
  closed: { background: "rgba(6,23,53,0.6)", borderColor: "var(--border-hairline)", color: "var(--text-muted)", mark: "var(--text-muted)" }
};

export function Notice({ children, tone = "info", label }) {
  const t = tones[tone];
  return (
    <div
      style={{
        display: "flex",
        gap: "var(--space-3)",
        alignItems: "flex-start",
        padding: "var(--space-4)",
        borderRadius: "var(--radius-sm)",
        background: t.background,
        border: "var(--border-width-hair) solid " + t.borderColor,
        borderLeft: "3px solid " + t.mark
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
        {label ? (
          <span style={{ font: "var(--type-label)", letterSpacing: "var(--tracking-label-tight)", textTransform: "uppercase", color: t.mark }}>
            {label}
          </span>
        ) : null}
        <span style={{ font: "var(--type-body-sm)", color: t.color }}>{children}</span>
      </div>
    </div>
  );
}
