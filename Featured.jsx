/* Favoriter från woken: fyra kockens-val innan hela menyn. Maten har huvudrollen,
   priset står som "från"-pris eftersom det följer proteinet. */
window.Featured = function Featured({ t, lang, data }) {
  const { Badge, Button } = window.LD_DS;
  const PhotoSlot = window.PhotoSlot;
  const Reveal = window.Reveal;

  const order = [12, 10, 11, 5];
  const dishes = order.map((n) => data.dishes.find((d) => d.n === n)).filter(Boolean);

  // Riktiga foton per rätt (från /tinified).
  const dishPhoto = {
    12: "tinified/9.webp",       // Pad Thai
    10: "tinified/6.webp",       // Röd curry
    11: "tinified/unnamed.webp", // Grön curry
    5: "tinified/4.webp"         // Cashewnötter
  };

  const fromPrice = (d) => {
    const min = Math.min.apply(null, d.prices.map((p) => parseInt(p.price, 10)));
    return t.featured.from + " " + (lang === "sv" ? min + " kr" : min + " SEK");
  };

  const DishCard = function DishCard({ d, wide }) {
    const [hover, setHover] = React.useState(false);    const name = lang === "sv" ? d.name : d.nameEn;
    const note = lang === "sv" ? d.note : d.noteEn;
    return (
      <a
        href="#meny"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className={wide ? "ld-feature-card" : undefined}
        style={{
          display: wide ? "grid" : "flex",
          gridTemplateColumns: wide ? "minmax(0, 1.02fr) minmax(0, 1fr)" : undefined,
          flexDirection: wide ? undefined : "column",
          gridColumn: wide ? "span 3" : undefined,
          background: "var(--cream-50)",
          border: "var(--border-width-hair) solid " + (hover ? "rgba(12,44,116,0.34)" : "var(--border-on-light)"),
          borderRadius: "var(--radius-md)",
          overflow: "hidden",
          boxShadow: hover ? "var(--shadow-md)" : "var(--shadow-sm)",
          transform: hover ? "translateY(-3px)" : "none",
          color: "var(--navy-700)",
          transition: "border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)"
        }}
      >
        <PhotoSlot
          label={name}
          alt={name}
          src={dishPhoto[d.n]}
          ratio={wide ? undefined : "4 / 3"}
          minHeight={wide ? 360 : undefined}
          style={{ borderRadius: 0, border: "none", borderRight: wide ? "var(--border-width-hair) dashed rgba(176,133,31,0.45)" : "none", borderBottom: wide ? "none" : "var(--border-width-hair) dashed rgba(176,133,31,0.45)" }}
        />

        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)", padding: wide ? "var(--space-10)" : "var(--space-6)", justifyContent: "center" }}>
          <div style={{ display: "flex", gap: "var(--space-2)", flexWrap: "wrap" }}>
            <Badge tone="gold">{t.menu.chef}</Badge>
            {d.gf ? <Badge tone="leaf">{d.gfPartial ? t.menu.gfStar : t.menu.gf}</Badge> : null}
          </div>

          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: "var(--weight-semibold)",
              fontSize: wide ? "clamp(24px, 2.4vw, 34px)" : "var(--text-2xl)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "var(--navy-700)"
            }}
          >
            {name}
            {note ? <span style={{ fontStyle: "italic", fontWeight: "var(--weight-regular)", color: "var(--ink-500)" }}> — {note.toLowerCase()}</span> : null}
          </h3>

          <p style={{ fontFamily: "var(--font-body)", fontSize: wide ? "var(--text-lg)" : "var(--text-base)", lineHeight: 1.55, color: "var(--ink-700)", maxWidth: "42ch" }}>
            {t.featured.dishes[d.n]}
          </p>

          <span style={{ font: "var(--type-price)", fontSize: wide ? "var(--text-2xl)" : "var(--text-xl)", color: "var(--navy-700)", marginTop: "var(--space-1)" }}>
            {fromPrice(d)}
          </span>
        </div>
      </a>
    );
  };

  return (
    <section id="favoriter" className="ld-section" style={{ background: "var(--cream-50)" }}>
      <div style={{ maxWidth: "var(--container)", margin: "0 auto", padding: "0 var(--gutter)", display: "flex", flexDirection: "column", gap: "var(--space-10)" }}>
        <Reveal>
          <div style={{ display: "flex", gap: "var(--space-8)", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)", maxWidth: "30ch" }}>
              <span style={{ font: "var(--type-label)", letterSpacing: "var(--tracking-label)", textTransform: "uppercase", color: "var(--gold-700)" }}>
                {t.featured.eyebrow}
              </span>
              <h2 style={{ fontSize: "clamp(26px, 3vw, 42px)", lineHeight: 1.08, letterSpacing: "-0.022em", color: "var(--navy-700)" }}>
                {t.featured.title}
              </h2>
            </div>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-lg)", fontWeight: "var(--weight-medium)", lineHeight: 1.55, color: "var(--ink-700)", maxWidth: "40ch" }}>
              {t.featured.lead}
            </p>
          </div>
        </Reveal>

        <Reveal delay={60}>
          <div className="ld-featured-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "var(--space-6)" }}>
            {dishes.map((d, i) => (
              <DishCard key={d.n} d={d} wide={i === 0} />
            ))}
          </div>
        </Reveal>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button variant="onLightGhost" size="lg" href="#meny">{t.featured.all}</Button>
        </div>
      </div>
    </section>
  );
};
