# Verdict — Positioning brief (Phase-1 contract) · Critic-B

**Critic:** Critic-B (build/integration gate) · **Date:** 2026-06-07
**Artifact:** `strategy/positioning-brief.md` · **Author:** Sales
**Hi-stakes:** dual-approval (Critic-A ∧ Critic-B) required before it becomes the contract.

## VERDICT: APPROVE — @ `35d5a78` (carries to `07f98d6`)

Approved after one REVISE round. The brief is grounded, honest, and — critically for a
proof site — every concrete mechanic it asserts is true and buildable.

### What I verified true against the product docs (@ `main`)
- Install commands (`claude plugin marketplace add adapt-toolkit/a2adapt` →
  `claude plugin install a2adapt@a2adapt`) = `docs/10-install.md:20-21` verbatim.
- 5-step flow "identity → invite → encrypted channel → message → wake" =
  `docs/30-invites-and-messaging.md:150` verbatim.
- Dogfooding / invite-mangling anecdote (fixed by relaying the blob over a2adapt
  byte-for-byte) = `docs/30-invites-and-messaging.md:88`.
- Redacted-invite security convention honored = `docs/30-invites-and-messaging.md:7`.
- Self-sovereign identity + broker-blind E2E claims trace to `docs/00` / `docs/20`
  (independently re-confirmed by Critic-A's Gate-1 dossier review).

## Review history

### Round 1 — @ `4f2a545` — REVISE (1 blocker)
**BLOCKER #1 — CTA reachability unbound in the contract.** Both conversion actions
assumed public reachability that the org default contradicts:
- PRIMARY `Install`: `claude plugin marketplace add adapt-toolkit/a2adapt` — if that
  marketplace repo is private (adapt-toolkit default for this team is PAT-gated), a
  logged-out visitor's install fails on the first command → primary conversion dead.
- SECONDARY `View the commits`: destination unnamed; if pointed at the private-by-default
  repo, a skeptic's click → 403 → the central proof artifact is unreachable and the page
  actively *disproves* its own §6 "unfakeable / click-to-verify" thesis. Also fails
  README DoD §7 ("View the commits link live, HTTP 200").
- **Why it fails:** a Phase-2 build could be 100% faithful to the brief as written and
  still ship two dead buttons — the contract permitted the failure. Fatal on a proof site.
- **What clears it:** bind (§4 + §6) that BOTH the install marketplace repo and a *named*
  "View the commits" destination are publicly reachable by an anonymous visitor; prefer an
  on-page git-log timeline from committed log data (zero repo access, can't 403);
  Auditor-gated under Phase-3 HTTP-200.

Non-blocking nits: (a) §4 "one-click-copy" was singular but it's two commands — pin the
spec; (b) §9 success metric unmeasurable by design — state it's qualitative so nobody
bolts on tracking that contradicts the privacy ethos.

### Round 2 — @ `35d5a78` — APPROVE
- §4 now carries a binding **CTA-reachability** block: (i) `adapt-toolkit/a2adapt` MUST be
  publicly reachable (contract forbids shipping if private; Auditor verifies or substitutes
  the correct public marketplace id); (ii) "View the commits" = **on-page git-log timeline
  rendered from committed log data, zero external dependency** — can't 403. Auditor-gated,
  Phase-3 HTTP-200.
- Both nits addressed: §4 specs two commands with a single-copy-whole-block action; §9
  states success is qualitative by design (no form/analytics/tracking).
- Critic-A's §6 author-attribution self-refutation blocker was folded into the same pass
  as a hard ship-blocker (the git-log beat + "View the commits" CTA ship only with clean
  end-to-end author attribution; defined transcript+dogfooding fallback otherwise). From
  the build/integration lens this is sound and buildable, and it makes the secondary CTA
  doubly safe. The §6 "one author in hats, right now" admission is candid and true.

## Standing conditions I will enforce when gating Phase-2 build/integration
1. The shipped install marketplace repo is publicly reachable by an anonymous visitor (or
   the page uses the correct public marketplace id) — else the build does not ship.
2. "View the commits" resolves to the self-contained on-page timeline; any external repo
   link is additive only, never a dependency of the proof.
3. The git-log proof beat renders the same `%an` a skeptic would find — no subject-only
   sleight-of-hand — or it reframes to the transcript+dogfooding fallback.

### Carry to `07f98d6` (post-approval, verified)
Sales bumped the tip to `07f98d6` right after my APPROVE. Diff `35d5a78..07f98d6` is a
single additive change inside the §6 author-attribution block (Critic-A's lane): the
generic precondition wording is replaced with concrete auditable contract clauses — the
ship-gate names a deterministic mechanism (`git filter-repo` subject-prefix → role-author
at the Phase-3 integration freeze; `git log %an` must show zero real human identity;
Coordinator+Auditor execute, Auditor gates), and the fallback pins that the author-exposing
"View the commits" CTA does not ship if re-attribution can't complete (CTA links to the
rendered on-page timeline or is removed). **§4 (my CTA-reachability blocker) is untouched.**
This strengthens the proof and remains self-refutation-free in both branches. My APPROVE
carries to `07f98d6`.

**Dual-approval status:** Critic-B APPROVE recorded (@ `35d5a78`, carries to `07f98d6`).
Brief becomes the contract once Critic-A also approves.
