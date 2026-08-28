/* Menyn kommer från Lam Dee's egen menyfil (uploads/Lam_Dees_Meny.xlsx).
   Priserna är exakta. Ingredienslistorna är avskrivna, EN-texterna översatta. */
window.LD_DATA = (function () {
  const P = {
    wok:      [{ label: "Tofu", price: "139 kr" }, { label: "Kyckling", price: "139 kr" }, { label: "Biff", price: "149 kr" }, { label: "Tigerräkor", price: "159 kr" }, { label: "Skaldjursmix", price: "169 kr" }],
    wokNoMix: [{ label: "Tofu", price: "139 kr" }, { label: "Kyckling", price: "139 kr" }, { label: "Biff", price: "149 kr" }, { label: "Tigerräkor", price: "159 kr" }],
    soupMix:  [{ label: "Tofu", price: "139 kr" }, { label: "Kyckling", price: "139 kr" }, { label: "Tigerräkor", price: "159 kr" }, { label: "Skaldjur", price: "169 kr" }],
    soup:     [{ label: "Tofu", price: "139 kr" }, { label: "Kyckling", price: "139 kr" }, { label: "Tigerräkor", price: "159 kr" }]
  };
  const EN = { Tofu: "Tofu", Kyckling: "Chicken", Biff: "Beef", "Tigerräkor": "Tiger prawns", Skaldjursmix: "Seafood mix", Skaldjur: "Seafood" };
  const en = (list) => list.map((p) => ({ label: EN[p.label] || p.label, price: p.price.replace("kr", "SEK") }));

  const dishes = [
    { n: 1, cat: "fried", name: "Vårrullar", nameEn: "Spring rolls",
      note: "3, 5 eller 7 st", noteEn: "3, 5 or 7 pcs",
      ing: "Fläskfärs, räkor eller vegetariskt — välj fyllning",
      ingEn: "Minced pork, prawns or vegetarian — choose your filling",
      prices: [{ label: "3 st", price: "109 kr" }, { label: "5 st", price: "129 kr" }, { label: "7 st", price: "149 kr" }],
      gf: false, kids: false, chef: false },
    { n: 2, cat: "fried", name: "Friterad kyckling", nameEn: "Fried chicken",
      ing: "Kyckling", ingEn: "Chicken",
      prices: [{ label: "5 st", price: "139 kr" }, { label: "7 st", price: "149 kr" }],
      gf: false, kids: true, chef: false },
    { n: 3, cat: "fried", name: "Kycklingspett", nameEn: "Chicken skewers",
      ing: "Kyckling", ingEn: "Chicken",
      prices: [{ label: "5 st", price: "139 kr" }, { label: "7 st", price: "159 kr" }],
      gf: false, kids: true, chef: false },
    { n: 4, cat: "fried", name: "Friterade räkor", nameEn: "Fried prawns",
      ing: "Räkor", ingEn: "Prawns",
      prices: [{ label: "5 st", price: "139 kr" }, { label: "7 st", price: "159 kr" }],
      gf: false, kids: false, chef: false },
    { n: 5, cat: "wok", name: "Pad Medmamuang", nameEn: "Pad Medmamuang",
      note: "Cashewnötter", noteEn: "Cashew nuts",
      ing: "Salladslök, paprika, morot, ostronsåsblandning, cashewnötter",
      ingEn: "Spring onion, bell pepper, carrot, oyster sauce blend, cashew nuts",
      prices: P.wokNoMix, gf: false, kids: false, chef: true },
    { n: 6, cat: "wok", name: "Pad Ostronsås", nameEn: "Pad Oyster Sauce",
      ing: "Broccoli, paprika, purjolök, vitkål, zucchini, morötter, gul lök, ostronsås",
      ingEn: "Broccoli, bell pepper, leek, white cabbage, courgette, carrot, onion, oyster sauce",
      prices: P.wok, gf: false, kids: false, chef: false },
    { n: 7, cat: "wok", name: "Pad Kapao", nameEn: "Pad Kapao",
      ing: "Hot basilika, chili, vitlök, bambuskott, morötter, gul lök",
      ingEn: "Holy basil, chilli, garlic, bamboo shoots, carrot, onion",
      prices: P.wok, gf: false, kids: false, chef: false },
    { n: 8, cat: "wok", name: "Pad Preuwan", nameEn: "Pad Preuwan",
      note: "Sötsursås", noteEn: "Sweet & sour",
      ing: "Paprika, gul lök, morötter, gurka, sötsursås",
      ingEn: "Bell pepper, onion, carrot, cucumber, sweet & sour sauce",
      prices: P.wok, gf: false, kids: false, chef: false },
    { n: 9, cat: "wok", name: "Pad Pak Raummit", nameEn: "Pad Pak Raummit",
      ing: "Broccoli, vitkål, morötter, paprika, zucchini, minimajs, gul lök",
      ingEn: "Broccoli, white cabbage, carrot, bell pepper, courgette, baby corn, onion",
      prices: P.wok, gf: false, kids: false, chef: false },
    { n: 10, cat: "curry", name: "Keang Phed", nameEn: "Keang Phed",
      note: "Röd curry", noteEn: "Red curry",
      ing: "Kokosmjölk, bambuskott, morötter, paprika, zucchini, limeblad, söt basilika, röd currypasta",
      ingEn: "Coconut milk, bamboo shoots, carrot, bell pepper, courgette, lime leaf, sweet basil, red curry paste",
      prices: P.wokNoMix, gf: true, kids: false, chef: true },
    { n: 11, cat: "curry", name: "Keang Kheowan", nameEn: "Keang Kheowan",
      note: "Grön curry", noteEn: "Green curry",
      ing: "Kokosmjölk, bambuskott, zucchini, limeblad, söt basilika, paprika, grön currypasta",
      ingEn: "Coconut milk, bamboo shoots, courgette, lime leaf, sweet basil, bell pepper, green curry paste",
      prices: P.wokNoMix, gf: true, kids: false, chef: true },
    { n: 12, cat: "noodles", name: "Pad Thai", nameEn: "Pad Thai",
      ing: "Risnudlar, ägg, morötter, purjolök, böngroddar, jordnötter",
      ingEn: "Rice noodles, egg, carrot, leek, bean sprouts, peanuts",
      prices: P.wokNoMix, gf: true, gfPartial: true, kids: false, chef: true },
    { n: 13, cat: "noodles", name: "Pad Ägg Nudlar", nameEn: "Pad Egg Noodles",
      ing: "Äggnudlar, broccoli, morötter, vitkål, purjolök",
      ingEn: "Egg noodles, broccoli, carrot, white cabbage, leek",
      prices: P.wokNoMix, gf: false, kids: true, chef: false },
    { n: 14, cat: "noodles", name: "Stekt ris", nameEn: "Fried rice",
      ing: "Ris, ägg, morötter, ärter, salladslök, gul lök",
      ingEn: "Rice, egg, carrot, peas, spring onion, onion",
      prices: P.wokNoMix, gf: false, kids: true, chef: false },
    { n: 15, cat: "soup", name: "Tom Yum Kung", nameEn: "Tom Yum Kung",
      ing: "Citrongräs, galangal, champinjoner, limeblad, lime, chilipasta, koriander",
      ingEn: "Lemongrass, galangal, mushrooms, lime leaf, lime, chilli paste, coriander",
      prices: P.soupMix, gf: true, kids: false, chef: false },
    { n: 16, cat: "soup", name: "Tom Kha Gai", nameEn: "Tom Kha Gai",
      ing: "Kokosmjölk, galangal, champinjoner, citrongräs, limeblad, koriander",
      ingEn: "Coconut milk, galangal, mushrooms, lemongrass, lime leaf, coriander",
      prices: P.soup, gf: true, kids: false, chef: false },
    { n: 17, cat: "spicy", name: "Laab", nameEn: "Laab",
      ing: "Kycklingfärs, chilipeppar, salladslök, krossat ris, rödlök, koriander, mynta",
      ingEn: "Minced chicken, chilli, spring onion, toasted rice, red onion, coriander, mint",
      prices: [{ label: "Kycklingfärs", price: "139 kr" }], gf: true, kids: false, chef: false }
  ];

  dishes.forEach((d) => { d.pricesEn = en(d.prices); });

  const categories = [
    { value: "all", sv: "Alla rätter", en: "All dishes" },
    { value: "fried", sv: "Friterat", en: "Fried" },
    { value: "wok", sv: "Wokrätter", en: "Wok" },
    { value: "curry", sv: "Grytor & curry", en: "Curries" },
    { value: "noodles", sv: "Nudlar & ris", en: "Noodles & rice" },
    { value: "soup", sv: "Soppor", en: "Soups" },
    { value: "spicy", sv: "Spicy special", en: "Spicy special" }
  ];

  const hours = [
    { sv: "Tisdag–fredag", en: "Tuesday–Friday", time: "11.00–20.00", closed: false },
    { sv: "Lördag", en: "Saturday", time: "11.00–18.00", closed: false },
    { sv: "Söndag–måndag", en: "Sunday–Monday", timeSv: "Stängt", timeEn: "Closed", closed: true }
  ];

  const place = {
    name: "Rotvik",
    address: "Rotvik 409, 451 95 Uddevalla",
    addressLine2: "Vid väg 160/161",
    lat: 58.3416,
    lon: 11.68907,
    phone: "072-22 93 789",
    phoneHref: "tel:+46722293789",
    domain: "thailamdee.se",
    facebook: "#",
    instagram: "#",
    /* Betyget är avskrivet från Googles företagskort 26 aug 2026. */
    rating: "4,8",
    ratingEn: "4.8",
    reviewCount: 63,
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Thaimat+Lam+dee+Rotviksbro"
  };

  /* Riktiga Google-omdömen, förkortade. Citaten står på svenska även i
     engelska läget — vi översätter inte någon annans ord. */
  const reviews = [
    { author: "Arvid Hellstrand", when: "Augusti 2026", whenEn: "August 2026", stars: 5,
      text: "Gott och trevligt. Det är starkt ”på riktigt” om man ber om det, vilket jag uppskattade starkt." },
    { author: "Edvin Börjesson", when: "Augusti 2026", whenEn: "August 2026", stars: 5,
      text: "Riktigt bra mat, kanske den bästa thaimaten jag ätit. Bra portioner, fräscht kök och väldigt trevlig personal." },
    { author: "Tomas Zeljko", when: "Sommaren 2025", whenEn: "Summer 2025", stars: 5,
      text: "Väldigt gott. Testade fyra av deras rätter och kommer absolut handla här igen. Maten är stark enligt thailändsk standard." }
  ];

  return { dishes, categories, hours, place, reviews };
})();
