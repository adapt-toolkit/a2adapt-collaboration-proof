# Dossier 04 — Design Reference Board

**Author:** Researcher · **Date:** 2026-06-07 · **Gate:** Critic-A
**For:** Designer (primary), Engineer

Concrete references with URLs. This is a *reference board*, not a design spec —
the Designer owns the actual system. Organized by the job each reference does for
our "receipt / terminal / proof" aesthetic.

---

## A. The "terminal / proof" aesthetic (our core visual identity)

The terminal aesthetic is having a moment and it fits us perfectly: it "signals
that you live in the command line" and "works because it's honest"
([Medium — The Terminal Aesthetic and the Return of Texture to the Web](https://medium.com/@phazeline/the-terminal-aesthetic-and-the-return-of-texture-to-the-web-ed37ee8183bd)).

- **Monospace, dark background, command-line framing.** Fonts that "feel
  physical — monospace, bitmap, pixelated" ([same](https://medium.com/@phazeline/the-terminal-aesthetic-and-the-return-of-texture-to-the-web-ed37ee8183bd)).
- **Lean and fast as part of the aesthetic:** a 12.8 KB terminal-themed site
  proves the look doesn't require weight
  ([DEV — 12.8 KB Terminal Portfolio](https://dev.to/cod-e-codes/how-i-built-my-128-kb-terminal-themed-portfolio-site-and-template-52om)).
- **Design caution:** terminal/monospace can tip into illegible-for-body-copy.
  Use mono for the *transcript/receipt* surfaces and a clean readable face for
  prose. (Background on monospace tradeoffs:
  [Lambda Land — Monospace Blogs](https://lambdaland.org/posts/2025-06-24_reading_blogs/),
  [Clifford Ressel — Drawing Monospace Text](https://clifford.ressel.fyi/blog/drawing-monospace-text/).)

**The signature device for a2adapt:** treat the agent-to-agent exchange as a
**receipt / chat transcript** rendered in a terminal frame — sender label,
timestamp, encrypted payload. It's the hero, the social proof, and the proof
conceit in one component.

## B. Reference products (layout, type, restraint)

- **Linear** — minimalist, product takes center stage, conversational + specific
  copy, subtle motion. The benchmark for "opinionated and clean."
  ([Caffeine Marketing](https://www.caffeinemarketing.com/blog/top-15-software-development-landing-page-designs),
  [Framer Blog examples](https://www.framer.com/blog/landing-page-best-practices/)).
- **Vercel** — outcome-focused hero, navigational cards segmenting visitors by
  use case, customer-logo trust band.
  ([SaaSFrame — Vercel LP](https://www.saasframe.io/examples/vercel-landing-page)).
- **Tailwind** — the canonical **code-snippet hero** for an SDK/library
  ([Evil Martians study](https://evilmartians.com/chronicles/we-studied-100-devtool-landing-pages-here-is-what-actually-works-in-2025)).
- **Supabase** — dev-infra page studied as a top reference (same study) — good
  model for documenting an infra primitive without losing warmth.

## C. Layout / motion / structure patterns to borrow

- **Centered, max-width container; generous breathing room; solid typography.**
  The converting default — avoid flashy interactions
  ([Evil Martians](https://evilmartians.com/chronicles/we-studied-100-devtool-landing-pages-here-is-what-actually-works-in-2025)).
- **Subtle motion only** (Linear-style) — animate the transcript "arriving" /
  "decrypting," not gratuitous parallax.
- **Bento or chess layout** for the feature/"how it works" band.
- **Curated devtool galleries for ongoing reference** (Designer can browse for
  specific component patterns):
  [Markepear devtool LP examples](https://www.markepear.dev/examples/landing-page),
  [Caffeine — Top 15 software dev LPs](https://www.caffeinemarketing.com/blog/top-15-software-development-landing-page-designs).

## D. Color / type direction (a starting palette to react to, not a mandate)
- **Dark base** (terminal honesty) with **one high-signal accent** for the
  "encrypted/decrypted" state and CTAs. Avoid the generic purple-gradient SaaS
  look — it reads as the buzzword aesthetic this audience distrusts.
- **Type pairing:** one crisp monospace (transcript/receipt, code, commit hashes)
  + one highly readable sans for prose. Don't set body copy in mono.
- **Texture, sparingly:** subtle scanline/grain can reinforce "terminal" without
  hurting load — but legibility and speed win every tie.

---

## So what for us
1. **Adopt a terminal/receipt visual identity** — it's the honest, on-trend
   match for a proof-by-doing product, and cheap to render fast.
2. **Build one signature component: the agent-to-agent transcript/receipt** in a
   terminal frame (sender, timestamp, redacted encrypted payload). It carries the
   hero + social proof + proof conceit simultaneously — highest-leverage thing the
   Designer can nail.
3. **Steal restraint from Linear, structure from Vercel, hero pattern from
   Tailwind.** Centered, max-width, generous space, subtle motion only.
4. **Mono for receipts/code, readable sans for prose** — and reject the
   purple-gradient SaaS default; dark + one signal accent keeps us credible.
5. **Speed is part of the look** (12.8 KB terminal site proves it) — reinforces
   the load-time-as-competence point in Dossier 03.
