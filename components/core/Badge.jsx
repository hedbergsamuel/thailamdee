import React from "react";

const tones = {
  gold: { background: "var(--gold-500)", color: "var(--text-on-gold)", borderColor: "var(--gold-500)" },
  goldOutline: { background: "transparent", color: "var(--gold-400)", borderColor: "var(--border-strong)" },
  leaf: { background: "var(--leaf-100)", color: "var(--leaf-600)", borderColor: "transparent" },
  chili: { background: "var(--chili-100)", color: "var(--chili-600)", borderColor: "transparent" },
  navy: { background: "var(--navy-700)", color: "var(--cream-50)", borderColor: "var(--navy-700)" },
  quiet: { background: "rgba(254,252,247,0.08)", color: "var(--text-secondary)", borderColor: "transparent" }
};

export function Badge({ children, tone = "gold", icon, ...rest }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 5,
        font: "var(--type-label)",
        fontSize: "var(--text-3xs)",
        letterSpacing: "var(--tracking-label-tight)",
        textTransform: "uppercase",
        padding: "4px 8px",
        borderRadius: "var(--radius-xs)",
        border: "var(--border-width-hair) solid transparent",
        whiteSpace: "nowrap",
        ...tones[tone]
      }}
      {...rest}
    >
      {icon ? <span aria-hidden="true">{icon}</span> : null}
      {children}
    </span>
  );
}
