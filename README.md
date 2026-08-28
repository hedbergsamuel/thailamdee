# Thaimat Lam-Dee

Enkelsidig webbplats för **Thai Take-Away Lam-Dee Chiangrai** — foodtruck i Rotviksbro, Uddevalla.

Statisk sida (ingen build). React + JSX kompileras i webbläsaren via Babel Standalone, så `index.html` kan öppnas direkt när den servas från projektets rot.

## Kör lokalt

```bash
python3 serve.py            # http://localhost:8199/
python3 serve.py 8080       # egen port
```

## Struktur

- `index.html` — sidan (ligger i roten så den kan deployas direkt).
- `*.jsx`, `bootstrap.js`, `data.js`, `copy.js` — sektioner, innehåll och laddare.
- `components/` — designsystemets komponenter.
- `tokens/`, `styles.css` — designtokens och global stil.
- `assets/`, `tinified/` — logotyp, hero-bild och maträttsfoton.

## Deploy (GitHub Pages)

1. Push:a repot till GitHub (publikt).
2. Repo → **Settings → Pages** → Source: *Deploy from a branch* → Branch: `main` / `(root)` → Save.
3. Sidan blir nåbar på `https://<användarnamn>.github.io/<repo>/` — dela den länken som preview.
4. Egen domän (thailamdee.se): lägg en `CNAME`-fil i roten med domänen och peka DNS hos Simply mot GitHub Pages (se GitHubs guide "Managing a custom domain").
