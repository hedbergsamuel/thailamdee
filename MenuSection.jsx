/* Menyn: sticky filterrail till vänster, matsedeln som krämfärgat papper till
   höger. Filtrerade rätter gråas ut, tas inte bort. */
window.MenuSection = function MenuSection({ t, lang, data }) {
  const { CategoryTabs, MenuItem, Switch, Notice, Badge } = window.LD_DS;
  const [cat, setCat] = React.useState("all");
  const [onlyGf, setOnlyGf] = React.useState(false);

  const inCat = (d) => cat === "all" || d.cat === cat;
  const visible = data.dishes.filter(inCat);
  const shown = visible.filter((d) => !onlyGf || d.gf);

  const counts = data.categories.reduce((acc, c) => {
    acc[c.value] = data.dishes.filter((d) => c.value === "all" || d.cat === c.value).filter((d) => !onlyGf || d.gf).length;
    return acc;
  }, {});

  const badgesFor = (d) => {
    const out = [];
    if (d.gf) out.push({ label: d.gfPartial ? t.menu.gfStar : t.menu.gf, tone: "leaf" });
    if (d.chef) out.push({ label: t.menu.chef, tone: "gold" });
    if (d.kids) out.push({ label: t.menu.kids, tone: "navy" });
    return out;
  };

  return (
    <section id="meny" className="ld-section" style={{ background: "var(--cream-100)" }}>
      <div style={{ maxWidth: "var(--container)", margin: "0 auto", padding: "0 var(--gutter)", display: "flex", flexDirection: "column", gap: "var(--space-10)" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)", maxWidth: "44ch" }}>
          <span style={{ font: "var(--type-label)", letterSpacing: "var(--tracking-label)", textTransform: "uppercase", color: "var(--gold-700)" }}>
            {t.menu.eyebrow}
          </span>
          <h2 style={{ fontSize: "clamp(26px, 3vw, 42px)", lineHeight: 1.08, letterSpacing: "-0.022em", color: "var(--navy-700)" }}>
            {t.menu.title}
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-lg)", fontWeight: "var(--weight-medium)", lineHeight: 1.55, color: "var(--ink-700)" }}>
            {t.menu.lead}
          </p>
        </div>

        <div className="ld-menu-grid" style={{ display: "grid", gridTemplateColumns: "minmax(0, 250px) minmax(0, 1fr)", gap: "var(--space-10)", alignItems: "start" }}>
          <aside className="ld-menu-rail" style={{ position: "sticky", top: 92, display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
            <span style={{ font: "var(--type-label)", letterSpacing: "var(--tracking-label)", textTransform: "uppercase", color: "var(--gold-700)" }}>
              {t.menu.filterEyebrow}
            </span>

            <CategoryTabs
              onLight
              orientation="vertical"
              items={data.categories.map((c) => ({ value: c.value, label: c[lang] }))}
              value={cat}
              onChange={setCat}
              counts={counts}
            />

            <div style={{ height: 1, background: "var(--border-on-light)" }} />

            <Switch onLight label={t.menu.onlyGf} checked={onlyGf} onChange={setOnlyGf} />

            <span style={{ font: "var(--type-body)", fontSize: "var(--text-sm)", color: "var(--ink-500)" }}>
              {t.menu.showing(shown.length, data.dishes.length)}
            </span>
          </aside>

          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
            <div
              style={{
                background: "var(--cream-50)",
                border: "var(--border-width-hair) solid var(--border-on-light)",
                borderRadius: "var(--radius-md)",
                boxShadow: "var(--shadow-sm)",
                padding: "var(--space-4) clamp(20px, 3vw, 40px) var(--space-6)"
              }}
            >
              {visible.map((d) => (
                <MenuItem
                  key={d.n}
                  onLight
                  number={d.n}
                  name={(lang === "sv" ? d.name : d.nameEn) + ((lang === "sv" ? d.note : d.noteEn) ? " (" + (lang === "sv" ? d.note : d.noteEn) + ")" : "")}
                  ingredients={lang === "sv" ? d.ing : d.ingEn}
                  badges={badgesFor(d)}
                  prices={lang === "sv" ? d.prices : d.pricesEn}
                  dimmed={onlyGf && !d.gf}
                  footnote={onlyGf && !d.gf ? t.menu.dimmedNote : null}
                />
              ))}

              <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-3)", alignItems: "baseline", paddingTop: "var(--space-6)" }}>
                <span style={{ font: "var(--type-label)", letterSpacing: "var(--tracking-label)", textTransform: "uppercase", color: "var(--gold-700)" }}>
                  {t.menu.extrasLabel}
                </span>
                <span style={{ fontFamily: "var(--font-body)", color: "var(--ink-700)" }}>{t.menu.extras}</span>
              </div>
            </div>

            <Notice tone="gluten" label={t.menu.gf}>{t.menu.glutenNote}</Notice>
          </div>
        </div>
      </div>
    </section>
  );
};
