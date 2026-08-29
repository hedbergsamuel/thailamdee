# Koppla domänen thailamdee.se till GitHub Pages

Repo: `hedbergsamuel/thailamdee` · Preview nu: https://hedbergsamuel.github.io/thailamdee/

Gör stegen **i denna ordning** — annars slutar preview-länken fungera medan DNS
propagerar.

## Steg 1 — Sätt DNS hos Simply (görs FÖRST)

Logga in på Simply → domänen `thailamdee.se` → DNS-inställningar.

**Apex-domänen `thailamdee.se`** — lägg fyra A-poster (host = `@` eller tomt):

| Typ | Namn/Host | Värde            |
|-----|-----------|------------------|
| A   | @         | 185.199.108.153  |
| A   | @         | 185.199.109.153  |
| A   | @         | 185.199.110.153  |
| A   | @         | 185.199.111.153  |

Gärna även fyra AAAA-poster (IPv6, host = `@`):

```
2606:50c0:8000::153
2606:50c0:8001::153
2606:50c0:8002::153
2606:50c0:8003::153
```

**www (rekommenderas)** — så att `www.thailamdee.se` funkar och pekar till samma sida:

| Typ   | Namn/Host | Värde                     |
|-------|-----------|---------------------------|
| CNAME | www       | hedbergsamuel.github.io.  |

Ta bort ev. gamla A/AAAA/CNAME-poster för `@` och `www` som pekar någon annanstans
(t.ex. Simplys parkeringssida).

## Steg 2 — Vänta på DNS

DNS tar oftast 15 min–några timmar. Kolla t.ex. med `dig thailamdee.se +short`
(ska visa 185.199.108–111.153) innan du går vidare.

## Steg 3 — Aktivera domänen (pusha CNAME)

När DNS pekar rätt: pusha `CNAME`-filen (redan förberedd i repo-roten, innehåller
`thailamdee.se`). GitHub läser den, sätter custom domain och utfärdar HTTPS-cert.

```
git push origin main
```

Kryssa sedan i **Enforce HTTPS** under repo → Settings → Pages när rutan blir grön
(kan ta upp till ~15 min efter att domänen verifierats).

Klart — sidan ligger då på https://thailamdee.se/
