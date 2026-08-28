import React from "react";

/* Språkval som enkla textlänkar — ingen box, ingen knapp. Aktivt språk markeras
   i guld, det inaktiva är tonat. Åtskilda av ett tunt snedstreck. */
export function LangToggle({ value = "sv", onChange, languages = [{ code: "sv", label: "SV" }, { code: "en", label: "EN" }] }) {
  return (
    <div role="group" aria-label="Språk" style={{ display: "inline-flex", alignItems: "center", gap: "var(--space-2)", flex: "0 0 auto" }}>
      {languages.map((l, i) => {
        const active = l.code === value;
        return (
          <React.Fragment key={l.code}>
            {i > 0 ? <span aria-hidden="true" style={{ color: "rgba(254,252,247,0.3)", fontSize: "var(--text-xs)" }}>/</span> : null}
            <button
              onClick={() => onChange && onChange(l.code)}
              aria-pressed={active}
              style={{
                border: "none",
                background: "none",
                cursor: "pointer",
                padding: "2px 1px",
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-xs)",
                fontWeight: active ? "var(--weight-semibold)" : "var(--weight-medium)",
                letterSpacing: "0.08em",
                color: active ? "var(--gold-300)" : "rgba(254,252,247,0.55)",
                borderBottom: "2px solid " + (active ? "var(--gold-400)" : "transparent"),
                transition: "color var(--dur-fast) var(--ease-out)"
              }}
            >
              {l.label}
            </button>
          </React.Fragment>
        );
      })}
    </div>
  );
}
