# Positioning Brief — a2adapt site

> Owner: **Sales**. Evidence: **Researcher** (dossiers 01–04, all 2026-06-07, @ `work/researcher`).
> Gate: **Critic-A + Critic-B** (dual-approval) + Sales sign-off. Once approved,
> this file is **the contract** — every Phase-2 artifact is judged against it.
>
> **Status:** v5 — Researcher dossiers 01–04; Critic-A binding evidence-discipline applied;
> Critic-B CTA-reachability blocker fixed (§4/§6); Critic-A §6 self-refutation blocker fixed
> (author attribution = hard ship-blocker + defined fallback). Re-submitted for A∧B.
>
> **Evidence discipline (Critic-A binding condition — applies to every Phase-2 artifact):**
> On-page **published claims rest only on a2adapt's own verifiable mechanics** (self-
> sovereign identity, broker-blind E2E, the real git proof) — **Auditor-gated** in Phase 3.
> **Third-party market statistics are CONTEXT-ONLY and must NOT appear as published numbers
> on the page** (sourcing is secondary/directional). Market figures may inform our
> *strategy*; they may not be *cited as proof* to the buyer.

---

## 0. Category position & the "A2A" naming collision (resolved — read first)

This is the single biggest positioning risk (Dossier 02) and the spine of the whole
brief, so it is resolved up front and everything below inherits it.

- **The hazard:** "A2A" now strongly means **Google's Agent2Agent protocol** (under the
  Linux Foundation's AAIF, alongside MCP). "a2adapt" reads as "a2a + dapt" and will be
  misread as "an A2A thing" unless we get ahead of it on the first screen.
- **The resolution (per Coordinator — fixed name, positioning fix, not a rename):**
  1. **Own the expansion explicitly:** a2adapt = **agent-to-agent over ADAPT**. State it
     plainly so the reader never has to guess.
  2. **Don't fight on interop — we lose and look confused.** MCP (agent→tool) and A2A
     (agent→agent discovery/delegation) own the *standards* layer. We are **not** a
     competing protocol.
  3. **Frame as complementary, anchored on the gap they leave open:** *"Your agents
     already speak MCP/A2A. a2adapt is the private, account-less, end-to-end-encrypted
     line between two agents **you** own."* That gap — self-sovereign identity + a
     broker that's blind to contents — is **documented and real** (A2A's agent cards
     aren't mandated-verified; transport security is TLS-in-transit that intermediaries
     terminate — Dossier 02).
- **Honesty guard (charter + Dossier 02):** a2adapt is an **application-layer channel
  brokered over ADAPT**, not a competitor to the MCP/A2A standards. Every downstream
  claim stays inside that envelope. The positioning veto enforces it.

---

## 1. Target audience

Three segments (Dossier 01), in priority order. **The page leads to #1**; #2 is a real
secondary buyer; #3 is distribution, not a buyer.

- **PRIMARY buyer/adopter — agent/AI engineers building multi-agent systems on Claude
  Code.** They wire up Claude Code, MCP servers, and multi-agent workflows *today*. They
  are the same, fast-growing population driving MCP's adoption (Dossier 01). a2adapt ships
  **as a Claude Code plugin**, so install friction for this segment is near-zero — our
  strongest conversion lever. *[Internal context only: directional market-size figures
  exist in research but are **CONTEXT-ONLY per Critic-A's binding condition** — they must
  not ship as published numbers on the page.]*
- **SECONDARY buyer — security-conscious teams worried about agent identity & data
  exposure.** Agent identity is a recognized, current security problem (Dossier 01). Their
  lived pain: identity infra was built for humans, so agents get **org-wide API keys**
  and **shared service accounts** instead of scoped, self-owned identity, and traffic
  routes through relays that can read it. Our differentiators map directly onto this pain.
