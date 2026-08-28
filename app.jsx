/* Sidans komposition. Rytmen är avsiktlig: helbilds-hero → favoriter → meny →
   om oss (mörk) → galleri → kompakt kontaktband (mörkt) → omdömen → hitta hit →
   öppettider → fot. Navigationen pekar på tre tydliga mål: Meny, Om oss, Hitta hit. */
function LamDeeSite() {
  const DATA = window.LD_DATA;
  const COPY = window.LD_COPY;
  const { NavBar, LangToggle } = window.LD_DS;
  const [lang, setLang] = React.useState("sv");
  const t = COPY[lang];

  // Tis–fre 11–20, lördag 11–18, söndag och måndag stängt.
  const os = (function () {
    const now = new Date();
    const table = { 2: [660, 1200], 3: [660, 1200], 4: [660, 1200], 5: [660, 1200], 6: [660, 1080] };
    const today = table[now.getDay()];
    const fmt = (m) => String(Math.floor(m / 60)).padStart(2, "0") + "." + String(m % 60).padStart(2, "0");
    if (!today) {
      return {
        open: false,
        time: lang === "sv" ? "Stängt" : "Closed",
        label: lang === "sv" ? "Söndag och måndag är vagnen stängd" : "Closed Sunday and Monday"
      };
    }
    const mins = now.getHours() * 60 + now.getMinutes();
    const span = fmt(today[0]) + "–" + fmt(today[1]);
    return { open: mins >= today[0] && mins < today[1], time: span, label: t.hero.todayPrefix + " " + span };
  })();

  // Kompakt kontaktband — egen sektion en bit ner, inte fastklistrad under hero.
  const bandLabel = { font: "var(--type-label)", fontSize: "var(--text-2xs)", letterSpacing: "var(--tracking-label)", textTransform: "uppercase", color: "var(--gold-400)" };
  const bandValue = { fontFamily: "var(--font-display)", fontWeight: "var(--weight-semibold)", fontSize: "clamp(20px, 1.8vw, 24px)", lineHeight: 1.15, letterSpacing: "-0.01em", color: "var(--cream-50)", textDecoration: "none" };
  const bandSub = { fontFamily: "var(--font-body)", fontSize: "var(--text-sm)", lineHeight: 1.4, color: "rgba(254,252,247,0.66)" };
  const closedWord = t.hours.closed.toLowerCase();

  const contactBand = (
    <section id="kontakt" className="ld-section" style={{ background: "var(--navy-800)", borderTop: "var(--border-width-hair) solid var(--border-hairline)", borderBottom: "var(--border-width-hair) solid var(--border-hairline)" }}>
      <div style={{ maxWidth: "var(--container)", margin: "0 auto", padding: "0 var(--gutter)" }}>
        <div className="ld-infoband" style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
          <div className="ld-band-item">
            <span style={bandLabel}><span className="ld-phone-emoji" aria-hidden="true">☎ </span>{t.quick.callLabel}</span>
            <a href={DATA.place.phoneHref} style={{ ...bandValue, whiteSpace: "nowrap" }}>{DATA.place.phone}</a>
            <span style={bandSub}>{t.quick.waitValue} · {t.quick.orderKicker}</span>
          </div>
          <div className="ld-band-item">
            <span style={bandLabel}>{t.hours.eyebrow}</span>
            <span style={bandValue}>{os.open ? t.hero.openNow : t.hours.closed} · {os.time}</span>
            <span style={bandSub}>Tis–fre 11–20 · Lör 11–18 · Sön–mån {closedWord}</span>
          </div>
          <div className="ld-band-item">
            <span style={bandLabel}>{t.find.eyebrow}</span>
            <span style={bandValue}>{DATA.place.address}</span>
            <a href="#hitta" style={{ ...bandSub, color: "var(--gold-300)", textDecoration: "none" }}>{t.find.directions} →</a>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <React.Fragment>
      <NavBar
        brand={null}
        logoSrc="assets/logo-sign.png"
        logoHeight={34}
        links={[
          { href: "#meny", label: t.nav.menu },
          { href: "#om", label: t.nav.food },
          { href: "#hitta", label: t.nav.find }
        ]}
        phone={DATA.place.phone}
        right={<LangToggle value={lang} onChange={setLang} />}
      />
      <main>
        {React.createElement(window.Hero, { t, lang, place: DATA.place, openState: os })}
        {React.createElement(window.Featured, { t, lang, data: DATA })}
        {React.createElement(window.MenuSection, { t, lang, data: DATA })}
        {React.createElement(window.About, { t })}
        {React.createElement(window.Gallery, { t })}
        {contactBand}
        {React.createElement(window.Reviews, { t, lang, data: DATA })}
        {React.createElement(window.FindUs, { t, data: DATA })}
        {React.createElement(window.HoursBand, { t, lang, data: DATA, openState: os })}
      </main>
      {React.createElement(window.SiteFooter, { t, data: DATA })}
    </React.Fragment>
  );
}

window.LamDeeSite = LamDeeSite;
ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(LamDeeSite));
