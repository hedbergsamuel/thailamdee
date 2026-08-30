/* Öppettidsband: egen sektion, inte ett kort i marginalen. Stängda dagar skrivs
   ut — gästen ska aldrig behöva gissa. */
window.HoursBand = function HoursBand({ t, lang, data, openState }) {
  const { Badge } = window.LD_DS;
  const Reveal = window.Reveal;
  const rows = data.hours.map((h) => ({
    day: lang === "sv" ? h.sv : h.en,
    time: h.closed ? (lang === "sv" ? h.timeSv : h.timeEn) : h.time,
    closed: h.closed
  }));

  return (
    <section id="oppettider" style={{ background: "var(--navy-800)", padding: "var(--space-20) 0" }}>
      <div style={{ maxWidth: "var(--container)", margin: "0 auto", padding: "0 var(--gutter)" }}>
        <div className="ld-hours-grid" style={{ display: "grid", gridTemplateColumns: "minmax(0, 0.85fr) minmax(0, 1.15fr)", gap: "clamp(32px, 5vw, 80px)", alignItems: "start" }}>
          <Reveal>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
              <span style={{ font: "var(--type-label)", letterSpacing: "var(--tracking-label)", textTransform: "uppercase", color: "var(--gold-400)" }}>
                {t.hours.eyebrow}
              </span>
              <h2 style={{ fontSize: "clamp(24px, 2.8vw, 36px)", lineHeight: 1.1, letterSpacing: "-0.02em", color: "var(--cream-50)" }}>
                {t.hours.title}
              </h2>
              <p style={{ fontFamily: "var(--font-body)", lineHeight: 1.55, color: "rgba(254,252,247,0.84)", maxWidth: "38ch" }}>{t.hours.lead}</p>
              <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)", flexWrap: "wrap", marginTop: "var(--space-2)" }}>
                <Badge tone={openState.open ? "gold" : "quiet"}>{openState.open ? t.hero.openNow : t.hero.closedNow}</Badge>
                <span style={{ font: "var(--type-body-sm)", color: "rgba(254,252,247,0.72)" }}>{openState.label}</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={110}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {rows.map((r, i) => (
              <div
                key={r.day}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  gap: "var(--space-6)",
                  padding: "var(--space-5) 0",
                  borderTop: i === 0 ? "none" : "var(--border-width-hair) solid var(--border-hairline)"
                }}
              >
                <span style={{ font: "var(--type-body)", fontSize: "var(--text-lg)", color: r.closed ? "rgba(254,252,247,0.5)" : "var(--cream-50)" }}>{r.day}</span>
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: "var(--weight-semibold)",
                    fontSize: "clamp(20px, 2.2vw, 28px)",
                    letterSpacing: "-0.01em",
                    color: r.closed ? "rgba(254,252,247,0.45)" : "var(--gold-400)",
                    whiteSpace: "nowrap"
                  }}
                >
                  {r.time}
                </span>
              </div>
            ))}
          </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
