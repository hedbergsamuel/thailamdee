/* Omdömen: riktiga Google-omdömen, avskrivna och förkortade. Citaten står på
   svenska i båda språklägena — vi översätter inte någon annans ord. */
window.Reviews = function Reviews({ t, lang, data }) {
  const { Button } = window.LD_DS;
  const Reveal = window.Reveal;
  const Stars = window.Stars;
  const place = data.place;

  return (
    <section id="omdomen" className="ld-section" style={{ background: "var(--cream-100)", borderTop: "var(--border-width-hair) solid var(--border-on-light)" }}>
      <div style={{ maxWidth: "var(--container)", margin: "0 auto", padding: "0 var(--gutter)", display: "flex", flexDirection: "column", gap: "var(--space-10)" }}>
        <Reveal>
          <div style={{ display: "flex", gap: "var(--space-8)", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)", maxWidth: "30ch" }}>
              <span style={{ font: "var(--type-label)", letterSpacing: "var(--tracking-label)", textTransform: "uppercase", color: "var(--gold-700)" }}>
                {t.reviews.eyebrow}
              </span>
              <h2 style={{ fontSize: "clamp(26px, 3vw, 40px)", lineHeight: 1.08, letterSpacing: "-0.022em", color: "var(--navy-700)" }}>
                {t.reviews.title}
              </h2>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "var(--space-4)" }}>
              <span style={{ font: "var(--type-price)", fontSize: "clamp(38px, 4vw, 52px)", color: "var(--navy-700)", lineHeight: 1 }}>
                {lang === "sv" ? place.rating : place.ratingEn}
              </span>
              <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                <Stars value={5} size="var(--text-lg)" color="var(--gold-600)" />
                <span style={{ font: "var(--type-body)", fontWeight: "var(--weight-medium)", color: "var(--ink-700)" }}>
                  {place.reviewCount} {t.hero.ratingSuffix}
                </span>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="ld-reviews" style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "var(--space-4)" }}>
          {data.reviews.map((r, i) => (
            <Reveal key={r.author} delay={i * 90} style={{ display: "flex" }}>
              <figure
                style={{
                  margin: 0,
                  background: "var(--cream-50)",
                  border: "var(--border-width-hair) solid var(--border-on-light)",
                  borderRadius: "var(--radius-md)",
                  padding: "var(--space-8)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--space-4)",
                  width: "100%"
                }}
              >
                <Stars value={r.stars} size="var(--text-sm)" color="var(--gold-600)" />
                <blockquote style={{ margin: 0, fontFamily: "var(--font-display)", fontSize: "var(--text-xl)", lineHeight: 1.4, color: "var(--navy-700)", flex: 1 }}>
                  {"”" + r.text + "”"}
                </blockquote>
                <figcaption style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <span style={{ font: "var(--type-body)", fontWeight: "var(--weight-semibold)", color: "var(--ink-900)" }}>{r.author}</span>
                  <span style={{ font: "var(--type-body-sm)", color: "var(--ink-500)" }}>{lang === "sv" ? r.when : r.whenEn}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button variant="onLightGhost" size="md" href={place.mapsUrl}>{t.reviews.link}</Button>
        </div>
      </div>
    </section>
  );
};
