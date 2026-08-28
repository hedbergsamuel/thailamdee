import React from "react";

export function Input({ label, hint, type = "text", value, onChange, placeholder, onLight = false, id, multiline = false, rows = 4, ...rest }) {
  const inputId = id || "in-" + String(label || placeholder).replace(/\s+/g, "-").toLowerCase();
  const field = {
    width: "100%",
    font: "var(--type-body)",
    color: onLight ? "var(--text-on-light)" : "var(--text-primary)",
    background: onLight ? "var(--cream-50)" : "rgba(6,23,53,0.5)",
    border: "var(--border-width-hair) solid " + (onLight ? "var(--border-on-light)" : "var(--border-hairline)"),
    borderRadius: "var(--radius-sm)",
    padding: "12px 14px",
    minHeight: 44,
    outline: "none"
  };
  const Tag = multiline ? "textarea" : "input";
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
      <Tag
        id={inputId}
        type={multiline ? undefined : type}
        rows={multiline ? rows : undefined}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange && onChange(e.target.value)}
        style={{ ...field, resize: multiline ? "vertical" : undefined }}
        {...rest}
      />
      {hint ? (
        <span style={{ font: "var(--type-body-sm)", fontSize: "var(--text-xs)", color: onLight ? "var(--text-on-light-muted)" : "var(--text-muted)" }}>
          {hint}
        </span>
      ) : null}
    </div>
  );
}
