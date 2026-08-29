/* Hitta hit: riktig OpenStreetMap-karta över Rotviksbro, adress och telefon.
   Ljus sektion — kartan är ljus, så kortet ska vara det också. */
window.FindUs = function FindUs({ t, data }) {
  const { Button } = window.LD_DS;
  const ref = React.useRef(null);
  const place = data.place;

  React.useEffect(() => {
    const el = ref.current;
    if (!el || el.dataset.ready) return undefined;

    // Ladda Leaflet (CSS + JS) en gång, lazy — inte i sidhuvudet.
    const loadLeaflet = () => {
      if (window.__leafletLoad) return window.__leafletLoad;
      window.__leafletLoad = new Promise((resolve) => {
        const css = document.createElement("link");
        css.rel = "stylesheet";
        css.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
        document.head.appendChild(css);
        const js = document.createElement("script");
        js.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
        js.async = true;
        js.onload = () => resolve(window.L);
        document.head.appendChild(js);
      });
      return window.__leafletLoad;
    };

    const init = (L) => {
      if (!L || el.dataset.ready) return;
      el.dataset.ready = "1";
      const map = L.map(el, { scrollWheelZoom: false, attributionControl: true }).setView([place.lat, place.lon], 13);
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", { maxZoom: 18, attribution: "&copy; OpenStreetMap" }).addTo(map);
      const icon = L.divIcon({
        className: "",
        html: '<div style="width:24px;height:24px;border-radius:50%;background:#D6A22E;border:3px solid #081F52;box-shadow:0 2px 10px rgba(6,23,53,.45)"></div>',
        iconSize: [24, 24],
        iconAnchor: [12, 12]
      });
      L.marker([place.lat, place.lon], { icon }).addTo(map).bindPopup("Lam-Dee · " + place.address);
    };

    // Init först när kartan är nära vyn — sparar ~150 kB på första laddningen.
    const obs = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) {
        obs.disconnect();
        loadLeaflet().then(init);
      }
    }, { rootMargin: "300px" });
    obs.observe(el);
    return () => obs.disconnect();
  }, [place.lat, place.lon, place.address]);

  const card = {
    background: "var(--cream-50)",
    border: "var(--border-width-hair) solid var(--border-on-light)",
    borderRadius: "var(--radius-md)",
    padding: "var(--space-6)",
    display: "flex",
    flexDirection: "column",
    gap: "var(--space-3)"
  };
  const label = { font: "var(--type-label)", letterSpacing: "var(--tracking-label)", textTransform: "uppercase", color: "var(--gold-700)" };

  return (
    <section id="hitta" className="ld-section" style={{ background: "var(--cream-200)" }}>
      <div style={{ maxWidth: "var(--container)", margin: "0 auto", padding: "0 var(--gutter)", display: "flex", flexDirection: "column", gap: "var(--space-10)" }}>
        <div style={{ display: "flex", gap: "var(--space-8)", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)", maxWidth: "30ch" }}>
            <span style={label}>{t.find.eyebrow}</span>
            <h2 style={{ fontSize: "clamp(26px, 3vw, 42px)", lineHeight: 1.08, letterSpacing: "-0.022em", color: "var(--navy-700)" }}>
              {t.find.title}
            </h2>
          </div>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-lg)", fontWeight: "var(--weight-medium)", lineHeight: 1.55, color: "var(--ink-700)", maxWidth: "40ch" }}>
            {t.find.lead}
          </p>
        </div>

        <div className="ld-find-grid" style={{ display: "grid", gridTemplateColumns: "minmax(0, 1.4fr) minmax(280px, 1fr)", gap: "var(--space-6)", alignItems: "stretch" }}>
          <div style={{ position: "relative", minHeight: 420, borderRadius: "var(--radius-lg)", overflow: "hidden", border: "var(--border-width-hair) solid var(--border-on-light)", background: "var(--cream-100)" }}>
            <div ref={ref} style={{ position: "absolute", inset: 0 }} />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
            <div style={card}>
              <span style={label}>{t.find.addressLabel}</span>
              <span style={{ font: "var(--type-h3)", fontSize: "var(--text-xl)", color: "var(--navy-700)", letterSpacing: "var(--tracking-normal)" }}>{place.address}</span>
              <span style={{ fontFamily: "var(--font-body)", color: "var(--ink-700)" }}>{place.addressLine2}</span>
              <div style={{ marginTop: "var(--space-2)" }}>
                <Button variant="onLightGhost" size="md" href={"https://www.google.com/maps/dir/?api=1&destination=" + place.lat + "," + place.lon}>
                  {t.find.directions}
                </Button>
              </div>
            </div>

            <div style={{ ...card, background: "var(--navy-800)", border: "var(--border-width-hair) solid var(--navy-800)", flex: 1, justifyContent: "center" }}>
              <span style={{ ...label, color: "var(--gold-400)" }}>{t.find.phoneLabel}</span>
              <a href={place.phoneHref} style={{ fontFamily: "var(--font-display)", fontWeight: "var(--weight-semibold)", fontSize: "clamp(26px, 3vw, 36px)", color: "var(--cream-50)", letterSpacing: "-0.01em", whiteSpace: "nowrap" }}>
                {place.phone}
              </a>
              <span style={{ font: "var(--type-body)", fontSize: "var(--text-sm)", color: "rgba(254,252,247,0.82)" }}>{t.quick.howValue}</span>
              <div style={{ marginTop: "var(--space-2)" }}>
                <Button variant="primary" size="lg" fullWidth icon="☎" href={place.phoneHref}>{t.hero.cta}</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
