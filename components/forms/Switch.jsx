import React from "react";

export function Switch({ label, checked = false, onChange, onLight = false, id }) {
  const inputId = id || "sw-" + String(label).replace(/\s+/g, "-").toLowerCase();
  return (
    <label
      htmlFor={inputId}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "var(--space-3)",
        minHeight: 44,
        cursor: "pointer",
        font: "var(--type-body)",
        fontWeight: "var(--weight-medium)",
        color: onLight ? "var(--text-on-light)" : "var(--text-primary)"
      }}
    >
      <input
        id={inputId}
        type="checkbox"
        role="switch"
        checked={checked}
        onChange={(e) => onChange && onChange(e.target.checked)}
        style={{ position: "absolute", opacity: 0, width: 1, height: 1 }}
      />
      <span
        aria-hidden="true"
        style={{
          width: 46,
          height: 26,
          flex: "0 0 auto",
          borderRadius: "var(--radius-pill)",
          background: checked ? "var(--gold-500)" : onLight ? "var(--cream-300)" : "rgba(254,252,247,0.16)",
          border: "var(--border-width-hair) solid " + (checked ? "var(--gold-500)" : "transparent"),
          position: "relative",
          transition: "background var(--dur-base) var(--ease-out)"
        }}
      >
        <span
          style={{
            position: "absolute",
            top: 2,
            left: checked ? 22 : 2,
            width: 20,
            height: 20,
            borderRadius: "var(--radius-pill)",
            background: checked ? "var(--navy-800)" : "var(--cream-50)",
            boxShadow: "var(--shadow-sm)",
            transition: "left var(--dur-base) var(--ease-out), background var(--dur-base) var(--ease-out)"
          }}
        />
      </span>
      {label}
    </label>
  );
}
