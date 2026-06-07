# Design System — a2adapt site (v2)

> Owner: **Designer** (`work/designer`). Gate: **Critic-A** (design system + visuals);
> the **hero** is high-stakes → **Critic-A + Critic-B** both. Sales holds a positioning veto.
> Contract: `strategy/positioning-brief.md` @ frozen main. Refs: `research/04-design-reference-board.md`,
> `research/03-conversion-and-landing-evidence.md`.
>
> **Status:** v1 — for gate. This spec is the *plan before pixels*; the implementation
> (`src/styles.css` + tokens) realizes it and keeps the class/structure contract in §9 stable so
> Engineer builds without churn.

This document is the **single source of truth for the visual system**. Every decision below
names the **brief goal it serves** — that traceability is the bar the charter sets and what I
defend to the Critic. If a decision doesn't serve a goal in the brief, it isn't here.

---

## 0. Design thesis (one line)

**The page is a receipt, not a brochure.** A terminal/receipt aesthetic renders the product's
honest, broker-blind, built-in-the-open character *as the visual identity* — so the look itself
is an argument for the claim (brief §6 "the medium is the proof"; Dossier 04 "works because it's
honest").

Three non-negotiables inherited from the brief:
1. **Hero communicates the value prop FIRST** (§5.1, charter DoD), *then* proves it. v1 shipped the
   proof conceit as the headline — that is the **fourth** beat (§5.4), not the first 3 seconds.
2. **Install is the single highest-leverage mechanic** (§4) — a *one copy action that yields both
   commands*. The design treats it as the most important interactive element on the page.
3. **The A2A/MCP objection is preempted on the first screen** (§0, §5.2) — before the reader assumes
   we're Google A2A.

---

## 1. Color & tokens

Dark base + **one** high-signal accent (Dossier 04 D; brief §8 "name the mechanism, not buzzword").
We **reject the purple-gradient SaaS look** — this audience reads it as the buzzword aesthetic they
distrust (Dossier 04 D, §8 "don't say").

### 1.1 Surface & text (dark, layered)
| Token | Value | Use |
|-------|-------|-----|
| `--bg` | `#070a0f` | page base |
| `--bg-elev` | `#0c1118` | raised sections / final CTA band |
| `--panel` | `#0e141d` | cards, terminal body |
| `--panel-2` | `#0a0f16` | terminal chrome, code wells, inset |
| `--fg` | `#e7eef6` | primary text (≥ 13.5:1 on `--bg` — AAA) |
| `--muted` | `#8b98a8` | secondary prose (≥ 5.3:1 — AA) |
| `--faint` | `#7c8796` | dimmest **text** tier — timestamps, hashes, captions. ≥ 5.3:1 on `--bg`, ≥ 5.1:1 on `--panel` — passes AA normal text on **both** surfaces (captions/hashes render inside `--panel` cards) |
| `--border` | `#1a212c` | card/well borders |
| `--border-soft` | `#141a23` | hover fills, subtle dividers |

### 1.2 Accent — the "encryption" signal (ONE color, load-bearing)
| Token | Value | Use |
|-------|-------|-----|
| `--accent` | `#2ee6a6` | the encryption/decrypted state, primary CTA, active nav, focus ring |
| `--accent-ink` | `#05130d` | text **on** the accent button (≥ 9:1 on `--accent` — AAA) |
| `--accent-hover` | `#46f0b4` | primary CTA hover |
| `--accent-soft` | `rgba(46,230,166,0.12)` | inline-code bg, badge fills |
| `--accent-line` | `rgba(46,230,166,0.32)` | badge borders, ghost-button hover |

> **Why green, why one:** the accent is reserved for *exactly two meanings* — "encrypted/secure" and
> "the action we want (install)". Reserving one color for one meaning is what makes the CTA
> impossible to miss (§4) and ties the crypto motif together without gradient-soup. Anything that
> isn't a CTA or an encryption signal does **not** get accent.

### 1.3 Identity (role) colors — a SEPARATE, muted categorical scale
Nine roles (README §1) need to be visually distinguishable in the timeline + identity tags **without
competing with the CTA accent**. Resolution: identity colors are a **desaturated, lower-chroma
categorical scale** used *only* on `.idtag`, timeline nodes/rails, and team-card accents. The brand
accent (`#2ee6a6`) stays exclusive to CTA/encryption. Each tag also carries a **text label**, so
color is never the sole signal (a11y, §6).

| Role | `--id-*` | Notes |
|------|----------|-------|
| Coordinator | `#7c9cff` | indigo |
| Researcher | `#5bd0e6` | cyan |
| Sales | `#e6b85b` | amber |
| Designer | `#d98fcf` | orchid — desaturated, distinct from violet/rose. **No green in the id scale** (brand accent stays exclusive to CTA/encryption — Critic-A blocker 1) |
| Engineer | `#9d8bff` | violet |
| Copywriter | `#ff9e7a` | coral |
| Auditor | `#ff7a93` | rose |
| Critic-A | `#b6c2d2` | slate-light |
| Critic-B | `#8794a6` | slate |
| `(null)` | `#5b6675` | `--faint` — the visual canary for an off-convention commit (brief §6 / commits.json contract) |

Implementation: each `.idtag` / timeline item sets `--id-color` inline from data; styling reads
`color-mix(in srgb, var(--id-color) …)` for fill/border so one rule serves all roles.

**Text-contrast guarantee (Critic-A nit a):** every `--id-*` value is chosen in the **light tier** and
verified ≥ 4.5:1 on `--panel`/`--bg` (lowest is slate `#8794a6` ≈ 6:1; orchid `#d98fcf` ≈ 7.6:1), so
using `--id-color` for the tag's own label text carries **no** contrast risk. The categorical hue drives
the tag/node **fill + border + label**; it is never the *sole* signal (the tag always carries a text
role label). Identity colors are scoped to `.idtag` / timeline / team accents only — they never appear
as a CTA or interactive affordance, so they can't be mistaken for the accent's "clickable" meaning.

### 1.4 Spacing, radii, motion, layering
- **Spacing scale** (8px base): `--s1:.5rem --s2:.75rem --s3:1rem --s4:1.5rem --s5:2rem --s6:3rem --s7:4.5rem`.
  Section rhythm uses `--s7` between major bands; generous breathing room is the converting default (Dossier 03).
- **Radii:** `--r-sm:6px --r-md:10px --r-lg:14px --r-pill:999px`.
- **Shadows:** `--shadow-card: 0 30px 80px -40px rgba(0,0,0,.9)`; CTA glow `0 12px 30px -12px rgba(46,230,166,.55)`.
- **Motion:** `--ease: cubic-bezier(.2,.7,.2,1)`; durations `--t-fast:120ms --t-mid:240ms --t-slow:420ms`.
  **All motion respects `prefers-reduced-motion: reduce`** (kill transcript/timeline reveal + caret blink).
- **Z-index:** nav `20`, copy-toast `40`.
- **Container:** `--max: 1080px`. **Breakpoints:** `≤720px` (mobile), `721–1024px` (tablet), `>1024px` (wide).

---

## 2. Typography

Two faces (Dossier 04 D — "mono for receipts/code, readable sans for prose; don't set body in mono"):
- `--mono`: `ui-monospace, "JetBrains Mono", "SFMono-Regular", Menlo, Consolas, monospace`
  → transcript, commit hashes, install commands, identity tags, eyebrows, code wells.
- `--sans`: `ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`
  → headlines + all prose. **System-font stack = zero font payload** (speed is part of the look — Dossier 03/04 §5).

### Type scale (modular, responsive via `clamp`)
| Role | Size | Weight / tracking |
|------|------|-------------------|
| Hero H1 | `clamp(2.4rem, 6vw, 4rem)` | 800 / `-0.02em` |
| Section H2 | `clamp(1.6rem, 3.5vw, 2.2rem)` | 700 / `-0.02em` |
| Card H3 | `1.12–1.2rem` | 600 |
| Body | `1rem` / line-height `1.65` | 400 |
| Lead/sub | `1.12rem`, color `--muted` | 400 |
| Mono-detail (hash, timestamp, eyebrow) | `0.72–0.85rem`, eyebrow `letter-spacing .3em` uppercase | 600 |

Body line-length capped ~`68ch` (`--max` block heads at `680px`) for readability.

---

## 3. Layout

Centered, single max-width column (Dossier 03 "centered, max-width container = the converting,
trustworthy default; edge-to-edge is harder to land"). Sticky translucent nav. Vertical scroll = the
message hierarchy in §5 order. No carousels (Dossier 03 "what kills conversions").

```
[ Nav — sticky, brand + links + mini Install ]
[ 1 HERO ........ value-prop headline · transcript receipt · Install + View-commits ]
[ 2 INSTALL ..... one-copy two-command block — the conversion centerpiece ]
[ 3 NOT-A2A ..... complementary line + 2 differentiators (preempt #1 objection) ]
[ 4 HOW .......... 5-step conversation shape: identity→invite→channel→message→wake ]
[ 5 PROOF ........ git-log timeline (role-separated) + dogfooding + transcript callback ]
[ 6 TEAM ......... role grid (the team that built it) ]
[ 7 FAQ .......... objection table (optional; stop here — no pricing/compare, Dossier 03) ]
[ 8 FINAL CTA .... contrasting band, one line, Install button ]
[ Footer ]
```

---

## 4. Component inventory (mapped to the brief scroll §5)

### 4.1 Nav  → keeps momentum, install always one scroll away
Sticky, blurred translucent. Brand `a2adapt` in mono with bracketed mark. Links: How it works ·
Proof · Docs. **Right-aligned mini "Install" button** (ghost→accent) so the primary action is
reachable from any scroll position (Dossier 03 CTA reachability).

### 4.2 Hero  → §5.1 — value prop in first 3s; visual IS the proof  [HIGH-STAKES: Critic-A + B]
- **Eyebrow** (mono, accent): `agent-to-agent over ADAPT` — names the expansion so the reader never
  guesses (§0 resolution 1).
- **Headline** — opinionated + specific, the **value prop**, not the proof conceit. Direction (final
  string from Copywriter): *"The private, end-to-end-encrypted line between two agents you own."*
  Accent-weight only the load-bearing word (e.g. **encrypted** / **you own**). Linear-style
  specificity (§8, Dossier 03).
- **Subhead** (`--muted`, ≤ 640px): the outcome (§3) — agents coordinate like a team, identity +
  encryption for free, never build a message bus again. Real string from Copywriter.
- **Hero visual = the signature transcript/receipt** (§4.3 below) — a redacted agent-to-agent
  exchange in a terminal frame. Satisfies show-don't-tell + code-snippet-hero + proof conceit at once
  (§5.1, Dossier 03/04).
- **Two CTAs:** primary **Install the plugin** (anchors to §4.4 / scrolls to install block),
  secondary **View the commits** (anchors to the on-page timeline §4.7 — *never* an external repo;
  §4-binding-ii). Order + contrast make primary unmistakable.

### 4.3 Transcript / receipt window  → THE signature device (Dossier 04 "highest-leverage")
Terminal frame: chrome bar (3 dots, `session: …` title, **`e2e encrypted` badge** in accent),
body of message rows. Each **row** = `[from idtag] → [to idtag]` · monospace timestamp · payload.
Payload shows a **redacted** envelope (`AI8…⟨ elided ⟩…<redacted>`) decrypting into a short plain
line — visually staging the "broker sees ciphertext / you see plaintext" mechanic (§3 differentiator
2). Closing caret line blinks.
- **Content contract (security, README §6 / brief §6):** payloads are **synthetic + redacted only** —
  no real container IDs (64-hex), hosts, paths, names, or live invite blobs. Designer supplies the
  *frame*; Copywriter/Engineer supply scrubbed strings. Auditor gates.
- **a11y:** the transcript is **real text** (not an image) so it's screen-reader legible and
  selectable; wrap in `<section aria-label="Transcript of two agents coordinating over a2adapt">`.
- **Motion:** rows fade/translate in on first view; payload runs a one-shot "decrypt" tween. Killed
  under `prefers-reduced-motion`.

### 4.4 Install block  → §4 THE conversion centerpiece  [highest-leverage mechanic]
A framed code well showing **both** commands:
```
claude plugin marketplace add adapt-toolkit/a2adapt
claude plugin install a2adapt@a2adapt
```
- **One copy action yields the whole block** (both lines) — genuinely one click, not two (§4 spec).
  Single prominent **Copy** button → state flips to **Copied ✓** (accent) for ~1.6s; optional toast.
- Largest, highest-contrast interactive affordance on the page after the hero CTA. Sub-line:
  "no signup, no account — MCP tools appear, identity in the next minute" (§4, real copy from
  Copywriter).
- **Dependency flag (not my call — surfaced for Auditor/Coordinator, §4-binding-i):** the marketplace
  repo `adapt-toolkit/a2adapt` **must be anonymously public** or primary conversion is dead. Design
  assumes the correct public identifier; Integration/Auditor verify before ship.

### 4.5 Not-A2A / differentiators  → §5.2, §0 — preempt the #1 objection on first screen
Two-up (chess/bento, Dossier 03/04) directly under the hero. Lead line: *"Your agents already speak
MCP/A2A. a2adapt is the private, account-less, end-to-end line between two agents you own — it
composes under them, it doesn't compete."* Then the **two differentiators** as paired cards:
(1) **Self-sovereign identity** — keypair the agent owns, no account/registry;
(2) **Broker-blind E2E** — relay moves ciphertext only, keys on your disk.
Mechanism-named, never "enterprise-grade" (§8). Honest-envelope guard: application-layer channel over
ADAPT, *not* a competing standard (§0 honesty guard).

### 4.6 How it works  → §5.3 — "how little it takes"
The conversation shape as a 5-step horizontal/stacked sequence: **create identity → invite →
encrypted channel → message → wake on reply.** Problem-first framing ("a few MCP calls, not a
framework to learn"), not a function list (Dossier 03 storytelling rank). Mono step labels, sans
explanation. Each step = a small numbered card; connective arrows between (stack vertically on mobile).

### 4.7 Proof beat  → §5.4, §6 — the testimonial wall (honesty-gated)
- **On-page git-log timeline** rendered from committed `commits.json` (no external repo dependency —
  it **can't 403**; §4-binding-ii, §6). Vertical rail; each item = identity tag (role color) + short
  hash + **commit subject** line. This is the destination of the "View the commits" CTA.
  - **Anchor reconciliation (Critic-A nit b):** the hero CTA and the proof beat must target **one**
    canonical anchor. Copy currently has `#proof` (hero) vs `#timeline` (proof beat) — **canonical =
    `#proof`** on the proof `<section>`; "View the commits" (hero + inline) links to `#proof`. To be
    locked with Engineer + Copywriter directly so no dead/duplicate anchor ships.
- **§6 honesty discipline — binding on the visuals:** the timeline is framed strictly as proof of
  **role-separated work** (what commit *subjects* show), **never** as proof of distinct *authorship*.
  Section header + caption say "role-prefixed commits" / "who did what by role", not "authored by N
  people". This keeps the beat airtight regardless of the Phase-3 re-attribution outcome.
  - If Coordinator+Auditor complete clean end-to-end author re-attribution (§6 ship-gate), the
    timeline + CTA ship as-is.
  - If not (§6 fallback), the author-exposing CTA is removed/relinked to the on-page view and the beat
    reframes to **transcript + dogfooding** only. *Design must support both states with no
    redesign* — so the timeline section stands on its own and the "View the commits" CTA is a single,
    easily-removed element pointing at the on-page anchor.
- **Dogfooding card:** the invite-blob-mangled-by-copy-paste → relayed-over-a2adapt-byte-for-byte
  story (§6) — honest about friction, which builds trust here (Dossier 01).

### 4.8 Team grid  → the team that built it (NOT "original four")
Responsive card grid, one per role (9). Card = role-color top-accent, identity tag, role title,
one-line "what they own". Framing: the optimized team is *the* team from day one (README §intro;
Coordinator kickoff "no original-four framing").

### 4.9 FAQ (optional)  → §7 objection handling
If used: lightweight accordion or definition list from the §7 table. **Stop here** — no comparison
tables, pricing, or blog wall (early-product trap, Dossier 03 / §9 non-goals).

### 4.10 Final CTA band  → Dossier 03 "final CTA, contrasting bg, one line, one button"
`--bg-elev` band, one motivating line, single **Install the plugin** button. Mirrors hero primary.

### 4.11 Docs renderer (keep working, restyle)  → boundary with Copywriter
Preserve the `.markdown-body` / `.docs-sidebar` / `.docs-*` contract (Copywriter authors `docs/*.md`;
Engineer's `Docs.jsx` renders; sidebar title = first `#`, order = filename numeric prefix). I own the
*styling* of these classes, not the structure.

---

## 5. States & interaction
- **Buttons:** rest / hover (`translateY(-1px)` + accent shift) / `:active` (no transform) /
  **`:focus-visible`** (2px accent ring, 2px offset). Primary = solid accent + glow; secondary/ghost =
  border, accent on hover.
- **Copy button:** `idle → copied` (label + icon swap, accent fill, `aria-live="polite"` announces
  "Copied"); reverts after ~1.6s.
- **Links:** `--accent`, underline on hover; in-prose only.
- **Nav links:** `--muted` → `--fg`; `.active` = `--fg` / accent underline.
- **Focus:** every interactive element has a visible focus ring (never `outline:none` without
  replacement). Keyboard-reachable in DOM order.

## 6. Accessibility (charter DoD — non-negotiable)
- **Contrast:** all text pairs meet WCAG AA (ratios noted in §1.1/§1.2; `--accent-ink` on `--accent`
  is AAA). `--faint` only on large/non-essential text.
- **Color never the sole signal:** identity tags always carry a **text label**; the encryption badge
  carries the word "encrypted"; timeline role conveyed by label + hash, not hue alone.
- **Semantics:** one `<h1>`; sections use `<section>` + `aria-label`/`<header><h2>`; nav is `<nav>`;
  the transcript and timeline are real, selectable text.
- **Motion:** `prefers-reduced-motion: reduce` disables reveal/decrypt/blink animations entirely.
- **Targets:** interactive hit areas ≥ 40px.

## 7. Responsive behavior
- **Wide (>1024):** centered `--max` column; two-up differentiator + how-it-works rows; multi-col
  team grid; transcript ≤ 760px.
- **Tablet (721–1024):** grids collapse to 2-col / auto-fit `minmax(280px,1fr)`.
- **Mobile (≤720):** everything single-column; how-it-works steps stack with vertical connectors;
  CTAs full-width and stacked (primary first); install block horizontally scrolls its code rather than
  wrapping mid-command; nav collapses links, keeps brand + Install.

## 8. Performance (Dossier 03/04 — speed is a competence signal)
- System-font stack (no webfont download); no icon library (inline SVG / unicode only); no animation
  lib (CSS only); accent "glow" via box-shadow not images. Background = CSS radial gradients, no raster.
- Target: the build stays lean and leak-free (Auditor's bundle gate). The look is cheap to render fast
  — that's the point (Dossier 04 §5, the 12.8 KB terminal site).

---

## 9. Structure / class contract (the API Engineer builds against — KEEP STABLE)

Engineer writes JSX consuming these classes; Designer owns their styling. Stable names so the build
doesn't churn when styling evolves. (★ = new in v2 vs the existing baseline.)

```
.nav .nav-brand .nav-mark .nav-links a[.active] .nav-cta★
.hero .eyebrow .hero-title[.accent] .hero-sub .cta-row
.btn .btn-primary .btn-ghost .btn-block★(full-width mobile)
.terminal .terminal-bar .dot .terminal-title .terminal-enc
  .terminal-body .msg .msg-route .arrow .msg-time★ .msg-text .msg-payload★ .terminal-caret .caret-line .blink
.install★ .install-well★ .install-cmd★ .install-copy★[.copied] .install-note★ .copy-toast★
.split★ (two-up differentiator/how rows) .card .card-title .card-body
.diff★ .diff-num★            (differentiator cards)
.steps★ .step★ .step-num★ .step-label★ .step-body★ .step-arrow★   (how-it-works)
.block .block-head (h2 + p)
.timeline .tl-item .tl-node .tl-card .tl-head .tl-hash .tl-summary   (role color via --id-color)
.proof-grid .proof .proof-tag .proof-body .proof-code .proof-caption   (proof-artifact cards — Engineer JSX contract)
.dogfood★ (proof anecdote card)
.team-grid .member .member-head .member-dot .member-role .member-note .member-owns★
.faq★ .faq-item★ .faq-q★ .faq-a★   (optional)
.closing .closing-line             (final CTA band → --bg-elev)
.idtag                              (--id-color inline)
.docs .docs-sidebar .markdown-body .docs-*   (preserve; restyle only)
.app .app-main .app-footer
```

**Data contracts Engineer/Copywriter own (Designer consumes shape only):**
- `commits.json` — `{hash, identity, summary|subject}` per commit, newest-first (timeline). `identity`
  null → renders `--faint` canary.
- transcript/install/diff/steps/team strings — **real copy from Copywriter**, scrubbed per README §6.
  Designer does **not** invent copy (charter "Don't").

---

## 10. Open questions for the gate / peers
1. **Copy dependency:** hero headline + subhead, install sub-line, differentiator + step copy, FAQ —
   I need Copywriter's real strings (charter: no lorem, no invented copy). Spec uses *direction*
   placeholders; final pixels wait on real lengths.
2. **§6 attribution state at ship:** the timeline section is designed to stand in **both** the
   ship-gate and fallback states with no redesign — confirm that satisfies Critic-A's self-refutation
   condition.
3. **FAQ in or out:** include the §7 objection table as an FAQ, or fold objections into the
   differentiator/how beats and stop earlier? Leaning *fold-in + skip FAQ* for restraint (§9 non-goal:
   don't over-build) — Critic/Sales call.
4. **Marketplace repo public-reachability (§4-binding-i):** flagged to Auditor/Coordinator as a
   ship dependency; design assumes a valid public identifier.
```
