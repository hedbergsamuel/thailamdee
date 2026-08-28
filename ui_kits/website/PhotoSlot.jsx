/* Bildplats. Med `src` visas det riktiga fotot (fyller rutan, beskuret snyggt);
   utan `src` en tom ruta med streckad guldhårlinje och en versaletikett som säger
   vad som ska in. */
/* Fokalpunkt per foto så att beskärningen alltid centrerar maten — de flesta
   bilderna har risasken/bakgrunden upptill och själva rätten en bit ner. */
const FOOD_FOCUS = {
  "4.webp": "50% 72%",        // cashewkyckling — rätten i nedre halvan
  "5.webp": "50% 54%",        // vårrullar
  "6.webp": "50% 66%",        // wok med ris
  "7.webp": "50% 50%",        // friterad kyckling — fyller rutan
  "8.webp": "50% 50%",        // Pad Thai uppifrån — fyller rutan
  "9.webp": "50% 66%",        // Pad Thai på tallrik — rätten i nedre halvan
  "unnamed.webp": "50% 70%",  // kycklingwok — rätten i nedre halvan
  "unnamed1.webp": "50% 60%"  // kycklingspett
};

window.PhotoSlot = function PhotoSlot({ label, ratio, minHeight, tone = "light", src, alt, objectPosition, style }) {
  const dark = tone === "dark";

  if (src) {
    const focus = objectPosition || FOOD_FOCUS[src.split("/").pop()] || "50% 50%";
    return (
      <div
        style={{
          position: "relative",
          width: "100%",
          height: ratio ? undefined : "100%",
          aspectRatio: ratio,
          minHeight,
          background: dark ? "rgba(254,252,247,0.04)" : "var(--cream-200)",
          borderRadius: "var(--radius-md)",
          overflow: "hidden",
          ...style,
          border: "none",
          borderTop: "none",
          borderRight: "none",
          borderBottom: "none",
          borderLeft: "none"
        }}
      >
        <img
          src={src}
          alt={alt || label || ""}
          loading="lazy"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: focus, display: "block" }}
        />
      </div>
    );
  }

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: ratio ? undefined : "100%",
        aspectRatio: ratio,
        minHeight,
        background: dark ? "rgba(254,252,247,0.04)" : "var(--cream-200)",
        border: "var(--border-width-hair) dashed " + (dark ? "rgba(239,198,92,0.42)" : "rgba(176,133,31,0.45)"),
        borderRadius: "var(--radius-md)",
        display: "grid",
        placeItems: "center",
        padding: "var(--space-6)",
        overflow: "hidden",
        ...style
      }}
    >
      <span
        style={{
          font: "var(--type-label)",
          fontSize: "var(--text-xs)",
          letterSpacing: "var(--tracking-label)",
          textTransform: "uppercase",
          color: dark ? "var(--text-muted)" : "var(--ink-500)",
          textAlign: "center"
        }}
      >
        {label}
      </span>
    </div>
  );
};
