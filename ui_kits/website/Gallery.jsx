/* Galleri: sex bildplatser i asymmetrisk mosaik. Sidan ska se art directad ut
   redan innan fotona finns. */
window.Gallery = function Gallery({ t }) {
  const PhotoSlot = window.PhotoSlot;
  const Reveal = window.Reveal;
  const spans = [
    { col: "span 2", row: "span 2" },
    { col: "span 2", row: "span 1" },
    { col: "span 1", row: "span 1" },
    { col: "span 1", row: "span 1" },
    { col: "span 2", row: "span 1" },
    { col: "span 2", row: "span 1" }
  ];

  // Riktiga foton (från /tinified), i samma ordning som gallery.slots i copy.
  const photos = [
    "../../tinified/7.webp",        // Friterad kyckling (stor ruta)
    "../../tinified/5.webp",        // Vårrullar
    "../../tinified/unnamed1.webp", // Kycklingspett
    "../../tinified/4.webp",        // Cashewnötter
    "../../tinified/6.webp",        // Röd curry
    "../../tinified/unnamed.webp"   // Grön curry
  ];

  return (
    <section id="bilder" className="ld-section" style={{ background: "var(--cream-50)" }}>
      <div style={{ maxWidth: "var(--container)", margin: "0 auto", padding: "0 var(--gutter)", display: "flex", flexDirection: "column", gap: "var(--space-10)" }}>
        <div style={{ display: "flex", gap: "var(--space-8)", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)", maxWidth: "30ch" }}>
            <span style={{ font: "var(--type-label)", letterSpacing: "var(--tracking-label)", textTransform: "uppercase", color: "var(--gold-700)" }}>
              {t.gallery.eyebrow}
            </span>
            <h2 style={{ fontSize: "clamp(26px, 3vw, 42px)", lineHeight: 1.08, letterSpacing: "-0.022em", color: "var(--navy-700)" }}>
              {t.gallery.title}
            </h2>
          </div>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-lg)", fontWeight: "var(--weight-medium)", lineHeight: 1.55, color: "var(--ink-700)", maxWidth: "36ch" }}>
            {t.gallery.lead}
          </p>
        </div>

        <div className="ld-gallery" style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gridAutoRows: "clamp(150px, 17vw, 210px)", gap: "var(--space-4)" }}>
          {t.gallery.slots.map((label, i) => (
            <Reveal key={label} delay={i * 70} style={{ gridColumn: spans[i].col, gridRow: spans[i].row }}>
              <PhotoSlot label={label} alt={label} src={photos[i]} style={{ height: "100%" }} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
