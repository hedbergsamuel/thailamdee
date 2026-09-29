/* Vår mat: sidans enda mörka mittsektion. Bryter rytmen mellan meny och bilder
   och är där verksamheten får berätta hur maten lagas. */
window.About = function About({ t }) {
  const PhotoSlot = window.PhotoSlot;
  const Reveal = window.Reveal;
  return (
    <section id="om" className="ld-section" style={{ background: "var(--navy-800)" }}>
      <div style={{ maxWidth: "var(--container)", margin: "0 auto", padding: "0 var(--gutter)" }}>
        <div className="ld-about-grid" style={{ display: "grid", gridTemplateColumns: "minmax(0, 0.82fr) minmax(0, 1fr)", gap: "clamp(32px, 5vw, 80px)", alignItems: "center" }}>
          <div className="ld-about-photo">
            <Reveal>
              <PhotoSlot tone="dark" label={t.about.imageLabel} alt={t.about.imageLabel} src="tinified/pad-kapao.webp" ratio="4 / 5" />
            </Reveal>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
            <span style={{ font: "var(--type-label)", letterSpacing: "var(--tracking-label)", textTransform: "uppercase", color: "var(--gold-400)" }}>
              {t.about.eyebrow}
            </span>

            <h2 style={{ fontSize: "clamp(24px, 2.8vw, 38px)", lineHeight: 1.1, letterSpacing: "-0.02em", color: "var(--cream-50)" }}>
              {t.about.title}
            </h2>

            <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-lg)", lineHeight: 1.6, color: "rgba(254,252,247,0.9)", maxWidth: "52ch" }}>
              {t.about.lead}
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 0, marginTop: "var(--space-2)" }}>
              {t.about.points.map((p, i) => (
                <div
                  key={p.t}
                  style={{
                    display: "flex",
                    gap: "var(--space-5)",
                    alignItems: "baseline",
                    padding: "var(--space-5) 0",
                    borderTop: i === 0 ? "none" : "var(--border-width-hair) solid var(--border-hairline)"
                  }}
                >
                  <span style={{ font: "var(--type-price)", fontSize: "var(--text-base)", color: "var(--gold-400)", flex: "0 0 auto", minWidth: "1.4em" }}>
                    {"0" + (i + 1)}
                  </span>
                  <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                    <h3 style={{ font: "var(--type-h3)", fontSize: "var(--text-xl)", letterSpacing: "var(--tracking-normal)", color: "var(--cream-50)" }}>{p.t}</h3>
                    <p style={{ fontFamily: "var(--font-body)", lineHeight: 1.55, color: "rgba(254,252,247,0.82)", maxWidth: "48ch" }}>{p.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
