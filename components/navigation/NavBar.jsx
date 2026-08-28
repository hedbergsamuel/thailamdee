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

  return (
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
      </div>
    </header>
  );
}
