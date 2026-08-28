import React from "react";

export function Checkbox({ label, hint, checked = false, onChange, onLight = false, id, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const inputId = id || "cb-" + String(label).replace(/\s+/g, "-").toLowerCase();
  return (
    <label
      htmlFor={inputId}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "var(--space-3)",
        padding: "10px 12px",
        minHeight: 44,
        borderRadius: "var(--radius-sm)",
        border: "var(--border-width-hair) solid " + (onLight ? "var(--border-on-light)" : "var(--border-hairline)"),
        background: hover
          ? (onLight ? "var(--cream-100)" : "rgba(239,198,92,0.08)")
          : (onLight ? "var(--cream-50)" : "transparent"),
        cursor: "pointer",
        transition: "background var(--dur-fast) var(--ease-out)"
      }}
    >
      <input
        id={inputId}
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange && onChange(e.target.checked)}
        style={{ position: "absolute", opacity: 0, width: 1, height: 1 }}
        {...rest}
      />
      <span
        aria-hidden="true"
        style={{
          flex: "0 0 auto",
          width: 20,
          height: 20,
          marginTop: 1,
          display: "grid",
          placeItems: "center",
          borderRadius: "var(--radius-xs)",
          border: "2px solid " + (checked ? "var(--gold-500)" : onLight ? "rgba(12,44,116,0.35)" : "var(--border-hairline)"),
          background: checked ? "var(--gold-500)" : "transparent",
          color: "var(--navy-800)",
          font: "var(--type-label)",
          fontSize: 13,
          transition: "all var(--dur-fast) var(--ease-out)"
        }}
      >
        {checked ? "✓" : ""}
      </span>
      <span style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <span
          style={{
            font: "var(--type-body)",
            fontWeight: "var(--weight-medium)",
            fontSize: "var(--text-base)",
            color: onLight ? "var(--text-on-light)" : "var(--text-primary)"
          }}
        >
          {label}
        </span>
        {hint ? (
          <span
            style={{
              font: "var(--type-body-sm)",
              fontSize: "var(--text-xs)",
              color: onLight ? "var(--text-on-light-muted)" : "var(--text-muted)"
            }}
          >
            {hint}
          </span>
        ) : null}
      </span>
    </label>
  );
}
