import React from "react";

export function Select({ label, value, onChange, options = [], onLight = false, id, ...rest }) {
  const inputId = id || "sel-" + String(label).replace(/\s+/g, "-").toLowerCase();
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
      {label ? (
        <label
          htmlFor={inputId}
          style={{
            font: "var(--type-label)",
            letterSpacing: "var(--tracking-label-tight)",
            textTransform: "uppercase",
            color: onLight ? "var(--gold-700)" : "var(--text-accent)"
          }}
        >
          {label}
        </label>
      ) : null}
      <select
        id={inputId}
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
        style={{
          font: "var(--type-body)",
          color: onLight ? "var(--text-on-light)" : "var(--text-primary)",
          background: onLight ? "var(--cream-50)" : "rgba(6,23,53,0.5)",
          border: "var(--border-width-hair) solid " + (onLight ? "var(--border-on-light)" : "var(--border-hairline)"),
          borderRadius: "var(--radius-sm)",
          padding: "12px 14px",
          minHeight: 44,
          appearance: "none",
          backgroundImage: "linear-gradient(45deg, transparent 50%, var(--gold-500) 50%), linear-gradient(135deg, var(--gold-500) 50%, transparent 50%)",
          backgroundPosition: "calc(100% - 18px) 50%, calc(100% - 12px) 50%",
          backgroundSize: "6px 6px, 6px 6px",
          backgroundRepeat: "no-repeat",
          paddingRight: 38
        }}
        {...rest}
      >
        {options.map((o) => {
          const val = typeof o === "string" ? o : o.value;
          const lab = typeof o === "string" ? o : o.label;
          return (
            <option key={val} value={val} style={{ color: "#171512" }}>
              {lab}
            </option>
          );
        })}
      </select>
    </div>
  );
}
