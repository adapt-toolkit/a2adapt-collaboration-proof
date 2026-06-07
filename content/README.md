# content/ — landing copy, source of truth

Every marketing string the visitor reads lives here, not in JSX. Engineer imports
these named exports and renders them; Designer owns the layout and slot lengths.
Owner: **Copywriter**. Gate: **Critic-A** (copy), **Sales** (positioning veto).

## Shape (`landing.js`, ESM named exports — matches Engineer's wiring import)

| Export | Renders | Fields |
|--------|---------|--------|
| `meta` | `<title>` / meta description | `title`, `description` |
| `hero` | hero block | `eyebrow`, `title[2]`, `sub`, `ctas.{primary,secondary}.{label,target}` |
| `transcript` | the signature receipt/terminal component | `title`, `lines[]` (`from`,`to`,`at`,`text`,`enc`), `caretRole`, `caretText`, `note` (provenance caption) |
| `differentiators` | second beat (preempt the A2A/MCP objection) | `heading`, `lede`, `anchors[]` (`tag`,`title`,`body`) |
| `howItWorks` | third beat — the 5-call flow | `heading`, `lede`, `steps[]` (`n`,`label`,`detail`) |
| `install` | install block + final CTA | `heading`, `lede`, `commands[2]`, `copyLabel` |
| `proof` | fourth beat — proof | `heading`, `lede` |
| `dogfooding` | the byte-exact-relay anecdote | `tag`, `title`, `body`, `code`, `caption` |
| `closing` | closing contrasting CTA block | `line`, `cta.{label,target}` |

CTA objects are `{ label, target }`. In-page targets are anchors (`#install`,
`#proof`); doc links use HashRouter (`#/docs/...`).

## Two hard constraints (do not break in the build)

1. **Install = single copy action yields BOTH lines** (brief §4 — our one
   conversion lever). `install.commands` is two lines; the copy button (`copyLabel`)
   must place the whole block on the clipboard, not one line. Impossible to miss.

2. **Proof framing is author-independent** (brief §6 hard ship-blocker). The copy
   claims **role-separated work** — what the role-prefixed commit *subjects* show —
   never distinct *authorship*. Render the timeline from committed log data
   (on-page, no external repo dependency, can't 403). The author-exposing "View the
   commits" path is gated by Coordinator/Auditor re-attribution at the Phase-3
   freeze; until then this copy stands as-is because it never claims authorship.

## Objection coverage (brief §7, folded into the beats — no FAQ wall)

A2A/MCP (#1) → `differentiators`. Broker-can't-read (#2) → `differentiators`
encryption anchor. No account (#3) → `differentiators` identity anchor.
Is-it-real (#5) → `proof`. Handshake-pain (#6) → `dogfooding` + docs/30.
File/queue (#4 — the primary buyer's default alternative, brief §2 Job-1) →
answered **explicitly** in `howItWorks.lede` ("a message bus you babysit… all
hand-rolled per project. a2adapt is all of that as a short sequence of MCP
calls"). No FAQ wall (confirmed: Coordinator + Critic-A + Sales).

## Engineer / Designer integration notes (from the Critic-A + Sales gate)

- **Anchor ids:** `hero.ctas` and `closing.cta` target `#install` and `#proof`.
  Engineer must put `id="install"` on the install section and `id="proof"` on the
  proof section, or the CTAs dead-link (the export `id` fields were dropped).
- **`#proof` must host the self-contained on-page git-log timeline** rendered from
  committed log data (brief §4(ii)/§6) — it can't 403 and it's the author-attribution
  ship-gate surface. The "View the commits" CTA must land on it. Don't drop the
  self-contained timeline in the refactor.
- **`transcript.note`** is the provenance caption (honest: representative/reconstructed)
  — render it as a small line under the transcript; required by the copy gate.
- **Ciphertext visual (Designer, polish):** a synthetic/redacted ciphertext column
  alongside the plaintext keeps the "broker sees only ciphertext" proof legible in
  the hero. Decorative — no content key needed; must stay synthetic per security.

## Security rule (manual §6, Auditor-enforced)

Synthetic / redacted placeholders only. No real hosts, paths, personal names,
IPs, ports, tokens, keys, or live invite blobs. The `code` field is an elision
placeholder (`AI8…⟨…elided⟩…`), never real bytes.
