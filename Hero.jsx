/* Hero: helbildsfoto med ett tätt textblock nere till vänster. Statusrad,
   ögonbryn, tvåradig rubrik (andra raden i guldkursiv), kort ingress, två
   knappar och ett kompakt betyg. Ingen text konkurrerar med vagnen till höger. */
window.Hero = function Hero({ t, lang, place, openState }) {
  const { Button } = window.LD_DS;
  const Stars = window.Stars;
  const rating = lang === "sv" ? place.rating : place.ratingEn;

  return (
    <section
      id="top"
      className="ld-hero"
      style={{
        position: "relative",
        display: "flex",
        alignItems: "flex-end",
        overflow: "hidden",
        background: "var(--navy-900)"
      }}
    >
      <img
        src="assets/hero-local.jpg"
        alt="Lam-Dee thaivagn vid Rotvik utanför Uddevalla en solig sommardag"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "64% 50%" }}
      />
      {/* Vänsterslöja för läsbarhet — fotot ska lysa igenom, men texten nere
         till vänster ligger mot ljust grus/bord, så vänster- och bottenslöjan
         bär tillräckligt med kontrast. Vagnen till höger lämnas nästan ifred. */}
      <div className="ld-hero-scrim-l" style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(6,23,53,0.7) 0%, rgba(6,23,53,0.42) 34%, rgba(6,23,53,0.1) 62%, rgba(6,23,53,0) 84%)" }} />
      <div className="ld-hero-scrim-b" style={{ position: "absolute", inset: 0, background: "linear-gradient(0deg, rgba(6,23,53,0.62) 0%, rgba(6,23,53,0.24) 30%, rgba(6,23,53,0) 55%)" }} />

      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "var(--container)",
          margin: "0 auto",
          padding: "clamp(28px, 5vw, 56px) var(--gutter) clamp(44px, 6.5vw, 76px)"
        }}
      >
        <div className="ld-hero-content" style={{ maxWidth: 560, display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
            <span aria-hidden="true" style={{ width: 8, height: 8, borderRadius: "50%", flex: "0 0 auto", background: openState.open ? "#5BBE7A" : "rgba(254,252,247,0.5)", boxShadow: openState.open ? "0 0 0 3px rgba(91,190,122,0.22)" : "none" }} />
            <span style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-sm)", fontWeight: "var(--weight-semibold)", color: "var(--cream-50)" }}>
              {openState.open ? t.hero.openNow : t.hero.closedNow}
            </span>
            <span style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-sm)", color: "rgba(254,252,247,0.68)" }}>· {openState.label}</span>
          </div>

          <span style={{ font: "var(--type-label)", fontSize: "var(--text-2xs)", letterSpacing: "var(--tracking-label)", textTransform: "uppercase", color: "var(--gold-300)" }}>
            {t.hero.eyebrow}
          </span>

          <h1
            className="ld-hero-title"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: "var(--weight-semibold)",
              fontSize: "clamp(30px, 3.8vw, 47px)",
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
              color: "var(--cream-50)",
              margin: 0,
              textShadow: "0 1px 2px rgba(6,23,53,0.55), 0 2px 22px rgba(6,23,53,0.6)"
            }}
          >
            <span style={{ display: "block" }}>{t.hero.titleTop}</span>
            <span style={{ display: "block", fontStyle: "italic", fontWeight: "var(--weight-medium)", color: "var(--gold-300)" }}>{t.hero.titleBottom}.</span>
          </h1>

          <p
            className="ld-hero-lead"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-base)",
              lineHeight: 1.55,
              color: "rgba(254,252,247,0.92)",
              maxWidth: "42ch",
              textShadow: "0 1px 2px rgba(6,23,53,0.6), 0 1px 16px rgba(6,23,53,0.55)"
            }}
          >
            {t.hero.lead}
          </p>

          <div style={{ display: "flex", gap: "var(--space-3)", flexWrap: "wrap", alignItems: "center", marginTop: "var(--space-1)" }}>
            <Button variant="primary" size="md" icon="☎" href={place.phoneHref}>{t.hero.cta}</Button>
            <Button
              variant="secondary"
              size="md"
              href="#meny"
              style={{ background: "rgba(6,23,53,0.5)", backdropFilter: "blur(4px)", color: "var(--cream-50)", borderColor: "rgba(254,252,247,0.32)" }}
            >
              {t.hero.ctaSecondary}
              <span aria-hidden="true" style={{ marginLeft: 2 }}>→</span>
            </Button>
          </div>

          <a href="#omdomen" style={{ display: "inline-flex", alignItems: "center", gap: "var(--space-2)", marginTop: "var(--space-2)", textDecoration: "none", alignSelf: "flex-start" }}>
            <Stars value={5} size="var(--text-sm)" color="var(--gold-400)" />
            <span style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-sm)", color: "var(--cream-50)" }}>
              <strong style={{ fontWeight: "var(--weight-semibold)" }}>{rating}</strong>
              <span style={{ color: "rgba(254,252,247,0.68)", marginLeft: 6 }}>{place.reviewCount} {t.hero.ratingSuffix}</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};
