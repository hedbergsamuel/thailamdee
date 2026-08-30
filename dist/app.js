/* Autogenererad av build.js — REDIGERA INTE. Ändra .jsx-källorna och kör om ./build.sh */
(function(){
"use strict";
var React = window.React, ReactDOM = window.ReactDOM;
var LD_DS = (window.LD_DS = window.LD_DS || {});
/* components/core/Button.jsx */
LD_DS["Button"] = function (React, __DS) {
  /* Knapparna är hospitality, inte webbapp: generös höjd, gott om padding och
     mening satt i sentence case. Versaler finns kvar bakom `caps` för de få
     ställen där knappen ska läsa som en etikett. */
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "var(--space-2)",
    fontFamily: "var(--font-body)",
    fontWeight: "var(--weight-semibold)",
    lineHeight: 1.1,
    letterSpacing: "0.005em",
    border: "var(--border-width-hair) solid transparent",
    borderRadius: "var(--radius-btn, 11px)",
    cursor: "pointer",
    textDecoration: "none",
    transition: "background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), transform var(--dur-fast) var(--ease-out)",
    whiteSpace: "nowrap"
  };
  const sizes = {
    sm: {
      padding: "9px 16px",
      minHeight: 38,
      fontSize: "var(--text-sm)"
    },
    md: {
      padding: "13px 22px",
      minHeight: 46,
      fontSize: "var(--text-base)"
    },
    lg: {
      padding: "17px 30px",
      minHeight: 56,
      fontSize: "var(--text-lg)"
    },
    xl: {
      padding: "21px 38px",
      minHeight: 64,
      fontSize: "var(--text-lg)"
    }
  };
  const capsStyle = {
    textTransform: "uppercase",
    letterSpacing: "0.08em"
  };

  /* Vilo-läge och hover för varje variant. Hover lyfter knappen en aning
     (translateY) och lägger på en mjuk, varm skugga — diskret, aldrig studsig. */
  const liftHover = {
    transform: "translateY(-1px)"
  };
  const variants = {
    primary: {
      background: "var(--gold-500)",
      color: "var(--text-on-gold)",
      borderColor: "var(--gold-500)",
      boxShadow: "0 1px 2px rgba(138,100,18,0.20)"
    },
    primaryHover: {
      background: "var(--gold-400)",
      borderColor: "var(--gold-400)",
      boxShadow: "0 8px 20px rgba(214,162,46,0.34)",
      ...liftHover
    },
    secondary: {
      background: "transparent",
      color: "var(--text-accent)",
      borderColor: "var(--border-strong)"
    },
    secondaryHover: {
      background: "rgba(214,162,46,0.12)",
      ...liftHover
    },
    ghost: {
      background: "transparent",
      color: "var(--text-secondary)",
      borderColor: "transparent"
    },
    ghostHover: {
      color: "var(--text-accent)"
    },
    onLight: {
      background: "var(--navy-700)",
      color: "var(--cream-50)",
      borderColor: "var(--navy-700)",
      boxShadow: "0 1px 2px rgba(6,23,53,0.18)"
    },
    onLightHover: {
      background: "var(--navy-600)",
      borderColor: "var(--navy-600)",
      boxShadow: "0 8px 20px rgba(6,23,53,0.22)",
      ...liftHover
    },
    /* Sekundär på kräm: marinblå hårlinje, ingen guldtext — guld på kräm är förbjudet. */
    onLightGhost: {
      background: "var(--cream-50)",
      color: "var(--navy-700)",
      borderColor: "rgba(12,44,116,0.26)"
    },
    onLightGhostHover: {
      background: "var(--cream-100)",
      borderColor: "var(--navy-700)",
      ...liftHover
    }
  };
  function Button({
    children,
    variant = "primary",
    size = "md",
    href,
    icon,
    caps = false,
    disabled = false,
    fullWidth = false,
    onClick,
    style,
    ...rest
  }) {
    const [hover, setHover] = React.useState(false);
    const css = {
      ...base,
      ...sizes[size],
      ...(caps ? capsStyle : null),
      ...variants[variant],
      ...(hover && !disabled ? variants[variant + "Hover"] : null),
      ...(fullWidth ? {
        width: "100%"
      } : null),
      ...(disabled ? {
        opacity: 0.45,
        cursor: "not-allowed"
      } : null),
      ...style
    };
    const Tag = href && !disabled ? "a" : "button";
    return /*#__PURE__*/React.createElement(Tag, {
      href: href,
      style: css,
      onClick: disabled ? undefined : onClick,
      disabled: Tag === "button" ? disabled : undefined,
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      ...rest
    }, icon ? /*#__PURE__*/React.createElement("span", {
      className: "ld-btn-icon",
      "aria-hidden": "true",
      style: {
        fontSize: "1.05em",
        lineHeight: 1
      }
    }, icon) : null, children);
  }
  return Button;
}(React, LD_DS);
/* components/core/Badge.jsx */
LD_DS["Badge"] = function (React, __DS) {
  const {
    Button
  } = __DS;
  const tones = {
    gold: {
      background: "var(--gold-500)",
      color: "var(--text-on-gold)",
      borderColor: "var(--gold-500)"
    },
    goldOutline: {
      background: "transparent",
      color: "var(--gold-400)",
      borderColor: "var(--border-strong)"
    },
    leaf: {
      background: "var(--leaf-100)",
      color: "var(--leaf-600)",
      borderColor: "transparent"
    },
    chili: {
      background: "var(--chili-100)",
      color: "var(--chili-600)",
      borderColor: "transparent"
    },
    navy: {
      background: "var(--navy-700)",
      color: "var(--cream-50)",
      borderColor: "var(--navy-700)"
    },
    quiet: {
      background: "rgba(254,252,247,0.08)",
      color: "var(--text-secondary)",
      borderColor: "transparent"
    }
  };
  function Badge({
    children,
    tone = "gold",
    icon,
    ...rest
  }) {
    return /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 5,
        font: "var(--type-label)",
        fontSize: "var(--text-3xs)",
        letterSpacing: "var(--tracking-label-tight)",
        textTransform: "uppercase",
        padding: "4px 8px",
        borderRadius: "var(--radius-xs)",
        border: "var(--border-width-hair) solid transparent",
        whiteSpace: "nowrap",
        ...tones[tone]
      },
      ...rest
    }, icon ? /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true"
    }, icon) : null, children);
  }
  return Badge;
}(React, LD_DS);
/* components/core/Card.jsx */
LD_DS["Card"] = function (React, __DS) {
  const {
    Button,
    Badge
  } = __DS;
  const surfaces = {
    dark: {
      background: "var(--surface-card)",
      border: "var(--border-width-hair) solid var(--border-hairline)",
      color: "var(--text-primary)"
    },
    inset: {
      background: "var(--surface-inset)",
      border: "var(--border-width-hair) solid var(--border-hairline)",
      color: "var(--text-primary)"
    },
    paper: {
      background: "var(--surface-card-light)",
      border: "var(--border-width-hair) solid var(--border-on-light)",
      color: "var(--text-on-light)",
      boxShadow: "var(--shadow-sm)"
    },
    paperQuiet: {
      background: "var(--cream-200)",
      border: "var(--border-width-hair) solid var(--border-on-light)",
      color: "var(--text-on-light)"
    },
    framed: {
      background: "var(--navy-800)",
      border: "var(--border-width-hair) solid var(--gold-500)",
      color: "var(--text-primary)",
      boxShadow: "var(--shadow-inset-hair)"
    }
  };
  function Card({
    children,
    surface = "dark",
    padding = "var(--space-6)",
    style,
    ...rest
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        borderRadius: "var(--radius-md)",
        padding,
        ...surfaces[surface],
        ...style
      },
      ...rest
    }, children);
  }
  return Card;
}(React, LD_DS);
/* components/core/Ornament.jsx */
LD_DS["Ornament"] = function (React, __DS) {
  const {
    Button,
    Badge,
    Card
  } = __DS;

  /**
   * The elephant motif from the truck's sign, used as a rule or a mark.
   * Image lives in the design system's assets folder; pass `src` to relocate it.
   */
  function Ornament({
    variant = "rule",
    width = 72,
    opacity = 1,
    src = "assets/elephant-l.png",
    flip = false,
    style
  }) {
    const img = /*#__PURE__*/React.createElement("img", {
      src: src,
      alt: "",
      "aria-hidden": "true",
      style: {
        width,
        height: "auto",
        opacity,
        transform: flip ? "scaleX(-1)" : undefined,
        flex: "0 0 auto"
      }
    });
    if (variant === "mark") return /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        ...style
      }
    }, img);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: "var(--space-4)",
        width: "100%",
        ...style
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        height: 1,
        background: "var(--border-hairline)"
      }
    }), img, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        height: 1,
        background: "var(--border-hairline)"
      }
    }));
  }
  return Ornament;
}(React, LD_DS);
/* components/core/SectionHeading.jsx */
LD_DS["SectionHeading"] = function (React, __DS) {
  const {
    Button,
    Badge,
    Card,
    Ornament
  } = __DS;
  function SectionHeading({
    eyebrow,
    title,
    lead,
    align = "left",
    onLight = false,
    ornament = false,
    id
  }) {
    const centered = align === "center";
    return /*#__PURE__*/React.createElement("header", {
      id: id,
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: centered ? "center" : "flex-start",
        textAlign: centered ? "center" : "left",
        gap: "var(--space-3)",
        maxWidth: centered ? "var(--container-narrow)" : "none",
        margin: centered ? "0 auto" : undefined
      }
    }, ornament ? /*#__PURE__*/React.createElement(Ornament, {
      width: 56,
      tone: onLight ? "gold" : "gold"
    }) : null, eyebrow ? /*#__PURE__*/React.createElement("span", {
      style: {
        font: "var(--type-label)",
        letterSpacing: "var(--tracking-label)",
        textTransform: "uppercase",
        color: onLight ? "var(--gold-700)" : "var(--text-accent)"
      }
    }, eyebrow) : null, /*#__PURE__*/React.createElement("h2", {
      style: {
        font: "var(--type-h1)",
        letterSpacing: "var(--tracking-display)",
        color: onLight ? "var(--navy-700)" : "var(--text-primary)"
      }
    }, title), lead ? /*#__PURE__*/React.createElement("p", {
      style: {
        font: "var(--type-body)",
        fontSize: "var(--text-lg)",
        color: onLight ? "var(--text-on-light-secondary)" : "var(--text-secondary)",
        maxWidth: "var(--measure)"
      }
    }, lead) : null);
  }
  return SectionHeading;
}(React, LD_DS);
/* components/forms/Checkbox.jsx */
LD_DS["Checkbox"] = function (React, __DS) {
  const {
    Button,
    Badge,
    Card,
    Ornament,
    SectionHeading
  } = __DS;
  function Checkbox({
    label,
    hint,
    checked = false,
    onChange,
    onLight = false,
    id,
    ...rest
  }) {
    const [hover, setHover] = React.useState(false);
    const inputId = id || "cb-" + String(label).replace(/\s+/g, "-").toLowerCase();
    return /*#__PURE__*/React.createElement("label", {
      htmlFor: inputId,
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      style: {
        display: "flex",
        alignItems: "flex-start",
        gap: "var(--space-3)",
        padding: "10px 12px",
        minHeight: 44,
        borderRadius: "var(--radius-sm)",
        border: "var(--border-width-hair) solid " + (onLight ? "var(--border-on-light)" : "var(--border-hairline)"),
        background: hover ? onLight ? "var(--cream-100)" : "rgba(239,198,92,0.08)" : onLight ? "var(--cream-50)" : "transparent",
        cursor: "pointer",
        transition: "background var(--dur-fast) var(--ease-out)"
      }
    }, /*#__PURE__*/React.createElement("input", {
      id: inputId,
      type: "checkbox",
      checked: checked,
      onChange: e => onChange && onChange(e.target.checked),
      style: {
        position: "absolute",
        opacity: 0,
        width: 1,
        height: 1
      },
      ...rest
    }), /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        flex: "0 0 auto",
        width: 20,
        height: 20,
        marginTop: 1,
        display: "grid",
        placeItems: "center",
        borderRadius: "var(--radius-xs)",
        border: "2px solid " + (checked ? "var(--gold-500)" : onLight ? "rgba(12,44,116,0.35)" : "var(--border-hairline)"),
        background: checked ? "var(--gold-500)" : "transparent",
        color: "var(--navy-800)",
        font: "var(--type-label)",
        fontSize: 13,
        transition: "all var(--dur-fast) var(--ease-out)"
      }
    }, checked ? "✓" : ""), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 2
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: "var(--type-body)",
        fontWeight: "var(--weight-medium)",
        fontSize: "var(--text-base)",
        color: onLight ? "var(--text-on-light)" : "var(--text-primary)"
      }
    }, label), hint ? /*#__PURE__*/React.createElement("span", {
      style: {
        font: "var(--type-body-sm)",
        fontSize: "var(--text-xs)",
        color: onLight ? "var(--text-on-light-muted)" : "var(--text-muted)"
      }
    }, hint) : null));
  }
  return Checkbox;
}(React, LD_DS);
/* components/forms/Switch.jsx */
LD_DS["Switch"] = function (React, __DS) {
  const {
    Button,
    Badge,
    Card,
    Ornament,
    SectionHeading,
    Checkbox
  } = __DS;
  function Switch({
    label,
    checked = false,
    onChange,
    onLight = false,
    id
  }) {
    const inputId = id || "sw-" + String(label).replace(/\s+/g, "-").toLowerCase();
    return /*#__PURE__*/React.createElement("label", {
      htmlFor: inputId,
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: "var(--space-3)",
        minHeight: 44,
        cursor: "pointer",
        font: "var(--type-body)",
        fontWeight: "var(--weight-medium)",
        color: onLight ? "var(--text-on-light)" : "var(--text-primary)"
      }
    }, /*#__PURE__*/React.createElement("input", {
      id: inputId,
      type: "checkbox",
      role: "switch",
      checked: checked,
      onChange: e => onChange && onChange(e.target.checked),
      style: {
        position: "absolute",
        opacity: 0,
        width: 1,
        height: 1
      }
    }), /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        width: 46,
        height: 26,
        flex: "0 0 auto",
        borderRadius: "var(--radius-pill)",
        background: checked ? "var(--gold-500)" : onLight ? "var(--cream-300)" : "rgba(254,252,247,0.16)",
        border: "var(--border-width-hair) solid " + (checked ? "var(--gold-500)" : "transparent"),
        position: "relative",
        transition: "background var(--dur-base) var(--ease-out)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        top: 2,
        left: checked ? 22 : 2,
        width: 20,
        height: 20,
        borderRadius: "var(--radius-pill)",
        background: checked ? "var(--navy-800)" : "var(--cream-50)",
        boxShadow: "var(--shadow-sm)",
        transition: "left var(--dur-base) var(--ease-out), background var(--dur-base) var(--ease-out)"
      }
    })), label);
  }
  return Switch;
}(React, LD_DS);
/* components/forms/Input.jsx */
LD_DS["Input"] = function (React, __DS) {
  const {
    Button,
    Badge,
    Card,
    Ornament,
    SectionHeading,
    Checkbox,
    Switch
  } = __DS;
  function Input({
    label,
    hint,
    type = "text",
    value,
    onChange,
    placeholder,
    onLight = false,
    id,
    multiline = false,
    rows = 4,
    ...rest
  }) {
    const inputId = id || "in-" + String(label || placeholder).replace(/\s+/g, "-").toLowerCase();
    const field = {
      width: "100%",
      font: "var(--type-body)",
      color: onLight ? "var(--text-on-light)" : "var(--text-primary)",
      background: onLight ? "var(--cream-50)" : "rgba(6,23,53,0.5)",
      border: "var(--border-width-hair) solid " + (onLight ? "var(--border-on-light)" : "var(--border-hairline)"),
      borderRadius: "var(--radius-sm)",
      padding: "12px 14px",
      minHeight: 44,
      outline: "none"
    };
    const Tag = multiline ? "textarea" : "input";
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-2)"
      }
    }, label ? /*#__PURE__*/React.createElement("label", {
      htmlFor: inputId,
      style: {
        font: "var(--type-label)",
        letterSpacing: "var(--tracking-label-tight)",
        textTransform: "uppercase",
        color: onLight ? "var(--gold-700)" : "var(--text-accent)"
      }
    }, label) : null, /*#__PURE__*/React.createElement(Tag, {
      id: inputId,
      type: multiline ? undefined : type,
      rows: multiline ? rows : undefined,
      value: value,
      placeholder: placeholder,
      onChange: e => onChange && onChange(e.target.value),
      style: {
        ...field,
        resize: multiline ? "vertical" : undefined
      },
      ...rest
    }), hint ? /*#__PURE__*/React.createElement("span", {
      style: {
        font: "var(--type-body-sm)",
        fontSize: "var(--text-xs)",
        color: onLight ? "var(--text-on-light-muted)" : "var(--text-muted)"
      }
    }, hint) : null);
  }
  return Input;
}(React, LD_DS);
/* components/forms/Select.jsx */
LD_DS["Select"] = function (React, __DS) {
  const {
    Button,
    Badge,
    Card,
    Ornament,
    SectionHeading,
    Checkbox,
    Switch,
    Input
  } = __DS;
  function Select({
    label,
    value,
    onChange,
    options = [],
    onLight = false,
    id,
    ...rest
  }) {
    const inputId = id || "sel-" + String(label).replace(/\s+/g, "-").toLowerCase();
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-2)"
      }
    }, label ? /*#__PURE__*/React.createElement("label", {
      htmlFor: inputId,
      style: {
        font: "var(--type-label)",
        letterSpacing: "var(--tracking-label-tight)",
        textTransform: "uppercase",
        color: onLight ? "var(--gold-700)" : "var(--text-accent)"
      }
    }, label) : null, /*#__PURE__*/React.createElement("select", {
      id: inputId,
      value: value,
      onChange: e => onChange && onChange(e.target.value),
      style: {
        font: "var(--type-body)",
        color: onLight ? "var(--text-on-light)" : "var(--text-primary)",
        background: onLight ? "var(--cream-50)" : "rgba(6,23,53,0.5)",
        border: "var(--border-width-hair) solid " + (onLight ? "var(--border-on-light)" : "var(--border-hairline)"),
        borderRadius: "var(--radius-sm)",
        padding: "12px 14px",
        minHeight: 44,
        appearance: "none",
        backgroundImage: "linear-gradient(45deg, transparent 50%, var(--gold-500) 50%), linear-gradient(135deg, var(--gold-500) 50%, transparent 50%)",
        backgroundPosition: "calc(100% - 18px) 50%, calc(100% - 12px) 50%",
        backgroundSize: "6px 6px, 6px 6px",
        backgroundRepeat: "no-repeat",
        paddingRight: 38
      },
      ...rest
    }, options.map(o => {
      const val = typeof o === "string" ? o : o.value;
      const lab = typeof o === "string" ? o : o.label;
      return /*#__PURE__*/React.createElement("option", {
        key: val,
        value: val,
        style: {
          color: "#171512"
        }
      }, lab);
    })));
  }
  return Select;
}(React, LD_DS);
/* components/menu/MenuItem.jsx */
LD_DS["MenuItem"] = function (React, __DS) {
  const {
    Button,
    Badge,
    Card,
    Ornament,
    SectionHeading,
    Checkbox,
    Switch,
    Input,
    Select
  } = __DS;
  function MenuItem({
    number,
    name,
    ingredients,
    prices = [],
    badges = [],
    imageSlot = false,
    dimmed = false,
    onLight = false,
    footnote
  }) {
    return /*#__PURE__*/React.createElement("article", {
      className: "ld-menuitem",
      style: {
        display: "flex",
        gap: "var(--space-4)",
        alignItems: "flex-start",
        padding: "var(--space-5) 0",
        borderBottom: "var(--border-width-hair) solid " + (onLight ? "var(--border-on-light)" : "var(--border-hairline)"),
        opacity: dimmed ? 0.4 : 1,
        transition: "opacity var(--dur-base) var(--ease-out)"
      }
    }, imageSlot ? /*#__PURE__*/React.createElement("div", {
      style: {
        flex: "0 0 auto",
        width: 84,
        height: 84,
        borderRadius: "var(--radius-sm)",
        border: "var(--border-width-hair) dashed " + (onLight ? "var(--border-on-light)" : "var(--border-hairline)"),
        display: "grid",
        placeItems: "center",
        font: "var(--type-label)",
        fontSize: "var(--text-3xs)",
        letterSpacing: "var(--tracking-label-tight)",
        textTransform: "uppercase",
        color: onLight ? "var(--text-on-light-muted)" : "var(--text-muted)",
        textAlign: "center",
        padding: 6
      }
    }, "Bild") : null, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0,
        display: "flex",
        flexDirection: "column",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "ld-menuitem-head",
      style: {
        display: "flex",
        alignItems: "baseline",
        gap: "var(--space-3)",
        flexWrap: "wrap"
      }
    }, number != null ? /*#__PURE__*/React.createElement("span", {
      style: {
        font: "var(--type-price)",
        fontSize: "var(--text-sm)",
        color: onLight ? "var(--gold-600)" : "var(--text-accent)",
        flex: "0 0 auto",
        minWidth: "1.6em"
      }
    }, number) : null, /*#__PURE__*/React.createElement("h3", {
      style: {
        font: "var(--type-h3)",
        fontSize: "var(--text-xl)",
        letterSpacing: "var(--tracking-normal)",
        color: onLight ? "var(--navy-700)" : "var(--text-primary)"
      }
    }, name), badges.length ? /*#__PURE__*/React.createElement("span", {
      style: {
        display: "flex",
        gap: 6,
        flexWrap: "wrap"
      }
    }, badges.map(b => /*#__PURE__*/React.createElement(Badge, {
      key: b.label,
      tone: b.tone
    }, b.label))) : null), ingredients ? /*#__PURE__*/React.createElement("p", {
      style: {
        font: "var(--type-body)",
        color: onLight ? "var(--text-on-light-secondary)" : "var(--text-secondary)",
        maxWidth: "48ch"
      }
    }, ingredients) : null, footnote ? /*#__PURE__*/React.createElement("p", {
      style: {
        font: "var(--type-body-sm)",
        fontSize: "var(--text-xs)",
        color: onLight ? "var(--text-on-light-muted)" : "var(--text-muted)"
      }
    }, footnote) : null), /*#__PURE__*/React.createElement("div", {
      className: "ld-menuitem-prices",
      style: {
        flex: "0 0 auto",
        display: "flex",
        flexDirection: "column",
        gap: 3,
        alignItems: "flex-end",
        textAlign: "right"
      }
    }, prices.map(p => /*#__PURE__*/React.createElement("div", {
      key: p.label + p.price,
      style: {
        display: "flex",
        gap: "var(--space-3)",
        alignItems: "baseline"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: "var(--type-body-sm)",
        fontSize: "var(--text-sm)",
        textTransform: "uppercase",
        letterSpacing: "var(--tracking-label-tight)",
        color: onLight ? "var(--text-on-light-muted)" : "var(--text-muted)"
      }
    }, p.label), /*#__PURE__*/React.createElement("span", {
      style: {
        font: "var(--type-price)",
        fontSize: "var(--text-lg)",
        color: onLight ? "var(--navy-700)" : "var(--text-accent)",
        whiteSpace: "nowrap",
        minWidth: "4.6em"
      }
    }, p.price)))));
  }
  return MenuItem;
}(React, LD_DS);
/* components/menu/CategoryTabs.jsx */
LD_DS["CategoryTabs"] = function (React, __DS) {
  const {
    Button,
    Badge,
    Card,
    Ornament,
    SectionHeading,
    Checkbox,
    Switch,
    Input,
    Select,
    MenuItem
  } = __DS;

  /* Kategorival. Horisontellt när kategorierna är få, vertikalt som rail när de
     är många — sjutton rätter i sju kategorier behöver en rail, inte en radbrytande
     flikrad. */
  function CategoryTabs({
    items = [],
    value,
    onChange,
    onLight = false,
    counts,
    orientation = "horizontal"
  }) {
    const vertical = orientation === "vertical";
    return /*#__PURE__*/React.createElement("nav", {
      style: vertical ? {
        display: "flex",
        flexDirection: "column",
        gap: 2
      } : {
        display: "flex",
        gap: "var(--space-2)",
        flexWrap: "wrap",
        borderBottom: "var(--border-width-hair) solid " + (onLight ? "var(--border-on-light)" : "var(--border-hairline)"),
        paddingBottom: "var(--space-3)"
      }
    }, items.map(item => {
      const val = typeof item === "string" ? item : item.value;
      const label = typeof item === "string" ? item : item.label;
      const active = val === value;
      return /*#__PURE__*/React.createElement("button", {
        key: val,
        onClick: () => onChange && onChange(val),
        "aria-pressed": active,
        style: {
          fontFamily: "var(--font-body)",
          fontSize: "var(--text-base)",
          fontWeight: active ? "var(--weight-semibold)" : "var(--weight-regular)",
          letterSpacing: "0.005em",
          textAlign: vertical ? "left" : "center",
          padding: vertical ? "11px 14px" : "11px 16px",
          minHeight: 44,
          width: vertical ? "100%" : undefined,
          display: vertical ? "flex" : "inline-flex",
          alignItems: "center",
          justifyContent: vertical ? "space-between" : "center",
          gap: "var(--space-3)",
          cursor: "pointer",
          borderRadius: "var(--radius-sm)",
          border: "var(--border-width-hair) solid " + (active && !vertical ? "var(--border-strong)" : "transparent"),
          background: active ? onLight ? vertical ? "rgba(12,44,116,0.07)" : "var(--navy-700)" : "rgba(214,162,46,0.16)" : "transparent",
          color: active ? onLight ? vertical ? "var(--navy-700)" : "var(--cream-50)" : "var(--text-accent)" : onLight ? "var(--text-on-light-secondary)" : "var(--text-secondary)",
          boxShadow: active && vertical && onLight ? "inset 2px 0 0 var(--gold-500)" : "none",
          transition: "background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out)"
        }
      }, /*#__PURE__*/React.createElement("span", null, label), counts && counts[val] != null ? /*#__PURE__*/React.createElement("span", {
        style: {
          opacity: 0.55,
          fontSize: "var(--text-sm)",
          fontVariantNumeric: "tabular-nums"
        }
      }, counts[val]) : null);
    }));
  }
  return CategoryTabs;
}(React, LD_DS);
/* components/navigation/NavBar.jsx */
LD_DS["NavBar"] = function (React, __DS) {
  const {
    Button,
    Badge,
    Card,
    Ornament,
    SectionHeading,
    Checkbox,
    Switch,
    Input,
    Select,
    MenuItem,
    CategoryTabs
  } = __DS;

  /* Tunn, lugn header. Skylten till vänster; länkar, språkval och telefon samlade
     till höger med små mellanrum så raden läser som en enhet — inte flera knappar.
     Genomskinlig marinblå med blur så den vilar snyggt både på hero-fotot och på
     de ljusa sektionerna längre ner. */
  function NavBar({
    brand = null,
    logoSrc = "assets/logo-sign.png",
    logoHeight = 32,
    links = [],
    activeHref,
    phone,
    phoneLabel,
    callLabel = "Ring och beställ",
    right,
    sticky = true
  }) {
    // Solid överst; en aning genomskinlig (med blur) när sidan rullats.
    const [scrolled, setScrolled] = React.useState(false);
    React.useEffect(() => {
      const onScroll = () => setScrolled(window.scrollY > 24);
      onScroll();
      window.addEventListener("scroll", onScroll, {
        passive: true
      });
      return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Mobilmenyn (slidear in från höger). Escape stänger och sidan låses för scroll.
    const [menuOpen, setMenuOpen] = React.useState(false);
    React.useEffect(() => {
      if (!menuOpen) return undefined;
      const onKey = e => {
        if (e.key === "Escape") setMenuOpen(false);
      };
      document.addEventListener("keydown", onKey);
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.removeEventListener("keydown", onKey);
        document.body.style.overflow = prev;
      };
    }, [menuOpen]);
    const telHref = phone ? "tel:" + phone.replace(/[^+\d]/g, "") : undefined;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("header", {
      style: {
        position: sticky ? "sticky" : "static",
        top: 0,
        /* Över Leaflet-kartans egna lager (som når z-index 1000) — annars
           "försvinner" headern när kartan rullar under den. */
        zIndex: 1100,
        /* Solid marinblå överst, lätt genomskinlig med blur vid scroll. */
        background: scrolled ? "rgba(6,23,53,0.85)" : "var(--navy-900)",
        backdropFilter: scrolled ? "saturate(140%) blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "saturate(140%) blur(12px)" : "none",
        borderBottom: "var(--border-width-hair) solid rgba(239,198,92,0.18)",
        transition: "background var(--dur-base) var(--ease-out)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "ld-nav-inner",
      style: {
        maxWidth: "var(--container)",
        margin: "0 auto",
        padding: "var(--space-4) var(--gutter)",
        display: "flex",
        alignItems: "center",
        gap: "var(--space-5)"
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: "#top",
      style: {
        display: "flex",
        alignItems: "center",
        flex: "0 0 auto"
      }
    }, logoSrc ? /*#__PURE__*/React.createElement("img", {
      className: "ld-nav-logo",
      src: logoSrc,
      alt: "Lam-Dee Chiangrai",
      style: {
        height: logoHeight,
        width: "auto"
      }
    }) : null), /*#__PURE__*/React.createElement("nav", {
      className: "ld-navlinks",
      style: {
        flex: 1,
        display: "flex",
        gap: "var(--space-6)",
        justifyContent: "flex-end",
        alignItems: "center"
      }
    }, links.map(l => {
      const active = l.href === activeHref;
      return /*#__PURE__*/React.createElement("a", {
        key: l.href,
        href: l.href,
        style: {
          fontFamily: "var(--font-body)",
          fontSize: "var(--text-sm)",
          fontWeight: "var(--weight-medium)",
          letterSpacing: "0.01em",
          color: active ? "var(--gold-300)" : "rgba(254,252,247,0.80)",
          whiteSpace: "nowrap",
          transition: "color var(--dur-fast) var(--ease-out)"
        }
      }, l.label);
    })), right ? /*#__PURE__*/React.createElement("span", {
      className: "ld-nav-right",
      style: {
        display: "flex",
        alignItems: "center",
        flex: "0 0 auto"
      }
    }, right) : null, phone ? /*#__PURE__*/React.createElement(Button, {
      className: "ld-nav-cta",
      variant: "primary",
      size: "sm",
      icon: "☎",
      "aria-label": phoneLabel || phone,
      href: "tel:" + phone.replace(/[^+\d]/g, ""),
      style: {
        flex: "0 0 auto"
      }
    }, /*#__PURE__*/React.createElement("svg", {
      className: "ld-nav-cta-phone",
      width: "18",
      height: "18",
      viewBox: "0 0 24 24",
      fill: "none",
      "aria-hidden": "true",
      style: {
        display: "none"
      }
    }, /*#__PURE__*/React.createElement("path", {
      d: "M6.6 10.8a15.5 15.5 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24 11.4 11.4 0 0 0 3.6.58 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .58 3.6 1 1 0 0 1-.24 1L6.6 10.8Z",
      fill: "currentColor"
    })), /*#__PURE__*/React.createElement("span", {
      className: "ld-cta-text"
    }, phoneLabel || phone)) : null, /*#__PURE__*/React.createElement("button", {
      className: "ld-nav-burger",
      "aria-label": "Öppna meny",
      "aria-expanded": menuOpen,
      onClick: () => setMenuOpen(true),
      style: {
        display: "none",
        alignItems: "center",
        justifyContent: "center",
        flex: "0 0 auto",
        width: 42,
        height: 38,
        padding: 0,
        background: "var(--gold-500)",
        border: "none",
        borderRadius: "var(--radius-btn, 11px)",
        cursor: "pointer",
        boxShadow: "0 1px 2px rgba(138,100,18,0.20)"
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "20",
      height: "20",
      viewBox: "0 0 24 24",
      fill: "none",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M3 6.5h18M3 12h18M3 17.5h18",
      stroke: "var(--navy-900)",
      strokeWidth: "2.1",
      strokeLinecap: "round"
    }))))), /*#__PURE__*/React.createElement("div", {
      className: "ld-nav-backdrop",
      "aria-hidden": "true",
      onClick: () => setMenuOpen(false),
      style: {
        position: "fixed",
        inset: 0,
        zIndex: 1200,
        background: "rgba(6,23,53,0.5)",
        backdropFilter: "blur(2px)",
        WebkitBackdropFilter: "blur(2px)",
        opacity: menuOpen ? 1 : 0,
        visibility: menuOpen ? "visible" : "hidden",
        transition: "opacity var(--dur-base) var(--ease-out), visibility var(--dur-base) var(--ease-out)"
      }
    }), /*#__PURE__*/React.createElement("aside", {
      className: "ld-nav-drawer",
      role: "dialog",
      "aria-modal": "true",
      "aria-label": "Meny",
      style: {
        position: "fixed",
        top: 0,
        right: 0,
        bottom: 0,
        zIndex: 1300,
        width: "min(82vw, 320px)",
        background: "var(--navy-900)",
        borderLeft: "var(--border-width-hair) solid rgba(239,198,92,0.18)",
        boxShadow: "-16px 0 44px rgba(6,23,53,0.45)",
        transform: menuOpen ? "translateX(0)" : "translateX(100%)",
        transition: "transform var(--dur-base) var(--ease-out)",
        display: "flex",
        flexDirection: "column",
        padding: "var(--space-5) var(--space-6) var(--space-8)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "flex-end"
      }
    }, /*#__PURE__*/React.createElement("button", {
      "aria-label": "Stäng meny",
      onClick: () => setMenuOpen(false),
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: 40,
        height: 40,
        padding: 0,
        background: "transparent",
        border: "none",
        cursor: "pointer"
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "22",
      height: "22",
      viewBox: "0 0 24 24",
      fill: "none",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M6 6l12 12M18 6L6 18",
      stroke: "var(--cream-50)",
      strokeWidth: "2.1",
      strokeLinecap: "round"
    })))), /*#__PURE__*/React.createElement("nav", {
      style: {
        display: "flex",
        flexDirection: "column",
        marginTop: "var(--space-2)"
      }
    }, links.map(l => /*#__PURE__*/React.createElement("a", {
      key: l.href,
      href: l.href,
      onClick: () => setMenuOpen(false),
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: "var(--weight-semibold)",
        fontSize: "var(--text-2xl)",
        letterSpacing: "-0.01em",
        color: "var(--cream-50)",
        textDecoration: "none",
        padding: "var(--space-4) 0",
        borderBottom: "var(--border-width-hair) solid rgba(254,252,247,0.10)"
      }
    }, l.label))), phone ? /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: "auto",
        paddingTop: "var(--space-8)",
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-3)"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "lg",
      fullWidth: true,
      href: telHref,
      onClick: () => setMenuOpen(false)
    }, callLabel), /*#__PURE__*/React.createElement("a", {
      href: telHref,
      onClick: () => setMenuOpen(false),
      style: {
        textAlign: "center",
        fontFamily: "var(--font-display)",
        fontWeight: "var(--weight-semibold)",
        fontSize: "var(--text-xl)",
        color: "var(--gold-400)",
        textDecoration: "none"
      }
    }, phone)) : null));
  }
  return NavBar;
}(React, LD_DS);
/* components/navigation/LangToggle.jsx */
LD_DS["LangToggle"] = function (React, __DS) {
  const {
    Button,
    Badge,
    Card,
    Ornament,
    SectionHeading,
    Checkbox,
    Switch,
    Input,
    Select,
    MenuItem,
    CategoryTabs,
    NavBar
  } = __DS;

  /* Språkval som enkla textlänkar — ingen box, ingen knapp. Aktivt språk markeras
     i guld, det inaktiva är tonat. Åtskilda av ett tunt snedstreck. */
  function LangToggle({
    value = "sv",
    onChange,
    languages = [{
      code: "sv",
      label: "SV"
    }, {
      code: "en",
      label: "EN"
    }]
  }) {
    return /*#__PURE__*/React.createElement("div", {
      role: "group",
      "aria-label": "Språk",
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: "var(--space-2)",
        flex: "0 0 auto"
      }
    }, languages.map((l, i) => {
      const active = l.code === value;
      return /*#__PURE__*/React.createElement(React.Fragment, {
        key: l.code
      }, i > 0 ? /*#__PURE__*/React.createElement("span", {
        "aria-hidden": "true",
        style: {
          color: "rgba(254,252,247,0.3)",
          fontSize: "var(--text-xs)"
        }
      }, "/") : null, /*#__PURE__*/React.createElement("button", {
        onClick: () => onChange && onChange(l.code),
        "aria-pressed": active,
        style: {
          border: "none",
          background: "none",
          cursor: "pointer",
          padding: "2px 1px",
          fontFamily: "var(--font-body)",
          fontSize: "var(--text-xs)",
          fontWeight: active ? "var(--weight-semibold)" : "var(--weight-medium)",
          letterSpacing: "0.08em",
          color: active ? "var(--gold-300)" : "rgba(254,252,247,0.55)",
          borderBottom: "2px solid " + (active ? "var(--gold-400)" : "transparent"),
          transition: "color var(--dur-fast) var(--ease-out)"
        }
      }, l.label));
    }));
  }
  return LangToggle;
}(React, LD_DS);
/* components/feedback/Notice.jsx */
LD_DS["Notice"] = function (React, __DS) {
  const {
    Button,
    Badge,
    Card,
    Ornament,
    SectionHeading,
    Checkbox,
    Switch,
    Input,
    Select,
    MenuItem,
    CategoryTabs,
    NavBar,
    LangToggle
  } = __DS;
  const tones = {
    info: {
      background: "rgba(239,198,92,0.1)",
      borderColor: "var(--border-hairline)",
      color: "var(--text-secondary)",
      mark: "var(--gold-400)"
    },
    gluten: {
      background: "var(--leaf-100)",
      borderColor: "transparent",
      color: "var(--leaf-600)",
      mark: "var(--leaf-600)"
    },
    warning: {
      background: "var(--chili-100)",
      borderColor: "transparent",
      color: "var(--chili-600)",
      mark: "var(--chili-600)"
    },
    closed: {
      background: "rgba(6,23,53,0.6)",
      borderColor: "var(--border-hairline)",
      color: "var(--text-muted)",
      mark: "var(--text-muted)"
    }
  };
  function Notice({
    children,
    tone = "info",
    label
  }) {
    const t = tones[tone];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: "var(--space-3)",
        alignItems: "flex-start",
        padding: "var(--space-4)",
        borderRadius: "var(--radius-sm)",
        background: t.background,
        border: "var(--border-width-hair) solid " + t.borderColor,
        borderLeft: "3px solid " + t.mark
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 3
      }
    }, label ? /*#__PURE__*/React.createElement("span", {
      style: {
        font: "var(--type-label)",
        letterSpacing: "var(--tracking-label-tight)",
        textTransform: "uppercase",
        color: t.mark
      }
    }, label) : null, /*#__PURE__*/React.createElement("span", {
      style: {
        font: "var(--type-body-sm)",
        color: t.color
      }
    }, children)));
  }
  return Notice;
}(React, LD_DS);
/* motion.jsx */
(function (React, ReactDOM) {
  /* Rörelse. Lugn, en gång, aldrig studsig — och helt avstängd när användaren
     bett om mindre rörelse.
  
     `Reveal` tonar in ett block när det kommer in i vyn. `useParallax` låter
     hero-fotot ligga efter scrollen en aning så att sidan känns levande utan att
     något hoppar. */
  window.LD_reduceMotion = function () {
    return window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  };
  window.Reveal = function Reveal({
    children,
    delay = 0,
    y = 14,
    className,
    style
  }) {
    const ref = React.useRef(null);
    const [shown, setShown] = React.useState(false);
    React.useEffect(() => {
      if (window.LD_reduceMotion() || !("IntersectionObserver" in window)) {
        setShown(true);
        return;
      }
      const el = ref.current;
      if (!el) return;
      const io = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        });
      }, {
        threshold: 0.06,
        rootMargin: "0px 0px -6% 0px"
      });
      io.observe(el);
      // Skyddsnät: inget block får någonsin fastna osynligt (utskrift, gamla
      // webbläsare, skärmdumpsrenderare).
      const t = setTimeout(() => setShown(true), 2500);
      return () => {
        clearTimeout(t);
        io.disconnect();
      };
    }, []);
    return /*#__PURE__*/React.createElement("div", {
      ref: ref,
      className: className,
      style: {
        opacity: shown ? 1 : 0,
        transform: shown ? "none" : "translateY(" + y + "px)",
        transition: "opacity 560ms var(--ease-out) " + delay + "ms, transform 560ms var(--ease-out) " + delay + "ms",
        willChange: shown ? "auto" : "opacity, transform",
        ...style
      }
    }, children);
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
      const onScroll = () => {
        if (!raf) raf = requestAnimationFrame(apply);
      };
      apply();
      window.addEventListener("scroll", onScroll, {
        passive: true
      });
      window.addEventListener("resize", onScroll);
      return () => {
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onScroll);
        if (raf) cancelAnimationFrame(raf);
      };
    }, [ref, f]);
  };

  /* Stjärnrad. ★ är ett av systemets tre funktionsbärande unicode-tecken. */
  window.Stars = function Stars({
    value = 5,
    size = "var(--text-base)",
    color = "var(--gold-500)"
  }) {
    return /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        color,
        fontSize: size,
        letterSpacing: "0.12em",
        lineHeight: 1,
        whiteSpace: "nowrap"
      }
    }, "★★★★★".slice(0, value));
  };
})(React, ReactDOM);
/* PhotoSlot.jsx */
(function (React, ReactDOM) {
  /* Bildplats. Med `src` visas det riktiga fotot (fyller rutan, beskuret snyggt);
     utan `src` en tom ruta med streckad guldhårlinje och en versaletikett som säger
     vad som ska in. */
  /* Fokalpunkt per foto så att beskärningen alltid centrerar maten — de flesta
     bilderna har risasken/bakgrunden upptill och själva rätten en bit ner. */
  const FOOD_FOCUS = {
    "4.webp": "50% 72%",
    // cashewkyckling — rätten i nedre halvan
    "5.webp": "50% 54%",
    // vårrullar
    "6.webp": "50% 66%",
    // wok med ris
    "7.webp": "50% 50%",
    // friterad kyckling — fyller rutan
    "8.webp": "50% 50%",
    // Pad Thai uppifrån — fyller rutan
    "9.webp": "50% 66%",
    // Pad Thai på tallrik — rätten i nedre halvan
    "unnamed.webp": "50% 70%",
    // kycklingwok — rätten i nedre halvan
    "unnamed1.webp": "50% 60%" // kycklingspett
  };
  window.PhotoSlot = function PhotoSlot({
    label,
    ratio,
    minHeight,
    tone = "light",
    src,
    alt,
    objectPosition,
    style
  }) {
    const dark = tone === "dark";
    if (src) {
      const focus = objectPosition || FOOD_FOCUS[src.split("/").pop()] || "50% 50%";
      return /*#__PURE__*/React.createElement("div", {
        style: {
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
        }
      }, /*#__PURE__*/React.createElement("img", {
        src: src,
        alt: alt || label || "",
        loading: "lazy",
        style: {
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: focus,
          display: "block"
        }
      }));
    }
    return /*#__PURE__*/React.createElement("div", {
      style: {
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
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: "var(--type-label)",
        fontSize: "var(--text-xs)",
        letterSpacing: "var(--tracking-label)",
        textTransform: "uppercase",
        color: dark ? "var(--text-muted)" : "var(--ink-500)",
        textAlign: "center"
      }
    }, label));
  };
})(React, ReactDOM);
/* Hero.jsx */
(function (React, ReactDOM) {
  /* Hero: helbildsfoto med ett tätt textblock nere till vänster. Statusrad,
     ögonbryn, tvåradig rubrik (andra raden i guldkursiv), kort ingress, två
     knappar och ett kompakt betyg. Ingen text konkurrerar med vagnen till höger. */
  window.Hero = function Hero({
    t,
    lang,
    place,
    openState
  }) {
    const {
      Button
    } = window.LD_DS;
    const Stars = window.Stars;
    const rating = lang === "sv" ? place.rating : place.ratingEn;
    return /*#__PURE__*/React.createElement("section", {
      id: "top",
      className: "ld-hero",
      style: {
        position: "relative",
        display: "flex",
        alignItems: "flex-end",
        overflow: "hidden",
        background: "var(--navy-900)"
      }
    }, /*#__PURE__*/React.createElement("picture", null, /*#__PURE__*/React.createElement("source", {
      type: "image/webp",
      srcSet: "assets/hero-local-900.webp 900w, assets/hero-local.webp 1672w",
      sizes: "100vw"
    }), /*#__PURE__*/React.createElement("img", {
      src: "assets/hero-local.jpg",
      srcSet: "assets/hero-local-900.jpg 900w, assets/hero-local.jpg 1400w",
      sizes: "100vw",
      width: 1400,
      height: 787,
      alt: "Lam-Dee thaivagn vid Rotvik utanför Uddevalla en solig sommardag",
      fetchpriority: "high",
      decoding: "async",
      style: {
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: "64% 50%"
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "ld-hero-scrim-l",
      style: {
        position: "absolute",
        inset: 0,
        background: "linear-gradient(90deg, rgba(6,23,53,0.7) 0%, rgba(6,23,53,0.42) 34%, rgba(6,23,53,0.1) 62%, rgba(6,23,53,0) 84%)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "ld-hero-scrim-b",
      style: {
        position: "absolute",
        inset: 0,
        background: "linear-gradient(0deg, rgba(6,23,53,0.62) 0%, rgba(6,23,53,0.24) 30%, rgba(6,23,53,0) 55%)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        width: "100%",
        maxWidth: "var(--container)",
        margin: "0 auto",
        padding: "clamp(28px, 5vw, 56px) var(--gutter) clamp(44px, 6.5vw, 76px)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "ld-hero-content",
      style: {
        maxWidth: 560,
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-4)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: "var(--space-2)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        width: 8,
        height: 8,
        borderRadius: "50%",
        flex: "0 0 auto",
        background: openState.open ? "#5BBE7A" : "rgba(254,252,247,0.5)",
        boxShadow: openState.open ? "0 0 0 3px rgba(91,190,122,0.22)" : "none"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-body)",
        fontSize: "var(--text-sm)",
        fontWeight: "var(--weight-semibold)",
        color: "var(--cream-50)"
      }
    }, openState.open ? t.hero.openNow : t.hero.closedNow), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-body)",
        fontSize: "var(--text-sm)",
        color: "rgba(254,252,247,0.68)"
      }
    }, "· ", openState.label)), /*#__PURE__*/React.createElement("span", {
      style: {
        font: "var(--type-label)",
        fontSize: "var(--text-2xs)",
        letterSpacing: "var(--tracking-label)",
        textTransform: "uppercase",
        color: "var(--gold-300)"
      }
    }, t.hero.eyebrow), /*#__PURE__*/React.createElement("h1", {
      className: "ld-hero-title",
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: "var(--weight-semibold)",
        fontSize: "clamp(30px, 3.8vw, 47px)",
        lineHeight: 1.08,
        letterSpacing: "-0.02em",
        color: "var(--cream-50)",
        margin: 0,
        textShadow: "0 1px 2px rgba(6,23,53,0.55), 0 2px 22px rgba(6,23,53,0.6)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "block"
      }
    }, t.hero.titleTop), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "block",
        fontStyle: "italic",
        fontWeight: "var(--weight-medium)",
        color: "var(--gold-300)"
      }
    }, t.hero.titleBottom, ".")), /*#__PURE__*/React.createElement("p", {
      className: "ld-hero-lead",
      style: {
        fontFamily: "var(--font-body)",
        fontSize: "var(--text-base)",
        lineHeight: 1.55,
        color: "rgba(254,252,247,0.92)",
        maxWidth: "42ch",
        textShadow: "0 1px 2px rgba(6,23,53,0.6), 0 1px 16px rgba(6,23,53,0.55)"
      }
    }, t.hero.lead), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: "var(--space-3)",
        flexWrap: "wrap",
        alignItems: "center",
        marginTop: "var(--space-1)"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "md",
      icon: "☎",
      href: place.phoneHref
    }, t.hero.cta), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "md",
      href: "#meny",
      style: {
        background: "rgba(6,23,53,0.5)",
        backdropFilter: "blur(4px)",
        color: "var(--cream-50)",
        borderColor: "rgba(254,252,247,0.32)"
      }
    }, t.hero.ctaSecondary, /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        marginLeft: 2
      }
    }, "→"))), /*#__PURE__*/React.createElement("a", {
      href: "#omdomen",
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: "var(--space-2)",
        marginTop: "var(--space-2)",
        textDecoration: "none",
        alignSelf: "flex-start"
      }
    }, /*#__PURE__*/React.createElement(Stars, {
      value: 5,
      size: "var(--text-sm)",
      color: "var(--gold-400)"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-body)",
        fontSize: "var(--text-sm)",
        color: "var(--cream-50)"
      }
    }, /*#__PURE__*/React.createElement("strong", {
      style: {
        fontWeight: "var(--weight-semibold)"
      }
    }, rating), /*#__PURE__*/React.createElement("span", {
      style: {
        color: "rgba(254,252,247,0.68)",
        marginLeft: 6
      }
    }, place.reviewCount, " ", t.hero.ratingSuffix))))));
  };
})(React, ReactDOM);
/* Featured.jsx */
(function (React, ReactDOM) {
  /* Favoriter från woken: fyra kockens-val innan hela menyn. Maten har huvudrollen,
     priset står som "från"-pris eftersom det följer proteinet. */
  window.Featured = function Featured({
    t,
    lang,
    data
  }) {
    const {
      Badge,
      Button
    } = window.LD_DS;
    const PhotoSlot = window.PhotoSlot;
    const Reveal = window.Reveal;
    const order = [12, 10, 11, 5];
    const dishes = order.map(n => data.dishes.find(d => d.n === n)).filter(Boolean);

    // Riktiga foton per rätt (från /tinified).
    const dishPhoto = {
      12: "tinified/9.webp",
      // Pad Thai
      10: "tinified/6.webp",
      // Röd curry
      11: "tinified/unnamed.webp",
      // Grön curry
      5: "tinified/4.webp" // Cashewnötter
    };
    const fromPrice = d => {
      const min = Math.min.apply(null, d.prices.map(p => parseInt(p.price, 10)));
      return t.featured.from + " " + (lang === "sv" ? min + " kr" : min + " SEK");
    };
    const DishCard = function DishCard({
      d,
      wide
    }) {
      const [hover, setHover] = React.useState(false);
      const name = lang === "sv" ? d.name : d.nameEn;
      const note = lang === "sv" ? d.note : d.noteEn;
      return /*#__PURE__*/React.createElement("a", {
        href: "#meny",
        onMouseEnter: () => setHover(true),
        onMouseLeave: () => setHover(false),
        className: wide ? "ld-feature-card" : undefined,
        style: {
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
        }
      }, /*#__PURE__*/React.createElement(PhotoSlot, {
        label: name,
        alt: name,
        src: dishPhoto[d.n],
        ratio: wide ? undefined : "4 / 3",
        minHeight: wide ? 360 : undefined,
        style: {
          borderRadius: 0,
          border: "none",
          borderRight: wide ? "var(--border-width-hair) dashed rgba(176,133,31,0.45)" : "none",
          borderBottom: wide ? "none" : "var(--border-width-hair) dashed rgba(176,133,31,0.45)"
        }
      }), /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          gap: "var(--space-3)",
          padding: wide ? "var(--space-10)" : "var(--space-6)",
          justifyContent: "center"
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          gap: "var(--space-2)",
          flexWrap: "wrap"
        }
      }, /*#__PURE__*/React.createElement(Badge, {
        tone: "gold"
      }, t.menu.chef), d.gf ? /*#__PURE__*/React.createElement(Badge, {
        tone: "leaf"
      }, d.gfPartial ? t.menu.gfStar : t.menu.gf) : null), /*#__PURE__*/React.createElement("h3", {
        style: {
          fontFamily: "var(--font-display)",
          fontWeight: "var(--weight-semibold)",
          fontSize: wide ? "clamp(24px, 2.4vw, 34px)" : "var(--text-2xl)",
          lineHeight: 1.1,
          letterSpacing: "-0.02em",
          color: "var(--navy-700)"
        }
      }, name, note ? /*#__PURE__*/React.createElement("span", {
        style: {
          fontStyle: "italic",
          fontWeight: "var(--weight-regular)",
          color: "var(--ink-500)"
        }
      }, " — ", note.toLowerCase()) : null), /*#__PURE__*/React.createElement("p", {
        style: {
          fontFamily: "var(--font-body)",
          fontSize: wide ? "var(--text-lg)" : "var(--text-base)",
          lineHeight: 1.55,
          color: "var(--ink-700)",
          maxWidth: "42ch"
        }
      }, t.featured.dishes[d.n]), /*#__PURE__*/React.createElement("span", {
        style: {
          font: "var(--type-price)",
          fontSize: wide ? "var(--text-2xl)" : "var(--text-xl)",
          color: "var(--navy-700)",
          marginTop: "var(--space-1)"
        }
      }, fromPrice(d))));
    };
    return /*#__PURE__*/React.createElement("section", {
      id: "favoriter",
      className: "ld-section",
      style: {
        background: "var(--cream-50)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "var(--container)",
        margin: "0 auto",
        padding: "0 var(--gutter)",
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-10)"
      }
    }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: "var(--space-8)",
        alignItems: "flex-end",
        justifyContent: "space-between",
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-3)",
        maxWidth: "30ch"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: "var(--type-label)",
        letterSpacing: "var(--tracking-label)",
        textTransform: "uppercase",
        color: "var(--gold-700)"
      }
    }, t.featured.eyebrow), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: "clamp(26px, 3vw, 42px)",
        lineHeight: 1.08,
        letterSpacing: "-0.022em",
        color: "var(--navy-700)"
      }
    }, t.featured.title)), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-body)",
        fontSize: "var(--text-lg)",
        fontWeight: "var(--weight-medium)",
        lineHeight: 1.55,
        color: "var(--ink-700)",
        maxWidth: "40ch"
      }
    }, t.featured.lead))), /*#__PURE__*/React.createElement(Reveal, {
      delay: 60
    }, /*#__PURE__*/React.createElement("div", {
      className: "ld-featured-grid",
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
        gap: "var(--space-6)"
      }
    }, dishes.map((d, i) => /*#__PURE__*/React.createElement(DishCard, {
      key: d.n,
      d: d,
      wide: i === 0
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "onLightGhost",
      size: "lg",
      href: "#meny"
    }, t.featured.all))));
  };
})(React, ReactDOM);
/* MenuSection.jsx */
(function (React, ReactDOM) {
  /* Menyn: sticky filterrail till vänster, matsedeln som krämfärgat papper till
     höger. Filtrerade rätter gråas ut, tas inte bort. */
  window.MenuSection = function MenuSection({
    t,
    lang,
    data
  }) {
    const {
      CategoryTabs,
      MenuItem,
      Switch,
      Notice,
      Badge
    } = window.LD_DS;
    const Reveal = window.Reveal;
    const [cat, setCat] = React.useState("all");
    const [onlyGf, setOnlyGf] = React.useState(false);
    const inCat = d => cat === "all" || d.cat === cat;
    const visible = data.dishes.filter(inCat);
    const shown = visible.filter(d => !onlyGf || d.gf);
    const counts = data.categories.reduce((acc, c) => {
      acc[c.value] = data.dishes.filter(d => c.value === "all" || d.cat === c.value).filter(d => !onlyGf || d.gf).length;
      return acc;
    }, {});
    const badgesFor = d => {
      const out = [];
      if (d.gf) out.push({
        label: d.gfPartial ? t.menu.gfStar : t.menu.gf,
        tone: "leaf"
      });
      if (d.chef) out.push({
        label: t.menu.chef,
        tone: "gold"
      });
      if (d.kids) out.push({
        label: t.menu.kids,
        tone: "navy"
      });
      return out;
    };
    return /*#__PURE__*/React.createElement("section", {
      id: "meny",
      className: "ld-section",
      style: {
        background: "var(--cream-100)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "var(--container)",
        margin: "0 auto",
        padding: "0 var(--gutter)",
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-10)"
      }
    }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-3)",
        maxWidth: "44ch"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: "var(--type-label)",
        letterSpacing: "var(--tracking-label)",
        textTransform: "uppercase",
        color: "var(--gold-700)"
      }
    }, t.menu.eyebrow), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: "clamp(26px, 3vw, 42px)",
        lineHeight: 1.08,
        letterSpacing: "-0.022em",
        color: "var(--navy-700)"
      }
    }, t.menu.title), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-body)",
        fontSize: "var(--text-lg)",
        fontWeight: "var(--weight-medium)",
        lineHeight: 1.55,
        color: "var(--ink-700)"
      }
    }, t.menu.lead))), /*#__PURE__*/React.createElement("div", {
      className: "ld-menu-grid",
      style: {
        display: "grid",
        gridTemplateColumns: "minmax(0, 250px) minmax(0, 1fr)",
        gap: "var(--space-10)",
        alignItems: "start"
      }
    }, /*#__PURE__*/React.createElement("aside", {
      className: "ld-menu-rail",
      style: {
        position: "sticky",
        top: 92,
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-4)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: "var(--type-label)",
        letterSpacing: "var(--tracking-label)",
        textTransform: "uppercase",
        color: "var(--gold-700)"
      }
    }, t.menu.filterEyebrow), /*#__PURE__*/React.createElement(CategoryTabs, {
      onLight: true,
      orientation: "vertical",
      items: data.categories.map(c => ({
        value: c.value,
        label: c[lang]
      })),
      value: cat,
      onChange: setCat,
      counts: counts
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 1,
        background: "var(--border-on-light)"
      }
    }), /*#__PURE__*/React.createElement(Switch, {
      onLight: true,
      label: t.menu.onlyGf,
      checked: onlyGf,
      onChange: setOnlyGf
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        font: "var(--type-body)",
        fontSize: "var(--text-sm)",
        color: "var(--ink-500)"
      }
    }, t.menu.showing(shown.length, data.dishes.length))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-6)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--cream-50)",
        border: "var(--border-width-hair) solid var(--border-on-light)",
        borderRadius: "var(--radius-md)",
        boxShadow: "var(--shadow-sm)",
        padding: "var(--space-4) clamp(20px, 3vw, 40px) var(--space-6)"
      }
    }, visible.map((d, i) => /*#__PURE__*/React.createElement(Reveal, {
      key: d.n,
      delay: Math.min(i * 45, 360),
      y: 10
    }, /*#__PURE__*/React.createElement(MenuItem, {
      onLight: true,
      number: d.n,
      name: (lang === "sv" ? d.name : d.nameEn) + ((lang === "sv" ? d.note : d.noteEn) ? " (" + (lang === "sv" ? d.note : d.noteEn) + ")" : ""),
      ingredients: lang === "sv" ? d.ing : d.ingEn,
      badges: badgesFor(d),
      prices: lang === "sv" ? d.prices : d.pricesEn,
      dimmed: onlyGf && !d.gf,
      footnote: onlyGf && !d.gf ? t.menu.dimmedNote : null
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexWrap: "wrap",
        gap: "var(--space-3)",
        alignItems: "baseline",
        paddingTop: "var(--space-6)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: "var(--type-label)",
        letterSpacing: "var(--tracking-label)",
        textTransform: "uppercase",
        color: "var(--gold-700)"
      }
    }, t.menu.extrasLabel), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-body)",
        color: "var(--ink-700)"
      }
    }, t.menu.extras))), /*#__PURE__*/React.createElement(Notice, {
      tone: "gluten",
      label: t.menu.gf
    }, t.menu.glutenNote)))));
  };
})(React, ReactDOM);
/* About.jsx */
(function (React, ReactDOM) {
  /* Vår mat: sidans enda mörka mittsektion. Bryter rytmen mellan meny och bilder
     och är där verksamheten får berätta hur maten lagas. */
  window.About = function About({
    t
  }) {
    const PhotoSlot = window.PhotoSlot;
    const Reveal = window.Reveal;
    return /*#__PURE__*/React.createElement("section", {
      id: "om",
      className: "ld-section",
      style: {
        background: "var(--navy-800)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "var(--container)",
        margin: "0 auto",
        padding: "0 var(--gutter)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "ld-about-grid",
      style: {
        display: "grid",
        gridTemplateColumns: "minmax(0, 0.82fr) minmax(0, 1fr)",
        gap: "clamp(32px, 5vw, 80px)",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "ld-about-photo"
    }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(PhotoSlot, {
      tone: "dark",
      label: t.about.imageLabel,
      alt: t.about.imageLabel,
      src: "tinified/8.webp",
      ratio: "4 / 5"
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-6)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: "var(--type-label)",
        letterSpacing: "var(--tracking-label)",
        textTransform: "uppercase",
        color: "var(--gold-400)"
      }
    }, t.about.eyebrow), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: "clamp(24px, 2.8vw, 38px)",
        lineHeight: 1.1,
        letterSpacing: "-0.02em",
        color: "var(--cream-50)"
      }
    }, t.about.title), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-body)",
        fontSize: "var(--text-lg)",
        lineHeight: 1.6,
        color: "rgba(254,252,247,0.9)",
        maxWidth: "52ch"
      }
    }, t.about.lead), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 0,
        marginTop: "var(--space-2)"
      }
    }, t.about.points.map((p, i) => /*#__PURE__*/React.createElement("div", {
      key: p.t,
      style: {
        display: "flex",
        gap: "var(--space-5)",
        alignItems: "baseline",
        padding: "var(--space-5) 0",
        borderTop: i === 0 ? "none" : "var(--border-width-hair) solid var(--border-hairline)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: "var(--type-price)",
        fontSize: "var(--text-base)",
        color: "var(--gold-400)",
        flex: "0 0 auto",
        minWidth: "1.4em"
      }
    }, "0" + (i + 1)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 5
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        font: "var(--type-h3)",
        fontSize: "var(--text-xl)",
        letterSpacing: "var(--tracking-normal)",
        color: "var(--cream-50)"
      }
    }, p.t), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-body)",
        lineHeight: 1.55,
        color: "rgba(254,252,247,0.82)",
        maxWidth: "48ch"
      }
    }, p.d)))))))));
  };
})(React, ReactDOM);
/* Gallery.jsx */
(function (React, ReactDOM) {
  /* Galleri: sex bildplatser i asymmetrisk mosaik. Sidan ska se art directad ut
     redan innan fotona finns. */
  window.Gallery = function Gallery({
    t
  }) {
    const PhotoSlot = window.PhotoSlot;
    const Reveal = window.Reveal;
    const spans = [{
      col: "span 2",
      row: "span 2"
    }, {
      col: "span 2",
      row: "span 1"
    }, {
      col: "span 1",
      row: "span 1"
    }, {
      col: "span 1",
      row: "span 1"
    }, {
      col: "span 2",
      row: "span 1"
    }, {
      col: "span 2",
      row: "span 1"
    }];

    // Riktiga foton (från /tinified), i samma ordning som gallery.slots i copy.
    const photos = ["tinified/7.webp",
    // Friterad kyckling (stor ruta)
    "tinified/5.webp",
    // Vårrullar
    "tinified/unnamed1.webp",
    // Kycklingspett
    "tinified/4.webp",
    // Cashewnötter
    "tinified/6.webp",
    // Röd curry
    "tinified/unnamed.webp" // Grön curry
    ];
    return /*#__PURE__*/React.createElement("section", {
      id: "bilder",
      className: "ld-section",
      style: {
        background: "var(--cream-50)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "var(--container)",
        margin: "0 auto",
        padding: "0 var(--gutter)",
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-10)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: "var(--space-8)",
        alignItems: "flex-end",
        justifyContent: "space-between",
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-3)",
        maxWidth: "30ch"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: "var(--type-label)",
        letterSpacing: "var(--tracking-label)",
        textTransform: "uppercase",
        color: "var(--gold-700)"
      }
    }, t.gallery.eyebrow), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: "clamp(26px, 3vw, 42px)",
        lineHeight: 1.08,
        letterSpacing: "-0.022em",
        color: "var(--navy-700)"
      }
    }, t.gallery.title)), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-body)",
        fontSize: "var(--text-lg)",
        fontWeight: "var(--weight-medium)",
        lineHeight: 1.55,
        color: "var(--ink-700)",
        maxWidth: "36ch"
      }
    }, t.gallery.lead)), /*#__PURE__*/React.createElement("div", {
      className: "ld-gallery",
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
        gridAutoRows: "clamp(150px, 17vw, 210px)",
        gap: "var(--space-4)"
      }
    }, t.gallery.slots.map((label, i) => /*#__PURE__*/React.createElement(Reveal, {
      key: label,
      delay: i * 70,
      style: {
        gridColumn: spans[i].col,
        gridRow: spans[i].row
      }
    }, /*#__PURE__*/React.createElement(PhotoSlot, {
      label: label,
      alt: label,
      src: photos[i],
      style: {
        height: "100%"
      }
    }))))));
  };
})(React, ReactDOM);
/* Reviews.jsx */
(function (React, ReactDOM) {
  /* Omdömen: riktiga Google-omdömen, avskrivna och förkortade. Citaten står på
     svenska i båda språklägena — vi översätter inte någon annans ord. */
  window.Reviews = function Reviews({
    t,
    lang,
    data
  }) {
    const {
      Button
    } = window.LD_DS;
    const Reveal = window.Reveal;
    const Stars = window.Stars;
    const place = data.place;
    return /*#__PURE__*/React.createElement("section", {
      id: "omdomen",
      className: "ld-section",
      style: {
        background: "var(--cream-100)",
        borderTop: "var(--border-width-hair) solid var(--border-on-light)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "var(--container)",
        margin: "0 auto",
        padding: "0 var(--gutter)",
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-10)"
      }
    }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: "var(--space-8)",
        alignItems: "flex-end",
        justifyContent: "space-between",
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-3)",
        maxWidth: "30ch"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: "var(--type-label)",
        letterSpacing: "var(--tracking-label)",
        textTransform: "uppercase",
        color: "var(--gold-700)"
      }
    }, t.reviews.eyebrow), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: "clamp(26px, 3vw, 40px)",
        lineHeight: 1.08,
        letterSpacing: "-0.022em",
        color: "var(--navy-700)"
      }
    }, t.reviews.title)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: "var(--space-4)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: "var(--type-price)",
        fontSize: "clamp(38px, 4vw, 52px)",
        color: "var(--navy-700)",
        lineHeight: 1
      }
    }, lang === "sv" ? place.rating : place.ratingEn), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 5
      }
    }, /*#__PURE__*/React.createElement(Stars, {
      value: 5,
      size: "var(--text-lg)",
      color: "var(--gold-600)"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        font: "var(--type-body)",
        fontWeight: "var(--weight-medium)",
        color: "var(--ink-700)"
      }
    }, place.reviewCount, " ", t.hero.ratingSuffix))))), /*#__PURE__*/React.createElement("div", {
      className: "ld-reviews",
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
        gap: "var(--space-4)"
      }
    }, data.reviews.map((r, i) => /*#__PURE__*/React.createElement(Reveal, {
      key: r.author,
      delay: i * 90,
      style: {
        display: "flex"
      }
    }, /*#__PURE__*/React.createElement("figure", {
      style: {
        margin: 0,
        background: "var(--cream-50)",
        border: "var(--border-width-hair) solid var(--border-on-light)",
        borderRadius: "var(--radius-md)",
        padding: "var(--space-8)",
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-4)",
        width: "100%"
      }
    }, /*#__PURE__*/React.createElement(Stars, {
      value: r.stars,
      size: "var(--text-sm)",
      color: "var(--gold-600)"
    }), /*#__PURE__*/React.createElement("blockquote", {
      style: {
        margin: 0,
        fontFamily: "var(--font-display)",
        fontSize: "var(--text-xl)",
        lineHeight: 1.4,
        color: "var(--navy-700)",
        flex: 1
      }
    }, "”" + r.text + "”"), /*#__PURE__*/React.createElement("figcaption", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 2
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: "var(--type-body)",
        fontWeight: "var(--weight-semibold)",
        color: "var(--ink-900)"
      }
    }, r.author), /*#__PURE__*/React.createElement("span", {
      style: {
        font: "var(--type-body-sm)",
        color: "var(--ink-500)"
      }
    }, lang === "sv" ? r.when : r.whenEn)))))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "onLightGhost",
      size: "md",
      href: place.mapsUrl
    }, t.reviews.link))));
  };
})(React, ReactDOM);
/* FindUs.jsx */
(function (React, ReactDOM) {
  /* Hitta hit: riktig OpenStreetMap-karta över Rotviksbro, adress och telefon.
     Ljus sektion — kartan är ljus, så kortet ska vara det också. */
  window.FindUs = function FindUs({
    t,
    data
  }) {
    const {
      Button
    } = window.LD_DS;
    const Reveal = window.Reveal;
    const ref = React.useRef(null);
    const place = data.place;
    React.useEffect(() => {
      const el = ref.current;
      if (!el || el.dataset.ready) return undefined;

      // Ladda Leaflet (CSS + JS) en gång, lazy — inte i sidhuvudet.
      const loadLeaflet = () => {
        if (window.__leafletLoad) return window.__leafletLoad;
        window.__leafletLoad = new Promise(resolve => {
          const css = document.createElement("link");
          css.rel = "stylesheet";
          css.href = "vendor/leaflet.css";
          document.head.appendChild(css);
          const js = document.createElement("script");
          js.src = "vendor/leaflet.js";
          js.async = true;
          js.onload = () => resolve(window.L);
          document.head.appendChild(js);
        });
        return window.__leafletLoad;
      };
      const init = L => {
        if (!L || el.dataset.ready) return;
        el.dataset.ready = "1";
        const map = L.map(el, {
          scrollWheelZoom: false,
          attributionControl: true
        }).setView([place.lat, place.lon], 13);
        L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
          maxZoom: 18,
          attribution: "&copy; OpenStreetMap"
        }).addTo(map);
        const icon = L.divIcon({
          className: "",
          html: '<div style="width:24px;height:24px;border-radius:50%;background:#D6A22E;border:3px solid #081F52;box-shadow:0 2px 10px rgba(6,23,53,.45)"></div>',
          iconSize: [24, 24],
          iconAnchor: [12, 12]
        });
        L.marker([place.lat, place.lon], {
          icon
        }).addTo(map).bindPopup("Lam-Dee · " + place.address);
      };

      // Init först när kartan är nära vyn — sparar ~150 kB på första laddningen.
      const obs = new IntersectionObserver(entries => {
        if (entries.some(e => e.isIntersecting)) {
          obs.disconnect();
          loadLeaflet().then(init);
        }
      }, {
        rootMargin: "300px"
      });
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
    const label = {
      font: "var(--type-label)",
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase",
      color: "var(--gold-700)"
    };
    return /*#__PURE__*/React.createElement("section", {
      id: "hitta",
      className: "ld-section",
      style: {
        background: "var(--cream-200)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "var(--container)",
        margin: "0 auto",
        padding: "0 var(--gutter)",
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-10)"
      }
    }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: "var(--space-8)",
        alignItems: "flex-end",
        justifyContent: "space-between",
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-3)",
        maxWidth: "30ch"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: label
    }, t.find.eyebrow), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: "clamp(26px, 3vw, 42px)",
        lineHeight: 1.08,
        letterSpacing: "-0.022em",
        color: "var(--navy-700)"
      }
    }, t.find.title)), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-body)",
        fontSize: "var(--text-lg)",
        fontWeight: "var(--weight-medium)",
        lineHeight: 1.55,
        color: "var(--ink-700)",
        maxWidth: "40ch"
      }
    }, t.find.lead))), /*#__PURE__*/React.createElement("div", {
      className: "ld-find-grid",
      style: {
        display: "grid",
        gridTemplateColumns: "minmax(0, 1.4fr) minmax(280px, 1fr)",
        gap: "var(--space-6)",
        alignItems: "stretch"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        minHeight: 420,
        borderRadius: "var(--radius-lg)",
        overflow: "hidden",
        border: "var(--border-width-hair) solid var(--border-on-light)",
        background: "var(--cream-100)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      ref: ref,
      style: {
        position: "absolute",
        inset: 0
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-4)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: card
    }, /*#__PURE__*/React.createElement("span", {
      style: label
    }, t.find.addressLabel), /*#__PURE__*/React.createElement("span", {
      style: {
        font: "var(--type-h3)",
        fontSize: "var(--text-xl)",
        color: "var(--navy-700)",
        letterSpacing: "var(--tracking-normal)"
      }
    }, place.address), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-body)",
        color: "var(--ink-700)"
      }
    }, place.addressLine2), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: "var(--space-2)"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "onLightGhost",
      size: "md",
      href: "https://www.google.com/maps/dir/?api=1&destination=" + place.lat + "," + place.lon
    }, t.find.directions))), /*#__PURE__*/React.createElement("div", {
      style: {
        ...card,
        background: "var(--navy-800)",
        border: "var(--border-width-hair) solid var(--navy-800)",
        flex: 1,
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        ...label,
        color: "var(--gold-400)"
      }
    }, t.find.phoneLabel), /*#__PURE__*/React.createElement("a", {
      href: place.phoneHref,
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: "var(--weight-semibold)",
        fontSize: "clamp(26px, 3vw, 36px)",
        color: "var(--cream-50)",
        letterSpacing: "-0.01em",
        whiteSpace: "nowrap"
      }
    }, place.phone), /*#__PURE__*/React.createElement("span", {
      style: {
        font: "var(--type-body)",
        fontSize: "var(--text-sm)",
        color: "rgba(254,252,247,0.82)"
      }
    }, t.quick.howValue), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: "var(--space-2)"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "lg",
      fullWidth: true,
      icon: "☎",
      href: place.phoneHref
    }, t.hero.cta)))))));
  };
})(React, ReactDOM);
/* HoursBand.jsx */
(function (React, ReactDOM) {
  /* Öppettidsband: egen sektion, inte ett kort i marginalen. Stängda dagar skrivs
     ut — gästen ska aldrig behöva gissa. */
  window.HoursBand = function HoursBand({
    t,
    lang,
    data,
    openState
  }) {
    const {
      Badge
    } = window.LD_DS;
    const Reveal = window.Reveal;
    const rows = data.hours.map(h => ({
      day: lang === "sv" ? h.sv : h.en,
      time: h.closed ? lang === "sv" ? h.timeSv : h.timeEn : h.time,
      closed: h.closed
    }));
    return /*#__PURE__*/React.createElement("section", {
      id: "oppettider",
      style: {
        background: "var(--navy-800)",
        padding: "var(--space-20) 0"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "var(--container)",
        margin: "0 auto",
        padding: "0 var(--gutter)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "ld-hours-grid",
      style: {
        display: "grid",
        gridTemplateColumns: "minmax(0, 0.85fr) minmax(0, 1.15fr)",
        gap: "clamp(32px, 5vw, 80px)",
        alignItems: "start"
      }
    }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-4)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: "var(--type-label)",
        letterSpacing: "var(--tracking-label)",
        textTransform: "uppercase",
        color: "var(--gold-400)"
      }
    }, t.hours.eyebrow), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: "clamp(24px, 2.8vw, 36px)",
        lineHeight: 1.1,
        letterSpacing: "-0.02em",
        color: "var(--cream-50)"
      }
    }, t.hours.title), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-body)",
        lineHeight: 1.55,
        color: "rgba(254,252,247,0.84)",
        maxWidth: "38ch"
      }
    }, t.hours.lead), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: "var(--space-3)",
        flexWrap: "wrap",
        marginTop: "var(--space-2)"
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: openState.open ? "gold" : "quiet"
    }, openState.open ? t.hero.openNow : t.hero.closedNow), /*#__PURE__*/React.createElement("span", {
      style: {
        font: "var(--type-body-sm)",
        color: "rgba(254,252,247,0.72)"
      }
    }, openState.label)))), /*#__PURE__*/React.createElement(Reveal, {
      delay: 110
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column"
      }
    }, rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
      key: r.day,
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        gap: "var(--space-6)",
        padding: "var(--space-5) 0",
        borderTop: i === 0 ? "none" : "var(--border-width-hair) solid var(--border-hairline)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: "var(--type-body)",
        fontSize: "var(--text-lg)",
        color: r.closed ? "rgba(254,252,247,0.5)" : "var(--cream-50)"
      }
    }, r.day), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: "var(--weight-semibold)",
        fontSize: "clamp(20px, 2.2vw, 28px)",
        letterSpacing: "-0.01em",
        color: r.closed ? "rgba(254,252,247,0.45)" : "var(--gold-400)",
        whiteSpace: "nowrap"
      }
    }, r.time))))))));
  };
})(React, ReactDOM);
/* SiteFooter.jsx */
(function (React, ReactDOM) {
  /* Foten: skylten i full storlek, telefonen stor, resten litet. Sista elefanten
     på sidan sitter i logotypen. */
  window.SiteFooter = function SiteFooter({
    t,
    data
  }) {
    const Reveal = window.Reveal;
    const place = data.place;
    const label = {
      font: "var(--type-label)",
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase",
      color: "var(--gold-400)"
    };
    return /*#__PURE__*/React.createElement("footer", {
      style: {
        background: "var(--navy-900)",
        borderTop: "var(--border-width-hair) solid var(--border-hairline)",
        padding: "var(--space-16) 0 var(--space-8)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "var(--container)",
        margin: "0 auto",
        padding: "0 var(--gutter)",
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-10)"
      }
    }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
      className: "ld-foot-top",
      style: {
        display: "flex",
        gap: "var(--space-10)",
        flexWrap: "wrap",
        alignItems: "flex-start",
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "ld-foot-brand",
      style: {
        display: "flex",
        gap: "var(--space-5)",
        alignItems: "center",
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "assets/logo-sign.png",
      alt: "",
      "aria-hidden": "true",
      style: {
        height: 64,
        width: "auto",
        flex: "0 0 auto"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 5,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: "var(--type-h3)",
        fontSize: "var(--text-xl)",
        color: "var(--cream-50)"
      }
    }, t.footer.rights), /*#__PURE__*/React.createElement("span", {
      style: {
        font: "var(--type-body-sm)",
        color: "var(--text-muted)"
      }
    }, place.address, " · ", place.domain))), (() => {
      // Rendera bara sociala länkar som faktiskt är ifyllda — en <a href="#">
      // är en trasig länk för både besökare och crawlers.
      const socials = [{
        label: "Facebook",
        href: place.facebook
      }, {
        label: "Instagram",
        href: place.instagram
      }].filter(s => s.href && s.href !== "#");
      if (!socials.length) return null;
      return /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          gap: "var(--space-3)"
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: label
      }, t.footer.follow), /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          gap: "var(--space-5)"
        }
      }, socials.map(s => /*#__PURE__*/React.createElement("a", {
        key: s.label,
        href: s.href,
        rel: "noopener",
        style: {
          font: "var(--type-body)",
          color: "var(--cream-50)",
          textDecoration: "none",
          borderBottom: "1px solid rgba(239,198,92,0.4)",
          paddingBottom: 2
        }
      }, s.label))));
    })(), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-2)",
        alignItems: "flex-start"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: label
    }, t.find.phoneLabel), /*#__PURE__*/React.createElement("a", {
      href: place.phoneHref,
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: "var(--weight-semibold)",
        fontSize: "var(--text-3xl)",
        color: "var(--gold-400)",
        letterSpacing: "-0.01em",
        whiteSpace: "nowrap"
      }
    }, place.phone)))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: "var(--space-6)",
        flexWrap: "wrap",
        justifyContent: "space-between",
        paddingTop: "var(--space-6)",
        borderTop: "var(--border-width-hair) solid var(--border-hairline)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: "var(--type-body-sm)",
        color: "var(--text-muted)"
      }
    }, t.footer.built), /*#__PURE__*/React.createElement("span", {
      style: {
        font: "var(--type-body-sm)",
        color: "var(--text-muted)"
      }
    }, t.find.mapNote))));
  };
})(React, ReactDOM);
/* app.jsx */
(function (React, ReactDOM) {
  /* Sidans komposition. Rytmen är avsiktlig: helbilds-hero → favoriter → meny →
     om oss (mörk) → galleri → kompakt kontaktband (mörkt) → omdömen → hitta hit →
     öppettider → fot. Navigationen pekar på tre tydliga mål: Meny, Om oss, Hitta hit. */
  function LamDeeSite() {
    const DATA = window.LD_DATA;
    const COPY = window.LD_COPY;
    const {
      NavBar,
      LangToggle
    } = window.LD_DS;
    const Reveal = window.Reveal;
    const [lang, setLang] = React.useState("sv");
    const t = COPY[lang];

    // Tis–fre 11–20, lördag 11–18, söndag och måndag stängt.
    const os = function () {
      const now = new Date();
      const table = {
        2: [660, 1200],
        3: [660, 1200],
        4: [660, 1200],
        5: [660, 1200],
        6: [660, 1080]
      };
      const today = table[now.getDay()];
      const fmt = m => String(Math.floor(m / 60)).padStart(2, "0") + "." + String(m % 60).padStart(2, "0");
      if (!today) {
        return {
          open: false,
          time: lang === "sv" ? "Stängt" : "Closed",
          label: lang === "sv" ? "Söndag och måndag är vagnen stängd" : "Closed Sunday and Monday"
        };
      }
      const mins = now.getHours() * 60 + now.getMinutes();
      const span = fmt(today[0]) + "–" + fmt(today[1]);
      return {
        open: mins >= today[0] && mins < today[1],
        time: span,
        label: t.hero.todayPrefix + " " + span
      };
    }();

    // Kompakt kontaktband — egen sektion en bit ner, inte fastklistrad under hero.
    const bandLabel = {
      font: "var(--type-label)",
      fontSize: "var(--text-2xs)",
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase",
      color: "var(--gold-400)"
    };
    const bandValue = {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-semibold)",
      fontSize: "clamp(20px, 1.8vw, 24px)",
      lineHeight: 1.15,
      letterSpacing: "-0.01em",
      color: "var(--cream-50)",
      textDecoration: "none"
    };
    const bandSub = {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-sm)",
      lineHeight: 1.4,
      color: "rgba(254,252,247,0.66)"
    };
    const closedWord = t.hours.closed.toLowerCase();
    const contactBand = /*#__PURE__*/React.createElement("section", {
      id: "kontakt",
      className: "ld-section",
      style: {
        background: "var(--navy-800)",
        borderTop: "var(--border-width-hair) solid var(--border-hairline)",
        borderBottom: "var(--border-width-hair) solid var(--border-hairline)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "var(--container)",
        margin: "0 auto",
        padding: "0 var(--gutter)"
      }
    }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
      className: "ld-infoband",
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(3, minmax(0, 1fr))"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "ld-band-item"
    }, /*#__PURE__*/React.createElement("span", {
      style: bandLabel
    }, /*#__PURE__*/React.createElement("span", {
      className: "ld-phone-emoji",
      "aria-hidden": "true"
    }, "☎ "), t.quick.callLabel), /*#__PURE__*/React.createElement("a", {
      href: DATA.place.phoneHref,
      style: {
        ...bandValue,
        whiteSpace: "nowrap"
      }
    }, DATA.place.phone), /*#__PURE__*/React.createElement("span", {
      style: bandSub
    }, t.quick.waitValue, " · ", t.quick.orderKicker)), /*#__PURE__*/React.createElement("div", {
      className: "ld-band-item"
    }, /*#__PURE__*/React.createElement("span", {
      style: bandLabel
    }, t.hours.eyebrow), /*#__PURE__*/React.createElement("span", {
      style: bandValue
    }, os.open ? t.hero.openNow : t.hours.closed, " · ", os.time), /*#__PURE__*/React.createElement("span", {
      style: bandSub
    }, "Tis–fre 11–20 · Lör 11–18 · Sön–mån ", closedWord)), /*#__PURE__*/React.createElement("div", {
      className: "ld-band-item"
    }, /*#__PURE__*/React.createElement("span", {
      style: bandLabel
    }, t.find.eyebrow), /*#__PURE__*/React.createElement("span", {
      style: bandValue
    }, DATA.place.address), /*#__PURE__*/React.createElement("a", {
      href: "#hitta",
      style: {
        ...bandSub,
        color: "var(--gold-300)",
        textDecoration: "none"
      }
    }, t.find.directions, " →"))))));
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(NavBar, {
      brand: null,
      logoSrc: "assets/logo-sign.png",
      logoHeight: 34,
      links: [{
        href: "#meny",
        label: t.nav.menu
      }, {
        href: "#om",
        label: t.nav.food
      }, {
        href: "#hitta",
        label: t.nav.find
      }],
      phone: DATA.place.phone,
      callLabel: t.quick.callLabel,
      right: /*#__PURE__*/React.createElement(LangToggle, {
        value: lang,
        onChange: setLang
      })
    }), /*#__PURE__*/React.createElement("main", null, React.createElement(window.Hero, {
      t,
      lang,
      place: DATA.place,
      openState: os
    }), React.createElement(window.Featured, {
      t,
      lang,
      data: DATA
    }), React.createElement(window.MenuSection, {
      t,
      lang,
      data: DATA
    }), React.createElement(window.About, {
      t
    }), React.createElement(window.Gallery, {
      t
    }), contactBand, React.createElement(window.Reviews, {
      t,
      lang,
      data: DATA
    }), React.createElement(window.FindUs, {
      t,
      data: DATA
    }), React.createElement(window.HoursBand, {
      t,
      lang,
      data: DATA,
      openState: os
    })), React.createElement(window.SiteFooter, {
      t,
      data: DATA
    }));
  }
  window.LamDeeSite = LamDeeSite;
  ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(LamDeeSite));
})(React, ReactDOM);
})();