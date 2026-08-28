import React from "react";
import { Badge } from "../core/Badge.jsx";

export function MenuItem({
  number,
  name,
  ingredients,
  prices = [],
  badges = [],
  imageSlot = false,
  dimmed = false,
  onLight = false,
  footnote
}) {
  return (
    <article
      className="ld-menuitem"
      style={{
        display: "flex",
        gap: "var(--space-4)",
        alignItems: "flex-start",
        padding: "var(--space-5) 0",
        borderBottom: "var(--border-width-hair) solid " + (onLight ? "var(--border-on-light)" : "var(--border-hairline)"),
        opacity: dimmed ? 0.4 : 1,
        transition: "opacity var(--dur-base) var(--ease-out)"
      }}
    >
      {imageSlot ? (
        <div
          style={{
            flex: "0 0 auto",
            width: 84,
            height: 84,
            borderRadius: "var(--radius-sm)",
            border: "var(--border-width-hair) dashed " + (onLight ? "var(--border-on-light)" : "var(--border-hairline)"),
            display: "grid",
            placeItems: "center",
            font: "var(--type-label)",
            fontSize: "var(--text-3xs)",
            letterSpacing: "var(--tracking-label-tight)",
            textTransform: "uppercase",
            color: onLight ? "var(--text-on-light-muted)" : "var(--text-muted)",
            textAlign: "center",
            padding: 6
          }}
        >
          Bild
        </div>
      ) : null}

      <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 6 }}>
        <div className="ld-menuitem-head" style={{ display: "flex", alignItems: "baseline", gap: "var(--space-3)", flexWrap: "wrap" }}>
          {number != null ? (
            <span
              style={{
                font: "var(--type-price)",
                fontSize: "var(--text-sm)",
                color: onLight ? "var(--gold-600)" : "var(--text-accent)",
                flex: "0 0 auto",
                minWidth: "1.6em"
              }}
            >
              {number}
            </span>
          ) : null}
          <h3
            style={{
              font: "var(--type-h3)",
              fontSize: "var(--text-xl)",
              letterSpacing: "var(--tracking-normal)",
              color: onLight ? "var(--navy-700)" : "var(--text-primary)"
            }}
          >
            {name}
          </h3>
          {badges.length ? (
            <span style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              {badges.map((b) => (
                <Badge key={b.label} tone={b.tone}>{b.label}</Badge>
              ))}
            </span>
          ) : null}
        </div>

        {ingredients ? (
          <p
            style={{
              font: "var(--type-body)",
              color: onLight ? "var(--text-on-light-secondary)" : "var(--text-secondary)",
              maxWidth: "48ch"
            }}
          >
            {ingredients}
          </p>
        ) : null}

        {footnote ? (
          <p style={{ font: "var(--type-body-sm)", fontSize: "var(--text-xs)", color: onLight ? "var(--text-on-light-muted)" : "var(--text-muted)" }}>
            {footnote}
          </p>
        ) : null}
      </div>

      <div className="ld-menuitem-prices" style={{ flex: "0 0 auto", display: "flex", flexDirection: "column", gap: 3, alignItems: "flex-end", textAlign: "right" }}>
        {prices.map((p) => (
          <div key={p.label + p.price} style={{ display: "flex", gap: "var(--space-3)", alignItems: "baseline" }}>
            <span
              style={{
                font: "var(--type-body-sm)",
                fontSize: "var(--text-sm)",
                textTransform: "uppercase",
                letterSpacing: "var(--tracking-label-tight)",
                color: onLight ? "var(--text-on-light-muted)" : "var(--text-muted)"
              }}
            >
              {p.label}
            </span>
            <span
              style={{
                font: "var(--type-price)",
                fontSize: "var(--text-lg)",
                color: onLight ? "var(--navy-700)" : "var(--text-accent)",
                whiteSpace: "nowrap",
                minWidth: "4.6em"
              }}
            >
              {p.price}
            </span>
          </div>
        ))}
      </div>
    </article>
  );
}
