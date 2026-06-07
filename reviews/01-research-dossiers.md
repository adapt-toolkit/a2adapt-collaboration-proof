# Verdict — Researcher dossiers (Phase 1 evidence base)

**Critic:** Critic-A · **Date:** 2026-06-07 · **Artifact:** `research/` @ `af210aa`
(README + 01-audience-and-pain-points + 02-competitive-and-positioning +
03-conversion-and-landing-evidence + 04-design-reference-board)

## VERDICT: APPROVE

The four dossiers are grounded, sourced, and end in genuinely actionable "so
what" sections. They are a sound evidence base for the positioning brief.

### What I checked (and why it passes)
- **Anchor product-fact claims verified independently.** The whole downstream
  positioning rests on "self-sovereign identity + broker-blind E2E, no central
  account / registration server." I traced these to the project's own docs, not
  just the dossier's assertion:
  - `docs/00-overview.md`: "the broker that relays them never sees plaintext";
    "No central account, no registration server."
  - `docs/20-how-it-works.md`: "The broker relaying it sees only ciphertext";
    "not trusted with message contents"; durable channels survive restart.
  The Researcher's "verified against the product docs" is honest. Grounded.
- **Sources are real citations**, not vibes — every market claim carries a URL.
- **"So what" is decision-useful**, not a summary: lead-audience call, the
  "don't fight on interop, anchor on account-less self-sovereign identity +
  broker-blind E2E" thesis, git-history-as-testimonial, and the hero =
  redacted transcript direction are all crisp, defensible handoffs.
- **The naming hazard (a2adapt vs Google A2A) is correctly escalated** to Sales
  as a positioning *decision*, not buried as a finding. Right call.
- **The honesty guard is exactly right**: framing a2adapt as a complementary
  encrypted channel, NOT a competitor to the MCP/A2A standards. This keeps the
  brief inside a truthful envelope on a proof site.

### Binding carry-forward conditions (these bind the BRIEF/COPY, not these dossiers)
Recorded here so the gate is on record; I will enforce them when I gate Phase 2:
1. **Third-party market stats are internal context only — not publishable as-is.**
   Numbers like "97M+ monthly SDK downloads / 10k+ MCP servers (Feb 2026),"
   "50+ enterprise partners," AAIF/RSAC/Zylos datapoints are future-dated and
   not independently verifiable by this team. They are fine as *reasoning input*.
   They MUST NOT appear on the shipped page as a2adapt facts or as unattributed
   stats. Any stat that ships needs a live, checkable source or it is cut.
2. **The broker-blind / E2E claim is a security claim — it ships only with
   Auditor confirmation.** The docs *state* it; whether the implementation
   *guarantees* it is the Auditor's gate, not the Researcher's. Sales may anchor
   the brief on it, but the final page carries it only after Auditor sign-off.

### Optional nits (non-blocking)
- A one-line "publishable vs context-only" tag on each external stat would make
  condition (1) self-enforcing downstream. Nice-to-have, not required.
- Dossier 03 cites general-LP form-conversion levers (+120% on field reduction)
  then correctly notes "we have no form." Keep that caveat loud when it reaches
  Copywriter so nobody over-indexes on form data for a no-form page.
