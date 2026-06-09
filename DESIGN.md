---
name: AuraTeam
description: Agencia creativa de Córdoba — producción audiovisual, desarrollo web, comunicación digital.
colors:
  aura-blue: "#2563eb"
  aura-blue-mid: "#3b82f6"
  aura-blue-light: "#60a5fa"
  aura-blue-muted: "#93c5fd"
  aura-indigo: "#818cf8"
  space-void: "#030710"
  space-deep: "#060b14"
  space-surface: "#0b1221"
  ink-primary: "#f8fafc"
  ink-secondary: "#e2e8f0"
  ink-muted: "#94a3b8"
  ink-subdued: "#64748b"
  ink-ghost: "#374151"
  signal-error: "#ef4444"
typography:
  display:
    fontFamily: "'League Gothic', Impact, sans-serif"
    fontSize: "clamp(2.8rem, 5.5vw, 4.2rem)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "0.03em"
  headline:
    fontFamily: "'League Gothic', Impact, sans-serif"
    fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.02em"
  body:
    fontFamily: "'Roboto', sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.75
    letterSpacing: "0.01em"
  label:
    fontFamily: "'Roboto', sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.14em"
rounded:
  xs: "4px"
  sm: "6px"
  md: "10px"
  lg: "12px"
  xl: "16px"
  2xl: "20px"
  full: "9999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "32px"
  xl: "48px"
  2xl: "64px"
  section: "128px"
components:
  button-primary:
    backgroundColor: "{colors.aura-blue}"
    textColor: "#ffffff"
    rounded: "{rounded.sm}"
    padding: "8px 20px"
  button-primary-hover:
    backgroundColor: "#1d4ed8"
    textColor: "#ffffff"
  glass-card:
    backgroundColor: "rgba(255,255,255,0.03)"
    rounded: "{rounded.xl}"
    padding: "32px"
  glass-card-hover:
    backgroundColor: "rgba(37,99,235,0.07)"
    rounded: "{rounded.xl}"
  input:
    backgroundColor: "rgba(255,255,255,0.03)"
    textColor: "{colors.ink-secondary}"
    rounded: "{rounded.md}"
    padding: "14px 16px"
  input-error:
    backgroundColor: "rgba(255,255,255,0.03)"
    textColor: "{colors.ink-secondary}"
    rounded: "{rounded.md}"
    padding: "14px 16px"
  role-badge:
    backgroundColor: "rgba(37,99,235,0.18)"
    textColor: "{colors.aura-blue-muted}"
    rounded: "{rounded.xs}"
    padding: "4px 10px"
---

# Design System: AuraTeam

## 1. Overview: La Chispa Digital

**Creative North Star: "La Chispa Digital"**

AuraTeam's visual system is built on a single physical fact: a production studio works in the dark. Screens glow, timelines run, cameras track light. The canvas is void-black not for aesthetic fashion but because it is the material condition of the work. Against that depth, Aura Blue cuts like a live signal — a broadcast frequency, not a decoration.

The system rejects warmth-by-default, chrome-polish, and corporate restraint equally. This is a young Córdoba team shooting real events, editing real reels, building real websites for local pharmacies, fitness studios, and emerging brands. The energy is earned, not borrowed. The design should feel like the team: direct, kinetic, Argentine.

This system explicitly refuses: the generic corporate-blue landing page (safe navy + white + stock photos — invisible and interchangeable); the cheap template aesthetic (rounded icon above every heading, card grid repeated to extinction, gradient text for emphasis); the grungy industrial dark that suits a metal band but not a medical client; and the cold Swiss minimalism that forgets there are humans on both sides of the screen.

**Key Characteristics:**
- Void-dark canvas activates Aura Blue as a live broadcast signal, not ambient color
- League Gothic headings deliver impact without shouting — condensed letterforms, maximum information density per line
- Glass-and-glow depth replaces traditional shadow elevation; surfaces layer tonally, interactive states fire blue
- Motion is specific: each animation earns its place in the interaction it serves
- The WhatsApp float uses Aura Blue, not WhatsApp green — the brand owns its color even on utility components

