/* Hämtar designsystemets komponenter.
   Använder den kompilerade bundlen om den finns; annars läses .jsx-källorna
   direkt och transpileras i webbläsaren, så att sidan alltid går att visa. */
window.LD_BOOT = (async function () {
  const need = ["Button", "Badge", "Card", "SectionHeading", "Ornament", "Checkbox", "Switch",
                "Input", "Select", "MenuItem", "CategoryTabs", "NavBar", "LangToggle", "Notice"];

  function fromBundle() {
    for (const k of Object.keys(window)) {
      try {
        const v = window[k];
        if (v && typeof v === "object" && need.every((n) => typeof v[n] === "function")) return v;
      } catch (e) { /* cross-origin frame etc. */ }
    }
    return null;
  }

  const SOURCES = [
    "components/core/Button.jsx",
    "components/core/Badge.jsx",
    "components/core/Card.jsx",
    "components/core/Ornament.jsx",
    "components/core/SectionHeading.jsx",
    "components/forms/Checkbox.jsx",
    "components/forms/Switch.jsx",
    "components/forms/Input.jsx",
    "components/forms/Select.jsx",
    "components/menu/MenuItem.jsx",
    "components/menu/CategoryTabs.jsx",
    "components/navigation/NavBar.jsx",
    "components/navigation/LangToggle.jsx",
    "components/feedback/Notice.jsx"
  ];

  const SCREENS = ["./motion.jsx", "./PhotoSlot.jsx", "./Hero.jsx", "./Featured.jsx", "./MenuSection.jsx", "./About.jsx",
                   "./Gallery.jsx", "./Reviews.jsx", "./FindUs.jsx", "./HoursBand.jsx", "./SiteFooter.jsx", "./app.jsx"];

  const strip = (src) => src
    .replace(/^\s*import[^;]*;\s*$/gm, "")
    .replace(/^\s*export\s+/gm, "");

  // no-store: läs alltid färsk källa, så redigeringar syns direkt utan hård omladdning.
  const fetchSrc = async (url) => strip(await (await fetch(url, { cache: "no-store" })).text());

  let DS = fromBundle();
  if (!DS) {
    // Varje komponentfil körs i egen stängning så att lokala hjälpvariabler
    // (t.ex. `tones`) inte krockar mellan filer. Redan byggda komponenter
    // skickas in som scope, i beroendeordning.
    DS = {};
    for (const url of SOURCES) {
      const name = url.split("/").pop().replace(/\.jsx$/, "");
      const src = await fetchSrc(url);
      const deps = Object.keys(DS).filter((k) => k !== name);
      const pre = deps.length ? "const { " + deps.join(", ") + " } = __DS;\n" : "";
      const wrapped = "(function(React, __DS){\n" + pre + src + "\nreturn " + name + ";\n})";
      const code = Babel.transform(wrapped, { presets: [["react", { runtime: "classic" }]], filename: url }).code;
      DS[name] = eval(code)(React, DS);
    }
  }
  window.LD_DS = DS;

  for (const url of SCREENS) {
    const code = Babel.transform(await fetchSrc(url), { presets: [["react", { runtime: "classic" }]], filename: url }).code;
    new Function("React", "ReactDOM", code)(React, ReactDOM);
  }
  return DS;
})();
