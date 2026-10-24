# FAMEWOVEN Multi-Page Website Rebrand Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the complete, production-ready, multi-page FAMEWOVEN website (rebranded from PromptForge LLC into a full-stack AI Influencer & Creative Agency) strictly implementing the 933-line Design Specification with high-fashion editorial aesthetics, 2D weave animations (zero-3D-hover policy), interactive simulators, full talent directory, and complete secondary pages.

**Architecture:** Static multi-page web architecture (HTML5 + Tailwind CSS CDN + custom `styles.css` + Vanilla JS / GSAP 3.12.5 engine) incorporating high-contrast brand tokens (INK, CHALK, WEFT, PLUM, ASH), 2D SVG vector loom mechanics, interactive state machines, canvas weave particle pulse background, and responsive viewport support.

**Tech Stack:** HTML5, CSS3, Tailwind CSS (CDN configured with brand tokens), Google Fonts (Outfit, Space Grotesk, IBM Plex Mono), GSAP 3.12.5 (Core, ScrollTrigger, Flip), HTML5 Canvas, SVG graphics.

**Spec:** `z:/CODES/famewaven/Website Rebrand Design Specification.md`

## Global Constraints

- **Strict Zero-3D-Hover Policy:** No `rotateX`, `rotateY`, `perspective`, `transform-style: preserve-3d`, WebGL tilts, or Three.js shaders. All motion is 2D: weave corner brackets, clip-path shutters, SVG thread drawing, and GSAP ScrollTrigger.
- **Brand Token Purity:** All surfaces strictly use `--fw-ink` (#111311), `--fw-ink-elevated` (#181B18), `--fw-chalk` (#F1EFE8), `--fw-weft` (#D1F34A), `--fw-plum` (#291A27), and `--fw-ash` (#A7A59B). No legacy orange/ember colors.
- **Logo Lockup & Type Scale:** Lowercase `famewoven` wordmark in Outfit Medium (500) at min 160px width; geometric F weave symbol at min 48px × 48px with >=0.5x clear space. Space Grotesk Bold (700) for H1/H2/H3; IBM Plex Mono for eyebrows, tags, and telemetry.
- **Synthetic Media Labeling:** Every AI persona portrait and campaign visual must prominently carry the IBM Plex Mono tag: `AI-GENERATED CHARACTER / CONCEPT`.
- **Simulator-to-Brief Binding:** Selecting any service card, talent card, or clicking simulator booking buttons binds to `#f-type` / `#f-track` in the contact form and smooth-scrolls to `#contact`.
- **Pages Required:**
  1. `index.html` (Master Homepage with all 17 sections 00–16)
  2. `talent.html` (Virtual Talent Roster & Creator Onboarding Portal)
  3. `services.html` (Full-Stack Capabilities, 5 Digital Identity Modules & Embedded Consoles)
  4. `campaigns.html` (Case Studies, 9-Grid Social Feed Inspector & Comparison Slider)
  5. `how-it-works.html` (8-Step Technical Pipeline, Responsibility Matrix & Compliance Guide)
  6. `about.html` (Brand Philosophy, 3 Core Pillars, Studio Footprint)
  7. `contact.html` (Scoped Intake Form, Direct WhatsApp/Email/Phone dispatch)

## Review Focus

1. **Preloader Session State:** First visit must run full 2.4s Digital Loom sequence; subsequent visits in same session must run rapid 0.55s shed split (`sessionStorage.getItem('fw_loaded')`).
2. **Interactive Workbench Computations:** Simulator profiles toggle reach and budget calculations accurately in real-time, enforcing $0 upfront escrow note.
3. **Flight Console State Machine:** Progressing through stages 01/05 to 05/05 correctly updates all telemetry indicators, goals, deliverables, and channels without layout shift.
4. **Campaign Scale Slider:** Range 1 to 100+ smoothly transitions through all 5 tiers (Single Drop, Capsule Seeding, Coordinated Launch, Category Takeover, Ecosystem Engine) and updates orbital SVG cluster nodes.
5. **Mobile Viewport Responsiveness:** All multi-column grids, mega-menu, comparison table, and interactive workbench controls collapse gracefully on small screens (<768px).

---

### Task 1: Core Design System, Stylesheet, and Asset Infrastructure

**Files:**
- Create: `styles.css`
- Create: `assets/logos/heygen.svg`, `assets/logos/higgsfield.svg`, `assets/logos/byteplus.svg`, `assets/logos/omneky.svg`
- Create: `assets/personas/` (portrait image assets with plum vignette backgrounds and defined lighting)

- [ ] **Step 1: Create `styles.css` with canonical CSS variables, weave grid background, 2D corner brackets, range slider styling, and reduced motion queries.**
- [ ] **Step 2: Generate or craft high-fidelity SVG client logos for HeyGen, Higgsfield, BytePlus, and Omneky.**
- [ ] **Step 3: Generate high-fashion editorial persona portrait assets for flagship AI talent (Soraia Velt, Kaelen Vance, Naia Kells, Mikail Ash, Elena Rostova, Dahlia Wren).**
- [ ] **Step 4: Verify CSS variables, font imports, and assets render cleanly.**

---

### Task 2: Master JavaScript Engine (`script.js`)

**Files:**
- Create: `script.js`

- [ ] **Step 1: Implement Digital Loom preloader timeline with SVG thread interlacing, Outfit wordmark reveal, IBM Plex Mono counter (000% to 100%), and 6-column loom shed curtain split with `sessionStorage` caching.**
- [ ] **Step 2: Implement 2D Warp-Weft Hero Canvas background animation with horizontal and vertical signal pulses.**
- [ ] **Step 3: Implement 18-Service Capability filter grid with dynamic category switching and auto-binding to `#contact-form`.**
- [ ] **Step 4: Implement Live Casting Simulator with 4 selectable profiles, dynamic combined reach / package computation, and brief booking binding.**
- [ ] **Step 5: Implement 5-Stage Flight Console state machine with play/pause and step transitions.**
- [ ] **Step 6: Implement Campaign Scale Slider (1 to 100+) with 5 tier thresholds and dynamic 2D SVG cluster node generation.**
- [ ] **Step 7: Implement 2D magnetic cursor loupe, FAQ accordion interaction, sticky nav compaction on scroll, and contact form validation toast.**

---

### Task 3: Master Homepage (`index.html`) — All 17 Sections

**Files:**
- Create: `index.html`

- [ ] **Step 1: Implement `<head>` with SEO JSON-LD schema, Tailwind CSS configuration with custom theme tokens, and GSAP scripts.**
- [ ] **Step 2: Implement Preloader (`#preloader`), Section 00 Top Utility Signal Bar (`#signal-bar`), and Section 01 Sticky Nav (`#nav`) with 2-column Mega-Menu & Featured Promo Card.**
- [ ] **Step 3: Implement Section 02 Hero (`#top`) with 2D Weave Canvas, H1 headline, value-anchored CTAs, and 3-card rotating Dossier Deck (`#hero-deck`).**
- [ ] **Step 4: Implement Section 03 Instant Blueprint Lead Magnet Bar (`#blueprint-bar`) and Client Trust Strip.**
- [ ] **Step 5: Implement Section 04 Editorial Manifesto (`#manifesto`) on light CHALK surface (`#F1EFE8`) with 3-stage framework (A Character, A Campaign, Continuity).**
- [ ] **Step 6: Implement Section 05 Core Pillars (`#what-we-make`) with 4-row sticky dossier stack and plum preview panel.**
- [ ] **Step 7: Implement Section 06 Virtual Talent Roster (`#talent-roster`) with quantitative filter tabs and 6 flagship persona cards (4:5 ratio with `AI-GENERATED CHARACTER / CONCEPT` badge).**
- [ ] **Step 8: Implement Section 07 Full-Stack Services Matrix (`#services`) with 18 capabilities and filter chips.**
- [ ] **Step 9: Implement Section 08 Interactive Consoles (`#simulators`) with Live Casting Simulator and 5-Stage Flight Console.**
- [ ] **Step 10: Implement Section 09 Campaign Scale Slider (`#campaigns`) with 2D SVG cluster cluster nodes.**
- [ ] **Step 11: Implement Section 10 7-Card Architectural Bento Grid (`#why`) with CSS data visualizers (viz-network, viz-target, viz-flow, viz-timeline, viz-bars).**
- [ ] **Step 12: Implement Section 11 Growth Ecosystem & Comparison Matrix (`#ecosystem`) on light CHALK surface with 4-card hover-expand flex row and 5-column comparison table.**
- [ ] **Step 13: Implement Section 12 How It Works 6-Step Unified Framework (`#how`) with timeline progress line.**
- [ ] **Step 14: Implement Section 13 Who We Work With & Proven Client Results (`#results`) with 3 audience cards and 4 verified client testimonials.**
- [ ] **Step 15: Implement Section 14 Knowledge Hub Playbooks (`#playbooks`) and 8-item FAQ Accordion (`#faq`).**
- [ ] **Step 16: Implement Section 15 Scoped Brief Portal (`#contact`) with validated 8-field form and direct contact cards.**
- [ ] **Step 17: Implement Section 16 Weave Marquee, Newsletter Bar, and 4-Column Footer (`#footer`).**

---

### Task 4: Virtual Talent Roster & Creator Portal (`talent.html`)

**Files:**
- Create: `talent.html`

- [ ] **Step 1: Implement `<head>`, navigation, and `#talent-hero` with dual view switcher (Virtual Talent Roster vs Apply as Human Creator / Digital Twin).**
- [ ] **Step 2: Implement `#persona-directory` with multi-tier filter bars (Collection Series: Influencers, Women, Men, Tech, Underground; Aesthetic Prefix: WEFT, CHALK, PLUM).**
- [ ] **Step 3: Implement 12+ series-coded persona cards with 4:5 portrait frames, performance metadata, and expandable Character Dossier modal.**
- [ ] **Step 4: Implement `#digital-twin-banner` on light CHALK surface detailing likeness licensing for founders and executives.**
- [ ] **Step 5: Implement `#creator-application` portal with the complete 11-field Creator & Digital Twin Application Form.**
- [ ] **Step 6: Implement shared footer and link verification.**

---

### Task 5: Full-Stack Services & Digital Identities (`services.html`)

**Files:**
- Create: `services.html`

- [ ] **Step 1: Implement `<head>`, navigation, and `#services-hero` with 01 Character / 02 Campaign / 03 Continuity funnel strip.**
- [ ] **Step 2: Implement `#digital-identity-modules` with 5 horizontal editorial cards (ID-01 Custom Avatar, ID-02 AI Influencers, ID-03 Digital Twin, ID-04 Stock Models, ID-05 Scalable Production).**
- [ ] **Step 3: Implement goal-oriented 18-service filter grid with direct brief pre-selection.**
- [ ] **Step 4: Implement embedded interactive Live Casting Simulator, 5-Stage Flight Console, and Founding Cohort Pilot Banner on CHALK surface.**
- [ ] **Step 5: Implement shared footer and CTA links.**

---

### Task 6: Campaigns, Case Studies & Social Feeds (`campaigns.html`)

**Files:**
- Create: `campaigns.html`

- [ ] **Step 1: Implement `<head>`, navigation, and `#campaigns-hero`.**
- [ ] **Step 2: Implement `#feed-inspector` with interactive 9-Grid Social & Print Feed Inspector across 3 brand worlds (Luxury Fashion, AI/DevTools, Clean Beauty).**
- [ ] **Step 3: Implement interactive Before/After Brief-to-Render Comparison Slider with draggable handle.**
- [ ] **Step 4: Implement 6 metric-backed case study dossiers (HeyGen, Higgsfield, BytePlus, Omneky, Maison Velt, Aura Derm) with KPI tags and verified proof points.**
- [ ] **Step 5: Implement shared footer and consultation CTA.**

---

### Task 7: How It Works & Governance (`how-it-works.html`)

**Files:**
- Create: `how-it-works.html`

- [ ] **Step 1: Implement `<head>`, navigation, and Hero section.**
- [ ] **Step 2: Implement vertical 8-Node Technical Production Pipeline (Kickoff, Character Architecture, LoRA Locking, Creator Shortlisting, Production, Disclosure Audit, Launch Wave, Continuity Archive).**
- [ ] **Step 3: Implement Division of Responsibilities Matrix on light CHALK surface (FAMEWOVEN Studio Execution vs Client Approval Gates).**
- [ ] **Step 4: Implement FTC & Platform Synthetic Media Disclosure Governance Guide with sample labels and compliance checklist.**
- [ ] **Step 5: Implement shared footer.**

---

### Task 8: About & Dedicated Contact Pages (`about.html` & `contact.html`)

**Files:**
- Create: `about.html`
- Create: `contact.html`

- [ ] **Step 1: Implement `about.html` with Brand Philosophy (01/THE AGENCY, 02/PRIMARY IDENTITY, 06/THE WEAVE, 07/PORTRAIT DIRECTION, 12/VOICE), 3 Company Values, and Global Studio Footprint.**
- [ ] **Step 2: Implement `contact.html` with Scoped Intake Form (8 fields + pre-population logic), direct contact channels (Email, WhatsApp, Phone, X, IG), and interactive booking guarantee.**
- [ ] **Step 3: Connect all cross-page navigation links, CTAs, and mega-menu links across all 6 pages.**

---

### Task 9: Verification Gates, Testing & Final Polish

**Files:**
- Verify: all `.html`, `styles.css`, `script.js`

- [ ] **Step 1: Audit Gate 01 — Brand Token Purity (verify zero legacy orange/ember `#0A0A0B` colors; all tokens use INK, CHALK, WEFT, PLUM, ASH).**
- [ ] **Step 2: Audit Gate 02 — Logo & Type Hierarchy (verify Outfit Medium wordmark >= 160px width, F symbol >= 48px, Space Grotesk Bold for headers, IBM Plex Mono for tags).**
- [ ] **Step 3: Audit Gate 03 — Zero-3D-Hover Policy (verify zero instances of perspective, rotateX, rotateY, preserve-3d).**
- [ ] **Step 4: Audit Gate 04 — Synthetic Media Labeling (verify all persona cards carry `AI-GENERATED CHARACTER / CONCEPT`).**
- [ ] **Step 5: Audit Gate 05 — Simulator-to-Brief Binding (verify service click, talent click, simulator click pre-populates form and smooth-scrolls).**
- [ ] **Step 6: Audit Gate 06 — Schema & SEO (verify JSON-LD schema with canonical URL and verified endpoints on all pages).**
- [ ] **Step 7: Launch local preview, test all interactive components with browser subagent or headless verification, and capture screenshot/video.**
