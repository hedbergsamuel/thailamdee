import React from "react";
import { Button } from "../core/Button.jsx";

/* Tunn, lugn header. Skylten till vänster; länkar, språkval och telefon samlade
   till höger med små mellanrum så raden läser som en enhet — inte flera knappar.
   Genomskinlig marinblå med blur så den vilar snyggt både på hero-fotot och på
   de ljusa sektionerna längre ner. */
export function NavBar({
  brand = null,
  logoSrc = "assets/logo-sign.png",
  logoHeight = 32,
  links = [],
  activeHref,
  phone,
  phoneLabel,
  callLabel = "Ring och beställ",
  right,
  sticky = true
}) {
  // Solid överst; en aning genomskinlig (med blur) när sidan rullats.
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Mobilmenyn (slidear in från höger). Escape stänger och sidan låses för scroll.
  const [menuOpen, setMenuOpen] = React.useState(false);
  React.useEffect(() => {
    if (!menuOpen) return undefined;
    const onKey = (e) => { if (e.key === "Escape") setMenuOpen(false); };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = prev; };
  }, [menuOpen]);

  const telHref = phone ? "tel:" + phone.replace(/[^+\d]/g, "") : undefined;

  return (
    <React.Fragment>
    <header
      style={{
        position: sticky ? "sticky" : "static",
        top: 0,
        /* Över Leaflet-kartans egna lager (som når z-index 1000) — annars
           "försvinner" headern när kartan rullar under den. */
        zIndex: 1100,
        /* Solid marinblå överst, lätt genomskinlig med blur vid scroll. */
        background: scrolled ? "rgba(6,23,53,0.85)" : "var(--navy-900)",
        backdropFilter: scrolled ? "saturate(140%) blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "saturate(140%) blur(12px)" : "none",
        borderBottom: "var(--border-width-hair) solid rgba(239,198,92,0.18)",
        transition: "background var(--dur-base) var(--ease-out)"
      }}
    >
      <div
        className="ld-nav-inner"
        style={{
          maxWidth: "var(--container)",
          margin: "0 auto",
          padding: "var(--space-4) var(--gutter)",
          display: "flex",
          alignItems: "center",
          gap: "var(--space-5)"
        }}
      >
        <a href="#top" style={{ display: "flex", alignItems: "center", flex: "0 0 auto" }}>
          {logoSrc ? <img className="ld-nav-logo" src={logoSrc} alt="Lam-Dee Chiangrai" style={{ height: logoHeight, width: "auto" }} /> : null}
        </a>

        <nav className="ld-navlinks" style={{ flex: 1, display: "flex", gap: "var(--space-6)", justifyContent: "flex-end", alignItems: "center" }}>
          {links.map((l) => {
            const active = l.href === activeHref;
            return (
              <a
                key={l.href}
                href={l.href}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-sm)",
                  fontWeight: "var(--weight-medium)",
                  letterSpacing: "0.01em",
                  color: active ? "var(--gold-300)" : "rgba(254,252,247,0.80)",
                  whiteSpace: "nowrap",
                  transition: "color var(--dur-fast) var(--ease-out)"
                }}
              >
                {l.label}
              </a>
            );
          })}
        </nav>

        {right ? <span className="ld-nav-right" style={{ display: "flex", alignItems: "center", flex: "0 0 auto" }}>{right}</span> : null}

        {phone ? (
          <Button
            className="ld-nav-cta"
            variant="primary"
            size="sm"
            icon="☎"
            aria-label={phoneLabel || phone}
            href={"tel:" + phone.replace(/[^+\d]/g, "")}
            style={{ flex: "0 0 auto" }}
          >
            {/* På mobil: emojin (ld-btn-icon) och numret döljs; en ren
               telefon-ikon i SVG visas istället. */}
            <svg className="ld-nav-cta-phone" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ display: "none" }}>
              <path d="M6.6 10.8a15.5 15.5 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24 11.4 11.4 0 0 0 3.6.58 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .58 3.6 1 1 0 0 1-.24 1L6.6 10.8Z" fill="currentColor"/>
            </svg>
            <span className="ld-cta-text">{phoneLabel || phone}</span>
          </Button>
        ) : null}

        {/* Hamburgare — visas bara på mobil (ersätter ring-ikonen). */}
        <button
          className="ld-nav-burger"
          aria-label="Öppna meny"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(true)}
          style={{ display: "none", alignItems: "center", justifyContent: "center", flex: "0 0 auto", width: 42, height: 38, padding: 0, background: "var(--gold-500)", border: "none", borderRadius: "var(--radius-btn, 11px)", cursor: "pointer", boxShadow: "0 1px 2px rgba(138,100,18,0.20)" }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M3 6.5h18M3 12h18M3 17.5h18" stroke="var(--navy-900)" strokeWidth="2.1" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </header>

    {/* Slöja + panel ligger som syskon till headern så headerns blur inte gör
       dem fixed-relativa. Panelen slidear in från höger. */}
    <div
      className="ld-nav-backdrop"
      aria-hidden="true"
      onClick={() => setMenuOpen(false)}
      style={{ position: "fixed", inset: 0, zIndex: 1200, background: "rgba(6,23,53,0.5)", backdropFilter: "blur(2px)", WebkitBackdropFilter: "blur(2px)", opacity: menuOpen ? 1 : 0, visibility: menuOpen ? "visible" : "hidden", transition: "opacity var(--dur-base) var(--ease-out), visibility var(--dur-base) var(--ease-out)" }}
    />
    <aside
      className="ld-nav-drawer"
      role="dialog"
      aria-modal="true"
      aria-label="Meny"
      style={{ position: "fixed", top: 0, right: 0, bottom: 0, zIndex: 1300, width: "min(82vw, 320px)", background: "var(--navy-900)", borderLeft: "var(--border-width-hair) solid rgba(239,198,92,0.18)", boxShadow: "-16px 0 44px rgba(6,23,53,0.45)", transform: menuOpen ? "translateX(0)" : "translateX(100%)", transition: "transform var(--dur-base) var(--ease-out)", display: "flex", flexDirection: "column", padding: "var(--space-5) var(--space-6) var(--space-8)" }}
    >
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <button
          aria-label="Stäng meny"
          onClick={() => setMenuOpen(false)}
          style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 40, height: 40, padding: 0, background: "transparent", border: "none", cursor: "pointer" }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" stroke="var(--cream-50)" strokeWidth="2.1" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      <nav style={{ display: "flex", flexDirection: "column", marginTop: "var(--space-2)" }}>
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setMenuOpen(false)}
            style={{ fontFamily: "var(--font-display)", fontWeight: "var(--weight-semibold)", fontSize: "var(--text-2xl)", letterSpacing: "-0.01em", color: "var(--cream-50)", textDecoration: "none", padding: "var(--space-4) 0", borderBottom: "var(--border-width-hair) solid rgba(254,252,247,0.10)" }}
          >
            {l.label}
          </a>
        ))}
      </nav>

      {phone ? (
        <div style={{ marginTop: "auto", paddingTop: "var(--space-8)", display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
          <Button variant="primary" size="lg" fullWidth href={telHref} onClick={() => setMenuOpen(false)}>
            {callLabel}
          </Button>
          <a href={telHref} onClick={() => setMenuOpen(false)} style={{ textAlign: "center", fontFamily: "var(--font-display)", fontWeight: "var(--weight-semibold)", fontSize: "var(--text-xl)", color: "var(--gold-400)", textDecoration: "none" }}>
            {phone}
          </a>
        </div>
      ) : null}
    </aside>
    </React.Fragment>
  );
}
