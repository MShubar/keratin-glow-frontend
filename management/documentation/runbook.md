# Operations Runbook

Quick how-tos for Keratin Glow site maintenance.

## Deploy production
1. Commit and push to `main` on GitHub, **or**
2. Run `npx vercel --prod` from the project root  
Live URL: https://www.keratinglow.bh

## Update opening hours or address
1. Edit `src/config/site.ts` (`ADDRESS`, `OPENING_HOURS`)
2. Mirror the same values in Google Business Profile
3. Update FAQ answers if needed (same file / `index.html` schema)
4. Deploy

## Add a transformation (before/after)
1. Export photos as WebP (~480×640 portrait works well)
2. Save under `public/gallery/` (e.g. `keratin-2-before.webp`, `keratin-2-after.webp`)
3. Add an entry in `src/config/gallery.ts`
4. Deploy

## Update prices
1. Edit `src/components/Pricing.tsx`
2. Update FAQ pricing text in `src/config/site.ts` if amounts changed
3. Deploy

## Refresh WhatsApp link preview
1. Open https://developers.facebook.com/tools/debug/
2. Enter `https://www.keratinglow.bh`
3. Click **Scrape Again**

## Useful URLs
| Resource | URL |
|----------|-----|
| Site | https://www.keratinglow.bh |
| GitHub | https://github.com/MShubar/keratin-glow-frontend |
| Vercel project | Vercel dashboard → keratin-glow-frontend |
| Instagram | https://www.instagram.com/keratinglow_bh/ |
| Maps | https://maps.app.goo.gl/Qw9yFp3MLCGncCnz5 |
| WhatsApp | +973 3326 3906 |
