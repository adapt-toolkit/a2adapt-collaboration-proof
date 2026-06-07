# Dossier 03 — Conversion & Landing-Page Evidence

**Author:** Researcher · **Date:** 2026-06-07 · **Gate:** Critic-A
**For:** Designer, Engineer, Copywriter

Patterns shown to convert for a **technical** audience — not vibes. Primary
source is Evil Martians' study of 100+ devtool landing pages (2025), cross-checked
against general landing-page data.

---

## Hero structure (the converting default)

- **Centered layout, max-width container.** The dominant, trustworthy pattern:
  big bold headline mid-screen, supporting visual right below
  ([Evil Martians 100-page study](https://evilmartians.com/chronicles/we-studied-100-devtool-landing-pages-here-is-what-actually-works-in-2025)).
  Edge-to-edge is rarer and harder to land.
- **Hero visual options, ranked by fit for an infra product:**
  1. **Code snippet** — standard for SDKs/libraries (Tailwind does this). For
     a2adapt: the install command + the invite/send flow.
  2. **Static product UI / terminal** — Linear ships static, fast to implement.
  3. Animated UI (more work), live embed (only for narrow tools), abstract
     illustration (when no UI exists — last resort).
  - **For a2adapt the natural hero IS our proof:** a real terminal/transcript of
    two agents exchanging an (redacted) invite + first encrypted message. That's
    both "show don't tell" *and* the proof conceit.
- **Headline = opinionated + specific**, not a buzzword. Linear wins on
  "unapologetic specificity" ([Caffeine Marketing](https://www.caffeinemarketing.com/blog/top-15-software-development-landing-page-designs)).
- **Eyebrow** for momentum (release/launch). **Two CTAs** in hero: primary
  action ("Install the plugin" / "Start building" — never "Get started") + a
  secondary low-commitment path ("Read the walkthrough" / "View the commits").

## Feature storytelling (weakest → strongest, per the study)
1. Function lists (weakest — "figure it out")
2. Action-oriented ("build faster")
3. **Problem-oriented** (surface the pain first) ← strong for us
4. **Bold statements** (opinionated voice) ← strong for us, we have a POV
5. Mission-statement (rare, powerful for under-appreciated problems)

Layouts that work: full screenshots + short copy (Cline), chess/alternating
(Dust), bento grid (Decent), step-by-step for onboarding (Bun). A **"How it
works"** section explaining core mechanics (Granola) fits our docs-as-product
shape.

## Social proof — the format that's credible to engineers
- **Manually curated testimonials, styled but not live-embedded** — control
  ensures relevance ([Evil Martians](https://evilmartians.com/chronicles/we-studied-100-devtool-landing-pages-here-is-what-actually-works-in-2025)).
- For **individual-oriented / early products: big numbers beat logos** — GitHub
  stars, usage stats, awards.
  - **a2adapt has no logos or stars yet. Our social proof IS the git history** —
    real commits, real role attribution, real agent-to-agent transcript. Treat
    the commit timeline as the testimonial block. This is honest and unfakeable.
- Advanced: place a quote *next to the feature it praises* rather than in a
  dead testimonial wall.

## CTA & conversion mechanics
- **Final CTA block** on a contrasting background, one short motivating line, one
  button (Dynaboard).
- **Form length is the single biggest lever** in general LP data: cutting fields
  11→4 drove **+120% conversions**; headline optimization +27–104%
  ([Landingi](https://landingi.com/landing-page/41-best-practices/)). *We have no
  form* — our "conversion" is `claude plugin install`, so the equivalent lever is
  **making the install command copy-paste trivial and unmissable.**
- Replacing vague language with **specific metrics + polished CTAs** took one
  product from 0.1%→2.0% conversion ([Landingi](https://landingi.com/landing-page/41-best-practices/)).

## Performance (table stakes for a technical audience judging us)
- Compress images (TinyPNG, 20–40% load reduction), CDN (30–50%), browser caching
  ([Landingi](https://landingi.com/landing-page/41-best-practices/)). A devtool
  page that's slow loses the room instantly — this audience reads load time as a
  competence signal. (Note to Engineer: our Vite build + static deploy already
  helps; keep the bundle lean and leak-free per Auditor's gate.)

## What kills conversions (avoid)
- Carousels, buzzword intros, generic "Get started," unexplained
  "enterprise-grade security," credibility-theater that technical readers see
  through ([Evil Martians "how to kill conversions"](https://evilmartians.com/chronicles/how-to-kill-conversions-on-your-developer-tool-landing-page)).
- Over-complication: comparison tables / pricing / blog previews only pay off for
  mature teams; early products should stop at an FAQ.

---

## So what for us
1. **Hero = a real, redacted agent-to-agent transcript** (terminal style). It
   simultaneously satisfies "show don't tell," the proof conceit, and the
   "code-snippet hero for SDKs" pattern. Single strongest creative direction.
2. **Our conversion event is the install command, not a form.** Make
   `claude plugin install` one-click-copy and impossible to miss — that's our
   equivalent of the +120% form-shortening lever.
3. **Git history = our testimonial wall.** No fake logos/stars; the commit
   timeline with role attribution is honest social proof no competitor can copy.
4. **Copy must be opinionated and specific** (problem-first or bold-statement
   storytelling), never function-list or buzzword. Two CTAs in hero: "Install the
   plugin" + "View the commits."
5. **Ship it fast and lean** — load speed is a competence signal to this exact
   audience; don't let the proof page be slow.