## 2. Colors: The Aura Signal Palette

A single electric-blue family is the entire chromatic statement. Everything else is darkness at different depths. Adding a second accent is not an option — Aura Blue's power comes from its monopoly.

### Primary

- **Aura Blue Core** (`#2563eb`): The signal. Primary CTA backgrounds, active nav states, section-label dividers, glow source for interactive elements. Appears sparingly so each appearance reads as intentional.
- **Aura Blue Mid** (`#3b82f6`): Interactive text — arrow link CTAs, inline accents, link hover targets.
- **Aura Blue Light** (`#60a5fa`): Active nav links, hover text states. The highlight register of the blue family.
- **Aura Blue Muted** (`#93c5fd`): Badge/chip text color inside blue-tinted containers. Only used where the container already provides Aura Blue context.

### Secondary: Gradient Companion

- **Aura Indigo** (`#818cf8`): Appears only in radial-gradient atmospheric backgrounds and avatar fallback gradients. Never used on text, borders, or interactive elements — it is a background texture, not an accent.

### Neutral: The Space Scale

- **Space Void** (`#030710`): Footer background. The deepest surface layer. Nothing sits below it.
- **Space Deep** (`#060b14`): Body background canvas. The stage everything else performs on.
- **Space Surface** (`#0b1221`): Photo backgrounds, image panels, elevated surfaces that need visible depth without breaking atmosphere.
- **Ink Primary** (`#f8fafc`): Headlines, maximum-contrast text on dark. Used for display and headline type.
- **Ink Secondary** (`#e2e8f0`): Nav links, body text on dark. Comfortable reading weight at body sizes.
- **Ink Muted** (`#94a3b8`): Secondary labels, inactive nav states. Supporting cast.
- **Ink Subdued** (`#64748b`): Card body text, footer links, supporting copy. Low-emphasis, still readable. Do not go lower than this for body copy — contrast fails.
- **Ink Ghost** (`#374151`): Copyright, ultra-low-emphasis text. Never on anything the user needs to read quickly.

### Error

- **Signal Error** (`#ef4444`): Form validation borders only. Subdued (`rgba(239,68,68,0.5)`) in border-only application. Never used as a background fill or decoratively.

### Named Rules

**The One Signal Rule.** Aura Blue is the only chromatic statement. No second accent color — not purple, not green, not teal. Aura Indigo appears in gradient backgrounds only. Any proposal to add a second accent is a proposal to dilute the signal.

**The Depth Rule.** Background surfaces layer from deepest to shallowest: Space Void (footer) → Space Deep (page) → Space Surface (image areas) → glass fill (`rgba(255,255,255,0.03)` over Space Deep). No surface goes lighter than glass fill. A white card on a dark page breaks the atmospheric canvas; use Space Surface + glass instead.

## 3. Typography: Impact and Legibility

**Display Font:** League Gothic (condensed grotesque, ultra-heavy display)
**Body Font:** Roboto (humanist sans-serif, screen-optimized)

**Character:** Two typefaces at opposite ends of the weight spectrum. League Gothic is compressed and heavy — designed for posters, broadcast credits, and signage where impact per line matters. Roboto is open and readable at body sizes. The pairing works because there is no middle ground: headings arrest, body text informs. Close the gap and both fonts look mediocre.

### Hierarchy