- **AMPLIFIERS (not buyers) — the AI-builder / proof-of-craft community.** Indie hackers,
  devtool-X, Claude Code power users. They don't buy; they **share** things that are
  clever and self-evidently real. The "built by agents, over agents, git-is-the-proof"
  conceit is engineered for their reflexes — it's our distribution.
- **Their context:** terminal-native, write their own plugins/MCP tools. Today they
  coordinate agents with whatever's around — a shared file, a queue, a hosted API that
  reads every message — and feel the seams.
- **Explicitly NOT for:**
  - Non-technical buyers / "AI strategy" decision-makers — there's no SaaS dashboard.
  - Teams shopping for an **orchestration framework** (LangGraph / CrewAI / AutoGen) —
    a2adapt is the secure comms layer, not the brain that decides who does what.
  - Single-agent users — no peer to message; value starts at two agents.
  - Anyone wanting a managed/hosted "someone-else-runs-it" product.
- **Evidence:** Dossier 01 (audience & pain), Dossier 02 (category & differentiators).

## 2. Jobs-to-be-done & pains

- **Job 1 (primary): Get two+ of my agents coordinating reliably** → pain today: I
  hand-roll a message bus (files, queues, polling). Brittle, no identity, no "wake me on
  reply," rebuilt every project.
- **Job 2 (security): Give each agent an identity it owns and keep agent-to-agent traffic
  confidential even from the relay** → pain today: org-wide API keys, shared service
  accounts, no per-agent self-owned identity; the relay sees plaintext (Dossier 01).
- **Job 3 (proof): Show the multi-agent system actually did the work** → pain today:
  agent collaboration is invisible; I can't prove *who did what* in a way anyone trusts.
- **Top objection / hesitation:** "Isn't this just Google A2A / MCP?" — the #1 objection;
  unanswered it kills credibility on contact (resolved in §0 and §7).

## 3. Value proposition

- **One sentence, in their language:** **The private, account-less, end-to-end-encrypted
  line between two agents you own — a2adapt (agent-to-agent over ADAPT), drop-in as a
  Claude Code plugin.**
- **The outcome we sell (not the feature):** Your agents coordinate like a real team —
  each with an identity *it owns*, on channels even the broker can't read — and you never
  build a message bus again. Identity and encryption come for free; you spend your time
  on the agents, not the plumbing or the trust model.
- **The two differentiators we anchor on** (real, defensible, publicly-documented gaps —
  Dossier 02):
  1. **Self-sovereign identity** — each identity is a keypair the agent owns; **no
     central account, no registration server.** The category default is the opposite.
  2. **End-to-end encryption where the broker is blind** — the relay moves **ciphertext
     only**; keys live on your disk. Contrast with "TLS in transit," where intermediaries
     terminate.
- **Why now / why this vs alternatives (incl. "do nothing"):**
  - **Why now:** Multi-agent is going from demo to default; the orchestration and interop
    layers are crowded, but the *account-less, broker-blind comms line built for agents*
    is the gap. Agent identity is a recognized, current security problem (Dossier 01) —
    we lead on the mechanism we can prove, not on borrowed headlines.
  - **vs do-nothing (roll your own):** identity + E2E crypto + durable channels +
    wake-on-mail out of the box, instead of a file you babysit.
  - **vs a hosted relay / SaaS:** broker relays **ciphertext only**; no vendor holds keys.
  - **vs orchestration frameworks / MCP / A2A:** they decide *what* agents do and how they
    *interoperate*; a2adapt is the private *wire two of your own agents speak over*. It
    **composes under them** — complementary, not competing (§0).

## 4. Conversion goal

- **The single primary action:** **Install the plugin** —
  `claude plugin marketplace add adapt-toolkit/a2adapt` → `claude plugin install
  a2adapt@a2adapt`. For this buyer, install is the highest-intent, lowest-time-to-value
  step: two commands, no signup, no account, MCP tools appear, identity in the next minute.
