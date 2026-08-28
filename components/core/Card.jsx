import React from "react";

const surfaces = {
  dark: {
    background: "var(--surface-card)",
    border: "var(--border-width-hair) solid var(--border-hairline)",
    color: "var(--text-primary)"
  },
  inset: {
    background: "var(--surface-inset)",
    border: "var(--border-width-hair) solid var(--border-hairline)",
    color: "var(--text-primary)"
  },
  paper: {
    background: "var(--surface-card-light)",
    border: "var(--border-width-hair) solid var(--border-on-light)",
    color: "var(--text-on-light)",
    boxShadow: "var(--shadow-sm)"
  },
  paperQuiet: {
    background: "var(--cream-200)",
    border: "var(--border-width-hair) solid var(--border-on-light)",
    color: "var(--text-on-light)"
  },
  framed: {
    background: "var(--navy-800)",
    border: "var(--border-width-hair) solid var(--gold-500)",
    color: "var(--text-primary)",
    boxShadow: "var(--shadow-inset-hair)"
  }
};

export function Card({ children, surface = "dark", padding = "var(--space-6)", style, ...rest }) {
  return (
    <div
      style={{
        borderRadius: "var(--radius-md)",
        padding,
        ...surfaces[surface],
        ...style
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
