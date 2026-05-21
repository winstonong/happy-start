
# Fix Janky Page Loading

## Diagnosis (Production Data)

| Metric | Current | Target |
|--------|---------|--------|
| FCP | 2,588ms | < 1,800ms |
| CLS | 0.1665 | < 0.1 |
| Full Load | 4,049ms | < 3,000ms |

**Three root causes identified:**

### 1. CLS from HubSpot form injection (CLS shift: 0.149)
The HubSpot form loads asynchronously into `#hubspot-v8-hero-anchor`. When it renders, it pushes the layout down — this is the single largest layout shift on the page. The browser profile explicitly calls out `div#hubspot-v8-hero-anchor` as the culprit.

**Fix:** Add a `min-height` to the HubSpot form container so space is reserved before the form loads. Based on the form's rendered height (~520px), we'll set `min-height: 520px` on the container div.

### 2. Press logos are absurdly oversized (1.5MB total)
Six PNG logos account for **1.5MB** of image downloads. These are simple brand logos that should be ~10-20KB each.

| Logo | Current Size |
|------|-------------|
| variety.png | 369KB |
| vanityfair.png | 295KB |
| dailymail.png | 292KB |
| lofficiel.png | 281KB |
| fastcompany.png | 259KB |
| forbes.png | 86KB |

**Fix:** Compress all six logos to WebP format using sharp/imagemagick. Target ~10-20KB each. This alone saves ~1.3MB of bandwidth and cuts load time significantly.

### 3. CSS fade-in animations cause "piecemeal" appearance
The hero section uses `animate-fadeIn` and `animate-fadeInUp` which start content at `opacity: 0` and `translateY(20px/30px)`. This means:
- SSR delivers the HTML instantly
- But the CSS animation makes everything invisible initially
- Content fades in piece by piece — the exact "piecemeal" loading the user describes

**Fix:** Remove the `animate-fadeIn` and `animate-fadeInUp` classes from the hero section. The content should appear instantly with the SSR-delivered HTML. Remove the animation keyframes from `styles.css` as well.

## Files Changed

1. **`src/routes/index.tsx`** — Remove animation classes from hero; add min-height to HubSpot form container
2. **`src/styles.css`** — Remove `fadeIn`/`fadeInUp` keyframes and utility classes
3. **`public/images/logos/*.png`** — Compress all six logos to WebP (or optimized PNG)

## What Won't Change
- Visual design, layout, copy, component structure
- Chili Piper / HubSpot integration
- No new dependencies