- **Display** (League Gothic, weight 800, `clamp(2.8rem, 5.5vw, 4.2rem)`, line-height 1.05, tracking 0.03em): Page-level hero headlines. One per page. `text-wrap: balance` to prevent orphaned words on narrow viewports.
- **Headline** (League Gothic, weight 700, `clamp(1.4rem, 2.5vw, 1.8rem)`, line-height 1.2, tracking 0.02em): Section headings, card titles, service names.
- **Body** (Roboto, weight 400, `1rem`, line-height 1.75, tracking 0.01em): Card descriptions, page copy, form labels. Max line length 65–70ch. `text-wrap: pretty` on multi-paragraph prose.
- **Small** (Roboto, weight 400, `0.875rem`, line-height 1.6): Footer text, secondary supporting copy, timestamps.
- **Label** (Roboto, weight 600, `0.75rem`, letter-spacing 0.14em, uppercase): Section identifiers, role badges, nav utility labels. Uppercase only at this size and weight — never at body sizes.

### Named Rules

**The Two-Font Rule.** League Gothic for impact, Roboto for legibility. No third family enters the system. Roboto Mono is the one permitted exception for code or data display — never used for UI chrome.

**The Weight Cliff Rule.** League Gothic appears at 700 or 800 only. Roboto appears at 400 (body), 500 (nav links), and 600 (labels, CTAs). The gap between these registers is what makes the pairing work. Bridge it with medium-weight League Gothic or Roboto Bold headlines and both fonts collapse into sameness.

## 4. Elevation: Glass and Glow

This system uses tonal glass layering, not traditional drop shadows. Depth is created through background opacity levels and blue glow that fires on hover. A dark shadow on a dark background is invisible; a blue glow is a live signal. These are not interchangeable.

Traditional `box-shadow` appears in exactly two contexts:

### Shadow Vocabulary

- **Scroll Separator** (`box-shadow: 0 1px 0 rgba(255,255,255,0.05)`): Navbar on scroll. A single-pixel rule, barely perceptible — its job is to mark the separation between navbar and content, not to create elevation. It appears only after the user has scrolled 20px.
- **Aura Glow** (`box-shadow: 0 0 32px rgba(37,99,235,0.5), 0 0 8px rgba(37,99,235,0.3)`): Primary button and floating WhatsApp button hover state. Not a shadow — a broadcast signal. The outer ring is diffuse ambient; the inner ring is the source.
- **Float Glow** (`box-shadow: 0 4px 20px rgba(37,99,235,0.35), 0 2px 8px rgba(0,0,0,0.2)`): WhatsApp float at rest. The `0,0,0` layer grounds the float against the page; the Aura Blue layer signals its presence.

### Named Rules

**The Flat-By-Default Rule.** Surfaces are flat at rest. Cards, inputs, and navigation have no shadow in their default state. Elevation is earned by state change — hover or scroll — not applied decoratively to signal importance.

**The Glow-Not-Shadow Rule.** When depth or interactivity needs a visual signal, reach for Aura Blue glow, not a dark `box-shadow`. Dark-on-dark shadows disappear; blue glow is the system's elevation language. This is the primary distinguisher from a generic dark UI.

## 5. Components

### Buttons

Electric and responsive. Every button lift and glow is a micro-broadcast.

- **Shape:** Gently curved edges (6px radius — `{rounded.sm}`)
- **Primary:** `linear-gradient(135deg, #2563eb, #1d4ed8)`, white text, Roboto weight 600, `0.5rem 1.25rem` padding. `overflow: hidden` enables the shimmer pseudo-element.
- **Hover / Focus:** Lifts 2px (`translateY(-2px)`), fires Aura Glow (`0 0 32px rgba(37,99,235,0.5), 0 0 8px rgba(37,99,235,0.3)`). Shimmer pseudo-element (`linear-gradient` from transparent to `rgba(255,255,255,0.1)` to transparent) passes left-to-right at 0.5s.
- **Arrow Link (ghost variant):** Aura Blue Mid text, no background, no border. Inline arrow SVG. Gap between text and icon animates from `0.4rem` to `0.7rem` on hover; color shifts to Aura Blue Light. Used for secondary CTAs inside cards.

### Glass Cards

The primary container surface. Depth through translucency, not shadow.

