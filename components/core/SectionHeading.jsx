import React from "react";
import { Ornament } from "./Ornament.jsx";

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  onLight = false,
  ornament = false,
  id
}) {
  const centered = align === "center";
  return (
    <header
      id={id}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: centered ? "center" : "flex-start",
        textAlign: centered ? "center" : "left",
        gap: "var(--space-3)",
        maxWidth: centered ? "var(--container-narrow)" : "none",
        margin: centered ? "0 auto" : undefined
      }}
    >
      {ornament ? <Ornament width={56} tone={onLight ? "gold" : "gold"} /> : null}
      {eyebrow ? (
        <span
          style={{
            font: "var(--type-label)",
            letterSpacing: "var(--tracking-label)",
            textTransform: "uppercase",
            color: onLight ? "var(--gold-700)" : "var(--text-accent)"
          }}
        >
          {eyebrow}
        </span>
      ) : null}
      <h2
        style={{
          font: "var(--type-h1)",
          letterSpacing: "var(--tracking-display)",
          color: onLight ? "var(--navy-700)" : "var(--text-primary)"
        }}
      >
        {title}
      </h2>
      {lead ? (
        <p
          style={{
            font: "var(--type-body)",
            fontSize: "var(--text-lg)",
            color: onLight ? "var(--text-on-light-secondary)" : "var(--text-secondary)",
            maxWidth: "var(--measure)"
          }}
        >
          {lead}
        </p>
      ) : null}
    </header>
  );
}
