import React from "react";

/* Knapparna är hospitality, inte webbapp: generös höjd, gott om padding och
   mening satt i sentence case. Versaler finns kvar bakom `caps` för de få
   ställen där knappen ska läsa som en etikett. */
const base = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "var(--space-2)",
  fontFamily: "var(--font-body)",
  fontWeight: "var(--weight-semibold)",
  lineHeight: 1.1,
  letterSpacing: "0.005em",
  border: "var(--border-width-hair) solid transparent",
  borderRadius: "var(--radius-btn, 11px)",
  cursor: "pointer",
  textDecoration: "none",
  transition: "background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), transform var(--dur-fast) var(--ease-out)",
  whiteSpace: "nowrap"
};

const sizes = {
  sm: { padding: "9px 16px", minHeight: 38, fontSize: "var(--text-sm)" },
  md: { padding: "13px 22px", minHeight: 46, fontSize: "var(--text-base)" },
  lg: { padding: "17px 30px", minHeight: 56, fontSize: "var(--text-lg)" },
  xl: { padding: "21px 38px", minHeight: 64, fontSize: "var(--text-lg)" }
};

const capsStyle = { textTransform: "uppercase", letterSpacing: "0.08em" };

/* Vilo-läge och hover för varje variant. Hover lyfter knappen en aning
   (translateY) och lägger på en mjuk, varm skugga — diskret, aldrig studsig. */
const liftHover = { transform: "translateY(-1px)" };

const variants = {
  primary: { background: "var(--gold-500)", color: "var(--text-on-gold)", borderColor: "var(--gold-500)", boxShadow: "0 1px 2px rgba(138,100,18,0.20)" },
  primaryHover: { background: "var(--gold-400)", borderColor: "var(--gold-400)", boxShadow: "0 8px 20px rgba(214,162,46,0.34)", ...liftHover },
  secondary: { background: "transparent", color: "var(--text-accent)", borderColor: "var(--border-strong)" },
  secondaryHover: { background: "rgba(214,162,46,0.12)", ...liftHover },
  ghost: { background: "transparent", color: "var(--text-secondary)", borderColor: "transparent" },
  ghostHover: { color: "var(--text-accent)" },
  onLight: { background: "var(--navy-700)", color: "var(--cream-50)", borderColor: "var(--navy-700)", boxShadow: "0 1px 2px rgba(6,23,53,0.18)" },
  onLightHover: { background: "var(--navy-600)", borderColor: "var(--navy-600)", boxShadow: "0 8px 20px rgba(6,23,53,0.22)", ...liftHover },
  /* Sekundär på kräm: marinblå hårlinje, ingen guldtext — guld på kräm är förbjudet. */
  onLightGhost: { background: "var(--cream-50)", color: "var(--navy-700)", borderColor: "rgba(12,44,116,0.26)" },
  onLightGhostHover: { background: "var(--cream-100)", borderColor: "var(--navy-700)", ...liftHover }
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  icon,
  caps = false,
  disabled = false,
  fullWidth = false,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const css = {
    ...base,
    ...sizes[size],
    ...(caps ? capsStyle : null),
    ...variants[variant],
    ...(hover && !disabled ? variants[variant + "Hover"] : null),
    ...(fullWidth ? { width: "100%" } : null),
    ...(disabled ? { opacity: 0.45, cursor: "not-allowed" } : null),
    ...style
  };
  const Tag = href && !disabled ? "a" : "button";
  return (
    <Tag
      href={href}
      style={css}
      onClick={disabled ? undefined : onClick}
      disabled={Tag === "button" ? disabled : undefined}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      {...rest}
    >
      {icon ? <span className="ld-btn-icon" aria-hidden="true" style={{ fontSize: "1.05em", lineHeight: 1 }}>{icon}</span> : null}
      {children}
    </Tag>
  );
}