- **Corner Style:** Service cards at 16px (`{rounded.xl}`); team cards at 20px (`{rounded.2xl}`)
- **Background:** `rgba(255,255,255,0.03)` — barely-there glass fill over Space Deep canvas
- **Border:** `1px solid rgba(255,255,255,0.07)` at rest; `rgba(37,99,235,0.3)` on hover
- **Shadow Strategy:** None at rest (Flat-By-Default Rule). Border glows on hover; no box-shadow is added.
- **Hover:** Background tints to `rgba(37,99,235,0.07)`, border glows Aura Blue, card lifts `translateY(-4px)`. Transition `0.3s ease` on all three.
- **Internal Padding:** `2rem` (32px) on all sides

### Inputs / Fields

Understated at rest, clear on focus.

- **Style:** `rgba(255,255,255,0.03)` fill, `1px solid rgba(255,255,255,0.08)` border, 10px radius (`{rounded.md}`), padding `0.85rem 1rem`
- **Focus:** Border color shifts to `rgba(37,99,235,0.5)` — Aura Blue at half opacity. No glow ring at focus; the border color change is the signal.
- **Error:** Border `rgba(239,68,68,0.5)` — Signal Error. Applied immediately on blur validation. Not alarming, unambiguous.
- **Placeholder:** Ink Subdued (`#64748b`). Minimum acceptable contrast. Do not go lower.
- **Text:** Ink Secondary (`#e2e8f0`). Entered text must be distinct from placeholder.

### Navigation

Fixed header. Transparent at page top; frosted glass on scroll. The transition is the interaction, not just a style.

- **Default:** Transparent background, no blur, no border. Links in Ink Muted (`#94a3b8`). CTA button primary (right side).
- **Scroll state (>20px):** `rgba(6,11,20,0.9)` fill + `backdrop-filter: blur(16px)` + Scroll Separator. All three properties transition together at `0.3s ease`.
- **Active link:** Aura Blue Light (`#60a5fa`) text + `1px solid #60a5fa` bottom border.
- **Mobile hamburger:** 3-bar icon, animates to ✕ on open (bars rotate and collapse via `transform`). Mobile panel slides down via `max-height` transition (`0.4s cubic-bezier(0.4,0,0.2,1)`). Panel background: `rgba(6,11,20,0.97)`. Mobile links use League Gothic at `1.1rem` (larger than desktop body, smaller than display).
- **Z-index:** 50. The floating WhatsApp button is at 100; tooltips and modals above that.

### Role Badge (Chip)

Used exclusively on team cards, positioned over the bottom of the member photo.

- **Style:** `rgba(37,99,235,0.18)` fill, `1px solid rgba(37,99,235,0.3)` border, 4px radius (`{rounded.xs}`)
- **Text:** Aura Blue Muted (`#93c5fd`), Roboto weight 600, `0.72rem`, letter-spacing 0.06em, uppercase
- **Use:** Team member role labels, positioned over the gradient overlay at the photo bottom. Not a general-purpose chip — this treatment belongs to the team surface only.

### Section Label (Signature Component)

AuraTeam's deliberate section identifier. A pair of 24px Aura Blue rules flanking an uppercase Roboto label. Used at the top of major page-level sections — not sub-sections, not every heading.

- **Structure:** `display: flex; align-items: center; gap: 0.6rem`. Left line — text — right line. Centered.
- **Lines:** `24px × 1px`, Aura Blue Core (`#2563eb`). These are visual accent elements using `background`, not `border`.
- **Text:** Roboto weight 600, `0.75rem`, letter-spacing `0.14em`, uppercase, Aura Blue Mid (`#3b82f6`)
- **Use rule:** One Section Label per major page section. Zero on sub-sections. Its power comes from scarcity — use it on every heading and it becomes invisible wallpaper.

### WhatsApp Float (Signature Component)

A persistent floating CTA anchored to the bottom-right viewport. Uses Aura Blue, not WhatsApp's green — the brand's color owns the space.

