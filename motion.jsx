/* Rörelse. Lugn, en gång, aldrig studsig — och helt avstängd när användaren
   bett om mindre rörelse.

   `Reveal` tonar in ett block när det kommer in i vyn. `useParallax` låter
   hero-fotot ligga efter scrollen en aning så att sidan känns levande utan att
   något hoppar. */
window.LD_reduceMotion = function () {
  return window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

window.Reveal = function Reveal({ children, delay = 0, y = 14, className, style }) {
  const ref = React.useRef(null);
  const [shown, setShown] = React.useState(false);

  React.useEffect(() => {
    if (window.LD_reduceMotion() || !("IntersectionObserver" in window)) { setShown(true); return; }
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { setShown(true); io.disconnect(); }
        });
      },
      { threshold: 0.06, rootMargin: "0px 0px -6% 0px" }
    );
    io.observe(el);
    // Skyddsnät: inget block får någonsin fastna osynligt (utskrift, gamla
    // webbläsare, skärmdumpsrenderare).
    const t = setTimeout(() => setShown(true), 2500);
    return () => { clearTimeout(t); io.disconnect(); };
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "none" : "translateY(" + y + "px)",
        transition: "opacity 560ms var(--ease-out) " + delay + "ms, transform 560ms var(--ease-out) " + delay + "ms",
        willChange: shown ? "auto" : "opacity, transform",
        ...style
      }}
    >
      {children}
    </div>
  );
};

/* Fotot rör sig långsammare än sidan. Faktorn hålls låg — fotot måste vara
   översatt i höjd för att inte glida ifrån kanten, och överhöjd innebär zoom.
   0.06 mot 112 % höjd är den balans där djupet känns men bildutsnittet
   fortfarande är det man art directade. */
window.LD_useParallax = function (ref, factor) {
  const f = factor == null ? 0.06 : factor;
  React.useEffect(() => {
    const el = ref.current;
    if (!el || window.LD_reduceMotion()) return;
    let raf = 0;
    const apply = () => {
      raf = 0;
      const parent = el.parentElement;
      const cap = parent ? parent.offsetHeight : window.innerHeight;
      const y = Math.min(window.scrollY, cap);
      el.style.transform = "translate3d(0," + (y * f).toFixed(1) + "px,0)";
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(apply); };
    apply();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [ref, f]);
};

/* Stjärnrad. ★ är ett av systemets tre funktionsbärande unicode-tecken. */
window.Stars = function Stars({ value = 5, size = "var(--text-base)", color = "var(--gold-500)" }) {
  return (
    <span aria-hidden="true" style={{ color, fontSize: size, letterSpacing: "0.12em", lineHeight: 1, whiteSpace: "nowrap" }}>
      {"★★★★★".slice(0, value)}
    </span>
  );
};