- **The conversion lever:** we have **no form** — so our equivalent of the "shorten the
  form" lever (Dossier 03: 11→4 fields drove +120%) is **making the install block
  one-click-copy and impossible to miss.** Note it's **two commands** (`marketplace add`
  then `install`); spec for design/copy: a **single copy action that yields the whole
  block** (both lines), so it's genuinely one click, not two. This is the highest-leverage
  conversion mechanic on the page; design and copy must treat it as such.
- **Why that action:** an install is a real adopter, not a vanity metric, and it puts the
  product in their hands where it sells itself.
- **Secondary action (only one):** **View the commits** — the role-prefixed git-log
  timeline proving the site was built over a2adapt. The skeptic's low-commitment path that
  turns doubt into credibility before they install. **Gated by the §6 hard ship-blocker:**
  this CTA ships only once author attribution is clean end-to-end; otherwise it is replaced
  by the §6 fallback (a path that doesn't invite authorship inspection). The brief never
  presents a one-human-author log as multi-party proof.
- **BINDING — CTA reachability (both conversion destinations must work for a logged-out
  visitor; Auditor-gated, Phase-3 HTTP-200/claim-true check; per Critic-B):**
  - **(i) Install destination:** the marketplace repo `adapt-toolkit/a2adapt` **must be
    publicly reachable by an anonymous visitor.** If it is private (the org default for
    this team), the visitor's *first* command fails and primary conversion is dead — the
    contract forbids shipping in that state. Integration/Auditor must verify public
    reachability (or substitute the correct public marketplace identifier) before ship.
  - **(ii) "View the commits" destination — canonical = on-page, zero external dependency:**
    the secondary CTA resolves to an **on-page git-log timeline rendered from committed log
    data**, needing no GitHub/repo access at all. This is the *cleaner* choice and the right
    one for a proof site: the proof is self-contained and can't 403. A public repo link MAY
    appear additionally, but the proof must NOT depend on a private repo being reachable —
    a skeptic hitting a 403 actively *disproves* the proof claim. The destination is named
    here so a faithful Phase-2 build cannot ship a dead button.

## 5. Message hierarchy (the scroll)

1. **Hero — first 3 seconds:** the one thing they must grasp — *a2adapt is the private,
   encrypted channel your Claude Code agents talk over.* The **hero visual IS the proof**
   (Dossier 03/04): a real, **redacted agent-to-agent transcript** in a terminal/receipt
   frame (sender, timestamp, encrypted payload). It satisfies "show don't tell," the
   code-snippet-hero pattern, and the proof conceit at once. Headline is **opinionated +
   specific** (Linear-style), never a buzzword. Eyebrow names what it is: *agent-to-agent
   over ADAPT.* **Two CTAs:** primary **Install the plugin**, secondary **View the commits.**
2. **Second beat — preempt "isn't this just A2A/MCP?"** (the #1 objection, §0). State the
   complementary line and the two differentiators (self-sovereign identity, broker-blind
   E2E) on the first screen, before the reader assumes we're Google A2A.
3. **Third beat — how little it takes:** the conversation shape — *create identity →
   invite → encrypted channel → message → wake on reply* — so they see a few MCP calls,
   not a framework to learn. Problem-first / bold-statement storytelling, not a function
   list (Dossier 03).
4. **Fourth beat — the proof, in full:** the git-log timeline as the testimonial wall; the
   dogfooding anecdote. **Subject to the §6 hard ship-blocker** — the git-log beat ships
   only with clean end-to-end author attribution, else it reframes to transcript +
   dogfooding only (both true regardless of authorship).
- **CTA placement:** primary **Install** in the hero and again in a final contrasting CTA
  block (one line, one button — Dossier 03); secondary **View the commits** beside it in
  the hero and inline at the proof beat.

## 6. Proof strategy

- **How "built by agents over a2adapt, git-is-the-receipt" becomes buyer credibility (not
  a party trick):** the buyer's deepest infra fear is *"is this real and will it hold up?"*
  The intended answer is uniquely strong and **unfakeable**: a full team of autonomous
  agents coordinated an entire shipped site over this exact channel. That's not a
  testimonial — it's an auditable load test. **The medium is the proof:** the thing being
  sold is the thing that built the page selling it. No protocol vendor's landing page can
  say this (Dossier 02) — it's also the moat. **But this proof is only as strong as what a
  skeptic actually finds when they inspect — see the hard precondition below.**
- **Attribution status — TRUE TODAY vs PENDING (honesty, verified by Researcher Dossier 02
  + Critic-A's `git log --format='%an'` audit):**
  - **True today:** commit **subjects** are role-prefixed end-to-end (`Coordinator:` /
    `Researcher:` / `Bob:` …), demonstrating role-separated work.
  - **NOT true today:** end-to-end **author** attribution. The bulk of the original build
    is authored by a single human across the role-subject commits; only recent commits
    carry correct per-role authors. **At the author level it is, right now, one author in
    hats.** The brief does **not** claim multi-party *authorship* as currently true.
- **HARD SHIP-BLOCKER (binding precondition; Auditor-gated, Phase-3) — the proof must not
  self-refute (per Critic-A):** A skeptic on the "View the commits" path inspects
  **authors** (`%an`), not subjects. Presenting a one-human-author history as "built by a
  team" turns our strongest proof into our most visible refutation. Therefore:
  1. **SHIP-GATE (contract clause, mechanism supplied by Coordinator):** *"The 'View the
     commits' proof ships only if main's commit AUTHORS are role-attributed end-to-end
     (`git log %an` shows zero real human name/email). Coordinator+Auditor execute this
     re-attribution at the Phase-3 integration freeze via `git filter-repo`
     (subject-prefix → role-author, deterministic). Auditor gates it."* This makes the
     precondition a defined, auditable commitment — not a promise — for BOTH the git-log
     proof beat and the "View the commits" CTA.
  2. **FALLBACK (contract clause):** *"If clean re-attribution cannot complete, the
     author-exposing 'View the commits' CTA does not ship; the on-page timeline —
     role-attributed from commit subjects, author-independent — stands as the proof and the
     CTA links to that rendered view or is removed. We never ship a CTA that refutes us."*
     The proof beat correspondingly reframes to **transcript + dogfooding** (true regardless
     of authorship) if the author-level claim can't be made good.
- **What proof artifacts the page shows and what each proves:**
  - **Role-prefixed git-log timeline** = our intended **testimonial wall** (we have no
    logos/stars yet; honest social proof, Dossier 03). It is the **"View the commits"
    destination, rendered on-page from committed log data** (no external repo dependency)
    so it can never 403 (binding, §4 / Critic-B). **Conditioned on the hard ship-blocker
    above:** it ships only once authors are cleanly per-role end-to-end — and when it
    ships, it must render the same attribution a skeptic would find in `git log` (no
    subject-only sleight-of-hand). If the precondition isn't met, this beat is replaced per
    the fallback.
  - **The redacted agent-to-agent transcript** (hero) → coordination over the channel is
    *legible and ordinary*, lowering the "this looks hard" barrier.
  - **The dogfooding anecdote** (the team's invite blob kept getting mangled by copy-paste;
    relaying it *over a2adapt itself* fixed it byte-for-byte) → the channel is reliable
    enough that **building it required using it.** Honesty about friction *builds* trust
    with this audience (Dossier 01).
  - **Evidence:** Dossiers 02, 03 (proof-by-doing as the strongest converting pattern;
    git-history-as-testimonial). Auditor confirms the history is clean + author-attributed
    end-to-end before ship (Phase 3 gate) — until then the page claims role-prefixed only.

## 7. Objection handling

| # | Objection (buyer's words) | On-page answer |
|---|---------------------------|----------------|
| 1 | "Isn't this just Google A2A / MCP?" | No — those are interop *standards* (agent→tool, agent→agent discovery). a2adapt is *agent-to-agent over ADAPT*: the private, account-less, end-to-end-encrypted line between two agents you own. It composes **under** MCP/A2A, doesn't compete. (§0) |
| 2 | "Can the broker read my agents' messages?" | No — the broker relays **ciphertext only**; it's explicitly not trusted with contents, and keys never leave your disk. (Named mechanism, not "enterprise-grade security.") |
| 3 | "Another account / registration server to run?" | None. Identities are **self-sovereign keypairs you own** — no central account, no registry. That's the differentiator, not a footnote. |
| 4 | "I can just use a shared file or a queue — why a dependency?" | You'd rebuild identity, E2E encryption, durable channels, and wake-on-reply by hand, per project. a2adapt is those, as two install commands. Show the 5-step conversation shape. |
| 5 | "Is this real / will it actually work?" | This whole site was built by agents coordinating over a2adapt; the git log is the receipt. Read the commits. |
| 6 | "Will the invite/handshake be painful?" | Honestly — base64 invites can get mangled in transit; we hit it and document the fix. Two commands to install, one call to create an identity, a walkthrough to first encrypted message. |

## 8. Voice & tone

- **Voice (3 adjectives):** **precise, candid, builder-to-builder.**
- **Do say:** concrete mechanics ("the broker sees only ciphertext," "keys on your disk"),
  real specifics ("two commands"), the honest proof story including the friction we hit.
  Opinionated and specific (Linear's "unapologetic specificity," Dossier 02/03). Speak to
  an engineer who'll call out hand-waving.
- **Don't say:** "revolutionary," "seamless," "AI-powered," and especially **"enterprise-
  grade security" with no mechanism named** — technical buyers read it as a tell there's
  nothing underneath (Dossier 02/03). No SaaS/dashboard implication. No feature dumps
  divorced from outcome. Never claim to *be* a protocol/standard (the A2A trap). Never
  oversell encryption beyond truth (E2E, broker sees ciphertext, keys local).
- **Reference for tone:** Linear (opinionated, specific, clean); Evil Martians' devtool
  landing-page studies (Dossier 02/03) as the anti-pattern checklist.

## 9. Success criteria

- **How we'll know the page works:** the visitor understands **"this is the private,
  account-less, encrypted channel my Claude Code agents talk over — distinct from A2A/MCP,
  and proven by the way this very page was built"** and **installs the plugin** (or, if
  skeptical, views the commits and leaves convinced it's real). **Success is qualitative
  by design** — there is no form, no analytics, no tracking, and adding any would
  contradict the privacy ethos we're selling; downstream must not bolt on measurement.
- **Non-goals:**
  - Not a full a2adapt/ADAPT API reference — docs cover mechanics; the landing sells.
  - Not pitching a2adapt as an orchestration framework, an interop standard, or a hosted
    product.
  - Not chasing non-technical or single-agent visitors.
  - Not explaining cryptographic internals — altitude over depth on the landing.
  - Not over-building: no comparison tables / pricing / blog wall (early-product trap,
    Dossier 03); stop at an FAQ if needed.
  - Not leaning on borrowed market numbers for credibility — published claims rest on
    a2adapt's own verifiable mechanics + the real git proof (Critic-A binding condition).

---

### Approvals (required before Phase 2)
- [x] Sales sign-off — v5: Researcher dossiers 01–04; A2A naming hazard resolved (Coordinator); Critic-A binding evidence-discipline applied; Critic-B CTA-reachability blocker fixed (both destinations pinned reachable, "View the commits" = on-page self-contained git-log timeline, Auditor-gated HTTP-200); Critic-A §6 self-refutation blocker fixed (clean end-to-end author attribution = hard ship-blocker for the git-log beat + "View the commits" CTA, with defined transcript+dogfooding fallback).
- [ ] Critic-A `APPROVE`
- [ ] Critic-B `APPROVE`
