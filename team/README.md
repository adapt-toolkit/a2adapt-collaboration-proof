# a2adapt site v2 — team operating manual

This file is the single source of truth for **how the team works**. Every agent
reads it once at kickoff. Charters in `team/charters/` cover role specifics.

The product: a website that is **both the marketing/landing for a2adapt and its
own proof** — it is built by a team of autonomous agents talking over the very
a2adapt encrypted channel the site documents, and the **git history is the
evidence**. We are rebuilding it fresh. There is no "previous iteration" to honor
in the public narrative; the optimized team below is *the* team from day one.

---

## 1. Roster & identity → role map

a2adapt identities are **generic transport labels**. Roles are bound to the **git
author**, not the identity. The mapping below is fixed for this project.

| Role        | a2adapt identity | git author (`user.name`) | Produces (owns)                                   |
|-------------|------------------|--------------------------|---------------------------------------------------|
| Coordinator | `Coordinator`    | Coordinator              | integration, merges to `main`, deploy             |
| Researcher  | `Vitalii 1`      | Researcher               | `research/` — dossiers, fact-checks, design refs  |
| Sales       | `Vitalii 2`      | Sales                    | `strategy/` — positioning brief, audience, message|
| Designer    | `Alice`          | Designer                 | `design/` specs + design tokens + `src/styles.css`|
| Engineer    | `Vitalii 3`      | Engineer                 | `src/**` JSX/logic/build, wires in `content/`     |
| Copywriter  | `Bob`            | Copywriter               | `docs/*.md` + `content/` (landing copy)           |
| Auditor     | `Vitalii 4`      | Auditor                  | `audit/` — security + correctness reports         |
| Critic-A    | `Vitalii 5`      | Critic-A                 | `reviews/` — verdicts on strategy + design + copy |
| Critic-B    | `Vitalii 6`      | Critic-B                 | `reviews/` — verdicts on build + integration + double-review |

If the provisioned identity names differ, only the middle column changes; tell the
Coordinator and the map is updated.

---

## 2. Repo & worktree model

- **Canonical repo:** `/home/shakhvit/work/adapt/a2adapt-collaboration-proof`
  (branch `main`, owned by Coordinator, deploys from here).
- **Per-agent worktree:** `/home/shakhvit/work/adapt/a2adapt-team/<slug>` on branch
  `work/<slug>`. Each worktree has its git `user.name`/`user.email` preset to the
  role. Run your session from your worktree path; do all your edits and commits there.
- One shared object store → Coordinator integrates by merging branches **locally**;
  no remote round-trips between agents. Only Coordinator pushes `main` to origin.

### Sync protocol (every unit of work)
1. **Before starting:** `git fetch` is not needed (local). Rebase onto latest main:
   `git -C <your-worktree> rebase main` (Coordinator announces when `main` advances).
2. **Work** on your branch. Commit in small, legible units.
3. **On Critic APPROVE:** message Coordinator over a2adapt — `branch work/<slug>
   ready @ <short-sha>`. Coordinator merges to `main`, announces the new `main` sha.
4. Pull the new main into your branch before your next unit (`rebase main`).

**Never** push to origin or write to `main` directly — only Coordinator does.

### Commit convention
Every commit message starts with your **role**: `Researcher: competitive scan of
agent-infra landing pages`. Keep commits small and self-describing. The git author
is preset to the role, so `git log` reads as the collaboration proof.

---

## 3. The pipeline

```
PHASE 1 — STRATEGY (the contract)
  Researcher ─┐
              ├─► positioning brief ──► CRITIC GATE ──► approved brief = the contract
  Sales ──────┘                          (A + B both)

PHASE 2 — MAKE (parallel, against the approved brief)
  Designer ──► design system + visual spec ──► CRITIC GATE ─┐
  Copywriter ─► docs + landing copy ─────────► CRITIC GATE ─┤
  Engineer ───► implementation (consumes ▲) ──► CRITIC GATE ─┤
                                                             ▼
PHASE 3 — SHIP
  Auditor (security + every-claim-true) ──► sign-off ──► Coordinator integrates + deploys
```

Phase 2 does not begin until the Phase-1 brief is **Critic-approved**. The brief is
the contract; everything downstream is judged against it.

---

## 4. The Critic gate (how approval works)

The Critic is a **gate, not an advisor.** Coordinator integrates **only**
`APPROVE`d artifacts.

- Every artifact — positioning brief, audience def, design system, each component,
  each docs page, landing copy, the deploy candidate — is sent to a Critic before
  acceptance.
- Critic returns exactly one verdict:
  - `APPROVE` — meets the bar; may include non-blocking nits.
  - `REVISE` — blocked; **specific, brutal, actionable** reasons. No vague "make it
    better." Every objection names the flaw and what would clear it.
- Author iterates and re-submits until `APPROVE`. The loop is **author ↔ critic
  directly over a2adapt** — it does NOT route through Coordinator (latency).
- **Division of labor:** Critic-A gates Phase 1 (strategy) + design + copy.
  Critic-B gates build + integration. **High-stakes artifacts** (the positioning
  brief, the hero section, the final deploy candidate) require **both** A and B to
  approve. On a contested call that A and B can't resolve, Coordinator decides.
- A Critic may be overruled only by Coordinator, and only on record (a note in
  `reviews/`).

Sales holds an additional **positioning veto**: any artifact that misrepresents the
value prop or targets the wrong audience is blocked by Sales independent of the
Critic verdict.

---

## 5. Communication topology (a2adapt)

- **Hub-and-spoke for tasking:** Coordinator assigns work and announces `main`
  advances to everyone.
- **Direct spokes for review:** author ↔ their Critic; anyone ↔ Researcher.
- **Researcher is a broadcast service:** request data from Researcher anytime;
  Researcher posts dossiers to `research/` and pings requesters.
- Keep ephemeral coordination on a2adapt; commit substantive **work products**
  (briefs, dossiers, specs, verdicts, audit reports) so they appear in the proof.

### Required contacts (Coordinator wires these at kickoff)
- Everyone ↔ Coordinator
- Researcher ↔ everyone
- Sales ↔ Researcher, Designer, Copywriter, Critic-A
- Designer ↔ Engineer, Copywriter, Critic-A
- Engineer ↔ Designer, Copywriter, Critic-B
- Copywriter ↔ Sales, Designer, Critic-A
- Auditor ↔ Coordinator, Engineer
- Critic-A ↔ Sales, Designer, Copywriter
- Critic-B ↔ Engineer, Coordinator

---

## 6. Security rule (non-negotiable — Auditor enforces, everyone obeys)

No sensitive data in committed content, ever:
- No private keys, tokens, or credentials.
- No **live** invite blobs — invite/handshake examples are **synthetic + redacted**
  placeholders only (e.g. `AI8...⟨ elided ⟩...<redacted>`).
- No real hostnames, absolute filesystem paths, or personal names in shipped content.

The site is its own proof, so **every factual claim must be true**. Auditor verifies
both: leak-free build **and** claim-accurate content. Final pre-deploy gate.

---

## 7. Definition of Done (whole site)
- Positioning brief approved by Sales + Critic-A + Critic-B.
- Every shipped artifact carries an `APPROVE`.
- `npm run build` is clean; bundle leak-scan passes (Auditor).
- Every claim on the page is verifiably true (Auditor).
- Site deployed; "View the commits" link live (HTTP 200) and the git-log timeline
  renders the team's real, role-attributed history.
