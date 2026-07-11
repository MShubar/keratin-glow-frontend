# Documentation Plan

**Last updated:** 2026-07-11

## What this covers
How we document the Keratin Glow website, SEO, deploy, and day-to-day ops so anyone can maintain the project.

## Document inventory
| Doc | Location | Audience |
|-----|----------|----------|
| Management hub | `management/README.md` | Owner / PM |
| This plan | `management/documentation/plan.md` | Team |
| Deploy guide | `DEPLOYMENT.md` (repo root) | Dev / ops |
| Infra notes | `infra/`, `infrastructure.yml` | Dev |
| Site config | `src/config/site.ts` | Dev / content |
| Gallery config | `src/config/gallery.ts` | Content |

## Standards
1. **Single source of truth for contact data:** `src/config/site.ts` (phone, address, hours, links)
2. **Public URLs:** always use `https://www.keratinglow.bh`
3. **Images:** WebP preferred; gallery files in `public/gallery/`
4. **No secrets in git:** tokens, `.env`, passwords stay out of the repo

## Ops runbooks to keep updated
- [ ] How to update prices
- [ ] How to add a gallery before/after pair
- [ ] How to change opening hours (site + Google Business Profile)
- [ ] How to deploy (GitHub push → Vercel)
- [ ] How to refresh WhatsApp / OG preview (Facebook Sharing Debugger)

## SEO documentation checklist
- [x] Canonical + Open Graph
- [x] `robots.txt` + `sitemap.xml`
- [x] LocalBusiness / HairSalon JSON-LD
- [x] FAQ schema
- [ ] Google Search Console property verified
- [ ] GBP website field = https://www.keratinglow.bh

## Review cadence
- After every major feature: update related plan docs
- Quarterly: prune outdated notes in `management/`
