/* Foten: skylten i full storlek, telefonen stor, resten litet. Sista elefanten
   på sidan sitter i logotypen. */
window.SiteFooter = function SiteFooter({ t, data }) {
  const Reveal = window.Reveal;
  const place = data.place;
  const label = { font: "var(--type-label)", letterSpacing: "var(--tracking-label)", textTransform: "uppercase", color: "var(--gold-400)" };

  return (
    <footer style={{ background: "var(--navy-900)", borderTop: "var(--border-width-hair) solid var(--border-hairline)", padding: "var(--space-16) 0 var(--space-8)" }}>
      <div style={{ maxWidth: "var(--container)", margin: "0 auto", padding: "0 var(--gutter)", display: "flex", flexDirection: "column", gap: "var(--space-10)" }}>
        <Reveal><div className="ld-foot-top" style={{ display: "flex", gap: "var(--space-10)", flexWrap: "wrap", alignItems: "flex-start", justifyContent: "space-between" }}>
          <div className="ld-foot-brand" style={{ display: "flex", gap: "var(--space-5)", alignItems: "center", minWidth: 0 }}>
            <img src="assets/logo-sign.png" alt="" aria-hidden="true" style={{ height: 64, width: "auto", flex: "0 0 auto" }} />
            <div style={{ display: "flex", flexDirection: "column", gap: 5, minWidth: 0 }}>
              <span style={{ font: "var(--type-h3)", fontSize: "var(--text-xl)", color: "var(--cream-50)" }}>{t.footer.rights}</span>
              <span style={{ font: "var(--type-body-sm)", color: "var(--text-muted)" }}>{place.address} · {place.domain}</span>
            </div>
          </div>

          {(() => {
            // Rendera bara sociala länkar som faktiskt är ifyllda — en <a href="#">
            // är en trasig länk för både besökare och crawlers.
            const socials = [
              { label: "Facebook", href: place.facebook },
              { label: "Instagram", href: place.instagram }
            ].filter((s) => s.href && s.href !== "#");
            if (!socials.length) return null;
            return (
              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
                <span style={label}>{t.footer.follow}</span>
                <div style={{ display: "flex", gap: "var(--space-5)" }}>
                  {socials.map((s) => (
                    <a key={s.label} href={s.href} rel="noopener" style={{ font: "var(--type-body)", color: "var(--cream-50)", textDecoration: "none", borderBottom: "1px solid rgba(239,198,92,0.4)", paddingBottom: 2 }}>{s.label}</a>
                  ))}
                </div>
              </div>
            );
          })()}

          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)", alignItems: "flex-start" }}>
            <span style={label}>{t.find.phoneLabel}</span>
            <a href={place.phoneHref} style={{ fontFamily: "var(--font-display)", fontWeight: "var(--weight-semibold)", fontSize: "var(--text-3xl)", color: "var(--gold-400)", letterSpacing: "-0.01em", whiteSpace: "nowrap" }}>
              {place.phone}
            </a>
          </div>
        </div></Reveal>

        <div style={{ display: "flex", gap: "var(--space-6)", flexWrap: "wrap", justifyContent: "space-between", paddingTop: "var(--space-6)", borderTop: "var(--border-width-hair) solid var(--border-hairline)" }}>
          <span style={{ font: "var(--type-body-sm)", color: "var(--text-muted)" }}>{t.footer.built}</span>
          <span style={{ font: "var(--type-body-sm)", color: "var(--text-muted)" }}>{t.find.mapNote}</span>
        </div>
      </div>
    </footer>
  );
};
