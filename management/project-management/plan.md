# Project Management Plan

**Project:** Keratin Glow website & local presence  
**Domain:** https://www.keratinglow.bh  
**Last updated:** 2026-07-11

## Goals
- Professional salon landing page that converts WhatsApp bookings
- Strong local SEO in Bahrain (Janabiyah / GCC)
- Fast, reliable production site on Vercel

## Current status
| Area | Status |
|------|--------|
| Live site | Live on Vercel + keratinglow.bh |
| Branding / dark theme | Done |
| SEO basics (schema, sitemap, FAQ) | Done |
| Transformations gallery | Done (replace placeholder photos) |
| Address + opening hours | Done |
| Analytics / Ads / Speed Insights | Done |

## Roadmap (priority)
1. Replace gallery placeholders with real before/after photos
2. Collect and display Google reviews
3. Sticky WhatsApp CTA on mobile
4. Arabic language toggle (EN / AR)
5. Google Search Console verification + sitemap submit
6. Optional: blog / aftercare tips for SEO

## Roles
| Role | Owner | Notes |
|------|-------|-------|
| Site / deploy | | GitHub + Vercel |
| Content / photos | | Instagram @keratinglow_bh |
| Ads / tracking | | Google Ads `AW-18265550482` |
| Google Business Profile | | Must match site NAP + hours |

## Milestones
| Milestone | Target | Done when |
|-----------|--------|-----------|
| Real gallery live | | Real WebP photos in `public/gallery/` |
| Reviews on site | | 3+ testimonials or GBP embed |
| Arabic v1 | | EN/AR toggle for main sections |
| Local pack visibility | | Ranking for “keratin Bahrain” / Maps |

## Risks
| Risk | Impact | Mitigation |
|------|--------|------------|
| Placeholder gallery looks fake | Trust | Swap real photos ASAP |
| Address/hours drift from GBP | SEO / trust | Update `src/config/site.ts` + GBP together |
| Render/API keep-alives (other projects) | Ops noise | Retries / paid tier if needed |

## Cadence
- **Weekly:** check Vercel Analytics, Speed Insights, WhatsApp inquiries
- **Monthly:** update roadmap, review ads spend, refresh gallery
