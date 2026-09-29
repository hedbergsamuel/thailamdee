# Domän: thailamdee.se — LIVE ✅

Sidan är live på **https://thailamdee.se/** (sedan 2026-09-29) via GitHub Pages
(repo `hedbergsamuel/thailamdee`, branch `main` / root). HTTPS är påtvingat och
certet är utfärdat. `http://` och github.io-adressen omdirigeras hit.

## Nuvarande konfiguration

**GitHub Pages:** custom domain = `thailamdee.se` (satt via `CNAME`-filen i roten),
Enforce HTTPS = på.

**DNS hos Simply** (apex `thailamdee.se`), fyra A-poster:

```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

DNSSEC är på. Byt inte dessa poster utan anledning.

## Kvar / valfritt

- **www:** lägg en CNAME hos Simply — `www` → `hedbergsamuel.github.io.` — om du vill
  att `www.thailamdee.se` ska fungera (finns ej idag).
- **E-post:** zonen har inga MX-poster, så `@thailamdee.se`-mejl fungerar inte.
  Lägg till MX om ni ska ha domänmejl.

## Uppdatera sidan i framtiden

Efter ändring i `.jsx`: kör `./build.sh` och bumpa `?v=N` i `index.html`, committa och
`git push`. Det driftsätts automatiskt till thailamdee.se.
