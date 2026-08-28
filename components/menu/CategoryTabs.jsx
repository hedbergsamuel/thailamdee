import React from "react";

/* Kategorival. Horisontellt när kategorierna är få, vertikalt som rail när de
   är många — sjutton rätter i sju kategorier behöver en rail, inte en radbrytande
   flikrad. */
export function CategoryTabs({ items = [], value, onChange, onLight = false, counts, orientation = "horizontal" }) {
  const vertical = orientation === "vertical";
  return (
    <nav
      style={
        vertical
          ? { display: "flex", flexDirection: "column", gap: 2 }
          : {
              display: "flex",
              gap: "var(--space-2)",
              flexWrap: "wrap",
              borderBottom: "var(--border-width-hair) solid " + (onLight ? "var(--border-on-light)" : "var(--border-hairline)"),
              paddingBottom: "var(--space-3)"
            }
      }
    >
      {items.map((item) => {
        const val = typeof item === "string" ? item : item.value;
        const label = typeof item === "string" ? item : item.label;
        const active = val === value;
        return (
          <button
            key={val}
            onClick={() => onChange && onChange(val)}
            aria-pressed={active}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-base)",
              fontWeight: active ? "var(--weight-semibold)" : "var(--weight-regular)",
              letterSpacing: "0.005em",
              textAlign: vertical ? "left" : "center",
              padding: vertical ? "11px 14px" : "11px 16px",
              minHeight: 44,
              width: vertical ? "100%" : undefined,
              display: vertical ? "flex" : "inline-flex",
              alignItems: "center",
              justifyContent: vertical ? "space-between" : "center",
              gap: "var(--space-3)",
              cursor: "pointer",
              borderRadius: "var(--radius-sm)",
              border: "var(--border-width-hair) solid " + (active && !vertical ? "var(--border-strong)" : "transparent"),
              background: active
                ? (onLight ? (vertical ? "rgba(12,44,116,0.07)" : "var(--navy-700)") : "rgba(214,162,46,0.16)")
                : "transparent",
              color: active
                ? (onLight ? (vertical ? "var(--navy-700)" : "var(--cream-50)") : "var(--text-accent)")
                : (onLight ? "var(--text-on-light-secondary)" : "var(--text-secondary)"),
              boxShadow: active && vertical && onLight ? "inset 2px 0 0 var(--gold-500)" : "none",
              transition: "background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out)"
            }}
          >
            <span>{label}</span>
            {counts && counts[val] != null ? (
              <span style={{ opacity: 0.55, fontSize: "var(--text-sm)", fontVariantNumeric: "tabular-nums" }}>{counts[val]}</span>
            ) : null}
          </button>
        );
      })}
    </nav>
  );
}
