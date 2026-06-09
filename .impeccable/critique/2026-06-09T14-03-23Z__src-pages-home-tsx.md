---
target: home
total_score: 23
p0_count: 0
p1_count: 3
p2_count: 2
timestamp: 2026-06-09T14-03-23Z
slug: src-pages-home-tsx
---
## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2 | No loading states; scroll indicator and nav active states present |
| 2 | Match System / Real World | 3 | Clear Argentine Spanish, "Hablemos" CTA is natural |
| 3 | User Control and Freedom | 3 | No forced flows, clean routing, draggable logo slider |
| 4 | Consistency and Standards | 2 | CTA styles inconsistent: League Gothic 0.9rem on portfolio link vs Roboto on hero CTAs |
| 5 | Error Prevention | 2 | opacity:0 initial state is a silent failure mode; no forms on home page |
| 6 | Recognition Rather Than Recall | 3 | Visible nav with labels, service descriptions clear, logos trigger recognition |
| 7 | Flexibility and Efficiency | 2 | Draggable slider; no keyboard shortcuts expected on marketing page |
| 8 | Aesthetic and Minimalist Design | 2 | 4 identical section labels in a row, gradient text on hero, emoji icon containers |
| 9 | Error Recovery | 2 | No forms to fail; no 404 visible |
| 10 | Help and Documentation | 2 | WhatsApp float and footer contact present |
| **Total** | | **23/40** | **Acceptable — significant improvements needed** |

## Anti-Patterns Verdict

Two active violations:
1. Gradient text on "Profesional" hero heading (Home.tsx:131-143) — absolute ban, biggest AI tell
2. Section Label on 4/4 sections — eyebrow-on-everything pattern, band violation

Detector found: overused-font (Roboto, false positive — committed design choice), gradient-text (index.css:57, true positive — utility class exists and inline usage in Home.tsx)

## Priority Issues

[P1] Gradient text on "Profesional" heading — Home.tsx:131-143. Fix: replace with solid color: '#60a5fa'. Delete .gradient-text class from index.css:55-60.

[P1] Section Label on every section — Home.tsx:225, 254, 314. Fix: remove from Services, Clients, Portfolio sections. Keep only in hero.

[P1] White logo card backgrounds (#ffffff) break dark canvas — LogoSlider.tsx:87. Fix: replace with rgba(255,255,255,0.07).

[P2] Hero heading exceeds 6rem ceiling — clamp(2.5rem, 14vw, 13rem) → reduce to clamp(2.5rem, 9vw, 7rem). Home.tsx:124,135.

[P2] No prefers-reduced-motion support — animate-fade-up, animate-fade-in classes have no reduced-motion fallback. index.css.

## Persona Red Flags

Jordan: "Desde 2025" signals ~1yr of operation; no testimonials to bridge trust gap; next step after "Hablemos" unclear.
Casey: Mobile experience is strong — thumb-accessible WhatsApp, draggable slider, responsive grid.
Marco (project-specific): Can't tell from homepage whether AuraTeam does social media management or primarily events; no pricing signal; "Hablemos" is vague on next steps.

## Minor Observations

- Generic portfolio alt text
- CTA section copy wordy
- "Ver portafolio completo" uses League Gothic at 0.9rem — below effective size
- scrollDot animation lacks reduced-motion alternative
- "3 especialidades" is a weak stat