- **Shape:** 52px × 52px circle (`border-radius: 50%`). Mobile: 46px.
- **Background:** `linear-gradient(135deg, #2563eb, #1d4ed8)` — same gradient as primary button. Brand consistency over platform convention.
- **At rest:** Float Glow pulsing animation (`0 4px 20px rgba(37,99,235,0.35)` and `0 4px 30px rgba(37,99,235,0.6)`, alternating at 2.8s). Signals presence without demanding attention.
- **Hover:** Pulse animation pauses; Aura Glow fires; lifts `translateY(-2px) scale(1.06)`. Tooltip appears to the left (Space Deep bg + Aura Blue border + Ink Secondary text + backdrop-blur).
- **Mobile:** Tooltip hidden, button shrinks to 46px. Still pulsing.

## 6. Do's and Don'ts

### Do:

- **Do** use Aura Blue glow (not dark box-shadows) to signal hover and interactive state. On a dark canvas, blue glow is the system's elevation language; a dark shadow is invisible.
- **Do** layer backgrounds tonally: Space Void (footer) < Space Deep (page canvas) < Space Surface (photo panels) < glass fill (cards). This is the only depth system the design uses.
- **Do** place atmospheric radial-gradient glows behind page sections — wide-radius, low-opacity Aura Blue ellipses that set mood without drawing the eye. These are texture, not foreground elements.
- **Do** add `@media (prefers-reduced-motion: reduce)` alternatives for every entrance animation. Currently the `animate-fade-up` and `animate-fade-in` classes have no reduced-motion fallback — this is a gap to close.
- **Do** verify entrance animations fire on initial page load, not only on visible tabs. The `opacity: 0` default on `.animate-fade-up` elements will render content blank in headless environments or if the animation does not trigger. Test statically.
- **Do** use League Gothic at weight 700–800 only. Below 700 the condensed letterforms lose their impact and the typeface loses its character.
- **Do** use specific alt text on portfolio and team images: "Cobertura fotográfica de evento en Córdoba, luces de escenario" beats "imagen de portafolio".
- **Do** keep the Section Label pattern scarce: one per major page section. Its brand value is inversely proportional to how often it appears.

### Don't:

- **Don't** use the `.gradient-text` class (`background-clip: text` with a gradient fill). This class exists in `index.css` and is an absolute ban — it is decorative, not meaningful, and reads as a template default. Remove it. Use solid Aura Blue Mid (`#3b82f6`) for color emphasis instead.
- **Don't** design any page surface to look like a generic corporate-blue landing page: white or near-white backgrounds, safe navy accent, stock photography. This is the primary anti-reference. The dark canvas and Aura Blue signal differentiate AuraTeam from every template agency site.
- **Don't** introduce a second accent color. No purple, no green (not even WhatsApp green), no teal. Aura Blue's signal strength comes from monopoly. A second accent is a dilution, not an enhancement.
- **Don't** use Aura Indigo (`#818cf8`) on text, borders, or interactive elements. It belongs exclusively in radial-gradient background textures.
- **Don't** add a side-stripe border (a thick `border-left` colored accent on cards, list items, or callouts). Use full borders, background tinting, or nothing.
- **Don't** use a light background on any card, panel, modal, tooltip, or overlay surface. Space Surface (`#0b1221`) is the lightest structural surface. Glass fill (`rgba(255,255,255,0.03)`) is the lightest card surface. White or near-white breaks the atmospheric canvas completely.
- **Don't** repeat the Section Label on sub-headings or secondary elements within a section. One per section, maximum. Overuse converts a brand element into AI scaffolding.
- **Don't** use rounded icon-in-box containers above every card heading as a default affordance. If an icon adds genuine meaning, use it. If it is decorative filler (emoji in a box), replace it with visual content or remove it.
- **Don't** let body copy text fall below Ink Subdued (`#64748b`) against Space Deep (`#060b14`). That combination is already at the lower edge of acceptable contrast. Ink Ghost (`#374151`) on Space Deep fails WCAG AA — reserve it for copyright-level text only.
