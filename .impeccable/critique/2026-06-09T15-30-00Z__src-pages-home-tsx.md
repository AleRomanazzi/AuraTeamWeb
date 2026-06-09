---
target: home
total_score: 27
p0_count: 0
p1_count: 1
p2_count: 2
timestamp: 2026-06-09T15-30-00Z
slug: src-pages-home-tsx
prior_score: 23
prior_timestamp: 2026-06-09T14-03-23Z
---
## Design Health Score

| # | Heuristic | Prev | Now | Change | Key Issue |
|---|-----------|------|-----|--------|-----------|
| 1 | Visibility of System Status | 2 | 2 | — | No loading states; hover and animation present |
| 2 | Match System / Real World | 3 | 3 | — | Argentine Spanish, natural CTAs |
| 3 | User Control and Freedom | 3 | 3 | — | Clean routing, draggable slider |
| 4 | Consistency and Standards | 2 | 3 | ▲ | Reduced-motion added, eyebrows trimmed, portfolio font fixed |
| 5 | Error Prevention | 2 | 2 | — | No forms on home; opacity:0 silent fail partially mitigated |
| 6 | Recognition Rather Than Recall | 3 | 3 | — | Visible nav, clear service names |
| 7 | Flexibility and Efficiency | 2 | 2 | — | Slider draggable; no shortcuts expected |
| 8 | Aesthetic and Minimalist Design | 2 | 3 | ▲ | Gradient text removed, eyebrows gone; body contrast still marginal |
| 9 | Error Recovery | 2 | 2 | — | No error states on home |
| 10 | Help and Documentation | 2 | 2 | — | WhatsApp float, footer contact |
| **Total** | | **23/40** | **27/40** | **+4** | **Good — one P1 left** |

## Anti-Patterns Verdict

Resolved since prior run:
- ✓ Gradient text on "Profesional" — removed, now solid #60a5fa
- ✓ Eyebrow-on-every-section — reduced from 4 to 1 (hero location label only)
- ✓ prefers-reduced-motion — @media rule added to index.css

Detector result (current run): overused-font (Roboto — false positive, committed design choice). No gradient-text hit. All prior bans cleared.

## Priority Issues

[P1] Body paragraph text uses #64748b (Slate 500) on #030710 canvas — contrast ≈ 4.1:1, below WCAG AA 4.5:1 threshold. Affected: services paragraph (Home.tsx:234), clients paragraph (Home.tsx:262), portfolio paragraph (Home.tsx:321), CTA paragraph. Fix: replace #64748b with #94a3b8 (ink-muted, ≈8:1 contrast).

[P2] "Profesional" heading max clamp 7rem exceeds 6rem display ceiling — Home.tsx:134. Fix: clamp(2.5rem, 9vw, 6rem).

[P2] Stats row label color #475569 (Slate 600) has contrast ≈ 2.6:1 at 0.78rem uppercase — Home.tsx:297. Fix: raise to #64748b or higher.

## Score Trend

23 → 27 (+4) — three P1s resolved in one polish pass. One P1 remains (contrast). Two minor P2s discovered on re-examination.

## Minor Observations

- CTA section background uses subtle gradient tint (rgba blue, not text) — compliant
- Logo card near-white (#f4f6f8) suitable for mixed-transparency logos
- Hero h2/h1 size contrast between lines is intentional and reads well at all breakpoints
- "3 especialidades" stat still weak as a credibility signal
